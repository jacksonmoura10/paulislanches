import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { CardProduct } from '../../components/CardProduct';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';

import {
  BackButton,
  Banner,
  CategoryButton,
  CategoryMenu,
  Container,
  ProductsContainer,
} from './styles';

export function Menu() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [queryParams] = useSearchParams();
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState(() => {
    const categoryId = Number(queryParams.get('categorias'));
    return categoryId || 0;
  });

  useEffect(() => {
    async function loadCategories() {
      try {
        const response = await api.get('/categories');
        const newCategories = [{ id: 0, name: 'Todas' }, ...response.data];
        setCategories(newCategories);
      } catch (error) {
        console.error('Erro ao carregar categorias:', error);
      }
    }

    async function loadProducts() {
      try {
        const response = await api.get('/products');

        const newProducts = response.data.map((product) => ({
          ...product,
          currencyValue: formatPrice(product.price),
        }));

        setProducts(newProducts);
        setFilteredProducts(newProducts);
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      }
    }

    loadCategories();
    loadProducts();
  }, []);

  useEffect(() => {
    const categoryId = Number(queryParams.get('categorias'));
    setActiveCategory(categoryId || 0);
  }, [queryParams]);

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products);
    } else {
      const newFilteredProducts = products.filter(
        (product) => product.category_id === activeCategory,
      );

      setFilteredProducts(newFilteredProducts);
    }
  }, [products, activeCategory]);

  return (
    <Container>
      <Banner>
        <div>
          <h1>
            O MELHOR
            <br />
            HAMBÚRGUER
            <br />
            ESTÁ AQUI!
          </h1>

          <p>Esse cardápio está irresistível!</p>
        </div>
      </Banner>

      <BackButton type="button" onClick={() => navigate(-1)}>
        Voltar
      </BackButton>

      <CategoryMenu>
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            type="button"
            $isActiveCategory={category.id === activeCategory}
            onClick={() => {
              setActiveCategory(category.id);

              navigate(
                category.id === 0
                  ? '/cardapio'
                  : `/cardapio?categorias=${category.id}`,
                { replace: true },
              );
            }}
          >
            {category.name}
          </CategoryButton>
        ))}
      </CategoryMenu>

      <ProductsContainer>
        {filteredProducts.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </Container>
  );
}
