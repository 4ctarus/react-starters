import { createElement } from 'react';
import { IconType } from 'react-icons/lib';

interface Props {
  as: IconType;
}

export default function ButtonIcon({ as }: Props) {
  return createElement(as);
}
