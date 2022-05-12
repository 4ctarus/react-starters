import { Box, createStyles, Group, GroupProps } from '@mantine/core';

export type TopAppBarProps = GroupProps;

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
    spacer: {
      width: 40,
    },
  };
});

export const TopAppBar = ({ children, ...rest }: TopAppBarProps) => {
  const { classes } = useStyles();

  return (
    <Group position="apart" spacing="xs" className={classes.root} {...rest}>
      <Box className={classes.spacer}></Box>
      {children}
    </Group>
  );
};
