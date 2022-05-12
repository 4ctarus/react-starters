import TopAppBar from '@components/TopAppBar';
import { ActionIcon, Box, Stack } from '@mantine/core';
import { ReactNode } from 'react';
import { MdOutlinePerson } from 'react-icons/md';

export type MobileMenuLayoutProps = {
  children: ReactNode;
};

export const MobileMenuLayout = ({
  children,
  ...rest
}: MobileMenuLayoutProps) => {
  function onUserClick() {
    console.log('onUserClick');
  }

  return (
    <Stack spacing={0} {...rest}>
      <TopAppBar>
        <span>Piloth</span>
        <ActionIcon variant="filled" size="xl" onClick={() => onUserClick()}>
          <MdOutlinePerson size={32} />
        </ActionIcon>
      </TopAppBar>

      <Box>{children}</Box>
    </Stack>
  );
};
