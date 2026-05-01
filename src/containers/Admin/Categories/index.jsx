import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../../services/api';

import {
  ActionButton,
  ActionsContainer,
  Container,
  HeaderActions,
  HeaderContent,
  CategoryCard,
  CategoryCardInfo,
  CategoryCardMobile,
  CategoryImage,
  Table,
  TableWrapper,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from './styles';

export default function Categories() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  async function loadCategories() {
    try {
      const response = await api.get('/categories');
      setCategories(response.data);
    } catch (error) {
      console.log(error);
      alert('Erro ao carregar categorias');
    }
  }

  useEffect(() => {
    loadCategories();
  }, []);

  async function handleDeleteCategory(id) {
    const confirmDelete = window.confirm(
      'Deseja realmente deletar esta categoria?',
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/categories/${id}`);

      setCategories((prev) =>
        prev.filter(
          (category) =>
            category.id !== id &&
            category.Id !== id,
        ),
      );

      alert('Categoria deletada com sucesso!');
    } catch (error) {
      console.log(error);
      alert('Erro ao deletar categoria');
    }
  }

  return (
    <Container>
      <HeaderActions>
        <HeaderContent>
          <h2>Categorias Cadastradas</h2>
          <p>Total de categorias: {categories.length}</p>
        </HeaderContent>

        <ActionButton
          onClick={() =>
            navigate('/admin/categories/new')
          }
        >
          + Nova Categoria
        </ActionButton>
      </HeaderActions>

      {/* DESKTOP */}
      <TableWrapper>
        <Table>
          <Thead>
            <Tr>
              <Th>Imagem</Th>
              <Th>Nome</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>

          <Tbody>
            {categories.map((category, index) => (
              <Tr
                key={
                  category.id ||
                  category.Id ||
                  index
                }
              >
                <Td>
                  <CategoryImage
                    src={`http://localhost:3001/category-file/${category.path}`}
                    alt={category.name}
                  />
                </Td>

                <Td>{category.name}</Td>

                <Td>
                  <ActionsContainer>
                    <ActionButton
                      onClick={() =>
                        navigate(
                          `/admin/categories/edit/${
                            category.id ||
                            category.Id
                          }`,
                        )
                      }
                    >
                      Editar
                    </ActionButton>

                    <ActionButton
                      onClick={() =>
                        handleDeleteCategory(
                          category.id ||
                            category.Id,
                        )
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
      <CategoryCardMobile>
        {categories.map((category, index) => (
          <CategoryCard
            key={
              category.id ||
              category.Id ||
              index
            }
          >
            <CategoryImage
              src={`http://localhost:3001/category-file/${category.path}`}
              alt={category.name}
            />

            <CategoryCardInfo>
              <h3>{category.name}</h3>

              <ActionsContainer>
                <ActionButton
                  onClick={() =>
                    navigate(
                      `/admin/categories/edit/${
                        category.id ||
                        category.Id
                      }`,
                    )
                  }
                >
                  Editar
                </ActionButton>

                <ActionButton
                  onClick={() =>
                    handleDeleteCategory(
                      category.id ||
                        category.Id,
                    )
                  }
                >
                  Deletar
                </ActionButton>
              </ActionsContainer>
            </CategoryCardInfo>
          </CategoryCard>
        ))}
      </CategoryCardMobile>
    </Container>
  );
}