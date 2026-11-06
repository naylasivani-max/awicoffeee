import React from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-[border-color] duration-150 hover:border-ink/30">
      
      {isDark ? <SunIcon className="h-[18px] w-[18px]" aria-hidden="true" /> : <MoonIcon className="h-[18px] w-[18px]" aria-hidden="true" />}
    </button>);

}