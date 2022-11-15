import * as React from 'react';
import { Note } from '../models/note.model';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface INotesProps {
    note: Note,
    handleDelete: (id: string) => void
}

const Notes: React.FunctionComponent<INotesProps> = ({ note, handleDelete }) => {
    return (
        <>
            <div className='mb-3'>
                <Card style={{ width: '18rem', background: note.color }}>
                    <Card.Body>
                        <Card.Title>{note.title}</Card.Title>
                        <Card.Text>{note.text}</Card.Text>
                        <Card.Subtitle className='text-muted'>{note.date}</Card.Subtitle>
                        <Button variant='danger' className='mt-2' onClick={() => handleDelete(note.id)}>Delete</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

export default Notes;
