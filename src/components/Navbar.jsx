const Navbar = () => {
  return (
    <div className="navbar bg-bgPrimary">
      <div className="navbar-start">
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
      <div className="navbar-end mr-14 text-sm gap-2">
        <button className="text-primary px-3 py-2">Login</button>
        <button className="bg-primary text-white px-3 py-2 rounded-md">
          Open Account
        </button>
      </div>
    </div>
  );
};

export default Navbar;
