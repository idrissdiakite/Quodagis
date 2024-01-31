import Block from './Block'
import gsap from 'gsap'
import store from '../util/store'

export default class SliderContent extends Block {
  onEnterCompleted() {
    this.currentIndex = 0

    this.drag()

    if (this.$section.querySelector('[data-slider="opacity"]') && !store.detect.isMobile) {
      this.$item[this.currentIndex].style.opacity = 1
    }
  }

  getElems() {
    this.$section = this.el.offsetParent
    this.$mButton = this.el.querySelector('.c-cards-slider__cursor')
    this.$hand = this.$mButton.querySelector('.c-cards-slider__cursor svg')
    this.$mArea = this.el.querySelector('.c-cards-slider__cards')
    this.$row = this.$mArea.querySelector('.row')
    this.$list = this.el.querySelector('.c-cards-slider__cards')
    this.$item = this.$list.querySelectorAll('.c-card')
    this.$button = this.el.querySelectorAll('.button-secondary')
  }

  events() {
    this.$list.addEventListener('mouseenter', () => {
      gsap.to(this.$mButton, {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      })
    })

    this.$list.addEventListener('mousemove', (e) => {
      this.callParallax(e)
    })

    this.$list.addEventListener('mouseleave', () => {
      this.resetParallax()
    })

    this.$button.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        gsap.to(this.$mButton, {
          scale: 0,
          opacity: 0
        })
      })
    })

    this.$button.forEach((el) => {
      el.addEventListener('mouseleave', () => {
        gsap.to(this.$mButton, {
          scale: 1,
          opacity: 1
        })
      })
    })

    if (this.$section.querySelector('[data-slider="opacity"]') && !store.detect.isMobile) {
      for (let i = 0; i < this.$item.length; i++) {
        this.$item[i].addEventListener('mouseenter', () => {
          if (i !== 0 && this.currentIndex === 0) this.$item[0].style.opacity = 0.6

          this.$item[i].style.opacity = 1
          this.currentIndex = i
        })

        this.$item[i].addEventListener('mouseleave', () => {
          this.$item[i].style.opacity = 0.6
        })
      }
    }
  }

  lerp(a, b, t) {
    return (1 - t) * a + t * b
  }

  drag() {
    if (store.w.w >= 1024) {
      gsap.set(this.$row, {
        overflow: 'auto'
      })

      let isDragging = false
      let startX, scrollLeft

      this.$list.addEventListener('mousedown', (e) => {
        isDragging = true
        startX = e.pageX - this.$list.offsetLeft
        scrollLeft = this.$row.scrollLeft

        gsap.to(this.$mButton, {
          backgroundColor: '#cb624b',
          duration: 0.3,
          ease: 'sine.out'
        })
      })

      this.$list.addEventListener('mouseleave', () => {
        isDragging = false
        gsap.to(this.$list, {
          duration: 0.5,
          ease: 'sine.out'
        })

        gsap.to(this.$mButton, {
          backgroundColor: '#b38ad1',
          duration: 0.3,
          ease: 'sine.out'
        })
      })

      this.$list.addEventListener('mouseup', () => {
        isDragging = false
        gsap.to(this.$list, {
          duration: 0.5,
          ease: 'sine.out'
        })

        gsap.to(this.$mButton, {
          backgroundColor: '#b38ad1',
          duration: 0.3,
          ease: 'sine.out'
        })
      })

      this.$list.addEventListener('mousemove', (e) => {
        if (!isDragging) return
        e.preventDefault()
        const x = e.pageX - this.$list.offsetLeft
        const walk = (x - startX) * 1
        const newScrollLeft = this.lerp(scrollLeft, scrollLeft - walk, 0.7)

        this.$row.scrollLeft = newScrollLeft

        gsap.to(this.$list, {
          duration: 0.5,
          ease: 'sine.out'
        })
      })
    }
  }

  parallaxIt(e, target, movement, area) {
    const boundingRect = area.getBoundingClientRect()
    const relX = e.pageX - boundingRect.left
    const relY = e.pageY - boundingRect.top
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    gsap.to(target, {
      x: (relX - boundingRect.width / 2) * movement,
      y: (relY - boundingRect.height / 2 - scrollTop) * movement,
      ease: 'power3.out',
      duration: 0.5
    })
  }

  callParallax(e) {
    if (this.$mButton) this.parallaxIt(e, this.$mButton, 1, this.$mArea)
    if (this.$hand) this.parallaxIt(e, this.$hand, 0.1, this.$mButton)
  }

  resetParallax() {
    if (this.$mButton) this.resetParallaxTween(this.$mButton)
    if (this.$hand) this.resetParallaxTween(this.$hand)
  }

  resetParallaxTween(e) {
    gsap.to(e, {
      top: '14.7rem',
      left: '29.4rem',
      transform: 'translate(0, 0)',
      duration: 0.5,
      ease: 'Expo.sineInOut'
    })
  }
}
