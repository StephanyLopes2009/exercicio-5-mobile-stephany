const btn = document.getElementById('theme-toggle');

btn.addEventListener('click', () => {
    // Alterna a classe 'dark-mode' no body
    document.body.classList.toggle('dark-mode');
});
