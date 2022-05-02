import type { NextPage } from 'next';
import { useState } from 'react';
import { MdAlarmAdd } from 'react-icons/md';
import Button, { ButtonColor } from '../components/Button';
import HStack from '../components/HStack';
import VStack from '../components/VStack';

const Home: NextPage = () => {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(count + 1);
  };

  return (
    <VStack css={{ padding: '$2' }}>
      <div>
        <span>{`number of click ${count}`}</span>
      </div>

      {Object.values(ButtonColor).map((color, index) => (
        <VStack key={index}>
          <h4>Button {color}</h4>

          <HStack>
            <Button {...{ color }} onClick={() => clickHandler()}>
              <span>Button</span>
            </Button>

            <Button
              prefixIcon={MdAlarmAdd}
              {...{ color }}
              onClick={() => clickHandler()}
            >
              <span>Button left icon</span>
            </Button>

            <Button
              suffixIcon={MdAlarmAdd}
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
              prefixIcon={MdAlarmAdd}
              {...{ color }}
              onClick={() => clickHandler()}
            >
              <span>Button left icon</span>
            </Button>

            <Button
              filled
              suffixIcon={MdAlarmAdd}
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
              prefixIcon={MdAlarmAdd}
              {...{ color }}
              onClick={() => clickHandler()}
            >
              <span>Button left icon</span>
            </Button>

            <Button
              outlined
              suffixIcon={MdAlarmAdd}
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
              prefixIcon={MdAlarmAdd}
              {...{ color }}
              onClick={() => clickHandler()}
            >
              <span>Button left icon</span>
            </Button>

            <Button
              elevated
              suffixIcon={MdAlarmAdd}
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
