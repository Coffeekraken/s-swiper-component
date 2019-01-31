import SWebComponent from "coffeekraken-sugar/js/core/SWebComponent"
import interact from 'interactjs'
import getTranslateProperties from 'coffeekraken-sugar/js/dom/getTranslateProperties'
import constrain from 'coffeekraken-sugar/js/utils/numbers/constrain'
import anim from 'animejs'

export default class SSwiperComponent extends SWebComponent {
  /**
   * Default props
   * @definition    SWebComponent.defaultProps
   * @protected
   */
  static get defaultProps() {
    return {

      /**
       * Specify if want some inertia when release the swipe
       * @prop
       * @type    {Boolean}
       */
      inertia: true,

      /**
       * Specify the axis on which the swiper has to operate. Can be `x` or `y`
       * @prop
       * @type    {String}
       */
      axis: 'x',

      /**
       * Specify the overflow allowed for the swiper
       * @prop
       * @type    {Number}
       */
      overflow: 100

    }
  }

  /**
   * Physical props
   * @definition    SWebComponent.physicalProps
   * @protected
   */
  static get physicalProps() {
    return ['axis']
  }

  /**
   * Css
   * @protected
   */
  static defaultCss(componentName, componentNameDash) {
    return `
      ${componentNameDash} {
        display : block;
      }
      ${componentNameDash}[axis="x"] .${componentNameDash}__swiper {
        white-space: nowrap
      }
      ${componentNameDash}[axis="x"] .${componentNameDash}__swiper > * {
        display: inline-block;
      }
    `
  }

  /**
   * Component will mount
   * @definition    SWebComponent.componentWillMount
   * @protected
   */
  componentWillMount() {
    super.componentWillMount()

    // check that the html requirement is fulfilled
    this._checkHtml()
  }

  /**
   * Mount component
   * @definition    SWebComponent.componentMount
   * @protected
   */
  componentMount() {
    super.componentMount()

    // get the $swiper element
    this._$swiper = this.children[0]
    this._$swiper.classList.add(`${this.componentNameDash}__swiper`)

    // init the drag
    interact(this._$swiper).draggable({
      inertia: this.props.inertia,
      onmove: this._dragMoveHandler.bind(this),
      onstart: this._dragStartHandler.bind(this),
      onend: this._dragEndHandler.bind(this)
    })

  }

  /**
   * Component unmount
   * @definition    SWebComponent.componentUnmount
   * @protected
   */
  componentUnmount() {
    super.componentUnmount()
  }

  /**
   * Component will receive prop
   * @definition    SWebComponent.componentWillReceiveProp
   * @protected
   */
  componentWillReceiveProp(name, newVal, oldVal) {
    super.componentWillReceiveProp(name, newVal, oldVal)
  }

  /**
   * Drag start handler
   * @param    {Event}    e    The drag start interactjs event
   */
  _dragStartHandler(e) {
    // get the initial translate properties
    this._currentTranslate = getTranslateProperties(this._$swiper)
  }

  /**
   * Drag move handler
   * @param    {Event}    e    The drag interactjs event
   */
  _dragMoveHandler(e) {

    // what we are going to calculate depend on the axis chosen in props
    if (this.props.axis === 'x') {

      // get the distance between start drag and now
      const dist = e.dx

      // update current translate x position
      this._currentTranslate.x += dist

      // calculate the new translate x position
      let newTranslateX = this._currentTranslate.x

      // constrain newTranslateX
      const min = -(this.swiperWidth-this.offsetWidth) - this.props.overflow * 2
      newTranslateX = constrain(newTranslateX, min, this.props.overflow * 2)

      const easeMin = (t) => {
        return t * (1-(1/(this.props.overflow*4)*t))
      }
      const easeMax = (t) => {
        return t * ((1/(this.props.overflow*4)*t))
      }

      let newTranslateXEase = null
      if (newTranslateX > 0) {
        newTranslateXEase = easeMin(newTranslateX)
      }
      if (newTranslateX < -(this.swiperWidth-this.offsetWidth)) {
        const delta =  (this.swiperWidth-this.offsetWidth) + newTranslateX
        newTranslateXEase = newTranslateX + easeMax(Math.abs(delta))
      }

      // set the new translate x on the swiper
      this._$swiper.style.transform = `translateX(${newTranslateXEase || newTranslateX}px)`

    } else {

      // get the distance between start drag and now
      const dist = e.dy

      // update current translate y position
      this._currentTranslate.y += dist

      // calculate the new translate x position
      let newTranslateY = this._currentTranslate.y

      // constrain newTranslateX
      const min = -(this.swiperHeight-this.offsetHeight) - this.props.overflow * 2
      newTranslateY = constrain(newTranslateY, min, this.props.overflow * 2)

      const easeMin = (t) => {
        return t * (1-(1/(this.props.overflow*4)*t))
      }
      const easeMax = (t) => {
        return t * ((1/(this.props.overflow*4)*t))
      }

      let newTranslateYEase = null
      if (newTranslateY > 0) {
        newTranslateYEase = easeMin(newTranslateY)
      }
      if (newTranslateY < -(this.swiperHeight-this.offsetHeight)) {
        const delta = (this.swiperHeight-this.offsetHeight) + newTranslateY
        newTranslateYEase = newTranslateY + easeMax(Math.abs(delta))
      }

      // set the new translate y on the swiper
      this._$swiper.style.transform = `translateY(${newTranslateYEase || newTranslateY}px)`

    }

  }

  /**
   * Drag end handler
   * @param    {Event}    e    The drag end interactjs event
   */
  _dragEndHandler(e) {

    if (this.props.axis === 'x') {
      if (this._currentTranslate.x > 0) {
        anim({
          targets: this._$swiper,
          translateX: 0,
          duration: 500
        })
      } else if (this._currentTranslate.x < -(this.swiperWidth-this.offsetWidth)) {
        anim({
          targets: this._$swiper,
          translateX: -(this.swiperWidth-this.offsetWidth),
          duration: 500
        })
      }
    } else {
      if (this._currentTranslate.y > 0) {
        anim({
          targets: this._$swiper,
          translateY: 0,
          duration: 500
        })
      } else if (this._currentTranslate.y < -(this.swiperHeight-this.offsetHeight)) {
        anim({
          targets: this._$swiper,
          translateY: -(this.swiperHeight-this.offsetHeight),
          duration: 500
        })
      }
    }

  }

  /**
   * Check that the html structure is well formed
   */
  _checkHtml() {
    // the component itself has to have 1 child
    if (this.children.length > 1) {
      throw new Error(`In order to work, the ${this.componentName} component has to have 1 direct child only`)
    }
  }

  /**
   * Get the swiper width
   */
  get swiperWidth() {
    let width = 0;
    Array.from(this._$swiper.children).forEach(($child) => {
      width += $child.offsetWidth
    })
    return width
  }

  /**
   * Get the swiper height
   */
  get swiperHeight() {
    let height = 0;
    Array.from(this._$swiper.children).forEach(($child) => {
      height += $child.offsetHeight
    })
    return height
  }

}
