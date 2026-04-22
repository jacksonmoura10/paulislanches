import { useNavigate } from 'react-router-dom';

import { CategoriesCarousel } from '../../components/CategoriesCarousel';
import { OffersCarousel } from '../../components/OffersCarousel';

import { Banner, Container, Content } from './styles';

export function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Banner>
        <div>
          <h1>O melhor hambúrguer da cidade</h1>
          <p>Sabor artesanal, ingredientes de verdade</p>

          <button onClick={() => navigate('/cardapio')}>
            Ver Cardápio
          </button>
        </div>
      </Banner>

      <Content>
        <CategoriesCarousel />
        <OffersCarousel />
      </Content>
    </Container>
  );
}