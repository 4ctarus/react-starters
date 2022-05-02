import { Button as MantineBtn, ButtonProps, createStyles } from '@mantine/core';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = ButtonProps<any>;

const useStyles = ({ leftIcon, rightIcon }: Props) => {
  return createStyles((theme, _params, getRef) => ({
    root: {
      borderRadius: 999,
      height: 40,
      fontWeight: 'normal',
    },

    subtle: {
      paddingRight: rightIcon ? 12 : 16,
      paddingLeft: leftIcon ? 12 : 16,
    },
    filled: {
      paddingRight: rightIcon ? 16 : 24,
      paddingLeft: leftIcon ? 16 : 24,
    },

    icon: {
      fontSize: 18,
    },
    leftIcon: {
      marginRight: 8,
    },
    rightIcon: {
      marginLeft: 8,
    },
  }));
};

const Button = (props: Props) => {
  const { classes } = useStyles(props)();

  return <MantineBtn classNames={classes} {...props} />;
};

export default Button;
