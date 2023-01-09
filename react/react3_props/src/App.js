import './App.css';
import CallCustomList from './components/CallCustomList';
import ClassProps from './components/ClassProps';
import CallCustomObj from './components/CustomObj';
import Ex5 from './components/Ex5';
import ItemList from './components/ItemList';
import List from './components/List';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div className="App">
      <Ex5 />
      <CallCustomObj />
      <CallCustomList />
      <ItemList />
      <List />
      <MainHeader
        text="Go naver"
        href="https://www.naver.com/"
        userID="gorae"
      />
      <ClassProps
        text="Go naver"
        href="https://www.naver.com/"
        userID="gorae"
      />
    </div>
  );
}

export default App;
