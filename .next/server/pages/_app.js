module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("IlR1");


/***/ }),

/***/ "0LAR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CART_ACTION_TYPES; });
var CART_ACTION_TYPES = {
  BUY_PRODUCTS_FAIL: "CART__BUY_PRODUCTS_FAIL",
  BUY_PRODUCTS_START: "CART__BUY_PRODUCTS_START",
  BUY_PRODUCTS_SUCCESS: "CART__BUY_PRODUCTS_SUCCESS",
  DECREMENT_PRODUCTS_COUNT: "CART__DECREMENT_PRODUCTS_COUNT",
  INCREMENT_PRODUCTS_COUNT: "CART__INCREMENT_PRODUCTS_COUNT",
  RESET_CART: "CART__RESET_CART"
};

/***/ }),

/***/ "Bnag":
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "EbDI":
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "Ijbi":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__("WkPL");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "IlR1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ App; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("lSNA");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./src/modules/Admin/constants/index.jsx
var ADMIN_ACTION_TYPES = {
  CREATE_PRODUCT_FAIL: "ADMIN__CREATE_PRODUCT_FAIL",
  CREATE_PRODUCT_START: "ADMIN__CREATE_PRODUCT_START",
  CREATE_PRODUCT_SUCCESS: "ADMIN__CREATE_PRODUCT_SUCCESS",
  GET_PURCHASES_FAIL: "ADMIN__GET_PURCHASES_FAIL",
  GET_PURCHASES_START: "ADMIN__GET_PURCHASES_START",
  GET_PURCHASES_SUCCESS: "ADMIN__GET_PURCHASES_SUCCESS"
};
// CONCATENATED MODULE: ./src/modules/Admin/reducer/index.jsx


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}


var CREATE_PRODUCT_FAIL = ADMIN_ACTION_TYPES.CREATE_PRODUCT_FAIL,
    CREATE_PRODUCT_START = ADMIN_ACTION_TYPES.CREATE_PRODUCT_START,
    CREATE_PRODUCT_SUCCESS = ADMIN_ACTION_TYPES.CREATE_PRODUCT_SUCCESS,
    GET_PURCHASES_FAIL = ADMIN_ACTION_TYPES.GET_PURCHASES_FAIL,
    GET_PURCHASES_START = ADMIN_ACTION_TYPES.GET_PURCHASES_START,
    GET_PURCHASES_SUCCESS = ADMIN_ACTION_TYPES.GET_PURCHASES_SUCCESS;
var reducer_initialState = {
  purchases: []
};
var adminReducer = function adminReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : reducer_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var data = action.data,
      type = action.type;

  switch (type) {
    case CREATE_PRODUCT_FAIL:
      return _objectSpread({}, state);

    case CREATE_PRODUCT_START:
      return _objectSpread({}, state);

    case CREATE_PRODUCT_SUCCESS:
      return _objectSpread({}, state);

    case GET_PURCHASES_FAIL:
      return _objectSpread({}, state);

    case GET_PURCHASES_START:
      return _objectSpread({}, state);

    case GET_PURCHASES_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        purchases: data
      });

    default:
      return state;
  }
};
// EXTERNAL MODULE: ./src/modules/Auth/constants/index.jsx
var constants = __webpack_require__("Ym8j");

// CONCATENATED MODULE: ./src/modules/Auth/reducer/index.jsx


function reducer_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function reducer_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      reducer_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      reducer_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}


var LOGIN_FAIL = constants["a" /* AUTH_ACTION_TYPES */].LOGIN_FAIL,
    LOGIN_START = constants["a" /* AUTH_ACTION_TYPES */].LOGIN_START,
    LOGIN_SUCCESS = constants["a" /* AUTH_ACTION_TYPES */].LOGIN_SUCCESS,
    LOGOUT = constants["a" /* AUTH_ACTION_TYPES */].LOGOUT,
    SIGNUP_FAIL = constants["a" /* AUTH_ACTION_TYPES */].SIGNUP_FAIL,
    SIGNUP_START = constants["a" /* AUTH_ACTION_TYPES */].SIGNUP_START,
    SIGNUP_SUCCESS = constants["a" /* AUTH_ACTION_TYPES */].SIGNUP_SUCCESS;
var Auth_reducer_initialState = {
  auth: {
    errors: [],
    token: ""
  }
};
var authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Auth_reducer_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var data = action.data,
      type = action.type;

  switch (type) {
    case LOGIN_FAIL:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        auth: reducer_objectSpread(reducer_objectSpread({}, state.auth), data)
      });

    case LOGIN_START:
      return reducer_objectSpread({}, state);

    case LOGIN_SUCCESS:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        auth: reducer_objectSpread(reducer_objectSpread({}, state.auth), {}, {
          errors: []
        }, data)
      });

    case LOGOUT:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        user: {}
      });

    case SIGNUP_FAIL:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        auth: reducer_objectSpread(reducer_objectSpread({}, state.auth), data)
      });

    case SIGNUP_START:
      return reducer_objectSpread({}, state);

    case SIGNUP_SUCCESS:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        auth: reducer_objectSpread(reducer_objectSpread({}, state.auth), {}, {
          errors: []
        }, data)
      });

    default:
      return state;
  }
};
// EXTERNAL MODULE: ./src/modules/Cart/constants/index.jsx
var Cart_constants = __webpack_require__("0LAR");

