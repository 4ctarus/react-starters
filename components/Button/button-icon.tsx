import { HTMLAttributes } from 'react';
import { IconType } from 'react-icons/lib';
import { styled } from '../../themes';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = React.ComponentProps<any> &
  HTMLAttributes<HTMLElement> & {
    as: IconType;
  };

export default function ButtonIcon({ as, ...rest }: Props) {
  const ButtonIcon = styled(as, {
    width: '18px',
    height: '18px',
  });

  return <ButtonIcon {...rest} />;
}
