import Layout from "../components/Layout";
import SideNav from "../components/SideNav";

export default function Home() {
  return (
    <Layout title="Codex">
      <main className="bg-slate-100">
        <SideNav />
      </main>

      <footer></footer>
    </Layout>
  );
}
