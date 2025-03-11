import { useEffect, useState } from "react";

function DarkModeToggle() {
    const [isDarkMode, setİsDarkMode] = useState(
        () => {
            return localStorage.getItem('theme') === 'dark';
        }
    );

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    return (
        <button
            onClick={() => setİsDarkMode(!isDarkMode)}
            className="p-2 dark:bg-gray-600 dark:text-white bg-gray-200 text-gray-800 rounded">
            Dark Mode
        </button>
    );
}

export default DarkModeToggle;