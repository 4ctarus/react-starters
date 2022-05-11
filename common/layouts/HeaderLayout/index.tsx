import TopAppBar from '@components/TopAppBar';
import { ActionIcon, Box } from '@mantine/core';
import type { NextPage } from 'next';
import { MdOutlinePerson } from 'react-icons/md';

const HeaderLayout: NextPage = () => {
  return (
    <TopAppBar>
      <Box
        sx={() => ({
          width: 40,
        })}
      ></Box>
      <span>Piloth</span>
      <ActionIcon variant="filled" color="indigo" size="xl">
        <MdOutlinePerson size={32} />
      </ActionIcon>
    </TopAppBar>
  );
};

export default HeaderLayout;
