import { useEffect, useState } from 'react';
import { Card, CardNumber, CardTitle, Container } from './styles';

const BASE_URL = 'http://localhost:3001';

export default function Dashboard() {
  const [cards, setCards] = useState([
    { title: 'Total de Produtos', value: '-' },
    { title: 'Pedidos', value: '-' },
    { title: 'Categorias', value: '-' },
    { title: 'Pedidos Finalizados', value: '-' },
  ]);

  useEffect(() => {
    const token = localStorage.getItem('@paulislanches:token');

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    async function fetchData() {
      try {
        const [products, orders, categories] = await Promise.all([
          fetch(`${BASE_URL}/products`, {
            headers,
          }).then((r) => r.json()),

          fetch(`${BASE_URL}/orders`, {
            headers,
          }).then((r) => r.json()),

          fetch(`${BASE_URL}/categories`, {
            headers,
          }).then((r) => r.json()),
        ]);

        setCards([
          {
            title: 'Total de Produtos',
            value: products.length,
          },
          {
            title: 'Pedidos',
            value: orders.length,
          },
          {
            title: 'Categorias',
            value: categories.length,
          },
          {
            title: 'Pedidos Finalizados',
            value:
              orders.filter((order) => order.status === 'done').length || 0,
          },
        ]);
      } catch (error) {
        console.log(error);
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
