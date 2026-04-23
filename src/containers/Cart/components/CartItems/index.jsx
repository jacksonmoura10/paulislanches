import { Container, Item, Info, Name, Quantity, Price } from './styles';

export default function CartItems() {
  return (
    <Container>
      <h3>Seus itens</h3>

      <Item>
        <Info>
          <Name>Hambúrguer X</Name>
          <Quantity>Qtd: 2</Quantity>
        </Info>

        <Price>R$ 40,00</Price>
      </Item>

      <Item>
        <Info>
          <Name>Batata Frita</Name>
          <Quantity>Qtd: 1</Quantity>
        </Info>

        <Price>R$ 15,00</Price>
      </Item>
    </Container>
  );
}