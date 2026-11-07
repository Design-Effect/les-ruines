# Les Ruines : déploiement GitHub Pages

1. Créer le dépôt `les-ruines` sur github.com/Design-Effect.
2. Pousser TOUS les fichiers de ce dossier à la racine :
   `index.html`, `sons.js`, `sw.js`, `manifest.json`, les 3 icônes, et le dossier `polices/` (4 fichiers).
3. Settings → Pages → Source : branche `main`, dossier `/ (root)`.
4. URL : https://design-effect.github.io/les-ruines/
   (2-3 min de propagation au premier déploiement).

iPhone : ouvrir l'URL dans Safari → Partager → « Sur l'écran d'accueil »
→ le jeu s'installe en plein écran, jouable hors-ligne.

⚠️ À chaque mise à jour du jeu, incrémenter `CACHE` dans sw.js
('ruines-v5' → 'ruines-v6'…) sinon les joueurs gardent l'ancienne version.
Tout fichier ajouté au jeu doit aussi entrer dans la liste `CORE` de sw.js :
le service worker ne fait aucun appel réseau, il ne sert que ce qu'il a précaché.

Sons : `sons.js` est généré par `fabriquer-sons.sh` (atelier, `projets/les-ruines/`) depuis la banque
`agents/expert-design/sons/`. Licences dans `LICENCES.md`.
