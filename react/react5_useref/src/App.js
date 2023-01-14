import './App.css';
import ChangeFocus from './components/ChangeFocus';
import ColorInput from './components/ColorInput';
import Comparing from './components/Comparing';
import ConditoinalRender from './components/ConditoinalRender';
import ExConditional from './components/ExConditional';
import ExShow from './components/ExShow';
import ReactFragment from './components/ReactFragment';
import RefDom from './components/RefDom';
import ShowTimer from './components/ShowTimer';
import TestRef from './components/TestRef';
import TestUseEffect from './components/TestUseEffect';

function App() {
  return (
    <div className="App">
      <ExShow />
      <ShowTimer />
      <TestUseEffect />
      <ExConditional />
      <ConditoinalRender />
      <ReactFragment />
      <Comparing />
      <ColorInput />
      <RefDom />
      <ChangeFocus />
      <TestRef />
    </div>
  );
}

export default App;
