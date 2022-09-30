import React, { useEffect, useState } from 'react';
import Modal from './components/Modal/Modal';
import Tab from './components/Tab/Tab';
import TabItem from './components/Tab/TabItem';
import Table from './components/Table/Table';
import Form from './components/Form/Form';
import { useTypedSelector } from './hooks/useTypedSelector';
import { useActions } from './hooks/useActions';
import CountTable from './components/Table/CountTable';
import { getCountCategory } from './utils';

interface countCategory {
  name: string;
  count: {
    active: number;
    archive: number;
  }
}


const App = () => {
  const [active, setActive] = useState(false)
  const [countCategory, setCountCategory] = useState<countCategory[]>([])

  const { tasks } = useTypedSelector(state => state.tasks)
  const { createTask } = useActions()
  const activeTask = tasks.filter(task => task.active)
  const archiveTask = tasks.filter(task => !task.active)

  useEffect(() => {
    setCountCategory(getCountCategory(tasks))
  }, [tasks])

  return (
    <div id='wrapper'>
      <div>
        <Tab>
          <TabItem label='Active Task'><Table tasks={activeTask} /></TabItem>
          <TabItem label="Archive Task"><Table tasks={archiveTask} /></TabItem>
        </Tab>
        <div className='btn-container'>
          <button onClick={() => setActive(true)} className='create-btn'>Create Task</button>
        </div>
      </div>
      <CountTable countCategory={countCategory} />
      <Modal active={active} setActive={setActive}>
        <Form setActive={setActive} actionFunc={createTask} />
      </Modal>
    </div>
  );
};

export default App;