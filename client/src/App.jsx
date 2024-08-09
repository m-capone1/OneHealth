import './App.scss';
import RecordList from './components/RecordList/RecordList';
import recordData from "./Data/data.json";

function App() {

  return (
    <>
      <RecordList recordListData={recordData}/>
    </>
  )
}

export default App
