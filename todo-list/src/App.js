import './App.css';
import { useState } from 'react';

function App() {

  const [items, setItems] = useState()  

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <input type="text" placeholder='"Bread"'/>
      <button className='addButton'>Add Item</button>
    </div>
  );
}

export default App;
