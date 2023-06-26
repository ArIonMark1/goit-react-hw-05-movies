import { NavLink, Outlet } from 'react-router-dom';
import './HomePage.scss';
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
          <Outlet />
        </section>
      </main>
      <footer></footer>
    </>
  );
}
