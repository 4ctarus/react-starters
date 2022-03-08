import type { NextPage } from 'next';
import { useState } from 'react';
import { MdAlarmAdd } from 'react-icons/md';
import Button from '../components/Button';
import HStack from '../components/HStack';
import VStack from '../components/VStack';

const Home: NextPage = () => {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(count + 1);
  };

  return (
    <VStack>
      {['primary', 'secondary', 'tertiary'].map((color, index) => (
        <VStack key={index}>
          <h4>Button {`${color} ${count}`}</h4>

          <HStack>
            <Button {...{ color }} onClick={() => clickHandler()}>
              <span>Button</span>
            </Button>

            <Button
              leftIcon={MdAlarmAdd}
              {...{ color }}
              onClick={() => clickHandler()}
            >
              <span>Button left icon</span>
            </Button>

            <Button
              rightIcon={MdAlarmAdd}
              {...{ color }}
              onClick={() => clickHandler()}
            >
              <span>Button left icon</span>
            </Button>

            <Button {...{ color }} disabled onClick={() => clickHandler()}>
              <span>Button</span>
            </Button>
          </HStack>

          <HStack>
            <Button filled {...{ color }} onClick={() => clickHandler()}>
              <span>Button</span>
            </Button>

            <Button
              filled
              leftIcon={MdAlarmAdd}
              {...{ color }}
              onClick={() => clickHandler()}
            >
              <span>Button left icon</span>
            </Button>

            <Button
              filled
              rightIcon={MdAlarmAdd}
              {...{ color }}
              onClick={() => clickHandler()}
            >
              <span>Button left icon</span>
            </Button>

            <Button
              filled
              {...{ color }}
              disabled
              onClick={() => clickHandler()}
            >
              <span>Button</span>
            </Button>
          </HStack>

          <HStack>
            <Button outlined {...{ color }} onClick={() => clickHandler()}>
              <span>Button</span>
            </Button>

            <Button
              outlined
              leftIcon={MdAlarmAdd}
              {...{ color }}
              onClick={() => clickHandler()}
            >
              <span>Button left icon</span>
            </Button>

            <Button
              outlined
              rightIcon={MdAlarmAdd}
              {...{ color }}
              onClick={() => clickHandler()}
            >
              <span>Button left icon</span>
            </Button>

            <Button
              outlined
              {...{ color }}
              disabled
              onClick={() => clickHandler()}
            >
              <span>Button</span>
            </Button>
          </HStack>

          <HStack>
            <Button elevated {...{ color }} onClick={() => clickHandler()}>
              <span>Button</span>
            </Button>

            <Button
              elevated
              leftIcon={MdAlarmAdd}
              {...{ color }}
              onClick={() => clickHandler()}
            >
              <span>Button left icon</span>
            </Button>

            <Button
              elevated
              rightIcon={MdAlarmAdd}
              {...{ color }}
              onClick={() => clickHandler()}
            >
              <span>Button left icon</span>
            </Button>

            <Button
              elevated
              {...{ color }}
              disabled
              onClick={() => clickHandler()}
            >
              <span>Button</span>
            </Button>
          </HStack>
        </VStack>
      ))}
    </VStack>
  );
};

export default Home;
