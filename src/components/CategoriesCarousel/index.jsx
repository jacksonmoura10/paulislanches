import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';
import { CategoryButton, Container, ContainerItems, Title } from './styles';

export function CategoriesCarousel() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadCategories() {
      try {
        const { data } = await api.get('/categories');
        setCategories(data);
      } catch (error) {
        console.error('Erro ao carregar categorias:', error);
      }
    }

    loadCategories();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1600 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1600, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  function handleNavigate(categoryId) {
    navigate({
      pathname: '/cardapio',
      search: `?categorias=${categoryId}`,
    });
  }

  if (!categories.length) {
    return null;
  }

  return (
    <Container>
      <Title>Categorias</Title>

      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3500}
        keyBoardControl
        showDots={false}
        itemClass="carousel-items"
      >
        {categories.map((category) => (
          <ContainerItems key={category.id} $imageURL={category.url}>
            <CategoryButton onClick={() => handleNavigate(category.id)}>
              {category.name}
            </CategoryButton>
          </ContainerItems>
        ))}
      </Carousel>
    </Container>
  );
}

