import { css } from '@stitches/react';
import { createElement } from 'react';
import { IconType } from 'react-icons/lib';

interface Props {
  as: IconType;
}

const buttonIconStyle = css('button', {
  width: '18px',
  height: '18px',
});

export default function ButtonIcon({ as }: Props) {
  return createElement(as, {
    className: buttonIconStyle(),
  });
}
