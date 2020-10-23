import React from 'react';
import TheHeader from './components/TheHeader/index';
import TheMain from './components/TheMain/index';

export default function App(): JSX.Element {
  return (
    <div className="App">
      <TheHeader
        heroImg={require('./assets/img/my-removebg-preview.png')}
      />

      <TheMain />
    </div>
  );
}
