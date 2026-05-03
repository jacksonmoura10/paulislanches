import { useEffect, useState } from 'react';
import { api } from '../../../services/api';

import {
  Container,
  CustomerName,
  OrderCard,
  OrderHeader,
  ProductItem,
  ProductsList,
  StatusSelect,
  TotalValue,
} from './styles';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  async function loadOrders() {
    try {
      const response = await api.get('/orders');
      setOrders(response.data.filter((order) => order.status !== 'Entregue'));
    } catch (error) {
      console.log(error);
      alert('Erro ao carregar pedidos');
    }
  }

  useEffect(() => {
    loadOrders();

    const interval = setInterval(loadOrders, 10000);

    return () => clearInterval(interval);
  }, []);

  async function handleChangeStatus(id, status) {
    try {
      await api.put(`/orders/${id}`, { status });

      if (status === 'Entregue') {
        setOrders((prev) => prev.filter((order) => order._id !== id));
      } else {
        setOrders((prev) =>
          prev.map((order) =>
            order._id === id ? { ...order, status } : order,
          ),
        );
      }

      alert('Status atualizado com sucesso!');
    } catch (error) {
      console.log(error);
      alert('Erro ao atualizar status');
    }
  }

  function calculateTotal(products) {
    return products.reduce(
      (total, product) =>
        total + Number(product.price) * Number(product.quantity),
      0,
    );
  }

  function formatCurrency(value) {
    return (Number(value) / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  return (
    <Container>
      <h2>Pedidos</h2>

      <p>Total de pedidos: {orders.length}</p>

      {orders.map((order) => (
        <OrderCard key={order._id}>
          <OrderHeader>
            <div>
              <strong>Pedido #{order._id.slice(-6)}</strong>
              <CustomerName>Cliente: {order.user.name}</CustomerName>
            </div>

            <StatusSelect
              value={order.status}
              onChange={(e) => handleChangeStatus(order._id, e.target.value)}
            >
              <option value="Pedido realizado">Pedido realizado</option>
              <option value="Em preparação">Em preparação</option>
              <option value="Saiu para entrega">Saiu para entrega</option>
              <option value="Entregue">Entregue</option>
            </StatusSelect>
          </OrderHeader>

          <ProductsList>
            {order.products.map((product, index) => (
              <ProductItem key={index}>
                <div>
                  <strong>{product.name}</strong>
                </div>
                <div>Quantidade: {product.quantity}x</div>
                <div>Valor: {formatCurrency(product.price)}</div>
              </ProductItem>
            ))}
          </ProductsList>

          <TotalValue>
            Total: {formatCurrency(calculateTotal(order.products))}
          </TotalValue>
        </OrderCard>
      ))}
    </Container>
  );
}
