import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import './Layout.scss';

export default function Layout() {
  return (
    <>
      <section className="header">
        <header>
          <nav>
            <ul className="navigation">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/movies">Movies</NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </section>

      <main className="mainBlock">
        <section className="content">
          <Suspense
            fallback={
              <PropagateLoader
                color={'#ffaa06'}
                loading
                size={15}
                speedMultiplier={1}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            }
          >
            <Outlet />
          </Suspense>
        </section>
      </main>
    </>
  );
}
