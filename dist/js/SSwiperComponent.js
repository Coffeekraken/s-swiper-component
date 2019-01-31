"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _SWebComponent2 = _interopRequireDefault(require("coffeekraken-sugar/js/core/SWebComponent"));

var _interactjs = _interopRequireDefault(require("interactjs"));

var _getTranslateProperties = _interopRequireDefault(require("coffeekraken-sugar/js/dom/getTranslateProperties"));

var _constrain = _interopRequireDefault(require("coffeekraken-sugar/js/utils/numbers/constrain"));

var _animejs = _interopRequireDefault(require("animejs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SSwiperComponent =
/*#__PURE__*/
function (_SWebComponent) {
  _inherits(SSwiperComponent, _SWebComponent);

  function SSwiperComponent() {
    _classCallCheck(this, SSwiperComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(SSwiperComponent).apply(this, arguments));
  }

  _createClass(SSwiperComponent, [{
    key: "componentWillMount",

    /**
     * Component will mount
     * @definition    SWebComponent.componentWillMount
     * @protected
     */
    value: function componentWillMount() {
      _get(_getPrototypeOf(SSwiperComponent.prototype), "componentWillMount", this).call(this); // check that the html requirement is fulfilled


      this._checkHtml();
    }
    /**
     * Mount component
     * @definition    SWebComponent.componentMount
     * @protected
     */

  }, {
    key: "componentMount",
    value: function componentMount() {
      _get(_getPrototypeOf(SSwiperComponent.prototype), "componentMount", this).call(this); // get the $swiper element


      this._$swiper = this.children[0];

      this._$swiper.classList.add("".concat(this.componentNameDash, "__swiper")); // init the drag


      (0, _interactjs.default)(this._$swiper).draggable({
        inertia: this.props.inertia,
        onmove: this._dragMoveHandler.bind(this),
        onstart: this._dragStartHandler.bind(this),
        onend: this._dragEndHandler.bind(this)
      });
    }
    /**
     * Component unmount
     * @definition    SWebComponent.componentUnmount
     * @protected
     */

  }, {
    key: "componentUnmount",
    value: function componentUnmount() {
      _get(_getPrototypeOf(SSwiperComponent.prototype), "componentUnmount", this).call(this);
    }
    /**
     * Component will receive prop
     * @definition    SWebComponent.componentWillReceiveProp
     * @protected
     */

  }, {
    key: "componentWillReceiveProp",
    value: function componentWillReceiveProp(name, newVal, oldVal) {
      _get(_getPrototypeOf(SSwiperComponent.prototype), "componentWillReceiveProp", this).call(this, name, newVal, oldVal);
    }
    /**
     * Drag start handler
     * @param    {Event}    e    The drag start interactjs event
     */

  }, {
    key: "_dragStartHandler",
    value: function _dragStartHandler(e) {
      // get the initial translate properties
      this._currentTranslate = (0, _getTranslateProperties.default)(this._$swiper);
    }
    /**
     * Drag move handler
     * @param    {Event}    e    The drag interactjs event
     */

  }, {
    key: "_dragMoveHandler",
    value: function _dragMoveHandler(e) {
      var _this = this;

      // what we are going to calculate depend on the axis chosen in props
      if (this.props.axis === 'x') {
        // get the distance between start drag and now
        var dist = e.dx; // update current translate x position

        this._currentTranslate.x += dist; // calculate the new translate x position

        var newTranslateX = this._currentTranslate.x; // constrain newTranslateX

        var min = -(this.swiperWidth - this.offsetWidth) - this.props.overflow * 2;
        newTranslateX = (0, _constrain.default)(newTranslateX, min, this.props.overflow * 2);

        var easeMin = function easeMin(t) {
          return t * (1 - 1 / (_this.props.overflow * 4) * t);
        };

        var easeMax = function easeMax(t) {
          return t * (1 / (_this.props.overflow * 4) * t);
        };

        var newTranslateXEase = null;

        if (newTranslateX > 0) {
          newTranslateXEase = easeMin(newTranslateX);
        }

        if (newTranslateX < -(this.swiperWidth - this.offsetWidth)) {
          var delta = this.swiperWidth - this.offsetWidth + newTranslateX;
          newTranslateXEase = newTranslateX + easeMax(Math.abs(delta));
        } // set the new translate x on the swiper


        this._$swiper.style.transform = "translateX(".concat(newTranslateXEase || newTranslateX, "px)");
      } else {
        // get the distance between start drag and now
        var _dist = e.dy; // update current translate y position

        this._currentTranslate.y += _dist; // calculate the new translate x position

        var newTranslateY = this._currentTranslate.y; // constrain newTranslateX

        var _min = -(this.swiperHeight - this.offsetHeight) - this.props.overflow * 2;

        newTranslateY = (0, _constrain.default)(newTranslateY, _min, this.props.overflow * 2);

        var _easeMin = function _easeMin(t) {
          return t * (1 - 1 / (_this.props.overflow * 4) * t);
        };

        var _easeMax = function _easeMax(t) {
          return t * (1 / (_this.props.overflow * 4) * t);
        };

        var newTranslateYEase = null;

        if (newTranslateY > 0) {
          newTranslateYEase = _easeMin(newTranslateY);
        }

        if (newTranslateY < -(this.swiperHeight - this.offsetHeight)) {
          var _delta = this.swiperHeight - this.offsetHeight + newTranslateY;

          newTranslateYEase = newTranslateY + _easeMax(Math.abs(_delta));
        } // set the new translate y on the swiper


        this._$swiper.style.transform = "translateY(".concat(newTranslateYEase || newTranslateY, "px)");
      }
    }
    /**
     * Drag end handler
     * @param    {Event}    e    The drag end interactjs event
     */

  }, {
    key: "_dragEndHandler",
    value: function _dragEndHandler(e) {
      if (this.props.axis === 'x') {
        if (this._currentTranslate.x > 0) {
          (0, _animejs.default)({
            targets: this._$swiper,
            translateX: 0,
            duration: 500
          });
        } else if (this._currentTranslate.x < -(this.swiperWidth - this.offsetWidth)) {
          (0, _animejs.default)({
            targets: this._$swiper,
            translateX: -(this.swiperWidth - this.offsetWidth),
            duration: 500
          });
        }
      } else {
        if (this._currentTranslate.y > 0) {
          (0, _animejs.default)({
            targets: this._$swiper,
            translateY: 0,
            duration: 500
          });
        } else if (this._currentTranslate.y < -(this.swiperHeight - this.offsetHeight)) {
          (0, _animejs.default)({
            targets: this._$swiper,
            translateY: -(this.swiperHeight - this.offsetHeight),
            duration: 500
          });
        }
      }
    }
    /**
     * Check that the html structure is well formed
     */

  }, {
    key: "_checkHtml",
    value: function _checkHtml() {
      // the component itself has to have 1 child
      if (this.children.length > 1) {
        throw new Error("In order to work, the ".concat(this.componentName, " component has to have 1 direct child only"));
      }
    }
    /**
     * Get the swiper width
     */

  }, {
    key: "swiperWidth",
    get: function get() {
      var width = 0;
      Array.from(this._$swiper.children).forEach(function ($child) {
        width += $child.offsetWidth;
      });
      return width;
    }
    /**
     * Get the swiper height
     */

  }, {
    key: "swiperHeight",
    get: function get() {
      var height = 0;
      Array.from(this._$swiper.children).forEach(function ($child) {
        height += $child.offsetHeight;
      });
      return height;
    }
  }], [{
    key: "defaultCss",

    /**
     * Css
     * @protected
     */
    value: function defaultCss(componentName, componentNameDash) {
      return "\n      ".concat(componentNameDash, " {\n        display : block;\n      }\n      ").concat(componentNameDash, "[axis=\"x\"] .").concat(componentNameDash, "__swiper {\n        white-space: nowrap\n      }\n      ").concat(componentNameDash, "[axis=\"x\"] .").concat(componentNameDash, "__swiper > * {\n        display: inline-block;\n      }\n    ");
    }
  }, {
    key: "defaultProps",

    /**
     * Default props
     * @definition    SWebComponent.defaultProps
     * @protected
     */
    get: function get() {
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
      };
    }
    /**
     * Physical props
     * @definition    SWebComponent.physicalProps
     * @protected
     */

  }, {
    key: "physicalProps",
    get: function get() {
      return ['axis'];
    }
  }]);

  return SSwiperComponent;
}(_SWebComponent2.default);

exports.default = SSwiperComponent;