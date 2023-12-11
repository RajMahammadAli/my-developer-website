import { Link } from "react-scroll";
export default function () {
  const navlinks = (
    <>
      <li>
        <Link to="home" smooth={true}>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link to="about" smooth={true}>
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link to="portfolio" smooth={true}>
          <a>Portfolio</a>
        </Link>
      </li>
      <li>
        <Link to="experience" smooth={true}>
          <a>Experience</a>
        </Link>
      </li>
      <li>
        <Link to="contact" smooth={true}>
          <a>Contact</a>
        </Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100 border fixed z-10">
        <div className="container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navlinks}
              </ul>
            </div>
            <a className="hidden sm:block text-4xl font-signature">
              Mahammad Ali
            </a>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navlinks}</ul>
          </div>
        </div>
      </div>
    </>
  );
}
