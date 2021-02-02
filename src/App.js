import React, { Component, Suspense } from 'react';
import './App.css';
import './i18n';
import Hello from './Hello';
import ThankYou from './ThankYou';
import LanguageSelector from './LanguageSelector';

const App = () => {
    return (
      <div>
        <Suspense fallback={null}>
          <LanguageSelector />
          <Hello />
          <ThankYou />
        </Suspense>
      </div>
    )
}

export default App

{/*import React from 'react';


import './App.css';

class App extends React.Component {
  render(){
    return (
    
    <div className="App">
    <h1>Hello world</h1>*/}

    {/*</div>
    );
  }
}

export default App;*/}
