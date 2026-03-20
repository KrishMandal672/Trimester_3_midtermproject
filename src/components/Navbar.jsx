import { Link } from "react-router-dom";

function NavBar({ count }) {
  return (
    <div className="fixed top-0 left-0 w-full h-16 px-6 flex justify-between items-center bg-neutral-900 text-neutral-200 z-50">
      
      {/* LEFT: App Name */}
      <Link to="/" className="relative group font-medium text-lg">
        <span className="group-hover:text-white transition-colors duration-300">
          Daily Motivation
        </span>

        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
      </Link>

      {/* RIGHT: Home + Liked */}
      <div className="flex items-center gap-8">
        
        {/* Home */}
        <Link to="/" className="relative group text-lg">
          <span className="group-hover:text-white transition-colors duration-300">
            Home
          </span>

          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Liked */}
        <Link to="/liked" className="relative group text-lg">
          <span className="group-hover:text-white transition-colors duration-300">
            ❤️ {count}
          </span>

          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>

      </div>

    </div>
  );
}

export default NavBar