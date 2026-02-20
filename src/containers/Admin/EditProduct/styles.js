import styled from 'styled-components';
import ReactSelect from 'react-select';
import { Button } from '../../../components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Form = styled.form`
  border-radius: 20px;
  background-color: ${(props) => props.theme.black};
  padding: 32px;
  width: 100%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.white};
  font-size: 14px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 5px;
  padding: 0 12px;
  border: none;
  background-color: ${(props) => props.theme.gray};
  color: ${(props) => props.theme.black};
  font-size: 16px;

  &::placeholder {
    color: ${(props) => props.theme.lightGray};
  }
`;

export const LabelUpload = styled.label`
  cursor: pointer;
  border: 1px dashed ${(props) => props.theme.white};
  border-radius: 5px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: ${(props) => props.theme.white};
  font-size: 14px;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    border-color: ${(props) => props.theme.purple};
  }

  svg {
    width: 32px;
    height: 32px;
    fill: ${(props) => props.theme.white};
  }

  input[type="file"] {
    display: none;  /* esconde o input feio padrão */
  }
`;

export const FileInfo = styled.span`
  color: ${(props) => props.theme.lightGray};
  font-size: 13px;
`;

export const Select = styled(ReactSelect)`
  .react-select__control {
    background-color: ${(props) => props.theme.gray};
    border: none;
    border-radius: 5px;
    height: 48px;
    min-height: 48px;
  }

  .react-select__value-container {
    color: ${(props) => props.theme.white};
  }

  .react-select__single-value {
    color: ${(props) => props.theme.white};
  }

  .react-select__menu {
    background-color: ${(props) => props.theme.gray};
  }

  .react-select__option {
    color: ${(props) => props.theme.white};
  }
`;

export const SubmitButton = styled(Button)`
  margin-top: 32px;
  height: 48px;
`;

export const ErrorMessage = styled.span`
  color: ${(props) => props.theme.darkRed};
  font-size: 14px;
  line-height: 80%;
  font-weight: 600;
`;

export const ContainerCheckBox = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
  margin-top: 10px;

  input{
    cursor: pointer ;
  }
`;