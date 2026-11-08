# Les Ruines : déploiement GitHub Pages

1. Créer le dépôt `les-ruines` sur github.com/Design-Effect.
2. Pousser ces fichiers à la racine (et rien d'autre) :
   `index.html`, `sons.js`, `sw.js`, `manifest.json`, les 3 icônes, le dossier `polices/` (4 fichiers)
   et le dossier `sprites/` (272 images WebP, 2 Mo : le mineur rendu dans Blender).
   et `carte.webp` (190 Ko : l'illustration de l'écran Carte), `voix.js` (460 Ko : la voix off de l'intro).
3. Settings → Pages → Source : branche `main`, dossier `/ (root)`.
4. URL : https://design-effect.github.io/les-ruines/
   (2-3 min de propagation au premier déploiement).

iPhone : ouvrir l'URL dans Safari → Partager → « Sur l'écran d'accueil »
→ le jeu s'installe en plein écran, jouable hors-ligne.

⚠️ À chaque mise à jour du jeu, incrémenter `CACHE` dans sw.js
('ruines-v13' → 'ruines-v14'…) sinon les joueurs gardent l'ancienne version.
Tout fichier ajouté au jeu doit aussi entrer dans la liste `CORE` de sw.js :
le service worker ne fait aucun appel réseau, il ne sert que ce qu'il a précaché.

Sons : `sons.js` est généré par `fabriquer-sons.sh` (atelier, `projets/les-ruines/`) depuis la banque
`agents/expert-design/sons/`. Licences dans `LICENCES.md`.
