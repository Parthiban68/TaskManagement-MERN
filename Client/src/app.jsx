
import { Route, Routes } from 'react-router-dom'
import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import Profile from './Components/Profile/Profile'
import Home from './Components/Home/Home'
import { AuthProvider } from './Context/AuthContext'

function App() {

  return (
    <AuthProvider>
      <Home />
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </AuthProvider>

  )
}

export default App
