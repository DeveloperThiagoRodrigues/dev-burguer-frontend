import styled from 'styled-components';
import { Link as ReactLink } from 'react-router-dom';

import BackgroundLogin from '../../assets/background-Login.jpg';
import Background from '../../assets/background.png';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const LeftContainer = styled.div`
  background: url('${BackgroundLogin}') no-repeat center center;
  background-size: cover;
  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 65%;
    max-width: 380px;
    filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.35));
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const RightContainer = styled.div`
  width: 50%;
  height: 100%;
  padding: 0 5%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: linear-gradient(rgba(30, 30, 30, 0.92), rgba(30, 30, 30, 0.96)),
    url('${Background}') no-repeat center center;
  background-size: cover;

  @media (max-width: 900px) {
    width: 100%;
    padding: 0 6%;
  }
`;

export const Title = styled.h1`
  font-family: 'Road Rage', sans-serif;
  font-size: clamp(2.4rem, 5.5vw, 4.5rem);
  color: #ffffff;
  margin-bottom: 2.5rem;
  text-align: center;
  line-height: 1.15;
  letter-spacing: -0.5px;

  span {
    color: #9758ff;
    font-family: "Road Rage", sans-serif;
  }

  @media (max-width: 480px) {
    font-size: clamp(2rem, 8vw, 3.2rem);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  width: 100%;
  max-width: 420px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;

  label {
    color: #e0e0e0;
    font-size: 1.05rem;
    font-weight: 500;
  }

  input {
    height: 54px;
    padding: 0 1.1rem;
    border: 1px solid #444;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.06);
    color: white;
    font-size: 1.05rem;
    transition: all 0.2s;

    &::placeholder {
      color: #aaa;
    }

    &:focus {
      outline: none;
      border-color: #9758ff;
      box-shadow: 0 0 0 3px rgba(151, 88, 255, 0.18);
      background: rgba(255, 255, 255, 0.09);
    }
  }

  p {
    color: #ff4d4d;
    font-size: 0.9rem;
    margin-top: 0.3rem;
    min-height: 1.2rem;
  }
`;

export const Link = styled(ReactLink)`
  color: #9758ff;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    color: #b089ff;
    text-decoration: underline;
  }
`;