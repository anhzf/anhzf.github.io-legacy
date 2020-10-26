import React from 'react';
import TheHeader from './components/TheHeader/index';
import TheMain from './components/TheMain/index';

export default function App(): JSX.Element {
  return (
    <div className="App bg-architect-gradient-to-t from-blue-200 to-blue-100">
      <TheHeader
        heroImg={require('./assets/img/my-removebg-preview.png')}
      />

      <TheMain />
    </div>
  );
}
