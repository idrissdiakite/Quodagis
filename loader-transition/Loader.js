import gsap from 'gsap'
import store from './store'

export default class Loader {
  constructor() {
    this.getElems()
    this.setElems()
  }

  getElems() {
    store.panel = document.querySelector('.panel')
    this.$logo = document.querySelectorAll('.panel .image')
    this.$logoPaths = document.querySelectorAll('.panel .image svg path')
  }

  setElems() {
    gsap.set(this.$logoPaths, {
      y: -20,
      alpha: 0
    })
    gsap.set(this.$logo, {opacity: 1})
  }

  play() {
    return new Promise((resolve) => {
      const tl = gsap.timeline({
        onStart: () => {
          store.smoothScroll.stop()
        },
        onComplete: () => {
          store.smoothScroll.start()

          store.menu && !store.detect.isMobile && store.menu.init()

          window.dispatchEvent(new CustomEvent('loaderComplete'))
          store.isFirstLoaded = true

          resolve()
        }
      })

      // eslint-disable-next-line prefer-reflect
      tl
      .to(this.$logoPaths, {
        y: 0,
        alpha: 1,
        duration: 2,
        stagger: 0.1,
        ease: 'power3.out'
      })
      .to(this.$logoPaths, { alpha: 0})
      .to(store.panel, {
        opacity: 0,
        duration: 0.3,
        pointerEvents: 'none',
        ease: 'power3.out'
      }, '>')
    })
  }
}
