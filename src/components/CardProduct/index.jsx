import PropTypes from 'prop-types';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../../hooks/CartContext';

import { CartButton } from '../CartButton';

import { CardImage, Container, ImageContainer } from './styles';

export function CardProduct({ product }) {
  const { putProductInCart } = useCart();

  function handleAddToCart() {
    putProductInCart(product);
  }

  return (
    <Container>
      <ImageContainer>
        <CardImage src={product.url} alt={product.name} />
      </ImageContainer>

      <div className="info">
        <p>{product.name}</p>
        <strong>{product.currencyValue}</strong>
      </div>

      <CartButton onClick={handleAddToCart}>
        <FiShoppingCart />
        Adicionar
      </CartButton>
    </Container>
  );
}

CardProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currencyValue: PropTypes.string.isRequired,
    url: PropTypes.string,
  }),
};