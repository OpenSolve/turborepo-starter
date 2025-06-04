import {Link, Outlet} from 'react-router';

const BaseLayout = () => {
  return (
    <section>
      <header>
        <nav>
          <Link style={{marginRight: '0.5rem'}} to="/">
            Home
          </Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>
      <Outlet />
    </section>
  );
};

export default BaseLayout;
