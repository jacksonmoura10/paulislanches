import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Header } from '../../components/Header';
import {
  Container,
  EmptyMessage,
  OrderCard,
  OrderHeader,
  OrderId,
  OrderStatus,
  ProductItem,
  ProductsList,
  Title,
  TotalValue,
  Wrapper,
} from './styles';

export default function MyOrders() {
  const [orders, setOrders] = useState([]);

  async function loadOrders() {
    try {
      const response = await api.get('/orders/my-orders');
      setOrders(response.data);
    } catch (error) {
      alert('Erro ao carregar pedidos');
    }
  }

  useEffect(() => {
    loadOrders();
    const interval = setInterval(loadOrders, 10000);
    return () => clearInterval(interval);
  }, []);

  function formatCurrency(value) {
    return (Number(value) / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  function calculateTotal(products) {
    return products.reduce(
      (total, product) =>
        total + Number(product.price) * Number(product.quantity),
      0,
    );
  }

  function getStatusColor(status) {
    switch (status) {
      case 'Pedido realizado': return '#22d3ee';
      case 'Em preparação': return '#f59e0b';
      case 'Saiu para entrega': return '#8b5cf6';
      case 'Entregue': return '#22c55e';
      default: return '#cbd5e1';
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Title>Meus Pedidos</Title>

          {orders.length === 0 ? (
            <EmptyMessage>Você ainda não fez nenhum pedido.</EmptyMessage>
          ) : (
            orders.map((order) => (
              <OrderCard key={order._id}>
                <OrderHeader>
                  <OrderId>Pedido #{order._id.slice(-6)}</OrderId>
                  <OrderStatus color={getStatusColor(order.status)}>
                    {order.status}
                  </OrderStatus>
                </OrderHeader>

                <ProductsList>
                  {order.products.map((product, index) => (
                    <ProductItem key={index}>
                      <strong>{product.name}</strong>
                      <span>Qtd: {product.quantity}x</span>
                      <span>{formatCurrency(product.price)}</span>
                    </ProductItem>
                  ))}
                </ProductsList>

                <TotalValue>
                  Total: {formatCurrency(calculateTotal(order.products))}
                </TotalValue>
              </OrderCard>
            ))
          )}
        </Wrapper>
      </Container>
    </>
  );
}