import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../../services/api';

import {
  ActionButton,
  ActionsContainer,
  Container,
  HeaderActions,
  HeaderContent,
  ProductCard,
  ProductCardInfo,
  ProductCardMobile,
  ProductImage,
  Table,
  TableWrapper,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from './styles';

export default function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  async function loadProducts() {
    try {
      const response = await api.get('/products');
      setProducts(response.data);
    } catch (error) {
      console.log(error);
      alert('Erro ao carregar produtos');
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  async function handleDeleteProduct(id) {
    const confirmDelete = window.confirm(
      'Deseja realmente deletar este produto?',
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/products/${id}`);

      setProducts((prev) =>
        prev.filter((product) => product.id !== id && product.Id !== id),
      );

      alert('Produto deletado com sucesso!');
    } catch (error) {
      console.log(error);
      alert('Erro ao deletar produto');
    }
  }

  function formatPrice(price) {
    return (Number(price) / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  return (
    <Container>
      <HeaderActions>
        <HeaderContent>
          <h2>Produtos Cadastrados</h2>
          <p>Total de produtos: {products.length}</p>
        </HeaderContent>

        <ActionButton onClick={() => navigate('/admin/products/new')}>
          + Novo Produto
        </ActionButton>
      </HeaderActions>

      {/* DESKTOP */}
      <TableWrapper>
        <Table>
          <Thead>
            <Tr>
              <Th>Imagem</Th>
              <Th>Nome</Th>
              <Th>Preço</Th>
              <Th>Oferta</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>

          <Tbody>
            {products.map((product, index) => (
              <Tr key={product.id || product.Id || index}>
                <Td>
                  <ProductImage
                    src={`http://localhost:3001/product-file/${product.path}`}
                    alt={product.name}
                  />
                </Td>

                <Td>{product.name}</Td>

                <Td>{formatPrice(product.price)}</Td>

                <Td>{product.offer ? 'Sim' : 'Não'}</Td>

                <Td>
                  <ActionsContainer>
                    <ActionButton
                      onClick={() =>
                        navigate(
                          `/admin/products/edit/${product.id || product.Id}`,
                        )
                      }
                    >
                      Editar
                    </ActionButton>

                    <ActionButton
                      onClick={() =>
                        handleDeleteProduct(product.id || product.Id)
                      }
                    >
                      Deletar
                    </ActionButton>
                  </ActionsContainer>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableWrapper>

      {/* MOBILE */}
      <ProductCardMobile>
        {products.map((product, index) => (
          <ProductCard key={product.id || product.Id || index}>
            <ProductImage
              src={`http://localhost:3001/product-file/${product.path}`}
              alt={product.name}
            />

            <ProductCardInfo>
              <h3>{product.name}</h3>
              <p>
                <strong>Preço:</strong> {formatPrice(product.price)}
              </p>
              <p>
                <strong>Oferta:</strong> {product.offer ? 'Sim' : 'Não'}
              </p>

              <ActionsContainer>
                <ActionButton
                  onClick={() =>
                    navigate(`/admin/products/edit/${product.id || product.Id}`)
                  }
                >
                  Editar
                </ActionButton>

                <ActionButton
                  onClick={() => handleDeleteProduct(product.id || product.Id)}
                >
                  Deletar
                </ActionButton>
              </ActionsContainer>
            </ProductCardInfo>
          </ProductCard>
        ))}
      </ProductCardMobile>
    </Container>
  );
}
