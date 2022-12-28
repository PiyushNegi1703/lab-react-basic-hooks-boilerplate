import React, {useState} from 'react';
import './App.css';
// import UseState from './components/useState';
import UseContext from './components/UseContext';

export const ToggleTheme = React.createContext()

function App() {

  const [state, setState] = useState(true)

  return (
    <div className="App">
      {/* <UseState /> */}
      <ToggleTheme.Provider value={state}>
        <button onClick={() => setState(state => !state)}>Toggle</button>
        <UseContext/>
      </ToggleTheme.Provider>
    </div>
  );
}

export default App;
