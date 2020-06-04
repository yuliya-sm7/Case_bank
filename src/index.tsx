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
    <Jumbotron className='p-4'>
      <h2 className="header">Банк кейсов "Промробо"</h1>
      <Sheet></Sheet>
    </Jumbotron>
  </Container>
);

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Квантум "Промышленная робототехника"</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-item nav-link" href="/">Главная <span className="sr-only">(current)</span></a>
        <a className="nav-item nav-link" href="http://robokvantum.ru/">Основной сайт</a>
        <a className="nav-item nav-link" href="http://robokvantum.ru/w/index.php">RoboWiki</a>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <div><iframe
    src="https://docs.google.com/forms/d/e/1FAIpQLSfu8dLlynZB3LhC1I_8MVslXVzltJGihHN7sK3xSiE7OLT4JQ/viewform?embedded=true"
    width="100%" height="750" frameborder="0" marginheight="0" marginwidth="0">Загрузка…</iframe>
    <footer className="page-footer fixed-bottom bg-dark text-light">
      <div className="footer-copyright text-center py-1">Москва 2020
            <a href="https://www.roskvantorium.ru/" className="text-light stretched-link"> ФГАУ "ФНФРО"</a>
      </div>
    </footer>
  </div>
);

ReactDOM.render(<Navbar />, document.getElementById('navbar'));
const mountNode = document.getElementById('root');
ReactDOM.render(<App />, mountNode);
ReactDOM.render(<Footer />, document.getElementById('footer'));
registerServiceWorker();