// CONCATENATED MODULE: ./src/modules/Cart/reducer/index.jsx


function Cart_reducer_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function Cart_reducer_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      Cart_reducer_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      Cart_reducer_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}


var Cart_reducer_initialState = {
  products: {
    total: 0,
    items: {}
  }
};
var DECREMENT_PRODUCTS_COUNT = Cart_constants["a" /* CART_ACTION_TYPES */].DECREMENT_PRODUCTS_COUNT,
    INCREMENT_PRODUCTS_COUNT = Cart_constants["a" /* CART_ACTION_TYPES */].INCREMENT_PRODUCTS_COUNT,
    RESET_CART = Cart_constants["a" /* CART_ACTION_TYPES */].RESET_CART;
var reducer_cartReducer = function cartReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Cart_reducer_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var data = action.data,
      type = action.type;

  switch (type) {
    case DECREMENT_PRODUCTS_COUNT:
      return Cart_reducer_objectSpread(Cart_reducer_objectSpread({}, state), {}, {
        products: Cart_reducer_objectSpread(Cart_reducer_objectSpread({}, state.products), {}, {
          total: state.products.total - 1,
          items: Cart_reducer_objectSpread(Cart_reducer_objectSpread({}, state.products.items), {}, defineProperty_default()({}, data.id, Cart_reducer_objectSpread(Cart_reducer_objectSpread({}, state.products.items[data.id]), {}, {
            count: state.products.items[data.id] && state.products.items[data.id].count ? state.products.items[data.id].count - 1 : 0
          })))
        })
      });

    case INCREMENT_PRODUCTS_COUNT:
      return Cart_reducer_objectSpread(Cart_reducer_objectSpread({}, state), {}, {
        products: Cart_reducer_objectSpread(Cart_reducer_objectSpread({}, state.products), {}, {
          total: state.products.total + 1,
          items: Cart_reducer_objectSpread(Cart_reducer_objectSpread({}, state.products.items), {}, defineProperty_default()({}, data.id, Cart_reducer_objectSpread(Cart_reducer_objectSpread({}, state.products.items[data.id]), {}, {
            count: state.products.items[data.id] && state.products.items[data.id].count ? state.products.items[data.id].count + 1 : 1
          })))
        })
      });

    case RESET_CART:
      return Cart_reducer_initialState;

    default:
      return state;
  }
};
// EXTERNAL MODULE: ./src/modules/Locale/constants/index.jsx
var Locale_constants = __webpack_require__("v9kR");

// CONCATENATED MODULE: ./src/modules/Locale/reducer/index.jsx


function Locale_reducer_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function Locale_reducer_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      Locale_reducer_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      Locale_reducer_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}


var SET_LOCALE = Locale_constants["a" /* LOCALE_ACTION_TYPES */].SET_LOCALE;
var Locale_reducer_initialState = {
  currentLocale: "en"
};
var localeReducer = function localeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Locale_reducer_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var data = action.data,
      type = action.type;

  switch (type) {
    case SET_LOCALE:
      return Locale_reducer_objectSpread(Locale_reducer_objectSpread({}, state), {}, {
        currentLocale: data
      });

    default:
      return state;
  }
};
// EXTERNAL MODULE: ./src/modules/MobileMenu/constants/index.jsx
var MobileMenu_constants = __webpack_require__("iXpI");

// CONCATENATED MODULE: ./src/modules/MobileMenu/reducer/index.jsx


function MobileMenu_reducer_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function MobileMenu_reducer_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      MobileMenu_reducer_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      MobileMenu_reducer_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}


var HIDE = MobileMenu_constants["a" /* MOBILE_MENU_ACTION_TYPES */].HIDE,
    SHOW = MobileMenu_constants["a" /* MOBILE_MENU_ACTION_TYPES */].SHOW;
var MobileMenu_reducer_initialState = {
  isShow: false
};
var mobileMenuReducer = function mobileMenuReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MobileMenu_reducer_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type;

  switch (type) {
    case HIDE:
      return MobileMenu_reducer_objectSpread(MobileMenu_reducer_objectSpread({}, state), {}, {
        isShow: false
      });

    case SHOW:
      return MobileMenu_reducer_objectSpread(MobileMenu_reducer_objectSpread({}, state), {}, {
        isShow: true
      });

    default:
      return state;
  }
};
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("RIqP");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./src/modules/Shop/constants/index.jsx
var Shop_constants = __webpack_require__("Ohj5");

