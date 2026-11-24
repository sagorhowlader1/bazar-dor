"use client";

import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const toggleTheme = () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="থিম পরিবর্তন"
      className="btn btn-ghost btn-sm px-2"
    >
      <FaMoon className="text-lg hidden dark:block" />
      <FaSun className="text-lg dark:hidden" />
    </button>
  );
};

export default ThemeToggle;
