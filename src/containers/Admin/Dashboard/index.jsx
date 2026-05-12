import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { Card, CardNumber, CardTitle, Container } from './styles';

export default function Dashboard() {
  const [cards, setCards] = useState([
    { title: 'Total de Produtos', value: '-' },
    { title: 'Pedidos', value: '-' },
    { title: 'Categorias', value: '-' },
    { title: 'Pedidos Finalizados', value: '-' },
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [products, orders, categories] = await Promise.all([
          api.get('/products').then((r) => r.data),
          api.get('/orders').then((r) => r.data),
          api.get('/categories').then((r) => r.data),
        ]);

        setCards([
          { title: 'Total de Produtos', value: products.length },
          { title: 'Pedidos', value: orders.filter((order) => order.status !== 'Entregue').length },
          { title: 'Categorias', value: categories.length },
          { title: 'Pedidos Finalizados', value: orders.filter((order) => order.status === 'Entregue').length },
        ]);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <Container>
      {cards.map((card) => (
        <Card key={card.title}>
          <CardTitle>{card.title}</CardTitle>
          <CardNumber>{card.value}</CardNumber>
        </Card>
      ))}
    </Container>
  );
}