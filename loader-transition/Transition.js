import gsap from 'gsap'
import BaseTransition from './BaseTransition'
import store from '../util/store'

export default class Transition extends BaseTransition {
  constructor(e) {
    super(e)
  }

  hideLoader() {
    return new Promise((resolve) => {
      const hideTl = gsap.timeline({
        onStart: () => {
          this.scrollToTop()
        },
        onComplete: () => {
          this.resetScroll()
          gsap.set(store.panel, { opacity: 0 })
          gsap.set(store.fade, { scale: 0 })
          resolve()
        }
      })

      hideTl
      .to(store.fade, {
        opacity: 0,
        duration: 0.5,
        ease: 'power1.in'
      })
    })
  }

  showLoader() {
    return new Promise((resolve) => {
      const showTl = gsap.timeline({
        onStart: () => {
          gsap.set([store.panel, store.fade], { opacity: 1 })
        },
        onComplete: () => {
          resolve()
        }
      })

      showTl
      .to(store.fade, {
        scale: 60,
        duration: 1,
        ease: 'power1.in'
      })
    })
  }
}