// CONCATENATED MODULE: ./src/modules/Shop/reducer/index.jsx



function Shop_reducer_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function Shop_reducer_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      Shop_reducer_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      Shop_reducer_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}


var Shop_reducer_initialState = {
  filters: {},
  errors: [],
  loading: false,
  currentPage: 1,
  products: {
    count: 0,
    list: []
  },
  sort: {}
};
var GET_PRODUCTS_FAIL = Shop_constants["a" /* SHOP_ACTION_TYPES */].GET_PRODUCTS_FAIL,
    GET_PRODUCTS_START = Shop_constants["a" /* SHOP_ACTION_TYPES */].GET_PRODUCTS_START,
    GET_PRODUCTS_SUCCESS = Shop_constants["a" /* SHOP_ACTION_TYPES */].GET_PRODUCTS_SUCCESS,
    RESET_PAGE = Shop_constants["a" /* SHOP_ACTION_TYPES */].RESET_PAGE,
    RESET_PRODUCTS_FILTERS = Shop_constants["a" /* SHOP_ACTION_TYPES */].RESET_PRODUCTS_FILTERS,
    RESET_PRODUCTS_SORTS = Shop_constants["a" /* SHOP_ACTION_TYPES */].RESET_PRODUCTS_SORTS,
    SET_PAGE = Shop_constants["a" /* SHOP_ACTION_TYPES */].SET_PAGE,
    SET_PRODUCTS_FILTER = Shop_constants["a" /* SHOP_ACTION_TYPES */].SET_PRODUCTS_FILTER,
    SET_PRODUCTS_SORT = Shop_constants["a" /* SHOP_ACTION_TYPES */].SET_PRODUCTS_SORT;
var reducer_shopReducer = function shopReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Shop_reducer_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var data = action.data,
      type = action.type;

  switch (type) {
    case GET_PRODUCTS_FAIL:
      return Shop_reducer_objectSpread(Shop_reducer_objectSpread({}, state), {}, {
        errors: [].concat(toConsumableArray_default()(state.errors), toConsumableArray_default()(data)),
        loading: false
      });

    case GET_PRODUCTS_START:
      return Shop_reducer_objectSpread(Shop_reducer_objectSpread({}, state), {}, {
        loading: true
      });

    case GET_PRODUCTS_SUCCESS:
      return Shop_reducer_objectSpread(Shop_reducer_objectSpread({}, state), {}, {
        loading: false,
        products: Shop_reducer_objectSpread(Shop_reducer_objectSpread(Shop_reducer_objectSpread({}, state.products), data), {}, {
          list: data.isAdditional ? [].concat(toConsumableArray_default()(state.products.list), toConsumableArray_default()(data.list)) : toConsumableArray_default()(data.list)
        })
      });

    case RESET_PAGE:
      return Shop_reducer_objectSpread(Shop_reducer_objectSpread({}, state), {}, {
        currentPage: Shop_reducer_initialState.currentPage
      });

    case RESET_PRODUCTS_FILTERS:
      return Shop_reducer_objectSpread(Shop_reducer_objectSpread({}, state), {}, {
        filters: Shop_reducer_initialState.filters
      });

    case RESET_PRODUCTS_SORTS:
      return Shop_reducer_objectSpread(Shop_reducer_objectSpread({}, state), {}, {
        sort: Shop_reducer_initialState.sort
      });

    case SET_PAGE:
      return Shop_reducer_objectSpread(Shop_reducer_objectSpread({}, state), {}, {
        currentPage: data
      });

    case SET_PRODUCTS_FILTER:
      return Shop_reducer_objectSpread(Shop_reducer_objectSpread({}, state), {}, {
        filters: Shop_reducer_objectSpread(Shop_reducer_objectSpread({}, state.filters), data)
      });

    case SET_PRODUCTS_SORT:
      return Shop_reducer_objectSpread(Shop_reducer_objectSpread({}, state), {}, {
        sort: Shop_reducer_objectSpread(Shop_reducer_objectSpread({}, state.sort), data)
      });

    default:
      return state;
  }
};
// CONCATENATED MODULE: ./src/modules/User/constants/index.jsx
var USER_ACTION_TYPES = {
  GET_USER_FAIL: "USER__GET_USER_FAIL",
  GET_USER_START: "USER__GET_USER_START",
  GET_USER_SUCCESS: "USER__GET_USER_SUCCESS"
};
// CONCATENATED MODULE: ./src/modules/User/reducer/index.jsx


function User_reducer_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function User_reducer_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      User_reducer_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      User_reducer_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}


