import { Link, Outlet, useNavigate } from 'react-router-dom';
import {
  BackButton,
  Container,
  Content,
  Header,
  Main,
  Sidebar,
} from './styles';

export default function Admin() {
  const navigate = useNavigate();

  return (
    <Container>
      <Sidebar>
        <h2>Admin</h2>

        <nav>
          <Link to="/admin">Dashboard</Link>
          <Link to="/admin/products">Produtos</Link>
          <Link to="/admin/categories">Categorias</Link>
          <Link to="/admin/orders">Pedidos</Link>
        </nav>

        <BackButton onClick={() => navigate('/')}>← Voltar ao Site</BackButton>
      </Sidebar>

      <Main>
        <Header>
          <h1>Painel Administrativo</h1>
        </Header>

        <Content>
          <Outlet />
        </Content>
      </Main>
    </Container>
  );
}
