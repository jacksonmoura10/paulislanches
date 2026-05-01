import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../../services/api';

import { Button, Container, Form, InputGroup } from './styles';

export default function CreateCategories() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [file, setFile] = useState(null);

  async function handleCreateCategories(e) {
    e.preventDefault();

    if (!file) {
      return alert('Selecione uma imagem da categoria');
    }

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('file', file);

      await api.post('/categories', formData);

      alert('Categoria criada com sucesso!');
      navigate('/admin/categories');
    } catch (error) {
      console.log(error);
      alert('Erro ao criar categoria');
    }
  }

  return (
    <Container>
      <h2>Nova Categoria</h2>

      <Form onSubmit={handleCreateCategories}>
        <InputGroup>
          <label>Nome</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </InputGroup>

        <InputGroup>
          <label>Imagem</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </InputGroup>

        <Button type="submit">Cadastrar Categoria</Button>
      </Form>
    </Container>
  );
}
