import { ButtonStyled, ButtonType } from './styled';


export const Button: React.FC<{
  title: string;
  type: ButtonType;
}> = ({ title, type }) => {
  return(
    <ButtonStyled type={type}>{title}</ButtonStyled>
  );
}
