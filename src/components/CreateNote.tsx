import * as React from 'react';
import { Form, Button, Alert } from 'react-bootstrap'
import { Note } from '../models/note.model';
import Notes from './Notes';

interface ICreateNoteProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNote: React.FunctionComponent<ICreateNoteProps> = ({ notes, setNotes }) => {

    const [error, setError] = React.useState<string>("");

    const titleRef = React.useRef<HTMLInputElement | null>(null)
    const textRef = React.useRef<HTMLTextAreaElement | null>(null)
    const colorRef = React.useRef<HTMLInputElement | null>(null)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (titleRef.current?.value === "" || textRef.current?.value === "") {
            return setError("All Fields Are Mandatory")
        }

        console.log("Title:", (titleRef.current as HTMLInputElement).value, "Text :", (textRef.current as HTMLTextAreaElement).value, "Color :", (colorRef.current as HTMLInputElement).value)
        setError("")
        setNotes([...notes, {
            id: (new Date()).toString(),
            title: (titleRef.current as HTMLInputElement).value,
            text: (textRef.current as HTMLTextAreaElement).value,
            color: (colorRef.current as HTMLInputElement).value,
            date: (new Date()).toString()
        }]);



        (titleRef.current as HTMLInputElement).value = "";
        (textRef.current as HTMLTextAreaElement).value = "";

        // setNotes([...notes, {
        //     id: (new Date()).toString(),
        //     title: titleRef.current?.value,   ///Possibly Null
        //     text: textRef.current?.value,
        //     color: colorRef.current?.value,
        //     date: (new Date()).toString()
        // }])

    }

    return (
        <>
            <h2>Create Notes</h2>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form className='mt-3 mb-3' onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className='mb-3' controlId='formBasicTitle'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type='text' placeholder='Enter Title' ref={titleRef} />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicTitle'>
                    <Form.Label>Text</Form.Label>
                    <Form.Control as='textarea' rows={3} placeholder='Enter Text' ref={textRef} />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='colorInput'>Notes Color </Form.Label>
                    <Form.Control type='color' id='colorInput' defaultValue='#dfdfdf' title='Choose Your Color' ref={colorRef} />
                </Form.Group>
                <Button type='submit' variant='primary'>Submit</Button>
            </Form>
        </>
    );
};

export default CreateNote;
