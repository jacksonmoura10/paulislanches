import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import { CardProduct } from '../CardProduct';
import { Container, Title } from './styles';

export function OffersCarousel() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const { data } = await api.get('/products');

        const onlyOffers = data
          .filter((product) => product.offer)
          .map((product) => ({
            currencyValue: formatPrice(product.price),
            ...product,
          }));

        setOffers(onlyOffers);
        console.log(onlyOffers);
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      }
    }

    loadProducts();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1280, min: 690 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 690, min: 0 },
      items: 1,
    },
  };

  return (
    <Container>
      <Title>Ofertas do Dia</Title>

      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        keyBoardControl
        showDots={false}
        itemClass="carousel-items"
      >
        {offers.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </Carousel>
    </Container>
  );
}