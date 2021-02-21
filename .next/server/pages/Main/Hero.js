module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Mhmd");


/***/ }),

/***/ "63mQ":
/***/ (function(module, exports) {



/***/ }),

/***/ "8OQS":
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "J/SH":
/***/ (function(module, exports) {



/***/ }),

/***/ "J4zp":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__("wTVA");

var iterableToArrayLimit = __webpack_require__("m0LI");

var unsupportedIterableToArray = __webpack_require__("ZhPi");

var nonIterableRest = __webpack_require__("wkBT");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "Mhmd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Hero", function() { return /* binding */ Hero_Hero; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("J4zp");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./src/common/components/Button/index.jsx
var Button = __webpack_require__("ZFZd");

// EXTERNAL MODULE: ./src/common/components/Link/index.jsx
var Link = __webpack_require__("Pukf");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// CONCATENATED MODULE: ./src/common/components/Button/ShopNowButton/index.jsx




var ShopNowButton_ShopNowButton = function ShopNowButton(props) {
  return /*#__PURE__*/external_react_default.a.createElement(Link["a" /* CustomLink */], {
    url: "/shop"
  }, /*#__PURE__*/external_react_default.a.createElement(Button["a" /* Button */], props, /*#__PURE__*/external_react_default.a.createElement(external_react_intl_["FormattedMessage"], {
    id: "common.buttons.shopNow.title"
  })));
};
// EXTERNAL MODULE: ./src/common/components/Slider/SliderMain/SliderMainSlide/index.less
var SliderMain_SliderMainSlide = __webpack_require__("zEsn");

// CONCATENATED MODULE: ./src/common/components/Slider/SliderMain/SliderMainSlide/index.jsx



var SliderMainSlide_SliderMainSlide = function SliderMainSlide(_ref) {
  var description = _ref.description,
      imgAlt = _ref.imgAlt,
      imgSrc = _ref.imgSrc,
      onClick = _ref.onClick,
      title = _ref.title;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "slider-main-slide"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "slider-main-slide__image-section"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    className: "slider-main-slide__image",
    src: imgSrc,
    alt: imgAlt
  })), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "slider-main-slide__content-section"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "slider-main-slide__content"
  }, /*#__PURE__*/external_react_default.a.createElement("h1", {
    className: "slider-main-slide__content-header"
  }, title), /*#__PURE__*/external_react_default.a.createElement("p", {
    className: "slider-main-slide__content-description"
  }, description), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "slider-main-slide__button-container"
  }, /*#__PURE__*/external_react_default.a.createElement(ShopNowButton_ShopNowButton, {
    onClick: onClick
  })))));
};
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("pVnL");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("QILm");
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// CONCATENATED MODULE: ./src/common/helpers/random.js
var getRandomString = function getRandomString() {
  return Math.random().toString(36).substr(2, 5);
};
// EXTERNAL MODULE: external "swiper/react"
var react_ = __webpack_require__("mNWG");

// EXTERNAL MODULE: ./node_modules/swiper/swiper.less
var swiper_swiper = __webpack_require__("J/SH");

// EXTERNAL MODULE: ./src/common/components/Slider/index.less
var components_Slider = __webpack_require__("RT+h");

// CONCATENATED MODULE: ./src/common/components/Slider/index.jsx







var Slider_Slider = function Slider(_ref) {
  var children = _ref.children,
      _ref$slidesPerView = _ref.slidesPerView,
      slidesPerView = _ref$slidesPerView === void 0 ? 1 : _ref$slidesPerView,
      _ref$spaceBetween = _ref.spaceBetween,
      spaceBetween = _ref$spaceBetween === void 0 ? 0 : _ref$spaceBetween,
      rest = objectWithoutProperties_default()(_ref, ["children", "slidesPerView", "spaceBetween"]);

  var slides = Object(external_react_["useMemo"])(function () {
    return children.map(function (item) {
      return /*#__PURE__*/external_react_default.a.createElement(react_["SwiperSlide"], {
        key: getRandomString()
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "slider__slide"
      }, item));
    });
  }, [children]);
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "slider"
  }, /*#__PURE__*/external_react_default.a.createElement(react_["Swiper"], extends_default()({}, rest, {
    spaceBetween: spaceBetween,
    slidesPerView: slidesPerView
  }), slides));
};
// CONCATENATED MODULE: ./src/icons/arrow-right.svg
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var arrow_right_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  fill: "currentColor",
  d: "M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z"
});

function SvgArrowRight(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", _extends({
    viewBox: "0 0 448 512"
  }, props), arrow_right_ref);
}

/* harmony default export */ var arrow_right = (SvgArrowRight);
// EXTERNAL MODULE: ./src/common/components/Slider/SliderMain/index.less
var Slider_SliderMain = __webpack_require__("TQiS");

