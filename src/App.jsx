import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Posts from './pages/Posts';
import PostView from './components/PostView';
import Songs from './pages/Songs';
import Photos from './pages/Photos';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import Sifrina from './pages/Sifrina';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts type="normal" />} />
      <Route path="/posts/:id" element={<PostView type="normal" />} />
      <Route path="/photos" element={<Photos type="normal" />} />
      <Route path="/songs" element={<Songs />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/sifrina" element={<Sifrina />} />
      <Route path="/sifrina/posts" element={<Posts type="sifrina" />} />
      <Route path="/sifrina/posts/:id" element={<PostView type="sifrina" />} />
      <Route path="/sifrina/photos" element={<Photos type="sifrina" />} />
    </Routes>
  );
}
