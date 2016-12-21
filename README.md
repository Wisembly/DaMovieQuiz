# DaMovieQuiz

> The best movie game ever made up. Maybe.

## Présentation

Nous t'invitons à coder un jeu génial nommé *Da Movie Quizz*, qui teste la culture cinématographique du joueur. Le principe de base est ultra simple:

Dans un temps imparti, le jeu présente au joueur sous forme de rounds un acteur et une affiche de film. Le joueur doit dire si l'acteur a joué dans le film présenté ou non.

Une fois le temps écoulé, le jeu s'arrête et donne le score à l'utilisateur. Il a la possibilité de rejouer pour tenter de battre son meilleur score.

Et voilà, plutôt basique, mais efficace et fun.

## En détail

### Pour bien commencer

- Fork le repository ou [download le zip](https://github.com/Wisembly/DaMovieQuiz/archive/master.zip) pour avoir un squelette de la base du jeu (dont tu peux voir une demo [ici](https://wisembly.github.io/DaMovieQuiz)). Celui-ci est bootstrapé avec [React](https://facebook.github.io/react/), notre framework CSS open-source [Tapestry](https://github.com/Wisembly/tapestry), et utilise ce bon vieux [Require.js](http://requirejs.org/) pour charger vos scripts en les transpilant à la volée (se soucier de bundler les assets n'a que peu d'intérêt pour un simple exercice ;).

- Comme tu pourras le constater, divers composants React sont déjà présents pour éviter de perdre trop de temps sur des détails. Nous t'encourageons à les modifier et les utiliser plutôt que de faire les tiens, mais c'est comme tu préfère. Ils sont là uniquement pour te faire gagner du temps, afin que tu puisse te concentrer sur ce qui compte.

- Dans cette app, on a besoin d'une source de données sur le cinéma. On te conseille fortement d'utiliser l'API de The Movie Database. Tu peux utiliser cette API KEY: `7ea5f490261a949e52930517e1b4657c`, mais ne la diffuse pas en dehors de cet exercice. Tu peux également en demander une depuis ton profil TMDB, onglet API. Ca s'obtient très vite et très facilement. Si tu préfères utiliser une autre API, no problem ;)

- Côté DB, pas de pré-requis: soit tout en mémoire, soit du local storage, soit .... ce que tu veux, mais ne perds pas trop de temps sur cette partie, au détriment de la partie front.

### Ce que tu dois faire

Le jeu arrive avec divers composants déjà faits, mais il lui manque quelques petites choses pour être réellement fonctionnel. Ainsi, nous te demandons de travailler sur les aspects suivants. Tu n'as pas à tous les faire: ne prend pas plus de quelques heures dessus.

- La principale fonctionnalité que nous attendons est que tu t'interface correctement sur une API en vue de récupérer les films et les acteurs.

- Bien que le composant d'affichage du timer soit déjà présent, le timer lui-même n'est pas encore implémenté. Une partie ne devrait durer qu'un temps limité.

- Nous apprécierions également avoir un leadeboard, dans lequel le joueur pourrait s'enregistrer et voir son score après la partie. Le faire persister en localStorage est un bonus intéressant.

- Il serait intéressant de pouvoir partager l'URL du leaderboard (disons `/leaderboard`). Est-ce que tu es tenté pour rajouter un peu de routing à l'application ? :)

### Ce que nous regarderons

Le sujet consiste uniquement à réaliser ce jeu mais, comme tu dois t'en douter, nous porterons une attention particulière à divers aspects de l'application. Par exemple:

- L'aspect gameplay ne sera que pas ou peu considéré. On ne recherche pas un game designer, mais un architecte :)

- Le jeu devrait fonctionner out-of-the-box sur les gh-pages de ton fork. En théorie, si tu as forké notre repository, ça devrait se faire automatiquement à chaque push.

- Nous serons sensibles au fait que tu utilises les même normes sur tes modifications que celles en place sur le reste du code. Si le style de ta PR ne fait qu'un avec le code déjà présent, c'est un bon point !

- Il est recommandé d'utiliser les API et syntaxes javascript les plus modernes si plusieures sont disponibles. Ce n'est pas obligatoire à strictement parler, mais c'est vraiment apprécié. De la même façon, évite d'utiliser des vendors lorsque des alternatives standards sont disponibles.

- La norme c'est une chose, mais le design de tes modifications doit être cohérent avec le code existant, ou le modifier pour rendre l'ensemble consistant. Par exemple, si tu décide d'utiliser un store global type Redux, nous porterons une utilisation particulière à la façon dont il est intégré au sein de l'application.

  - Cela ne veut pas dire qu'il faut utiliser uniquement un store global, ou uniquement le state des components :) Juste que nous nous assurerons que tu saches tirer parti de leurs avantages respectifs.

## Le rendu

Merci d'avoir participé à notre petit jeu ! Si tu as forké le repository, il te suffit maintenant de faire une pull request sur notre repository, de t'assurer que le code est accessible par les gh-pages (poste-nous le lien pour que ce soit plus simple), et nous aurons alors tout ce qu'il faut pour reviewer tes changements en toute tranquilité ! Après quoi nous reviendrons vers toi par mail.

Note que si tu ne souhaite pas que ton entreprise ait vent de ta candidature, il est préférable que tu te crée un compte temporaire juste pour l'occasion. Cela ne nous pose pas de problème, assure-toi juste de nous envoyer un petit mail lorsque tu as terminé.

## Des questions ?

Tu peux nous envoyer un email à tout moment! Pour celà:

- remy@wisembly.com
- guillaume@wisembly.com
