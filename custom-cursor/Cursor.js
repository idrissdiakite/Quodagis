import gsap from 'gsap'
import store from './store'

export default class Cursor {
  constructor() {
    this.getElems()
    this.init()
  }

  init() {
    if (store.detect.isMobile) return

    this.set()
    this.events()
    this.update()
  }

  getElems() {
    this.$cursor = document.querySelector('.e-cursor')
    this.$submenu = document.querySelector('.header__submenu .submenu')
    this.$sublinks = document.querySelectorAll('.header__submenu .submenu__item')
    this.$footer = document.querySelector('footer')
  }

  set() {
    gsap.set(this.$cursor, {
      xPercent: -50,
      yPercent: -50
    })
  }

  events() {
    const xTo = gsap.to(this.$cursor, {
      duration: 0.6,
      ease: 'power4',
      x: 0,
      onUpdate: () => {
        this.$cursor.style.transform = `translate(${xTo.x}px, ${xTo.y}px)`
      }
    }),
      yTo = gsap.to(this.$cursor, {
        duration: 0.6,
        ease: 'power4',
        y: 0
      })

    window.addEventListener('mousemove', (e) => {
      xTo.kill()
      yTo.kill()

      xTo.vars.x = e.clientX
      yTo.vars.y = e.clientY

      xTo.invalidate()
      yTo.invalidate()

      xTo.restart()
      yTo.restart()
    })

    this.cursorTl = gsap.timeline({
      defaults: {
        duration: 0.2,
        ease: 'power4.easein'
      }
    })

    this.submenuTl = gsap.timeline({
      defaults: {
        duration: 0.3,
        ease: 'power2.easein'
      }
    })

    for (let i = 0; i < this.$sublinks.length; i++) {
      this.$sublinks[i].addEventListener('mouseenter', this.bigCursorSubmenu.bind(this))
      this.$sublinks[i].addEventListener('mouseleave', this.smallCursorSubmenu.bind(this))
    }

    this.$footer.addEventListener('mouseover', this.cursorFooter.bind(this))
    this.$footer.addEventListener('mouseleave', this.resetCursorFooter.bind(this))
  }

  checkImages() {
    this.$images = document.querySelectorAll('img')

    for (let i = 0; i < this.$images.length; i++) {
      this.$images[i] && this.$images[i].addEventListener('mouseover', this.cursorImages.bind(this))
      this.$images[i] && this.$images[i].addEventListener('mouseleave', this.resetCursorImages.bind(this))
    }
  }

  cursorImages() {
    gsap.set(this.$cursor, {mixBlendMode: 'hard-light'})
  }

  resetCursorImages() {
    gsap.set(this.$cursor, {mixBlendMode: 'color-burn'})
  }

  checkSliders() {
    this.$sliders = document.querySelector('b-slider-content .c-cards-slider__cards')

    this.$sliders && this.$sliders.addEventListener('mouseover', this.hideCursor.bind(this))
    this.$sliders && this.$sliders.addEventListener('mouseleave', this.showCursor.bind(this))
  }

  hideCursor() {
    gsap.set(this.$cursor, {display: 'none'})
  }

  showCursor() {
    gsap.set(this.$cursor, {display: 'block'})
  }

  checkSubmenu() {
    this.submenuOpen = document.querySelector('.sub-open')

    if (this.submenuOpen) {
      this.$cursor.classList.add('c-submenu')
    } else {
      this.$cursor.classList.remove('c-submenu')
      gsap.set(this.$cursor, {
        width: '2rem',
        height: '2rem'
      })
    }
  }

  bigCursorSubmenu() {
    this.submenuTl
    .to(this.$cursor, {
      width: '20rem',
      height: '20rem'
    })
  }

  smallCursorSubmenu() {
    this.submenuTl
    .to(this.$cursor, {
      width: '6rem',
      height: '6rem'
    })
  }

  cursorFooter() {
    this.cursorTl
      .to(this.$cursor, { mixBlendMode: 'screen' })
  }

  resetCursorFooter() {
    this.cursorTl
    .to(this.$cursor, { mixBlendMode: 'color-burn' })
  }

  update() {
    this.checkSubmenu()
    this.checkSliders()
    this.checkImages()
  }

  resize() {
    if (store.detect.isMobile) return
    this.set()
    this.events()
  }
}
