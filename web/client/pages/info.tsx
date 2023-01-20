import { Button } from 'react-bootstrap';
import Layout from "../components/Layout";

export default function HelloWorld() {
  return (
    <Layout>
      <main>
        <div id="Info">
          <h1>Here, Info page.</h1>
          <Button variant='primary'></Button>
        </div>
      </main>
    </Layout>
  );
};
