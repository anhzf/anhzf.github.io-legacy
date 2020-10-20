import React from 'react';
import TheHeader from './components/TheHeader';
import TheMain from './components/TheMain';

function App(): JSX.Element {
  return (
    <div className="App">
      <TheHeader/>
      <TheMain/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}

    </div>
  );
}

export default App;
