import React, { useState } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import { useDispatch } from 'react-redux';
import { authPost } from '../../store/authSlice/authThunk';
import { useNavigate } from 'react-router';
import { styled } from 'styled-components';
import { Typography } from '@mui/material';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlerName = (e) => setName(e.target.value);
  const handlerEmail = (e) => setEmail(e.target.value);
  const handlerPassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDate = {
      name,
      email,
      password,
    };
    dispatch(authPost({ newDate, navigate }));
    setUserName('');
    setEmail('');
    setPassword('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h1>PeacSoft</h1>
      <Input label="Имя пользователя" onChange={handlerName} value={name} />
      <Input label="Почта" onChange={handlerEmail} value={email} type="email" />
      <Input
        label="Пароль"
        onChange={handlerPassword}
        value={password}
        type="password"
      />
      <Button type="submit" variant="contained" size="large">
        SigIn
      </Button>
    </StyledForm>
  );
};

export default SignUp;

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
    font-family: sans-serif
  }
`;
