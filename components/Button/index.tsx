import { styled, VariantProps } from '@stitches/react';
import { ReactElement, ReactNode } from 'react';
import ButtonContent, { ButtonContentStyled } from './button-content';
import ButtonIcon from './button-icon';
import ButtonOverlay, { ButtonOverlayStyled } from './button-overlay';

enum Variant {
  FILLED = 'filled',
  OUTLINED = 'outlined',
  ELEVATED = 'elevated',
  TEXT = 'text',
}

export enum Color {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}

type Props = VariantProps<typeof ButtonRoot> & {
  // HTMLAttributes<HTMLButtonElement> &
  children: ReactNode;
  leftIcon?: ReactElement<typeof ButtonIcon>;
  rightIcon?: ReactElement<typeof ButtonIcon>;
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
    [Variant.TEXT]: {
      true: {
        padding: '0 12px',
        background: 'none',
        border: 'none',
        color: '$$surface',
      },
    },
    [Variant.FILLED]: {
      true: {
        padding: '0 24px',
        color: '$$onSurface',
        backgroundColor: '$$surface',

        [`&:disabled > ${ButtonOverlayStyled}`]: {
          opacity: 0.12,
        },
      },
    },
    [Variant.OUTLINED]: {
      true: {
        padding: '0 24px',
        color: '$$surface',
        border: '1px solid $neutral-variant50',

        '&:focus': {
          borderColor: '$$surface',
        },
      },
    },
    [Variant.ELEVATED]: {
      true: {
        padding: '0 24px',
        color: '$$surface',
        backgroundColor: '$surface1',
        boxShadow: '$1',

        '&:disabled': {
          boxShadow: 'none',

          [`& > ${ButtonOverlayStyled}`]: {
            opacity: 0.12,
          },
        },
      },
    },
    color: {
      [Color.PRIMARY]: {
        $$surface: '$colors$primary40',
        $$onSurface: '$colors$primary100',
      },
      [Color.SECONDARY]: {
        $$surface: '$colors$secondary40',
        $$onSurface: '$colors$secondary100',
      },
      [Color.TERTIARY]: {
        $$surface: '$colors$tertiary40',
        $$onSurface: '$colors$tertiary100',
      },
    },
    size: {
      small: {
        height: '40px',
      },
      large: {
        height: '52px',
      },
    },
  },

  defaultVariants: {
    color: Color.PRIMARY,
    [Variant.TEXT]: true,
    size: 'large',
  },
});

const Button = ({ leftIcon, children, rightIcon, ...rest }: Props) => {
  return (
    <ButtonRoot {...rest}>
      <ButtonOverlay />

      <ButtonContent>
        {leftIcon}
        {children}
        {rightIcon}
      </ButtonContent>
    </ButtonRoot>
  );
};

export default Button;
