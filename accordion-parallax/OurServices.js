import Block from './Block'
import gsap from 'gsap'
import store from '../util/store'


export default class OurServices extends Block {
  init() {
    this.reset()
  }

  getElems() {
    this.$container = this.el
    this.$suptitle = this.el.querySelector('.b-services__suptitle')
    this.$services = this.el.querySelectorAll('.b-services__service')
    this.$titles = this.el.querySelectorAll('.b-services__service-title')
    this.$contents = this.el.querySelectorAll('.b-services__service-content')
    this.$descriptions = this.el.querySelectorAll('.b-services__service-description')
    this.$links = this.el.querySelectorAll('.b-services__service-link')
  }

  events() {
    for (let i = 0; i < this.$titles.length; i++) {
      store.detect.isMobile && this.$titles[i].addEventListener('click', this.showContent.bind(this, i))
      !store.detect.isMobile && this.$titles[i].addEventListener('mouseenter', this.showContent.bind(this, i))
    }
  }

  showContent(i) {
    const animTl = gsap.timeline({
      defaults: {
        duration: 0.4,
        ease: 'power3.easein'
      }
    })

    if (i !== this.currentIndex) {
      this.maxHeight = this.$contents[i].scrollHeight

      animTl
      .to(this.$contents[this.currentIndex], { maxHeight: 0 })
      this.$titles[this.currentIndex].classList.remove('colored')
      this.$titles[i].classList.add('colored')
      animTl.to(this.$contents[i], { maxHeight: this.maxHeight }, '<')

      this.currentIndex = i
    }
  }

  reset() {
    this.currentIndex = 0
    this.maxHeight = this.$contents[this.currentIndex].scrollHeight

    gsap.set(this.$contents, { maxHeight: 0 })
    gsap.set(this.$titles, { color: '#232323' })
    gsap.set(this.$contents[this.currentIndex], { maxHeight: this.maxHeight })
    this.$titles[this.currentIndex].classList.add('colored')
  }

  resize() {
    this.reset()
  }
}
