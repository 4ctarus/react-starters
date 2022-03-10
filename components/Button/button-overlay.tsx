import { VariantProps } from '@stitches/react';
import { styled } from '../../themes';

type Props = VariantProps<typeof ButtonOverlayStyled>;

export const ButtonOverlayStyled = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'CurrentColor',
  opacity: 0,
});

const ButtonOverlay = (props: Props) => {
  return <ButtonOverlayStyled {...props} />;
};

export default ButtonOverlay;
