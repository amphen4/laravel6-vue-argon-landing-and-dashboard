(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/bootstrap-vue/es/directives/popover/popover.js":
/*!*********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/directives/popover/popover.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");

var _popover = __webpack_require__(/*! ../../utils/popover.class */ "./node_modules/bootstrap-vue/es/utils/popover.class.js");

var _object = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/es/utils/object.js");

var _warn = __webpack_require__(/*! ../../utils/warn */ "./node_modules/bootstrap-vue/es/utils/warn.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var inBrowser = typeof window !== 'undefined' && typeof document !== 'undefined'; // Key which we use to store tooltip object on element

var BVPO = '__BV_PopOver__'; // Valid event triggers

var validTriggers = {
  focus: true,
  hover: true,
  click: true,
  blur: true // Build a PopOver config based on bindings (if any)
  // Arguments and modifiers take precedence over pased value config object

  /* istanbul ignore next: not easy to test */

};

function parseBindings(bindings) {
  // We start out with a blank config
  var config = {}; // Process bindings.value

  if (typeof bindings.value === 'string') {
    // Value is popover content (html optionally supported)
    config.content = bindings.value;
  } else if (typeof bindings.value === 'function') {
    // Content generator function
    config.content = bindings.value;
  } else if (_typeof(bindings.value) === 'object') {
    // Value is config object, so merge
    config = _objectSpread({}, config, bindings.value);
  } // If Argument, assume element ID of container element


  if (bindings.arg) {
    // Element ID specified as arg. We must prepend '#' to become a CSS selector
    config.container = "#".concat(bindings.arg);
  } // Process modifiers


  (0, _object.keys)(bindings.modifiers).forEach(function (mod) {
    if (/^html$/.test(mod)) {
      // Title allows HTML
      config.html = true;
    } else if (/^nofade$/.test(mod)) {
      // no animation
      config.animation = false;
    } else if (/^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/.test(mod)) {
      // placement of popover
      config.placement = mod;
    } else if (/^(window|viewport)$/.test(mod)) {
      // bounday of popover
      config.boundary = mod;
    } else if (/^d\d+$/.test(mod)) {
      // delay value
      var delay = parseInt(mod.slice(1), 10) || 0;

      if (delay) {
        config.delay = delay;
      }
    } else if (/^o-?\d+$/.test(mod)) {
      // offset value (negative allowed)
      var offset = parseInt(mod.slice(1), 10) || 0;

      if (offset) {
        config.offset = offset;
      }
    }
  }); // Special handling of event trigger modifiers Trigger is a space separated list

  var selectedTriggers = {}; // parse current config object trigger

  var triggers = typeof config.trigger === 'string' ? config.trigger.trim().split(/\s+/) : [];
  triggers.forEach(function (trigger) {
    if (validTriggers[trigger]) {
      selectedTriggers[trigger] = true;
    }
  }); // Parse Modifiers for triggers

  (0, _object.keys)(validTriggers).forEach(function (trigger) {
    if (bindings.modifiers[trigger]) {
      selectedTriggers[trigger] = true;
    }
  }); // Sanitize triggers

  config.trigger = (0, _object.keys)(selectedTriggers).join(' ');

  if (config.trigger === 'blur') {
    // Blur by itself is useless, so convert it to focus
    config.trigger = 'focus';
  }

  if (!config.trigger) {
    // remove trigger config
    delete config.trigger;
  }

  return config;
} //
// Add or Update popover on our element
//

/* istanbul ignore next: not easy to test */


function applyBVPO(el, bindings, vnode) {
  if (!inBrowser) {
    return;
  }

  if (!_popper.default) {
    // Popper is required for tooltips to work
    (0, _warn.default)('v-b-popover: Popper.js is required for popovers to work');
    return;
  }

  if (el[BVPO]) {
    el[BVPO].updateConfig(parseBindings(bindings));
  } else {
    el[BVPO] = new _popover.default(el, parseBindings(bindings), vnode.context.$root);
  }
} //
// Remove popover on our element
//

/* istanbul ignore next */


function removeBVPO(el) {
  if (!inBrowser) {
    return;
  }

  if (el[BVPO]) {
    el[BVPO].destroy();
    el[BVPO] = null;
    delete el[BVPO];
  }
}
/*
 * Export our directive
 */

/* istanbul ignore next: not easy to test */


var _default = {
  bind: function bind(el, bindings, vnode) {
    applyBVPO(el, bindings, vnode);
  },
  inserted: function inserted(el, bindings, vnode) {
    applyBVPO(el, bindings, vnode);
  },
  update: function update(el, bindings, vnode) {
    if (bindings.value !== bindings.oldValue) {
      applyBVPO(el, bindings, vnode);
    }
  },
  componentUpdated: function componentUpdated(el, bindings, vnode) {
    if (bindings.value !== bindings.oldValue) {
      applyBVPO(el, bindings, vnode);
    }
  },
  unbind: function unbind(el) {
    removeBVPO(el);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/popover.class.js":
/*!**************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/popover.class.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _tooltip = __webpack_require__(/*! ./tooltip.class */ "./node_modules/bootstrap-vue/es/utils/tooltip.class.js");

var _dom = __webpack_require__(/*! ./dom */ "./node_modules/bootstrap-vue/es/utils/dom.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NAME = 'popover';
var CLASS_PREFIX = 'bs-popover';
var BS_CLASS_PREFIX_REGEX = new RegExp("\\b".concat(CLASS_PREFIX, "\\S+"), 'g');

var Defaults = _objectSpread({}, _tooltip.default.Default, {
  placement: 'right',
  trigger: 'click',
  content: '',
  template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
});

var ClassName = {
  FADE: 'fade',
  SHOW: 'show'
};
var Selector = {
  TITLE: '.popover-header',
  CONTENT: '.popover-body'
  /* istanbul ignore next: dificult to test in Jest/JSDOM environment */

};

var PopOver =
/*#__PURE__*/
function (_ToolTip) {
  _inherits(PopOver, _ToolTip);

  function PopOver() {
    _classCallCheck(this, PopOver);

    return _possibleConstructorReturn(this, _getPrototypeOf(PopOver).apply(this, arguments));
  }

  _createClass(PopOver, [{
    key: "isWithContent",
    // Method overrides
    value: function isWithContent(tip)
    /* istanbul ignore next */
    {
      tip = tip || this.$tip;

      if (!tip) {
        return false;
      }

      var hasTitle = Boolean(((0, _dom.select)(Selector.TITLE, tip) || {}).innerHTML);
      var hasContent = Boolean(((0, _dom.select)(Selector.CONTENT, tip) || {}).innerHTML);
      return hasTitle || hasContent;
    }
  }, {
    key: "addAttachmentClass",
    value: function addAttachmentClass(attachment)
    /* istanbul ignore next */
    {
      (0, _dom.addClass)(this.getTipElement(), "".concat(CLASS_PREFIX, "-").concat(attachment));
    }
  }, {
    key: "setContent",
    value: function setContent(tip)
    /* istanbul ignore next */
    {
      // we use append for html objects to maintain js events/components
      this.setElementContent((0, _dom.select)(Selector.TITLE, tip), this.getTitle());
      this.setElementContent((0, _dom.select)(Selector.CONTENT, tip), this.getContent());
      (0, _dom.removeClass)(tip, ClassName.FADE);
      (0, _dom.removeClass)(tip, ClassName.SHOW);
    } // This method may look identical to ToolTip version, but it uses a different RegEx defined above

  }, {
    key: "cleanTipClass",
    value: function cleanTipClass()
    /* istanbul ignore next */
    {
      var tip = this.getTipElement();
      var tabClass = tip.className.match(BS_CLASS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length > 0) {
        tabClass.forEach(function (cls) {
          (0, _dom.removeClass)(tip, cls);
        });
      }
    }
  }, {
    key: "getTitle",
    value: function getTitle()
    /* istanbul ignore next */
    {
      var title = this.$config.title || '';

      if (typeof title === 'function') {
        title = title(this.$element);
      }

      if (_typeof(title) === 'object' && title.nodeType && !title.innerHTML.trim()) {
        // We have a dom node, but without inner content, so just return an empty string
        title = '';
      }

      if (typeof title === 'string') {
        title = title.trim();
      }

      if (!title) {
        // Try and grab element's title attribute
        title = (0, _dom.getAttr)(this.$element, 'title') || (0, _dom.getAttr)(this.$element, 'data-original-title') || '';
        title = title.trim();
      }

      return title;
    } // New methods

  }, {
    key: "getContent",
    value: function getContent()
    /* istanbul ignore next */
    {
      var content = this.$config.content || '';

      if (typeof content === 'function') {
        content = content(this.$element);
      }

      if (_typeof(content) === 'object' && content.nodeType && !content.innerHTML.trim()) {
        // We have a dom node, but without inner content, so just return an empty string
        content = '';
      }

      if (typeof content === 'string') {
        content = content.trim();
      }

      return content;
    }
  }], [{
    key: "Default",
    // Getter overrides
    get: function get()
    /* istanbul ignore next */
    {
      return Defaults;
    }
  }, {
    key: "NAME",
    get: function get()
    /* istanbul ignore next */
    {
      return NAME;
    }
  }]);

  return PopOver;
}(_tooltip.default);

var _default = PopOver;
exports.default = _default;

/***/ })

}]);