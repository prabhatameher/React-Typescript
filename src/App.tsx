import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { Note } from './models/note.model';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import NoteList from './components/NoteList';
import CreateNote from './components/CreateNote';





function App() {
  // const name: string = 'prabhat'
  const [name, setName] = useState("Prabhat")


  const [notes, setNotes] = useState<Note[]>([
    {
      id: (new Date).toString(),
      title: "Meeting",
      text: "Schedule Meeting for Ui/UX",
      color: "#dfdfdf",
      date: (new Date).toString()
    }
  ]);

  const changeName = () => {
    setName("Meher")
  }

  return (
    <>
      <Header />
      <Container className='mt-5'>
        <Row>
          <Col>
            <NoteList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNote notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
