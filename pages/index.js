import Layout from "../components/Layout";
import { Container, Typography } from "@material-ui/core";
import Header from "../components/Header";
import Projects from "../components/Projects";
export default function Home() {
  return (
    <Layout>
      <Container>
        <Header />
        <Projects />
      </Container>
    </Layout>
  );
}
