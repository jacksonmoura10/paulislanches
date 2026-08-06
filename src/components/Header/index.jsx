import {
  ListIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  XIcon,
} from '@phosphor-icons/react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/CartContext';
import { useUser } from '../../hooks/UserContext';
import {
  Badge,
  Container,
  Content,
  HeaderLink,
  LinkContainer,
  Logout,
  MenuButton,
  MobileMenu,
  MobileMenuDivider,
  MobileProfile,
  Navigation,
  Options,
  Profile,
} from './styles';

export function Header() {
  const navigate = useNavigate();
  const { logout, userInfo } = useUser();
  const { cartProducts } = useCart();
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const totalItems = cartProducts.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  function logoutUser() {
    logout();
    navigate('/login');
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <Container>
      <Content>
        <MenuButton onClick={() => setIsMenuOpen((prev) => !prev)}>
          {isMenuOpen ? <XIcon size={26} /> : <ListIcon size={26} />}
        </MenuButton>

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
            <HeaderLink
              to="/meus-pedidos"
              $isActive={pathname === '/meus-pedidos'}
            >
              Meus Pedidos
            </HeaderLink>
          </div>
        </Navigation>

        <Options>
          <Profile>
            <UserCircleIcon color="#fff" size={24} />
            <div>
              <p>
                <span className="greeting">Olá, </span>
                <span>{userInfo?.name || 'Visitante'}</span>
              </p>
              <Logout onClick={logoutUser}>Sair</Logout>
            </div>
          </Profile>

          <LinkContainer>
            <HeaderLink to="/carrinho">
              <div style={{ position: 'relative' }}>
                <ShoppingCartIcon color="#fff" size={24} />
                {totalItems > 0 && (
                  <Badge>{totalItems > 99 ? '99+' : totalItems}</Badge>
                )}
              </div>
              <span className="link-text">Carrinho</span>
            </HeaderLink>
          </LinkContainer>
        </Options>
      </Content>

      {isMenuOpen && (
        <MobileMenu>
          <MobileProfile>
            <UserCircleIcon color="#fff" size={28} />
            <div>
              <p>
                Olá, <span>{userInfo?.name || 'Visitante'}</span>
              </p>
              <Logout onClick={logoutUser}>Sair</Logout>
            </div>
          </MobileProfile>

          <MobileMenuDivider />

          <HeaderLink to="/" $isActive={pathname === '/'} onClick={closeMenu}>
            Home
          </HeaderLink>
          <HeaderLink
            to="/cardapio"
            $isActive={pathname === '/cardapio'}
            onClick={closeMenu}
          >
            Cardápio
          </HeaderLink>
          <HeaderLink
            to="/meus-pedidos"
            $isActive={pathname === '/meus-pedidos'}
            onClick={closeMenu}
          >
            Meus Pedidos
          </HeaderLink>
        </MobileMenu>
      )}
    </Container>
  );
}