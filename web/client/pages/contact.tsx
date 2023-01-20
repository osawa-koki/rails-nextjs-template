import React, { useState } from "react";

import { Button, Alert, Form } from 'react-bootstrap';
import Layout from "../components/Layout";

import PageBlock from "../components/pages";

const mail_regex = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);

export default function HelloWorld() {

  let [count, setCount] = useState(0);
  let [mail, setMail] = useState('osawa-koki@example.com');

  return (
    <Layout>
      <main>
        <div id="Contact">
          <h1>Dummy Contact.</h1>
          <PageBlock />
          <Alert variant="info">You cliecked { count } times 🤣🤣🤣</Alert>
          <Button variant="primary" onClick={() => {setCount(count + 1)}}>Click Me {((count % 3 === 0 && count !== 0) || /3/.test(count.toString()) ? '🤪' : '😀')}</Button>
          <hr />
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={mail} onInput={(e) => {setMail((e.target as HTMLInputElement).value)}} />
            <Form.Text>
              We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        {
          mail_regex.test(mail) ? (
            <Alert variant="success">Your email is valid.</Alert>
          ) : (
            <Alert variant="danger">Your email is invalid.</Alert>
          )
        }
        </div>
      </main>
    </Layout>
  );
};
