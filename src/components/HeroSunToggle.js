import React from 'react';
import { useTheme } from '../ThemeContext';

// Sits directly on top of the sun already baked into the hero photo.
// Re-verified with a strict brightness-threshold scan of just the solid
// disc (not the surrounding soft glow, which can skew a centroid): the
// disc's bounding-box center holds steady at 86.96% / 40.9% across every
// threshold tested, so that's the position used below. The hero photo is rendered
// with object-fit: fill, which stretches width and height independently to
// exactly match the container — so a percentage position here always maps
// to the same point in the photo no matter the window size; it isn't an
// approximation. Below 768px the photo switches to object-fit: cover
// (see index.css), which crops instead of stretching, so the percentage
// would drift — this control is hidden there and the navbar toggle takes
// over. No drawn icon here on purpose — the photo's own sun (or the
// lightened/warm version of it) already reads fine in both themes, so this
// is just an invisible hit target with a pulsing ring as the "click me"
// hint. Clicking it toggles the site theme.
export default function HeroSunToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="hero-sun-toggle"
      aria-label={isDark ? 'Switch to daylight mode' : 'Switch to night mode'}
      style={{
        position: 'absolute',
        left: '86.96%',
        top: '41%',
        // Matches the sun disc's own diameter (~3% of the photo's width,
        // measured directly from the source image) so the ring's border
        // sits right on the disc's edge instead of floating around it.
        width: 'clamp(28px, 3vw, 50px)',
        height: 'clamp(28px, 3vw, 50px)',
        transform: 'translate(-50%, -50%)',
        zIndex: 2,
      }}
    >
      <span className="hero-sun-toggle__ring" aria-hidden="true" />
      <span className="hero-sun-toggle__pulse" aria-hidden="true" />
      <span className="hero-sun-toggle__tip">{isDark ? 'Tap for daylight' : 'Tap for night'}</span>
    </button>
  );
}