// CONCATENATED MODULE: ./src/common/components/Slider/SliderMain/index.jsx







var SliderMain_SliderMain = function SliderMain() {
  var _useState = Object(external_react_["useState"])(),
      _useState2 = slicedToArray_default()(_useState, 2),
      swiper = _useState2[0],
      setSwiper = _useState2[1];

  var intl = Object(external_react_intl_["useIntl"])();
  var slideNext = Object(external_react_["useCallback"])(function () {
    if (swiper) {
      swiper.slideNext(700);
    }
  }, [swiper]);
  var slidePrev = Object(external_react_["useCallback"])(function () {
    if (swiper) {
      swiper.slidePrev(700);
    }
  }, [swiper]);
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "slider-main"
  }, /*#__PURE__*/external_react_default.a.createElement(Slider_Slider, {
    onSwiper: setSwiper
  }, /*#__PURE__*/external_react_default.a.createElement(SliderMainSlide_SliderMainSlide, {
    buttonText: intl.formatMessage({
      id: "common.buttons.shopNow.title"
    }),
    description: intl.formatMessage({
      id: "hero.slide.description"
    }),
    imgAlt: "Hero",
    imgSrc: "/images/main/hero/hero.jpg",
    onClick: function onClick() {
      return console.log("click");
    },
    title: intl.formatMessage({
      id: "hero.slide.title"
    })
  }), /*#__PURE__*/external_react_default.a.createElement(SliderMainSlide_SliderMainSlide, {
    buttonText: intl.formatMessage({
      id: "common.buttons.shopNow.title"
    }),
    description: intl.formatMessage({
      id: "hero.slide.description"
    }),
    imgAlt: "Hero",
    imgSrc: "/images/main/hero/hero.jpg",
    onClick: function onClick() {
      return console.log("click");
    },
    title: intl.formatMessage({
      id: "hero.slide.title"
    })
  }), /*#__PURE__*/external_react_default.a.createElement(SliderMainSlide_SliderMainSlide, {
    buttonText: intl.formatMessage({
      id: "common.buttons.shopNow.title"
    }),
    description: intl.formatMessage({
      id: "hero.slide.description"
    }),
    imgAlt: "Hero",
    imgSrc: "/images/main/hero/hero.jpg",
    onClick: function onClick() {
      return console.log("click");
    },
    title: intl.formatMessage({
      id: "hero.slide.title"
    })
  })), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "slider-main__controls"
  }, /*#__PURE__*/external_react_default.a.createElement("button", {
    className: "slider-main__control-button",
    onClick: slidePrev
  }, /*#__PURE__*/external_react_default.a.createElement(arrow_right, {
    className: "slider-main__control-icon slider-main__control-icon_left"
  })), /*#__PURE__*/external_react_default.a.createElement("button", {
    className: "slider-main__control-button",
    onClick: slideNext
  }, /*#__PURE__*/external_react_default.a.createElement(arrow_right, {
    className: "slider-main__control-icon"
  }))));
};
// EXTERNAL MODULE: ./src/pages/Main/Hero/index.less
var Main_Hero = __webpack_require__("63mQ");

// CONCATENATED MODULE: ./src/pages/Main/Hero/index.jsx



var Hero_Hero = function Hero() {
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "main-hero"
  }, /*#__PURE__*/external_react_default.a.createElement(SliderMain_SliderMain, null));
};

/***/ }),

/***/ "Pukf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("X09s");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);


var CustomLink = function CustomLink(_ref) {
  var children = _ref.children,
      url = _ref.url;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "link",
    href: url
  }, children);
};

/***/ }),

/***/ "QILm":
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__("8OQS");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "RT+h":
/***/ (function(module, exports) {



/***/ }),

/***/ "TQiS":
/***/ (function(module, exports) {



/***/ }),

/***/ "WkPL":
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "X09s":
/***/ (function(module, exports) {



/***/ }),

/***/ "ZFZd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pVnL");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("QILm");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("sit1");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_5__);






var Button = function Button(_ref) {
  var children = _ref.children,
      fullWidth = _ref.fullWidth,
      theme = _ref.theme,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "button" : _ref$type,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref, ["children", "fullWidth", "theme", "type"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, rest, {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("button", _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, "button_".concat(theme || ""), theme), {
      "button_full-width": fullWidth
    }),
    type: type
  }), children);
};

/***/ }),

/***/ "ZhPi":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__("WkPL");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "k004":
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "lSNA":
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "m0LI":
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "mNWG":
/***/ (function(module, exports) {

module.exports = require("swiper/react");

/***/ }),

/***/ "pVnL":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "sit1":
/***/ (function(module, exports) {



/***/ }),

/***/ "wTVA":
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "wkBT":
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "zEsn":
/***/ (function(module, exports) {



/***/ })

/******/ });