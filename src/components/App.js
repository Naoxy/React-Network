import { useState } from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import MainLayout from "../layouts/MainLayout";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";


function App() {

  const [user, setUser] = useState({ author: "Jane Doe", authorPicture: 'https://picsum.photos/seed/profile4545/50/50', })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/:id" element={<ProfilePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </MainLayout>
    </UserContext.Provider>
  )
}

export default App;