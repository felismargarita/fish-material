import React from 'react';
import Button from './components/button/Button'
import Collapse,{Pannel} from './components/collapse/Collapse'
function App() {
  return (
    <div>
      <Button size="default" onClick={()=>console.log(111)}>default</Button>
      <Button size="default" type="danger">default</Button>
      <Button size="default" type="primary">default</Button>

      <Collapse>
      <Pannel title="pannel 1">
        <div style={{height:'100px',background:'red'}}></div>
      </Pannel>
      <Pannel title="pannel 2">
      <div style={{height:'100px',background:'green'}}></div>
      </Pannel>
      <Pannel title="pannel 3">
      <div style={{height:'400px',background:'blue'}}></div>
      </Pannel>
      <Pannel title="pannel 4">
      <div style={{height:'100px',background:'pink'}}></div>
      </Pannel>

      </Collapse>

    </div>
  );
}

export default App;
