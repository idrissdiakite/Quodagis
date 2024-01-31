import Block from './Block'
import gsap from 'gsap'
import store from '../util/store'


export default class Logos extends Block {
  init() {
    this.resize()
  }

  getElems() {
    this.$logos = this.el.querySelectorAll('.b-logos__logo')
    this.$wrapper = this.el.querySelector('.b-logos__wrapper')
    this.$list = this.el.querySelector('.b-logos__list')
  }

  onEnterCompleted() {
    store.observer.observe({
      el: this.el,
      cb: (inView) => {
        this.playMarquee && this.anim(inView)
      }
    })
  }

  events() {
    this.marqueeTl = gsap.timeline({})

    // On joue l'animation uniquement si tous les logos ne sont pas visibles à l'écran
    if (!store.detect.isMobile && this.playMarquee) {
      this.$wrapper.addEventListener('mouseenter', this.stopAnim.bind(this))
      this.$wrapper.addEventListener('mouseleave', this.playAnim.bind(this))
    }
  }

  anim(inView) {
    this.marqueeTl
    .to(this.$logos, {
      duration: 25,
      ease: 'none',
      x: `-=${this.fullWidth}`,
      modifiers: {
        x: gsap.utils.unitize((x) => this.wrap(parseFloat(x)))
      },
      repeat: -1
    })
    this.marqueeTl.pause()

    if (inView) this.marqueeTl.play(0)
    else this.marqueeTl.stop()
  }

  stopAnim() {
    this.marqueeTl.pause()
  }

  playAnim() {
    this.marqueeTl.play()
  }

  resize() {
    this.innerWidth = store.w.w < 1400 ? this.$logos[0].clientWidth + 40 : this.$logos[0].clientWidth + 50
    this.playMarquee = this.innerWidth * this.$logos.length > this.$wrapper.clientWidth
    this.fullWidth = this.innerWidth * this.$logos.length

    this.playMarquee && gsap.set(this.$list, { left: -210 })

    for (let i = 0; i < this.$logos.length; i++) {
      gsap.set(this.$logos[i], {
        x: i * this.innerWidth
      })
    }

    this.wrap = gsap.utils.wrap(0, this.fullWidth)
  }
}
