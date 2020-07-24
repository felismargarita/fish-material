import React from 'react';
import Button from './components/button/Button'
function App() {
  return (
    <div>
      <Button size="default" onClick={()=>console.log(111)}>default</Button>
      <Button size="default" type="danger">default</Button>
      <Button size="default" type="primary">default</Button>

      <Button size="small" >small</Button>
      <Button size="small" type="danger">small</Button>
      <Button size="small" type="primary">small</Button>

      <Button size="large">large</Button>
      <Button size="large" type="danger">large</Button>
      <Button size="large" type="primary" disabled onClick={()=>console.log(111)}>large</Button>

    </div>
  );
}

export default App;
