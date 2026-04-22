import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import Logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { api } from '../../services/api';
import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  Link,
  RightContainer,
  Title,
} from './styles';

export function Register() {
  const navigate = useNavigate();

  const schema = yup
    .object({
      name: yup.string().required('O nome é obrigatório'),
      email: yup
        .string()
        .email('Digite um email válido')
        .required('O email é obrigatório'),
      password: yup
        .string()
        .min(6, 'A senha deve ter no mínimo 6 caracteres')
        .required('A senha é obrigatória'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
        .required('Confirme sua senha'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const { status } = await api.post(
        '/users',
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        }
      );

      if (status === 200 || status === 201) {
        toast.success('Conta criada com sucesso!');

        setTimeout(() => {
          navigate('/login');
        }, 2000);

        return;
      }

      if (status === 409) {
        toast.error('Email já cadastrado! Faça login para continuar');
        return;
      }

      throw new Error('Erro inesperado do servidor.');
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      toast.error('Falha no sistema! Tente novamente');
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-paulislanches" />
      </LeftContainer>

      <RightContainer>
        <Title>Criar Conta</Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Nome</label>
            <input type="text" autoComplete="name" {...register('name')} />
            <p>{errors?.name?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Email</label>
            <input type="email" autoComplete="email" {...register('email')} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input
              type="password"
              autoComplete="new-password"
              {...register('password')}
            />
            <p>{errors?.password?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Confirmar Senha</label>
            <input
              type="password"
              autoComplete="new-password"
              {...register('confirmPassword')}
            />
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>

          <Button type="submit">Criar Conta</Button>
        </Form>

        <p>
          Já possui conta? <Link to="/login">Clique aqui.</Link>
        </p>
      </RightContainer>
    </Container>
  );
}
