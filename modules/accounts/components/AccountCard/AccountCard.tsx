import {
  Card,
  CardProps,
  createStyles,
  Group,
  Stack,
  Text,
} from '@mantine/core';
import { Account } from '../../types';

export type AccountCardProps = Omit<CardProps<'div'>, 'children'> & {
  account: Account;
};

const useStyles = createStyles((theme) => {
  const colors = theme.fn.variant({
    variant: 'filled',
    color: theme.primaryColor,
  });

  return {
    card: {
      backgroundColor: theme.fn.rgba(colors.background, 0.12),
      color: colors.background,
      borderRadius: theme.radius.lg,
    },
  };
});

export const AccountCard = ({ account, ...rest }: AccountCardProps) => {
  const { classes } = useStyles();

  return (
    <Card p="md" className={classes.card} {...rest}>
      <Group position="apart" spacing="xs">
        <Stack spacing={0}>
          <Text weight={600} size="md">
            {account.bank}
          </Text>
          <Text size="md">{account.label}</Text>
          <Text size="md">{account.number}</Text>
        </Stack>

        <Text weight={600} size="lg">
          {account.total} $
        </Text>
      </Group>
    </Card>
  );
};
