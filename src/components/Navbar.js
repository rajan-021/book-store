import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className=" flex justify-between items-center h-20 max-w-6xl mx-auto">
        <Link to={"/"}>
          <div className="ml-4">
            <h1 className="text-2xl font-bold text-white hover:text-green-400">Book Store</h1>          
          </div>
        </Link>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <Link to={"/"}>
            <p className="hover:text-green-400">Home</p>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
