import {
  Card,
  createStyles,
  Group,
  Stack,
  StackProps,
  Text,
} from '@mantine/core';
import { Account } from '../../types';

export type CardsLayoutProps = StackProps & {
  accounts: Account[];
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

export const CardsLayout = ({ accounts, ...rest }: CardsLayoutProps) => {
  const { classes } = useStyles();

  return (
    <Stack justify="flex-start" spacing="xs" {...rest}>
      {accounts.map(({ bank, label, number, total }, index) => (
        <Card p="md" key={index} className={classes.card}>
          <Group position="apart" spacing="xs">
            <Stack spacing={0}>
              <Text weight={600} size="md">
                {bank}
              </Text>
              <Text size="md">{label}</Text>
              <Text size="md">{number}</Text>
            </Stack>

            <Text weight={600} size="lg">
              {total} $
            </Text>
          </Group>
        </Card>
      ))}
    </Stack>
  );
};
