import { Box } from '@mantine/core';
import { ReactNode } from 'react';

export type ActionListProps = {
  children: ReactNode;
};

export const ActionList = (props: ActionListProps) => {
  return (
    <Box
      sx={(theme) => ({
        display: 'flex',
        flexDirection: 'row',
        gap: theme.spacing.sm,
      })}
      {...props}
    />
  );
};
