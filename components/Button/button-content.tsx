import { styled, VariantProps } from '@stitches/react';
import { ReactNode } from 'react';

type Props = VariantProps<typeof ButtonContentStyled> & {
  children: ReactNode;
};

export const ButtonContentStyled = styled('div', {
  position: 'relative',
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  height: '100%',
});

const ButtonContent = (props: Props) => {
  return <ButtonContentStyled {...props} />;
};

export default ButtonContent;
