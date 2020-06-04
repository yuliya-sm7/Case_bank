import React from 'react';
import ReactDOM from 'react-dom';
import Sheet from './Sheet';
import registerServiceWorker from './registerServiceWorker';


// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const App = () => (
  <Container className="p-3">
    <Jumbotron className='p-5'>
      <h1 className="header">Банк кейсов "Промробо"</h1>
      <Sheet></Sheet>
    </Jumbotron>
  </Container>
);

const mountNode = document.getElementById('root');
ReactDOM.render(<App />, mountNode);
registerServiceWorker();
