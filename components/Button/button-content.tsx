import { VariantProps } from '@stitches/react';
import { ReactNode } from 'react';
import { styled } from '../../themes';

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
  typeface: 'label-large',
});

const ButtonContent = (props: Props) => {
  return <ButtonContentStyled {...props} />;
};

export default ButtonContent;
