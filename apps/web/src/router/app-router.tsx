import BaseLayout from '@/layouts/base-layout';
import LoginPage from '@/modules/auth/components/login-page';
import HomePage from '@/modules/home/components/home-page';
import {Route, BrowserRouter as Router, Routes} from 'react-router';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
