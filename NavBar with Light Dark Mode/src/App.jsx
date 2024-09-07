import { useState } from 'react';
import NavBar from './Components/NavBar';

const App = () => {
    const [theme, setTheme] = useState('light');

    return (
        <div className={`container ${theme}`}>
            <NavBar theme={theme} setTheme={setTheme} />
        </div>
    );
};

export default App;
