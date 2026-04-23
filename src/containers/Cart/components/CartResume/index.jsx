import { Button, Container, Total } from './styles';

export default function CartResume() {
  return (
    <Container>
      <h3>Resumo</h3>

      <Total>
        <span>Total</span>
        <strong>R$ 80,00</strong>
      </Total>

      <Button>Finalizar Pedido</Button>
    </Container>
  );
}
