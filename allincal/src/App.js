import React from 'react';
import './App.css';
import  Layout from './layout/layout'

import  Newcard from './secondcard/newcard'

function App() {
  return (
    <div className="wholeapp">
      <Layout ></Layout>
      <Newcard></Newcard>
      
    </div>
  );
}

export default App;
