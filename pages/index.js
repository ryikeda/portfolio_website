import Layout from "../components/Layout";
import Header from "../components/Header";
import Projects from "../components/Projects";
import SocialLinks from "../components/SocialLinks";
export default function Home() {
  return (
    <Layout>
      <Header isHomepage />
      <Projects />
      <SocialLinks />
    </Layout>
  );
}
