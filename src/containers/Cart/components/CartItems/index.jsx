import { useCart } from '../../../../hooks/CartContext';
import {
  Actions,
  Container,
  EmptyCart,
  Image,
  Info,
  Item,
  Name,
  Price,
  Quantity,
  RemoveButton,
} from './styles';

export default function CartItems() {
  const { cartProducts, increaseProduct, decreaseProduct, deleteProduct } =
    useCart();

  return (
    <Container>
      <h3>Seus itens</h3>

      {cartProducts.length === 0 && (
        <EmptyCart>Seu carrinho está vazio.</EmptyCart>
      )}

      {cartProducts.map((product) => (
        <Item key={product.id}>
          <Image src={product.url} alt={product.name} />

          <Info>
            <Name>{product.name}</Name>
            <Quantity>Quantidade: {product.quantity}</Quantity>
          </Info>

          <Actions>
            <button type="button" onClick={() => decreaseProduct(product.id)}>
              -
            </button>

            <span>{product.quantity}</span>

            <button type="button" onClick={() => increaseProduct(product.id)}>
              +
            </button>

            <RemoveButton
              type="button"
              onClick={() => deleteProduct(product.id)}
            >
              Remover
            </RemoveButton>
          </Actions>

          <Price>
            {((product.price * product.quantity) / 100).toLocaleString(
              'pt-BR',
              {
                style: 'currency',
                currency: 'BRL',
              }
            )}
          </Price>
        </Item>
      ))}
    </Container>
  );
}