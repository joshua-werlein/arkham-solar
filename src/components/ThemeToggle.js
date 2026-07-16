import React from 'react';
import { useTheme } from '../ThemeContext';

// Sun (light mode) <-> moon (dark mode) icon crossfade. Both icons are
// drawn inline so we're not dependent on a specific lucide-react icon set.
// (Previously used a solar-panel glyph for dark mode, but it read as an
// unclear grid rather than an obvious "night" symbol — moon is clearer.)
export default function ThemeToggle({ style }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      style={style}
    >
      <span className="icon icon-sun" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="4.5" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="12" y1="1.5" x2="12" y2="4" />
            <line x1="12" y1="20" x2="12" y2="22.5" />
            <line x1="1.5" y1="12" x2="4" y2="12" />
            <line x1="20" y1="12" x2="22.5" y2="12" />
            <line x1="4.2" y1="4.2" x2="5.9" y2="5.9" />
            <line x1="18.1" y1="18.1" x2="19.8" y2="19.8" />
            <line x1="4.2" y1="19.8" x2="5.9" y2="18.1" />
            <line x1="18.1" y1="5.9" x2="19.8" y2="4.2" />
          </g>
        </svg>
      </span>
      <span className="icon icon-panel" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M20.5 15.5A8.5 8.5 0 019.2 4.2a8.5 8.5 0 1011.3 11.3z"
            fill="currentColor"
          />
        </svg>
      </span>
    </button>
  );
}
