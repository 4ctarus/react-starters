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

      <div>
        <Button onClick={() => clickHandler()}>
          <span>Button</span>
        </Button>

        <Button leftIcon={MdAlarmAdd} onClick={() => clickHandler()}>
          <span>Button left icon</span>
        </Button>

        <Button rightIcon={MdAlarmAdd} onClick={() => clickHandler()}>
          <span>Button left icon</span>
        </Button>

        <Button disabled onClick={() => clickHandler()}>
          <span>Button</span>
        </Button>
      </div>
    </>
  );
};

export default Home;
