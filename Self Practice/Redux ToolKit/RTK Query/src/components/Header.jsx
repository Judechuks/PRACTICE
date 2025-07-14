import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-4 sticky top-0 flex justify-between bg-gray-800">
      <Link to="/" className="font-semibold text-lg">
        RTKQuery
      </Link>

      <nav className="flex gap-3 justify-between">
        <Link to="/create">Create</Link>
        <Link to="/read">Read</Link>
      </nav>
    </header>
  );
};

export default Header;
