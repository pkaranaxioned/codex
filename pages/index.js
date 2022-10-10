import Layout from "../components/Layout";
import MainContent from "../components/MainContent";
import SideNav from "../components/SideNav";

export default function Home() {
  return (
    <Layout title="Codex">
      <main className="bg-slate-100">
        <MainContent />
      </main>

      <footer></footer>
    </Layout>
  );
}
