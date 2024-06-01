const Navbar = () => {
  return (
    <div className="navbar bg-bgPrimary">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Compare</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Support</a>
            </li>
            <li>
              <a>Blog</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <a className="text-xl text-primary mx-6 font-sans font-bold">
          Banquee.
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-inter">
          <li>
            <a>Features</a>
          </li>
          <li>
            <details>
              <summary>Compare</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Support</a>
          </li>
          <li>
            <details>
              <summary>Blog</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end mr-14 text-sm gap-2 flex md:items-center">
        <button className="text-primary px-2 py-1 md:px-3 md:py-2">
          Login
        </button>
        <button className="bg-primary text-white px-2 py-1 md:px-3 md:py-2 rounded-md mt-2 md:mt-0">
          Open Account
        </button>
      </div>
    </div>
  );
};

export default Navbar;
