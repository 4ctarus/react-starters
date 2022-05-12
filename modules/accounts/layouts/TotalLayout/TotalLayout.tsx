import { createStyles, Group, Text, TextProps } from '@mantine/core';
import { FormattedMessage } from 'react-intl';

export type TotalLayoutProps = TextProps<'div'> & {
  total: number;
};

const useStyles = createStyles((theme) => {
  const colors = theme.fn.variant({
    variant: 'filled',
    color: theme.primaryColor,
  });

  return {
    text: {
      color: colors.background,
    },
  };
});

export const TotalLayout = ({ total, ...rest }: TotalLayoutProps) => {
  const { classes } = useStyles();

  return (
    <Text weight={600} size="lg" className={classes.text} {...rest}>
      <Group position="apart" spacing="xs">
        <FormattedMessage
          description="accounts total"
          defaultMessage="Total de mes avoirs"
        />
        <span>{total} $</span>
      </Group>
    </Text>
  );
};
