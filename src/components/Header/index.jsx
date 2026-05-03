import { ShoppingCartIcon, UserCircleIcon } from '@phosphor-icons/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/CartContext';
import { useUser } from '../../hooks/userContext';
import {
  Badge,
  Container,
  Content,
  HeaderLink,
  LinkContainer,
  Logout,
  Navigation,
  Options,
  Profile,
} from './styles';

export function Header() {
  const navigate = useNavigate();
  const { logout, userInfo } = useUser();
  const { cartProducts } = useCart();
  const { pathname } = useLocation();

  const totalItems = cartProducts.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  function logoutUser() {
    logout();
    navigate('/login');
  }

  return (
    <Container>
      <Content>
        <Navigation>
          <div>
            <HeaderLink to="/" $isActive={pathname === '/'}>
              Home
            </HeaderLink>
            <hr />
            <HeaderLink to="/cardapio" $isActive={pathname === '/cardapio'}>
              Cardápio
            </HeaderLink>
            <hr />
            <HeaderLink to="/meus-pedidos" $isActive={pathname === '/meus-pedidos'}>
              Meus Pedidos
            </HeaderLink>
          </div>
        </Navigation>

        <Options>
          <Profile>
            <UserCircleIcon color="#fff" size={24} />
            <div>
              <p>
                Olá, <span>{userInfo?.name || 'Visitante'}</span>
              </p>
              <Logout onClick={logoutUser}>Sair</Logout>
            </div>
          </Profile>

          <LinkContainer>
            <div style={{ position: 'relative' }}>
              <ShoppingCartIcon color="#fff" size={24} />
              {totalItems > 0 && (
                <Badge>{totalItems > 99 ? '99+' : totalItems}</Badge>
              )}
            </div>
            <HeaderLink to="/carrinho">Carrinho</HeaderLink>
          </LinkContainer>
        </Options>
      </Content>
    </Container>
  );
}