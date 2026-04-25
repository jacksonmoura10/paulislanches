import { useState } from 'react';
import { useCart } from '../../../../hooks/CartContext';
import { Button, Container, Field, Row } from './styles';

export default function CartResume() {
  const { cartProducts, clearCart } = useCart();

  const [clientName, setClientName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const total = cartProducts.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  const totalItems = cartProducts.reduce((acc, product) => {
    return acc + product.quantity;
  }, 0);

  function formatCurrency(value) {
    return (value / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  function handleFinishOrder() {
    if (cartProducts.length === 0) {
      alert('Seu carrinho está vazio.');
      return;
    }

    if (!clientName || !address || !paymentMethod) {
      alert('Preencha nome, endereço e forma de pagamento.');
      return;
    }

    const productsMessage = cartProducts
      .map((product) => {
        const subtotal = product.price * product.quantity;

        return `• ${product.name}
Qtd: ${product.quantity}
Subtotal: ${formatCurrency(subtotal)}`;
      })
      .join('\n\n');

    const message = `
Olá! Gostaria de fazer um pedido.

Nome: ${clientName}
Endereço: ${address}
Pagamento: ${paymentMethod}

Itens:
${productsMessage}

Total: ${formatCurrency(total)}
`;

    const phone = '5531999999999'; // troque pelo número real
    const encodedMessage = encodeURIComponent(message);

    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');

    clearCart();
  }

  return (
    <Container>
      <h3>Resumo</h3>

      <Row>
        <span>Itens</span>
        <strong>{totalItems}</strong>
      </Row>

      <Row>
        <span>Total</span>
        <strong>{formatCurrency(total)}</strong>
      </Row>

      <Field>
        <label>Nome</label>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={clientName}
          onChange={(event) => setClientName(event.target.value)}
        />
      </Field>

      <Field>
        <label>Endereço</label>
        <input
          type="text"
          placeholder="Rua, número, bairro"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </Field>

      <Field>
        <label>Pagamento</label>
        <select
          value={paymentMethod}
          onChange={(event) => setPaymentMethod(event.target.value)}
        >
          <option value="">Selecione</option>
          <option value="Pix">Pix</option>
          <option value="Cartão">Cartão</option>
          <option value="Dinheiro">Dinheiro</option>
        </select>
      </Field>

      <Button type="button" onClick={handleFinishOrder}>
        Finalizar pelo WhatsApp
      </Button>

      <Button type="button" $secondary onClick={clearCart}>
        Limpar Carrinho
      </Button>
    </Container>
  );
}