import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import Layout from "../components/Layout";

type Note = {
  name: string;
  content: string;
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
            <ul>
              {notes.map((note) => (
                <li key={note.name}>
                  <p>{note.name}</p>
                  <p>{note.content}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
};
