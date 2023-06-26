import { NavLink, Outlet } from 'react-router-dom';
import './HomePage.scss';
import { Suspense } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
// рендеримо шапку та компоненти нащадки
export default function HomePage() {
  return (
    <>
      <section className="container">
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

      <main>
        <section className="container">
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
      <footer></footer>
    </>
  );
}
