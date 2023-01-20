import Layout from "../components/Layout";

export default function HelloWorld() {
  return (
    <Layout>
      <main>
        <div id="About">
          <h1>Here, About page.</h1>
          <p>「Rails × Nextjs」<br /><br />RailsっていうとMVCベースのWEBフレームワークっていう感じでしたが、APIモードもあるらしいです。<br />機能もMVCベースのRailsを継承しているため、非常に充実しているため、簡単にAPIベースのシステム構築ができます。<br /><br />いいですね！</p>
        </div>
      </main>
    </Layout>
  );
};
