import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { Ask } from "./pages/Ask";
import { About } from "./pages/About";
import { Sources } from "./pages/Sources";
import { Ornaments as DevOrnaments } from "./pages/dev/Ornaments";

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ask" element={<Ask />} />
        <Route path="/about" element={<About />} />
        <Route path="/sources" element={<Sources />} />
        {import.meta.env.DEV ? (
          <Route path="/_dev/ornaments" element={<DevOrnaments />} />
        ) : null}
      </Routes>
    </Layout>
  );
}
