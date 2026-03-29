   const toggle = document.getElementById('themeToggle');
    const icon = toggle.querySelector('.toggle-icon');
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') { document.documentElement.setAttribute('data-theme', 'dark'); icon.textContent = '☀️'; }
    toggle.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
      icon.textContent = isDark ? '🌙' : '☀️';
      localStorage.setItem('theme', isDark ? 'light' : 'dark');
    });