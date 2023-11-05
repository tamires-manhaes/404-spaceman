import { ButtonHTMLAttributes, FunctionComponent } from 'react';
import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  label: string
}

const Button: FunctionComponent<ButtonProps> = ({ label, onClick }) => {
  return (
    <S.B onClick={onClick}>
      <S.Label>{label}</S.Label>
    </S.B>
  )

}

export default Button;
