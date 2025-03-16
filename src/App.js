import { useState } from 'react';
import './App.css';
import MemoContainer from './components/MemoContainers';
import SideBar from './components/SideBar';

function App() {
  const [memos, setMemos] = useState([
    {
      title: 'Memo 1',
      content: 'This is memo',
      createAt: 1742091361708, //시간 값
      updateAt: 1742091361708, //시간값
    },
    {
      title: 'Memo 2',
      content: 'This is memo2',
      createAt: 1742091361799, //시간 값
      updateAt: 1742091361799, //시간값
    },
  ]);
  return (
    <div className="App">
      <SideBar memos={memos} />
      <MemoContainer />
    </div>
  );
}

export default App;
