import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../components/layout/Layout.jsx';

// lazy: cada página só é baixada quando a pessoa entra nela (melhora a performance)
const Home = lazy(() => import('../pages/Home.jsx'));
const About = lazy(() => import('../pages/About.jsx'));
const Skills = lazy(() => import('../pages/Skills.jsx'));
const Projects = lazy(() => import('../pages/Projects.jsx'));
const ProjectDetail = lazy(() => import('../pages/ProjectDetail.jsx'));
const Contact = lazy(() => import('../pages/Contact.jsx'));
const NotFound = lazy(() => import('../pages/NotFound.jsx'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<p className="container section">Carregando...</p>}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/habilidades" element={<Skills />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/projetos/:repoName" element={<ProjectDetail />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}