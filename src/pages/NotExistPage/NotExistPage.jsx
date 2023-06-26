import { NavLink } from 'react-router-dom';

export default function NotExistPage() {
  return (
    <div>
      <h2>This page does not Exists.</h2>
      <NavLink to="/">Home</NavLink>
    </div>
  );
}
