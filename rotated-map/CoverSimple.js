import Block from './Block'
import gsap from 'gsap'
import store from '../util/store'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


export default class CoverSimple extends Block {
  init() {
    gsap.set(this.$title, {
      y: 20,
      opacity: 0
    })
    gsap.set([this.$shapes, this.$allPaths], { opacity: 0 })
  }

  getElems() {
    this.$title = this.el.querySelector('.b-cover-simple__title')
    this.$shapes = this.el.querySelectorAll('.b-cover-simple__shape')
    this.$image = this.el.querySelector('.b-cover-simple__image svg')
    this.$allPaths = this.el.querySelectorAll('.b-cover-simple__image svg path')
  }

  onEnterCompleted() {
    this.rotateMap()

    store.observer.observe({
      el: this.el,
      cb: () => {
        setTimeout(() => {
          this.anim()
        }, '500')
      }
    })
  }

  anim() {
    const animTl = gsap.timeline({
      defaults: {
        opacity: 1,
        duration: 0.5,
        ease: 'power4.easein'
      }
    })

    animTl
    .to(this.$title, {y: 0})
    .to(this.$allPaths, {duration: 2})
    .to(this.$shapes, {duration: 5}, '<')
  }

  rotateMap() {
    gsap.to(this.$image, {
      scrollTrigger: {
        trigger: this.el,
        start: 'top',
        end: 'bottom',
        scrub: 1
      },
      rotate: '50deg'
    })
  }
}
