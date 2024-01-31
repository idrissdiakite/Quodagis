import Block from './Block'
import gsap from 'gsap'
import store from '../util/store'

export default class Shapes extends Block {
  init() {
    this.playAnim = false
  }

  getElems() {
    this.$container = this.el.parentElement
    this.$purple = this.el.querySelector('.purple')
    this.$red = this.el.querySelector('.red')
  }

  onEnterCompleted() {
    store.observer.observe({
      el: this.el,
      cb: (inView) => {
        if (inView) {
          this.playAnim = true
          this.animShape(this.$purple)
          this.animShape(this.$red)
        }
      }
    })
  }

  animShape(element) {
    const { offsetWidth: elementWidth, offsetHeight: elementHeight } = element
    const { offsetWidth: containerWidth, offsetHeight: containerHeight } = this.$container

    gsap.to(element, {
      left: Math.random() * (containerWidth - elementWidth + 50),
      top: Math.random() * (containerHeight - elementHeight + 50),
      bottom: Math.random() * (containerHeight - elementHeight + 50),
      transform: 'translate3d(0, 0, 0)',
      duration: element === this.$purple ? 10 : 8,
      ease: 'power0',
      onComplete: () => this.playAnim && this.animShape(element)
    })
  }

  destroy() {
    this.playAnim = false
  }
}
