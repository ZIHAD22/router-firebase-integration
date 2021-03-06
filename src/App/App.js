import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
import Home from '../components/Home/Home'
import Login from '../components/Login/Login'
import NotFound from '../components/NotFound/NotFound'
import Orders from '../components/Orders/Orders'
import Products from '../components/Products/Products'
import Profile from '../components/Profile/Profile'
import Registration from '../components/Registration/Registration'
import RequireAuth from '../components/RequireAuth/RequireAuth'
import './App.css'

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/orders"
          element={
            <RequireAuth>
              <Orders />
            </RequireAuth>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
