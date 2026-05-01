import { Link, Outlet } from 'react-router-dom';

import { Container, Content, Header, Main, Sidebar } from './styles';

export default function Admin() {
  return (
    <Container>
      <Sidebar>
        <h2>Admin</h2>

        <nav>
          <Link to="/admin">Dashboard</Link>
          <br />
          <Link to="/admin/products">Produtos</Link>
          <br />
          <Link to="/admin/categories">Categorias</Link>
        </nav>
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
