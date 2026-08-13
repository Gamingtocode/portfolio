// Theme toggle with localStorage persistence
const toggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Load saved theme or system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
  html.setAttribute('data-theme', 'dark');
  toggle.textContent = '☀️';
}

toggle.addEventListener('click', () => {
  const isDark = html.getAttribute('data-theme') === 'dark';
  
  if (isDark) {
    html.removeAttribute('data-theme');
    toggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    html.setAttribute('data-theme', 'dark');
    toggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
});
