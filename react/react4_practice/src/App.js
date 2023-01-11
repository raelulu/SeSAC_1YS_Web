import './App.css';
import EventEx from './components/EventEx';
import HandlerEx from './components/HandlerEx';
import P1 from './components/P1';
import P2 from './components/P2';
import P3 from './components/P3';
import P4 from './components/P4';
import P5 from './components/P5';
import P6 from './components/P6';
import Pprops1 from './components/Pprops1';
import Pprops2 from './components/Pprops2';
import Pprops3 from './components/Pprops3';
import Pstate1 from './components/Pstate1';
import Pstate2 from './components/Pstate2';
import Test from './components/Test';
import Test2 from './components/Test2';

function App() {
  return (
    <div className="App">
      <P1 />
      <P2 />
      <P3 />
      <P4 />
      <P5 />
      <P6 />
      <Test />
      <Test2 />
      <Pprops1 food="포도" />
      <Pprops2
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500원"
        type="자기계발서"
      />
      <Pprops3 text="App 컴포넌트에서 넘겨준 text props입니다." valid="콘솔 띄우기 성공! "/>
      <Pstate1 />
      <Pstate2 />
      <HandlerEx />
      <EventEx />
    </div>
  );
}

export default App;
