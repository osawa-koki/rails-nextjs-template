import { useEffect, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import Layout from "../components/Layout";

type Note = {
  id: number;
  name: string;
  content: string;
  created_at: Date;
  updated_at: Date;
};

export default function HelloWorld() {

  const [notes, setNotes] = useState<Note[]>([]);
  const [name, setName] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const Submit = async () => {
    const res = await fetch('/api/v1/note', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name, content: content }),
    });
    const note = (await res.json()) as Note;
    setNotes([note, ...notes]);
  };

  const Delete = async (id: number) => {
    const res = await fetch(`/api/v1/note/${id}`, {
      method: 'DELETE',
    });
    await res.json();
    setNotes(notes.filter((note) => note.id !== id));
  };

  useEffect(() => {
    const fetchNotes = async () => {
      const res = await fetch('/api/v1/note');
      const notes = (await res.json()) as Note[];
      setNotes(notes);
    };
    fetchNotes();
  }, []);

  return (
    <Layout>
      <main>
        <div id="Note">
          <h1>Here, Note page.</h1>
          <Form>
            <Form.Group className="mt-3">
              <Form.Label>Your name</Form.Label>
              <Form.Control type="text" placeholder="osawa koki" value={name} onInput={(e) => {setName((e.target as HTMLInputElement).value)}} />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Content</Form.Label>
              <Form.Control as="textarea" rows={5} value={content} onInput={(e) => {setContent((e.target as HTMLInputElement).value)}}  />
            </Form.Group>
          </Form>
          <div className="mt-3 center">
            <Button variant="outline-primary" onClick={Submit}>Submit 🐬</Button>
          </div>
          <hr />
          <div className="mt-3">
            {
              notes.map((note) => (
                <Alert variant="secondary" key={note.id} className='note-unit'>
                  <button type="button" className="delete btn-close" onClick={() => {Delete(note.id)}}></button>
                  <Alert.Heading>{note.name}</Alert.Heading>
                  <p>{note.content}</p>
                  <hr />
                  <div className="d-flex justify-content-end">
                    <small className="ms-4">{note.created_at.toLocaleDateString()}</small>
                    <small className="ms-4">{note.updated_at.toLocaleDateString()}</small>
                  </div>
                </Alert>
              ))
            }
          </div>
        </div>
      </main>
    </Layout>
  );
};
