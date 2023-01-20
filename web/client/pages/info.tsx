import { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import Layout from "../components/Layout";

type Actress = {
  name: string;
  birthday: Date;
  birthplace: string;
};

export default function HelloWorld() {

  const [actresses, setActresses] = useState<Actress[]>([]);

  const fetchActresses = async () => {
    const res = await fetch('/api/v1/actresses');
    const actresses = await res.json();
    setActresses(actresses);
  };

  return (
    <Layout>
      <main>
        <div id="Info">
          <h1>Here, Info page.</h1>
          <Button variant='outline-primary'>Fetch 🐸</Button>
        </div>
        <Table>
          <thead>
            <tr>
              <th>name</th>
              <th>birthday</th>
              <th>birthplace</th>
            </tr>
          </thead>
          <tbody>
            {actresses.map((actress) => (
              <tr key={actress.name}>
                <td>{actress.name}</td>
                <td>{actress.birthday}</td>
                <td>{actress.birthplace}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </main>
    </Layout>
  );
};
