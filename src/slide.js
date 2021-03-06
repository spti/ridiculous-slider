import React from 'react'

function getViewportHeight() {
  return window.innerHeight && document.documentElement.clientHeight ?
    Math.min(window.innerHeight, document.documentElement.clientHeight) :
    window.innerHeight || document.documentElement.clientHeight
      || (document.querySelector('body').clientHeight || document.getElementsByTagName('body')[0].clientHeight);
}

class Slide extends React.Component {
  constructor(options) {
    super()

    this.dom = React.createRef()

    // we'll use this to determine if section is in the viewport
    this.vH = getViewportHeight()
    this.inViewPrev = false

    window.addEventListener('resize', () => {
      this.vH = getViewportHeight()
    })

    window.addEventListener('scroll', () => {
      // if (!this.visible)
      //   return

      const inView = this.isInView()
      if (this.inViewPrev != inView) {
        // console.log('slide, inView changed, inView, slideId:', inView, this.props.id)
        if (inView) this.props.inViewCb(this.props.id)
        this.inViewPrev = inView
      }
    })
  }

  isInView() {
    const rect = this.dom.current.getBoundingClientRect()

    return (
      rect.top >= Math.round((this.vH/3)*-1) &&
      rect.top <= Math.round(this.vH/3)
      // rect.left >= 0 &&
      // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
      // rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    )
  }

  render() {
    return (
      <div id={this.props.id} className={this.props.className}
        onClick={this.props.clickCb} ref={this.dom}>
      {this.props.children}
      </div>
    )
  }
}

export {Slide}
