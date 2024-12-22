import { Route, Routes } from 'react-router';
import HomePage from './pages/home-page';
import AuthLayout from './layouts/auth-layout';
import SignInPage from './pages/sign-in-page';
import RegisterPage from './pages/register-page';
import LinksPage from './pages/links-page';
import ProfileLayout from './layouts/profile-layout';
import ProfilePage from './pages/profile-page';
import PreviewPage from './pages/preview-page';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route element={<AuthLayout />}>
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
      <Route element={<ProfileLayout />}>
        <Route path="links" element={<LinksPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
      <Route path="preview" element={<PreviewPage />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}

export default App;
