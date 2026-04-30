import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import Logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { useUser } from '../../hooks/userContext';
import { api } from '../../services/api';

import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  Link,
  RightContainer,
  Subtitle,
  Title,
} from './styles';

export function Login() {
  const navigate = useNavigate();
  const { putUserData } = useUser();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Digite um email válido')
      .required('O email é obrigatório'),

    password: yup
      .string()
      .min(6, 'A senha deve ter no mínimo 6 caracteres')
      .required('A senha é obrigatória'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const toastId = toast.loading('Verificando seus dados...');

    try {
      const response = await api.post('/sessions', {
        email: data.email,
        password: data.password,
      });
      console.log('resposta login:', response.data);

      const { token, ...userData } = response.data;
      console.log(userData);
      console.log(userData.admin);

      // salva token
      localStorage.setItem('@paulislanches:token', token);

      // salva dados do usuário
      localStorage.setItem(
        '@paulislanches:user',
        JSON.stringify(userData)
      );

      // salva no context
      putUserData({
        token,
        ...userData,
      });

      toast.update(toastId, {
        render: 'Seja Bem-Vindo(a)!',
        type: 'success',
        isLoading: false,
        autoClose: 2000,
      });

      // verifica se é admin
      if (userData.admin) {
        navigate('/admin');
      } else {
        navigate('/');
      }

    } catch (error) {
      toast.update(toastId, {
        render:
          error?.response?.data?.error ||
          'Erro ao fazer login.',
        type: 'error',
        isLoading: false,
        autoClose: 4000,
      });
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-paulislanches" />
      </LeftContainer>

      <RightContainer>
        <Title>
          Olá, seja bem-vindo ao <span>Paulislanches!</span>
        </Title>

        <Subtitle>
          Acesse com login e senha.
        </Subtitle>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input
              type="email"
              placeholder="Digite seu email"
              {...register('email')}
            />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              {...register('password')}
            />
            <p>{errors?.password?.message}</p>
          </InputContainer>

          <Button type="submit">
            Entrar
          </Button>
        </Form>

        <p>
          Não possui conta?
          <Link to="/cadastro">
            Clique aqui.
          </Link>
        </p>
      </RightContainer>
    </Container>
  );
}