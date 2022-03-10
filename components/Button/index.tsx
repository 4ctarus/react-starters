import { HTMLAttributes, ReactNode } from 'react';
import { IconType } from 'react-icons';
import { styled } from '../../themes';
import ButtonContent, { ButtonContentStyled } from './button-content';
import ButtonIcon from './button-icon';
import ButtonOverlay, { ButtonOverlayStyled } from './button-overlay';

export enum ButtonVariant {
  FILLED = 'filled',
  OUTLINED = 'outlined',
  ELEVATED = 'elevated',
  TEXT = 'text',
}

export enum ButtonColor {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}

export enum ButtonSize {
  NORMAL = 'normal',
  LARGE = 'large',
}

type Props = React.ComponentProps<typeof ButtonRoot> &
  HTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    leftIcon?: IconType;
    rightIcon?: IconType;
    disabled?: boolean;
  };

const ButtonRoot = styled('button', {
  position: 'relative',
  borderRadius: '999px',
  overflow: 'hidden',
  cursor: 'pointer',

  [`&:hover > ${ButtonOverlayStyled}`]: {
    opacity: 0.08,
  },
  [`&:active > ${ButtonOverlayStyled}, &:focus > ${ButtonOverlayStyled}`]: {
    opacity: 0.12,
  },
  '&:disabled': {
    background: 'none',
    cursor: 'not-allowed',

    [`& > ${ButtonOverlayStyled}`]: {
      backgroundColor: '$neutral10',
      opacity: 0,
    },

    [`& > ${ButtonContentStyled}`]: {
      color: '$neutral10',
      opacity: 0.38,
    },
  },

  variants: {
    [ButtonVariant.TEXT]: {
      true: {
        padding: '0 12px',
        background: 'none',
        border: 'none',
        color: '$$surface',

        '&.left-icon': {
          padding: '0 16px 0 12px',
        },
        '&.right-icon': {
          padding: '0 12px 0 16px',
        },
      },
    },
    [ButtonVariant.FILLED]: {
      true: {
        padding: '0 24px',
        color: '$$onSurface',
        backgroundColor: '$$surface',
        border: 'none',

        '&.left-icon': {
          padding: '0 24px 0 16px',
        },
        '&.right-icon': {
          padding: '0 16px 0 24px',
        },
        [`&:disabled > ${ButtonOverlayStyled}`]: {
          opacity: 0.12,
        },
      },
    },
    [ButtonVariant.OUTLINED]: {
      true: {
        padding: '0 24px',
        color: '$$surface',
        background: 'none',
        border: '1px solid $neutral-variant50',

        '&.left-icon': {
          padding: '0 24px 0 16px',
        },
        '&.right-icon': {
          padding: '0 16px 0 24px',
        },
        '&:focus': {
          borderColor: '$$surface',
        },
      },
    },
    [ButtonVariant.ELEVATED]: {
      true: {
        padding: '0 24px',
        color: '$$surface',
        backgroundColor: '$surface1',
        boxShadow: '$1',
        border: 'none',

        '&.left-icon': {
          padding: '0 24px 0 16px',
        },
        '&.right-icon': {
          padding: '0 16px 0 24px',
        },
        '&:disabled': {
          boxShadow: 'none',

          [`& > ${ButtonOverlayStyled}`]: {
            opacity: 0.12,
          },
        },
      },
    },
    color: {
      [`${ButtonColor.PRIMARY}`]: {
        $$surface: '$colors$primary40',
        $$onSurface: '$colors$primary100',
      },
      [`${ButtonColor.SECONDARY}`]: {
        $$surface: '$colors$secondary40',
        $$onSurface: '$colors$secondary100',
      },
      [`${ButtonColor.TERTIARY}`]: {
        $$surface: '$colors$tertiary40',
        $$onSurface: '$colors$tertiary100',
      },
    },
    size: {
      [`${ButtonSize.NORMAL}`]: {
        height: '40px',
      },
      [`${ButtonSize.LARGE}`]: {
        height: '52px',
      },
    },
  },

  defaultVariants: {
    color: ButtonColor.PRIMARY,
    [ButtonVariant.TEXT]: true,
    size: ButtonSize.NORMAL,
  },
});

const Button = ({ leftIcon, children, rightIcon, ...rest }: Props) => {
  return (
    <ButtonRoot
      {...rest}
      className={leftIcon ? 'left-icon' : rightIcon ? 'right-icon' : ''}
    >
      <ButtonOverlay />

      <ButtonContent>
        {leftIcon && <ButtonIcon as={leftIcon} />}
        {children}
        {rightIcon && <ButtonIcon as={rightIcon} />}
      </ButtonContent>
    </ButtonRoot>
  );
};

export default Button;
