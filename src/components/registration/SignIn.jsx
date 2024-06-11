import React, { useState } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import { useDispatch } from 'react-redux';
import { authPostIn } from '../../store/authSlice/authThunk';
import { useNavigate } from 'react-router';
import { styled } from 'styled-components';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlerEmail = (e) => setEmail(e.target.value);
  const handlerPassword = (e) => setPassword(e.target.value);

  const handlerSubmit = (e) => {
    e.preventDefault();
    const newDate = {
      email,
      password,
    };
    dispatch(authPostIn({ newDate, navigate }));
  };

  return (
    <StyledForm onSubmit={handlerSubmit}>
      <h1>PeacSoft</h1>
      <Input label="Почта" value={email} onChange={handlerEmail} />
      <Input
        label="Пороль"
        value={password}
        onChange={handlerPassword}
        type="password"
      />
      <Button type="submit" variant='outlined'>Войти</Button>
    </StyledForm>
  );
};

export default SignIn;

const StyledForm = styled.form`
  width: 400px;
  min-height: 450px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  padding: 30px 30px;
  justify-content: space-between;
  border-radius: 10px;
  input {
    margin-top: 10px;
  }
  h1 {
    font-size: 55px;
    text-align: center;
    font-family: sans-serif;
  }
`;
