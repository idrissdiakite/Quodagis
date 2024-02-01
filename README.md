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

Mise en place d'un custom cursor sur l'ensemble du site avec différentes variations (en jouant notamment sur le *mix-blend-mode*) en fonction du type d'élément/block survolé. Animations entièrement gérées avec Gsap dans le fichier [Cursor.js](https://github.com/idrissdiakite/quodagis/tree/main/custom-cursor).

<a href="https://www.youtube.com/watch?v=MFWeNpUYQeo" target="_blank">demo</a>



## [Slider (drag'n'drop)](https://github.com/idrissdiakite/quodagis/tree/main/draggable-slider)

![Screenshot](https://github.com/idrissdiakite/quodagis/blob/main/draggable-slider/screenshot.png)

**Description** 

<a href="https://www.youtube.com/watch?v=wsVDNjBv-ug" target="_blank">demo</a>

## [Marquee](https://github.com/idrissdiakite/quodagis/tree/main/marquee-logos)

![Screenshot](https://github.com/idrissdiakite/quodagis/blob/main/marquee-logos/screenshot.png)

**Description** 

<a href="https://www.youtube.com/watch?v=FMH0rG63Zzo" target="_blank">demo</a>

## [Map en rotation (scroll event)](https://github.com/idrissdiakite/quodagis/tree/main/rotated-map)

![Screenshot](https://github.com/idrissdiakite/quodagis/blob/main/rotated-map/screenshot.png)

**Description** 

<a href="https://www.youtube.com/watch?v=dwmKmLvBkD8" target="_blank">demo</a>

## [Moving shapes](https://github.com/idrissdiakite/quodagis/tree/main/moving-shapes)

![Screenshot](https://github.com/idrissdiakite/quodagis/blob/main/moving-shapes/screenshot.png)

**Description** 

<a href="https://www.youtube.com/watch?v=GCUl6THY2h4" target="_blank">demo</a>


## 💫 Live

[https://quodagis.fr/](https://quodagis.fr/)
