![Screenshot](screenshot.png)

## 📍 Contexte

Thème wordpress sur-mesure développé au sein de l'agence Digital Cover.

À partir d'une maquette (Figma) réalisée par la directrice artistique, j'ai été en charge de tout le reste: mise en place du back-office (wordpress), intégration de la maquette, développement,  animations, recettage, mises en ligne (preprod et prod) etc...

## ⚙ Stack(s)

**Développement**
- Sage / Laravel Blade (PHP templating)
- Bootstrap (grid system)
- Javascript (ES6)
- Scss (méthode bem)
- Webpack
- Wordpress (ACF + CPT UI + Gravity Form)
- Gitlab + FileZila + SSH + OVH

**Librairies**
- Lenis
- Taxi
- Gsap/ScrollTrigger

## 🚦 Showcase

Exemples de blocks/composants/animations entièrement développés par mes soins:

## [Loader/Transition](https://github.com/idrissdiakite/quodagis/tree/main/loader-transition)

![Screenshot](https://github.com/idrissdiakite/quodagis/blob/main/loader-transition/screenshot.png)

**Description** 

Affichage et animation du logo Quodagis (svg) sous forme de loader lorsqu'on arrive pour la première fois sur le site ([Loader.js](https://github.com/idrissdiakite/quodagis/blob/main/loader-transition/Loader.js)) + mise en place d'une transition lorsqu'on change de page ([Transition.js](https://github.com/idrissdiakite/quodagis/blob/main/loader-transition/Transition.js)). Pour l'effet de transition, j'ai placé un cercle (span) au centre de l'écran avec une opacité à 1 ainsi qu'un before et un after avec une opacité moindre; Puis avec gsap je scale (jusqu'à 60) ce dernier pour obtenir l'effet d'aggrandissement.


<a href="https://www.youtube.com/watch?v=C0axi9ZZrg0" target="_blank">demo</a>

## [Moving shapes](https://github.com/idrissdiakite/quodagis/tree/main/moving-shapes)

![Screenshot](https://github.com/idrissdiakite/quodagis/blob/main/moving-shapes/screenshot.png)

**Description** 

Une des animation principale demandée et attendue sur le site était d'avoir en background et sur plusieurs blocks, 2 shapes mouvantes de taille plus ou moins égales mais de couleurs différentes (rouge et violette). Après avoir initialement placé en absolute les 2 shapes dans le block concerné, en javascript je récupère dans un premier temps l'*offsetWidth* et l'*offsetHeight* de chacune des shapes et du conteneur puis ensuite avec gsap, je modifie aléatoirement (grâce à la fonction **Math.random()**) la position (*top*, *left*, *bottom*) de chacune des shapes. Pour un rendu plus fluide, j'applique un *ease: power0* à l'animation ainsi qu'une durée plus longue à la shape violette. Enfin, grâce à la fonction **onComplete()** de gsap, une fois l'animation terminée, je relance cette dernière ce qui va donner cet effet de déplacement aléatoire des shapes en continu.

Pour une question de performance, la fonction **animShape()** est déclenchée uniquement lorsque le "block" est **in-view** et stoppée lorsque celui est **destroy**. À noter que pour avoir un effet "pastel" des shapes, un *filter: blur* a été applliqué en css aux différentes shapes. Néanmoins, je me suis aperçu que les couleurs et la propriété filter/blur n'était pas du tout géré et rendu de la même manière en fonction des navigateurs. En effet, sur Firefox notamment, le rendu des shapes était beaucoup trop prononcé c'est pourquoi j'ai appliqué une *opacité: 0.4* au conteneur (uniquement sur Firefox) afin de coller au mieux au résultat attendu (voire [slider-content.scss](https://github.com/idrissdiakite/quodagis/blob/main/moving-shapes/slider-content.scss))


<a href="https://www.youtube.com/watch?v=GCUl6THY2h4" target="_blank">demo</a>

## [Accordéon + Parallax](https://github.com/idrissdiakite/quodagis/tree/main/accordion-parallax)

![Screenshot](https://github.com/idrissdiakite/quodagis/blob/main/accordion-parallax/screenshot.png)

**Description** 

Présentation des différents services de Quodagis sous forme d'accordéon: de base j'affiche uniquement le titre de chaque item et au survol avec la souris (ou au click sur mobile) cela laisse apparaitre en dessous son contenu. Pour réaliser cette animation, j'ai attribué la propriété *max-height: 0* à tous les contenus puis en js, je récupère la hauteur du contenu survolé/clické (*this.$contents[i].scrollHeight*) que j'applique ensuite à la propriété max-height du contenu grace à Gsap.

Grâce à la classe javascript [Parallax](https://github.com/idrissdiakite/quodagis/blob/main/accordion-parallax/Parallax.js) et à la propriété *data-parallax="-1"* appliquée directement à la div **b-services__right** ([Parallax.js](https://github.com/idrissdiakite/quodagis/blob/main/accordion-parallax/our-services.blade.php)), j'ai également rajouté un effet de parallax sur l'image située à droite de l'accordéon afin d'améliorer l'expérience utilisateur (l'image translate sur y au scroll).

À noter que l'effet bicolore sur les titres a été obtenu grace à la propriété *background-clip: text* combinée à *text-fill-color: transparent* et *background: linear-gradient*.

<a href="https://www.youtube.com/watch?v=kxpsIvphKhE" target="_blank">demo</a>


## [Custom Cursor](https://github.com/idrissdiakite/quodagis/tree/main/custom-cursor)

![Screenshot](https://github.com/idrissdiakite/quodagis/blob/main/custom-cursor/screenshot.png)

**Description** 

Mise en place d'un custom cursor sur l'ensemble du site avec différentes variations (en jouant notamment sur le *mix-blend-mode*) en fonction du type d'élément/block survolé (cf. footer, menu, images etc..). Animations entièrement gérées avec Gsap dans le fichier [Cursor.js](https://github.com/idrissdiakite/quodagis/tree/main/custom-cursor).

<a href="https://www.youtube.com/watch?v=MFWeNpUYQeo" target="_blank">demo</a>


## [Marquee](https://github.com/idrissdiakite/quodagis/tree/main/marquee-logos)

![Screenshot](https://github.com/idrissdiakite/quodagis/blob/main/marquee-logos/screenshot.png)

**Description** 

Présentation de logos partenaires sous forme de marquee (défilement en continu). La difficulté ici à été de trouver le moyen de rendre pleinement fonctionnel et responsive le marquee quelque soit la taille d'écran ou bien encore le nombre de logos. 

<a href="https://www.youtube.com/watch?v=FMH0rG63Zzo" target="_blank">demo</a>

## [Map en rotation (scroll event)](https://github.com/idrissdiakite/quodagis/tree/main/rotated-map)

![Screenshot](https://github.com/idrissdiakite/quodagis/blob/main/rotated-map/screenshot.png)

**Description** 

Sur la page **implantations**, Quodagis souhaitait afficher en cover uniquement un titre ainsi qu'une moitié de map monde. Bénéficiant toutefois en asset de la map monde entière et pour ajouter un peu de dynamisme à la page, j'ai mis en place un effet de rotation sur la map lorsqu'on scroll aussi bien vers le haut que le bas. Pour cela, j'ai utilisé gsap et plus particulièrement scrolltrigger et notamment sa propriété "scrub" qui permet de lier un élément (*.b-cover-simple__image svg*) au scroll.

<a href="https://www.youtube.com/watch?v=dwmKmLvBkD8" target="_blank">demo</a>


## 🚀 Live

[https://quodagis.fr/](https://quodagis.fr/)
