import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Container>
        <h1 className='mb-2'>"react-bootstrap": "^2.5.0"</h1>
        <h1>"bootstrap": "^5.2.2", </h1>
        <Button>Primary Button</Button>
      </Container>
    </>
  );
}

export default App;
