import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AdminConfirmados from './pages/Confirm'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/confirmados" element={<AdminConfirmados />} />
    </Routes>
  )
}

export default App
