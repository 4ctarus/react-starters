import { styled } from '@stitches/react';
import type { NextPage } from 'next';
import { MdAlarmAdd } from 'react-icons/md';
import Button from '../components/Button';

const Home: NextPage = () => {
  const HStack = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
    flexWrap: 'wrap',
  });

  const VStack = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  });

  const clickHandler = () => {
    console.log('clicked');
  };
  return (
    <VStack>
      <VStack>
        <h4>Button primary</h4>

        <HStack>
          <Button>
            <span>Button</span>
          </Button>

          <Button leftIcon={MdAlarmAdd}>
            <span>Button left icon</span>
          </Button>

          <Button rightIcon={MdAlarmAdd}>
            <span>Button left icon</span>
          </Button>

          <Button disabled>
            <span>Button</span>
          </Button>
        </HStack>

        <HStack>
          <Button filled>
            <span>Button</span>
          </Button>

          <Button filled leftIcon={MdAlarmAdd}>
            <span>Button left icon</span>
          </Button>

          <Button filled rightIcon={MdAlarmAdd}>
            <span>Button left icon</span>
          </Button>

          <Button filled disabled>
            <span>Button</span>
          </Button>
        </HStack>

        <HStack>
          <Button outlined>
            <span>Button</span>
          </Button>

          <Button outlined leftIcon={MdAlarmAdd}>
            <span>Button left icon</span>
          </Button>

          <Button outlined rightIcon={MdAlarmAdd}>
            <span>Button left icon</span>
          </Button>

          <Button outlined disabled>
            <span>Button</span>
          </Button>
        </HStack>

        <HStack>
          <Button elevated>
            <span>Button</span>
          </Button>

          <Button elevated leftIcon={MdAlarmAdd}>
            <span>Button left icon</span>
          </Button>

          <Button elevated rightIcon={MdAlarmAdd}>
            <span>Button left icon</span>
          </Button>

          <Button elevated disabled>
            <span>Button</span>
          </Button>
        </HStack>
      </VStack>

      <VStack>
        <h4>Button secondary</h4>

        <HStack>
          <Button color="secondary" onClick={() => clickHandler()}>
            <span>Button</span>
          </Button>

          <Button
            color="secondary"
            leftIcon={MdAlarmAdd}
            onClick={() => clickHandler()}
          >
            <span>Button left icon</span>
          </Button>

          <Button
            color="secondary"
            rightIcon={MdAlarmAdd}
            onClick={() => clickHandler()}
          >
            <span>Button left icon</span>
          </Button>

          <Button color="secondary" disabled onClick={() => clickHandler()}>
            <span>Button</span>
          </Button>
        </HStack>

        <HStack>
          <Button filled color="secondary">
            <span>Button</span>
          </Button>

          <Button filled color="secondary" leftIcon={MdAlarmAdd}>
            <span>Button left icon</span>
          </Button>

          <Button filled color="secondary" rightIcon={MdAlarmAdd}>
            <span>Button left icon</span>
          </Button>

          <Button filled color="secondary" disabled>
            <span>Button</span>
          </Button>
        </HStack>

        <HStack>
          <Button outlined color="secondary">
            <span>Button</span>
          </Button>

          <Button outlined color="secondary" leftIcon={MdAlarmAdd}>
            <span>Button left icon</span>
          </Button>

          <Button outlined color="secondary" rightIcon={MdAlarmAdd}>
            <span>Button left icon</span>
          </Button>

          <Button outlined color="secondary" disabled>
            <span>Button</span>
          </Button>
        </HStack>

        <HStack>
          <Button elevated color="secondary">
            <span>Button</span>
          </Button>

          <Button elevated color="secondary" leftIcon={MdAlarmAdd}>
            <span>Button left icon</span>
          </Button>

          <Button elevated color="secondary" rightIcon={MdAlarmAdd}>
            <span>Button left icon</span>
          </Button>

          <Button elevated color="secondary" disabled>
            <span>Button</span>
          </Button>
        </HStack>
      </VStack>

      <VStack>
        <h4>Button tertiary</h4>

        <HStack>
          <Button color="tertiary">
            <span>Button</span>
          </Button>

          <Button color="tertiary" leftIcon={MdAlarmAdd}>
            <span>Button left icon</span>
          </Button>

          <Button color="tertiary" rightIcon={MdAlarmAdd}>
            <span>Button left icon</span>
          </Button>

          <Button color="tertiary" disabled>
            <span>Button</span>
          </Button>
        </HStack>

        <HStack>
          <Button filled color="tertiary">
            <span>Button</span>
          </Button>

          <Button filled color="tertiary" leftIcon={MdAlarmAdd}>
            <span>Button left icon</span>
          </Button>

          <Button filled color="tertiary" rightIcon={MdAlarmAdd}>
            <span>Button left icon</span>
          </Button>

          <Button filled color="tertiary" disabled>
            <span>Button</span>
          </Button>
        </HStack>

        <HStack>
          <Button outlined color="tertiary">
            <span>Button</span>
          </Button>

          <Button outlined color="tertiary" leftIcon={MdAlarmAdd}>
            <span>Button left icon</span>
          </Button>

          <Button outlined color="tertiary" rightIcon={MdAlarmAdd}>
            <span>Button left icon</span>
          </Button>

          <Button outlined color="tertiary" disabled>
            <span>Button</span>
          </Button>
        </HStack>

        <HStack>
          <Button elevated color="tertiary">
            <span>Button</span>
          </Button>

          <Button elevated color="tertiary" leftIcon={MdAlarmAdd}>
            <span>Button left icon</span>
          </Button>

          <Button elevated color="tertiary" rightIcon={MdAlarmAdd}>
            <span>Button left icon</span>
          </Button>

          <Button elevated color="tertiary" disabled>
            <span>Button</span>
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Home;
