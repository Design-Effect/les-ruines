# Les Ruines — déploiement GitHub Pages

1. Créer le dépôt `les-ruines` sur github.com/Design-Effect.
2. Pousser TOUS les fichiers de ce dossier à la racine
   (index.html, manifest.json, sw.js, les 3 icônes).
3. Settings → Pages → Source : branche `main`, dossier `/ (root)`.
4. URL : https://design-effect.github.io/les-ruines/
   (2-3 min de propagation au premier déploiement).

iPhone : ouvrir l'URL dans Safari → Partager → « Sur l'écran d'accueil »
→ le jeu s'installe en plein écran, jouable hors-ligne.

⚠️ À chaque mise à jour du jeu, incrémenter `CACHE` dans sw.js
('ruines-v1' → 'ruines-v2'…) sinon les joueurs gardent l'ancienne version.
