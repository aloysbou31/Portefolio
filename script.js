/* ==========================================================
   Portfolio - Aloys Bouvier | BTS SIO SLAM
   Script partagé par toutes les pages
   À charger dans le <head> : <script src="script.js"></script>
   (sans "defer", pour appliquer le thème avant l'affichage
   et éviter un flash de la mauvaise couleur)
   ========================================================== */
(function () {
    'use strict';

    var root = document.documentElement;

    // Lecture / écriture sécurisées du thème (le stockage peut être bloqué)
    function getSavedTheme() {
        try {
            return localStorage.getItem('theme');
        } catch (e) {
            return null;
        }
    }

    function saveTheme(theme) {
        try {
            localStorage.setItem('theme', theme);
        } catch (e) {
            /* stockage indisponible : on ignore */
        }
    }

    // Thème initial : choix sauvegardé, sinon préférence du système
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var initialTheme = getSavedTheme() || (prefersDark ? 'dark' : 'light');
    root.setAttribute('data-theme', initialTheme);

    // Le reste nécessite que la page soit chargée
    document.addEventListener('DOMContentLoaded', function () {

        /* ---------- Thème clair / sombre ---------- */
        var themeBtn = document.getElementById('themeToggleBtn');
        var themeIcon = document.getElementById('themeIcon');
        var themeText = document.getElementById('themeText');

        function renderTheme(theme) {
            root.setAttribute('data-theme', theme);
            if (!themeBtn) return;
            if (theme === 'dark') {
                themeIcon.className = 'fa-solid fa-sun';
                themeText.textContent = 'Mode Clair';
                themeBtn.setAttribute('aria-label', 'Passer en mode clair');
            } else {
                themeIcon.className = 'fa-solid fa-moon';
                themeText.textContent = 'Mode Sombre';
                themeBtn.setAttribute('aria-label', 'Passer en mode sombre');
            }
        }

        renderTheme(root.getAttribute('data-theme'));

        if (themeBtn) {
            themeBtn.addEventListener('click', function () {
                var newTheme = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
                renderTheme(newTheme);
                saveTheme(newTheme); // on ne sauvegarde qu'après un choix volontaire
            });
        }

        /* ---------- Menu burger (mobile) ---------- */
        var aside = document.querySelector('aside');
        var menuBtn = document.getElementById('menuToggle');

        if (aside && menuBtn) {
            function setMenu(open) {
                aside.classList.toggle('menu-open', open);
                menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
            }

            menuBtn.addEventListener('click', function () {
                setMenu(!aside.classList.contains('menu-open'));
            });

            // Referme le menu après un clic sur un lien
            var links = aside.querySelectorAll('.sidebar-menu a');
            for (var i = 0; i < links.length; i++) {
                links[i].addEventListener('click', function () {
                    setMenu(false);
                });
            }
        }
    });
})();
