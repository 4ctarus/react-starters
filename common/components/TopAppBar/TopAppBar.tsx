import { createStyles, PolymorphicComponentProps } from '@mantine/core';

interface _TopAppBarProps {
  children?: React.ReactNode;
}

export type TopAppBarProps = PolymorphicComponentProps<'div', _TopAppBarProps>;

const useStyles = createStyles((theme) => {
  const colors = theme.fn.variant({
    variant: 'filled',
    color: theme.primaryColor,
  });

  return {
    root: {
      backgroundColor: colors.background,
      color: colors.color,
      padding: 12,
    },

    child: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
    },
  };
});

export const TopAppBar = ({ children, ...rest }: TopAppBarProps) => {
  const { classes } = useStyles();

  return (
    <div className={classes.root} {...rest}>
      <div className={classes.child}>{children}</div>
    </div>
  );
};
