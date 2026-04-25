import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import {
  BackButton,
  Banner,
  Container,
  Grid,
  Title,
  Wrapper,
} from './styles';
import CartItems from './components/CartItems';
import CartResume from './components/CartResume';

export function Cart() {
  const navigate = useNavigate();

  return (
    <Container>
      <Banner>
        <img src={Logo} alt="logo paulislanches" />
      </Banner>

      <BackButton type="button" onClick={() => navigate(-1)}>
        ← Voltar
      </BackButton>

      <Wrapper>
        <Title>Checkout - Pedido</Title>

        <Grid>
          <CartItems />
          <CartResume />
        </Grid>
      </Wrapper>
    </Container>
  );
}