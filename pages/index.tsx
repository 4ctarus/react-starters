import { styled } from '@stitches/react';
import type { NextPage } from 'next';
import { MdAlarmAdd } from 'react-icons/md';
import Button, { Color } from '../components/Button';
import ButtonIcon from '../components/Button/button-icon';

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

  return (
    <VStack>
      <VStack>
        <h4>Button primary</h4>

        <HStack>
          <Button>
            <span>Button</span>
          </Button>

          <Button leftIcon={<ButtonIcon as={MdAlarmAdd} />}>
            <span>Button left icon</span>
          </Button>

          <Button rightIcon={<ButtonIcon as={MdAlarmAdd} />}>
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

          <Button filled leftIcon={<ButtonIcon as={MdAlarmAdd} />}>
            <span>Button left icon</span>
          </Button>

          <Button filled rightIcon={<ButtonIcon as={MdAlarmAdd} />}>
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

          <Button outlined leftIcon={<ButtonIcon as={MdAlarmAdd} />}>
            <span>Button left icon</span>
          </Button>

          <Button outlined rightIcon={<ButtonIcon as={MdAlarmAdd} />}>
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

          <Button elevated leftIcon={<ButtonIcon as={MdAlarmAdd} />}>
            <span>Button left icon</span>
          </Button>

          <Button elevated rightIcon={<ButtonIcon as={MdAlarmAdd} />}>
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
          <Button color={Color.SECONDARY}>
            <span>Button</span>
          </Button>

          <Button
            color={Color.SECONDARY}
            leftIcon={<ButtonIcon as={MdAlarmAdd} />}
          >
            <span>Button left icon</span>
          </Button>

          <Button
            color={Color.SECONDARY}
            rightIcon={<ButtonIcon as={MdAlarmAdd} />}
          >
            <span>Button left icon</span>
          </Button>

          <Button color={Color.SECONDARY} disabled>
            <span>Button</span>
          </Button>
        </HStack>

        <HStack>
          <Button filled color={Color.SECONDARY}>
            <span>Button</span>
          </Button>

          <Button
            filled
            color={Color.SECONDARY}
            leftIcon={<ButtonIcon as={MdAlarmAdd} />}
          >
            <span>Button left icon</span>
          </Button>

          <Button
            filled
            color={Color.SECONDARY}
            rightIcon={<ButtonIcon as={MdAlarmAdd} />}
          >
            <span>Button left icon</span>
          </Button>

          <Button filled color={Color.SECONDARY} disabled>
            <span>Button</span>
          </Button>
        </HStack>

        <HStack>
          <Button outlined color={Color.SECONDARY}>
            <span>Button</span>
          </Button>

          <Button
            outlined
            color={Color.SECONDARY}
            leftIcon={<ButtonIcon as={MdAlarmAdd} />}
          >
            <span>Button left icon</span>
          </Button>

          <Button
            outlined
            color={Color.SECONDARY}
            rightIcon={<ButtonIcon as={MdAlarmAdd} />}
          >
            <span>Button left icon</span>
          </Button>

          <Button outlined color={Color.SECONDARY} disabled>
            <span>Button</span>
          </Button>
        </HStack>

        <HStack>
          <Button elevated color={Color.SECONDARY}>
            <span>Button</span>
          </Button>

          <Button
            elevated
            color={Color.SECONDARY}
            leftIcon={<ButtonIcon as={MdAlarmAdd} />}
          >
            <span>Button left icon</span>
          </Button>

          <Button
            elevated
            color={Color.SECONDARY}
            rightIcon={<ButtonIcon as={MdAlarmAdd} />}
          >
            <span>Button left icon</span>
          </Button>

          <Button elevated color={Color.SECONDARY} disabled>
            <span>Button</span>
          </Button>
        </HStack>
      </VStack>

      <VStack>
        <h4>Button tertiary</h4>

        <HStack>
          <Button color={Color.TERTIARY}>
            <span>Button</span>
          </Button>

          <Button
            color={Color.TERTIARY}
            leftIcon={<ButtonIcon as={MdAlarmAdd} />}
          >
            <span>Button left icon</span>
          </Button>

          <Button
            color={Color.TERTIARY}
            rightIcon={<ButtonIcon as={MdAlarmAdd} />}
          >
            <span>Button left icon</span>
          </Button>

          <Button color={Color.TERTIARY} disabled>
            <span>Button</span>
          </Button>
        </HStack>

        <HStack>
          <Button filled color={Color.TERTIARY}>
            <span>Button</span>
          </Button>

          <Button
            filled
            color={Color.TERTIARY}
            leftIcon={<ButtonIcon as={MdAlarmAdd} />}
          >
            <span>Button left icon</span>
          </Button>

          <Button
            filled
            color={Color.TERTIARY}
            rightIcon={<ButtonIcon as={MdAlarmAdd} />}
          >
            <span>Button left icon</span>
          </Button>

          <Button filled color={Color.TERTIARY} disabled>
            <span>Button</span>
          </Button>
        </HStack>

        <HStack>
          <Button outlined color={Color.TERTIARY}>
            <span>Button</span>
          </Button>

          <Button
            outlined
            color={Color.TERTIARY}
            leftIcon={<ButtonIcon as={MdAlarmAdd} />}
          >
            <span>Button left icon</span>
          </Button>

          <Button
            outlined
            color={Color.TERTIARY}
            rightIcon={<ButtonIcon as={MdAlarmAdd} />}
          >
            <span>Button left icon</span>
          </Button>

          <Button outlined color={Color.TERTIARY} disabled>
            <span>Button</span>
          </Button>
        </HStack>

        <HStack>
          <Button elevated color={Color.TERTIARY}>
            <span>Button</span>
          </Button>

          <Button
            elevated
            color={Color.TERTIARY}
            leftIcon={<ButtonIcon as={MdAlarmAdd} />}
          >
            <span>Button left icon</span>
          </Button>

          <Button
            elevated
            color={Color.TERTIARY}
            rightIcon={<ButtonIcon as={MdAlarmAdd} />}
          >
            <span>Button left icon</span>
          </Button>

          <Button elevated color={Color.TERTIARY} disabled>
            <span>Button</span>
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Home;
