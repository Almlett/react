import React, { Fragment } from 'react';
import Header from './components/Header.jsx';
import Form from './components/Form.jsx';

function App() {
  return (
    <Fragment>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <Form />
        </div>
      </div>
    </Fragment>
    
  );
}

export default App;