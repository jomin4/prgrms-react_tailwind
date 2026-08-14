import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import Home from './pages/Home.jsx'
import LessonPage from './pages/LessonPage.jsx'

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-left text-gray-800">
      <Sidebar />
      <main className="ml-72 flex-1 px-8 py-10">
        <div className="mx-auto max-w-3xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lesson/:id" element={<LessonPage />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App
