import { useEffect, useState } from 'react';
import NavBar from './Components/NavBar';

const App = () => {
    const current_theme = localStorage.getItem('current_theme');
    const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

    useEffect(() => {
        localStorage.setItem('current_theme', theme);
    }, [theme]);
    return (
        <div className={`container ${theme}`}>
            <NavBar theme={theme} setTheme={setTheme} />
        </div>
    );
};

export default App;
