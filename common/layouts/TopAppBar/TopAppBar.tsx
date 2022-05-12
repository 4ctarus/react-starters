import {
  ActionIcon,
  Box,
  createStyles,
  Group,
  GroupProps,
} from '@mantine/core';
import { MdOutlinePerson } from 'react-icons/md';

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
  };
});

export const TopAppBar = (props: TopAppBarProps) => {
  const { classes } = useStyles();

  function onUserClick() {
    console.log('onUserClick');
  }

  return (
    <Group position="apart" spacing="xs" className={classes.root} {...props}>
      <Box
        sx={() => ({
          width: 40,
        })}
      ></Box>
      <span>Piloth</span>
      <ActionIcon variant="filled" size="xl" onClick={() => onUserClick()}>
        <MdOutlinePerson size={32} />
      </ActionIcon>
    </Group>
  );
};
