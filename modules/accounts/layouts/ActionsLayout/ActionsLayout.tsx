import {
  ActionIcon,
  Box,
  createStyles,
  Group,
  GroupProps,
} from '@mantine/core';
import {
  MdOutlineAddBox,
  MdOutlinePieChart,
  MdShowChart,
} from 'react-icons/md';

export type ActionsLayoutProps = GroupProps;

const useStyles = createStyles((theme) => {
  const colors = theme.fn.variant({
    variant: 'filled',
    color: theme.primaryColor,
  });

  return {
    button: {
      color: colors.background,
    },
  };
});

export const ActionsLayout = (props: ActionsLayoutProps) => {
  const { classes } = useStyles();

  function onAddClick() {
    console.log('onAddClick');
  }
  function onPieChartClick() {
    console.log('onPieChartClick');
  }
  function onChartClick() {
    console.log('onChartClick');
  }

  const actions = [
    {
      icon: MdOutlineAddBox,
      onClick: onAddClick,
    },
    {
      icon: MdOutlinePieChart,
      onClick: onPieChartClick,
    },
    {
      icon: MdShowChart,
      onClick: onChartClick,
    },
  ];

  return (
    <Group position="left" spacing="xs" {...props}>
      {actions.map(({ icon, onClick }, index) => (
        <ActionIcon
          size={40}
          key={index}
          onClick={() => onClick()}
          className={classes.button}
        >
          <Box component={icon} size={24} />
        </ActionIcon>
      ))}
    </Group>
  );
};
