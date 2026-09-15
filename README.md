# Portefolio

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio - BTS SIO SLAM</title>
    <style>
        :root {
            --bg-color: #f4f6f9;
            --sidebar-bg: #1e293b;
            --sidebar-color: #94a3b8;
            --sidebar-hover: #38bdf8;
            --sidebar-active: #0ea5e9;
            --text-color: #334155;
            --card-bg: #ffffff;
            --primary-color: #0ea5e9;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            display: flex;
            min-height: 100vh;
        }

        /* Barre latérale gauche */
        aside {
            width: 260px;
            background-color: var(--sidebar-bg);
            color: #fff;
            position: fixed;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-shadow: 4px 0 10px rgba(0, 0, 0, 0.05);
        }

        .sidebar-header {
            padding: 30px 20px;
            text-align: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .sidebar-header h2 {
            font-size: 1.2rem;
            color: #fff;
            margin-bottom: 5px;
        }

        .sidebar-header p {
            font-size: 0.85rem;
            color: var(--sidebar-color);
        }

        .sidebar-menu {
            list-style: none;
            padding: 20px 0;
            flex-grow: 1;
        }

        .sidebar-menu li {
            margin: 5px 0;
        }

        .sidebar-menu a {
            display: block;
            padding: 12px 25px;
            color: var(--sidebar-color);
            text-decoration: none;
            font-size: 0.95rem;
            transition: all 0.3s ease;
            border-left: 4px solid transparent;
        }

        .sidebar-menu a:hover, .sidebar-menu a.active {
            color: #fff;
            background-color: rgba(255, 255, 255, 0.05);
            border-left-color: var(--sidebar-active);
        }

        .sidebar-footer {
            padding: 15px 20px;
            text-align: center;
            font-size: 0.8rem;
            color: var(--sidebar-color);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Contenu principal à droite */
        main {
            margin-left: 260px;
            flex-grow: 1;
            padding: 40px;
            max-width: 1000px;
        }

        section {
            background-color: var(--card-bg);
            padding: 30px;
            margin-bottom: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }

        section h1 {
            font-size: 1.8rem;
            color: var(--sidebar-bg);
            margin-bottom: 15px;
            border-bottom: 2px solid var(--primary-color);
            padding-bottom: 10px;
        }

        section h2 {
            font-size: 1.3rem;
            color: #475569;
            margin-top: 20px;
            margin-bottom: 10px;
        }

        p {
            line-height: 1.6;
            margin-bottom: 15px;
        }

        .btn {
            display: inline-block;
            background-color: var(--primary-color);
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: 600;
            transition: background 0.2s;
        }

        .btn:hover {
            background-color: #0284c7;
        }

        /* Responsive pour mobile */
        @media (max-width: 768px) {
            body {
                flex-direction: column;
            }
            aside {
                width: 100%;
                height: auto;
                position: relative;
            }
            main {
                margin-left: 0;
                padding: 20px;
            }
        }
    </style>
</head>
<body>

    <!-- Barre latérale -->
    <aside>
        <div>
            <div class="sidebar-header">
                <h2>Mon Portfolio</h2>
                <p>BTS SIO SLAM</p>
            </div>
            <ul class="sidebar-menu">
                <li><a href="#accueil" class="active">Accueil</a></li>
                <li><a href="#cv">CV</a></li>
                <li><a href="#tableau-synthese">Tab. Synthèse</a></li>
                <li><a href="#vt-cyber">V.T. Cybersécurité</a></li>
                <li><a href="#vt-choisie">V.T. Choisie</a></li>
                <li><a href="#stage1">Stage 1ère année</a></li>
                <li><a href="#stage2">Stage 2ème année</a></li>
            </ul>
        </div>
        <div class="sidebar-footer">
            <p>&copy; 2026 - Portfolio BTS SIO</p>
        </div>
    </aside>

    <!-- Contenu Principal -->
    <main>
        <section id="accueil">
            <h1>Accueil</h1>
            <p>Bienvenue sur mon portfolio officiel réalisé dans le cadre de mon <strong>BTS SIO (Services Informatiques aux Organisations)</strong> option <strong>SLAM</strong> (Solutions Logicielles et Applications Métiers).</p>
            <p>Ce site regroupe l'ensemble de mon parcours, mes compétences techniques, mes projets professionnels ainsi que mes travaux de veille technologique.</p>
        </section>

        <section id="cv">
            <h1>Curriculum Vitae</h1>
            <p>Retrouvez ci-dessous mon parcours académique, mes expériences professionnelles et mes compétences en développement et réseaux.</p>
            <a href="#" class="btn">Télécharger mon CV (PDF)</a>
        </section>

        <section id="tableau-synthese">
            <h1>Tableau de Synthèse</h1>
            <p>Le tableau de synthèse présente de manière globale les réalisations professionnelles menées au cours de ma formation.</p>
            <a href="#" class="btn">Voir le Tableau de Synthèse</a>
        </section>

        <section id="vt-cyber">
            <h1>Veille Technologique : Cybersécurité</h1>
            <p>Espace dédié à ma veille technologique obligatoire sur le thème de la cybersécurité (flux RSS, outils de veille, articles et synthèses).</p>
        </section>

        <section id="vt-choisie">
            <h1>Veille Technologique : Thème Libre</h1>
            <p>Présentation de ma seconde thématique de veille technologique axée sur une innovation ou un domaine technique spécifique.</p>
        </section>

        <section id="stage1">
            <h1>Stage de 1ère année</h1>
            <p>Bilan de mon stage de première année : présentation de la structure d'accueil, des missions réalisées, des technologies mobilisées et des livrables produits.</p>
        </section>

        <section id="stage2">
            <h1>Stage de 2ème année</h1>
            <p>Bilan de mon stage de deuxième année : présentation du projet principal d'infrastructure ou de développement mené en entreprise.</p>
        </section>
    </main>

    <script>
        // Script simple pour animer le menu actif au scroll
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.sidebar-menu a');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 60) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        });
    </script>

</body>
</html>
