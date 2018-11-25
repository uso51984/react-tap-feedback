'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TapFeedback = function (_React$Component) {
  _inherits(TapFeedback, _React$Component);

  function TapFeedback() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TapFeedback);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TapFeedback.__proto__ || Object.getPrototypeOf(TapFeedback)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      active: false
    }, _this.onTouchStart = function (e) {
      _this.triggerEvent('TouchStart', true, e);
    }, _this.onTouchMove = function (e) {
      _this.triggerEvent('TouchMove', false, e);
    }, _this.onTouchEnd = function (e) {
      _this.triggerEvent('TouchEnd', false, e);
    }, _this.onTouchCancel = function (e) {
      _this.triggerEvent('TouchCancel', false, e);
    }, _this.onMouseDown = function (e) {
      // pc simulate mobile
      _this.triggerEvent('MouseDown', true, e);
    }, _this.onMouseUp = function (e) {
      _this.triggerEvent('MouseUp', false, e);
    }, _this.onMouseLeave = function (e) {
      _this.triggerEvent('MouseLeave', false, e);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TapFeedback, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.disabled && this.state.active) {
        this.setState({
          active: false
        });
      }
    }
  }, {
    key: 'triggerEvent',
    value: function triggerEvent(type, isActive, ev) {
      var eventType = 'on' + type;
      var children = this.props.children;


      if (children.props[eventType]) {
        children.props[eventType](ev);
      }

      if (isActive !== this.state.active) {
        this.setState({ active: isActive });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          disabled = _props.disabled,
          activeClassName = _props.activeClassName,
          activeStyle = _props.activeStyle;


      var events = disabled ? {} : {
        onTouchStart: this.onTouchStart,
        onTouchMove: this.onTouchMove,
        onTouchEnd: this.onTouchEnd,
        onTouchCancel: this.onTouchCancel,
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        onMouseLeave: this.onMouseLeave
      };

      var child = _react2['default'].Children.only(children);

      if (!disabled && this.state.active) {
        var _child$props = child.props,
            style = _child$props.style,
            className = _child$props.className;


        if (activeStyle !== false) {
          if (activeStyle) {
            style = _extends({}, style, activeStyle);
          }
          className = (0, _classnames2['default'])(className, activeClassName);
        }
        return _react2['default'].cloneElement(child, _extends({
          className: className,
          style: style
        }, events));
      }
      return _react2['default'].cloneElement(child, events);
    }
  }]);

  return TapFeedback;
}(_react2['default'].Component);

TapFeedback.defaultProps = {
  disabled: false
};
exports['default'] = TapFeedback;
module.exports = exports['default'];