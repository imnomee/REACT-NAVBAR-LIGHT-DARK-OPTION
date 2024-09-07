import './NavBar.css';

const NavBar = ({ theme, setTheme }) => {
    const toggleMode = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };
    return (
        <div className="navbar">
            <img
                src="https://placehold.co/200x100"
                alt="logo"
                className="logo"
            />
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Features</li>
                <li>About</li>
            </ul>
            <div className="search-box">
                <input type="text" placeholder="Search..." />
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
            </div>
            <div className="toggle-mode" onClick={() => toggleMode()}>
                {theme === 'light' ? (
                    <i className="fa-solid fa-moon"></i>
                ) : (
                    <i className="fa-solid fa-sun"></i>
                )}
            </div>
        </div>
    );
};

export default NavBar;
