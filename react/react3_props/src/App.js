import './App.css';
import ClassProps from './components/ClassProps';
import ItemList from './components/ItemList';
import List from './components/List';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div className="App">
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
