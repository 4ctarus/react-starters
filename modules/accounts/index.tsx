import {
  ActionIcon,
  Box,
  createStyles,
  Group,
  Stack,
  Text,
} from '@mantine/core';
import type { NextPage } from 'next';
import { useState } from 'react';
import {
  MdOutlineAddBox,
  MdOutlinePieChart,
  MdShowChart,
} from 'react-icons/md';
import { FormattedMessage } from 'react-intl';
import AccountCard from './components/AccountCard';
import { Account } from './types';

const useStyles = createStyles((theme) => {
  const colors = theme.fn.variant({
    variant: 'filled',
    color: theme.primaryColor,
  });

  return {
    action: {
      color: colors.background,
    },
    text: {
      color: colors.background,
    },
  };
});

const Accounts: NextPage = () => {
  const { classes } = useStyles();

  const initialAccount: Account[] = [
    {
      bank: 'Credit agricole',
      label: 'Compte chèque',
      number: '123456789',
      total: 1000,
    },
    {
      bank: 'Credit agricole',
      label: 'Livret A',
      number: '123456789',
      total: 2580,
    },
    {
      bank: 'Credit agricole',
      label: 'Compte chèque',
      number: '123456789',
      total: 3620,
    },
  ];

  const [accounts, setAccounts] = useState(initialAccount);

  const accountTotal = accounts.reduce((total, account) => {
    return total + account.total;
  }, 0);

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

  function onAddClick() {
    setAccounts([
      ...accounts,
      {
        bank: 'Credit agricole',
        label: 'Compte chèque',
        number: '123456789',
        total: 1000,
      },
    ]);

    console.log('onAddClick');
  }
  function onPieChartClick() {
    console.log('onPieChartClick');
  }
  function onChartClick() {
    console.log('onChartClick');
  }

  return (
    <>
      <Stack
        justify="flex-start"
        sx={(theme) => ({
          paddingTop: theme.spacing.md,
          paddingBottom: theme.spacing.md,
        })}
      >
        <Group
          position="left"
          spacing="xs"
          sx={{
            paddingLeft: 8,
            paddingRight: 8,
          }}
        >
          {actions.map(({ icon, onClick }, index) => (
            <ActionIcon
              size={40}
              key={index}
              onClick={() => onClick()}
              className={classes.action}
            >
              <Box component={icon} size={24} />
            </ActionIcon>
          ))}
        </Group>

        <Stack
          justify="flex-start"
          sx={(theme) => ({
            paddingLeft: theme.spacing.md,
            paddingRight: theme.spacing.md,
          })}
        >
          <Text weight={600} size="lg" className={classes.text}>
            <Group position="apart" spacing="xs">
              <FormattedMessage
                description="accounts total"
                defaultMessage="Total de mes avoirs"
              />
              <span>{accountTotal} $</span>
            </Group>
          </Text>

          {accounts.map((account, index) => (
            <AccountCard key={index} account={account} />
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default Accounts;