var GET_USER_FAIL = USER_ACTION_TYPES.GET_USER_FAIL,
    GET_USER_START = USER_ACTION_TYPES.GET_USER_START,
    GET_USER_SUCCESS = USER_ACTION_TYPES.GET_USER_SUCCESS;
var User_reducer_initialState = {
  user: {}
};
var userReducer = function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : User_reducer_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var data = action.data,
      type = action.type;

  switch (type) {
    case GET_USER_FAIL:
      return User_reducer_objectSpread({}, state);

    case GET_USER_START:
      return User_reducer_objectSpread({}, state);

    case GET_USER_SUCCESS:
      return User_reducer_objectSpread(User_reducer_objectSpread({}, state), {}, {
        user: User_reducer_objectSpread(User_reducer_objectSpread({}, state.user), data.user)
      });

    default:
      return state;
  }
};
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// CONCATENATED MODULE: ./src/app/reducer/index.jsx








var rootReducer = Object(external_redux_["combineReducers"])({
  admin: adminReducer,
  auth: authReducer,
  cart: reducer_cartReducer,
  locale: localeReducer,
  mobileMenu: mobileMenuReducer,
  shop: reducer_shopReducer,
  user: userReducer
});
// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// CONCATENATED MODULE: ./src/app/store/index.jsx


function store_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function store_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      store_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      store_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}






var store_store;

function initStore(initialState) {
  return Object(external_redux_["createStore"])(rootReducer, initialState, Object(external_redux_devtools_extension_["composeWithDevTools"])(Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a)));
}

var initializeStore = function initializeStore(preloadedState) {
  var _store2;

  var _store = (_store2 = store_store) !== null && _store2 !== void 0 ? _store2 : initStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store


  if (preloadedState && store_store) {
    _store = initStore(store_objectSpread(store_objectSpread({}, store_store.getState()), preloadedState)); // Reset the current store

    store_store = undefined;
  } // For SSG and SSR always create a new store


  if (true) return _store; // Create the store once in the client

  if (!store_store) store_store = _store;
  return _store;
};
function useStore(initialState) {
  var store = Object(external_react_["useMemo"])(function () {
    return initializeStore(initialState);
  }, [initialState]);
  return store;
}
// CONCATENATED MODULE: ./src/pages/_app.js



function App(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  var store = useStore(pageProps.initialReduxState);
  return /*#__PURE__*/external_react_default.a.createElement(external_react_redux_["Provider"], {
    store: store
  }, /*#__PURE__*/external_react_default.a.createElement(Component, pageProps));
}

/***/ }),

/***/ "Ohj5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SHOP_ACTION_TYPES; });
var SHOP_ACTION_TYPES = {
  GET_PRODUCTS_FAIL: "SHOP__GET_PRODUCTS_FAIL",
  GET_PRODUCTS_START: "SHOP__GET_PRODUCTS_START",
  GET_PRODUCTS_SUCCESS: "SHOP__GET_PRODUCTS_SUCCESS",
  RESET_PAGE: "SHOP__RESET_PAGE",
  RESET_PRODUCTS_FILTERS: "SHOP__RESET_PRODUCTS_FILTERS",
  RESET_PRODUCTS_SORTS: "SHOP__RESET_PRODUCTS_SORTS",
  SET_PAGE: "SHOP__SET_PAGE",
  SET_PRODUCTS_FILTER: "SHOP__SET_PRODUCTS_FILTER",
  SET_PRODUCTS_SORT: "SHOP__SET_PRODUCTS_SORT"
};

/***/ }),

/***/ "RIqP":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__("Ijbi");

var iterableToArray = __webpack_require__("EbDI");

var unsupportedIterableToArray = __webpack_require__("ZhPi");

var nonIterableSpread = __webpack_require__("Bnag");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

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

/***/ "Ym8j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH_ACTION_TYPES; });
var AUTH_ACTION_TYPES = {
  LOGIN_FAIL: "AUTH__LOGIN_FAIL",
  LOGIN_START: "AUTH__LOGIN_START",
  LOGIN_SUCCESS: "AUTH__LOGIN_SUCCESS",
  LOGOUT: "AUTH__LOGOUT",
  SIGNUP_FAIL: "AUTH__SIGNUP_FAIL",
  SIGNUP_START: "AUTH__SIGNUP_START",
  SIGNUP_SUCCESS: "AUTH__SIGNUP_SUCCESS"
};

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

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

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "iXpI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MOBILE_MENU_ACTION_TYPES; });
var MOBILE_MENU_ACTION_TYPES = {
  HIDE: "MOBILE_MENU__HIDE",
  SHOW: "MOBILE_MENU__SHOW"
};

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

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "v9kR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOCALE_ACTION_TYPES; });
var LOCALE_ACTION_TYPES = {
  SET_LOCALE: "LOCALE__SET_LOCALE"
};

/***/ })

/******/ });