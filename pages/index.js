import Layout from "../components/Layout";
import MainContent from "../components/MainContent";
import PrimaryNav from "../components/PrimaryNav";
import SideNav from "../components/SideNav";

export default function Home() {
  return (
    <Layout title="Codex">
      <main className="bg-slate-100 flex">
        <SideNav />
        <PrimaryNav />
        <MainContent />
      </main>

      <footer></footer>
    </Layout>
  );
}
