import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const ExampleToast: React.FunctionComponent = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Костромская область</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">Кейс "Посадка картошки"</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

const App = () => (
  <Container className="p-3">
    <Jumbotron>
      <h1 className="header">Банк кейсов "Промробо"</h1>
      <ExampleToast>
        О кейсе
        Краткое описание того, с чем обучающийся познакомится и как именно.

        Категория кейса
        “вводный, для прохождения кейса нет начальных требований” или
        “углубленный, требуются … перечислить необходимые требования”;

        Примерный возраст обучающихся - ... лет

        Место в структуре программы:
        “Автономный” или
        “Кейс должен идти после кейса/ов ….”

        Количество академических часов, на которые рассчитан кейс:
        от … до ....

        Учебно-тематическое планирование:

        <span role="img" aria-label="tada">
          😜
        </span>
      </ExampleToast>
    </Jumbotron>
  </Container>
);

const mountNode = document.getElementById('root');
ReactDOM.render(<App />, mountNode);
