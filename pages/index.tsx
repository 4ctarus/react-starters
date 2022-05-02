import { Box } from '@mantine/core';
import type { NextPage } from 'next';
import { useState } from 'react';
import { MdAlarmAdd } from 'react-icons/md';
import Button from '../components/Button';

const Home: NextPage = () => {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <span>{`number of click ${count}`}</span>
      </div>

      <h4>Buttons</h4>

      <Box
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
          gap: theme.spacing.sm,
        })}
      >
        <Box
          sx={(theme) => ({
            display: 'flex',
            gap: theme.spacing.sm,
          })}
        >
          <Button onClick={() => clickHandler()}>
            <span>Button</span>
          </Button>

          <Button leftIcon={<MdAlarmAdd />} onClick={() => clickHandler()}>
            <span>Button left icon</span>
          </Button>

          <Button rightIcon={<MdAlarmAdd />} onClick={() => clickHandler()}>
            <span>Button left icon</span>
          </Button>

          <Button disabled onClick={() => clickHandler()}>
            <span>Button</span>
          </Button>
        </Box>

        <Box
          sx={(theme) => ({
            display: 'flex',
            gap: theme.spacing.sm,
          })}
        >
          <Button variant="subtle" onClick={() => clickHandler()}>
            <span>Button</span>
          </Button>

          <Button
            variant="subtle"
            leftIcon={<MdAlarmAdd />}
            onClick={() => clickHandler()}
          >
            <span>Button left icon</span>
          </Button>

          <Button
            variant="subtle"
            rightIcon={<MdAlarmAdd />}
            onClick={() => clickHandler()}
          >
            <span>Button left icon</span>
          </Button>

          <Button variant="subtle" disabled onClick={() => clickHandler()}>
            <span>Button</span>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Home;
