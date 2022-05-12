import TopAppBar from '@layouts/TopAppBar';
import { Stack } from '@mantine/core';
import type { NextPage } from 'next';
import ActionsLayout from './layouts/ActionsLayout';
import CardsLayout from './layouts/CardsLayout';
import TotalLayout from './layouts/TotalLayout';
import { Account } from './types';

const Accounts: NextPage = () => {
  const accounts: Account[] = [
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

  const total = accounts.reduce(
    (total, account) => (total += account.total),
    0,
  );

  return (
    <>
      <TopAppBar />

      <Stack
        justify="flex-start"
        sx={(theme) => ({
          paddingTop: theme.spacing.md,
          paddingBottom: theme.spacing.md,
        })}
      >
        <ActionsLayout
          sx={{
            paddingLeft: 8,
            paddingRight: 8,
          }}
        />

        <Stack
          justify="flex-start"
          sx={(theme) => ({
            paddingLeft: theme.spacing.md,
            paddingRight: theme.spacing.md,
          })}
        >
          <TotalLayout total={total} />

          <CardsLayout accounts={accounts} />
        </Stack>
      </Stack>
    </>
  );
};

export default Accounts;
