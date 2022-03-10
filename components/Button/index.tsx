import { HTMLAttributes, ReactNode } from 'react';
import { IconType } from 'react-icons';
import ButtonIcon from './button-icon';

type Props = HTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  leftIcon?: IconType;
  rightIcon?: IconType;
  disabled?: boolean;
};

const Button = ({ leftIcon, children, rightIcon, ...rest }: Props) => {
  return (
    <button {...rest}>
      {leftIcon && <ButtonIcon as={leftIcon} />}
      {children}
      {rightIcon && <ButtonIcon as={rightIcon} />}
    </button>
  );
};

export default Button;
