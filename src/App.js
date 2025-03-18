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

  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const setMemo = (newMemo) => {
    const newMemos = [...memos];

    newMemos[selectedMemoIndex] = newMemo;

    console.log('memos', memos);
    setMemos(newMemos);
  };

  return (
    <div className="App">
      <SideBar
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
