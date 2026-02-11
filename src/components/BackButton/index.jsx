import { useNavigate } from 'react-router-dom';
import { BackButtonStyled } from './styles';

export function BackButton() {
  const navigate = useNavigate();

  return (
    <BackButtonStyled type="button" onClick={() => navigate('/', { replace: true })}>
      ← Voltar
    </BackButtonStyled>
  );
}