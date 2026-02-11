import styled from 'styled-components';

export const BackButtonStyled = styled.button`
  position: absolute;
  bottom: -22px; /* faz ele "sair" do banner */
  left: 40px;

  background-color: #b22ee6;
  border: none;
  border-radius: 12px;

  padding: 12px 18px;

  font-size: 16px;
  font-weight: 700;
  color: #e7e1e1;

  display: flex;
  align-items: center;
  gap: 8px;

  cursor: pointer;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 10px;

  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 6px 14px;
  }
`;
