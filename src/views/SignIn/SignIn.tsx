import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { Button } from 'shared/components';
import { Form, Input } from 'shared/components/Form';
import { SignInDto } from 'shared/dtos';
import { userService } from 'shared/services';
import { authActions } from 'shared/store';
import {
  ErrorNote,
  LinkButton,
  RegisterInfo,
  SignInBackground,
  SignInForm,
  SignInFormContent,
  SignInInputs,
  SignInTitle,
} from './styled';

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignIn = (data: any) => {
    setLoading(true);

    const signIn: SignInDto = {
      login: data.email,
      password: data.password,
    };

    userService
      .signin(signIn)
      .then((res) => {
        dispatch(authActions.signin(res));
        setLoading(false);
        navigate('/');
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  };

  const onSubmit = handleSubmit((data) => handleSignIn(data));

  useEffect(() => {
    register('email', {
      required: true,
      pattern: {
        value: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)?$/i,
        message: 'Email inválido',
      },
    });
    register('password', {
      required: true,
    });
  }, [register]);

  return (
    <SignInBackground>
      <Form onSubmit={onSubmit}>
        <SignInForm>
          <SignInFormContent>
            <SignInTitle>Entre em sua conta</SignInTitle>
            <SignInInputs>
              <Input
                name="email"
                label="Email"
                placeholder="insira o seu email"
                control={control}
                type="email"
                errors={errors.email}
              />
              <Input
                name="password"
                label="Senha"
                placeholder="insira a sua senha"
                control={control}
                type="password"
                errors={errors.password}
              />
              {error && <ErrorNote>Email ou senha incorretos</ErrorNote>}
              <Button type="submit" width="100%" loading={loading}>
                login
              </Button>
              <RegisterInfo>
                Ainda não é cadastrado?
                <LinkButton onClick={() => navigate('/cadastro')}>
                  Cadastre-se
                </LinkButton>
              </RegisterInfo>
            </SignInInputs>
          </SignInFormContent>
        </SignInForm>
      </Form>
    </SignInBackground>
  );
};

export default SignIn;
