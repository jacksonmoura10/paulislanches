import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../../services/api';

import { Button, Container, Form, InputGroup } from './styles';

export default function EditCategories() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [file, setFile] = useState(null);

  useEffect(() => {
    async function loadCategory() {
      try {
        const response = await api.get('/categories');

        const category = response.data.find(
          (item) => item.id == id || item.Id == id,
        );

        if (category) {
          setName(category.name || category.Name);
        }
      } catch (error) {
        console.log(error);
        alert('Erro ao carregar categoria');
      }
    }

    loadCategory();
  }, [id]);

  async function handleUpdateCategories(e) {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', name);

      if (file) {
        formData.append('file', file);
      }

      await api.put(`/categories/${id}`, formData);

      alert('Categoria atualizada com sucesso!');
      navigate('/admin/categories');
    } catch (error) {
      console.log(error);
      alert('Erro ao atualizar categoria');
    }
  }

  return (
    <Container>
      <h2>Editar Categoria</h2>

      <Form onSubmit={handleUpdateCategories}>
        <InputGroup>
          <label>Nome</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </InputGroup>

        <InputGroup>
          <label>Nova imagem</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </InputGroup>

        <Button type="submit">Salvar Alterações</Button>
      </Form>
    </Container>
  );
}
