import HeaderLayout from '@layouts/HeaderLayout';
import { ActionIcon, Box, Title } from '@mantine/core';
import type { NextPage } from 'next';
import {
  MdOutlineAddBox,
  MdOutlinePieChart,
  MdShowChart,
} from 'react-icons/md';
import { FormattedMessage } from 'react-intl';
import ActionIconList from './components/ActionList';

const Accounts: NextPage = () => {
  function onAddClick() {
    console.log('onAddClick');
  }
  function onPieChartClick() {
    console.log('onPieChartClick');
  }
  function onChartClick() {
    console.log('onChartClick');
  }

  const mainActions = [
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
    <>
      <HeaderLayout />

      <Box
        sx={(theme) => ({
          padding: theme.spacing.md,
          display: 'flex',
          flexDirection: 'column',
          gap: theme.spacing.md,
        })}
      >
        <ActionIconList>
          {mainActions.map(({ icon, onClick }, index) => (
            <ActionIcon size="xl" key={index} onClick={() => onClick()}>
              <Box component={icon} size={32} />
            </ActionIcon>
          ))}
        </ActionIconList>

        <Box
          sx={(theme) => ({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: theme.spacing.sm,
            color: theme.primaryColor,
          })}
        >
          <Title order={4}>
            <FormattedMessage
              description="accounts total"
              defaultMessage="Total de mes avoirs"
            />
          </Title>
          <Title order={4}>15 850 $</Title>
        </Box>
      </Box>
    </>
  );
};

export default Accounts;
