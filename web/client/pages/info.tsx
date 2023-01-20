import { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import Layout from "../components/Layout";

type Singer = {
  name: string;
  birthday: string;
  hit_songs: string[];
};

export default function HelloWorld() {

  const [singers, setSingers] = useState<Singer[]>([]);

  const fetchSingers = async () => {
    const res = await fetch('/api/v1/singers');
    const singers = (await res.json()) as Singer[];
    console.log(singers);

    setSingers(singers);
  };

  return (
    <Layout>
      <main>
        <div id="Info">
          <h1>Here, Info page.</h1>
          <Button variant='outline-primary' onClick={fetchSingers}>Fetch 🐸</Button>
        </div>
        <Table>
          <thead>
            <tr>
              <th>name</th>
              <th>birthday</th>
              <th>hit songs</th>
            </tr>
          </thead>
          <tbody>
            {singers.map((singer) => (
              <tr key={singer.name}>
                <td>{singer.name}</td>
                <td>{singer.birthday}</td>
                <td>
                  <ul>
                    {singer.hit_songs.map((hit_song) => (
                      <li key={hit_song}>{hit_song}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </main>
    </Layout>
  );
};
