import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import NewArticle from './pages/NewArticle.jsx'
import EditArticle from './pages/EditArticle.jsx'
import ViewArticle from './pages/ViewArticle.jsx'
import NotFound from './pages/NotFound.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewArticle />} />
          <Route path="/edit/:id" element={<EditArticle />} />
          <Route path="/a/:slug" element={<ViewArticle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
