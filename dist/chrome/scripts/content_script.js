/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 106);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(34)('wks');
var uid = __webpack_require__(35);
var Symbol = __webpack_require__(0).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(25);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(17)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(9);
var createDesc = __webpack_require__(18);
module.exports = __webpack_require__(5) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(6);
var IE8_DOM_DEFINE = __webpack_require__(28);
var toPrimitive = __webpack_require__(29);
var dP = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(4);
var ctx = __webpack_require__(11);
var hide = __webpack_require__(7);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(12);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(63);
var defined = __webpack_require__(20);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(34)('keys');
var uid = __webpack_require__(35);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(9).f;
var has = __webpack_require__(15);
var TAG = __webpack_require__(1)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(12);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(26), __esModule: true };

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27);
var $Object = __webpack_require__(4).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(10);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(5), 'Object', { defineProperty: __webpack_require__(9).f });


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(17)(function () {
  return Object.defineProperty(__webpack_require__(14)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(8);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(45);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(46);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Utils = function () {
  function Utils() {
    (0, _classCallCheck3.default)(this, Utils);
  }

  (0, _createClass3.default)(Utils, null, [{
    key: 'hexToRgb',
    value: function hexToRgb(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }
  }, {
    key: 'sleep',
    value: function sleep(ms) {
      return new Promise(function (resolve) {
        return setTimeout(resolve, ms);
      });
    }
  }, {
    key: 'performRequest',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(opts) {
        var reqOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { remainingAttempts: 4, attempt: 0 };
        var that, url, r, formBody, property, encodedKey, encodedValue, response, interval;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                url = opts.url;
                r = {
                  method: opts.method || 'GET',
                  headers: opts.headers || {}
                };
                _context.t0 = opts.method;
                _context.next = _context.t0 === 'POST' ? 6 : _context.t0 === 'GET' ? 8 : _context.t0 === 'DELETE' ? 10 : _context.t0 === 'PATCH' ? 11 : _context.t0 === 'PUT' ? 13 : 14;
                break;

              case 6:
                // todo consider different content-types
                if (r.headers['Content-Type'] == null || r.headers['Content-Type'].includes('application/json')) {
                  r['body'] = opts.params;
                } else if (r.headers['Content-Type'].includes('application/x-www-form-urlencoded')) {
                  formBody = [];

                  for (property in opts.params) {
                    encodedKey = encodeURIComponent(property);
                    encodedValue = encodeURIComponent(opts.params[property]);

                    formBody.push(encodedKey + '=' + encodedValue);
                  }
                  formBody = formBody.join('&');
                  r['body'] = formBody;
                }
                return _context.abrupt('break', 14);

              case 8:
                url += '?' + new URLSearchParams(opts.params);
                return _context.abrupt('break', 14);

              case 10:
                return _context.abrupt('break', 14);

              case 11:
                r['body'] = opts.params;
                return _context.abrupt('break', 14);

              case 13:
                return _context.abrupt('break', 14);

              case 14:
                _context.next = 16;
                return fetch(url, r);

              case 16:
                response = _context.sent;

                if (!response.ok) {
                  _context.next = 21;
                  break;
                }

                return _context.abrupt('return', response);

              case 21:
                if (!(reqOptions.remainingAttempts > 0)) {
                  _context.next = 30;
                  break;
                }

                interval = 500 * Math.pow(2, reqOptions.attempt); // make configurable

                _context.next = 25;
                return that.sleep(interval);

              case 25:
                reqOptions.remainingAttempts--;
                reqOptions.attempt++;
                return _context.abrupt('return', that.performRequest(opts, reqOptions));

              case 30:
                return _context.abrupt('return', Promise.reject({ message: 'Request error', cause: { code: response.status }, response: response }));

              case 31:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function performRequest(_x2) {
        return _ref.apply(this, arguments);
      }

      return performRequest;
    }()
  }, {
    key: 'prettifyNodeText',
    value: function prettifyNodeText(text) {
      var lineChars = 20;
      var newText = '';
      var remainder = text;
      do {
        newText = newText + remainder.substring(0, lineChars - 1);
        remainder = remainder.substring(lineChars - 1);
        var nextBlank = remainder.indexOf(' ');
        if (nextBlank == -1) {
          newText += remainder;
          remainder = '';
        } else {
          newText += remainder.substring(0, nextBlank) + '\n';
          remainder = remainder.substring(nextBlank + 1);
        }
      } while (remainder.length > 0);
      return newText;
    }
  }]);
  return Utils;
}();

module.exports = Utils;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(32);
var $export = __webpack_require__(10);
var redefine = __webpack_require__(57);
var hide = __webpack_require__(7);
var has = __webpack_require__(15);
var Iterators = __webpack_require__(13);
var $iterCreate = __webpack_require__(58);
var setToStringTag = __webpack_require__(23);
var getPrototypeOf = __webpack_require__(66);
var ITERATOR = __webpack_require__(1)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(19);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(0).document;
module.exports = document && document.documentElement;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(16);
var TAG = __webpack_require__(1)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(6);
var aFunction = __webpack_require__(12);
var SPECIES = __webpack_require__(1)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(11);
var invoke = __webpack_require__(78);
var html = __webpack_require__(37);
var cel = __webpack_require__(14);
var global = __webpack_require__(0);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(16)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(6);
var isObject = __webpack_require__(8);
var newPromiseCapability = __webpack_require__(24);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MindmeisterClient = function () {
  function MindmeisterClient() {
    (0, _classCallCheck3.default)(this, MindmeisterClient);
  }

  (0, _createClass3.default)(MindmeisterClient, null, [{
    key: 'processInBackground',
    value: function processInBackground(method, args) {
      return new Promise(function (resolve, reject) {
        chrome.runtime.sendMessage({ scope: 'mindmeisterClient', action: 'processInBackground', method: method, args: args }, function (response) {
          if (response.response != null) resolve(response.response);else if (response.error != null) reject(response.error);
        });
      });
    }
  }, {
    key: 'authorize',
    value: function authorize() {
      return new Promise(function (resolve, reject) {
        chrome.runtime.sendMessage({ scope: 'mindmeisterClient', action: 'authorize' }, function (response) {
          if (response.response != null) resolve(response.response);else if (response.error != null) reject(response.error);
        });
      });
    }
  }, {
    key: 'checkToken',
    value: function checkToken() {
      return new Promise(function (resolve, reject) {
        chrome.runtime.sendMessage({ scope: 'mindmeisterClient', action: 'checkToken' }, function (response) {
          if (response.response != null) resolve(response.response);else if (response.error != null) reject(response.error);
        });
      });
    }
  }, {
    key: 'getMap',
    value: function getMap(mapId) {
      return this.processInBackground('getMap', { mapId: mapId });
    }
  }, {
    key: 'createMindmapFromTemplate',
    value: function createMindmapFromTemplate(templateFileUrl) {
      return this.processInBackground('createMindmapFromTemplate', { templateFileUrl: templateFileUrl });
    }
  }, {
    key: 'getBelongingMap',
    value: function getBelongingMap(nodeId) {
      return this.processInBackground('getBelongingMap', { nodeId: nodeId });
    }
  }, {
    key: 'changeNodeIcon',
    value: function changeNodeIcon(mapId, nodeId, icon) {
      return this.processInBackground('changeNodeIcon', { mapId: mapId, nodeId: nodeId, icon: icon });
    }
  }, {
    key: 'addNode',
    value: function addNode(mapId, parentId, newNode) {
      return this.processInBackground('addNode', { mapId: mapId, parentId: parentId, newNode: newNode });
    }
  }, {
    key: 'addNodes',
    value: function addNodes(mapId, newNodes) {
      return this.processInBackground('addNodes', { mapId: mapId, newNodes: newNodes });
    }
  }, {
    key: 'modifyNodes',
    value: function modifyNodes(mapId, nodes) {
      return this.processInBackground('modifyNodes', { mapId: mapId, nodes: nodes });
    }
  }, {
    key: 'doActions',
    value: function doActions(mapId, insertions, updates, deletions) {
      return this.processInBackground('doActions', { mapId: mapId, insertions: insertions, updates: updates, deletions: deletions });
    }
  }, {
    key: 'linkShare',
    value: function linkShare(mapId) {
      return this.processInBackground('linkShare', { mapId: mapId });
    }
  }]);
  return MindmeisterClient;
}();

module.exports = MindmeisterClient;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Swal = __webpack_require__(86);

var Alerts = function () {
  function Alerts() {
    (0, _classCallCheck3.default)(this, Alerts);
  }

  (0, _createClass3.default)(Alerts, null, [{
    key: 'showErrorWindow',
    value: function showErrorWindow(message) {
      Swal.fire({
        icon: 'error',
        html: message
      });
    }
  }, {
    key: 'showErrorToast',
    value: function showErrorToast(message, destroyFunc) {
      Swal.fire({
        icon: 'error',
        text: message,
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        didDestroy: destroyFunc
      });
    }
  }, {
    key: 'showWarningWindow',
    value: function showWarningWindow(message) {
      Swal.fire({
        icon: 'warning',
        html: message
      });
    }
  }, {
    key: 'showToast',
    value: function showToast(content) {
      Swal.fire({
        icon: 'warning',
        toast: true,
        html: content,
        width: '500px',
        position: 'bottom-end',
        confirmButtonText: 'Close'
      });
    }
  }, {
    key: 'showLoadingWindow',
    value: function showLoadingWindow(content) {
      Swal.fire({
        title: 'Loading',
        html: content,
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        showCancelButton: false,
        onBeforeOpen: function onBeforeOpen() {
          Swal.showLoading();
        }
      });
    }
  }, {
    key: 'closeLoadingWindow',
    value: function closeLoadingWindow() {
      Swal.hideLoading();
      Swal.close();
    }
  }]);
  return Alerts;
}();

module.exports = Alerts;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(50);


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(52);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 47 */,
/* 48 */,
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var chatGPTClient = function () {
  function chatGPTClient() {
    (0, _classCallCheck3.default)(this, chatGPTClient);
  }

  (0, _createClass3.default)(chatGPTClient, null, [{
    key: 'processInBackground',
    value: function processInBackground(method, args) {
      return new Promise(function (resolve, reject) {
        chrome.runtime.sendMessage({ scope: 'chatgptClient', action: 'processInBackground', method: method, args: args }, function (response) {
          if (response.response != null) resolve(response.response);else if (response.error != null) reject(response.error);
        });
      });
    }
  }, {
    key: 'performQuestion',
    value: function performQuestion(question) {
      return this.processInBackground('performQuestion', { question: question });
    }
  }, {
    key: 'getApiKey',
    value: function getApiKey() {
      return this.processInBackground('getApiKey');
    }
  }, {
    key: 'setApiKey',
    value: function setApiKey(key) {
      return this.processInBackground('setApiKey', { apiKey: key });
    }
  }, {
    key: 'getMode',
    value: function getMode() {
      return this.processInBackground('getMode');
    }
  }, {
    key: 'setMode',
    value: function setMode(mode) {
      return this.processInBackground('setMode', { mode: mode });
    }
  }]);
  return chatGPTClient;
}();

module.exports = chatGPTClient;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(51);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 51 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(53), __esModule: true };

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(54);
__webpack_require__(55);
__webpack_require__(68);
__webpack_require__(72);
__webpack_require__(83);
__webpack_require__(84);
module.exports = __webpack_require__(4).Promise;


/***/ }),
/* 54 */
/***/ (function(module, exports) {



/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(56)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(31)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(19);
var defined = __webpack_require__(20);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(59);
var descriptor = __webpack_require__(18);
var setToStringTag = __webpack_require__(23);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7)(IteratorPrototype, __webpack_require__(1)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(6);
var dPs = __webpack_require__(60);
var enumBugKeys = __webpack_require__(36);
var IE_PROTO = __webpack_require__(22)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(14)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(37).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(9);
var anObject = __webpack_require__(6);
var getKeys = __webpack_require__(61);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(62);
var enumBugKeys = __webpack_require__(36);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(15);
var toIObject = __webpack_require__(21);
var arrayIndexOf = __webpack_require__(64)(false);
var IE_PROTO = __webpack_require__(22)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(16);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(21);
var toLength = __webpack_require__(33);
var toAbsoluteIndex = __webpack_require__(65);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(19);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(15);
var toObject = __webpack_require__(67);
var IE_PROTO = __webpack_require__(22)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(20);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(69);
var global = __webpack_require__(0);
var hide = __webpack_require__(7);
var Iterators = __webpack_require__(13);
var TO_STRING_TAG = __webpack_require__(1)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(70);
var step = __webpack_require__(71);
var Iterators = __webpack_require__(13);
var toIObject = __webpack_require__(21);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(31)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(32);
var global = __webpack_require__(0);
var ctx = __webpack_require__(11);
var classof = __webpack_require__(38);
var $export = __webpack_require__(10);
var isObject = __webpack_require__(8);
var aFunction = __webpack_require__(12);
var anInstance = __webpack_require__(73);
var forOf = __webpack_require__(74);
var speciesConstructor = __webpack_require__(39);
var task = __webpack_require__(40).set;
var microtask = __webpack_require__(79)();
var newPromiseCapabilityModule = __webpack_require__(24);
var perform = __webpack_require__(41);
var promiseResolve = __webpack_require__(42);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(1)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  if (promise._h == 1) return false;
  var chain = promise._a || promise._c;
  var i = 0;
  var reaction;
  while (chain.length > i) {
    reaction = chain[i++];
    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
  } return true;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(80)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(23)($Promise, PROMISE);
__webpack_require__(81)(PROMISE);
Wrapper = __webpack_require__(4)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(82)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(11);
var call = __webpack_require__(75);
var isArrayIter = __webpack_require__(76);
var anObject = __webpack_require__(6);
var toLength = __webpack_require__(33);
var getIterFn = __webpack_require__(77);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(6);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(13);
var ITERATOR = __webpack_require__(1)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(38);
var ITERATOR = __webpack_require__(1)('iterator');
var Iterators = __webpack_require__(13);
module.exports = __webpack_require__(4).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 78 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var macrotask = __webpack_require__(40).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(16)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if (Observer) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(7);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(0);
var core = __webpack_require__(4);
var dP = __webpack_require__(9);
var DESCRIPTORS = __webpack_require__(5);
var SPECIES = __webpack_require__(1)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(1)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(10);
var core = __webpack_require__(4);
var global = __webpack_require__(0);
var speciesConstructor = __webpack_require__(39);
var promiseResolve = __webpack_require__(42);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(10);
var newPromiseCapability = __webpack_require__(24);
var perform = __webpack_require__(41);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PromptStyles = {
  QuestionPrompt: { 'backgroundColor': '#FFD426', 'font_color': '#000000', 'bold': true, line_position: null },
  AnswerItem: { 'backgroundColor': '#96DB0B', 'font_color': '#FFFFFF', 'bold': true, line_position: null },
  QuestionPromptAPI: { 'backgroundColor': 'FFD426', 'bold': true, 'borderColor': null, 'border_style': null, 'borderWidth': null, 'boxShadow': false, 'color': null, 'fonts': null, 'fontSize': null, 'image_color': null, 'italic': null, 'line_color': null, 'line_position': null, 'line_style': null, 'line_type': null, 'line_width': null, 'shape': null, 'id': -33, 'name': null, 'is_boundary': false },
  AnswerItemAPI: { 'backgroundColor': '96DB0B', 'bold': null, 'borderColor': null, 'border_style': null, 'borderWidth': null, 'boxShadow': false, 'color': 'FFFFFF', 'fonts': null, 'fontSize': null, 'image_color': null, 'italic': null, 'line_color': null, 'line_position': null, 'line_style': null, 'line_type': null, 'line_width': null, 'shape': null, 'id': -33, 'name': null, 'is_boundary': false }
};

module.exports = PromptStyles;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

/*!
* sweetalert2 v9.17.4
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Sweetalert2 = factory());
}(this, function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
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

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  var consolePrefix = 'SweetAlert2:';
  /**
   * Filter the unique values into a new array
   * @param arr
   */

  var uniqueArray = function uniqueArray(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }

    return result;
  };
  /**
   * Capitalize the first letter of a string
   * @param str
   */

  var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  /**
   * Returns the array of object values (Object.values isn't supported in IE11)
   * @param obj
   */

  var objectValues = function objectValues(obj) {
    return Object.keys(obj).map(function (key) {
      return obj[key];
    });
  };
  /**
   * Convert NodeList to Array
   * @param nodeList
   */

  var toArray = function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
  };
  /**
   * Standardise console warnings
   * @param message
   */

  var warn = function warn(message) {
    console.warn("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Standardise console errors
   * @param message
   */

  var error = function error(message) {
    console.error("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Private global state for `warnOnce`
   * @type {Array}
   * @private
   */

  var previousWarnOnceMessages = [];
  /**
   * Show a console warning, but only if it hasn't already been shown
   * @param message
   */

  var warnOnce = function warnOnce(message) {
    if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };
  /**
   * Show a one-time console warning about deprecated params/methods
   */

  var warnAboutDepreation = function warnAboutDepreation(deprecatedParam, useInstead) {
    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
  };
  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   * @param arg
   */

  var callIfFunction = function callIfFunction(arg) {
    return typeof arg === 'function' ? arg() : arg;
  };
  var hasToPromiseFn = function hasToPromiseFn(arg) {
    return arg && typeof arg.toPromise === 'function';
  };
  var asPromise = function asPromise(arg) {
    return hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
  };
  var isPromise = function isPromise(arg) {
    return arg && Promise.resolve(arg) === arg;
  };

  var DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  var isJqueryElement = function isJqueryElement(elem) {
    return _typeof(elem) === 'object' && elem.jquery;
  };

  var isElement = function isElement(elem) {
    return elem instanceof Element || isJqueryElement(elem);
  };

  var argsToParams = function argsToParams(args) {
    var params = {};

    if (_typeof(args[0]) === 'object' && !isElement(args[0])) {
      _extends(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach(function (name, index) {
        var arg = args[index];

        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(_typeof(arg)));
        }
      });
    }

    return params;
  };

  var swalPrefix = 'swal2-';
  var prefix = function prefix(items) {
    var result = {};

    for (var i in items) {
      result[items[i]] = swalPrefix + items[i];
    }

    return result;
  };
  var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'toast-column', 'show', 'hide', 'close', 'title', 'header', 'content', 'html-container', 'actions', 'confirm', 'cancel', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
  var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

  var getContainer = function getContainer() {
    return document.body.querySelector(".".concat(swalClasses.container));
  };
  var elementBySelector = function elementBySelector(selectorString) {
    var container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  var elementByClass = function elementByClass(className) {
    return elementBySelector(".".concat(className));
  };

  var getPopup = function getPopup() {
    return elementByClass(swalClasses.popup);
  };
  var getIcons = function getIcons() {
    var popup = getPopup();
    return toArray(popup.querySelectorAll(".".concat(swalClasses.icon)));
  };
  var getIcon = function getIcon() {
    var visibleIcon = getIcons().filter(function (icon) {
      return isVisible(icon);
    });
    return visibleIcon.length ? visibleIcon[0] : null;
  };
  var getTitle = function getTitle() {
    return elementByClass(swalClasses.title);
  };
  var getContent = function getContent() {
    return elementByClass(swalClasses.content);
  };
  var getHtmlContainer = function getHtmlContainer() {
    return elementByClass(swalClasses['html-container']);
  };
  var getImage = function getImage() {
    return elementByClass(swalClasses.image);
  };
  var getProgressSteps = function getProgressSteps() {
    return elementByClass(swalClasses['progress-steps']);
  };
  var getValidationMessage = function getValidationMessage() {
    return elementByClass(swalClasses['validation-message']);
  };
  var getConfirmButton = function getConfirmButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
  };
  var getCancelButton = function getCancelButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
  };
  var getActions = function getActions() {
    return elementByClass(swalClasses.actions);
  };
  var getHeader = function getHeader() {
    return elementByClass(swalClasses.header);
  };
  var getFooter = function getFooter() {
    return elementByClass(swalClasses.footer);
  };
  var getTimerProgressBar = function getTimerProgressBar() {
    return elementByClass(swalClasses['timer-progress-bar']);
  };
  var getCloseButton = function getCloseButton() {
    return elementByClass(swalClasses.close);
  }; // https://github.com/jkup/focusable/blob/master/index.js

  var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
  var getFocusableElements = function getFocusableElements() {
    var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
    .sort(function (a, b) {
      a = parseInt(a.getAttribute('tabindex'));
      b = parseInt(b.getAttribute('tabindex'));

      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }

      return 0;
    });
    var otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(function (el) {
      return el.getAttribute('tabindex') !== '-1';
    });
    return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
      return isVisible(el);
    });
  };
  var isModal = function isModal() {
    return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
  };
  var isToast = function isToast() {
    return document.body.classList.contains(swalClasses['toast-shown']);
  };
  var isLoading = function isLoading() {
    return getPopup().hasAttribute('data-loading');
  };

  var states = {
    previousBodyPadding: null
  };
  var setInnerHtml = function setInnerHtml(elem, html) {
    // #1926
    elem.textContent = '';

    if (html) {
      var parser = new DOMParser();
      var parsed = parser.parseFromString(html, "text/html");
      toArray(parsed.querySelector('head').childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
      toArray(parsed.querySelector('body').childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
    }
  };
  var hasClass = function hasClass(elem, className) {
    if (!className) {
      return false;
    }

    var classList = className.split(/\s+/);

    for (var i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }

    return true;
  };

  var removeCustomClasses = function removeCustomClasses(elem, params) {
    toArray(elem.classList).forEach(function (className) {
      if (!(objectValues(swalClasses).indexOf(className) !== -1) && !(objectValues(iconTypes).indexOf(className) !== -1) && !(objectValues(params.showClass).indexOf(className) !== -1)) {
        elem.classList.remove(className);
      }
    });
  };

  var applyCustomClass = function applyCustomClass(elem, params, className) {
    removeCustomClasses(elem, params);

    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(params.customClass[className]), "\""));
      }

      addClass(elem, params.customClass[className]);
    }
  };
  function getInput(content, inputType) {
    if (!inputType) {
      return null;
    }

    switch (inputType) {
      case 'select':
      case 'textarea':
      case 'file':
        return getChildByClass(content, swalClasses[inputType]);

      case 'checkbox':
        return content.querySelector(".".concat(swalClasses.checkbox, " input"));

      case 'radio':
        return content.querySelector(".".concat(swalClasses.radio, " input:checked")) || content.querySelector(".".concat(swalClasses.radio, " input:first-child"));

      case 'range':
        return content.querySelector(".".concat(swalClasses.range, " input"));

      default:
        return getChildByClass(content, swalClasses.input);
    }
  }
  var focusInput = function focusInput(input) {
    input.focus(); // place cursor at end of text in text input

    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      var val = input.value;
      input.value = '';
      input.value = val;
    }
  };
  var toggleClass = function toggleClass(target, classList, condition) {
    if (!target || !classList) {
      return;
    }

    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }

    classList.forEach(function (className) {
      if (target.forEach) {
        target.forEach(function (elem) {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };
  var addClass = function addClass(target, classList) {
    toggleClass(target, classList, true);
  };
  var removeClass = function removeClass(target, classList) {
    toggleClass(target, classList, false);
  };
  var getChildByClass = function getChildByClass(elem, className) {
    for (var i = 0; i < elem.childNodes.length; i++) {
      if (hasClass(elem.childNodes[i], className)) {
        return elem.childNodes[i];
      }
    }
  };
  var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
    if (value || parseInt(value) === 0) {
      elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
    } else {
      elem.style.removeProperty(property);
    }
  };
  var show = function show(elem) {
    var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    elem.style.opacity = '';
    elem.style.display = display;
  };
  var hide = function hide(elem) {
    elem.style.opacity = '';
    elem.style.display = 'none';
  };
  var toggle = function toggle(elem, condition, display) {
    condition ? show(elem, display) : hide(elem);
  }; // borrowed from jquery $(elem).is(':visible') implementation

  var isVisible = function isVisible(elem) {
    return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  };
  /* istanbul ignore next */

  var isScrollable = function isScrollable(elem) {
    return !!(elem.scrollHeight > elem.clientHeight);
  }; // borrowed from https://stackoverflow.com/a/46352119

  var hasCssAnimation = function hasCssAnimation(elem) {
    var style = window.getComputedStyle(elem);
    var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };
  var contains = function contains(haystack, needle) {
    if (typeof haystack.contains === 'function') {
      return haystack.contains(needle);
    }
  };
  var animateTimerProgressBar = function animateTimerProgressBar(timer) {
    var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var timerProgressBar = getTimerProgressBar();

    if (isVisible(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }

      setTimeout(function () {
        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  var stopTimerProgressBar = function stopTimerProgressBar() {
    var timerProgressBar = getTimerProgressBar();
    var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    var timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
  };

  // Detect Node env
  var isNodeEnv = function isNodeEnv() {
    return typeof window === 'undefined' || typeof document === 'undefined';
  };

  var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.error, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.question, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.warning, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.info, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.success, "\"></div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses['html-container'], "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\">OK</button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\">Cancel</button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

  var resetOldContainer = function resetOldContainer() {
    var oldContainer = getContainer();

    if (!oldContainer) {
      return false;
    }

    oldContainer.parentNode.removeChild(oldContainer);
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };

  var oldInputVal; // IE11 workaround, see #1109 for details

  var resetValidationMessage = function resetValidationMessage(e) {
    if (Swal.isVisible() && oldInputVal !== e.target.value) {
      Swal.resetValidationMessage();
    }

    oldInputVal = e.target.value;
  };

  var addInputChangeListeners = function addInputChangeListeners() {
    var content = getContent();
    var input = getChildByClass(content, swalClasses.input);
    var file = getChildByClass(content, swalClasses.file);
    var range = content.querySelector(".".concat(swalClasses.range, " input"));
    var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
    var select = getChildByClass(content, swalClasses.select);
    var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
    var textarea = getChildByClass(content, swalClasses.textarea);
    input.oninput = resetValidationMessage;
    file.onchange = resetValidationMessage;
    select.onchange = resetValidationMessage;
    checkbox.onchange = resetValidationMessage;
    textarea.oninput = resetValidationMessage;

    range.oninput = function (e) {
      resetValidationMessage(e);
      rangeOutput.value = range.value;
    };

    range.onchange = function (e) {
      resetValidationMessage(e);
      range.nextSibling.value = range.value;
    };
  };

  var getTarget = function getTarget(target) {
    return typeof target === 'string' ? document.querySelector(target) : target;
  };

  var setupAccessibility = function setupAccessibility(params) {
    var popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  var setupRTL = function setupRTL(targetElement) {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };
  /*
   * Add modal + backdrop to DOM
   */


  var init = function init(params) {
    // Clean up the old popup container if it exists
    var oldContainerExisted = resetOldContainer();
    /* istanbul ignore if */

    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }

    var container = document.createElement('div');
    container.className = swalClasses.container;

    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }

    setInnerHtml(container, sweetHTML);
    var targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param); // Object
    } else if (_typeof(param) === 'object') {
      handleObject(param, target); // Plain string
    } else if (param) {
      setInnerHtml(target, param);
    }
  };

  var handleObject = function handleObject(param, target) {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param); // For other objects use their string representation
    } else {
      setInnerHtml(target, param.toString());
    }
  };

  var handleJqueryElem = function handleJqueryElem(target, elem) {
    target.textContent = '';

    if (0 in elem) {
      for (var i = 0; (i in elem); i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  var animationEndEvent = function () {
    // Prevent run in Node env

    /* istanbul ignore if */
    if (isNodeEnv()) {
      return false;
    }

    var testEl = document.createElement('div');
    var transEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      OAnimation: 'oAnimationEnd oanimationend',
      animation: 'animationend'
    };

    for (var i in transEndEventNames) {
      if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
        return transEndEventNames[i];
      }
    }

    return false;
  }();

  // https://github.com/twbs/bootstrap/blob/master/js/src/modal.js

  var measureScrollbar = function measureScrollbar() {
    var scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  var renderActions = function renderActions(instance, params) {
    var actions = getActions();
    var confirmButton = getConfirmButton();
    var cancelButton = getCancelButton(); // Actions (buttons) wrapper

    if (!params.showConfirmButton && !params.showCancelButton) {
      hide(actions);
    } // Custom class


    applyCustomClass(actions, params, 'actions'); // Render confirm button

    renderButton(confirmButton, 'confirm', params); // render Cancel Button

    renderButton(cancelButton, 'cancel', params);

    if (params.buttonsStyling) {
      handleButtonsStyling(confirmButton, cancelButton, params);
    } else {
      removeClass([confirmButton, cancelButton], swalClasses.styled);
      confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
      cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
    }

    if (params.reverseButtons) {
      confirmButton.parentNode.insertBefore(cancelButton, confirmButton);
    }
  };

  function handleButtonsStyling(confirmButton, cancelButton, params) {
    addClass([confirmButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
    } // Loading state


    if (!isLoading()) {
      var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
      confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
      confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
    }
  }

  function renderButton(button, buttonType, params) {
    toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
    setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text

    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
    // Add buttons custom classes

    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, "".concat(buttonType, "Button"));
    addClass(button, params["".concat(buttonType, "ButtonClass")]);
  }

  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  function handlePositionParam(container, position) {
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  function handleGrowParam(container, grow) {
    if (grow && typeof grow === 'string') {
      var growClass = "grow-".concat(grow);

      if (growClass in swalClasses) {
        addClass(container, swalClasses[growClass]);
      }
    }
  }

  var renderContainer = function renderContainer(instance, params) {
    var container = getContainer();

    if (!container) {
      return;
    }

    handleBackdropParam(container, params.backdrop);

    if (!params.backdrop && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }

    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow); // Custom class

    applyCustomClass(container, params, 'container'); // Set queue step attribute for getQueueStep() method

    var queueStep = document.body.getAttribute('data-swal2-queue-step');

    if (queueStep) {
      container.setAttribute('data-queue-step', queueStep);
      document.body.removeAttribute('data-swal2-queue-step');
    }
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateProps = {
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
  var renderInput = function renderInput(instance, params) {
    var content = getContent();
    var innerParams = privateProps.innerParams.get(instance);
    var rerender = !innerParams || params.input !== innerParams.input;
    inputTypes.forEach(function (inputType) {
      var inputClass = swalClasses[inputType];
      var inputContainer = getChildByClass(content, inputClass); // set attributes

      setAttributes(inputType, params.inputAttributes); // set class

      inputContainer.className = inputClass;

      if (rerender) {
        hide(inputContainer);
      }
    });

    if (params.input) {
      if (rerender) {
        showInput(params);
      } // set custom class


      setCustomClass(params);
    }
  };

  var showInput = function showInput(params) {
    if (!renderInputType[params.input]) {
      return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
    }

    var inputContainer = getInputContainer(params.input);
    var input = renderInputType[params.input](inputContainer, params);
    show(input); // input autofocus

    setTimeout(function () {
      focusInput(input);
    });
  };

  var removeAttributes = function removeAttributes(input) {
    for (var i = 0; i < input.attributes.length; i++) {
      var attrName = input.attributes[i].name;

      if (!(['type', 'value', 'style'].indexOf(attrName) !== -1)) {
        input.removeAttribute(attrName);
      }
    }
  };

  var setAttributes = function setAttributes(inputType, inputAttributes) {
    var input = getInput(getContent(), inputType);

    if (!input) {
      return;
    }

    removeAttributes(input);

    for (var attr in inputAttributes) {
      // Do not set a placeholder for <input type="range">
      // it'll crash Edge, #1298
      if (inputType === 'range' && attr === 'placeholder') {
        continue;
      }

      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  var setCustomClass = function setCustomClass(params) {
    var inputContainer = getInputContainer(params.input);

    if (params.customClass) {
      addClass(inputContainer, params.customClass.input);
    }
  };

  var setInputPlaceholder = function setInputPlaceholder(input, params) {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  var getInputContainer = function getInputContainer(inputType) {
    var inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
    return getChildByClass(getContent(), inputClass);
  };

  var renderInputType = {};

  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (input, params) {
    if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
      input.value = params.inputValue;
    } else if (!isPromise(params.inputValue)) {
      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(params.inputValue), "\""));
    }

    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  renderInputType.file = function (input, params) {
    setInputPlaceholder(input, params);
    return input;
  };

  renderInputType.range = function (range, params) {
    var rangeInput = range.querySelector('input');
    var rangeOutput = range.querySelector('output');
    rangeInput.value = params.inputValue;
    rangeInput.type = params.input;
    rangeOutput.value = params.inputValue;
    return range;
  };

  renderInputType.select = function (select, params) {
    select.textContent = '';

    if (params.inputPlaceholder) {
      var placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }

    return select;
  };

  renderInputType.radio = function (radio) {
    radio.textContent = '';
    return radio;
  };

  renderInputType.checkbox = function (checkboxContainer, params) {
    var checkbox = getInput(getContent(), 'checkbox');
    checkbox.value = 1;
    checkbox.id = swalClasses.checkbox;
    checkbox.checked = Boolean(params.inputValue);
    var label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkboxContainer;
  };

  renderInputType.textarea = function (textarea, params) {
    textarea.value = params.inputValue;
    setInputPlaceholder(textarea, params);

    if ('MutationObserver' in window) {
      // #1699
      var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
      var popupPadding = parseInt(window.getComputedStyle(getPopup()).paddingLeft) + parseInt(window.getComputedStyle(getPopup()).paddingRight);

      var outputsize = function outputsize() {
        var contentWidth = textarea.offsetWidth + popupPadding;

        if (contentWidth > initialPopupWidth) {
          getPopup().style.width = "".concat(contentWidth, "px");
        } else {
          getPopup().style.width = null;
        }
      };

      new MutationObserver(outputsize).observe(textarea, {
        attributes: true,
        attributeFilter: ['style']
      });
    }

    return textarea;
  };

  var renderContent = function renderContent(instance, params) {
    var content = getContent().querySelector("#".concat(swalClasses.content)); // Content as HTML

    if (params.html) {
      parseHtmlToContainer(params.html, content);
      show(content, 'block'); // Content as plain text
    } else if (params.text) {
      content.textContent = params.text;
      show(content, 'block'); // No content
    } else {
      hide(content);
    }

    renderInput(instance, params); // Custom class

    applyCustomClass(getContent(), params, 'content');
  };

  var renderFooter = function renderFooter(instance, params) {
    var footer = getFooter();
    toggle(footer, params.footer);

    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    } // Custom class


    applyCustomClass(footer, params, 'footer');
  };

  var renderCloseButton = function renderCloseButton(instance, params) {
    var closeButton = getCloseButton();
    setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
  };

  var renderIcon = function renderIcon(instance, params) {
    var innerParams = privateProps.innerParams.get(instance); // if the give icon already rendered, apply the custom class without re-rendering the icon

    if (innerParams && params.icon === innerParams.icon && getIcon()) {
      applyCustomClass(getIcon(), params, 'icon');
      return;
    }

    hideAllIcons();

    if (!params.icon) {
      return;
    }

    if (Object.keys(iconTypes).indexOf(params.icon) !== -1) {
      var icon = elementBySelector(".".concat(swalClasses.icon, ".").concat(iconTypes[params.icon]));
      show(icon); // Custom or default content

      setContent(icon, params);
      adjustSuccessIconBackgoundColor(); // Custom class

      applyCustomClass(icon, params, 'icon'); // Animate icon

      addClass(icon, params.showClass.icon);
    } else {
      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
    }
  };

  var hideAllIcons = function hideAllIcons() {
    var icons = getIcons();

    for (var i = 0; i < icons.length; i++) {
      hide(icons[i]);
    }
  }; // Adjust success icon background color to match the popup background color


  var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
    var popup = getPopup();
    var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

    for (var i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };

  var setContent = function setContent(icon, params) {
    icon.textContent = '';

    if (params.iconHtml) {
      setInnerHtml(icon, iconContent(params.iconHtml));
    } else if (params.icon === 'success') {
      setInnerHtml(icon, "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ");
    } else if (params.icon === 'error') {
      setInnerHtml(icon, "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ");
    } else {
      var defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
    }
  };

  var iconContent = function iconContent(content) {
    return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
  };

  var renderImage = function renderImage(instance, params) {
    var image = getImage();

    if (!params.imageUrl) {
      return hide(image);
    }

    show(image, ''); // Src, alt

    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt); // Width, height

    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight); // Class

    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  var currentSteps = [];
  /*
   * Global function for chaining sweetAlert popups
   */

  var queue = function queue(steps) {
    var Swal = this;
    currentSteps = steps;

    var resetAndResolve = function resetAndResolve(resolve, value) {
      currentSteps = [];
      resolve(value);
    };

    var queueResult = [];
    return new Promise(function (resolve) {
      (function step(i, callback) {
        if (i < currentSteps.length) {
          document.body.setAttribute('data-swal2-queue-step', i);
          Swal.fire(currentSteps[i]).then(function (result) {
            if (typeof result.value !== 'undefined') {
              queueResult.push(result.value);
              step(i + 1, callback);
            } else {
              resetAndResolve(resolve, {
                dismiss: result.dismiss
              });
            }
          });
        } else {
          resetAndResolve(resolve, {
            value: queueResult
          });
        }
      })(0);
    });
  };
  /*
   * Global function for getting the index of current popup in queue
   */

  var getQueueStep = function getQueueStep() {
    return getContainer() && getContainer().getAttribute('data-queue-step');
  };
  /*
   * Global function for inserting a popup to the queue
   */

  var insertQueueStep = function insertQueueStep(step, index) {
    if (index && index < currentSteps.length) {
      return currentSteps.splice(index, 0, step);
    }

    return currentSteps.push(step);
  };
  /*
   * Global function for deleting a popup from the queue
   */

  var deleteQueueStep = function deleteQueueStep(index) {
    if (typeof currentSteps[index] !== 'undefined') {
      currentSteps.splice(index, 1);
    }
  };

  var createStepElement = function createStepElement(step) {
    var stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };

  var createLineElement = function createLineElement(params) {
    var lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);

    if (params.progressStepsDistance) {
      lineEl.style.width = params.progressStepsDistance;
    }

    return lineEl;
  };

  var renderProgressSteps = function renderProgressSteps(instance, params) {
    var progressStepsContainer = getProgressSteps();

    if (!params.progressSteps || params.progressSteps.length === 0) {
      return hide(progressStepsContainer);
    }

    show(progressStepsContainer);
    progressStepsContainer.textContent = '';
    var currentProgressStep = parseInt(params.currentProgressStep === undefined ? getQueueStep() : params.currentProgressStep);

    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach(function (step, index) {
      var stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);

      if (index === currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }

      if (index !== params.progressSteps.length - 1) {
        var lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  var renderTitle = function renderTitle(instance, params) {
    var title = getTitle();
    toggle(title, params.title || params.titleText);

    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }

    if (params.titleText) {
      title.innerText = params.titleText;
    } // Custom class


    applyCustomClass(title, params, 'title');
  };

  var renderHeader = function renderHeader(instance, params) {
    var header = getHeader(); // Custom class

    applyCustomClass(header, params, 'header'); // Progress steps

    renderProgressSteps(instance, params); // Icon

    renderIcon(instance, params); // Image

    renderImage(instance, params); // Title

    renderTitle(instance, params); // Close button

    renderCloseButton(instance, params);
  };

  var renderPopup = function renderPopup(instance, params) {
    var popup = getPopup(); // Width

    applyNumericalStyle(popup, 'width', params.width); // Padding

    applyNumericalStyle(popup, 'padding', params.padding); // Background

    if (params.background) {
      popup.style.background = params.background;
    } // Classes


    addClasses(popup, params);
  };

  var addClasses = function addClasses(popup, params) {
    // Default Class + showClass when updating Swal.update({})
    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');

    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    } // Custom class


    applyCustomClass(popup, params, 'popup');

    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    } // Icon class (#1842)


    if (params.icon) {
      addClass(popup, swalClasses["icon-".concat(params.icon)]);
    }
  };

  var render = function render(instance, params) {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderHeader(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);

    if (typeof params.onRender === 'function') {
      params.onRender(getPopup());
    }
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */

  var isVisible$1 = function isVisible$$1() {
    return isVisible(getPopup());
  };
  /*
   * Global function to click 'Confirm' button
   */

  var clickConfirm = function clickConfirm() {
    return getConfirmButton() && getConfirmButton().click();
  };
  /*
   * Global function to click 'Cancel' button
   */

  var clickCancel = function clickCancel() {
    return getCancelButton() && getCancelButton().click();
  };

  function fire() {
    var Swal = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _construct(Swal, args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */
  function mixin(mixinParams) {
    var MixinSwal = /*#__PURE__*/function (_this) {
      _inherits(MixinSwal, _this);

      var _super = _createSuper(MixinSwal);

      function MixinSwal() {
        _classCallCheck(this, MixinSwal);

        return _super.apply(this, arguments);
      }

      _createClass(MixinSwal, [{
        key: "_main",
        value: function _main(params) {
          return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, _extends({}, mixinParams, params));
        }
      }]);

      return MixinSwal;
    }(this);

    return MixinSwal;
  }

  /**
   * Show spinner instead of Confirm button
   */

  var showLoading = function showLoading() {
    var popup = getPopup();

    if (!popup) {
      Swal.fire();
    }

    popup = getPopup();
    var actions = getActions();
    var confirmButton = getConfirmButton();
    show(actions);
    show(confirmButton, 'inline-block');
    addClass([popup, actions], swalClasses.loading);
    confirmButton.disabled = true;
    popup.setAttribute('data-loading', true);
    popup.setAttribute('aria-busy', true);
    popup.focus();
  };

  var RESTORE_FOCUS_TIMEOUT = 100;

  var globalState = {};

  var focusPreviousActiveElement = function focusPreviousActiveElement() {
    if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  }; // Restore previous active (focused) element


  var restoreActiveElement = function restoreActiveElement() {
    return new Promise(function (resolve) {
      var x = window.scrollX;
      var y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(function () {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      /* istanbul ignore if */

      if (typeof x !== 'undefined' && typeof y !== 'undefined') {
        // IE doesn't have scrollX/scrollY support
        window.scrollTo(x, y);
      }
    });
  };

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   */

  var getTimerLeft = function getTimerLeft() {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };
  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var stopTimer = function stopTimer() {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var resumeTimer = function resumeTimer() {
    if (globalState.timeout) {
      var remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var toggleTimer = function toggleTimer() {
    var timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };
  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   */

  var increaseTimer = function increaseTimer(n) {
    if (globalState.timeout) {
      var remaining = globalState.timeout.increase(n);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };
  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   */

  var isTimerRunning = function isTimerRunning() {
    return globalState.timeout && globalState.timeout.isRunning();
  };

  var defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconHtml: undefined,
    toast: false,
    animation: true,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: undefined,
    target: 'body',
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showCancelButton: false,
    preConfirm: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusCancel: false,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    showLoaderOnConfirm: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    onBeforeOpen: undefined,
    onOpen: undefined,
    onRender: undefined,
    onClose: undefined,
    onAfterClose: undefined,
    onDestroy: undefined,
    scrollbarPadding: true
  };
  var updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'footer', 'hideClass', 'html', 'icon', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'onAfterClose', 'onClose', 'onDestroy', 'progressSteps', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'text', 'title', 'titleText'];
  var deprecatedParams = {
    animation: 'showClass" and "hideClass'
  };
  var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
  /**
   * Is valid parameter
   * @param {String} paramName
   */

  var isValidParameter = function isValidParameter(paramName) {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };
  /**
   * Is valid parameter for Swal.update() method
   * @param {String} paramName
   */

  var isUpdatableParameter = function isUpdatableParameter(paramName) {
    return updatableParams.indexOf(paramName) !== -1;
  };
  /**
   * Is deprecated parameter
   * @param {String} paramName
   */

  var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
    return deprecatedParams[paramName];
  };

  var checkIfParamIsValid = function checkIfParamIsValid(param) {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }
  };

  var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
    if (toastIncompatibleParams.indexOf(param) !== -1) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }
  };

  var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
    if (isDeprecatedParameter(param)) {
      warnAboutDepreation(param, isDeprecatedParameter(param));
    }
  };
  /**
   * Show relevant warnings for given params
   *
   * @param params
   */


  var showWarningsForParams = function showWarningsForParams(params) {
    for (var param in params) {
      checkIfParamIsValid(param);

      if (params.toast) {
        checkIfToastParamIsValid(param);
      }

      checkIfParamIsDeprecated(param);
    }
  };



  var staticMethods = /*#__PURE__*/Object.freeze({
    isValidParameter: isValidParameter,
    isUpdatableParameter: isUpdatableParameter,
    isDeprecatedParameter: isDeprecatedParameter,
    argsToParams: argsToParams,
    isVisible: isVisible$1,
    clickConfirm: clickConfirm,
    clickCancel: clickCancel,
    getContainer: getContainer,
    getPopup: getPopup,
    getTitle: getTitle,
    getContent: getContent,
    getHtmlContainer: getHtmlContainer,
    getImage: getImage,
    getIcon: getIcon,
    getIcons: getIcons,
    getCloseButton: getCloseButton,
    getActions: getActions,
    getConfirmButton: getConfirmButton,
    getCancelButton: getCancelButton,
    getHeader: getHeader,
    getFooter: getFooter,
    getTimerProgressBar: getTimerProgressBar,
    getFocusableElements: getFocusableElements,
    getValidationMessage: getValidationMessage,
    isLoading: isLoading,
    fire: fire,
    mixin: mixin,
    queue: queue,
    getQueueStep: getQueueStep,
    insertQueueStep: insertQueueStep,
    deleteQueueStep: deleteQueueStep,
    showLoading: showLoading,
    enableLoading: showLoading,
    getTimerLeft: getTimerLeft,
    stopTimer: stopTimer,
    resumeTimer: resumeTimer,
    toggleTimer: toggleTimer,
    increaseTimer: increaseTimer,
    isTimerRunning: isTimerRunning
  });

  /**
   * Enables buttons and hide loader.
   */

  function hideLoading() {
    // do nothing if popup is closed
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return;
    }

    var domCache = privateProps.domCache.get(this);

    if (!innerParams.showConfirmButton) {
      hide(domCache.confirmButton);

      if (!innerParams.showCancelButton) {
        hide(domCache.actions);
      }
    }

    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }

  function getInput$1(instance) {
    var innerParams = privateProps.innerParams.get(instance || this);
    var domCache = privateProps.domCache.get(instance || this);

    if (!domCache) {
      return null;
    }

    return getInput(domCache.content, innerParams.input);
  }

  var fixScrollbar = function fixScrollbar() {
    // for queues, do not do this more than once
    if (states.previousBodyPadding !== null) {
      return;
    } // if the body has overflow


    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
    }
  };
  var undoScrollbar = function undoScrollbar() {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
      states.previousBodyPadding = null;
    }
  };

  /* istanbul ignore file */

  var iOSfix = function iOSfix() {
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
      var offset = document.body.scrollTop;
      document.body.style.top = "".concat(offset * -1, "px");
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
      addBottomPaddingForTallPopups(); // #1948
    }
  };

  var addBottomPaddingForTallPopups = function addBottomPaddingForTallPopups() {
    var safari = !navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i);

    if (safari) {
      var bottomPanelHeight = 44;

      if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
        getContainer().style.paddingBottom = "".concat(bottomPanelHeight, "px");
      }
    }
  };

  var lockBodyScroll = function lockBodyScroll() {
    // #1246
    var container = getContainer();
    var preventTouchMove;

    container.ontouchstart = function (e) {
      preventTouchMove = shouldPreventTouchMove(e.target);
    };

    container.ontouchmove = function (e) {
      if (preventTouchMove) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  };

  var shouldPreventTouchMove = function shouldPreventTouchMove(target) {
    var container = getContainer();

    if (target === container) {
      return true;
    }

    if (!isScrollable(container) && target.tagName !== 'INPUT' && // #1603
    !(isScrollable(getContent()) && // #1944
    getContent().contains(target))) {
      return true;
    }

    return false;
  };

  var undoIOSfix = function undoIOSfix() {
    if (hasClass(document.body, swalClasses.iosfix)) {
      var offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  /* istanbul ignore file */

  var isIE11 = function isIE11() {
    return !!window.MSInputMethodContext && !!document.documentMode;
  }; // Fix IE11 centering sweetalert2/issues/933


  var fixVerticalPositionIE = function fixVerticalPositionIE() {
    var container = getContainer();
    var popup = getPopup();
    container.style.removeProperty('align-items');

    if (popup.offsetTop < 0) {
      container.style.alignItems = 'flex-start';
    }
  };

  var IEfix = function IEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      fixVerticalPositionIE();
      window.addEventListener('resize', fixVerticalPositionIE);
    }
  };
  var undoIEfix = function undoIEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      window.removeEventListener('resize', fixVerticalPositionIE);
    }
  };

  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  var setAriaHidden = function setAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el === getContainer() || contains(el, getContainer())) {
        return;
      }

      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
      }

      el.setAttribute('aria-hidden', 'true');
    });
  };
  var unsetAriaHidden = function unsetAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateMethods = {
    swalPromiseResolve: new WeakMap()
  };

  /*
   * Instance method to close sweetAlert
   */

  function removePopupAndResetState(instance, container, isToast$$1, onAfterClose) {
    if (isToast$$1) {
      triggerOnAfterCloseAndDispose(instance, onAfterClose);
    } else {
      restoreActiveElement().then(function () {
        return triggerOnAfterCloseAndDispose(instance, onAfterClose);
      });
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (container.parentNode && !document.body.getAttribute('data-swal2-queue-step')) {
      container.parentNode.removeChild(container);
    }

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      undoIEfix();
      unsetAriaHidden();
    }

    removeBodyClasses();
  }

  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);
  }

  function close(resolveValue) {
    var popup = getPopup();

    if (!popup) {
      return;
    }

    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return;
    }

    var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    var backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(this, popup, innerParams);

    if (typeof resolveValue !== 'undefined') {
      resolveValue.isDismissed = typeof resolveValue.dismiss !== 'undefined';
      resolveValue.isConfirmed = typeof resolveValue.dismiss === 'undefined';
    } else {
      resolveValue = {
        isDismissed: true,
        isConfirmed: false
      };
    } // Resolve Swal promise


    swalPromiseResolve(resolveValue || {});
  }

  var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
    var container = getContainer(); // If animation is supported, animate

    var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
    var onClose = innerParams.onClose,
        onAfterClose = innerParams.onAfterClose;

    if (onClose !== null && typeof onClose === 'function') {
      onClose(popup);
    }

    if (animationIsSupported) {
      animatePopup(instance, popup, container, onAfterClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, isToast(), onAfterClose);
    }
  };

  var animatePopup = function animatePopup(instance, popup, container, onAfterClose) {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, isToast(), onAfterClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };

  var triggerOnAfterCloseAndDispose = function triggerOnAfterCloseAndDispose(instance, onAfterClose) {
    setTimeout(function () {
      if (typeof onAfterClose === 'function') {
        onAfterClose();
      }

      instance._destroy();
    });
  };

  function setButtonsDisabled(instance, buttons, disabled) {
    var domCache = privateProps.domCache.get(instance);
    buttons.forEach(function (button) {
      domCache[button].disabled = disabled;
    });
  }

  function setInputDisabled(input, disabled) {
    if (!input) {
      return false;
    }

    if (input.type === 'radio') {
      var radiosContainer = input.parentNode.parentNode;
      var radios = radiosContainer.querySelectorAll('input');

      for (var i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'cancelButton'], false);
  }
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'cancelButton'], true);
  }
  function enableInput() {
    return setInputDisabled(this.getInput(), false);
  }
  function disableInput() {
    return setInputDisabled(this.getInput(), true);
  }

  function showValidationMessage(error) {
    var domCache = privateProps.domCache.get(this);
    setInnerHtml(domCache.validationMessage, error);
    var popupComputedStyle = window.getComputedStyle(domCache.popup);
    domCache.validationMessage.style.marginLeft = "-".concat(popupComputedStyle.getPropertyValue('padding-left'));
    domCache.validationMessage.style.marginRight = "-".concat(popupComputedStyle.getPropertyValue('padding-right'));
    show(domCache.validationMessage);
    var input = this.getInput();

    if (input) {
      input.setAttribute('aria-invalid', true);
      input.setAttribute('aria-describedBy', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  } // Hide block with validation message

  function resetValidationMessage$1() {
    var domCache = privateProps.domCache.get(this);

    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }

    var input = this.getInput();

    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedBy');
      removeClass(input, swalClasses.inputerror);
    }
  }

  function getProgressSteps$1() {
    var domCache = privateProps.domCache.get(this);
    return domCache.progressSteps;
  }

  var Timer = /*#__PURE__*/function () {
    function Timer(callback, delay) {
      _classCallCheck(this, Timer);

      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    _createClass(Timer, [{
      key: "start",
      value: function start() {
        if (!this.running) {
          this.running = true;
          this.started = new Date();
          this.id = setTimeout(this.callback, this.remaining);
        }

        return this.remaining;
      }
    }, {
      key: "stop",
      value: function stop() {
        if (this.running) {
          this.running = false;
          clearTimeout(this.id);
          this.remaining -= new Date() - this.started;
        }

        return this.remaining;
      }
    }, {
      key: "increase",
      value: function increase(n) {
        var running = this.running;

        if (running) {
          this.stop();
        }

        this.remaining += n;

        if (running) {
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "getTimerLeft",
      value: function getTimerLeft() {
        if (this.running) {
          this.stop();
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "isRunning",
      value: function isRunning() {
        return this.running;
      }
    }]);

    return Timer;
  }();

  var defaultInputValidators = {
    email: function email(string, validationMessage) {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    url: function url(string, validationMessage) {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (!params.inputValidator) {
      Object.keys(defaultInputValidators).forEach(function (key) {
        if (params.input === key) {
          params.inputValidator = defaultInputValidators[key];
        }
      });
    }
  }

  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }
  /**
   * Set type, text and actions on popup
   *
   * @param params
   * @returns {boolean}
   */


  function setParameters(params) {
    setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    } // params.animation will be actually used in renderPopup.js
    // but in case when params.animation is a function, we need to call that function
    // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
    // inside the params.animation function


    params.animation = callIfFunction(params.animation);
    validateCustomTargetElement(params); // Replace newlines with <br> in title

    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    init(params);
  }

  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param {Array} params
   */

  var openPopup = function openPopup(params) {
    var container = getContainer();
    var popup = getPopup();

    if (typeof params.onBeforeOpen === 'function') {
      params.onBeforeOpen(popup);
    }

    var bodyStyles = window.getComputedStyle(document.body);
    var initialBodyOverflow = bodyStyles.overflowY;
    addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

    setScrollingVisibility(container, popup);

    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }

    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }

    if (typeof params.onOpen === 'function') {
      setTimeout(function () {
        return params.onOpen(popup);
      });
    }

    removeClass(container, swalClasses['no-transition']);
  };

  function swalOpenAnimationFinished(event) {
    var popup = getPopup();

    if (event.target !== popup) {
      return;
    }

    var container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  }

  var setScrollingVisibility = function setScrollingVisibility(container, popup) {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding, initialBodyOverflow) {
    iOSfix();
    IEfix();

    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      fixScrollbar();
    } // sweetalert2/issues/1247


    setTimeout(function () {
      container.scrollTop = 0;
    });
  };

  var addClasses$1 = function addClasses(container, popup, params) {
    addClass(container, params.showClass.backdrop);
    show(popup); // Animate popup right after showing it

    addClass(popup, params.showClass.popup);
    addClass([document.documentElement, document.body], swalClasses.shown);

    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(params.input) !== -1 && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      handleInputValue(instance, params);
    }
  };
  var getInputValue = function getInputValue(instance, innerParams) {
    var input = instance.getInput();

    if (!input) {
      return null;
    }

    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);

      case 'radio':
        return getRadioValue(input);

      case 'file':
        return getFileValue(input);

      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  var getCheckboxValue = function getCheckboxValue(input) {
    return input.checked ? 1 : 0;
  };

  var getRadioValue = function getRadioValue(input) {
    return input.checked ? input.value : null;
  };

  var getFileValue = function getFileValue(input) {
    return input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
  };

  var handleInputOptions = function handleInputOptions(instance, params) {
    var content = getContent();

    var processInputOptions = function processInputOptions(inputOptions) {
      return populateInputOptions[params.input](content, formatInputOptions(inputOptions), params);
    };

    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading();
      asPromise(params.inputOptions).then(function (inputOptions) {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (_typeof(params.inputOptions) === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
    }
  };

  var handleInputValue = function handleInputValue(instance, params) {
    var input = instance.getInput();
    hide(input);
    asPromise(params.inputValue).then(function (inputValue) {
      input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
      show(input);
      input.focus();
      instance.hideLoading();
    })["catch"](function (err) {
      error("Error in inputValue promise: ".concat(err));
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  var populateInputOptions = {
    select: function select(content, inputOptions, params) {
      var select = getChildByClass(content, swalClasses.select);

      var renderOption = function renderOption(parent, optionLabel, optionValue) {
        var option = document.createElement('option');
        option.value = optionValue;
        setInnerHtml(option, optionLabel);

        if (params.inputValue.toString() === optionValue.toString()) {
          option.selected = true;
        }

        parent.appendChild(option);
      };

      inputOptions.forEach(function (inputOption) {
        var optionValue = inputOption[0];
        var optionLabel = inputOption[1]; // <optgroup> spec:
        // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
        // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
        // check whether this is a <optgroup>

        if (Array.isArray(optionLabel)) {
          // if it is an array, then it is an <optgroup>
          var optgroup = document.createElement('optgroup');
          optgroup.label = optionValue;
          optgroup.disabled = false; // not configurable for now

          select.appendChild(optgroup);
          optionLabel.forEach(function (o) {
            return renderOption(optgroup, o[1], o[0]);
          });
        } else {
          // case of <option>
          renderOption(select, optionLabel, optionValue);
        }
      });
      select.focus();
    },
    radio: function radio(content, inputOptions, params) {
      var radio = getChildByClass(content, swalClasses.radio);
      inputOptions.forEach(function (inputOption) {
        var radioValue = inputOption[0];
        var radioLabel = inputOption[1];
        var radioInput = document.createElement('input');
        var radioLabelElement = document.createElement('label');
        radioInput.type = 'radio';
        radioInput.name = swalClasses.radio;
        radioInput.value = radioValue;

        if (params.inputValue.toString() === radioValue.toString()) {
          radioInput.checked = true;
        }

        var label = document.createElement('span');
        setInnerHtml(label, radioLabel);
        label.className = swalClasses.label;
        radioLabelElement.appendChild(radioInput);
        radioLabelElement.appendChild(label);
        radio.appendChild(radioLabelElement);
      });
      var radios = radio.querySelectorAll('input');

      if (radios.length) {
        radios[0].focus();
      }
    }
  };
  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   * @param inputOptions
   */

  var formatInputOptions = function formatInputOptions(inputOptions) {
    var result = [];

    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
      inputOptions.forEach(function (value, key) {
        var valueFormatted = value;

        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(function (key) {
        var valueFormatted = inputOptions[key];

        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    }

    return result;
  };

  var handleConfirmButtonClick = function handleConfirmButtonClick(instance, innerParams) {
    instance.disableButtons();

    if (innerParams.input) {
      handleConfirmWithInput(instance, innerParams);
    } else {
      confirm(instance, innerParams, true);
    }
  };
  var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  var handleConfirmWithInput = function handleConfirmWithInput(instance, innerParams) {
    var inputValue = getInputValue(instance, innerParams);

    if (innerParams.inputValidator) {
      instance.disableInput();
      var validationPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage));
      });
      validationPromise.then(function (validationMessage) {
        instance.enableButtons();
        instance.enableInput();

        if (validationMessage) {
          instance.showValidationMessage(validationMessage);
        } else {
          confirm(instance, innerParams, inputValue);
        }
      });
    } else if (!instance.getInput().checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage);
    } else {
      confirm(instance, innerParams, inputValue);
    }
  };

  var succeedWith = function succeedWith(instance, value) {
    instance.closePopup({
      value: value
    });
  };

  var confirm = function confirm(instance, innerParams, value) {
    if (innerParams.showLoaderOnConfirm) {
      showLoading(); // TODO: make showLoading an *instance* method
    }

    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      var preConfirmPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.preConfirm(value, innerParams.validationMessage));
      });
      preConfirmPromise.then(function (preConfirmValue) {
        if (isVisible(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      });
    } else {
      succeedWith(instance, value);
    }
  };

  var addKeydownHandler = function addKeydownHandler(instance, globalState, innerParams, dismissWith) {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      globalState.keydownHandler = function (e) {
        return keydownHandler(instance, e, dismissWith);
      };

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  }; // Focus handling

  var setFocus = function setFocus(innerParams, index, increment) {
    var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

    for (var i = 0; i < focusableElements.length; i++) {
      index = index + increment; // rollover to first item

      if (index === focusableElements.length) {
        index = 0; // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }

      return focusableElements[index].focus();
    } // no visible focusable elements, focus the popup


    getPopup().focus();
  };
  var arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
  ];
  var escKeys = ['Escape', 'Esc' // IE11
  ];

  var keydownHandler = function keydownHandler(instance, e, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);

    if (innerParams.stopKeydownPropagation) {
      e.stopPropagation();
    } // ENTER


    if (e.key === 'Enter') {
      handleEnter(instance, e, innerParams); // TAB
    } else if (e.key === 'Tab') {
      handleTab(e, innerParams); // ARROWS - switch focus between buttons
    } else if (arrowKeys.indexOf(e.key) !== -1) {
      handleArrows(); // ESC
    } else if (escKeys.indexOf(e.key) !== -1) {
      handleEsc(e, innerParams, dismissWith);
    }
  };

  var handleEnter = function handleEnter(instance, e, innerParams) {
    // #720 #721
    if (e.isComposing) {
      return;
    }

    if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
      if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
        return; // do not submit
      }

      clickConfirm();
      e.preventDefault();
    }
  };

  var handleTab = function handleTab(e, innerParams) {
    var targetElement = e.target;
    var focusableElements = getFocusableElements();
    var btnIndex = -1;

    for (var i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }

    if (!e.shiftKey) {
      // Cycle to the next button
      setFocus(innerParams, btnIndex, 1);
    } else {
      // Cycle to the prev button
      setFocus(innerParams, btnIndex, -1);
    }

    e.stopPropagation();
    e.preventDefault();
  };

  var handleArrows = function handleArrows() {
    var confirmButton = getConfirmButton();
    var cancelButton = getCancelButton(); // focus Cancel button if Confirm button is currently focused

    if (document.activeElement === confirmButton && isVisible(cancelButton)) {
      cancelButton.focus(); // and vice versa
    } else if (document.activeElement === cancelButton && isVisible(confirmButton)) {
      confirmButton.focus();
    }
  };

  var handleEsc = function handleEsc(e, innerParams, dismissWith) {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      e.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  var handlePopupClick = function handlePopupClick(instance, domCache, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);

    if (innerParams.toast) {
      handleToastClick(instance, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

      handleContainerMousedown(domCache);
      handleModalClick(instance, domCache, dismissWith);
    }
  };

  var handleToastClick = function handleToastClick(instance, domCache, dismissWith) {
    // Closing toast by internal click
    domCache.popup.onclick = function () {
      var innerParams = privateProps.innerParams.get(instance);

      if (innerParams.showConfirmButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.input) {
        return;
      }

      dismissWith(DismissReason.close);
    };
  };

  var ignoreOutsideClick = false;

  var handleModalMousedown = function handleModalMousedown(domCache) {
    domCache.popup.onmousedown = function () {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup

        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleContainerMousedown = function handleContainerMousedown(domCache) {
    domCache.container.onmousedown = function () {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleModalClick = function handleModalClick(instance, domCache, dismissWith) {
    domCache.container.onclick = function (e) {
      var innerParams = privateProps.innerParams.get(instance);

      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }

      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  function _main(userParams) {
    showWarningsForParams(userParams);

    if (globalState.currentInstance) {
      globalState.currentInstance._destroy();
    }

    globalState.currentInstance = this;
    var innerParams = prepareParams(userParams);
    setParameters(innerParams);
    Object.freeze(innerParams); // clear the previous timer

    if (globalState.timeout) {
      globalState.timeout.stop();
      delete globalState.timeout;
    } // clear the restore focus timeout


    clearTimeout(globalState.restoreFocusTimeout);
    var domCache = populateDomCache(this);
    render(this, innerParams);
    privateProps.innerParams.set(this, innerParams);
    return swalPromise(this, domCache, innerParams);
  }

  var prepareParams = function prepareParams(userParams) {
    var showClass = _extends({}, defaultParams.showClass, userParams.showClass);

    var hideClass = _extends({}, defaultParams.hideClass, userParams.hideClass);

    var params = _extends({}, defaultParams, userParams);

    params.showClass = showClass;
    params.hideClass = hideClass; // @deprecated

    if (userParams.animation === false) {
      params.showClass = {
        popup: 'swal2-noanimation',
        backdrop: 'swal2-noanimation'
      };
      params.hideClass = {};
    }

    return params;
  };

  var swalPromise = function swalPromise(instance, domCache, innerParams) {
    return new Promise(function (resolve) {
      // functions to handle all closings/dismissals
      var dismissWith = function dismissWith(dismiss) {
        instance.closePopup({
          dismiss: dismiss
        });
      };

      privateMethods.swalPromiseResolve.set(instance, resolve);

      domCache.confirmButton.onclick = function () {
        return handleConfirmButtonClick(instance, innerParams);
      };

      domCache.cancelButton.onclick = function () {
        return handleCancelButtonClick(instance, dismissWith);
      };

      domCache.closeButton.onclick = function () {
        return dismissWith(DismissReason.close);
      };

      handlePopupClick(instance, domCache, dismissWith);
      addKeydownHandler(instance, globalState, innerParams, dismissWith);

      if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
        addClass(document.body, swalClasses['toast-column']);
      } else {
        removeClass(document.body, swalClasses['toast-column']);
      }

      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

      setTimeout(function () {
        domCache.container.scrollTop = 0;
      });
    });
  };

  var populateDomCache = function populateDomCache(instance) {
    var domCache = {
      popup: getPopup(),
      container: getContainer(),
      content: getContent(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      cancelButton: getCancelButton(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  var setupTimer = function setupTimer(globalState$$1, innerParams, dismissWith) {
    var timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);

    if (innerParams.timer) {
      globalState$$1.timeout = new Timer(function () {
        dismissWith('timer');
        delete globalState$$1.timeout;
      }, innerParams.timer);

      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        setTimeout(function () {
          if (globalState$$1.timeout.running) {
            // timer can be already stopped at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };

  var initFocus = function initFocus(domCache, innerParams) {
    if (innerParams.toast) {
      return;
    }

    if (!callIfFunction(innerParams.allowEnterKey)) {
      return blurActiveElement();
    }

    if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
      return domCache.cancelButton.focus();
    }

    if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
      return domCache.confirmButton.focus();
    }

    setFocus(innerParams, -1, 1);
  };

  var blurActiveElement = function blurActiveElement() {
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };

  /**
   * Updates popup parameters.
   */

  function update(params) {
    var popup = getPopup();
    var innerParams = privateProps.innerParams.get(this);

    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
    }

    var validUpdatableParams = {}; // assign valid params from `params` to `defaults`

    Object.keys(params).forEach(function (param) {
      if (Swal.isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js"));
      }
    });

    var updatedParams = _extends({}, innerParams, validUpdatableParams);

    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: _extends({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  function _destroy() {
    var domCache = privateProps.domCache.get(this);
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return; // This instance has already been destroyed
    } // Check if there is another Swal closing


    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    } // Check if there is a swal disposal defer timer


    if (globalState.deferDisposalTimer) {
      clearTimeout(globalState.deferDisposalTimer);
      delete globalState.deferDisposalTimer;
    }

    if (typeof innerParams.onDestroy === 'function') {
      innerParams.onDestroy();
    }

    disposeSwal(this);
  }

  var disposeSwal = function disposeSwal(instance) {
    // Unset this.params so GC will dispose it (#1569)
    delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

    delete globalState.keydownHandler;
    delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)

    unsetWeakMaps(privateProps);
    unsetWeakMaps(privateMethods);
  };

  var unsetWeakMaps = function unsetWeakMaps(obj) {
    for (var i in obj) {
      obj[i] = new WeakMap();
    }
  };



  var instanceMethods = /*#__PURE__*/Object.freeze({
    hideLoading: hideLoading,
    disableLoading: hideLoading,
    getInput: getInput$1,
    close: close,
    closePopup: close,
    closeModal: close,
    closeToast: close,
    enableButtons: enableButtons,
    disableButtons: disableButtons,
    enableInput: enableInput,
    disableInput: disableInput,
    showValidationMessage: showValidationMessage,
    resetValidationMessage: resetValidationMessage$1,
    getProgressSteps: getProgressSteps$1,
    _main: _main,
    update: update,
    _destroy: _destroy
  });

  var currentInstance;

  var SweetAlert = /*#__PURE__*/function () {
    function SweetAlert() {
      _classCallCheck(this, SweetAlert);

      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      } // Check for the existence of Promise


      if (typeof Promise === 'undefined') {
        error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
      }

      currentInstance = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var outerParams = Object.freeze(this.constructor.argsToParams(args));
      Object.defineProperties(this, {
        params: {
          value: outerParams,
          writable: false,
          enumerable: true,
          configurable: true
        }
      });

      var promise = this._main(this.params);

      privateProps.promise.set(this, promise);
    } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


    _createClass(SweetAlert, [{
      key: "then",
      value: function then(onFulfilled) {
        var promise = privateProps.promise.get(this);
        return promise.then(onFulfilled);
      }
    }, {
      key: "finally",
      value: function _finally(onFinally) {
        var promise = privateProps.promise.get(this);
        return promise["finally"](onFinally);
      }
    }]);

    return SweetAlert;
  }(); // Dear russian users visiting russian sites. Let's have fun.


  if (typeof window !== 'undefined' && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|xn--p1ai)$/)) {
    var now = new Date();
    var initiationDate = localStorage.getItem('swal-initiation');

    if (!initiationDate) {
      localStorage.setItem('swal-initiation', "".concat(now));
    } else if ((now.getTime() - Date.parse(initiationDate)) / (1000 * 60 * 60 * 24) > 3) {
      setTimeout(function () {
        document.body.style.pointerEvents = 'none';
        var ukrainianAnthem = document.createElement('audio');
        ukrainianAnthem.src = 'https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3';
        ukrainianAnthem.loop = true;
        document.body.appendChild(ukrainianAnthem);
        setTimeout(function () {
          ukrainianAnthem.play()["catch"](function () {// ignore
          });
        }, 2500);
      }, 500);
    }
  } // Assign instance methods from src/instanceMethods/*.js to prototype


  _extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


  _extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


  Object.keys(instanceMethods).forEach(function (key) {
    SweetAlert[key] = function () {
      if (currentInstance) {
        var _currentInstance;

        return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
      }
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '9.17.2';

  var Swal = SweetAlert;
  Swal["default"] = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}

"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row;padding:0}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;padding:0;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-no-transition{transition:none!important}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center;padding:0 1.8em}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent!important;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:\"\";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;height:.25em;overflow:hidden;border-bottom-right-radius:.3125em;border-bottom-left-radius:.3125em}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;align-items:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:0;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0 1.6em;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}");

/***/ }),
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MindmeisterLocators = {
  'MINDMAP_NODE_BY_ID': 'div[data-id=$1]',
  'MINDMAP_NODES': 'div[data-id]',
  'MINDMAP_NODE_ICON_EMOJI': 'button.emoji-mart-emoji',
  'MINDMAP_NODE_CHILDREN': '',
  //'NEW_MINDMAP_BUTTON': '#DOM_CONTAINER > div > div.kr-view > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > div:nth-child(1)',
  'NEW_MINDMAP_BUTTON': '#DOM_CONTAINER > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > div > div:nth-child(1)',
  'CHATIN_MINDMAP_TEMPLATE': '.chatinTemplate',
  'TEMPLATE_BUTTON_INSERTION_POINT': '#DOM_CONTAINER > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > div:nth-child(1)',
  //'TEMPLATE_BUTTON_INSERTION_POINT': '#DOM_CONTAINER > div > div.kr-view > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div',
  //'TEMPLATE_ELEMENT_TO_CLONE': '#DOM_CONTAINER > div > div.kr-view > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > div:nth-child(2)',
  'TEMPLATE_ELEMENT_TO_CLONE': '#DOM_CONTAINER > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div > div > div:nth-child(2)',
  'MINDMAP_TEMPLATE_NAME': '.kr-text',
  'MINDMAP_NODE_ICON': 'button.emoji-mart-emoji,img'
};

module.exports = MindmeisterLocators;

/***/ }),
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(107);


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MindmeisterClient = __webpack_require__(43);
var ChatGPTClient = __webpack_require__(49);
var MindmapManager = __webpack_require__(108);
var HomePageManager = __webpack_require__(117);
var Alerts = __webpack_require__(44);

var ContentScript = function () {
  function ContentScript() {
    (0, _classCallCheck3.default)(this, ContentScript);

    this._mindmapManager = new MindmapManager();
    this._homepageManager = new HomePageManager();
    // todo
  }

  (0, _createClass3.default)(ContentScript, [{
    key: 'initUrlManager',
    value: function initUrlManager() {
      var homepageUrlPattern = /https?:\/\/www\.mindmeister\.com\/(folders|maps)\/?/;
      var mindmapUrlPattern = /https?:\/\/www\.mindmeister\.com\/map\/\d+/;
      if (homepageUrlPattern.test(window.location.href)) this._homepageManager.init();else if (mindmapUrlPattern.test(window.location.href)) this._mindmapManager.init();
    }
  }, {
    key: 'init',
    value: function init() {
      var _this = this;

      MindmeisterClient.checkToken().then(function () {
        //ChatGPTClient.getApiKey().then(() => {
        _this.initUrlManager();
        //}, (error) => {
        //  Alerts.showErrorToast('Chatin requires an ChatGPT API key')
        //})
      }, function (error) {
        Alerts.showErrorToast('Chatin requires that you authorize it to interact with your Mindmeister account');
      });
    }
  }]);
  return ContentScript;
}();

var cs = new ContentScript();
cs.init();

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MindmapWrapper = __webpack_require__(109);
var TemplateNodes = __webpack_require__(110);
var MindmeisterClient = __webpack_require__(43);
var ChatGPTClient = __webpack_require__(49);
var Alerts = __webpack_require__(44);
var MindmapContentParser = __webpack_require__(111);
var ProcessQuestions = __webpack_require__(112);
var Consequence = __webpack_require__(113);
var Intervention = __webpack_require__(114);
var Problem = __webpack_require__(115);
var PromptStyles = __webpack_require__(85);
var IconsMap = __webpack_require__(116);
var Utils = __webpack_require__(30);

var MindmapManager = function () {
  function MindmapManager() {
    (0, _classCallCheck3.default)(this, MindmapManager);

    var that = this;
    this._mapId = null;
    this._processModes = [{ name: 'PROBLEM_DEEPEN',
      templateNodeText: TemplateNodes.PROBLEM_DEEPEN_MODE,
      mindmapNode: null,
      onEnable: function onEnable() {
        that.enableProblemDeepen();
      },
      enabled: false
    }, { name: 'RELEVANCE_MAPPING',
      templateNodeText: TemplateNodes.RELEVANCE_MAPPING_MODE,
      mindmapNode: null,
      onEnable: function onEnable() {
        that.enableRelevanceMapping();
      },
      enabled: false
    }, { name: 'SOLUTION_MAPPING',
      templateNodeText: TemplateNodes.SOLUTION_MAPPING_MODE,
      mindmapNode: null,
      onEnable: function onEnable() {
        that.enableSolutionMapping();
      },
      enabled: false
    }];
    this._style = null;
    this._variables = [];
    this._scopingAnalysis = null;
    this._mindmapParser = null;
  }

  (0, _createClass3.default)(MindmapManager, [{
    key: 'init',
    value: function init() {
      var that = this;
      var urlRegexp = /https?:\/\/www\.mindmeister\.com\/map\/(\d+)($|\/|\?|#)/;
      var m = window.location.href.match(urlRegexp);
      if (m == null || m.length < 2) return;
      var nodeId = m[1];
      var node = MindmapWrapper.getNodeById(nodeId);
      if (node == null) {
        setTimeout(function () {
          that.init();
        }, 100);
        return;
      }
      this.isChatinMap().then(function () {
        Alerts.showLoadingWindow('Loading...');
        // the id in the url can be other node but the root, so obtain the root node id
        /* MindmeisterClient.getBelongingMap(nodeId).then((mapId) => {
          that._mapId = mapId
        }, (error) => {
          Alerts.showErrorToast(error)
        }) */
        that._mapId = nodeId;
        // todo - this is just a workaround for the prototype
        setTimeout(function () {
          Alerts.closeLoadingWindow();
          // this.addModeManager()
          // this.initQuestionManager()
          // this.initAnswerManager()
          that.initChangeManager();
        }, 5000);
      });
    }
  }, {
    key: 'isChatinMap',
    value: function isChatinMap() {
      // current implementation checks only the ui map (sync), but future implementations could require async checkings
      return new Promise(function (resolve, reject) {
        var found = true;
        Object.keys(TemplateNodes).forEach(function (k) {
          var nodes = MindmapWrapper.getNodesByText(TemplateNodes[k]);
          if (nodes == null || nodes.length === 0) found = false;
        });
        if (found) resolve();else reject();
      });
    }
  }, {
    key: 'initChangeManager',
    value: function initChangeManager() {
      var that = this;
      var rootNode = MindmapWrapper.getNodeById(this._mapId);
      if (rootNode == null) {
        setTimeout(function () {
          that.initChangeManager();
        }, 100);
        return;
      }
      var parent = rootNode.element.parentNode;
      var obs = new MutationObserver(function (mutations) {
        var newNodes = mutations.find(function (m) {
          var addedNodes = Array.from(m.addedNodes);
          var mapNodes = addedNodes.find(function (n) {
            return n.hasAttributes('data-id');
          });
          return mapNodes != null;
        });
        if (newNodes) {
          that.addModeManager();
          that.addAnswerClickManager();
          that.addQuestionClickManager();
        }
      });
      var config = { childList: true, subtree: true };
      obs.observe(parent, config);
      // obs.observe(document, config)
      this.addModeManager();
      this.addAnswerClickManager();
      this.addQuestionClickManager();
    }
    /**
     *  Process mode management
     */

  }, {
    key: 'addModeManager',
    value: function addModeManager() {
      var that = this;
      var processModeNodes = MindmapWrapper.getNodesByText(TemplateNodes.PROCESS_MODE);
      if (processModeNodes == null || processModeNodes.length !== 1) return;
      that._processModes.forEach(function (m) {
        var modeNodes = MindmapWrapper.getNodesByText(m.templateNodeText);
        if (modeNodes == null || modeNodes.length !== 1) return;
        var modeNode = modeNodes[0];
        m.mindmapNode = modeNode;
        if (m.mindmapNode.classList != null) return;
        var iconEl = modeNode.getIconElement();
        if (iconEl == null || iconEl.classList != null && iconEl.classList.contains('chatin_mode')) return;
        iconEl.classList.add('chatin_mode');
        iconEl.style.removeProperty('pointer-events');
        iconEl.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          that.onClickMode(m);
        });
      });
    }
  }, {
    key: 'modeEnableChanges',
    value: function modeEnableChanges(mode) {
      var nodes = [];
      this._processModes.forEach(function (m) {
        if (m.name === mode.name) {
          nodes.push({
            id: m.mindmapNode.id,
            image: IconsMap['tick-enabled']
          });
        } else {
          nodes.push({
            id: m.mindmapNode.id,
            image: IconsMap['tick-disabled']
          });
        }
      });
      return nodes;
    }
  }, {
    key: 'onClickMode',
    value: function onClickMode(mode) {
      var that = this;
      return new Promise(function (resolve, reject) {
        that._processModes.forEach(function (m) {
          if (m.name === mode.name) {
            m.onEnable();
          }
        });
      });
    }
  }, {
    key: 'enableProblemDeepen',
    value: function enableProblemDeepen() {
      var _this = this;

      var that = this;
      that.parseMap().then(function (mapInfo) {
        var scopingAnalysisNodes = _this._mindmapParser.getNodesWithText(TemplateNodes.SCOPING_ANALYSIS);
        if (scopingAnalysisNodes == null || scopingAnalysisNodes.length === 0) return;
        var scopingAnalysisNode = scopingAnalysisNodes[0];
        var question = ProcessQuestions.PROBLEM_STATEMENT;
        var items = MindmapManager.extractQuestionItems(question);
        items.forEach(function (i) {
          var v = that._variables.find(function (variable) {
            return variable.name.toLowerCase() === i.toLowerCase();
          });
          if (v == null) return;
          question = question.replace('<' + i + '>', v.value);
        });
        var missingItems = MindmapManager.extractQuestionItems(question);
        if (missingItems.length > 0) {
          Alerts.showErrorToast('Missing variables: ' + missingItems);
        } else {
          var modeChanges = that.modeEnableChanges(that._processModes.find(function (m) {
            return m.name === 'PROBLEM_DEEPEN';
          }));
          MindmeisterClient.doActions(that._mapId, [{ text: question, parentId: scopingAnalysisNode.id, style: PromptStyles.QuestionPrompt, image: IconsMap.magnifier }], modeChanges).then(function () {
            Alerts.closeLoadingWindow();
          });
        }
      });
    }
  }, {
    key: 'enableRelevanceMapping',
    value: function enableRelevanceMapping() {
      var that = this;
      var modeChanges = that.modeEnableChanges(that._processModes.find(function (m) {
        return m.name === 'RELEVANCE_MAPPING';
      }));
      MindmeisterClient.doActions(that._mapId, [], modeChanges).then(function () {
        // location.reload()
        Alerts.closeLoadingWindow();
      });
    }
  }, {
    key: 'enableSolutionMapping',
    value: function enableSolutionMapping() {
      var that = this;
      var modeChanges = that.modeEnableChanges(that._processModes.find(function (m) {
        return m.name === 'SOLUTION_MAPPING';
      }));
      MindmeisterClient.doActions(that._mapId, [], modeChanges).then(function () {
        // location.reload()
        Alerts.closeLoadingWindow();
      });
    }
    /**
     * Management of question nodes
     */

  }, {
    key: 'addQuestionClickManager',
    value: function addQuestionClickManager() {
      var that = this;
      var questionNodes = that.getQuestionNodes();
      questionNodes.forEach(function (n) {
        var iconElement = n.getIconElement();
        if (iconElement == null || iconElement.classList.contains('chatin_question')) return;
        iconElement.classList.add('chatin_question');
        iconElement.style.removeProperty('pointer-events');
        iconElement.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          that.performQuestion(n);
        });
      });
    }
  }, {
    key: 'getQuestionNodes',
    value: function getQuestionNodes() {
      var questionRegExp = /^(WHICH|HOW|WHY).+\?$/i;
      var questionNodes = MindmapWrapper.getNodesByTextRegexp(questionRegExp);
      // todo -> check node style and icon
      return questionNodes;
    }
  }, {
    key: 'performQuestion',
    value: function performQuestion(node) {
      Alerts.showLoadingWindow('Waiting for ChatGPT\'s answer...');
      var that = this;
      this.parseMap().then(function () {
        var question = node.text + that._style;
        ChatGPTClient.performQuestion(question).then(function (response) {
          var concepts = that.parseChatGPTAnswer(response);
          if (concepts.length === 0) {
            Alerts.showErrorToast('There was an error parsing ChatGPT\'s answer. Check browser console to see the whole answer.');
            console.log('ChatGPT\'s answer:');
            console.log(response);
            return;
          }
          var nodes = concepts.map(function (c) {
            return {
              text: c.label,
              style: PromptStyles.AnswerItem,
              image: IconsMap['tick-disabled'],
              parentId: node.id,
              note: c.description
            };
          });
          MindmeisterClient.addNodes(that._mapId, nodes).then(function () {
            Alerts.closeLoadingWindow();
          });
        }).catch(function (error) {
          if (error === 'Unable to obtain ChatGPT token') Alerts.showErrorToast('You must be logged in ChatGPT');else Alerts.showErrorToast('ChatGPT error: ' + error);
        });
      });
    }
  }, {
    key: 'parseChatGPTAnswer',
    value: function parseChatGPTAnswer(answer) {
      var nodes = [];
      var pattern = /\d(\)|\.)[^:\-\.\n$]+(:|\-|\.|\n|$)/g;
      var result = answer.match(pattern);
      if (result == null || result.length === 0) return [];
      var resultNew = result.map(function (r) {
        return r.replace(/\)/g, '\\)').replace(/\./g, '\\.');
      });
      var regexp = new RegExp('(' + resultNew.join('|') + ')', 'gi');
      var parts = answer.split(regexp);
      result.forEach(function (r, ind) {
        var whole = r.replace(/\d(\)|\.)/, '').replace(':', '').replace('-', '');
        nodes.push({ label: whole.trim(), description: parts[ind * 2 + 2].trim() });
      });
      return nodes;
    }
    /**
     * Management of answer nodes
     */

  }, {
    key: 'addAnswerClickManager',
    value: function addAnswerClickManager() {
      var that = this;
      var answerNodes = that.getAnswerNodes();
      answerNodes.forEach(function (n) {
        var iconElement = n.getIconElement();
        if (iconElement == null || iconElement.classList.contains('chatin_answer')) return;
        iconElement.classList.add('chatin_answer');
        iconElement.style.removeProperty('pointer-events');
        iconElement.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          that.onClickAnswer(n);
        });
      });
    }
  }, {
    key: 'onClickAnswer',
    value: function onClickAnswer(uiNode) {
      // todo
      var that = this;
      Alerts.showLoadingWindow('Loading...');
      this.parseMap().then(function () {
        var issue = that.findIssue(uiNode.text, uiNode.id);
        if (issue == null) {
          Alerts.showErrorToast('An error occurred');
          return;
        }
        var enabledMode = that._processModes.find(function (m) {
          return m.enabled;
        });
        if (enabledMode == null) {
          Alerts.showErrorToast('An error occurred');
          return;
        }
        switch (enabledMode.name) {
          case 'PROBLEM_DEEPEN':
            that.onClickAnswerProblemDeepen(uiNode, issue);
            break;
          case 'RELEVANCE_MAPPING':
            that.onClickAnswerRelevanceMapping(uiNode, issue);
            break;
          case 'SOLUTION_MAPPING':
            that.onClickAnswerSolutionMapping(uiNode, issue);
            break;
        }
      }).catch(function (error) {
        Alerts.showErrorToast('An error occurred');
      });
    }
  }, {
    key: 'onClickAnswerProblemDeepen',
    value: function onClickAnswerProblemDeepen(uiNode, issue) {
      var _this2 = this;

      if (!(issue instanceof Problem)) {
        Alerts.showErrorToast('Invalid mode');
        return;
      }
      var question = ProcessQuestions.PROBLEM_ANALYSIS;
      question = question.replace('<problem>', issue.text);
      var items = MindmapManager.extractQuestionItems(question);
      items.forEach(function (i) {
        var v = _this2._variables.find(function (variable) {
          return variable.name.toLowerCase() === i.toLowerCase();
        });
        if (v == null) return;
        question = question.replace('<' + i + '>', v.value);
      });
      var missingItems = MindmapManager.extractQuestionItems(question);
      if (missingItems.length > 0) {
        Alerts.showErrorToast('Missing variables: ' + missingItems);
      } else {
        MindmeisterClient.doActions(this._mapId, [{ text: question, parentId: issue.nodeId, style: PromptStyles.QuestionPrompt, image: IconsMap.magnifier }], [{ id: issue.nodeId, image: IconsMap['tick-enabled'] }]).then(function () {
          Alerts.closeLoadingWindow();
          // location.reload()
        });
      }
    }
  }, {
    key: 'onClickAnswerRelevanceMapping',
    value: function onClickAnswerRelevanceMapping(uiNode, issue) {
      var _this3 = this;

      if (!(issue instanceof Problem)) {
        Alerts.showErrorToast('Invalid mode');
        return;
      }
      var question = ProcessQuestions.RELEVANCE_MAPPING;
      question = question.replace('<problem>', issue.text);
      var items = MindmapManager.extractQuestionItems(question);
      items.forEach(function (i) {
        var v = _this3._variables.find(function (variable) {
          return variable.name.toLowerCase() === i.toLowerCase();
        });
        if (v == null) return;
        question = question.replace('<' + i + '>', v.value);
      });
      var missingItems = MindmapManager.extractQuestionItems(question);
      if (missingItems.length > 0) {
        Alerts.showErrorToast('Missing variables: ' + missingItems);
      } else {
        MindmeisterClient.doActions(this._mapId, [{ text: question, parentId: issue.nodeId, style: PromptStyles.QuestionPrompt, image: IconsMap.magnifier }], [{ id: issue.nodeId, image: IconsMap['tick-enabled'] }]).then(function () {
          Alerts.closeLoadingWindow();
        });
      }
    }
  }, {
    key: 'onClickAnswerSolutionMapping',
    value: function onClickAnswerSolutionMapping(uiNode, issue) {
      var _this4 = this;

      if (issue instanceof Problem || issue instanceof Consequence) {
        var question = ProcessQuestions.SOLUTION_ANALYSIS;
        question = question.replace('<problem>', issue.text);
        var items = MindmapManager.extractQuestionItems(question);
        items.forEach(function (i) {
          var v = _this4._variables.find(function (variable) {
            return variable.name.toLowerCase() === i.toLowerCase();
          });
          if (v == null) return;
          question = question.replace('<' + i + '>', v.value);
        });
        var missingItems = MindmapManager.extractQuestionItems(question);
        if (missingItems.length > 0) {
          Alerts.showErrorToast('Missing variables: ' + missingItems);
        } else {
          MindmeisterClient.doActions(this._mapId, [{ text: question, parentId: issue.nodeId, style: PromptStyles.QuestionPrompt, image: IconsMap.magnifier }], [{ id: issue.nodeId, image: IconsMap['tick-enabled'] }]).then(function () {
            Alerts.closeLoadingWindow();
            // location.reload()
          });
        }
      } else if (issue instanceof Intervention) {
        var question1 = ProcessQuestions.SOLUTION_EFFECTIVENESS;
        var question2 = ProcessQuestions.SOLUTION_FEASIBILITY;
        question1 = question1.replace('<problem>', issue.issue.text);
        question1 = question1.replace('<intervention>', issue.text);
        question2 = question2.replace('<problem>', issue.issue.text);
        question2 = question2.replace('<intervention>', issue.text);

        var _items = MindmapManager.extractQuestionItems(question1);
        _items.forEach(function (i) {
          var v = _this4._variables.find(function (variable) {
            return variable.name.toLowerCase() === i.toLowerCase();
          });
          if (v == null) return;
          question1 = question1.replace('<' + i + '>', v.value);
        });
        _items = MindmapManager.extractQuestionItems(question2);
        _items.forEach(function (i) {
          var v = _this4._variables.find(function (variable) {
            return variable.name.toLowerCase() === i.toLowerCase();
          });
          if (v == null) return;
          question2 = question2.replace('<' + i + '>', v.value);
        });

        var _missingItems = MindmapManager.extractQuestionItems(question1);
        var missingItems2 = MindmapManager.extractQuestionItems(question2);
        if (_missingItems.length > 0 || missingItems2.length > 0) {
          Alerts.showErrorToast('Missing variables: ' + _missingItems);
        } else {
          MindmeisterClient.doActions(this._mapId, [{ text: question1, parentId: issue.nodeId, style: PromptStyles.QuestionPrompt, image: IconsMap.magnifier }, { text: question2, parentId: issue.nodeId, style: PromptStyles.QuestionPrompt, image: IconsMap.magnifier }], [{ id: issue.nodeId, image: IconsMap['tick-enabled'] }]).then(function () {
            Alerts.closeLoadingWindow();
          });
        }
      }
    }
  }, {
    key: 'getAnswerNodes',
    value: function getAnswerNodes() {
      // green nodes with tick (either disabled or enabled) icon
      var answerNodesColor = Utils.hexToRgb(PromptStyles.AnswerItem.backgroundColor);
      var questionNodes = MindmapWrapper.getNodesByRGBBackgroundColor(answerNodesColor);
      questionNodes = questionNodes.filter(function (n) {
        return n.emojiIcon != null && (n.emojiIcon === IconsMap['tick-enabled'].mindmeisterName.replace(/:/g, '') || n.emojiIcon === IconsMap['tick-disabled'].mindmeisterName.replace(/:/g, ''));
      });
      return questionNodes;
    }
    /**
     * Mind map parsing
     */

  }, {
    key: 'parseVariables',
    value: function parseVariables() {
      this._variables = [];
      var questionModelNodes = this._mindmapParser.getNodesWithText(TemplateNodes.QUESTION_MODEL);
      if (questionModelNodes == null || questionModelNodes.length === 0) return; // todo
      var questionModelNode = questionModelNodes[0];
      var variablesNodes = questionModelNode.getChildrenWithText(TemplateNodes.VARIABLES);
      if (variablesNodes == null || variablesNodes.length === 0) return; // todo
      var variableNode = variablesNodes[0];
      var definedVariables = variableNode.children;
      var variables = [];
      definedVariables.forEach(function (v) {
        var variableName = v.text;
        var variableChildren = v.children;
        if (variableChildren == null || variableChildren.length === 0) return;
        var firstChild = variableChildren[0];
        variables.push({ name: variableName, value: firstChild.text });
      });
      this._variables = variables;
    }
  }, {
    key: 'parseStyle',
    value: function parseStyle() {
      this._style = null;
      var questionModelNodes = this._mindmapParser.getNodesWithText(TemplateNodes.QUESTION_MODEL);
      if (questionModelNodes == null || questionModelNodes.length === 0) return; // todo
      var questionModelNode = questionModelNodes[0];
      var styleNodes = questionModelNode.getChildrenWithText(TemplateNodes.STYLE);
      if (styleNodes == null || styleNodes.length === 0) return; // todo
      var styleNode = styleNodes[0];
      var styleNodeChildren = styleNode.children;
      if (styleNodeChildren == null || styleNodeChildren.length === 0) return; // todo
      this._style = styleNodeChildren[0].text;
    }
  }, {
    key: 'parseScopingAnalysis',
    value: function parseScopingAnalysis() {
      this.parseFirstLevelProblems();
    }
  }, {
    key: 'parseFirstLevelProblems',
    value: function parseFirstLevelProblems() {
      var that = this;
      var scopingAnalysisNodes = this._mindmapParser.getNodesWithText(TemplateNodes.SCOPING_ANALYSIS);
      if (scopingAnalysisNodes == null || scopingAnalysisNodes.length === 0) return; // todo
      var scopingAnalysisNode = scopingAnalysisNodes[0];
      var scopingAnalysisNodeChildren = scopingAnalysisNode.children;
      var problemPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.PROBLEM_STATEMENT);
      var problems = [];
      scopingAnalysisNodeChildren.forEach(function (c) {
        if (problemPromptRE.test(c.text)) {
          c.children.forEach(function (p) {
            var pro = new Problem(p.text, p.id);
            problems.push(pro);
            that.parseProblem(pro);
          });
        }
      });
      this._scopingAnalysis = problems;
    }
  }, {
    key: 'parseProblem',
    value: function parseProblem(problem) {
      var that = this;
      var node = this._mindmapParser.getNodeById(problem.nodeId);
      if (node == null) return;
      var problemNodeChildren = node.children;
      var subproblemsPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.PROBLEM_ANALYSIS);
      problemNodeChildren.forEach(function (c) {
        if (subproblemsPromptRE.test(c.text)) {
          c.children.forEach(function (p) {
            var subP = new Problem(p.text, p.id, problem);
            problem.addSubproblem(subP);
            that.parseProblem(subP);
          });
        }
      });
      var consequencesPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.RELEVANCE_MAPPING);
      problemNodeChildren.forEach(function (c) {
        if (consequencesPromptRE.test(c.text)) {
          c.children.forEach(function (p) {
            var cons = new Consequence(p.text, p.id, problem);
            problem.addConsequence(cons);
            that.parseConsequence(cons);
          });
        }
      });
      var interventionsPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.SOLUTION_ANALYSIS);
      problemNodeChildren.forEach(function (c) {
        if (interventionsPromptRE.test(c.text)) {
          c.children.forEach(function (p) {
            var int = new Intervention(p.text, p.id, problem);
            problem.addIntervention(int);
            that.parseIntervention(int);
          });
        }
      });
    }
  }, {
    key: 'parseConsequence',
    value: function parseConsequence(consequence) {
      var that = this;
      var node = this._mindmapParser.getNodeById(consequence.nodeId);
      if (node == null) return;
      var consequenceNodeChildren = node.children;
      var interventionsPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.SOLUTION_ANALYSIS);
      consequenceNodeChildren.forEach(function (c) {
        if (interventionsPromptRE.test(c.text)) {
          c.children.forEach(function (p) {
            var int = new Intervention(p.text, p.id, consequence);
            consequence.addIntervention(int);
            that.parseIntervention(int);
          });
        }
      });
    }
  }, {
    key: 'parseIntervention',
    value: function parseIntervention(intervention) {
      var node = this._mindmapParser.getNodeById(intervention.nodeId);
      if (node == null) return;
      var interventionNodeChildren = node.children;
      var feasibilityReasonsPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.SOLUTION_FEASIBILITY);
      interventionNodeChildren.forEach(function (c) {
        if (feasibilityReasonsPromptRE.test(c.text)) {
          c.children.forEach(function (p) {
            intervention.addFeasibilityReason(p.text);
          });
        }
      });
      var effectivenessReasonsPromptRE = MindmapManager.createRegexpFromPrompt(ProcessQuestions.SOLUTION_EFFECTIVENESS);
      interventionNodeChildren.forEach(function (c) {
        if (effectivenessReasonsPromptRE.test(c.text)) {
          c.children.forEach(function (p) {
            intervention.addEffectivenessReason(p.text);
          });
        }
      });
    }
  }, {
    key: 'parseProcessMode',
    value: function parseProcessMode() {
      this._processModes.forEach(function (m) {
        if (m.mindmapNode == null) return;
        var icon = m.mindmapNode.emojiIcon;
        if (icon === IconsMap['tick-enabled'].mindmeisterName.replace(/:/g, '')) m.enabled = true;else m.enabled = false;
      });
    }
  }, {
    key: 'parseMap',
    value: function parseMap() {
      var that = this;
      return new Promise(function (resolve, reject) {
        MindmeisterClient.getMap(that._mapId).then(function (mapInfo) {
          that._mindmapParser = new MindmapContentParser(mapInfo);
          that.parseProcessMode();
          that.parseVariables();
          that.parseStyle();
          that.parseScopingAnalysis();
          resolve();
        });
      });
    }
    /**
     * Other functions
     */

  }, {
    key: 'findIssue',
    value: function findIssue(text, nodeId) {
      var id = nodeId > 0 ? nodeId : null;
      for (var i = 0; i < this._scopingAnalysis.length; i++) {
        var issue = this._scopingAnalysis[i].findIssue(text, id);
        if (issue != null) return issue;
      }
      return null;
    }
  }], [{
    key: 'extractQuestionItems',
    value: function extractQuestionItems(question) {
      var items = question.match(/<[^>]+>/g);
      if (items == null) return [];
      return items.map(function (it) {
        return it.replace(/</g, '').replace(/>/g, '').trim();
      });
    }
  }, {
    key: 'createRegexpFromPrompt',
    value: function createRegexpFromPrompt(text) {
      var questionPrompt = text.replace(/<[^>]+>/g, '.+').replace(/\?/g, '\?');
      var promptRegExp = new RegExp(questionPrompt, 'gi');
      return promptRegExp;
    }
  }]);
  return MindmapManager;
}();

module.exports = MindmapManager;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Locators = __webpack_require__(90);

var MindmapWrapper = function () {
  function MindmapWrapper() {
    (0, _classCallCheck3.default)(this, MindmapWrapper);
  }

  (0, _createClass3.default)(MindmapWrapper, null, [{
    key: 'getNodeById',
    value: function getNodeById(id) {
      var locator = Locators.MINDMAP_NODE_BY_ID.replace('$1', '"' + id + '"');
      var el = document.querySelector(locator);
      if (el == null) return null;
      return new MindmapNode(el);
    }
  }, {
    key: 'getNodesByText',
    value: function getNodesByText(text) {
      var locator = Locators.MINDMAP_NODES;
      var els = document.querySelectorAll(locator);
      var nodes = [];
      els.forEach(function (el) {
        var node = new MindmapNode(el);
        if (text === node.text) nodes.push(node);
      });
      return nodes;
    }
  }, {
    key: 'getNodesByTextRegexp',
    value: function getNodesByTextRegexp(regexp) {
      var locator = Locators.MINDMAP_NODES;
      var els = document.querySelectorAll(locator);
      var nodes = [];
      els.forEach(function (el) {
        var node = new MindmapNode(el);
        if (regexp.test(node.text)) nodes.push(node);
      });
      return nodes;
    }
  }, {
    key: 'getNodesByRGBBackgroundColor',
    value: function getNodesByRGBBackgroundColor(color) {
      // todo
      var colorString = 'rgb(' + color.r + ', ' + color.g + ', ' + color.b + ')';
      var locator = Locators.MINDMAP_NODES;
      var els = document.querySelectorAll(locator);
      var nodes = [];
      els.forEach(function (el) {
        var node = new MindmapNode(el);
        if (node.backgroundColor == null) return;
        if (node.backgroundColor.toLowerCase().replace(/\s/g, '').trim() === colorString.toLowerCase().replace(/\s/g, '').trim()) nodes.push(node);
      });
      return nodes;
    }
  }]);
  return MindmapWrapper;
}();

var MindmapNode = function () {
  function MindmapNode(el) {
    (0, _classCallCheck3.default)(this, MindmapNode);

    this._domElement = el;
  }

  (0, _createClass3.default)(MindmapNode, [{
    key: 'getIconElement',
    value: function getIconElement() {
      var locator = Locators.MINDMAP_NODE_ICON;
      var icon = this._domElement.querySelector(locator);
      return icon;
    }
  }, {
    key: 'text',
    get: function get() {
      return this._domElement.innerText.replace(/\n/g, ' ').trim();
    }
  }, {
    key: 'id',
    get: function get() {
      return this._domElement.getAttribute('data-id');
    }
  }, {
    key: 'emojiIcon',
    get: function get() {
      var locator = Locators.MINDMAP_NODE_ICON_EMOJI;
      var icon = this._domElement.querySelector(locator);
      if (icon == null) return null;
      var emoji = icon.getAttribute('aria-label');
      if (emoji == null) return null;
      var parts = emoji.split(',');
      if (parts.length < 2) return null;
      return parts[1].trim();
    }
  }, {
    key: 'element',
    get: function get() {
      return this._domElement;
    }
  }, {
    key: 'backgroundColor',
    get: function get() {
      return this._domElement.style.backgroundColor || null;
    }
  }, {
    key: 'children',
    get: function get() {}
  }]);
  return MindmapNode;
}();

module.exports = MindmapWrapper;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var TemplateNodes = {
  'VARIABLES': 'VARIABLES',
  'STYLE': 'STYLE',
  'QUESTION_MODEL': 'QUESTION MODEL',
  'PROCESS_MODE': 'PROCESS MODE',
  'SCOPING_ANALYSIS': 'SCOPING ANALYSIS',
  'PROBLEM_DEEPEN_MODE': 'PROBLEM DEEPEN',
  'RELEVANCE_MAPPING_MODE': 'RELEVANCE MAPPING',
  'SOLUTION_MAPPING_MODE': 'SOLUTION MAPPING'
};

module.exports = TemplateNodes;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MindmapContentParser = function () {
  function MindmapContentParser(mapInfo) {
    (0, _classCallCheck3.default)(this, MindmapContentParser);

    this._mapInfo = mapInfo;
  }

  (0, _createClass3.default)(MindmapContentParser, [{
    key: 'getNodeById',
    value: function getNodeById(nodeId) {
      var nodeEl = this._mapInfo.ideas.idea.find(function (i) {
        return i.id === nodeId;
      });
      if (nodeEl == null) return null;else return new MindmapContentParserNode(nodeEl, this);
    }
  }, {
    key: 'getNodesWithText',
    value: function getNodesWithText(text) {
      var _this = this;

      var nodeEls = this._mapInfo.ideas.idea.filter(function (i) {
        return i.title === text;
      });
      if (nodeEls == null) return [];else {
        return nodeEls.map(function (n) {
          return new MindmapContentParserNode(n, _this);
        });
      }
    }
  }, {
    key: 'getNodeChildren',
    value: function getNodeChildren(parentId) {
      var _this2 = this;

      var nodeEls = this._mapInfo.ideas.idea.filter(function (i) {
        return i.parent === parentId;
      });
      if (nodeEls == null) return [];else {
        return nodeEls.map(function (n) {
          return new MindmapContentParserNode(n, _this2);
        });
      }
    }
  }, {
    key: 'getNodeChildrenWithText',
    value: function getNodeChildrenWithText(parentId, text) {
      var _this3 = this;

      var nodeEls = this._mapInfo.ideas.idea.filter(function (i) {
        return i.parent === parentId && i.title === text;
      });
      if (nodeEls == null) return [];else {
        return nodeEls.map(function (n) {
          return new MindmapContentParserNode(n, _this3);
        });
      }
    }
  }]);
  return MindmapContentParser;
}();

var MindmapContentParserNode = function () {
  function MindmapContentParserNode(info, parser) {
    (0, _classCallCheck3.default)(this, MindmapContentParserNode);

    this._info = info;
    this._parser = parser;
  }

  (0, _createClass3.default)(MindmapContentParserNode, [{
    key: 'getChildrenWithText',
    value: function getChildrenWithText(text) {
      return this._parser.getNodeChildrenWithText(this.id, text);
    }
  }, {
    key: 'id',
    get: function get() {
      return this._info.id;
    }
  }, {
    key: 'text',
    get: function get() {
      return this._info.title.replace(/\n/g, ' ').trim();
    }
  }, {
    key: 'children',
    get: function get() {
      return this._parser.getNodeChildren(this.id);
    }
  }]);
  return MindmapContentParserNode;
}();

module.exports = MindmapContentParser;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ProcessQuestions = {
  'PROBLEM_STATEMENT': 'WHICH PROBLEMS MAY ARISE DURING <task> IN <practice> SETTING?',
  'PROBLEM_ANALYSIS': 'WHY DOES <problem> OCCUR DURING <task> IN <practice>?',
  'RELEVANCE_MAPPING': 'WHY IS <problem> RELEVANT FOR <task> IN <practice> SETTING?',
  'SOLUTION_ANALYSIS': 'HOW CAN <problem> BE ADDRESSED FOR <task> IN <practice> SETTING?',
  'SOLUTION_EFFECTIVENESS': 'HOW CAN <intervention> HELP TO <problem> FOR <task> IN <practice> SETTING?',
  'SOLUTION_FEASIBILITY': 'HOW CAN <intervention> BE IMPLEMENTED TO <problem> FOR <task> IN <practice> SETTING?'
};

module.exports = ProcessQuestions;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Consequence = function () {
  function Consequence(text, nodeId) {
    var problem = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    (0, _classCallCheck3.default)(this, Consequence);

    this._text = text;
    this._interventions = [];
    this._nodeId = nodeId;
    this._problem = problem;
  }

  (0, _createClass3.default)(Consequence, [{
    key: "addIntervention",
    value: function addIntervention(intervention) {
      this._interventions.push(intervention);
    }
  }, {
    key: "findIssue",
    value: function findIssue(text) {
      var nodeId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (nodeId != null && this._nodeId === nodeId) return this;else if (this._text === text) return this;
      for (var i = 0; i < this._interventions.length; i++) {
        var issue = this._interventions[i].findIssue(text, nodeId);
        if (issue != null) return issue;
      }
      return null;
    }
  }, {
    key: "text",
    get: function get() {
      return this._text;
    }
  }, {
    key: "problem",
    get: function get() {
      return this._problem;
    }
  }, {
    key: "nodeId",
    get: function get() {
      return this._nodeId;
    }
  }, {
    key: "interventions",
    get: function get() {
      return this._interventions;
    }
  }]);
  return Consequence;
}();

module.exports = Consequence;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Intervention = function () {
  function Intervention(text, nodeId) {
    var issue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    (0, _classCallCheck3.default)(this, Intervention);

    this._text = text;
    this._effectivenessReasons = [];
    this._feasibilityReasons = [];
    this._nodeId = nodeId;
    this._issue = issue;
  }

  (0, _createClass3.default)(Intervention, [{
    key: "addEffectivenessReason",
    value: function addEffectivenessReason(reason) {
      this._effectivenessReasons.push(reason);
    }
  }, {
    key: "addFeasibilityReason",
    value: function addFeasibilityReason(reason) {
      this._feasibilityReasons.push(reason);
    }
  }, {
    key: "findIssue",
    value: function findIssue(text) {
      var nodeId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (nodeId != null && this._nodeId === nodeId) return this;else if (this._text === text) return this;
      return null;
    }
  }, {
    key: "text",
    get: function get() {
      return this._text;
    }
  }, {
    key: "issue",
    get: function get() {
      return this._issue;
    }
  }, {
    key: "nodeId",
    get: function get() {
      return this._nodeId;
    }
  }, {
    key: "effectivenessReasons",
    get: function get() {
      return this._effectivenessReasons;
    }
  }, {
    key: "feasibilityReasons",
    get: function get() {
      return this._feasibilityReasons;
    }
  }]);
  return Intervention;
}();

module.exports = Intervention;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Problem = function () {
  function Problem(text, nodeId) {
    var parentProblem = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    (0, _classCallCheck3.default)(this, Problem);

    this._text = text;
    this._subproblems = [];
    this._consequences = [];
    this._nodeId = nodeId;
    this._parentProblem = parentProblem;
    this._interventions = [];
  }

  (0, _createClass3.default)(Problem, [{
    key: "addSubproblem",
    value: function addSubproblem(subproblem) {
      this._subproblems.push(subproblem);
    }
  }, {
    key: "addIntervention",
    value: function addIntervention(intervention) {
      this._interventions.push(intervention);
    }
  }, {
    key: "addConsequence",
    value: function addConsequence(consequence) {
      this._consequences.push(consequence);
    }
  }, {
    key: "findIssue",
    value: function findIssue(text) {
      var nodeId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (nodeId != null && this._nodeId === nodeId) return this;else if (this._text === text) return this;
      for (var i = 0; i < this._subproblems.length; i++) {
        var issue = this._subproblems[i].findIssue(text, nodeId);
        if (issue != null) return issue;
      }
      for (var _i = 0; _i < this._consequences.length; _i++) {
        var _issue = this._consequences[_i].findIssue(text, nodeId);
        if (_issue != null) return _issue;
      }
      for (var _i2 = 0; _i2 < this._interventions.length; _i2++) {
        var _issue2 = this._interventions[_i2].findIssue(text, nodeId);
        if (_issue2 != null) return _issue2;
      }
      return null;
    }
  }, {
    key: "text",
    get: function get() {
      return this._text;
    }
  }, {
    key: "parentProblem",
    get: function get() {
      return this._parentProblem;
    }
  }, {
    key: "nodeId",
    get: function get() {
      return this._nodeId;
    }
  }, {
    key: "subproblems",
    get: function get() {
      return this._subproblems;
    }
  }, {
    key: "consequences",
    get: function get() {
      return this._consequences;
    }
  }]);
  return Problem;
}();

module.exports = Problem;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var IconsMap = {
  'tick-enabled': {
    fileUrl: chrome.runtime.getURL('images/tickEnabled.png'),
    mindmeisterName: ':white_check_mark:'
  },
  'tick-disabled': {
    fileUrl: chrome.runtime.getURL('images/tickDisabled.png'),
    mindmeisterName: ':ballot_box_with_check:'
  },
  'magnifier': {
    fileUrl: chrome.runtime.getURL('images/magnifier.png'),
    mindmeisterName: ':mag:'
  }
};

module.exports = IconsMap;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MindmeisterClient = __webpack_require__(43);
var Alerts = __webpack_require__(44);
var Locators = __webpack_require__(90);
var Utils = __webpack_require__(30);

var HomePageManager = function () {
  function HomePageManager() {
    (0, _classCallCheck3.default)(this, HomePageManager);

    this._templates = {
      'chatin': 'resources/mindmapTemplates/RQScopingTemplate.mind'
      // nothing todo here
    };
  }

  (0, _createClass3.default)(HomePageManager, [{
    key: 'importTemplate',
    value: function importTemplate(template) {
      var that = this;
      Alerts.showLoadingWindow('Creating mind map from template...');
      MindmeisterClient.createMindmapFromTemplate(chrome.runtime.getURL(that._templates[template])).then(function (mapId) {
        Utils.sleep(2000).then(function () {
          MindmeisterClient.linkShare(mapId).then(function () {
            Alerts.closeLoadingWindow();
            window.location.href = 'https://www.mindmeister.com/map/' + mapId;
          });
        });
      }).catch(function (error) {
        Alerts.showErrorToast('There was an error while creating the mind map');
      });
    }
  }, {
    key: 'init',
    value: function init() {
      var that = this;
      var locator = Locators.NEW_MINDMAP_BUTTON;
      var target = document.querySelector(locator);
      if (target == null) {
        window.setTimeout(function () {
          that.init();
        }, 500);
        return;
      }

      that.insertTemplateButton();
      that.manageResize();
    }
  }, {
    key: 'insertTemplateButton',
    value: function insertTemplateButton() {
      var that = this;
      var locator = Locators.NEW_MINDMAP_BUTTON;
      var target = document.querySelector(locator);
      var observerFunc = function observerFunc() {
        var insertedTeplate = document.querySelector(Locators.CHATIN_MINDMAP_TEMPLATE);
        if (insertedTeplate != null) return;
        var chatinTemplateInsertionPoint = document.querySelector(Locators.TEMPLATE_BUTTON_INSERTION_POINT);
        if (chatinTemplateInsertionPoint == null) return;
        var templateElementToClone = document.querySelector(Locators.TEMPLATE_ELEMENT_TO_CLONE);
        var chatinTemplate = templateElementToClone.cloneNode(true);
        chatinTemplate.id = 'chatinTemplate';
        chatinTemplate.classList.add('chatinTemplate');
        chatinTemplate.querySelector(Locators.MINDMAP_TEMPLATE_NAME).innerText = 'Chatin';
        var templateImage = chatinTemplate.querySelector('svg');
        var templateImageContainer = templateImage.parentNode;
        templateImageContainer.removeChild(templateImage);
        var chatinTemplateImage = document.createElement('img');
        // todo --> move to css
        chatinTemplateImage.style.height = '44px';
        chatinTemplateImage.src = chrome.runtime.getURL('images/arturo.png');
        templateImageContainer.style.height = '';
        templateImageContainer.style.width = '';
        templateImageContainer.appendChild(chatinTemplateImage);
        chatinTemplate.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          that.importTemplate('chatin');
        }, false);
        chatinTemplateInsertionPoint.insertBefore(chatinTemplate, chatinTemplateInsertionPoint.children[1]);
      };
      var obs = new MutationObserver(function (mutations) {
        observerFunc();
      });
      if (target != null) {
        obs.observe(target, {
          attributes: true
        });
      }
      observerFunc();
    }
  }, {
    key: 'manageResize',
    value: function manageResize() {
      var sizeCheck = function sizeCheck() {
        var referenceTemplateSelector = Locators.NEW_MINDMAP_BUTTON;
        var referenceTemplate = document.querySelector(referenceTemplateSelector);
        if (referenceTemplate == null) return;
        var chatinTemplateLocator = Locators.CHATIN_MINDMAP_TEMPLATE;
        var templates = document.querySelectorAll(chatinTemplateLocator);
        templates.forEach(function (template) {
          template.style.width = referenceTemplate.style.width;
        });
      };
      window.setInterval(sizeCheck, 100);
    }
  }]);
  return HomePageManager;
}();

module.exports = HomePageManager;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWEzMzNjODYxYzRhNWNjMjVlZDQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL3V0aWxzL1V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wZXJmb3JtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL21pbmRtZWlzdGVyL01pbmRtZWlzdGVyQ2xpZW50LmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL3V0aWxzL0FsZXJ0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvY2hhdGdwdC9DaGF0R1BUQ2xpZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9jaGF0aW4vUHJvbXB0U3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9kaXN0L3N3ZWV0YWxlcnQyLmFsbC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9taW5kbWVpc3Rlci93cmFwcGVyL0xvY2F0b3JzLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2NvbnRlbnRfc2NyaXB0LmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2NoYXRpbi9NaW5kbWFwTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9taW5kbWVpc3Rlci93cmFwcGVyL01pbmRtYXBXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2NoYXRpbi9UZW1wbGF0ZU5vZGVzLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL21pbmRtZWlzdGVyL3dyYXBwZXIvTWluZG1hcENvbnRlbnRQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvY2hhdGluL1Byb2Nlc3NRdWVzdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvY2hhdGluL21vZGVsL0NvbnNlcXVlbmNlLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2NoYXRpbi9tb2RlbC9JbnRlcnZlbnRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvY2hhdGluL21vZGVsL1Byb2JsZW0uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvY2hhdGluL0ljb25zTWFwLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2NoYXRpbi9Ib21lUGFnZU1hbmFnZXIuanMiXSwibmFtZXMiOlsiVXRpbHMiLCJoZXgiLCJyZXN1bHQiLCJleGVjIiwiciIsInBhcnNlSW50IiwiZyIsImIiLCJtcyIsIlByb21pc2UiLCJzZXRUaW1lb3V0IiwicmVzb2x2ZSIsIm9wdHMiLCJyZXFPcHRpb25zIiwicmVtYWluaW5nQXR0ZW1wdHMiLCJhdHRlbXB0IiwidGhhdCIsInVybCIsIm1ldGhvZCIsImhlYWRlcnMiLCJpbmNsdWRlcyIsInBhcmFtcyIsImZvcm1Cb2R5IiwicHJvcGVydHkiLCJlbmNvZGVkS2V5IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZW5jb2RlZFZhbHVlIiwicHVzaCIsImpvaW4iLCJVUkxTZWFyY2hQYXJhbXMiLCJmZXRjaCIsInJlc3BvbnNlIiwib2siLCJpbnRlcnZhbCIsIk1hdGgiLCJwb3ciLCJzbGVlcCIsInBlcmZvcm1SZXF1ZXN0IiwicmVqZWN0IiwibWVzc2FnZSIsImNhdXNlIiwiY29kZSIsInN0YXR1cyIsInRleHQiLCJsaW5lQ2hhcnMiLCJuZXdUZXh0IiwicmVtYWluZGVyIiwic3Vic3RyaW5nIiwibmV4dEJsYW5rIiwiaW5kZXhPZiIsImxlbmd0aCIsIm1vZHVsZSIsImV4cG9ydHMiLCJNaW5kbWVpc3RlckNsaWVudCIsImFyZ3MiLCJjaHJvbWUiLCJydW50aW1lIiwic2VuZE1lc3NhZ2UiLCJzY29wZSIsImFjdGlvbiIsImVycm9yIiwibWFwSWQiLCJwcm9jZXNzSW5CYWNrZ3JvdW5kIiwidGVtcGxhdGVGaWxlVXJsIiwibm9kZUlkIiwiaWNvbiIsInBhcmVudElkIiwibmV3Tm9kZSIsIm5ld05vZGVzIiwibm9kZXMiLCJpbnNlcnRpb25zIiwidXBkYXRlcyIsImRlbGV0aW9ucyIsIlN3YWwiLCJyZXF1aXJlIiwiQWxlcnRzIiwiZmlyZSIsImh0bWwiLCJkZXN0cm95RnVuYyIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsImRpZERlc3Ryb3kiLCJjb250ZW50Iiwid2lkdGgiLCJjb25maXJtQnV0dG9uVGV4dCIsInRpdGxlIiwic2hvd0NhbmNlbEJ1dHRvbiIsIm9uQmVmb3JlT3BlbiIsInNob3dMb2FkaW5nIiwiaGlkZUxvYWRpbmciLCJjbG9zZSIsImNoYXRHUFRDbGllbnQiLCJxdWVzdGlvbiIsImtleSIsImFwaUtleSIsIm1vZGUiLCJQcm9tcHRTdHlsZXMiLCJRdWVzdGlvblByb21wdCIsImxpbmVfcG9zaXRpb24iLCJBbnN3ZXJJdGVtIiwiUXVlc3Rpb25Qcm9tcHRBUEkiLCJBbnN3ZXJJdGVtQVBJIiwiTWluZG1laXN0ZXJMb2NhdG9ycyIsIkNoYXRHUFRDbGllbnQiLCJNaW5kbWFwTWFuYWdlciIsIkhvbWVQYWdlTWFuYWdlciIsIkNvbnRlbnRTY3JpcHQiLCJfbWluZG1hcE1hbmFnZXIiLCJfaG9tZXBhZ2VNYW5hZ2VyIiwiaG9tZXBhZ2VVcmxQYXR0ZXJuIiwibWluZG1hcFVybFBhdHRlcm4iLCJ0ZXN0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiaW5pdCIsImNoZWNrVG9rZW4iLCJ0aGVuIiwiaW5pdFVybE1hbmFnZXIiLCJzaG93RXJyb3JUb2FzdCIsImNzIiwiTWluZG1hcFdyYXBwZXIiLCJUZW1wbGF0ZU5vZGVzIiwiTWluZG1hcENvbnRlbnRQYXJzZXIiLCJQcm9jZXNzUXVlc3Rpb25zIiwiQ29uc2VxdWVuY2UiLCJJbnRlcnZlbnRpb24iLCJQcm9ibGVtIiwiSWNvbnNNYXAiLCJfbWFwSWQiLCJfcHJvY2Vzc01vZGVzIiwibmFtZSIsInRlbXBsYXRlTm9kZVRleHQiLCJQUk9CTEVNX0RFRVBFTl9NT0RFIiwibWluZG1hcE5vZGUiLCJvbkVuYWJsZSIsImVuYWJsZVByb2JsZW1EZWVwZW4iLCJlbmFibGVkIiwiUkVMRVZBTkNFX01BUFBJTkdfTU9ERSIsImVuYWJsZVJlbGV2YW5jZU1hcHBpbmciLCJTT0xVVElPTl9NQVBQSU5HX01PREUiLCJlbmFibGVTb2x1dGlvbk1hcHBpbmciLCJfc3R5bGUiLCJfdmFyaWFibGVzIiwiX3Njb3BpbmdBbmFseXNpcyIsIl9taW5kbWFwUGFyc2VyIiwidXJsUmVnZXhwIiwibSIsIm1hdGNoIiwibm9kZSIsImdldE5vZGVCeUlkIiwiaXNDaGF0aW5NYXAiLCJzaG93TG9hZGluZ1dpbmRvdyIsImNsb3NlTG9hZGluZ1dpbmRvdyIsImluaXRDaGFuZ2VNYW5hZ2VyIiwiZm91bmQiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImsiLCJnZXROb2Rlc0J5VGV4dCIsInJvb3ROb2RlIiwicGFyZW50IiwiZWxlbWVudCIsInBhcmVudE5vZGUiLCJvYnMiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwiZmluZCIsImFkZGVkTm9kZXMiLCJBcnJheSIsImZyb20iLCJtYXBOb2RlcyIsIm4iLCJoYXNBdHRyaWJ1dGVzIiwiYWRkTW9kZU1hbmFnZXIiLCJhZGRBbnN3ZXJDbGlja01hbmFnZXIiLCJhZGRRdWVzdGlvbkNsaWNrTWFuYWdlciIsImNvbmZpZyIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJvYnNlcnZlIiwicHJvY2Vzc01vZGVOb2RlcyIsIlBST0NFU1NfTU9ERSIsIm1vZGVOb2RlcyIsIm1vZGVOb2RlIiwiY2xhc3NMaXN0IiwiaWNvbkVsIiwiZ2V0SWNvbkVsZW1lbnQiLCJjb250YWlucyIsImFkZCIsInN0eWxlIiwicmVtb3ZlUHJvcGVydHkiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwib25DbGlja01vZGUiLCJpZCIsImltYWdlIiwicGFyc2VNYXAiLCJtYXBJbmZvIiwic2NvcGluZ0FuYWx5c2lzTm9kZXMiLCJnZXROb2Rlc1dpdGhUZXh0IiwiU0NPUElOR19BTkFMWVNJUyIsInNjb3BpbmdBbmFseXNpc05vZGUiLCJQUk9CTEVNX1NUQVRFTUVOVCIsIml0ZW1zIiwiZXh0cmFjdFF1ZXN0aW9uSXRlbXMiLCJpIiwidiIsInZhcmlhYmxlIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwidmFsdWUiLCJtaXNzaW5nSXRlbXMiLCJtb2RlQ2hhbmdlcyIsIm1vZGVFbmFibGVDaGFuZ2VzIiwiZG9BY3Rpb25zIiwibWFnbmlmaWVyIiwicXVlc3Rpb25Ob2RlcyIsImdldFF1ZXN0aW9uTm9kZXMiLCJpY29uRWxlbWVudCIsInBlcmZvcm1RdWVzdGlvbiIsInF1ZXN0aW9uUmVnRXhwIiwiZ2V0Tm9kZXNCeVRleHRSZWdleHAiLCJjb25jZXB0cyIsInBhcnNlQ2hhdEdQVEFuc3dlciIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJjIiwibGFiZWwiLCJub3RlIiwiZGVzY3JpcHRpb24iLCJhZGROb2RlcyIsImNhdGNoIiwiYW5zd2VyIiwicGF0dGVybiIsInJlc3VsdE5ldyIsInJlZ2V4cCIsIlJlZ0V4cCIsInBhcnRzIiwic3BsaXQiLCJpbmQiLCJ3aG9sZSIsInRyaW0iLCJhbnN3ZXJOb2RlcyIsImdldEFuc3dlck5vZGVzIiwib25DbGlja0Fuc3dlciIsInVpTm9kZSIsImlzc3VlIiwiZmluZElzc3VlIiwiZW5hYmxlZE1vZGUiLCJvbkNsaWNrQW5zd2VyUHJvYmxlbURlZXBlbiIsIm9uQ2xpY2tBbnN3ZXJSZWxldmFuY2VNYXBwaW5nIiwib25DbGlja0Fuc3dlclNvbHV0aW9uTWFwcGluZyIsIlBST0JMRU1fQU5BTFlTSVMiLCJSRUxFVkFOQ0VfTUFQUElORyIsIlNPTFVUSU9OX0FOQUxZU0lTIiwicXVlc3Rpb24xIiwiU09MVVRJT05fRUZGRUNUSVZFTkVTUyIsInF1ZXN0aW9uMiIsIlNPTFVUSU9OX0ZFQVNJQklMSVRZIiwibWlzc2luZ0l0ZW1zMiIsImFuc3dlck5vZGVzQ29sb3IiLCJoZXhUb1JnYiIsImJhY2tncm91bmRDb2xvciIsImdldE5vZGVzQnlSR0JCYWNrZ3JvdW5kQ29sb3IiLCJmaWx0ZXIiLCJlbW9qaUljb24iLCJtaW5kbWVpc3Rlck5hbWUiLCJxdWVzdGlvbk1vZGVsTm9kZXMiLCJRVUVTVElPTl9NT0RFTCIsInF1ZXN0aW9uTW9kZWxOb2RlIiwidmFyaWFibGVzTm9kZXMiLCJnZXRDaGlsZHJlbldpdGhUZXh0IiwiVkFSSUFCTEVTIiwidmFyaWFibGVOb2RlIiwiZGVmaW5lZFZhcmlhYmxlcyIsImNoaWxkcmVuIiwidmFyaWFibGVzIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGVDaGlsZHJlbiIsImZpcnN0Q2hpbGQiLCJzdHlsZU5vZGVzIiwiU1RZTEUiLCJzdHlsZU5vZGUiLCJzdHlsZU5vZGVDaGlsZHJlbiIsInBhcnNlRmlyc3RMZXZlbFByb2JsZW1zIiwic2NvcGluZ0FuYWx5c2lzTm9kZUNoaWxkcmVuIiwicHJvYmxlbVByb21wdFJFIiwiY3JlYXRlUmVnZXhwRnJvbVByb21wdCIsInByb2JsZW1zIiwicCIsInBybyIsInBhcnNlUHJvYmxlbSIsInByb2JsZW0iLCJwcm9ibGVtTm9kZUNoaWxkcmVuIiwic3VicHJvYmxlbXNQcm9tcHRSRSIsInN1YlAiLCJhZGRTdWJwcm9ibGVtIiwiY29uc2VxdWVuY2VzUHJvbXB0UkUiLCJjb25zIiwiYWRkQ29uc2VxdWVuY2UiLCJwYXJzZUNvbnNlcXVlbmNlIiwiaW50ZXJ2ZW50aW9uc1Byb21wdFJFIiwiaW50IiwiYWRkSW50ZXJ2ZW50aW9uIiwicGFyc2VJbnRlcnZlbnRpb24iLCJjb25zZXF1ZW5jZSIsImNvbnNlcXVlbmNlTm9kZUNoaWxkcmVuIiwiaW50ZXJ2ZW50aW9uIiwiaW50ZXJ2ZW50aW9uTm9kZUNoaWxkcmVuIiwiZmVhc2liaWxpdHlSZWFzb25zUHJvbXB0UkUiLCJhZGRGZWFzaWJpbGl0eVJlYXNvbiIsImVmZmVjdGl2ZW5lc3NSZWFzb25zUHJvbXB0UkUiLCJhZGRFZmZlY3RpdmVuZXNzUmVhc29uIiwiZ2V0TWFwIiwicGFyc2VQcm9jZXNzTW9kZSIsInBhcnNlVmFyaWFibGVzIiwicGFyc2VTdHlsZSIsInBhcnNlU2NvcGluZ0FuYWx5c2lzIiwiaXQiLCJxdWVzdGlvblByb21wdCIsInByb21wdFJlZ0V4cCIsIkxvY2F0b3JzIiwibG9jYXRvciIsIk1JTkRNQVBfTk9ERV9CWV9JRCIsImVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiTWluZG1hcE5vZGUiLCJNSU5ETUFQX05PREVTIiwiZWxzIiwicXVlcnlTZWxlY3RvckFsbCIsImNvbG9yIiwiY29sb3JTdHJpbmciLCJfZG9tRWxlbWVudCIsIk1JTkRNQVBfTk9ERV9JQ09OIiwiaW5uZXJUZXh0IiwiZ2V0QXR0cmlidXRlIiwiTUlORE1BUF9OT0RFX0lDT05fRU1PSkkiLCJlbW9qaSIsIl9tYXBJbmZvIiwibm9kZUVsIiwiaWRlYXMiLCJpZGVhIiwiTWluZG1hcENvbnRlbnRQYXJzZXJOb2RlIiwibm9kZUVscyIsImluZm8iLCJwYXJzZXIiLCJfaW5mbyIsIl9wYXJzZXIiLCJnZXROb2RlQ2hpbGRyZW5XaXRoVGV4dCIsImdldE5vZGVDaGlsZHJlbiIsIl90ZXh0IiwiX2ludGVydmVudGlvbnMiLCJfbm9kZUlkIiwiX3Byb2JsZW0iLCJfZWZmZWN0aXZlbmVzc1JlYXNvbnMiLCJfZmVhc2liaWxpdHlSZWFzb25zIiwiX2lzc3VlIiwicmVhc29uIiwicGFyZW50UHJvYmxlbSIsIl9zdWJwcm9ibGVtcyIsIl9jb25zZXF1ZW5jZXMiLCJfcGFyZW50UHJvYmxlbSIsInN1YnByb2JsZW0iLCJmaWxlVXJsIiwiZ2V0VVJMIiwiX3RlbXBsYXRlcyIsInRlbXBsYXRlIiwiY3JlYXRlTWluZG1hcEZyb21UZW1wbGF0ZSIsImxpbmtTaGFyZSIsIk5FV19NSU5ETUFQX0JVVFRPTiIsInRhcmdldCIsImluc2VydFRlbXBsYXRlQnV0dG9uIiwibWFuYWdlUmVzaXplIiwib2JzZXJ2ZXJGdW5jIiwiaW5zZXJ0ZWRUZXBsYXRlIiwiQ0hBVElOX01JTkRNQVBfVEVNUExBVEUiLCJjaGF0aW5UZW1wbGF0ZUluc2VydGlvblBvaW50IiwiVEVNUExBVEVfQlVUVE9OX0lOU0VSVElPTl9QT0lOVCIsInRlbXBsYXRlRWxlbWVudFRvQ2xvbmUiLCJURU1QTEFURV9FTEVNRU5UX1RPX0NMT05FIiwiY2hhdGluVGVtcGxhdGUiLCJjbG9uZU5vZGUiLCJNSU5ETUFQX1RFTVBMQVRFX05BTUUiLCJ0ZW1wbGF0ZUltYWdlIiwidGVtcGxhdGVJbWFnZUNvbnRhaW5lciIsInJlbW92ZUNoaWxkIiwiY2hhdGluVGVtcGxhdGVJbWFnZSIsImNyZWF0ZUVsZW1lbnQiLCJoZWlnaHQiLCJzcmMiLCJhcHBlbmRDaGlsZCIsImltcG9ydFRlbXBsYXRlIiwiaW5zZXJ0QmVmb3JlIiwiYXR0cmlidXRlcyIsInNpemVDaGVjayIsInJlZmVyZW5jZVRlbXBsYXRlU2VsZWN0b3IiLCJyZWZlcmVuY2VUZW1wbGF0ZSIsImNoYXRpblRlbXBsYXRlTG9jYXRvciIsInRlbXBsYXRlcyIsInNldEludGVydmFsIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qzs7Ozs7OztBQ0x6QyxZQUFZLG1CQUFPLENBQUMsRUFBVztBQUMvQixVQUFVLG1CQUFPLENBQUMsRUFBUTtBQUMxQixhQUFhLG1CQUFPLENBQUMsQ0FBVztBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNWYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUNSYTs7QUFFYjs7QUFFQSxzQkFBc0IsbUJBQU8sQ0FBQyxFQUFtQzs7QUFFakU7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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QTs7QUFFQSxtQkFBbUIsZ0JBQWdCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsS0FBSztBQUNMLGtDQUFrQztBQUNsQyxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QyxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxxQkFB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QUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpR0FBaUc7QUFDakc7QUFDQSxPQUFPOztBQUVQO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8seUJBQXlCOztBQUVoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMLHlDQUF5QztBQUN6Qzs7QUFFQTtBQUNBLG1DQUFtQzs7QUFFbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixtQkFBbUI7QUFDeEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSw2REFBNkQsS0FBSztBQUNsRSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHdEQUF3RCxNQUFNLFFBQVEsS0FBSztBQUMzRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjs7O0FBR0E7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLHdDQUF3Qzs7QUFFeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQzs7QUFFM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7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QjtBQUNEOzs7bUNBRWU7QUFDZCxVQUFJcUIsWUFBWSxTQUFaQSxTQUFZLEdBQU07QUFDcEIsWUFBSUMsNEJBQTRCM0UsU0FBU2lELGtCQUF6QztBQUNBLFlBQUkyQixvQkFBb0J4RSxTQUFTQyxhQUFULENBQXVCc0UseUJBQXZCLENBQXhCO0FBQ0EsWUFBSUMscUJBQXFCLElBQXpCLEVBQStCO0FBQy9CLFlBQUlDLHdCQUF3QjdFLFNBQVN1RCx1QkFBckM7QUFDQSxZQUFJdUIsWUFBWTFFLFNBQVNLLGdCQUFULENBQTBCb0UscUJBQTFCLENBQWhCO0FBQ0FDLGtCQUFVdFAsT0FBVixDQUFrQixVQUFDc04sUUFBRCxFQUFjO0FBQzlCQSxtQkFBU3JMLEtBQVQsQ0FBZTVHLEtBQWYsR0FBdUIrVCxrQkFBa0JuTixLQUFsQixDQUF3QjVHLEtBQS9DO0FBQ0QsU0FGRDtBQUdELE9BVEQ7QUFVQTZCLGFBQU9xUyxXQUFQLENBQW1CTCxTQUFuQixFQUE4QixHQUE5QjtBQUNEOzs7OztBQUdIOVYsT0FBT0MsT0FBUCxHQUFpQnNELGVBQWpCLEMiLCJmaWxlIjoiY29udGVudF9zY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDVhMzMzYzg2MWM0YTVjYzI1ZWQ0IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS4xJyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBrZXkgaW4gZXhwb3J0cykgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0Jztcbi8vIDI1LjQuMS41IE5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xuXG5mdW5jdGlvbiBQcm9taXNlQ2FwYWJpbGl0eShDKSB7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uICgkJHJlc29sdmUsICQkcmVqZWN0KSB7XG4gICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiAoQykge1xuICByZXR1cm4gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpIHtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7IGRlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsImNsYXNzIFV0aWxzIHtcbiAgc3RhdGljIGhleFRvUmdiIChoZXgpIHtcbiAgICB2YXIgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleClcbiAgICByZXR1cm4gcmVzdWx0ID8ge1xuICAgICAgcjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXG4gICAgICBnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcbiAgICAgIGI6IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpXG4gICAgfSA6IG51bGxcbiAgfVxuICBzdGF0aWMgc2xlZXAgKG1zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpXG4gIH1cbiAgc3RhdGljIGFzeW5jIHBlcmZvcm1SZXF1ZXN0IChvcHRzLCByZXFPcHRpb25zID0ge3JlbWFpbmluZ0F0dGVtcHRzOiA0LCBhdHRlbXB0OiAwfSkge1xuICAgIGxldCB0aGF0ID0gdGhpc1xuICAgIGxldCB1cmwgPSBvcHRzLnVybFxuICAgIGxldCByID0ge1xuICAgICAgbWV0aG9kOiBvcHRzLm1ldGhvZCB8fCAnR0VUJyxcbiAgICAgIGhlYWRlcnM6IG9wdHMuaGVhZGVycyB8fCB7fVxuICAgIH1cbiAgICBzd2l0Y2ggKG9wdHMubWV0aG9kKSB7XG4gICAgICBjYXNlICdQT1NUJzpcbiAgICAgICAgLy8gdG9kbyBjb25zaWRlciBkaWZmZXJlbnQgY29udGVudC10eXBlc1xuICAgICAgICBpZiAoci5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9PSBudWxsIHx8IHIuaGVhZGVyc1snQ29udGVudC1UeXBlJ10uaW5jbHVkZXMoJ2FwcGxpY2F0aW9uL2pzb24nKSkge1xuICAgICAgICAgIHJbJ2JvZHknXSA9IG9wdHMucGFyYW1zXG4gICAgICAgIH0gZWxzZSBpZiAoci5oZWFkZXJzWydDb250ZW50LVR5cGUnXS5pbmNsdWRlcygnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJykpe1xuICAgICAgICAgIGxldCBmb3JtQm9keSA9IFtdXG4gICAgICAgICAgZm9yIChsZXQgcHJvcGVydHkgaW4gb3B0cy5wYXJhbXMpIHtcbiAgICAgICAgICAgIGxldCBlbmNvZGVkS2V5ID0gZW5jb2RlVVJJQ29tcG9uZW50KHByb3BlcnR5KVxuICAgICAgICAgICAgbGV0IGVuY29kZWRWYWx1ZSA9IGVuY29kZVVSSUNvbXBvbmVudChvcHRzLnBhcmFtc1twcm9wZXJ0eV0pXG4gICAgICAgICAgICBmb3JtQm9keS5wdXNoKGVuY29kZWRLZXkgKyAnPScgKyBlbmNvZGVkVmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICAgIGZvcm1Cb2R5ID0gZm9ybUJvZHkuam9pbignJicpXG4gICAgICAgICAgclsnYm9keSddID0gZm9ybUJvZHlcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnR0VUJzpcbiAgICAgICAgdXJsICs9ICc/JyArIG5ldyBVUkxTZWFyY2hQYXJhbXMob3B0cy5wYXJhbXMpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdERUxFVEUnOlxuICAgICAgICAvLyBETyBOT1RISU5HXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdQQVRDSCc6XG4gICAgICAgIHJbJ2JvZHknXSA9IG9wdHMucGFyYW1zXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdQVVQnOlxuICAgICAgICAvLyB0b2RvXG4gICAgICAgIGJyZWFrXG4gICAgfVxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgcilcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIHJldHVybiByZXNwb25zZVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjaGVjayBlcnJvclxuICAgICAgLy8gaWYgdGltZW91dCBlcnJvciAtLT4gcmV0cnlcbiAgICAgIGlmIChyZXFPcHRpb25zLnJlbWFpbmluZ0F0dGVtcHRzID4gMCkge1xuICAgICAgICBsZXQgaW50ZXJ2YWwgPSA1MDAgKiBNYXRoLnBvdygyLCByZXFPcHRpb25zLmF0dGVtcHQpIC8vIG1ha2UgY29uZmlndXJhYmxlXG4gICAgICAgIGF3YWl0IHRoYXQuc2xlZXAoaW50ZXJ2YWwpXG4gICAgICAgIHJlcU9wdGlvbnMucmVtYWluaW5nQXR0ZW1wdHMtLVxuICAgICAgICByZXFPcHRpb25zLmF0dGVtcHQrK1xuICAgICAgICByZXR1cm4gdGhhdC5wZXJmb3JtUmVxdWVzdChvcHRzLCByZXFPcHRpb25zKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHttZXNzYWdlOiAnUmVxdWVzdCBlcnJvcicsIGNhdXNlOiB7Y29kZTogcmVzcG9uc2Uuc3RhdHVzfSwgcmVzcG9uc2U6IHJlc3BvbnNlfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgcHJldHRpZnlOb2RlVGV4dCAodGV4dCkge1xuICAgIGNvbnN0IGxpbmVDaGFycyA9IDIwXG4gICAgbGV0IG5ld1RleHQgPSAnJ1xuICAgIGxldCByZW1haW5kZXIgPSB0ZXh0XG4gICAgZG8ge1xuICAgICAgbmV3VGV4dCA9IG5ld1RleHQgKyByZW1haW5kZXIuc3Vic3RyaW5nKDAsIGxpbmVDaGFycy0xKVxuICAgICAgcmVtYWluZGVyID0gcmVtYWluZGVyLnN1YnN0cmluZyhsaW5lQ2hhcnMgLSAxKVxuICAgICAgbGV0IG5leHRCbGFuayA9IHJlbWFpbmRlci5pbmRleE9mKCcgJylcbiAgICAgIGlmIChuZXh0QmxhbmsgPT0gLTEpe1xuICAgICAgICBuZXdUZXh0ICs9IHJlbWFpbmRlclxuICAgICAgICByZW1haW5kZXIgPSAnJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3VGV4dCArPSByZW1haW5kZXIuc3Vic3RyaW5nKDAsIG5leHRCbGFuaykgKyAnXFxuJ1xuICAgICAgICByZW1haW5kZXIgPSByZW1haW5kZXIuc3Vic3RyaW5nKG5leHRCbGFuayArIDEpXG4gICAgICB9XG4gICAgfSB3aGlsZSAocmVtYWluZGVyLmxlbmd0aCA+IDApXG4gICAgcmV0dXJuIG5ld1RleHRcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFV0aWxzXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc2NyaXB0cy91dGlscy9VdGlscy5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIEQpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaW52b2tlID0gcmVxdWlyZSgnLi9faW52b2tlJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4vX2h0bWwnKTtcbnZhciBjZWwgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHNldFRhc2sgPSBnbG9iYWwuc2V0SW1tZWRpYXRlO1xudmFyIGNsZWFyVGFzayA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZTtcbnZhciBNZXNzYWdlQ2hhbm5lbCA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbDtcbnZhciBEaXNwYXRjaCA9IGdsb2JhbC5EaXNwYXRjaDtcbnZhciBjb3VudGVyID0gMDtcbnZhciBxdWV1ZSA9IHt9O1xudmFyIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xudmFyIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgaWYgKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYgKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spIHtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbikge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgdmFyIGkgPSAxO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpIHtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYgKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gU3BoZXJlIChKUyBnYW1lIGVuZ2luZSkgRGlzcGF0Y2ggQVBJXG4gIH0gZWxzZSBpZiAoRGlzcGF0Y2ggJiYgRGlzcGF0Y2gubm93KSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIERpc3BhdGNoLm5vdyhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmIChNZXNzYWdlQ2hhbm5lbCkge1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBwb3J0ID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmIChPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSkge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHsgZTogZmFsc2UsIHY6IGV4ZWMoKSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHsgZTogdHJ1ZSwgdjogZSB9O1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3BlcmZvcm0uanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQywgeCkge1xuICBhbk9iamVjdChDKTtcbiAgaWYgKGlzT2JqZWN0KHgpICYmIHguY29uc3RydWN0b3IgPT09IEMpIHJldHVybiB4O1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKEMpO1xuICB2YXIgcmVzb2x2ZSA9IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmU7XG4gIHJlc29sdmUoeCk7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9taXNlLXJlc29sdmUuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiXG5jbGFzcyBNaW5kbWVpc3RlckNsaWVudCB7XG4gIHN0YXRpYyBwcm9jZXNzSW5CYWNrZ3JvdW5kIChtZXRob2QsIGFyZ3MpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe3Njb3BlOiAnbWluZG1laXN0ZXJDbGllbnQnLCBhY3Rpb246ICdwcm9jZXNzSW5CYWNrZ3JvdW5kJywgbWV0aG9kOiBtZXRob2QsIGFyZ3M6IGFyZ3N9LCAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3BvbnNlICE9IG51bGwpIHJlc29sdmUocmVzcG9uc2UucmVzcG9uc2UpXG4gICAgICAgIGVsc2UgaWYgKHJlc3BvbnNlLmVycm9yICE9IG51bGwpIHJlamVjdChyZXNwb25zZS5lcnJvcilcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICBzdGF0aWMgYXV0aG9yaXplICgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe3Njb3BlOiAnbWluZG1laXN0ZXJDbGllbnQnLCBhY3Rpb246ICdhdXRob3JpemUnfSwgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5yZXNwb25zZSAhPSBudWxsKSByZXNvbHZlKHJlc3BvbnNlLnJlc3BvbnNlKVxuICAgICAgICBlbHNlIGlmIChyZXNwb25zZS5lcnJvciAhPSBudWxsKSByZWplY3QocmVzcG9uc2UuZXJyb3IpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgc3RhdGljIGNoZWNrVG9rZW4gKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7c2NvcGU6ICdtaW5kbWVpc3RlckNsaWVudCcsIGFjdGlvbjogJ2NoZWNrVG9rZW4nfSwgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5yZXNwb25zZSAhPSBudWxsKSByZXNvbHZlKHJlc3BvbnNlLnJlc3BvbnNlKVxuICAgICAgICBlbHNlIGlmIChyZXNwb25zZS5lcnJvciAhPSBudWxsKSByZWplY3QocmVzcG9uc2UuZXJyb3IpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgc3RhdGljIGdldE1hcCAobWFwSWQpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzSW5CYWNrZ3JvdW5kKCdnZXRNYXAnLCB7bWFwSWQ6IG1hcElkfSlcbiAgfVxuICBzdGF0aWMgY3JlYXRlTWluZG1hcEZyb21UZW1wbGF0ZSAodGVtcGxhdGVGaWxlVXJsKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2Vzc0luQmFja2dyb3VuZCgnY3JlYXRlTWluZG1hcEZyb21UZW1wbGF0ZScsIHt0ZW1wbGF0ZUZpbGVVcmw6IHRlbXBsYXRlRmlsZVVybH0pXG4gIH1cblxuICBzdGF0aWMgZ2V0QmVsb25naW5nTWFwIChub2RlSWQpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzSW5CYWNrZ3JvdW5kKCdnZXRCZWxvbmdpbmdNYXAnLCB7bm9kZUlkOiBub2RlSWR9KVxuICB9XG5cbiAgc3RhdGljIGNoYW5nZU5vZGVJY29uIChtYXBJZCwgbm9kZUlkLCBpY29uKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2Vzc0luQmFja2dyb3VuZCgnY2hhbmdlTm9kZUljb24nLCB7bWFwSWQ6IG1hcElkLCBub2RlSWQ6IG5vZGVJZCwgaWNvbjogaWNvbn0pXG4gIH1cblxuICBzdGF0aWMgYWRkTm9kZSAobWFwSWQsIHBhcmVudElkLCBuZXdOb2RlKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2Vzc0luQmFja2dyb3VuZCgnYWRkTm9kZScsIHttYXBJZDogbWFwSWQsIHBhcmVudElkOiBwYXJlbnRJZCwgbmV3Tm9kZTogbmV3Tm9kZX0pXG4gIH1cblxuICBzdGF0aWMgYWRkTm9kZXMgKG1hcElkLCBuZXdOb2Rlcykge1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3NJbkJhY2tncm91bmQoJ2FkZE5vZGVzJywge21hcElkOiBtYXBJZCwgbmV3Tm9kZXM6IG5ld05vZGVzfSlcbiAgfVxuXG4gIHN0YXRpYyBtb2RpZnlOb2RlcyAobWFwSWQsIG5vZGVzKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2Vzc0luQmFja2dyb3VuZCgnbW9kaWZ5Tm9kZXMnLCB7bWFwSWQ6IG1hcElkLCBub2Rlczogbm9kZXN9KVxuICB9XG4gIHN0YXRpYyBkb0FjdGlvbnMgKG1hcElkLCBpbnNlcnRpb25zLCB1cGRhdGVzLCBkZWxldGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzSW5CYWNrZ3JvdW5kKCdkb0FjdGlvbnMnLCB7bWFwSWQ6IG1hcElkLCBpbnNlcnRpb25zOiBpbnNlcnRpb25zLCB1cGRhdGVzOiB1cGRhdGVzLCBkZWxldGlvbnM6IGRlbGV0aW9uc30pXG4gIH1cbiAgc3RhdGljIGxpbmtTaGFyZSAobWFwSWQpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzSW5CYWNrZ3JvdW5kKCdsaW5rU2hhcmUnLCB7bWFwSWQ6IG1hcElkfSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1pbmRtZWlzdGVyQ2xpZW50XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc2NyaXB0cy9taW5kbWVpc3Rlci9NaW5kbWVpc3RlckNsaWVudC5qcyIsIlxuY29uc3QgU3dhbCA9IHJlcXVpcmUoJ3N3ZWV0YWxlcnQyJylcblxuY2xhc3MgQWxlcnRzIHtcbiAgc3RhdGljIHNob3dFcnJvcldpbmRvdyAobWVzc2FnZSkge1xuICAgIFN3YWwuZmlyZSh7XG4gICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgaHRtbDogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgc2hvd0Vycm9yVG9hc3QgKG1lc3NhZ2UsIGRlc3Ryb3lGdW5jKSB7XG4gICAgU3dhbC5maXJlKHtcbiAgICAgIGljb246ICdlcnJvcicsXG4gICAgICB0ZXh0OiBtZXNzYWdlLFxuICAgICAgdG9hc3Q6IHRydWUsXG4gICAgICBwb3NpdGlvbjogJ2JvdHRvbS1lbmQnLFxuICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxuICAgICAgZGlkRGVzdHJveTogZGVzdHJveUZ1bmNcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIHNob3dXYXJuaW5nV2luZG93IChtZXNzYWdlKSB7XG4gICAgU3dhbC5maXJlKHtcbiAgICAgIGljb246ICd3YXJuaW5nJyxcbiAgICAgIGh0bWw6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIHNob3dUb2FzdCAoY29udGVudCkge1xuICAgIFN3YWwuZmlyZSh7XG4gICAgICBpY29uOiAnd2FybmluZycsXG4gICAgICB0b2FzdDogdHJ1ZSxcbiAgICAgIGh0bWw6IGNvbnRlbnQsXG4gICAgICB3aWR0aDogJzUwMHB4JyxcbiAgICAgIHBvc2l0aW9uOiAnYm90dG9tLWVuZCcsXG4gICAgICBjb25maXJtQnV0dG9uVGV4dDogJ0Nsb3NlJ1xuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgc2hvd0xvYWRpbmdXaW5kb3cgKGNvbnRlbnQpIHtcbiAgICBTd2FsLmZpcmUoe1xuICAgICAgdGl0bGU6ICdMb2FkaW5nJyxcbiAgICAgIGh0bWw6IGNvbnRlbnQsXG4gICAgICB0b2FzdDogdHJ1ZSxcbiAgICAgIHBvc2l0aW9uOiAnYm90dG9tLWVuZCcsXG4gICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uOiBmYWxzZSxcbiAgICAgIG9uQmVmb3JlT3BlbjogKCkgPT4ge1xuICAgICAgICBTd2FsLnNob3dMb2FkaW5nKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGNsb3NlTG9hZGluZ1dpbmRvdyAoKSB7XG4gICAgU3dhbC5oaWRlTG9hZGluZygpXG4gICAgU3dhbC5jbG9zZSgpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBbGVydHNcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9zY3JpcHRzL3V0aWxzL0FsZXJ0cy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3Byb21pc2UgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9wcm9taXNlXCIpO1xuXG52YXIgX3Byb21pc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvbWlzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBnZW4gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiBuZXcgX3Byb21pc2UyLmRlZmF1bHQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgZnVuY3Rpb24gc3RlcChrZXksIGFyZykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBfcHJvbWlzZTIuZGVmYXVsdC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgc3RlcChcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIHN0ZXAoXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdGVwKFwibmV4dFwiKTtcbiAgICB9KTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiXG5jbGFzcyBjaGF0R1BUQ2xpZW50IHtcbiAgc3RhdGljIHByb2Nlc3NJbkJhY2tncm91bmQgKG1ldGhvZCwgYXJncykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7c2NvcGU6ICdjaGF0Z3B0Q2xpZW50JywgYWN0aW9uOiAncHJvY2Vzc0luQmFja2dyb3VuZCcsIG1ldGhvZDogbWV0aG9kLCBhcmdzOiBhcmdzfSwgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5yZXNwb25zZSAhPSBudWxsKSByZXNvbHZlKHJlc3BvbnNlLnJlc3BvbnNlKVxuICAgICAgICBlbHNlIGlmIChyZXNwb25zZS5lcnJvciAhPSBudWxsKSByZWplY3QocmVzcG9uc2UuZXJyb3IpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgcGVyZm9ybVF1ZXN0aW9uIChxdWVzdGlvbikge1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3NJbkJhY2tncm91bmQoJ3BlcmZvcm1RdWVzdGlvbicsIHtxdWVzdGlvbjogcXVlc3Rpb259KVxuICB9XG5cbiAgc3RhdGljIGdldEFwaUtleSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2Vzc0luQmFja2dyb3VuZCgnZ2V0QXBpS2V5JylcbiAgfVxuXG4gIHN0YXRpYyBzZXRBcGlLZXkgKGtleSkge1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3NJbkJhY2tncm91bmQoJ3NldEFwaUtleScsIHthcGlLZXk6IGtleX0pXG4gIH1cblxuICBzdGF0aWMgZ2V0TW9kZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2Vzc0luQmFja2dyb3VuZCgnZ2V0TW9kZScpXG4gIH1cblxuICBzdGF0aWMgc2V0TW9kZSAobW9kZSkge1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3NJbkJhY2tncm91bmQoJ3NldE1vZGUnLCB7bW9kZTogbW9kZX0pXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGF0R1BUQ2xpZW50XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc2NyaXB0cy9jaGF0Z3B0L0NoYXRHUFRDbGllbnQuanMiLCIvLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPSAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBodHRwczovL3Jhdy5naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL21hc3Rlci9MSUNFTlNFIGZpbGUuIEFuXG4gKiBhZGRpdGlvbmFsIGdyYW50IG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW5cbiAqIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uIElmIHRoZSBQcm9taXNlIGlzIHJlamVjdGVkLCBob3dldmVyLCB0aGVcbiAgICAgICAgICAvLyByZXN1bHQgZm9yIHRoaXMgaXRlcmF0aW9uIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGUgc2FtZVxuICAgICAgICAgIC8vIHJlYXNvbi4gTm90ZSB0aGF0IHJlamVjdGlvbnMgb2YgeWllbGRlZCBQcm9taXNlcyBhcmUgbm90XG4gICAgICAgICAgLy8gdGhyb3duIGJhY2sgaW50byB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBhcyBpcyB0aGUgY2FzZVxuICAgICAgICAgIC8vIHdoZW4gYW4gYXdhaXRlZCBQcm9taXNlIGlzIHJlamVjdGVkLiBUaGlzIGRpZmZlcmVuY2UgaW5cbiAgICAgICAgICAvLyBiZWhhdmlvciBiZXR3ZWVuIHlpZWxkIGFuZCBhd2FpdCBpcyBpbXBvcnRhbnQsIGJlY2F1c2UgaXRcbiAgICAgICAgICAvLyBhbGxvd3MgdGhlIGNvbnN1bWVyIHRvIGRlY2lkZSB3aGF0IHRvIGRvIHdpdGggdGhlIHlpZWxkZWRcbiAgICAgICAgICAvLyByZWplY3Rpb24gKHN3YWxsb3cgaXQgYW5kIGNvbnRpbnVlLCBtYW51YWxseSAudGhyb3cgaXQgYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGdlbmVyYXRvciwgYWJhbmRvbiBpdGVyYXRpb24sIHdoYXRldmVyKS4gV2l0aFxuICAgICAgICAgIC8vIGF3YWl0LCBieSBjb250cmFzdCwgdGhlcmUgaXMgbm8gb3Bwb3J0dW5pdHkgdG8gZXhhbWluZSB0aGVcbiAgICAgICAgICAvLyByZWplY3Rpb24gcmVhc29uIG91dHNpZGUgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgc28gdGhlXG4gICAgICAgICAgLy8gb25seSBvcHRpb24gaXMgdG8gdGhyb3cgaXQgZnJvbSB0aGUgYXdhaXQgZXhwcmVzc2lvbiwgYW5kXG4gICAgICAgICAgLy8gbGV0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gaGFuZGxlIHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBydW50aW1lLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEluIHNsb3BweSBtb2RlLCB1bmJvdW5kIGB0aGlzYCByZWZlcnMgdG8gdGhlIGdsb2JhbCBvYmplY3QsIGZhbGxiYWNrIHRvXG4gIC8vIEZ1bmN0aW9uIGNvbnN0cnVjdG9yIGlmIHdlJ3JlIGluIGdsb2JhbCBzdHJpY3QgbW9kZS4gVGhhdCBpcyBzYWRseSBhIGZvcm1cbiAgLy8gb2YgaW5kaXJlY3QgZXZhbCB3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeS5cbiAgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKVxuKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnByb21pc2UudHJ5Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5Qcm9taXNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gTy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbnZhciBET01JdGVyYWJsZXMgPSAoJ0NTU1J1bGVMaXN0LENTU1N0eWxlRGVjbGFyYXRpb24sQ1NTVmFsdWVMaXN0LENsaWVudFJlY3RMaXN0LERPTVJlY3RMaXN0LERPTVN0cmluZ0xpc3QsJyArXG4gICdET01Ub2tlbkxpc3QsRGF0YVRyYW5zZmVySXRlbUxpc3QsRmlsZUxpc3QsSFRNTEFsbENvbGxlY3Rpb24sSFRNTENvbGxlY3Rpb24sSFRNTEZvcm1FbGVtZW50LEhUTUxTZWxlY3RFbGVtZW50LCcgK1xuICAnTWVkaWFMaXN0LE1pbWVUeXBlQXJyYXksTmFtZWROb2RlTWFwLE5vZGVMaXN0LFBhaW50UmVxdWVzdExpc3QsUGx1Z2luLFBsdWdpbkFycmF5LFNWR0xlbmd0aExpc3QsU1ZHTnVtYmVyTGlzdCwnICtcbiAgJ1NWR1BhdGhTZWdMaXN0LFNWR1BvaW50TGlzdCxTVkdTdHJpbmdMaXN0LFNWR1RyYW5zZm9ybUxpc3QsU291cmNlQnVmZmVyTGlzdCxTdHlsZVNoZWV0TGlzdCxUZXh0VHJhY2tDdWVMaXN0LCcgK1xuICAnVGV4dFRyYWNrTGlzdCxUb3VjaExpc3QnKS5zcGxpdCgnLCcpO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IERPTUl0ZXJhYmxlcy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IERPTUl0ZXJhYmxlc1tpXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmIChwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciB0YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBtaWNyb3Rhc2sgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuL19wcm9taXNlLXJlc29sdmUnKTtcbnZhciBQUk9NSVNFID0gJ1Byb21pc2UnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyICRQcm9taXNlID0gZ2xvYmFsW1BST01JU0VdO1xudmFyIGlzTm9kZSA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xudmFyIGVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIEludGVybmFsLCBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIE93blByb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSA9ICRQcm9taXNlLnJlc29sdmUoMSk7XG4gICAgdmFyIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbiAoZXhlYykge1xuICAgICAgZXhlYyhlbXB0eSwgZW1wdHkpO1xuICAgIH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24gKHByb21pc2UsIGlzUmVqZWN0KSB7XG4gIGlmIChwcm9taXNlLl9uKSByZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIG9rID0gcHJvbWlzZS5fcyA9PSAxO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24gKHJlYWN0aW9uKSB7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsO1xuICAgICAgdmFyIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlO1xuICAgICAgdmFyIHJlamVjdCA9IHJlYWN0aW9uLnJlamVjdDtcbiAgICAgIHZhciBkb21haW4gPSByZWFjdGlvbi5kb21haW47XG4gICAgICB2YXIgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICBpZiAoIW9rKSB7XG4gICAgICAgICAgICBpZiAocHJvbWlzZS5faCA9PSAyKSBvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGFuZGxlciA9PT0gdHJ1ZSkgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZG9tYWluKSBkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSkge1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlIChjaGFpbi5sZW5ndGggPiBpKSBydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZiAoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpIG9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgdW5oYW5kbGVkID0gaXNVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgdmFyIHJlc3VsdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZiAodW5oYW5kbGVkKSB7XG4gICAgICByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzTm9kZSkge1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pIHtcbiAgICAgICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZSB9KTtcbiAgICAgICAgfSBlbHNlIGlmICgoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmICh1bmhhbmRsZWQgJiYgcmVzdWx0LmUpIHRocm93IHJlc3VsdC52O1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICBpZiAocHJvbWlzZS5faCA9PSAxKSByZXR1cm4gZmFsc2U7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2EgfHwgcHJvbWlzZS5fYztcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVhY3Rpb247XG4gIHdoaWxlIChjaGFpbi5sZW5ndGggPiBpKSB7XG4gICAgcmVhY3Rpb24gPSBjaGFpbltpKytdO1xuICAgIGlmIChyZWFjdGlvbi5mYWlsIHx8ICFpc1VuaGFuZGxlZChyZWFjdGlvbi5wcm9taXNlKSkgcmV0dXJuIGZhbHNlO1xuICB9IHJldHVybiB0cnVlO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZiAoaXNOb2RlKSB7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKSB7XG4gICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92IH0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmICghcHJvbWlzZS5fYSkgcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIHZhciB0aGVuO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZiAodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd3JhcHBlciA9IHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgICRyZWplY3QuY2FsbCh7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmICghVVNFX05BVElWRSkge1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgIHZhciByZWFjdGlvbiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fYSkgdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9zKSBub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgT3duUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgSW50ZXJuYWwoKTtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG4gIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gICAgcmV0dXJuIEMgPT09ICRQcm9taXNlIHx8IEMgPT09IFdyYXBwZXJcbiAgICAgID8gbmV3IE93blByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICA6IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBQcm9taXNlOiAkUHJvbWlzZSB9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocikge1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcyk7XG4gICAgdmFyICQkcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKExJQlJBUlkgJiYgdGhpcyA9PT0gV3JhcHBlciA/ICRQcm9taXNlIDogdGhpcywgeCk7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikge1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZXNvbHZlID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIHZhciAkaW5kZXggPSBpbmRleCsrO1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKSB7XG4gIGlmICghKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIEJSRUFLID0ge307XG52YXIgUkVUVVJOID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1IpIHtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpO1xuICB2YXIgZiA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZiAoaXNBcnJheUl0ZXIoaXRlckZuKSkgZm9yIChsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTspIHtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qc1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCBhcmdzLCB0aGF0KSB7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIE9ic2VydmVyID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIFByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcbnZhciBpc05vZGUgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZiAoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpIHBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUgKGhlYWQpIHtcbiAgICAgIGZuID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoaGVhZCkgbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHBhcmVudCkgcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZiAoaXNOb2RlKSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyXG4gIH0gZWxzZSBpZiAoT2JzZXJ2ZXIpIHtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICB2YXIgdGFzayA9IHsgZm46IGZuLCBuZXh0OiB1bmRlZmluZWQgfTtcbiAgICBpZiAobGFzdCkgbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZiAoIWhlYWQpIHtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIHNhZmUpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykge1xuICAgIGlmIChzYWZlICYmIHRhcmdldFtrZXldKSB0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9IHJldHVybiB0YXJnZXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbiAoKSB7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYywgc2tpcENsb3NpbmcpIHtcbiAgaWYgKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IFs3XTtcbiAgICB2YXIgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB7IGRvbmU6IHNhZmUgPSB0cnVlIH07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtZmluYWxseVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ1Byb21pc2UnLCB7ICdmaW5hbGx5JzogZnVuY3Rpb24gKG9uRmluYWxseSkge1xuICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCBjb3JlLlByb21pc2UgfHwgZ2xvYmFsLlByb21pc2UpO1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiBvbkZpbmFsbHkgPT0gJ2Z1bmN0aW9uJztcbiAgcmV0dXJuIHRoaXMudGhlbihcbiAgICBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiB4OyB9KTtcbiAgICB9IDogb25GaW5hbGx5LFxuICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKEMsIG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHsgdGhyb3cgZTsgfSk7XG4gICAgfSA6IG9uRmluYWxseVxuICApO1xufSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHkuanNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJvbWlzZS10cnlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdQcm9taXNlJywgeyAndHJ5JzogZnVuY3Rpb24gKGNhbGxiYWNrZm4pIHtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZih0aGlzKTtcbiAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oY2FsbGJhY2tmbik7XG4gIChyZXN1bHQuZSA/IHByb21pc2VDYXBhYmlsaXR5LnJlamVjdCA6IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmUpKHJlc3VsdC52KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59IH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UudHJ5LmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIlxuY29uc3QgUHJvbXB0U3R5bGVzID0ge1xuICBRdWVzdGlvblByb21wdDogeydiYWNrZ3JvdW5kQ29sb3InOiAnI0ZGRDQyNicsICdmb250X2NvbG9yJzogJyMwMDAwMDAnLCAnYm9sZCc6IHRydWUsIGxpbmVfcG9zaXRpb246IG51bGx9LFxuICBBbnN3ZXJJdGVtOiB7J2JhY2tncm91bmRDb2xvcic6ICcjOTZEQjBCJywgJ2ZvbnRfY29sb3InOiAnI0ZGRkZGRicsICdib2xkJzogdHJ1ZSwgbGluZV9wb3NpdGlvbjogbnVsbH0sXG4gIFF1ZXN0aW9uUHJvbXB0QVBJOiB7J2JhY2tncm91bmRDb2xvcic6ICdGRkQ0MjYnLCAnYm9sZCc6IHRydWUsICdib3JkZXJDb2xvcic6IG51bGwsICdib3JkZXJfc3R5bGUnOiBudWxsLCAnYm9yZGVyV2lkdGgnOiBudWxsLCAnYm94U2hhZG93JzogZmFsc2UsICdjb2xvcic6IG51bGwsICdmb250cyc6IG51bGwsICdmb250U2l6ZSc6IG51bGwsICdpbWFnZV9jb2xvcic6IG51bGwsICdpdGFsaWMnOiBudWxsLCAnbGluZV9jb2xvcic6IG51bGwsICdsaW5lX3Bvc2l0aW9uJzogbnVsbCwgJ2xpbmVfc3R5bGUnOiBudWxsLCAnbGluZV90eXBlJzogbnVsbCwgJ2xpbmVfd2lkdGgnOiBudWxsLCAnc2hhcGUnOiBudWxsLCAnaWQnOiAtMzMsICduYW1lJzogbnVsbCwgJ2lzX2JvdW5kYXJ5JzogZmFsc2V9LFxuICBBbnN3ZXJJdGVtQVBJOiB7J2JhY2tncm91bmRDb2xvcic6ICc5NkRCMEInLCAnYm9sZCc6IG51bGwsICdib3JkZXJDb2xvcic6IG51bGwsICdib3JkZXJfc3R5bGUnOiBudWxsLCAnYm9yZGVyV2lkdGgnOiBudWxsLCAnYm94U2hhZG93JzogZmFsc2UsICdjb2xvcic6ICdGRkZGRkYnLCAnZm9udHMnOiBudWxsLCAnZm9udFNpemUnOiBudWxsLCAnaW1hZ2VfY29sb3InOiBudWxsLCAnaXRhbGljJzogbnVsbCwgJ2xpbmVfY29sb3InOiBudWxsLCAnbGluZV9wb3NpdGlvbic6IG51bGwsICdsaW5lX3N0eWxlJzogbnVsbCwgJ2xpbmVfdHlwZSc6IG51bGwsICdsaW5lX3dpZHRoJzogbnVsbCwgJ3NoYXBlJzogbnVsbCwgJ2lkJzogLTMzLCAnbmFtZSc6IG51bGwsICdpc19ib3VuZGFyeSc6IGZhbHNlfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21wdFN0eWxlc1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3NjcmlwdHMvY2hhdGluL1Byb21wdFN0eWxlcy5qcyIsIi8qIVxuKiBzd2VldGFsZXJ0MiB2OS4xNy40XG4qIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLlN3ZWV0YWxlcnQyID0gZmFjdG9yeSgpKTtcbn0odGhpcywgZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBfdHlwZW9mKG9iaik7XG4gIH1cblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9XG5cbiAgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gICAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG5cbiAgICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICAgIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgICB9XG5cbiAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgICB9O1xuICAgIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH1cblxuICBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgICAgby5fX3Byb3RvX18gPSBwO1xuICAgICAgcmV0dXJuIG87XG4gICAgfTtcblxuICAgIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG4gIH1cblxuICBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgICB0cnkge1xuICAgICAgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgICBpZiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7XG4gICAgICBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9jb25zdHJ1Y3QgPSBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgICAgICAgdmFyIGEgPSBbbnVsbF07XG4gICAgICAgIGEucHVzaC5hcHBseShhLCBhcmdzKTtcbiAgICAgICAgdmFyIENvbnN0cnVjdG9yID0gRnVuY3Rpb24uYmluZC5hcHBseShQYXJlbnQsIGEpO1xuICAgICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgICAgaWYgKENsYXNzKSBfc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIENsYXNzLnByb3RvdHlwZSk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICAgIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgICBpZiAoY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICAgIHJldHVybiBjYWxsO1xuICAgIH1cblxuICAgIHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHtcbiAgICB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHtcbiAgICAgIHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSxcbiAgICAgICAgICByZXN1bHQ7XG5cbiAgICAgIGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7XG4gICAgICAgIHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7XG5cbiAgICAgICAgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICAgIG9iamVjdCA9IF9nZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICAgIF9nZXQgPSBSZWZsZWN0LmdldDtcbiAgICB9IGVsc2Uge1xuICAgICAgX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgdmFyIGJhc2UgPSBfc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcblxuICAgICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcblxuICAgICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChyZWNlaXZlcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTtcbiAgfVxuXG4gIHZhciBjb25zb2xlUHJlZml4ID0gJ1N3ZWV0QWxlcnQyOic7XG4gIC8qKlxuICAgKiBGaWx0ZXIgdGhlIHVuaXF1ZSB2YWx1ZXMgaW50byBhIG5ldyBhcnJheVxuICAgKiBAcGFyYW0gYXJyXG4gICAqL1xuXG4gIHZhciB1bmlxdWVBcnJheSA9IGZ1bmN0aW9uIHVuaXF1ZUFycmF5KGFycikge1xuICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocmVzdWx0LmluZGV4T2YoYXJyW2ldKSA9PT0gLTEpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goYXJyW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICAvKipcbiAgICogQ2FwaXRhbGl6ZSB0aGUgZmlyc3QgbGV0dGVyIG9mIGEgc3RyaW5nXG4gICAqIEBwYXJhbSBzdHJcbiAgICovXG5cbiAgdmFyIGNhcGl0YWxpemVGaXJzdExldHRlciA9IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHIpIHtcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuICB9O1xuICAvKipcbiAgICogUmV0dXJucyB0aGUgYXJyYXkgb2Ygb2JqZWN0IHZhbHVlcyAoT2JqZWN0LnZhbHVlcyBpc24ndCBzdXBwb3J0ZWQgaW4gSUUxMSlcbiAgICogQHBhcmFtIG9ialxuICAgKi9cblxuICB2YXIgb2JqZWN0VmFsdWVzID0gZnVuY3Rpb24gb2JqZWN0VmFsdWVzKG9iaikge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gb2JqW2tleV07XG4gICAgfSk7XG4gIH07XG4gIC8qKlxuICAgKiBDb252ZXJ0IE5vZGVMaXN0IHRvIEFycmF5XG4gICAqIEBwYXJhbSBub2RlTGlzdFxuICAgKi9cblxuICB2YXIgdG9BcnJheSA9IGZ1bmN0aW9uIHRvQXJyYXkobm9kZUxpc3QpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobm9kZUxpc3QpO1xuICB9O1xuICAvKipcbiAgICogU3RhbmRhcmRpc2UgY29uc29sZSB3YXJuaW5nc1xuICAgKiBAcGFyYW0gbWVzc2FnZVxuICAgKi9cblxuICB2YXIgd2FybiA9IGZ1bmN0aW9uIHdhcm4obWVzc2FnZSkge1xuICAgIGNvbnNvbGUud2FybihcIlwiLmNvbmNhdChjb25zb2xlUHJlZml4LCBcIiBcIikuY29uY2F0KG1lc3NhZ2UpKTtcbiAgfTtcbiAgLyoqXG4gICAqIFN0YW5kYXJkaXNlIGNvbnNvbGUgZXJyb3JzXG4gICAqIEBwYXJhbSBtZXNzYWdlXG4gICAqL1xuXG4gIHZhciBlcnJvciA9IGZ1bmN0aW9uIGVycm9yKG1lc3NhZ2UpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiXCIuY29uY2F0KGNvbnNvbGVQcmVmaXgsIFwiIFwiKS5jb25jYXQobWVzc2FnZSkpO1xuICB9O1xuICAvKipcbiAgICogUHJpdmF0ZSBnbG9iYWwgc3RhdGUgZm9yIGB3YXJuT25jZWBcbiAgICogQHR5cGUge0FycmF5fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblxuICB2YXIgcHJldmlvdXNXYXJuT25jZU1lc3NhZ2VzID0gW107XG4gIC8qKlxuICAgKiBTaG93IGEgY29uc29sZSB3YXJuaW5nLCBidXQgb25seSBpZiBpdCBoYXNuJ3QgYWxyZWFkeSBiZWVuIHNob3duXG4gICAqIEBwYXJhbSBtZXNzYWdlXG4gICAqL1xuXG4gIHZhciB3YXJuT25jZSA9IGZ1bmN0aW9uIHdhcm5PbmNlKG1lc3NhZ2UpIHtcbiAgICBpZiAoIShwcmV2aW91c1dhcm5PbmNlTWVzc2FnZXMuaW5kZXhPZihtZXNzYWdlKSAhPT0gLTEpKSB7XG4gICAgICBwcmV2aW91c1dhcm5PbmNlTWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICAgIHdhcm4obWVzc2FnZSk7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogU2hvdyBhIG9uZS10aW1lIGNvbnNvbGUgd2FybmluZyBhYm91dCBkZXByZWNhdGVkIHBhcmFtcy9tZXRob2RzXG4gICAqL1xuXG4gIHZhciB3YXJuQWJvdXREZXByZWF0aW9uID0gZnVuY3Rpb24gd2FybkFib3V0RGVwcmVhdGlvbihkZXByZWNhdGVkUGFyYW0sIHVzZUluc3RlYWQpIHtcbiAgICB3YXJuT25jZShcIlxcXCJcIi5jb25jYXQoZGVwcmVjYXRlZFBhcmFtLCBcIlxcXCIgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UuIFBsZWFzZSB1c2UgXFxcIlwiKS5jb25jYXQodXNlSW5zdGVhZCwgXCJcXFwiIGluc3RlYWQuXCIpKTtcbiAgfTtcbiAgLyoqXG4gICAqIElmIGBhcmdgIGlzIGEgZnVuY3Rpb24sIGNhbGwgaXQgKHdpdGggbm8gYXJndW1lbnRzIG9yIGNvbnRleHQpIGFuZCByZXR1cm4gdGhlIHJlc3VsdC5cbiAgICogT3RoZXJ3aXNlLCBqdXN0IHBhc3MgdGhlIHZhbHVlIHRocm91Z2hcbiAgICogQHBhcmFtIGFyZ1xuICAgKi9cblxuICB2YXIgY2FsbElmRnVuY3Rpb24gPSBmdW5jdGlvbiBjYWxsSWZGdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJyA/IGFyZygpIDogYXJnO1xuICB9O1xuICB2YXIgaGFzVG9Qcm9taXNlRm4gPSBmdW5jdGlvbiBoYXNUb1Byb21pc2VGbihhcmcpIHtcbiAgICByZXR1cm4gYXJnICYmIHR5cGVvZiBhcmcudG9Qcm9taXNlID09PSAnZnVuY3Rpb24nO1xuICB9O1xuICB2YXIgYXNQcm9taXNlID0gZnVuY3Rpb24gYXNQcm9taXNlKGFyZykge1xuICAgIHJldHVybiBoYXNUb1Byb21pc2VGbihhcmcpID8gYXJnLnRvUHJvbWlzZSgpIDogUHJvbWlzZS5yZXNvbHZlKGFyZyk7XG4gIH07XG4gIHZhciBpc1Byb21pc2UgPSBmdW5jdGlvbiBpc1Byb21pc2UoYXJnKSB7XG4gICAgcmV0dXJuIGFyZyAmJiBQcm9taXNlLnJlc29sdmUoYXJnKSA9PT0gYXJnO1xuICB9O1xuXG4gIHZhciBEaXNtaXNzUmVhc29uID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgY2FuY2VsOiAnY2FuY2VsJyxcbiAgICBiYWNrZHJvcDogJ2JhY2tkcm9wJyxcbiAgICBjbG9zZTogJ2Nsb3NlJyxcbiAgICBlc2M6ICdlc2MnLFxuICAgIHRpbWVyOiAndGltZXInXG4gIH0pO1xuXG4gIHZhciBpc0pxdWVyeUVsZW1lbnQgPSBmdW5jdGlvbiBpc0pxdWVyeUVsZW1lbnQoZWxlbSkge1xuICAgIHJldHVybiBfdHlwZW9mKGVsZW0pID09PSAnb2JqZWN0JyAmJiBlbGVtLmpxdWVyeTtcbiAgfTtcblxuICB2YXIgaXNFbGVtZW50ID0gZnVuY3Rpb24gaXNFbGVtZW50KGVsZW0pIHtcbiAgICByZXR1cm4gZWxlbSBpbnN0YW5jZW9mIEVsZW1lbnQgfHwgaXNKcXVlcnlFbGVtZW50KGVsZW0pO1xuICB9O1xuXG4gIHZhciBhcmdzVG9QYXJhbXMgPSBmdW5jdGlvbiBhcmdzVG9QYXJhbXMoYXJncykge1xuICAgIHZhciBwYXJhbXMgPSB7fTtcblxuICAgIGlmIChfdHlwZW9mKGFyZ3NbMF0pID09PSAnb2JqZWN0JyAmJiAhaXNFbGVtZW50KGFyZ3NbMF0pKSB7XG4gICAgICBfZXh0ZW5kcyhwYXJhbXMsIGFyZ3NbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBbJ3RpdGxlJywgJ2h0bWwnLCAnaWNvbiddLmZvckVhY2goZnVuY3Rpb24gKG5hbWUsIGluZGV4KSB7XG4gICAgICAgIHZhciBhcmcgPSBhcmdzW2luZGV4XTtcblxuICAgICAgICBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHwgaXNFbGVtZW50KGFyZykpIHtcbiAgICAgICAgICBwYXJhbXNbbmFtZV0gPSBhcmc7XG4gICAgICAgIH0gZWxzZSBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBlcnJvcihcIlVuZXhwZWN0ZWQgdHlwZSBvZiBcIi5jb25jYXQobmFtZSwgXCIhIEV4cGVjdGVkIFxcXCJzdHJpbmdcXFwiIG9yIFxcXCJFbGVtZW50XFxcIiwgZ290IFwiKS5jb25jYXQoX3R5cGVvZihhcmcpKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJhbXM7XG4gIH07XG5cbiAgdmFyIHN3YWxQcmVmaXggPSAnc3dhbDItJztcbiAgdmFyIHByZWZpeCA9IGZ1bmN0aW9uIHByZWZpeChpdGVtcykge1xuICAgIHZhciByZXN1bHQgPSB7fTtcblxuICAgIGZvciAodmFyIGkgaW4gaXRlbXMpIHtcbiAgICAgIHJlc3VsdFtpdGVtc1tpXV0gPSBzd2FsUHJlZml4ICsgaXRlbXNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgdmFyIHN3YWxDbGFzc2VzID0gcHJlZml4KFsnY29udGFpbmVyJywgJ3Nob3duJywgJ2hlaWdodC1hdXRvJywgJ2lvc2ZpeCcsICdwb3B1cCcsICdtb2RhbCcsICduby1iYWNrZHJvcCcsICduby10cmFuc2l0aW9uJywgJ3RvYXN0JywgJ3RvYXN0LXNob3duJywgJ3RvYXN0LWNvbHVtbicsICdzaG93JywgJ2hpZGUnLCAnY2xvc2UnLCAndGl0bGUnLCAnaGVhZGVyJywgJ2NvbnRlbnQnLCAnaHRtbC1jb250YWluZXInLCAnYWN0aW9ucycsICdjb25maXJtJywgJ2NhbmNlbCcsICdmb290ZXInLCAnaWNvbicsICdpY29uLWNvbnRlbnQnLCAnaW1hZ2UnLCAnaW5wdXQnLCAnZmlsZScsICdyYW5nZScsICdzZWxlY3QnLCAncmFkaW8nLCAnY2hlY2tib3gnLCAnbGFiZWwnLCAndGV4dGFyZWEnLCAnaW5wdXRlcnJvcicsICd2YWxpZGF0aW9uLW1lc3NhZ2UnLCAncHJvZ3Jlc3Mtc3RlcHMnLCAnYWN0aXZlLXByb2dyZXNzLXN0ZXAnLCAncHJvZ3Jlc3Mtc3RlcCcsICdwcm9ncmVzcy1zdGVwLWxpbmUnLCAnbG9hZGluZycsICdzdHlsZWQnLCAndG9wJywgJ3RvcC1zdGFydCcsICd0b3AtZW5kJywgJ3RvcC1sZWZ0JywgJ3RvcC1yaWdodCcsICdjZW50ZXInLCAnY2VudGVyLXN0YXJ0JywgJ2NlbnRlci1lbmQnLCAnY2VudGVyLWxlZnQnLCAnY2VudGVyLXJpZ2h0JywgJ2JvdHRvbScsICdib3R0b20tc3RhcnQnLCAnYm90dG9tLWVuZCcsICdib3R0b20tbGVmdCcsICdib3R0b20tcmlnaHQnLCAnZ3Jvdy1yb3cnLCAnZ3Jvdy1jb2x1bW4nLCAnZ3Jvdy1mdWxsc2NyZWVuJywgJ3J0bCcsICd0aW1lci1wcm9ncmVzcy1iYXInLCAndGltZXItcHJvZ3Jlc3MtYmFyLWNvbnRhaW5lcicsICdzY3JvbGxiYXItbWVhc3VyZScsICdpY29uLXN1Y2Nlc3MnLCAnaWNvbi13YXJuaW5nJywgJ2ljb24taW5mbycsICdpY29uLXF1ZXN0aW9uJywgJ2ljb24tZXJyb3InXSk7XG4gIHZhciBpY29uVHlwZXMgPSBwcmVmaXgoWydzdWNjZXNzJywgJ3dhcm5pbmcnLCAnaW5mbycsICdxdWVzdGlvbicsICdlcnJvciddKTtcblxuICB2YXIgZ2V0Q29udGFpbmVyID0gZnVuY3Rpb24gZ2V0Q29udGFpbmVyKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLmNvbnRhaW5lcikpO1xuICB9O1xuICB2YXIgZWxlbWVudEJ5U2VsZWN0b3IgPSBmdW5jdGlvbiBlbGVtZW50QnlTZWxlY3RvcihzZWxlY3RvclN0cmluZykge1xuICAgIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgICByZXR1cm4gY29udGFpbmVyID8gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JTdHJpbmcpIDogbnVsbDtcbiAgfTtcblxuICB2YXIgZWxlbWVudEJ5Q2xhc3MgPSBmdW5jdGlvbiBlbGVtZW50QnlDbGFzcyhjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gZWxlbWVudEJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KGNsYXNzTmFtZSkpO1xuICB9O1xuXG4gIHZhciBnZXRQb3B1cCA9IGZ1bmN0aW9uIGdldFBvcHVwKCkge1xuICAgIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5wb3B1cCk7XG4gIH07XG4gIHZhciBnZXRJY29ucyA9IGZ1bmN0aW9uIGdldEljb25zKCkge1xuICAgIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG4gICAgcmV0dXJuIHRvQXJyYXkocG9wdXAucXVlcnlTZWxlY3RvckFsbChcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMuaWNvbikpKTtcbiAgfTtcbiAgdmFyIGdldEljb24gPSBmdW5jdGlvbiBnZXRJY29uKCkge1xuICAgIHZhciB2aXNpYmxlSWNvbiA9IGdldEljb25zKCkuZmlsdGVyKGZ1bmN0aW9uIChpY29uKSB7XG4gICAgICByZXR1cm4gaXNWaXNpYmxlKGljb24pO1xuICAgIH0pO1xuICAgIHJldHVybiB2aXNpYmxlSWNvbi5sZW5ndGggPyB2aXNpYmxlSWNvblswXSA6IG51bGw7XG4gIH07XG4gIHZhciBnZXRUaXRsZSA9IGZ1bmN0aW9uIGdldFRpdGxlKCkge1xuICAgIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy50aXRsZSk7XG4gIH07XG4gIHZhciBnZXRDb250ZW50ID0gZnVuY3Rpb24gZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuY29udGVudCk7XG4gIH07XG4gIHZhciBnZXRIdG1sQ29udGFpbmVyID0gZnVuY3Rpb24gZ2V0SHRtbENvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXNbJ2h0bWwtY29udGFpbmVyJ10pO1xuICB9O1xuICB2YXIgZ2V0SW1hZ2UgPSBmdW5jdGlvbiBnZXRJbWFnZSgpIHtcbiAgICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuaW1hZ2UpO1xuICB9O1xuICB2YXIgZ2V0UHJvZ3Jlc3NTdGVwcyA9IGZ1bmN0aW9uIGdldFByb2dyZXNzU3RlcHMoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzWydwcm9ncmVzcy1zdGVwcyddKTtcbiAgfTtcbiAgdmFyIGdldFZhbGlkYXRpb25NZXNzYWdlID0gZnVuY3Rpb24gZ2V0VmFsaWRhdGlvbk1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzWyd2YWxpZGF0aW9uLW1lc3NhZ2UnXSk7XG4gIH07XG4gIHZhciBnZXRDb25maXJtQnV0dG9uID0gZnVuY3Rpb24gZ2V0Q29uZmlybUJ1dHRvbigpIHtcbiAgICByZXR1cm4gZWxlbWVudEJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLmFjdGlvbnMsIFwiIC5cIikuY29uY2F0KHN3YWxDbGFzc2VzLmNvbmZpcm0pKTtcbiAgfTtcbiAgdmFyIGdldENhbmNlbEJ1dHRvbiA9IGZ1bmN0aW9uIGdldENhbmNlbEJ1dHRvbigpIHtcbiAgICByZXR1cm4gZWxlbWVudEJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLmFjdGlvbnMsIFwiIC5cIikuY29uY2F0KHN3YWxDbGFzc2VzLmNhbmNlbCkpO1xuICB9O1xuICB2YXIgZ2V0QWN0aW9ucyA9IGZ1bmN0aW9uIGdldEFjdGlvbnMoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmFjdGlvbnMpO1xuICB9O1xuICB2YXIgZ2V0SGVhZGVyID0gZnVuY3Rpb24gZ2V0SGVhZGVyKCkge1xuICAgIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5oZWFkZXIpO1xuICB9O1xuICB2YXIgZ2V0Rm9vdGVyID0gZnVuY3Rpb24gZ2V0Rm9vdGVyKCkge1xuICAgIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5mb290ZXIpO1xuICB9O1xuICB2YXIgZ2V0VGltZXJQcm9ncmVzc0JhciA9IGZ1bmN0aW9uIGdldFRpbWVyUHJvZ3Jlc3NCYXIoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzWyd0aW1lci1wcm9ncmVzcy1iYXInXSk7XG4gIH07XG4gIHZhciBnZXRDbG9zZUJ1dHRvbiA9IGZ1bmN0aW9uIGdldENsb3NlQnV0dG9uKCkge1xuICAgIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5jbG9zZSk7XG4gIH07IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qa3VwL2ZvY3VzYWJsZS9ibG9iL21hc3Rlci9pbmRleC5qc1xuXG4gIHZhciBmb2N1c2FibGUgPSBcIlxcbiAgYVtocmVmXSxcXG4gIGFyZWFbaHJlZl0sXFxuICBpbnB1dDpub3QoW2Rpc2FibGVkXSksXFxuICBzZWxlY3Q6bm90KFtkaXNhYmxlZF0pLFxcbiAgdGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pLFxcbiAgYnV0dG9uOm5vdChbZGlzYWJsZWRdKSxcXG4gIGlmcmFtZSxcXG4gIG9iamVjdCxcXG4gIGVtYmVkLFxcbiAgW3RhYmluZGV4PVxcXCIwXFxcIl0sXFxuICBbY29udGVudGVkaXRhYmxlXSxcXG4gIGF1ZGlvW2NvbnRyb2xzXSxcXG4gIHZpZGVvW2NvbnRyb2xzXSxcXG4gIHN1bW1hcnlcXG5cIjtcbiAgdmFyIGdldEZvY3VzYWJsZUVsZW1lbnRzID0gZnVuY3Rpb24gZ2V0Rm9jdXNhYmxlRWxlbWVudHMoKSB7XG4gICAgdmFyIGZvY3VzYWJsZUVsZW1lbnRzV2l0aFRhYmluZGV4ID0gdG9BcnJheShnZXRQb3B1cCgpLnF1ZXJ5U2VsZWN0b3JBbGwoJ1t0YWJpbmRleF06bm90KFt0YWJpbmRleD1cIi0xXCJdKTpub3QoW3RhYmluZGV4PVwiMFwiXSknKSkgLy8gc29ydCBhY2NvcmRpbmcgdG8gdGFiaW5kZXhcbiAgICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgYSA9IHBhcnNlSW50KGEuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpKTtcbiAgICAgIGIgPSBwYXJzZUludChiLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSk7XG5cbiAgICAgIGlmIChhID4gYikge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH0gZWxzZSBpZiAoYSA8IGIpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcbiAgICB2YXIgb3RoZXJGb2N1c2FibGVFbGVtZW50cyA9IHRvQXJyYXkoZ2V0UG9wdXAoKS5xdWVyeVNlbGVjdG9yQWxsKGZvY3VzYWJsZSkpLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcbiAgICAgIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykgIT09ICctMSc7XG4gICAgfSk7XG4gICAgcmV0dXJuIHVuaXF1ZUFycmF5KGZvY3VzYWJsZUVsZW1lbnRzV2l0aFRhYmluZGV4LmNvbmNhdChvdGhlckZvY3VzYWJsZUVsZW1lbnRzKSkuZmlsdGVyKGZ1bmN0aW9uIChlbCkge1xuICAgICAgcmV0dXJuIGlzVmlzaWJsZShlbCk7XG4gICAgfSk7XG4gIH07XG4gIHZhciBpc01vZGFsID0gZnVuY3Rpb24gaXNNb2RhbCgpIHtcbiAgICByZXR1cm4gIWlzVG9hc3QoKSAmJiAhZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoc3dhbENsYXNzZXNbJ25vLWJhY2tkcm9wJ10pO1xuICB9O1xuICB2YXIgaXNUb2FzdCA9IGZ1bmN0aW9uIGlzVG9hc3QoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddKTtcbiAgfTtcbiAgdmFyIGlzTG9hZGluZyA9IGZ1bmN0aW9uIGlzTG9hZGluZygpIHtcbiAgICByZXR1cm4gZ2V0UG9wdXAoKS5oYXNBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICB9O1xuXG4gIHZhciBzdGF0ZXMgPSB7XG4gICAgcHJldmlvdXNCb2R5UGFkZGluZzogbnVsbFxuICB9O1xuICB2YXIgc2V0SW5uZXJIdG1sID0gZnVuY3Rpb24gc2V0SW5uZXJIdG1sKGVsZW0sIGh0bWwpIHtcbiAgICAvLyAjMTkyNlxuICAgIGVsZW0udGV4dENvbnRlbnQgPSAnJztcblxuICAgIGlmIChodG1sKSB7XG4gICAgICB2YXIgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgICAgdmFyIHBhcnNlZCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgXCJ0ZXh0L2h0bWxcIik7XG4gICAgICB0b0FycmF5KHBhcnNlZC5xdWVyeVNlbGVjdG9yKCdoZWFkJykuY2hpbGROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgZWxlbS5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICB9KTtcbiAgICAgIHRvQXJyYXkocGFyc2VkLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jaGlsZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBlbGVtLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgdmFyIGhhc0NsYXNzID0gZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbSwgY2xhc3NOYW1lKSB7XG4gICAgaWYgKCFjbGFzc05hbWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgY2xhc3NMaXN0ID0gY2xhc3NOYW1lLnNwbGl0KC9cXHMrLyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNsYXNzTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFlbGVtLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc0xpc3RbaV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICB2YXIgcmVtb3ZlQ3VzdG9tQ2xhc3NlcyA9IGZ1bmN0aW9uIHJlbW92ZUN1c3RvbUNsYXNzZXMoZWxlbSwgcGFyYW1zKSB7XG4gICAgdG9BcnJheShlbGVtLmNsYXNzTGlzdCkuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICBpZiAoIShvYmplY3RWYWx1ZXMoc3dhbENsYXNzZXMpLmluZGV4T2YoY2xhc3NOYW1lKSAhPT0gLTEpICYmICEob2JqZWN0VmFsdWVzKGljb25UeXBlcykuaW5kZXhPZihjbGFzc05hbWUpICE9PSAtMSkgJiYgIShvYmplY3RWYWx1ZXMocGFyYW1zLnNob3dDbGFzcykuaW5kZXhPZihjbGFzc05hbWUpICE9PSAtMSkpIHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGFwcGx5Q3VzdG9tQ2xhc3MgPSBmdW5jdGlvbiBhcHBseUN1c3RvbUNsYXNzKGVsZW0sIHBhcmFtcywgY2xhc3NOYW1lKSB7XG4gICAgcmVtb3ZlQ3VzdG9tQ2xhc3NlcyhlbGVtLCBwYXJhbXMpO1xuXG4gICAgaWYgKHBhcmFtcy5jdXN0b21DbGFzcyAmJiBwYXJhbXMuY3VzdG9tQ2xhc3NbY2xhc3NOYW1lXSkge1xuICAgICAgaWYgKHR5cGVvZiBwYXJhbXMuY3VzdG9tQ2xhc3NbY2xhc3NOYW1lXSAhPT0gJ3N0cmluZycgJiYgIXBhcmFtcy5jdXN0b21DbGFzc1tjbGFzc05hbWVdLmZvckVhY2gpIHtcbiAgICAgICAgcmV0dXJuIHdhcm4oXCJJbnZhbGlkIHR5cGUgb2YgY3VzdG9tQ2xhc3MuXCIuY29uY2F0KGNsYXNzTmFtZSwgXCIhIEV4cGVjdGVkIHN0cmluZyBvciBpdGVyYWJsZSBvYmplY3QsIGdvdCBcXFwiXCIpLmNvbmNhdChfdHlwZW9mKHBhcmFtcy5jdXN0b21DbGFzc1tjbGFzc05hbWVdKSwgXCJcXFwiXCIpKTtcbiAgICAgIH1cblxuICAgICAgYWRkQ2xhc3MoZWxlbSwgcGFyYW1zLmN1c3RvbUNsYXNzW2NsYXNzTmFtZV0pO1xuICAgIH1cbiAgfTtcbiAgZnVuY3Rpb24gZ2V0SW5wdXQoY29udGVudCwgaW5wdXRUeXBlKSB7XG4gICAgaWYgKCFpbnB1dFR5cGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHN3aXRjaCAoaW5wdXRUeXBlKSB7XG4gICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgY2FzZSAnZmlsZSc6XG4gICAgICAgIHJldHVybiBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgc3dhbENsYXNzZXNbaW5wdXRUeXBlXSk7XG5cbiAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMuY2hlY2tib3gsIFwiIGlucHV0XCIpKTtcblxuICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICByZXR1cm4gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYWRpbywgXCIgaW5wdXQ6Y2hlY2tlZFwiKSkgfHwgY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYWRpbywgXCIgaW5wdXQ6Zmlyc3QtY2hpbGRcIikpO1xuXG4gICAgICBjYXNlICdyYW5nZSc6XG4gICAgICAgIHJldHVybiBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLnJhbmdlLCBcIiBpbnB1dFwiKSk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgc3dhbENsYXNzZXMuaW5wdXQpO1xuICAgIH1cbiAgfVxuICB2YXIgZm9jdXNJbnB1dCA9IGZ1bmN0aW9uIGZvY3VzSW5wdXQoaW5wdXQpIHtcbiAgICBpbnB1dC5mb2N1cygpOyAvLyBwbGFjZSBjdXJzb3IgYXQgZW5kIG9mIHRleHQgaW4gdGV4dCBpbnB1dFxuXG4gICAgaWYgKGlucHV0LnR5cGUgIT09ICdmaWxlJykge1xuICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjM0NTkxNVxuICAgICAgdmFyIHZhbCA9IGlucHV0LnZhbHVlO1xuICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgIGlucHV0LnZhbHVlID0gdmFsO1xuICAgIH1cbiAgfTtcbiAgdmFyIHRvZ2dsZUNsYXNzID0gZnVuY3Rpb24gdG9nZ2xlQ2xhc3ModGFyZ2V0LCBjbGFzc0xpc3QsIGNvbmRpdGlvbikge1xuICAgIGlmICghdGFyZ2V0IHx8ICFjbGFzc0xpc3QpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNsYXNzTGlzdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNsYXNzTGlzdCA9IGNsYXNzTGlzdC5zcGxpdCgvXFxzKy8pLmZpbHRlcihCb29sZWFuKTtcbiAgICB9XG5cbiAgICBjbGFzc0xpc3QuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICBpZiAodGFyZ2V0LmZvckVhY2gpIHtcbiAgICAgICAgdGFyZ2V0LmZvckVhY2goZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICBjb25kaXRpb24gPyBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSA6IGVsZW0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbmRpdGlvbiA/IHRhcmdldC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkgOiB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICB2YXIgYWRkQ2xhc3MgPSBmdW5jdGlvbiBhZGRDbGFzcyh0YXJnZXQsIGNsYXNzTGlzdCkge1xuICAgIHRvZ2dsZUNsYXNzKHRhcmdldCwgY2xhc3NMaXN0LCB0cnVlKTtcbiAgfTtcbiAgdmFyIHJlbW92ZUNsYXNzID0gZnVuY3Rpb24gcmVtb3ZlQ2xhc3ModGFyZ2V0LCBjbGFzc0xpc3QpIHtcbiAgICB0b2dnbGVDbGFzcyh0YXJnZXQsIGNsYXNzTGlzdCwgZmFsc2UpO1xuICB9O1xuICB2YXIgZ2V0Q2hpbGRCeUNsYXNzID0gZnVuY3Rpb24gZ2V0Q2hpbGRCeUNsYXNzKGVsZW0sIGNsYXNzTmFtZSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaGFzQ2xhc3MoZWxlbS5jaGlsZE5vZGVzW2ldLCBjbGFzc05hbWUpKSB7XG4gICAgICAgIHJldHVybiBlbGVtLmNoaWxkTm9kZXNbaV07XG4gICAgICB9XG4gICAgfVxuICB9O1xuICB2YXIgYXBwbHlOdW1lcmljYWxTdHlsZSA9IGZ1bmN0aW9uIGFwcGx5TnVtZXJpY2FsU3R5bGUoZWxlbSwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlIHx8IHBhcnNlSW50KHZhbHVlKSA9PT0gMCkge1xuICAgICAgZWxlbS5zdHlsZVtwcm9wZXJ0eV0gPSB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInID8gXCJcIi5jb25jYXQodmFsdWUsIFwicHhcIikgOiB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShwcm9wZXJ0eSk7XG4gICAgfVxuICB9O1xuICB2YXIgc2hvdyA9IGZ1bmN0aW9uIHNob3coZWxlbSkge1xuICAgIHZhciBkaXNwbGF5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnZmxleCc7XG4gICAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gJyc7XG4gICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcbiAgfTtcbiAgdmFyIGhpZGUgPSBmdW5jdGlvbiBoaWRlKGVsZW0pIHtcbiAgICBlbGVtLnN0eWxlLm9wYWNpdHkgPSAnJztcbiAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH07XG4gIHZhciB0b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoZWxlbSwgY29uZGl0aW9uLCBkaXNwbGF5KSB7XG4gICAgY29uZGl0aW9uID8gc2hvdyhlbGVtLCBkaXNwbGF5KSA6IGhpZGUoZWxlbSk7XG4gIH07IC8vIGJvcnJvd2VkIGZyb20ganF1ZXJ5ICQoZWxlbSkuaXMoJzp2aXNpYmxlJykgaW1wbGVtZW50YXRpb25cblxuICB2YXIgaXNWaXNpYmxlID0gZnVuY3Rpb24gaXNWaXNpYmxlKGVsZW0pIHtcbiAgICByZXR1cm4gISEoZWxlbSAmJiAoZWxlbS5vZmZzZXRXaWR0aCB8fCBlbGVtLm9mZnNldEhlaWdodCB8fCBlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKSk7XG4gIH07XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cbiAgdmFyIGlzU2Nyb2xsYWJsZSA9IGZ1bmN0aW9uIGlzU2Nyb2xsYWJsZShlbGVtKSB7XG4gICAgcmV0dXJuICEhKGVsZW0uc2Nyb2xsSGVpZ2h0ID4gZWxlbS5jbGllbnRIZWlnaHQpO1xuICB9OyAvLyBib3Jyb3dlZCBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80NjM1MjExOVxuXG4gIHZhciBoYXNDc3NBbmltYXRpb24gPSBmdW5jdGlvbiBoYXNDc3NBbmltYXRpb24oZWxlbSkge1xuICAgIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW0pO1xuICAgIHZhciBhbmltRHVyYXRpb24gPSBwYXJzZUZsb2F0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2FuaW1hdGlvbi1kdXJhdGlvbicpIHx8ICcwJyk7XG4gICAgdmFyIHRyYW5zRHVyYXRpb24gPSBwYXJzZUZsb2F0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RyYW5zaXRpb24tZHVyYXRpb24nKSB8fCAnMCcpO1xuICAgIHJldHVybiBhbmltRHVyYXRpb24gPiAwIHx8IHRyYW5zRHVyYXRpb24gPiAwO1xuICB9O1xuICB2YXIgY29udGFpbnMgPSBmdW5jdGlvbiBjb250YWlucyhoYXlzdGFjaywgbmVlZGxlKSB7XG4gICAgaWYgKHR5cGVvZiBoYXlzdGFjay5jb250YWlucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGhheXN0YWNrLmNvbnRhaW5zKG5lZWRsZSk7XG4gICAgfVxuICB9O1xuICB2YXIgYW5pbWF0ZVRpbWVyUHJvZ3Jlc3NCYXIgPSBmdW5jdGlvbiBhbmltYXRlVGltZXJQcm9ncmVzc0Jhcih0aW1lcikge1xuICAgIHZhciByZXNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gICAgdmFyIHRpbWVyUHJvZ3Jlc3NCYXIgPSBnZXRUaW1lclByb2dyZXNzQmFyKCk7XG5cbiAgICBpZiAoaXNWaXNpYmxlKHRpbWVyUHJvZ3Jlc3NCYXIpKSB7XG4gICAgICBpZiAocmVzZXQpIHtcbiAgICAgICAgdGltZXJQcm9ncmVzc0Jhci5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnO1xuICAgICAgICB0aW1lclByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgfVxuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGltZXJQcm9ncmVzc0Jhci5zdHlsZS50cmFuc2l0aW9uID0gXCJ3aWR0aCBcIi5jb25jYXQodGltZXIgLyAxMDAwLCBcInMgbGluZWFyXCIpO1xuICAgICAgICB0aW1lclByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gJzAlJztcbiAgICAgIH0sIDEwKTtcbiAgICB9XG4gIH07XG4gIHZhciBzdG9wVGltZXJQcm9ncmVzc0JhciA9IGZ1bmN0aW9uIHN0b3BUaW1lclByb2dyZXNzQmFyKCkge1xuICAgIHZhciB0aW1lclByb2dyZXNzQmFyID0gZ2V0VGltZXJQcm9ncmVzc0JhcigpO1xuICAgIHZhciB0aW1lclByb2dyZXNzQmFyV2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aW1lclByb2dyZXNzQmFyKS53aWR0aCk7XG4gICAgdGltZXJQcm9ncmVzc0Jhci5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbicpO1xuICAgIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgdmFyIHRpbWVyUHJvZ3Jlc3NCYXJGdWxsV2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aW1lclByb2dyZXNzQmFyKS53aWR0aCk7XG4gICAgdmFyIHRpbWVyUHJvZ3Jlc3NCYXJQZXJjZW50ID0gcGFyc2VJbnQodGltZXJQcm9ncmVzc0JhcldpZHRoIC8gdGltZXJQcm9ncmVzc0JhckZ1bGxXaWR0aCAqIDEwMCk7XG4gICAgdGltZXJQcm9ncmVzc0Jhci5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbicpO1xuICAgIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSBcIlwiLmNvbmNhdCh0aW1lclByb2dyZXNzQmFyUGVyY2VudCwgXCIlXCIpO1xuICB9O1xuXG4gIC8vIERldGVjdCBOb2RlIGVudlxuICB2YXIgaXNOb2RlRW52ID0gZnVuY3Rpb24gaXNOb2RlRW52KCkge1xuICAgIHJldHVybiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnO1xuICB9O1xuXG4gIHZhciBzd2VldEhUTUwgPSBcIlxcbiA8ZGl2IGFyaWEtbGFiZWxsZWRieT1cXFwiXCIuY29uY2F0KHN3YWxDbGFzc2VzLnRpdGxlLCBcIlxcXCIgYXJpYS1kZXNjcmliZWRieT1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jb250ZW50LCBcIlxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMucG9wdXAsIFwiXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiPlxcbiAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuaGVhZGVyLCBcIlxcXCI+XFxuICAgICA8dWwgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXNbJ3Byb2dyZXNzLXN0ZXBzJ10sIFwiXFxcIj48L3VsPlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5pY29uLCBcIiBcIikuY29uY2F0KGljb25UeXBlcy5lcnJvciwgXCJcXFwiPjwvZGl2PlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5pY29uLCBcIiBcIikuY29uY2F0KGljb25UeXBlcy5xdWVzdGlvbiwgXCJcXFwiPjwvZGl2PlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5pY29uLCBcIiBcIikuY29uY2F0KGljb25UeXBlcy53YXJuaW5nLCBcIlxcXCI+PC9kaXY+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmljb24sIFwiIFwiKS5jb25jYXQoaWNvblR5cGVzLmluZm8sIFwiXFxcIj48L2Rpdj5cXG4gICAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuaWNvbiwgXCIgXCIpLmNvbmNhdChpY29uVHlwZXMuc3VjY2VzcywgXCJcXFwiPjwvZGl2PlxcbiAgICAgPGltZyBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5pbWFnZSwgXCJcXFwiIC8+XFxuICAgICA8aDIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMudGl0bGUsIFwiXFxcIiBpZD1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy50aXRsZSwgXCJcXFwiPjwvaDI+XFxuICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY2xvc2UsIFwiXFxcIj48L2J1dHRvbj5cXG4gICA8L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmNvbnRlbnQsIFwiXFxcIj5cXG4gICAgIDxkaXYgaWQ9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY29udGVudCwgXCJcXFwiIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzWydodG1sLWNvbnRhaW5lciddLCBcIlxcXCI+PC9kaXY+XFxuICAgICA8aW5wdXQgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuaW5wdXQsIFwiXFxcIiAvPlxcbiAgICAgPGlucHV0IHR5cGU9XFxcImZpbGVcXFwiIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmZpbGUsIFwiXFxcIiAvPlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYW5nZSwgXCJcXFwiPlxcbiAgICAgICA8aW5wdXQgdHlwZT1cXFwicmFuZ2VcXFwiIC8+XFxuICAgICAgIDxvdXRwdXQ+PC9vdXRwdXQ+XFxuICAgICA8L2Rpdj5cXG4gICAgIDxzZWxlY3QgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuc2VsZWN0LCBcIlxcXCI+PC9zZWxlY3Q+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnJhZGlvLCBcIlxcXCI+PC9kaXY+XFxuICAgICA8bGFiZWwgZm9yPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmNoZWNrYm94LCBcIlxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY2hlY2tib3gsIFwiXFxcIj5cXG4gICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiAvPlxcbiAgICAgICA8c3BhbiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5sYWJlbCwgXCJcXFwiPjwvc3Bhbj5cXG4gICAgIDwvbGFiZWw+XFxuICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMudGV4dGFyZWEsIFwiXFxcIj48L3RleHRhcmVhPlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlc1sndmFsaWRhdGlvbi1tZXNzYWdlJ10sIFwiXFxcIiBpZD1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlc1sndmFsaWRhdGlvbi1tZXNzYWdlJ10sIFwiXFxcIj48L2Rpdj5cXG4gICA8L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmFjdGlvbnMsIFwiXFxcIj5cXG4gICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jb25maXJtLCBcIlxcXCI+T0s8L2J1dHRvbj5cXG4gICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jYW5jZWwsIFwiXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG4gICA8L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmZvb3RlciwgXCJcXFwiPjwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXNbJ3RpbWVyLXByb2dyZXNzLWJhci1jb250YWluZXInXSwgXCJcXFwiPlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlc1sndGltZXItcHJvZ3Jlc3MtYmFyJ10sIFwiXFxcIj48L2Rpdj5cXG4gICA8L2Rpdj5cXG4gPC9kaXY+XFxuXCIpLnJlcGxhY2UoLyhefFxcbilcXHMqL2csICcnKTtcblxuICB2YXIgcmVzZXRPbGRDb250YWluZXIgPSBmdW5jdGlvbiByZXNldE9sZENvbnRhaW5lcigpIHtcbiAgICB2YXIgb2xkQ29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG5cbiAgICBpZiAoIW9sZENvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG9sZENvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG9sZENvbnRhaW5lcik7XG4gICAgcmVtb3ZlQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIFtzd2FsQ2xhc3Nlc1snbm8tYmFja2Ryb3AnXSwgc3dhbENsYXNzZXNbJ3RvYXN0LXNob3duJ10sIHN3YWxDbGFzc2VzWydoYXMtY29sdW1uJ11dKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICB2YXIgb2xkSW5wdXRWYWw7IC8vIElFMTEgd29ya2Fyb3VuZCwgc2VlICMxMTA5IGZvciBkZXRhaWxzXG5cbiAgdmFyIHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UgPSBmdW5jdGlvbiByZXNldFZhbGlkYXRpb25NZXNzYWdlKGUpIHtcbiAgICBpZiAoU3dhbC5pc1Zpc2libGUoKSAmJiBvbGRJbnB1dFZhbCAhPT0gZS50YXJnZXQudmFsdWUpIHtcbiAgICAgIFN3YWwucmVzZXRWYWxpZGF0aW9uTWVzc2FnZSgpO1xuICAgIH1cblxuICAgIG9sZElucHV0VmFsID0gZS50YXJnZXQudmFsdWU7XG4gIH07XG5cbiAgdmFyIGFkZElucHV0Q2hhbmdlTGlzdGVuZXJzID0gZnVuY3Rpb24gYWRkSW5wdXRDaGFuZ2VMaXN0ZW5lcnMoKSB7XG4gICAgdmFyIGNvbnRlbnQgPSBnZXRDb250ZW50KCk7XG4gICAgdmFyIGlucHV0ID0gZ2V0Q2hpbGRCeUNsYXNzKGNvbnRlbnQsIHN3YWxDbGFzc2VzLmlucHV0KTtcbiAgICB2YXIgZmlsZSA9IGdldENoaWxkQnlDbGFzcyhjb250ZW50LCBzd2FsQ2xhc3Nlcy5maWxlKTtcbiAgICB2YXIgcmFuZ2UgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLnJhbmdlLCBcIiBpbnB1dFwiKSk7XG4gICAgdmFyIHJhbmdlT3V0cHV0ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYW5nZSwgXCIgb3V0cHV0XCIpKTtcbiAgICB2YXIgc2VsZWN0ID0gZ2V0Q2hpbGRCeUNsYXNzKGNvbnRlbnQsIHN3YWxDbGFzc2VzLnNlbGVjdCk7XG4gICAgdmFyIGNoZWNrYm94ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5jaGVja2JveCwgXCIgaW5wdXRcIikpO1xuICAgIHZhciB0ZXh0YXJlYSA9IGdldENoaWxkQnlDbGFzcyhjb250ZW50LCBzd2FsQ2xhc3Nlcy50ZXh0YXJlYSk7XG4gICAgaW5wdXQub25pbnB1dCA9IHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgZmlsZS5vbmNoYW5nZSA9IHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgc2VsZWN0Lm9uY2hhbmdlID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZTtcbiAgICBjaGVja2JveC5vbmNoYW5nZSA9IHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgdGV4dGFyZWEub25pbnB1dCA9IHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2U7XG5cbiAgICByYW5nZS5vbmlucHV0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoZSk7XG4gICAgICByYW5nZU91dHB1dC52YWx1ZSA9IHJhbmdlLnZhbHVlO1xuICAgIH07XG5cbiAgICByYW5nZS5vbmNoYW5nZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXNldFZhbGlkYXRpb25NZXNzYWdlKGUpO1xuICAgICAgcmFuZ2UubmV4dFNpYmxpbmcudmFsdWUgPSByYW5nZS52YWx1ZTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpIDogdGFyZ2V0O1xuICB9O1xuXG4gIHZhciBzZXR1cEFjY2Vzc2liaWxpdHkgPSBmdW5jdGlvbiBzZXR1cEFjY2Vzc2liaWxpdHkocGFyYW1zKSB7XG4gICAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCBwYXJhbXMudG9hc3QgPyAnYWxlcnQnIDogJ2RpYWxvZycpO1xuICAgIHBvcHVwLnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgcGFyYW1zLnRvYXN0ID8gJ3BvbGl0ZScgOiAnYXNzZXJ0aXZlJyk7XG5cbiAgICBpZiAoIXBhcmFtcy50b2FzdCkge1xuICAgICAgcG9wdXAuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgJ3RydWUnKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHNldHVwUlRMID0gZnVuY3Rpb24gc2V0dXBSVEwodGFyZ2V0RWxlbWVudCkge1xuICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXRFbGVtZW50KS5kaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgICBhZGRDbGFzcyhnZXRDb250YWluZXIoKSwgc3dhbENsYXNzZXMucnRsKTtcbiAgICB9XG4gIH07XG4gIC8qXG4gICAqIEFkZCBtb2RhbCArIGJhY2tkcm9wIHRvIERPTVxuICAgKi9cblxuXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gaW5pdChwYXJhbXMpIHtcbiAgICAvLyBDbGVhbiB1cCB0aGUgb2xkIHBvcHVwIGNvbnRhaW5lciBpZiBpdCBleGlzdHNcbiAgICB2YXIgb2xkQ29udGFpbmVyRXhpc3RlZCA9IHJlc2V0T2xkQ29udGFpbmVyKCk7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5cbiAgICBpZiAoaXNOb2RlRW52KCkpIHtcbiAgICAgIGVycm9yKCdTd2VldEFsZXJ0MiByZXF1aXJlcyBkb2N1bWVudCB0byBpbml0aWFsaXplJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5jb250YWluZXI7XG5cbiAgICBpZiAob2xkQ29udGFpbmVyRXhpc3RlZCkge1xuICAgICAgYWRkQ2xhc3MoY29udGFpbmVyLCBzd2FsQ2xhc3Nlc1snbm8tdHJhbnNpdGlvbiddKTtcbiAgICB9XG5cbiAgICBzZXRJbm5lckh0bWwoY29udGFpbmVyLCBzd2VldEhUTUwpO1xuICAgIHZhciB0YXJnZXRFbGVtZW50ID0gZ2V0VGFyZ2V0KHBhcmFtcy50YXJnZXQpO1xuICAgIHRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBzZXR1cEFjY2Vzc2liaWxpdHkocGFyYW1zKTtcbiAgICBzZXR1cFJUTCh0YXJnZXRFbGVtZW50KTtcbiAgICBhZGRJbnB1dENoYW5nZUxpc3RlbmVycygpO1xuICB9O1xuXG4gIHZhciBwYXJzZUh0bWxUb0NvbnRhaW5lciA9IGZ1bmN0aW9uIHBhcnNlSHRtbFRvQ29udGFpbmVyKHBhcmFtLCB0YXJnZXQpIHtcbiAgICAvLyBET00gZWxlbWVudFxuICAgIGlmIChwYXJhbSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQocGFyYW0pOyAvLyBPYmplY3RcbiAgICB9IGVsc2UgaWYgKF90eXBlb2YocGFyYW0pID09PSAnb2JqZWN0Jykge1xuICAgICAgaGFuZGxlT2JqZWN0KHBhcmFtLCB0YXJnZXQpOyAvLyBQbGFpbiBzdHJpbmdcbiAgICB9IGVsc2UgaWYgKHBhcmFtKSB7XG4gICAgICBzZXRJbm5lckh0bWwodGFyZ2V0LCBwYXJhbSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVPYmplY3QgPSBmdW5jdGlvbiBoYW5kbGVPYmplY3QocGFyYW0sIHRhcmdldCkge1xuICAgIC8vIEpRdWVyeSBlbGVtZW50KHMpXG4gICAgaWYgKHBhcmFtLmpxdWVyeSkge1xuICAgICAgaGFuZGxlSnF1ZXJ5RWxlbSh0YXJnZXQsIHBhcmFtKTsgLy8gRm9yIG90aGVyIG9iamVjdHMgdXNlIHRoZWlyIHN0cmluZyByZXByZXNlbnRhdGlvblxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRJbm5lckh0bWwodGFyZ2V0LCBwYXJhbS50b1N0cmluZygpKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZUpxdWVyeUVsZW0gPSBmdW5jdGlvbiBoYW5kbGVKcXVlcnlFbGVtKHRhcmdldCwgZWxlbSkge1xuICAgIHRhcmdldC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgaWYgKDAgaW4gZWxlbSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IChpIGluIGVsZW0pOyBpKyspIHtcbiAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKGVsZW1baV0uY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKGVsZW0uY2xvbmVOb2RlKHRydWUpKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGFuaW1hdGlvbkVuZEV2ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFByZXZlbnQgcnVuIGluIE5vZGUgZW52XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoaXNOb2RlRW52KCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgdGVzdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmFyIHRyYW5zRW5kRXZlbnROYW1lcyA9IHtcbiAgICAgIFdlYmtpdEFuaW1hdGlvbjogJ3dlYmtpdEFuaW1hdGlvbkVuZCcsXG4gICAgICBPQW5pbWF0aW9uOiAnb0FuaW1hdGlvbkVuZCBvYW5pbWF0aW9uZW5kJyxcbiAgICAgIGFuaW1hdGlvbjogJ2FuaW1hdGlvbmVuZCdcbiAgICB9O1xuXG4gICAgZm9yICh2YXIgaSBpbiB0cmFuc0VuZEV2ZW50TmFtZXMpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodHJhbnNFbmRFdmVudE5hbWVzLCBpKSAmJiB0eXBlb2YgdGVzdEVsLnN0eWxlW2ldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gdHJhbnNFbmRFdmVudE5hbWVzW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSgpO1xuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9qcy9zcmMvbW9kYWwuanNcblxuICB2YXIgbWVhc3VyZVNjcm9sbGJhciA9IGZ1bmN0aW9uIG1lYXN1cmVTY3JvbGxiYXIoKSB7XG4gICAgdmFyIHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNjcm9sbERpdi5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlc1snc2Nyb2xsYmFyLW1lYXN1cmUnXTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdik7XG4gICAgdmFyIHNjcm9sbGJhcldpZHRoID0gc2Nyb2xsRGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgICByZXR1cm4gc2Nyb2xsYmFyV2lkdGg7XG4gIH07XG5cbiAgdmFyIHJlbmRlckFjdGlvbnMgPSBmdW5jdGlvbiByZW5kZXJBY3Rpb25zKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgICB2YXIgYWN0aW9ucyA9IGdldEFjdGlvbnMoKTtcbiAgICB2YXIgY29uZmlybUJ1dHRvbiA9IGdldENvbmZpcm1CdXR0b24oKTtcbiAgICB2YXIgY2FuY2VsQnV0dG9uID0gZ2V0Q2FuY2VsQnV0dG9uKCk7IC8vIEFjdGlvbnMgKGJ1dHRvbnMpIHdyYXBwZXJcblxuICAgIGlmICghcGFyYW1zLnNob3dDb25maXJtQnV0dG9uICYmICFwYXJhbXMuc2hvd0NhbmNlbEJ1dHRvbikge1xuICAgICAgaGlkZShhY3Rpb25zKTtcbiAgICB9IC8vIEN1c3RvbSBjbGFzc1xuXG5cbiAgICBhcHBseUN1c3RvbUNsYXNzKGFjdGlvbnMsIHBhcmFtcywgJ2FjdGlvbnMnKTsgLy8gUmVuZGVyIGNvbmZpcm0gYnV0dG9uXG5cbiAgICByZW5kZXJCdXR0b24oY29uZmlybUJ1dHRvbiwgJ2NvbmZpcm0nLCBwYXJhbXMpOyAvLyByZW5kZXIgQ2FuY2VsIEJ1dHRvblxuXG4gICAgcmVuZGVyQnV0dG9uKGNhbmNlbEJ1dHRvbiwgJ2NhbmNlbCcsIHBhcmFtcyk7XG5cbiAgICBpZiAocGFyYW1zLmJ1dHRvbnNTdHlsaW5nKSB7XG4gICAgICBoYW5kbGVCdXR0b25zU3R5bGluZyhjb25maXJtQnV0dG9uLCBjYW5jZWxCdXR0b24sIHBhcmFtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZUNsYXNzKFtjb25maXJtQnV0dG9uLCBjYW5jZWxCdXR0b25dLCBzd2FsQ2xhc3Nlcy5zdHlsZWQpO1xuICAgICAgY29uZmlybUJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb25maXJtQnV0dG9uLnN0eWxlLmJvcmRlckxlZnRDb2xvciA9IGNvbmZpcm1CdXR0b24uc3R5bGUuYm9yZGVyUmlnaHRDb2xvciA9ICcnO1xuICAgICAgY2FuY2VsQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNhbmNlbEJ1dHRvbi5zdHlsZS5ib3JkZXJMZWZ0Q29sb3IgPSBjYW5jZWxCdXR0b24uc3R5bGUuYm9yZGVyUmlnaHRDb2xvciA9ICcnO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMucmV2ZXJzZUJ1dHRvbnMpIHtcbiAgICAgIGNvbmZpcm1CdXR0b24ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY2FuY2VsQnV0dG9uLCBjb25maXJtQnV0dG9uKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gaGFuZGxlQnV0dG9uc1N0eWxpbmcoY29uZmlybUJ1dHRvbiwgY2FuY2VsQnV0dG9uLCBwYXJhbXMpIHtcbiAgICBhZGRDbGFzcyhbY29uZmlybUJ1dHRvbiwgY2FuY2VsQnV0dG9uXSwgc3dhbENsYXNzZXMuc3R5bGVkKTsgLy8gQnV0dG9ucyBiYWNrZ3JvdW5kIGNvbG9yc1xuXG4gICAgaWYgKHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3IpIHtcbiAgICAgIGNvbmZpcm1CdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmNvbmZpcm1CdXR0b25Db2xvcjtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmNhbmNlbEJ1dHRvbkNvbG9yKSB7XG4gICAgICBjYW5jZWxCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmNhbmNlbEJ1dHRvbkNvbG9yO1xuICAgIH0gLy8gTG9hZGluZyBzdGF0ZVxuXG5cbiAgICBpZiAoIWlzTG9hZGluZygpKSB7XG4gICAgICB2YXIgY29uZmlybUJ1dHRvbkJhY2tncm91bmRDb2xvciA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNvbmZpcm1CdXR0b24pLmdldFByb3BlcnR5VmFsdWUoJ2JhY2tncm91bmQtY29sb3InKTtcbiAgICAgIGNvbmZpcm1CdXR0b24uc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gY29uZmlybUJ1dHRvbkJhY2tncm91bmRDb2xvcjtcbiAgICAgIGNvbmZpcm1CdXR0b24uc3R5bGUuYm9yZGVyUmlnaHRDb2xvciA9IGNvbmZpcm1CdXR0b25CYWNrZ3JvdW5kQ29sb3I7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyQnV0dG9uKGJ1dHRvbiwgYnV0dG9uVHlwZSwgcGFyYW1zKSB7XG4gICAgdG9nZ2xlKGJ1dHRvbiwgcGFyYW1zW1wic2hvd1wiLmNvbmNhdChjYXBpdGFsaXplRmlyc3RMZXR0ZXIoYnV0dG9uVHlwZSksIFwiQnV0dG9uXCIpXSwgJ2lubGluZS1ibG9jaycpO1xuICAgIHNldElubmVySHRtbChidXR0b24sIHBhcmFtc1tcIlwiLmNvbmNhdChidXR0b25UeXBlLCBcIkJ1dHRvblRleHRcIildKTsgLy8gU2V0IGNhcHRpb24gdGV4dFxuXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHBhcmFtc1tcIlwiLmNvbmNhdChidXR0b25UeXBlLCBcIkJ1dHRvbkFyaWFMYWJlbFwiKV0pOyAvLyBBUklBIGxhYmVsXG4gICAgLy8gQWRkIGJ1dHRvbnMgY3VzdG9tIGNsYXNzZXNcblxuICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlc1tidXR0b25UeXBlXTtcbiAgICBhcHBseUN1c3RvbUNsYXNzKGJ1dHRvbiwgcGFyYW1zLCBcIlwiLmNvbmNhdChidXR0b25UeXBlLCBcIkJ1dHRvblwiKSk7XG4gICAgYWRkQ2xhc3MoYnV0dG9uLCBwYXJhbXNbXCJcIi5jb25jYXQoYnV0dG9uVHlwZSwgXCJCdXR0b25DbGFzc1wiKV0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQmFja2Ryb3BQYXJhbShjb250YWluZXIsIGJhY2tkcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBiYWNrZHJvcCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kID0gYmFja2Ryb3A7XG4gICAgfSBlbHNlIGlmICghYmFja2Ryb3ApIHtcbiAgICAgIGFkZENsYXNzKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldLCBzd2FsQ2xhc3Nlc1snbm8tYmFja2Ryb3AnXSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUG9zaXRpb25QYXJhbShjb250YWluZXIsIHBvc2l0aW9uKSB7XG4gICAgaWYgKHBvc2l0aW9uIGluIHN3YWxDbGFzc2VzKSB7XG4gICAgICBhZGRDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzW3Bvc2l0aW9uXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdhcm4oJ1RoZSBcInBvc2l0aW9uXCIgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZCwgZGVmYXVsdGluZyB0byBcImNlbnRlclwiJyk7XG4gICAgICBhZGRDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzLmNlbnRlcik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlR3Jvd1BhcmFtKGNvbnRhaW5lciwgZ3Jvdykge1xuICAgIGlmIChncm93ICYmIHR5cGVvZiBncm93ID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIGdyb3dDbGFzcyA9IFwiZ3Jvdy1cIi5jb25jYXQoZ3Jvdyk7XG5cbiAgICAgIGlmIChncm93Q2xhc3MgaW4gc3dhbENsYXNzZXMpIHtcbiAgICAgICAgYWRkQ2xhc3MoY29udGFpbmVyLCBzd2FsQ2xhc3Nlc1tncm93Q2xhc3NdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgcmVuZGVyQ29udGFpbmVyID0gZnVuY3Rpb24gcmVuZGVyQ29udGFpbmVyKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG5cbiAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGhhbmRsZUJhY2tkcm9wUGFyYW0oY29udGFpbmVyLCBwYXJhbXMuYmFja2Ryb3ApO1xuXG4gICAgaWYgKCFwYXJhbXMuYmFja2Ryb3AgJiYgcGFyYW1zLmFsbG93T3V0c2lkZUNsaWNrKSB7XG4gICAgICB3YXJuKCdcImFsbG93T3V0c2lkZUNsaWNrXCIgcGFyYW1ldGVyIHJlcXVpcmVzIGBiYWNrZHJvcGAgcGFyYW1ldGVyIHRvIGJlIHNldCB0byBgdHJ1ZWAnKTtcbiAgICB9XG5cbiAgICBoYW5kbGVQb3NpdGlvblBhcmFtKGNvbnRhaW5lciwgcGFyYW1zLnBvc2l0aW9uKTtcbiAgICBoYW5kbGVHcm93UGFyYW0oY29udGFpbmVyLCBwYXJhbXMuZ3Jvdyk7IC8vIEN1c3RvbSBjbGFzc1xuXG4gICAgYXBwbHlDdXN0b21DbGFzcyhjb250YWluZXIsIHBhcmFtcywgJ2NvbnRhaW5lcicpOyAvLyBTZXQgcXVldWUgc3RlcCBhdHRyaWJ1dGUgZm9yIGdldFF1ZXVlU3RlcCgpIG1ldGhvZFxuXG4gICAgdmFyIHF1ZXVlU3RlcCA9IGRvY3VtZW50LmJvZHkuZ2V0QXR0cmlidXRlKCdkYXRhLXN3YWwyLXF1ZXVlLXN0ZXAnKTtcblxuICAgIGlmIChxdWV1ZVN0ZXApIHtcbiAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcXVldWUtc3RlcCcsIHF1ZXVlU3RlcCk7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zd2FsMi1xdWV1ZS1zdGVwJyk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBUaGlzIG1vZHVsZSBjb250YWludHMgYFdlYWtNYXBgcyBmb3IgZWFjaCBlZmZlY3RpdmVseS1cInByaXZhdGUgIHByb3BlcnR5XCIgdGhhdCBhIGBTd2FsYCBoYXMuXG4gICAqIEZvciBleGFtcGxlLCB0byBzZXQgdGhlIHByaXZhdGUgcHJvcGVydHkgXCJmb29cIiBvZiBgdGhpc2AgdG8gXCJiYXJcIiwgeW91IGNhbiBgcHJpdmF0ZVByb3BzLmZvby5zZXQodGhpcywgJ2JhcicpYFxuICAgKiBUaGlzIGlzIHRoZSBhcHByb2FjaCB0aGF0IEJhYmVsIHdpbGwgcHJvYmFibHkgdGFrZSB0byBpbXBsZW1lbnQgcHJpdmF0ZSBtZXRob2RzL2ZpZWxkc1xuICAgKiAgIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByaXZhdGUtbWV0aG9kc1xuICAgKiAgIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9wdWxsLzc1NTVcbiAgICogT25jZSB3ZSBoYXZlIHRoZSBjaGFuZ2VzIGZyb20gdGhhdCBQUiBpbiBCYWJlbCwgYW5kIG91ciBjb3JlIGNsYXNzIGZpdHMgcmVhc29uYWJsZSBpbiAqb25lIG1vZHVsZSpcbiAgICogICB0aGVuIHdlIGNhbiB1c2UgdGhhdCBsYW5ndWFnZSBmZWF0dXJlLlxuICAgKi9cbiAgdmFyIHByaXZhdGVQcm9wcyA9IHtcbiAgICBwcm9taXNlOiBuZXcgV2Vha01hcCgpLFxuICAgIGlubmVyUGFyYW1zOiBuZXcgV2Vha01hcCgpLFxuICAgIGRvbUNhY2hlOiBuZXcgV2Vha01hcCgpXG4gIH07XG5cbiAgdmFyIGlucHV0VHlwZXMgPSBbJ2lucHV0JywgJ2ZpbGUnLCAncmFuZ2UnLCAnc2VsZWN0JywgJ3JhZGlvJywgJ2NoZWNrYm94JywgJ3RleHRhcmVhJ107XG4gIHZhciByZW5kZXJJbnB1dCA9IGZ1bmN0aW9uIHJlbmRlcklucHV0KGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgICB2YXIgY29udGVudCA9IGdldENvbnRlbnQoKTtcbiAgICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlKTtcbiAgICB2YXIgcmVyZW5kZXIgPSAhaW5uZXJQYXJhbXMgfHwgcGFyYW1zLmlucHV0ICE9PSBpbm5lclBhcmFtcy5pbnB1dDtcbiAgICBpbnB1dFR5cGVzLmZvckVhY2goZnVuY3Rpb24gKGlucHV0VHlwZSkge1xuICAgICAgdmFyIGlucHV0Q2xhc3MgPSBzd2FsQ2xhc3Nlc1tpbnB1dFR5cGVdO1xuICAgICAgdmFyIGlucHV0Q29udGFpbmVyID0gZ2V0Q2hpbGRCeUNsYXNzKGNvbnRlbnQsIGlucHV0Q2xhc3MpOyAvLyBzZXQgYXR0cmlidXRlc1xuXG4gICAgICBzZXRBdHRyaWJ1dGVzKGlucHV0VHlwZSwgcGFyYW1zLmlucHV0QXR0cmlidXRlcyk7IC8vIHNldCBjbGFzc1xuXG4gICAgICBpbnB1dENvbnRhaW5lci5jbGFzc05hbWUgPSBpbnB1dENsYXNzO1xuXG4gICAgICBpZiAocmVyZW5kZXIpIHtcbiAgICAgICAgaGlkZShpbnB1dENvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAocGFyYW1zLmlucHV0KSB7XG4gICAgICBpZiAocmVyZW5kZXIpIHtcbiAgICAgICAgc2hvd0lucHV0KHBhcmFtcyk7XG4gICAgICB9IC8vIHNldCBjdXN0b20gY2xhc3NcblxuXG4gICAgICBzZXRDdXN0b21DbGFzcyhwYXJhbXMpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgc2hvd0lucHV0ID0gZnVuY3Rpb24gc2hvd0lucHV0KHBhcmFtcykge1xuICAgIGlmICghcmVuZGVySW5wdXRUeXBlW3BhcmFtcy5pbnB1dF0pIHtcbiAgICAgIHJldHVybiBlcnJvcihcIlVuZXhwZWN0ZWQgdHlwZSBvZiBpbnB1dCEgRXhwZWN0ZWQgXFxcInRleHRcXFwiLCBcXFwiZW1haWxcXFwiLCBcXFwicGFzc3dvcmRcXFwiLCBcXFwibnVtYmVyXFxcIiwgXFxcInRlbFxcXCIsIFxcXCJzZWxlY3RcXFwiLCBcXFwicmFkaW9cXFwiLCBcXFwiY2hlY2tib3hcXFwiLCBcXFwidGV4dGFyZWFcXFwiLCBcXFwiZmlsZVxcXCIgb3IgXFxcInVybFxcXCIsIGdvdCBcXFwiXCIuY29uY2F0KHBhcmFtcy5pbnB1dCwgXCJcXFwiXCIpKTtcbiAgICB9XG5cbiAgICB2YXIgaW5wdXRDb250YWluZXIgPSBnZXRJbnB1dENvbnRhaW5lcihwYXJhbXMuaW5wdXQpO1xuICAgIHZhciBpbnB1dCA9IHJlbmRlcklucHV0VHlwZVtwYXJhbXMuaW5wdXRdKGlucHV0Q29udGFpbmVyLCBwYXJhbXMpO1xuICAgIHNob3coaW5wdXQpOyAvLyBpbnB1dCBhdXRvZm9jdXNcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgZm9jdXNJbnB1dChpbnB1dCk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHJlbW92ZUF0dHJpYnV0ZXMgPSBmdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGVzKGlucHV0KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dC5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgYXR0ck5hbWUgPSBpbnB1dC5hdHRyaWJ1dGVzW2ldLm5hbWU7XG5cbiAgICAgIGlmICghKFsndHlwZScsICd2YWx1ZScsICdzdHlsZSddLmluZGV4T2YoYXR0ck5hbWUpICE9PSAtMSkpIHtcbiAgICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdmFyIHNldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGlucHV0VHlwZSwgaW5wdXRBdHRyaWJ1dGVzKSB7XG4gICAgdmFyIGlucHV0ID0gZ2V0SW5wdXQoZ2V0Q29udGVudCgpLCBpbnB1dFR5cGUpO1xuXG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJlbW92ZUF0dHJpYnV0ZXMoaW5wdXQpO1xuXG4gICAgZm9yICh2YXIgYXR0ciBpbiBpbnB1dEF0dHJpYnV0ZXMpIHtcbiAgICAgIC8vIERvIG5vdCBzZXQgYSBwbGFjZWhvbGRlciBmb3IgPGlucHV0IHR5cGU9XCJyYW5nZVwiPlxuICAgICAgLy8gaXQnbGwgY3Jhc2ggRWRnZSwgIzEyOThcbiAgICAgIGlmIChpbnB1dFR5cGUgPT09ICdyYW5nZScgJiYgYXR0ciA9PT0gJ3BsYWNlaG9sZGVyJykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKGF0dHIsIGlucHV0QXR0cmlidXRlc1thdHRyXSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBzZXRDdXN0b21DbGFzcyA9IGZ1bmN0aW9uIHNldEN1c3RvbUNsYXNzKHBhcmFtcykge1xuICAgIHZhciBpbnB1dENvbnRhaW5lciA9IGdldElucHV0Q29udGFpbmVyKHBhcmFtcy5pbnB1dCk7XG5cbiAgICBpZiAocGFyYW1zLmN1c3RvbUNsYXNzKSB7XG4gICAgICBhZGRDbGFzcyhpbnB1dENvbnRhaW5lciwgcGFyYW1zLmN1c3RvbUNsYXNzLmlucHV0KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHNldElucHV0UGxhY2Vob2xkZXIgPSBmdW5jdGlvbiBzZXRJbnB1dFBsYWNlaG9sZGVyKGlucHV0LCBwYXJhbXMpIHtcbiAgICBpZiAoIWlucHV0LnBsYWNlaG9sZGVyIHx8IHBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyKSB7XG4gICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IHBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyO1xuICAgIH1cbiAgfTtcblxuICB2YXIgZ2V0SW5wdXRDb250YWluZXIgPSBmdW5jdGlvbiBnZXRJbnB1dENvbnRhaW5lcihpbnB1dFR5cGUpIHtcbiAgICB2YXIgaW5wdXRDbGFzcyA9IHN3YWxDbGFzc2VzW2lucHV0VHlwZV0gPyBzd2FsQ2xhc3Nlc1tpbnB1dFR5cGVdIDogc3dhbENsYXNzZXMuaW5wdXQ7XG4gICAgcmV0dXJuIGdldENoaWxkQnlDbGFzcyhnZXRDb250ZW50KCksIGlucHV0Q2xhc3MpO1xuICB9O1xuXG4gIHZhciByZW5kZXJJbnB1dFR5cGUgPSB7fTtcblxuICByZW5kZXJJbnB1dFR5cGUudGV4dCA9IHJlbmRlcklucHV0VHlwZS5lbWFpbCA9IHJlbmRlcklucHV0VHlwZS5wYXNzd29yZCA9IHJlbmRlcklucHV0VHlwZS5udW1iZXIgPSByZW5kZXJJbnB1dFR5cGUudGVsID0gcmVuZGVySW5wdXRUeXBlLnVybCA9IGZ1bmN0aW9uIChpbnB1dCwgcGFyYW1zKSB7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMuaW5wdXRWYWx1ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHBhcmFtcy5pbnB1dFZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgaW5wdXQudmFsdWUgPSBwYXJhbXMuaW5wdXRWYWx1ZTtcbiAgICB9IGVsc2UgaWYgKCFpc1Byb21pc2UocGFyYW1zLmlucHV0VmFsdWUpKSB7XG4gICAgICB3YXJuKFwiVW5leHBlY3RlZCB0eXBlIG9mIGlucHV0VmFsdWUhIEV4cGVjdGVkIFxcXCJzdHJpbmdcXFwiLCBcXFwibnVtYmVyXFxcIiBvciBcXFwiUHJvbWlzZVxcXCIsIGdvdCBcXFwiXCIuY29uY2F0KF90eXBlb2YocGFyYW1zLmlucHV0VmFsdWUpLCBcIlxcXCJcIikpO1xuICAgIH1cblxuICAgIHNldElucHV0UGxhY2Vob2xkZXIoaW5wdXQsIHBhcmFtcyk7XG4gICAgaW5wdXQudHlwZSA9IHBhcmFtcy5pbnB1dDtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH07XG5cbiAgcmVuZGVySW5wdXRUeXBlLmZpbGUgPSBmdW5jdGlvbiAoaW5wdXQsIHBhcmFtcykge1xuICAgIHNldElucHV0UGxhY2Vob2xkZXIoaW5wdXQsIHBhcmFtcyk7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9O1xuXG4gIHJlbmRlcklucHV0VHlwZS5yYW5nZSA9IGZ1bmN0aW9uIChyYW5nZSwgcGFyYW1zKSB7XG4gICAgdmFyIHJhbmdlSW5wdXQgPSByYW5nZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgIHZhciByYW5nZU91dHB1dCA9IHJhbmdlLnF1ZXJ5U2VsZWN0b3IoJ291dHB1dCcpO1xuICAgIHJhbmdlSW5wdXQudmFsdWUgPSBwYXJhbXMuaW5wdXRWYWx1ZTtcbiAgICByYW5nZUlucHV0LnR5cGUgPSBwYXJhbXMuaW5wdXQ7XG4gICAgcmFuZ2VPdXRwdXQudmFsdWUgPSBwYXJhbXMuaW5wdXRWYWx1ZTtcbiAgICByZXR1cm4gcmFuZ2U7XG4gIH07XG5cbiAgcmVuZGVySW5wdXRUeXBlLnNlbGVjdCA9IGZ1bmN0aW9uIChzZWxlY3QsIHBhcmFtcykge1xuICAgIHNlbGVjdC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgaWYgKHBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyKSB7XG4gICAgICB2YXIgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIHNldElubmVySHRtbChwbGFjZWhvbGRlciwgcGFyYW1zLmlucHV0UGxhY2Vob2xkZXIpO1xuICAgICAgcGxhY2Vob2xkZXIudmFsdWUgPSAnJztcbiAgICAgIHBsYWNlaG9sZGVyLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHBsYWNlaG9sZGVyLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChwbGFjZWhvbGRlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGVjdDtcbiAgfTtcblxuICByZW5kZXJJbnB1dFR5cGUucmFkaW8gPSBmdW5jdGlvbiAocmFkaW8pIHtcbiAgICByYWRpby50ZXh0Q29udGVudCA9ICcnO1xuICAgIHJldHVybiByYWRpbztcbiAgfTtcblxuICByZW5kZXJJbnB1dFR5cGUuY2hlY2tib3ggPSBmdW5jdGlvbiAoY2hlY2tib3hDb250YWluZXIsIHBhcmFtcykge1xuICAgIHZhciBjaGVja2JveCA9IGdldElucHV0KGdldENvbnRlbnQoKSwgJ2NoZWNrYm94Jyk7XG4gICAgY2hlY2tib3gudmFsdWUgPSAxO1xuICAgIGNoZWNrYm94LmlkID0gc3dhbENsYXNzZXMuY2hlY2tib3g7XG4gICAgY2hlY2tib3guY2hlY2tlZCA9IEJvb2xlYW4ocGFyYW1zLmlucHV0VmFsdWUpO1xuICAgIHZhciBsYWJlbCA9IGNoZWNrYm94Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcbiAgICBzZXRJbm5lckh0bWwobGFiZWwsIHBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyKTtcbiAgICByZXR1cm4gY2hlY2tib3hDb250YWluZXI7XG4gIH07XG5cbiAgcmVuZGVySW5wdXRUeXBlLnRleHRhcmVhID0gZnVuY3Rpb24gKHRleHRhcmVhLCBwYXJhbXMpIHtcbiAgICB0ZXh0YXJlYS52YWx1ZSA9IHBhcmFtcy5pbnB1dFZhbHVlO1xuICAgIHNldElucHV0UGxhY2Vob2xkZXIodGV4dGFyZWEsIHBhcmFtcyk7XG5cbiAgICBpZiAoJ011dGF0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdykge1xuICAgICAgLy8gIzE2OTlcbiAgICAgIHZhciBpbml0aWFsUG9wdXBXaWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGdldFBvcHVwKCkpLndpZHRoKTtcbiAgICAgIHZhciBwb3B1cFBhZGRpbmcgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShnZXRQb3B1cCgpKS5wYWRkaW5nTGVmdCkgKyBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShnZXRQb3B1cCgpKS5wYWRkaW5nUmlnaHQpO1xuXG4gICAgICB2YXIgb3V0cHV0c2l6ZSA9IGZ1bmN0aW9uIG91dHB1dHNpemUoKSB7XG4gICAgICAgIHZhciBjb250ZW50V2lkdGggPSB0ZXh0YXJlYS5vZmZzZXRXaWR0aCArIHBvcHVwUGFkZGluZztcblxuICAgICAgICBpZiAoY29udGVudFdpZHRoID4gaW5pdGlhbFBvcHVwV2lkdGgpIHtcbiAgICAgICAgICBnZXRQb3B1cCgpLnN0eWxlLndpZHRoID0gXCJcIi5jb25jYXQoY29udGVudFdpZHRoLCBcInB4XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdldFBvcHVwKCkuc3R5bGUud2lkdGggPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBuZXcgTXV0YXRpb25PYnNlcnZlcihvdXRwdXRzaXplKS5vYnNlcnZlKHRleHRhcmVhLCB7XG4gICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgIGF0dHJpYnV0ZUZpbHRlcjogWydzdHlsZSddXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dGFyZWE7XG4gIH07XG5cbiAgdmFyIHJlbmRlckNvbnRlbnQgPSBmdW5jdGlvbiByZW5kZXJDb250ZW50KGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgICB2YXIgY29udGVudCA9IGdldENvbnRlbnQoKS5xdWVyeVNlbGVjdG9yKFwiI1wiLmNvbmNhdChzd2FsQ2xhc3Nlcy5jb250ZW50KSk7IC8vIENvbnRlbnQgYXMgSFRNTFxuXG4gICAgaWYgKHBhcmFtcy5odG1sKSB7XG4gICAgICBwYXJzZUh0bWxUb0NvbnRhaW5lcihwYXJhbXMuaHRtbCwgY29udGVudCk7XG4gICAgICBzaG93KGNvbnRlbnQsICdibG9jaycpOyAvLyBDb250ZW50IGFzIHBsYWluIHRleHRcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy50ZXh0KSB7XG4gICAgICBjb250ZW50LnRleHRDb250ZW50ID0gcGFyYW1zLnRleHQ7XG4gICAgICBzaG93KGNvbnRlbnQsICdibG9jaycpOyAvLyBObyBjb250ZW50XG4gICAgfSBlbHNlIHtcbiAgICAgIGhpZGUoY29udGVudCk7XG4gICAgfVxuXG4gICAgcmVuZGVySW5wdXQoaW5zdGFuY2UsIHBhcmFtcyk7IC8vIEN1c3RvbSBjbGFzc1xuXG4gICAgYXBwbHlDdXN0b21DbGFzcyhnZXRDb250ZW50KCksIHBhcmFtcywgJ2NvbnRlbnQnKTtcbiAgfTtcblxuICB2YXIgcmVuZGVyRm9vdGVyID0gZnVuY3Rpb24gcmVuZGVyRm9vdGVyKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgICB2YXIgZm9vdGVyID0gZ2V0Rm9vdGVyKCk7XG4gICAgdG9nZ2xlKGZvb3RlciwgcGFyYW1zLmZvb3Rlcik7XG5cbiAgICBpZiAocGFyYW1zLmZvb3Rlcikge1xuICAgICAgcGFyc2VIdG1sVG9Db250YWluZXIocGFyYW1zLmZvb3RlciwgZm9vdGVyKTtcbiAgICB9IC8vIEN1c3RvbSBjbGFzc1xuXG5cbiAgICBhcHBseUN1c3RvbUNsYXNzKGZvb3RlciwgcGFyYW1zLCAnZm9vdGVyJyk7XG4gIH07XG5cbiAgdmFyIHJlbmRlckNsb3NlQnV0dG9uID0gZnVuY3Rpb24gcmVuZGVyQ2xvc2VCdXR0b24oaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHZhciBjbG9zZUJ1dHRvbiA9IGdldENsb3NlQnV0dG9uKCk7XG4gICAgc2V0SW5uZXJIdG1sKGNsb3NlQnV0dG9uLCBwYXJhbXMuY2xvc2VCdXR0b25IdG1sKTsgLy8gQ3VzdG9tIGNsYXNzXG5cbiAgICBhcHBseUN1c3RvbUNsYXNzKGNsb3NlQnV0dG9uLCBwYXJhbXMsICdjbG9zZUJ1dHRvbicpO1xuICAgIHRvZ2dsZShjbG9zZUJ1dHRvbiwgcGFyYW1zLnNob3dDbG9zZUJ1dHRvbik7XG4gICAgY2xvc2VCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgcGFyYW1zLmNsb3NlQnV0dG9uQXJpYUxhYmVsKTtcbiAgfTtcblxuICB2YXIgcmVuZGVySWNvbiA9IGZ1bmN0aW9uIHJlbmRlckljb24oaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpOyAvLyBpZiB0aGUgZ2l2ZSBpY29uIGFscmVhZHkgcmVuZGVyZWQsIGFwcGx5IHRoZSBjdXN0b20gY2xhc3Mgd2l0aG91dCByZS1yZW5kZXJpbmcgdGhlIGljb25cblxuICAgIGlmIChpbm5lclBhcmFtcyAmJiBwYXJhbXMuaWNvbiA9PT0gaW5uZXJQYXJhbXMuaWNvbiAmJiBnZXRJY29uKCkpIHtcbiAgICAgIGFwcGx5Q3VzdG9tQ2xhc3MoZ2V0SWNvbigpLCBwYXJhbXMsICdpY29uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaGlkZUFsbEljb25zKCk7XG5cbiAgICBpZiAoIXBhcmFtcy5pY29uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKE9iamVjdC5rZXlzKGljb25UeXBlcykuaW5kZXhPZihwYXJhbXMuaWNvbikgIT09IC0xKSB7XG4gICAgICB2YXIgaWNvbiA9IGVsZW1lbnRCeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5pY29uLCBcIi5cIikuY29uY2F0KGljb25UeXBlc1twYXJhbXMuaWNvbl0pKTtcbiAgICAgIHNob3coaWNvbik7IC8vIEN1c3RvbSBvciBkZWZhdWx0IGNvbnRlbnRcblxuICAgICAgc2V0Q29udGVudChpY29uLCBwYXJhbXMpO1xuICAgICAgYWRqdXN0U3VjY2Vzc0ljb25CYWNrZ291bmRDb2xvcigpOyAvLyBDdXN0b20gY2xhc3NcblxuICAgICAgYXBwbHlDdXN0b21DbGFzcyhpY29uLCBwYXJhbXMsICdpY29uJyk7IC8vIEFuaW1hdGUgaWNvblxuXG4gICAgICBhZGRDbGFzcyhpY29uLCBwYXJhbXMuc2hvd0NsYXNzLmljb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJvcihcIlVua25vd24gaWNvbiEgRXhwZWN0ZWQgXFxcInN1Y2Nlc3NcXFwiLCBcXFwiZXJyb3JcXFwiLCBcXFwid2FybmluZ1xcXCIsIFxcXCJpbmZvXFxcIiBvciBcXFwicXVlc3Rpb25cXFwiLCBnb3QgXFxcIlwiLmNvbmNhdChwYXJhbXMuaWNvbiwgXCJcXFwiXCIpKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhpZGVBbGxJY29ucyA9IGZ1bmN0aW9uIGhpZGVBbGxJY29ucygpIHtcbiAgICB2YXIgaWNvbnMgPSBnZXRJY29ucygpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpY29ucy5sZW5ndGg7IGkrKykge1xuICAgICAgaGlkZShpY29uc1tpXSk7XG4gICAgfVxuICB9OyAvLyBBZGp1c3Qgc3VjY2VzcyBpY29uIGJhY2tncm91bmQgY29sb3IgdG8gbWF0Y2ggdGhlIHBvcHVwIGJhY2tncm91bmQgY29sb3JcblxuXG4gIHZhciBhZGp1c3RTdWNjZXNzSWNvbkJhY2tnb3VuZENvbG9yID0gZnVuY3Rpb24gYWRqdXN0U3VjY2Vzc0ljb25CYWNrZ291bmRDb2xvcigpIHtcbiAgICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIHZhciBwb3B1cEJhY2tncm91bmRDb2xvciA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBvcHVwKS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XG4gICAgdmFyIHN1Y2Nlc3NJY29uUGFydHMgPSBwb3B1cC5xdWVyeVNlbGVjdG9yQWxsKCdbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV0sIC5zd2FsMi1zdWNjZXNzLWZpeCcpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdWNjZXNzSWNvblBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzdWNjZXNzSWNvblBhcnRzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBvcHVwQmFja2dyb3VuZENvbG9yO1xuICAgIH1cbiAgfTtcblxuICB2YXIgc2V0Q29udGVudCA9IGZ1bmN0aW9uIHNldENvbnRlbnQoaWNvbiwgcGFyYW1zKSB7XG4gICAgaWNvbi50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgaWYgKHBhcmFtcy5pY29uSHRtbCkge1xuICAgICAgc2V0SW5uZXJIdG1sKGljb24sIGljb25Db250ZW50KHBhcmFtcy5pY29uSHRtbCkpO1xuICAgIH0gZWxzZSBpZiAocGFyYW1zLmljb24gPT09ICdzdWNjZXNzJykge1xuICAgICAgc2V0SW5uZXJIdG1sKGljb24sIFwiXFxuICAgICAgPGRpdiBjbGFzcz1cXFwic3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLWxlZnRcXFwiPjwvZGl2PlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJzd2FsMi1zdWNjZXNzLWxpbmUtdGlwXFxcIj48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJzd2FsMi1zdWNjZXNzLWxpbmUtbG9uZ1xcXCI+PC9zcGFuPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtcmluZ1xcXCI+PC9kaXY+IDxkaXYgY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtZml4XFxcIj48L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUtcmlnaHRcXFwiPjwvZGl2PlxcbiAgICBcIik7XG4gICAgfSBlbHNlIGlmIChwYXJhbXMuaWNvbiA9PT0gJ2Vycm9yJykge1xuICAgICAgc2V0SW5uZXJIdG1sKGljb24sIFwiXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcInN3YWwyLXgtbWFya1xcXCI+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwic3dhbDIteC1tYXJrLWxpbmUtbGVmdFxcXCI+PC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInN3YWwyLXgtbWFyay1saW5lLXJpZ2h0XFxcIj48L3NwYW4+XFxuICAgICAgPC9zcGFuPlxcbiAgICBcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBkZWZhdWx0SWNvbkh0bWwgPSB7XG4gICAgICAgIHF1ZXN0aW9uOiAnPycsXG4gICAgICAgIHdhcm5pbmc6ICchJyxcbiAgICAgICAgaW5mbzogJ2knXG4gICAgICB9O1xuICAgICAgc2V0SW5uZXJIdG1sKGljb24sIGljb25Db250ZW50KGRlZmF1bHRJY29uSHRtbFtwYXJhbXMuaWNvbl0pKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGljb25Db250ZW50ID0gZnVuY3Rpb24gaWNvbkNvbnRlbnQoY29udGVudCkge1xuICAgIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcIlwiLmNvbmNhdChzd2FsQ2xhc3Nlc1snaWNvbi1jb250ZW50J10sIFwiXFxcIj5cIikuY29uY2F0KGNvbnRlbnQsIFwiPC9kaXY+XCIpO1xuICB9O1xuXG4gIHZhciByZW5kZXJJbWFnZSA9IGZ1bmN0aW9uIHJlbmRlckltYWdlKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgICB2YXIgaW1hZ2UgPSBnZXRJbWFnZSgpO1xuXG4gICAgaWYgKCFwYXJhbXMuaW1hZ2VVcmwpIHtcbiAgICAgIHJldHVybiBoaWRlKGltYWdlKTtcbiAgICB9XG5cbiAgICBzaG93KGltYWdlLCAnJyk7IC8vIFNyYywgYWx0XG5cbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHBhcmFtcy5pbWFnZVVybCk7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCBwYXJhbXMuaW1hZ2VBbHQpOyAvLyBXaWR0aCwgaGVpZ2h0XG5cbiAgICBhcHBseU51bWVyaWNhbFN0eWxlKGltYWdlLCAnd2lkdGgnLCBwYXJhbXMuaW1hZ2VXaWR0aCk7XG4gICAgYXBwbHlOdW1lcmljYWxTdHlsZShpbWFnZSwgJ2hlaWdodCcsIHBhcmFtcy5pbWFnZUhlaWdodCk7IC8vIENsYXNzXG5cbiAgICBpbWFnZS5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5pbWFnZTtcbiAgICBhcHBseUN1c3RvbUNsYXNzKGltYWdlLCBwYXJhbXMsICdpbWFnZScpO1xuICB9O1xuXG4gIHZhciBjdXJyZW50U3RlcHMgPSBbXTtcbiAgLypcbiAgICogR2xvYmFsIGZ1bmN0aW9uIGZvciBjaGFpbmluZyBzd2VldEFsZXJ0IHBvcHVwc1xuICAgKi9cblxuICB2YXIgcXVldWUgPSBmdW5jdGlvbiBxdWV1ZShzdGVwcykge1xuICAgIHZhciBTd2FsID0gdGhpcztcbiAgICBjdXJyZW50U3RlcHMgPSBzdGVwcztcblxuICAgIHZhciByZXNldEFuZFJlc29sdmUgPSBmdW5jdGlvbiByZXNldEFuZFJlc29sdmUocmVzb2x2ZSwgdmFsdWUpIHtcbiAgICAgIGN1cnJlbnRTdGVwcyA9IFtdO1xuICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgfTtcblxuICAgIHZhciBxdWV1ZVJlc3VsdCA9IFtdO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgKGZ1bmN0aW9uIHN0ZXAoaSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKGkgPCBjdXJyZW50U3RlcHMubGVuZ3RoKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3dhbDItcXVldWUtc3RlcCcsIGkpO1xuICAgICAgICAgIFN3YWwuZmlyZShjdXJyZW50U3RlcHNbaV0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQudmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgIHF1ZXVlUmVzdWx0LnB1c2gocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgICAgc3RlcChpICsgMSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzZXRBbmRSZXNvbHZlKHJlc29sdmUsIHtcbiAgICAgICAgICAgICAgICBkaXNtaXNzOiByZXN1bHQuZGlzbWlzc1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNldEFuZFJlc29sdmUocmVzb2x2ZSwge1xuICAgICAgICAgICAgdmFsdWU6IHF1ZXVlUmVzdWx0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pKDApO1xuICAgIH0pO1xuICB9O1xuICAvKlxuICAgKiBHbG9iYWwgZnVuY3Rpb24gZm9yIGdldHRpbmcgdGhlIGluZGV4IG9mIGN1cnJlbnQgcG9wdXAgaW4gcXVldWVcbiAgICovXG5cbiAgdmFyIGdldFF1ZXVlU3RlcCA9IGZ1bmN0aW9uIGdldFF1ZXVlU3RlcCgpIHtcbiAgICByZXR1cm4gZ2V0Q29udGFpbmVyKCkgJiYgZ2V0Q29udGFpbmVyKCkuZ2V0QXR0cmlidXRlKCdkYXRhLXF1ZXVlLXN0ZXAnKTtcbiAgfTtcbiAgLypcbiAgICogR2xvYmFsIGZ1bmN0aW9uIGZvciBpbnNlcnRpbmcgYSBwb3B1cCB0byB0aGUgcXVldWVcbiAgICovXG5cbiAgdmFyIGluc2VydFF1ZXVlU3RlcCA9IGZ1bmN0aW9uIGluc2VydFF1ZXVlU3RlcChzdGVwLCBpbmRleCkge1xuICAgIGlmIChpbmRleCAmJiBpbmRleCA8IGN1cnJlbnRTdGVwcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBjdXJyZW50U3RlcHMuc3BsaWNlKGluZGV4LCAwLCBzdGVwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3VycmVudFN0ZXBzLnB1c2goc3RlcCk7XG4gIH07XG4gIC8qXG4gICAqIEdsb2JhbCBmdW5jdGlvbiBmb3IgZGVsZXRpbmcgYSBwb3B1cCBmcm9tIHRoZSBxdWV1ZVxuICAgKi9cblxuICB2YXIgZGVsZXRlUXVldWVTdGVwID0gZnVuY3Rpb24gZGVsZXRlUXVldWVTdGVwKGluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiBjdXJyZW50U3RlcHNbaW5kZXhdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY3VycmVudFN0ZXBzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBjcmVhdGVTdGVwRWxlbWVudCA9IGZ1bmN0aW9uIGNyZWF0ZVN0ZXBFbGVtZW50KHN0ZXApIHtcbiAgICB2YXIgc3RlcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBhZGRDbGFzcyhzdGVwRWwsIHN3YWxDbGFzc2VzWydwcm9ncmVzcy1zdGVwJ10pO1xuICAgIHNldElubmVySHRtbChzdGVwRWwsIHN0ZXApO1xuICAgIHJldHVybiBzdGVwRWw7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZUxpbmVFbGVtZW50ID0gZnVuY3Rpb24gY3JlYXRlTGluZUVsZW1lbnQocGFyYW1zKSB7XG4gICAgdmFyIGxpbmVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgYWRkQ2xhc3MobGluZUVsLCBzd2FsQ2xhc3Nlc1sncHJvZ3Jlc3Mtc3RlcC1saW5lJ10pO1xuXG4gICAgaWYgKHBhcmFtcy5wcm9ncmVzc1N0ZXBzRGlzdGFuY2UpIHtcbiAgICAgIGxpbmVFbC5zdHlsZS53aWR0aCA9IHBhcmFtcy5wcm9ncmVzc1N0ZXBzRGlzdGFuY2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpbmVFbDtcbiAgfTtcblxuICB2YXIgcmVuZGVyUHJvZ3Jlc3NTdGVwcyA9IGZ1bmN0aW9uIHJlbmRlclByb2dyZXNzU3RlcHMoaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHZhciBwcm9ncmVzc1N0ZXBzQ29udGFpbmVyID0gZ2V0UHJvZ3Jlc3NTdGVwcygpO1xuXG4gICAgaWYgKCFwYXJhbXMucHJvZ3Jlc3NTdGVwcyB8fCBwYXJhbXMucHJvZ3Jlc3NTdGVwcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBoaWRlKHByb2dyZXNzU3RlcHNDb250YWluZXIpO1xuICAgIH1cblxuICAgIHNob3cocHJvZ3Jlc3NTdGVwc0NvbnRhaW5lcik7XG4gICAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICAgIHZhciBjdXJyZW50UHJvZ3Jlc3NTdGVwID0gcGFyc2VJbnQocGFyYW1zLmN1cnJlbnRQcm9ncmVzc1N0ZXAgPT09IHVuZGVmaW5lZCA/IGdldFF1ZXVlU3RlcCgpIDogcGFyYW1zLmN1cnJlbnRQcm9ncmVzc1N0ZXApO1xuXG4gICAgaWYgKGN1cnJlbnRQcm9ncmVzc1N0ZXAgPj0gcGFyYW1zLnByb2dyZXNzU3RlcHMubGVuZ3RoKSB7XG4gICAgICB3YXJuKCdJbnZhbGlkIGN1cnJlbnRQcm9ncmVzc1N0ZXAgcGFyYW1ldGVyLCBpdCBzaG91bGQgYmUgbGVzcyB0aGFuIHByb2dyZXNzU3RlcHMubGVuZ3RoICcgKyAnKGN1cnJlbnRQcm9ncmVzc1N0ZXAgbGlrZSBKUyBhcnJheXMgc3RhcnRzIGZyb20gMCknKTtcbiAgICB9XG5cbiAgICBwYXJhbXMucHJvZ3Jlc3NTdGVwcy5mb3JFYWNoKGZ1bmN0aW9uIChzdGVwLCBpbmRleCkge1xuICAgICAgdmFyIHN0ZXBFbCA9IGNyZWF0ZVN0ZXBFbGVtZW50KHN0ZXApO1xuICAgICAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdGVwRWwpO1xuXG4gICAgICBpZiAoaW5kZXggPT09IGN1cnJlbnRQcm9ncmVzc1N0ZXApIHtcbiAgICAgICAgYWRkQ2xhc3Moc3RlcEVsLCBzd2FsQ2xhc3Nlc1snYWN0aXZlLXByb2dyZXNzLXN0ZXAnXSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCAhPT0gcGFyYW1zLnByb2dyZXNzU3RlcHMubGVuZ3RoIC0gMSkge1xuICAgICAgICB2YXIgbGluZUVsID0gY3JlYXRlTGluZUVsZW1lbnQocGFyYW1zKTtcbiAgICAgICAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5lRWwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHZhciByZW5kZXJUaXRsZSA9IGZ1bmN0aW9uIHJlbmRlclRpdGxlKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgICB2YXIgdGl0bGUgPSBnZXRUaXRsZSgpO1xuICAgIHRvZ2dsZSh0aXRsZSwgcGFyYW1zLnRpdGxlIHx8IHBhcmFtcy50aXRsZVRleHQpO1xuXG4gICAgaWYgKHBhcmFtcy50aXRsZSkge1xuICAgICAgcGFyc2VIdG1sVG9Db250YWluZXIocGFyYW1zLnRpdGxlLCB0aXRsZSk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy50aXRsZVRleHQpIHtcbiAgICAgIHRpdGxlLmlubmVyVGV4dCA9IHBhcmFtcy50aXRsZVRleHQ7XG4gICAgfSAvLyBDdXN0b20gY2xhc3NcblxuXG4gICAgYXBwbHlDdXN0b21DbGFzcyh0aXRsZSwgcGFyYW1zLCAndGl0bGUnKTtcbiAgfTtcblxuICB2YXIgcmVuZGVySGVhZGVyID0gZnVuY3Rpb24gcmVuZGVySGVhZGVyKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgICB2YXIgaGVhZGVyID0gZ2V0SGVhZGVyKCk7IC8vIEN1c3RvbSBjbGFzc1xuXG4gICAgYXBwbHlDdXN0b21DbGFzcyhoZWFkZXIsIHBhcmFtcywgJ2hlYWRlcicpOyAvLyBQcm9ncmVzcyBzdGVwc1xuXG4gICAgcmVuZGVyUHJvZ3Jlc3NTdGVwcyhpbnN0YW5jZSwgcGFyYW1zKTsgLy8gSWNvblxuXG4gICAgcmVuZGVySWNvbihpbnN0YW5jZSwgcGFyYW1zKTsgLy8gSW1hZ2VcblxuICAgIHJlbmRlckltYWdlKGluc3RhbmNlLCBwYXJhbXMpOyAvLyBUaXRsZVxuXG4gICAgcmVuZGVyVGl0bGUoaW5zdGFuY2UsIHBhcmFtcyk7IC8vIENsb3NlIGJ1dHRvblxuXG4gICAgcmVuZGVyQ2xvc2VCdXR0b24oaW5zdGFuY2UsIHBhcmFtcyk7XG4gIH07XG5cbiAgdmFyIHJlbmRlclBvcHVwID0gZnVuY3Rpb24gcmVuZGVyUG9wdXAoaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7IC8vIFdpZHRoXG5cbiAgICBhcHBseU51bWVyaWNhbFN0eWxlKHBvcHVwLCAnd2lkdGgnLCBwYXJhbXMud2lkdGgpOyAvLyBQYWRkaW5nXG5cbiAgICBhcHBseU51bWVyaWNhbFN0eWxlKHBvcHVwLCAncGFkZGluZycsIHBhcmFtcy5wYWRkaW5nKTsgLy8gQmFja2dyb3VuZFxuXG4gICAgaWYgKHBhcmFtcy5iYWNrZ3JvdW5kKSB7XG4gICAgICBwb3B1cC5zdHlsZS5iYWNrZ3JvdW5kID0gcGFyYW1zLmJhY2tncm91bmQ7XG4gICAgfSAvLyBDbGFzc2VzXG5cblxuICAgIGFkZENsYXNzZXMocG9wdXAsIHBhcmFtcyk7XG4gIH07XG5cbiAgdmFyIGFkZENsYXNzZXMgPSBmdW5jdGlvbiBhZGRDbGFzc2VzKHBvcHVwLCBwYXJhbXMpIHtcbiAgICAvLyBEZWZhdWx0IENsYXNzICsgc2hvd0NsYXNzIHdoZW4gdXBkYXRpbmcgU3dhbC51cGRhdGUoe30pXG4gICAgcG9wdXAuY2xhc3NOYW1lID0gXCJcIi5jb25jYXQoc3dhbENsYXNzZXMucG9wdXAsIFwiIFwiKS5jb25jYXQoaXNWaXNpYmxlKHBvcHVwKSA/IHBhcmFtcy5zaG93Q2xhc3MucG9wdXAgOiAnJyk7XG5cbiAgICBpZiAocGFyYW1zLnRvYXN0KSB7XG4gICAgICBhZGRDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgc3dhbENsYXNzZXNbJ3RvYXN0LXNob3duJ10pO1xuICAgICAgYWRkQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLnRvYXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLm1vZGFsKTtcbiAgICB9IC8vIEN1c3RvbSBjbGFzc1xuXG5cbiAgICBhcHBseUN1c3RvbUNsYXNzKHBvcHVwLCBwYXJhbXMsICdwb3B1cCcpO1xuXG4gICAgaWYgKHR5cGVvZiBwYXJhbXMuY3VzdG9tQ2xhc3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICBhZGRDbGFzcyhwb3B1cCwgcGFyYW1zLmN1c3RvbUNsYXNzKTtcbiAgICB9IC8vIEljb24gY2xhc3MgKCMxODQyKVxuXG5cbiAgICBpZiAocGFyYW1zLmljb24pIHtcbiAgICAgIGFkZENsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlc1tcImljb24tXCIuY29uY2F0KHBhcmFtcy5pY29uKV0pO1xuICAgIH1cbiAgfTtcblxuICB2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgICByZW5kZXJQb3B1cChpbnN0YW5jZSwgcGFyYW1zKTtcbiAgICByZW5kZXJDb250YWluZXIoaW5zdGFuY2UsIHBhcmFtcyk7XG4gICAgcmVuZGVySGVhZGVyKGluc3RhbmNlLCBwYXJhbXMpO1xuICAgIHJlbmRlckNvbnRlbnQoaW5zdGFuY2UsIHBhcmFtcyk7XG4gICAgcmVuZGVyQWN0aW9ucyhpbnN0YW5jZSwgcGFyYW1zKTtcbiAgICByZW5kZXJGb290ZXIoaW5zdGFuY2UsIHBhcmFtcyk7XG5cbiAgICBpZiAodHlwZW9mIHBhcmFtcy5vblJlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcGFyYW1zLm9uUmVuZGVyKGdldFBvcHVwKCkpO1xuICAgIH1cbiAgfTtcblxuICAvKlxuICAgKiBHbG9iYWwgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIFN3ZWV0QWxlcnQyIHBvcHVwIGlzIHNob3duXG4gICAqL1xuXG4gIHZhciBpc1Zpc2libGUkMSA9IGZ1bmN0aW9uIGlzVmlzaWJsZSQkMSgpIHtcbiAgICByZXR1cm4gaXNWaXNpYmxlKGdldFBvcHVwKCkpO1xuICB9O1xuICAvKlxuICAgKiBHbG9iYWwgZnVuY3Rpb24gdG8gY2xpY2sgJ0NvbmZpcm0nIGJ1dHRvblxuICAgKi9cblxuICB2YXIgY2xpY2tDb25maXJtID0gZnVuY3Rpb24gY2xpY2tDb25maXJtKCkge1xuICAgIHJldHVybiBnZXRDb25maXJtQnV0dG9uKCkgJiYgZ2V0Q29uZmlybUJ1dHRvbigpLmNsaWNrKCk7XG4gIH07XG4gIC8qXG4gICAqIEdsb2JhbCBmdW5jdGlvbiB0byBjbGljayAnQ2FuY2VsJyBidXR0b25cbiAgICovXG5cbiAgdmFyIGNsaWNrQ2FuY2VsID0gZnVuY3Rpb24gY2xpY2tDYW5jZWwoKSB7XG4gICAgcmV0dXJuIGdldENhbmNlbEJ1dHRvbigpICYmIGdldENhbmNlbEJ1dHRvbigpLmNsaWNrKCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZmlyZSgpIHtcbiAgICB2YXIgU3dhbCA9IHRoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9jb25zdHJ1Y3QoU3dhbCwgYXJncyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBleHRlbmRlZCB2ZXJzaW9uIG9mIGBTd2FsYCBjb250YWluaW5nIGBwYXJhbXNgIGFzIGRlZmF1bHRzLlxuICAgKiBVc2VmdWwgZm9yIHJldXNpbmcgU3dhbCBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogQmVmb3JlOlxuICAgKiBjb25zdCB0ZXh0UHJvbXB0T3B0aW9ucyA9IHsgaW5wdXQ6ICd0ZXh0Jywgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSB9XG4gICAqIGNvbnN0IHt2YWx1ZTogZmlyc3ROYW1lfSA9IGF3YWl0IFN3YWwuZmlyZSh7IC4uLnRleHRQcm9tcHRPcHRpb25zLCB0aXRsZTogJ1doYXQgaXMgeW91ciBmaXJzdCBuYW1lPycgfSlcbiAgICogY29uc3Qge3ZhbHVlOiBsYXN0TmFtZX0gPSBhd2FpdCBTd2FsLmZpcmUoeyAuLi50ZXh0UHJvbXB0T3B0aW9ucywgdGl0bGU6ICdXaGF0IGlzIHlvdXIgbGFzdCBuYW1lPycgfSlcbiAgICpcbiAgICogQWZ0ZXI6XG4gICAqIGNvbnN0IFRleHRQcm9tcHQgPSBTd2FsLm1peGluKHsgaW5wdXQ6ICd0ZXh0Jywgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSB9KVxuICAgKiBjb25zdCB7dmFsdWU6IGZpcnN0TmFtZX0gPSBhd2FpdCBUZXh0UHJvbXB0KCdXaGF0IGlzIHlvdXIgZmlyc3QgbmFtZT8nKVxuICAgKiBjb25zdCB7dmFsdWU6IGxhc3ROYW1lfSA9IGF3YWl0IFRleHRQcm9tcHQoJ1doYXQgaXMgeW91ciBsYXN0IG5hbWU/JylcbiAgICpcbiAgICogQHBhcmFtIG1peGluUGFyYW1zXG4gICAqL1xuICBmdW5jdGlvbiBtaXhpbihtaXhpblBhcmFtcykge1xuICAgIHZhciBNaXhpblN3YWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF90aGlzKSB7XG4gICAgICBfaW5oZXJpdHMoTWl4aW5Td2FsLCBfdGhpcyk7XG5cbiAgICAgIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTWl4aW5Td2FsKTtcblxuICAgICAgZnVuY3Rpb24gTWl4aW5Td2FsKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWl4aW5Td2FsKTtcblxuICAgICAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIF9jcmVhdGVDbGFzcyhNaXhpblN3YWwsIFt7XG4gICAgICAgIGtleTogXCJfbWFpblwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX21haW4ocGFyYW1zKSB7XG4gICAgICAgICAgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKE1peGluU3dhbC5wcm90b3R5cGUpLCBcIl9tYWluXCIsIHRoaXMpLmNhbGwodGhpcywgX2V4dGVuZHMoe30sIG1peGluUGFyYW1zLCBwYXJhbXMpKTtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gTWl4aW5Td2FsO1xuICAgIH0odGhpcyk7XG5cbiAgICByZXR1cm4gTWl4aW5Td2FsO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgc3Bpbm5lciBpbnN0ZWFkIG9mIENvbmZpcm0gYnV0dG9uXG4gICAqL1xuXG4gIHZhciBzaG93TG9hZGluZyA9IGZ1bmN0aW9uIHNob3dMb2FkaW5nKCkge1xuICAgIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG5cbiAgICBpZiAoIXBvcHVwKSB7XG4gICAgICBTd2FsLmZpcmUoKTtcbiAgICB9XG5cbiAgICBwb3B1cCA9IGdldFBvcHVwKCk7XG4gICAgdmFyIGFjdGlvbnMgPSBnZXRBY3Rpb25zKCk7XG4gICAgdmFyIGNvbmZpcm1CdXR0b24gPSBnZXRDb25maXJtQnV0dG9uKCk7XG4gICAgc2hvdyhhY3Rpb25zKTtcbiAgICBzaG93KGNvbmZpcm1CdXR0b24sICdpbmxpbmUtYmxvY2snKTtcbiAgICBhZGRDbGFzcyhbcG9wdXAsIGFjdGlvbnNdLCBzd2FsQ2xhc3Nlcy5sb2FkaW5nKTtcbiAgICBjb25maXJtQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycsIHRydWUpO1xuICAgIHBvcHVwLnNldEF0dHJpYnV0ZSgnYXJpYS1idXN5JywgdHJ1ZSk7XG4gICAgcG9wdXAuZm9jdXMoKTtcbiAgfTtcblxuICB2YXIgUkVTVE9SRV9GT0NVU19USU1FT1VUID0gMTAwO1xuXG4gIHZhciBnbG9iYWxTdGF0ZSA9IHt9O1xuXG4gIHZhciBmb2N1c1ByZXZpb3VzQWN0aXZlRWxlbWVudCA9IGZ1bmN0aW9uIGZvY3VzUHJldmlvdXNBY3RpdmVFbGVtZW50KCkge1xuICAgIGlmIChnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgJiYgZ2xvYmFsU3RhdGUucHJldmlvdXNBY3RpdmVFbGVtZW50LmZvY3VzKSB7XG4gICAgICBnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIGdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudCA9IG51bGw7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKCk7XG4gICAgfVxuICB9OyAvLyBSZXN0b3JlIHByZXZpb3VzIGFjdGl2ZSAoZm9jdXNlZCkgZWxlbWVudFxuXG5cbiAgdmFyIHJlc3RvcmVBY3RpdmVFbGVtZW50ID0gZnVuY3Rpb24gcmVzdG9yZUFjdGl2ZUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICB2YXIgeCA9IHdpbmRvdy5zY3JvbGxYO1xuICAgICAgdmFyIHkgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgIGdsb2JhbFN0YXRlLnJlc3RvcmVGb2N1c1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9jdXNQcmV2aW91c0FjdGl2ZUVsZW1lbnQoKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSwgUkVTVE9SRV9GT0NVU19USU1FT1VUKTsgLy8gaXNzdWVzLzkwMFxuXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cblxuICAgICAgaWYgKHR5cGVvZiB4ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gSUUgZG9lc24ndCBoYXZlIHNjcm9sbFgvc2Nyb2xsWSBzdXBwb3J0XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh4LCB5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogSWYgYHRpbWVyYCBwYXJhbWV0ZXIgaXMgc2V0LCByZXR1cm5zIG51bWJlciBvZiBtaWxsaXNlY29uZHMgb2YgdGltZXIgcmVtYWluZWQuXG4gICAqIE90aGVyd2lzZSwgcmV0dXJucyB1bmRlZmluZWQuXG4gICAqL1xuXG4gIHZhciBnZXRUaW1lckxlZnQgPSBmdW5jdGlvbiBnZXRUaW1lckxlZnQoKSB7XG4gICAgcmV0dXJuIGdsb2JhbFN0YXRlLnRpbWVvdXQgJiYgZ2xvYmFsU3RhdGUudGltZW91dC5nZXRUaW1lckxlZnQoKTtcbiAgfTtcbiAgLyoqXG4gICAqIFN0b3AgdGltZXIuIFJldHVybnMgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBvZiB0aW1lciByZW1haW5lZC5cbiAgICogSWYgYHRpbWVyYCBwYXJhbWV0ZXIgaXNuJ3Qgc2V0LCByZXR1cm5zIHVuZGVmaW5lZC5cbiAgICovXG5cbiAgdmFyIHN0b3BUaW1lciA9IGZ1bmN0aW9uIHN0b3BUaW1lcigpIHtcbiAgICBpZiAoZ2xvYmFsU3RhdGUudGltZW91dCkge1xuICAgICAgc3RvcFRpbWVyUHJvZ3Jlc3NCYXIoKTtcbiAgICAgIHJldHVybiBnbG9iYWxTdGF0ZS50aW1lb3V0LnN0b3AoKTtcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBSZXN1bWUgdGltZXIuIFJldHVybnMgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBvZiB0aW1lciByZW1haW5lZC5cbiAgICogSWYgYHRpbWVyYCBwYXJhbWV0ZXIgaXNuJ3Qgc2V0LCByZXR1cm5zIHVuZGVmaW5lZC5cbiAgICovXG5cbiAgdmFyIHJlc3VtZVRpbWVyID0gZnVuY3Rpb24gcmVzdW1lVGltZXIoKSB7XG4gICAgaWYgKGdsb2JhbFN0YXRlLnRpbWVvdXQpIHtcbiAgICAgIHZhciByZW1haW5pbmcgPSBnbG9iYWxTdGF0ZS50aW1lb3V0LnN0YXJ0KCk7XG4gICAgICBhbmltYXRlVGltZXJQcm9ncmVzc0JhcihyZW1haW5pbmcpO1xuICAgICAgcmV0dXJuIHJlbWFpbmluZztcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBSZXN1bWUgdGltZXIuIFJldHVybnMgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBvZiB0aW1lciByZW1haW5lZC5cbiAgICogSWYgYHRpbWVyYCBwYXJhbWV0ZXIgaXNuJ3Qgc2V0LCByZXR1cm5zIHVuZGVmaW5lZC5cbiAgICovXG5cbiAgdmFyIHRvZ2dsZVRpbWVyID0gZnVuY3Rpb24gdG9nZ2xlVGltZXIoKSB7XG4gICAgdmFyIHRpbWVyID0gZ2xvYmFsU3RhdGUudGltZW91dDtcbiAgICByZXR1cm4gdGltZXIgJiYgKHRpbWVyLnJ1bm5pbmcgPyBzdG9wVGltZXIoKSA6IHJlc3VtZVRpbWVyKCkpO1xuICB9O1xuICAvKipcbiAgICogSW5jcmVhc2UgdGltZXIuIFJldHVybnMgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBvZiBhbiB1cGRhdGVkIHRpbWVyLlxuICAgKiBJZiBgdGltZXJgIHBhcmFtZXRlciBpc24ndCBzZXQsIHJldHVybnMgdW5kZWZpbmVkLlxuICAgKi9cblxuICB2YXIgaW5jcmVhc2VUaW1lciA9IGZ1bmN0aW9uIGluY3JlYXNlVGltZXIobikge1xuICAgIGlmIChnbG9iYWxTdGF0ZS50aW1lb3V0KSB7XG4gICAgICB2YXIgcmVtYWluaW5nID0gZ2xvYmFsU3RhdGUudGltZW91dC5pbmNyZWFzZShuKTtcbiAgICAgIGFuaW1hdGVUaW1lclByb2dyZXNzQmFyKHJlbWFpbmluZywgdHJ1ZSk7XG4gICAgICByZXR1cm4gcmVtYWluaW5nO1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIENoZWNrIGlmIHRpbWVyIGlzIHJ1bm5pbmcuIFJldHVybnMgdHJ1ZSBpZiB0aW1lciBpcyBydW5uaW5nXG4gICAqIG9yIGZhbHNlIGlmIHRpbWVyIGlzIHBhdXNlZCBvciBzdG9wcGVkLlxuICAgKiBJZiBgdGltZXJgIHBhcmFtZXRlciBpc24ndCBzZXQsIHJldHVybnMgdW5kZWZpbmVkXG4gICAqL1xuXG4gIHZhciBpc1RpbWVyUnVubmluZyA9IGZ1bmN0aW9uIGlzVGltZXJSdW5uaW5nKCkge1xuICAgIHJldHVybiBnbG9iYWxTdGF0ZS50aW1lb3V0ICYmIGdsb2JhbFN0YXRlLnRpbWVvdXQuaXNSdW5uaW5nKCk7XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRQYXJhbXMgPSB7XG4gICAgdGl0bGU6ICcnLFxuICAgIHRpdGxlVGV4dDogJycsXG4gICAgdGV4dDogJycsXG4gICAgaHRtbDogJycsXG4gICAgZm9vdGVyOiAnJyxcbiAgICBpY29uOiB1bmRlZmluZWQsXG4gICAgaWNvbkh0bWw6IHVuZGVmaW5lZCxcbiAgICB0b2FzdDogZmFsc2UsXG4gICAgYW5pbWF0aW9uOiB0cnVlLFxuICAgIHNob3dDbGFzczoge1xuICAgICAgcG9wdXA6ICdzd2FsMi1zaG93JyxcbiAgICAgIGJhY2tkcm9wOiAnc3dhbDItYmFja2Ryb3Atc2hvdycsXG4gICAgICBpY29uOiAnc3dhbDItaWNvbi1zaG93J1xuICAgIH0sXG4gICAgaGlkZUNsYXNzOiB7XG4gICAgICBwb3B1cDogJ3N3YWwyLWhpZGUnLFxuICAgICAgYmFja2Ryb3A6ICdzd2FsMi1iYWNrZHJvcC1oaWRlJyxcbiAgICAgIGljb246ICdzd2FsMi1pY29uLWhpZGUnXG4gICAgfSxcbiAgICBjdXN0b21DbGFzczogdW5kZWZpbmVkLFxuICAgIHRhcmdldDogJ2JvZHknLFxuICAgIGJhY2tkcm9wOiB0cnVlLFxuICAgIGhlaWdodEF1dG86IHRydWUsXG4gICAgYWxsb3dPdXRzaWRlQ2xpY2s6IHRydWUsXG4gICAgYWxsb3dFc2NhcGVLZXk6IHRydWUsXG4gICAgYWxsb3dFbnRlcktleTogdHJ1ZSxcbiAgICBzdG9wS2V5ZG93blByb3BhZ2F0aW9uOiB0cnVlLFxuICAgIGtleWRvd25MaXN0ZW5lckNhcHR1cmU6IGZhbHNlLFxuICAgIHNob3dDb25maXJtQnV0dG9uOiB0cnVlLFxuICAgIHNob3dDYW5jZWxCdXR0b246IGZhbHNlLFxuICAgIHByZUNvbmZpcm06IHVuZGVmaW5lZCxcbiAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICBjb25maXJtQnV0dG9uQXJpYUxhYmVsOiAnJyxcbiAgICBjb25maXJtQnV0dG9uQ29sb3I6IHVuZGVmaW5lZCxcbiAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJyxcbiAgICBjYW5jZWxCdXR0b25BcmlhTGFiZWw6ICcnLFxuICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiB1bmRlZmluZWQsXG4gICAgYnV0dG9uc1N0eWxpbmc6IHRydWUsXG4gICAgcmV2ZXJzZUJ1dHRvbnM6IGZhbHNlLFxuICAgIGZvY3VzQ29uZmlybTogdHJ1ZSxcbiAgICBmb2N1c0NhbmNlbDogZmFsc2UsXG4gICAgc2hvd0Nsb3NlQnV0dG9uOiBmYWxzZSxcbiAgICBjbG9zZUJ1dHRvbkh0bWw6ICcmdGltZXM7JyxcbiAgICBjbG9zZUJ1dHRvbkFyaWFMYWJlbDogJ0Nsb3NlIHRoaXMgZGlhbG9nJyxcbiAgICBzaG93TG9hZGVyT25Db25maXJtOiBmYWxzZSxcbiAgICBpbWFnZVVybDogdW5kZWZpbmVkLFxuICAgIGltYWdlV2lkdGg6IHVuZGVmaW5lZCxcbiAgICBpbWFnZUhlaWdodDogdW5kZWZpbmVkLFxuICAgIGltYWdlQWx0OiAnJyxcbiAgICB0aW1lcjogdW5kZWZpbmVkLFxuICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICAgIHdpZHRoOiB1bmRlZmluZWQsXG4gICAgcGFkZGluZzogdW5kZWZpbmVkLFxuICAgIGJhY2tncm91bmQ6IHVuZGVmaW5lZCxcbiAgICBpbnB1dDogdW5kZWZpbmVkLFxuICAgIGlucHV0UGxhY2Vob2xkZXI6ICcnLFxuICAgIGlucHV0VmFsdWU6ICcnLFxuICAgIGlucHV0T3B0aW9uczoge30sXG4gICAgaW5wdXRBdXRvVHJpbTogdHJ1ZSxcbiAgICBpbnB1dEF0dHJpYnV0ZXM6IHt9LFxuICAgIGlucHV0VmFsaWRhdG9yOiB1bmRlZmluZWQsXG4gICAgdmFsaWRhdGlvbk1lc3NhZ2U6IHVuZGVmaW5lZCxcbiAgICBncm93OiBmYWxzZSxcbiAgICBwb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgcHJvZ3Jlc3NTdGVwczogW10sXG4gICAgY3VycmVudFByb2dyZXNzU3RlcDogdW5kZWZpbmVkLFxuICAgIHByb2dyZXNzU3RlcHNEaXN0YW5jZTogdW5kZWZpbmVkLFxuICAgIG9uQmVmb3JlT3BlbjogdW5kZWZpbmVkLFxuICAgIG9uT3BlbjogdW5kZWZpbmVkLFxuICAgIG9uUmVuZGVyOiB1bmRlZmluZWQsXG4gICAgb25DbG9zZTogdW5kZWZpbmVkLFxuICAgIG9uQWZ0ZXJDbG9zZTogdW5kZWZpbmVkLFxuICAgIG9uRGVzdHJveTogdW5kZWZpbmVkLFxuICAgIHNjcm9sbGJhclBhZGRpbmc6IHRydWVcbiAgfTtcbiAgdmFyIHVwZGF0YWJsZVBhcmFtcyA9IFsnYWxsb3dFc2NhcGVLZXknLCAnYWxsb3dPdXRzaWRlQ2xpY2snLCAnYnV0dG9uc1N0eWxpbmcnLCAnY2FuY2VsQnV0dG9uQXJpYUxhYmVsJywgJ2NhbmNlbEJ1dHRvbkNvbG9yJywgJ2NhbmNlbEJ1dHRvblRleHQnLCAnY2xvc2VCdXR0b25BcmlhTGFiZWwnLCAnY2xvc2VCdXR0b25IdG1sJywgJ2NvbmZpcm1CdXR0b25BcmlhTGFiZWwnLCAnY29uZmlybUJ1dHRvbkNvbG9yJywgJ2NvbmZpcm1CdXR0b25UZXh0JywgJ2N1cnJlbnRQcm9ncmVzc1N0ZXAnLCAnY3VzdG9tQ2xhc3MnLCAnZm9vdGVyJywgJ2hpZGVDbGFzcycsICdodG1sJywgJ2ljb24nLCAnaW1hZ2VBbHQnLCAnaW1hZ2VIZWlnaHQnLCAnaW1hZ2VVcmwnLCAnaW1hZ2VXaWR0aCcsICdvbkFmdGVyQ2xvc2UnLCAnb25DbG9zZScsICdvbkRlc3Ryb3knLCAncHJvZ3Jlc3NTdGVwcycsICdyZXZlcnNlQnV0dG9ucycsICdzaG93Q2FuY2VsQnV0dG9uJywgJ3Nob3dDbG9zZUJ1dHRvbicsICdzaG93Q29uZmlybUJ1dHRvbicsICd0ZXh0JywgJ3RpdGxlJywgJ3RpdGxlVGV4dCddO1xuICB2YXIgZGVwcmVjYXRlZFBhcmFtcyA9IHtcbiAgICBhbmltYXRpb246ICdzaG93Q2xhc3NcIiBhbmQgXCJoaWRlQ2xhc3MnXG4gIH07XG4gIHZhciB0b2FzdEluY29tcGF0aWJsZVBhcmFtcyA9IFsnYWxsb3dPdXRzaWRlQ2xpY2snLCAnYWxsb3dFbnRlcktleScsICdiYWNrZHJvcCcsICdmb2N1c0NvbmZpcm0nLCAnZm9jdXNDYW5jZWwnLCAnaGVpZ2h0QXV0bycsICdrZXlkb3duTGlzdGVuZXJDYXB0dXJlJ107XG4gIC8qKlxuICAgKiBJcyB2YWxpZCBwYXJhbWV0ZXJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtTmFtZVxuICAgKi9cblxuICB2YXIgaXNWYWxpZFBhcmFtZXRlciA9IGZ1bmN0aW9uIGlzVmFsaWRQYXJhbWV0ZXIocGFyYW1OYW1lKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkZWZhdWx0UGFyYW1zLCBwYXJhbU5hbWUpO1xuICB9O1xuICAvKipcbiAgICogSXMgdmFsaWQgcGFyYW1ldGVyIGZvciBTd2FsLnVwZGF0ZSgpIG1ldGhvZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGFyYW1OYW1lXG4gICAqL1xuXG4gIHZhciBpc1VwZGF0YWJsZVBhcmFtZXRlciA9IGZ1bmN0aW9uIGlzVXBkYXRhYmxlUGFyYW1ldGVyKHBhcmFtTmFtZSkge1xuICAgIHJldHVybiB1cGRhdGFibGVQYXJhbXMuaW5kZXhPZihwYXJhbU5hbWUpICE9PSAtMTtcbiAgfTtcbiAgLyoqXG4gICAqIElzIGRlcHJlY2F0ZWQgcGFyYW1ldGVyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbU5hbWVcbiAgICovXG5cbiAgdmFyIGlzRGVwcmVjYXRlZFBhcmFtZXRlciA9IGZ1bmN0aW9uIGlzRGVwcmVjYXRlZFBhcmFtZXRlcihwYXJhbU5hbWUpIHtcbiAgICByZXR1cm4gZGVwcmVjYXRlZFBhcmFtc1twYXJhbU5hbWVdO1xuICB9O1xuXG4gIHZhciBjaGVja0lmUGFyYW1Jc1ZhbGlkID0gZnVuY3Rpb24gY2hlY2tJZlBhcmFtSXNWYWxpZChwYXJhbSkge1xuICAgIGlmICghaXNWYWxpZFBhcmFtZXRlcihwYXJhbSkpIHtcbiAgICAgIHdhcm4oXCJVbmtub3duIHBhcmFtZXRlciBcXFwiXCIuY29uY2F0KHBhcmFtLCBcIlxcXCJcIikpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgY2hlY2tJZlRvYXN0UGFyYW1Jc1ZhbGlkID0gZnVuY3Rpb24gY2hlY2tJZlRvYXN0UGFyYW1Jc1ZhbGlkKHBhcmFtKSB7XG4gICAgaWYgKHRvYXN0SW5jb21wYXRpYmxlUGFyYW1zLmluZGV4T2YocGFyYW0pICE9PSAtMSkge1xuICAgICAgd2FybihcIlRoZSBwYXJhbWV0ZXIgXFxcIlwiLmNvbmNhdChwYXJhbSwgXCJcXFwiIGlzIGluY29tcGF0aWJsZSB3aXRoIHRvYXN0c1wiKSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBjaGVja0lmUGFyYW1Jc0RlcHJlY2F0ZWQgPSBmdW5jdGlvbiBjaGVja0lmUGFyYW1Jc0RlcHJlY2F0ZWQocGFyYW0pIHtcbiAgICBpZiAoaXNEZXByZWNhdGVkUGFyYW1ldGVyKHBhcmFtKSkge1xuICAgICAgd2FybkFib3V0RGVwcmVhdGlvbihwYXJhbSwgaXNEZXByZWNhdGVkUGFyYW1ldGVyKHBhcmFtKSk7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogU2hvdyByZWxldmFudCB3YXJuaW5ncyBmb3IgZ2l2ZW4gcGFyYW1zXG4gICAqXG4gICAqIEBwYXJhbSBwYXJhbXNcbiAgICovXG5cblxuICB2YXIgc2hvd1dhcm5pbmdzRm9yUGFyYW1zID0gZnVuY3Rpb24gc2hvd1dhcm5pbmdzRm9yUGFyYW1zKHBhcmFtcykge1xuICAgIGZvciAodmFyIHBhcmFtIGluIHBhcmFtcykge1xuICAgICAgY2hlY2tJZlBhcmFtSXNWYWxpZChwYXJhbSk7XG5cbiAgICAgIGlmIChwYXJhbXMudG9hc3QpIHtcbiAgICAgICAgY2hlY2tJZlRvYXN0UGFyYW1Jc1ZhbGlkKHBhcmFtKTtcbiAgICAgIH1cblxuICAgICAgY2hlY2tJZlBhcmFtSXNEZXByZWNhdGVkKHBhcmFtKTtcbiAgICB9XG4gIH07XG5cblxuXG4gIHZhciBzdGF0aWNNZXRob2RzID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICAgIGlzVmFsaWRQYXJhbWV0ZXI6IGlzVmFsaWRQYXJhbWV0ZXIsXG4gICAgaXNVcGRhdGFibGVQYXJhbWV0ZXI6IGlzVXBkYXRhYmxlUGFyYW1ldGVyLFxuICAgIGlzRGVwcmVjYXRlZFBhcmFtZXRlcjogaXNEZXByZWNhdGVkUGFyYW1ldGVyLFxuICAgIGFyZ3NUb1BhcmFtczogYXJnc1RvUGFyYW1zLFxuICAgIGlzVmlzaWJsZTogaXNWaXNpYmxlJDEsXG4gICAgY2xpY2tDb25maXJtOiBjbGlja0NvbmZpcm0sXG4gICAgY2xpY2tDYW5jZWw6IGNsaWNrQ2FuY2VsLFxuICAgIGdldENvbnRhaW5lcjogZ2V0Q29udGFpbmVyLFxuICAgIGdldFBvcHVwOiBnZXRQb3B1cCxcbiAgICBnZXRUaXRsZTogZ2V0VGl0bGUsXG4gICAgZ2V0Q29udGVudDogZ2V0Q29udGVudCxcbiAgICBnZXRIdG1sQ29udGFpbmVyOiBnZXRIdG1sQ29udGFpbmVyLFxuICAgIGdldEltYWdlOiBnZXRJbWFnZSxcbiAgICBnZXRJY29uOiBnZXRJY29uLFxuICAgIGdldEljb25zOiBnZXRJY29ucyxcbiAgICBnZXRDbG9zZUJ1dHRvbjogZ2V0Q2xvc2VCdXR0b24sXG4gICAgZ2V0QWN0aW9uczogZ2V0QWN0aW9ucyxcbiAgICBnZXRDb25maXJtQnV0dG9uOiBnZXRDb25maXJtQnV0dG9uLFxuICAgIGdldENhbmNlbEJ1dHRvbjogZ2V0Q2FuY2VsQnV0dG9uLFxuICAgIGdldEhlYWRlcjogZ2V0SGVhZGVyLFxuICAgIGdldEZvb3RlcjogZ2V0Rm9vdGVyLFxuICAgIGdldFRpbWVyUHJvZ3Jlc3NCYXI6IGdldFRpbWVyUHJvZ3Jlc3NCYXIsXG4gICAgZ2V0Rm9jdXNhYmxlRWxlbWVudHM6IGdldEZvY3VzYWJsZUVsZW1lbnRzLFxuICAgIGdldFZhbGlkYXRpb25NZXNzYWdlOiBnZXRWYWxpZGF0aW9uTWVzc2FnZSxcbiAgICBpc0xvYWRpbmc6IGlzTG9hZGluZyxcbiAgICBmaXJlOiBmaXJlLFxuICAgIG1peGluOiBtaXhpbixcbiAgICBxdWV1ZTogcXVldWUsXG4gICAgZ2V0UXVldWVTdGVwOiBnZXRRdWV1ZVN0ZXAsXG4gICAgaW5zZXJ0UXVldWVTdGVwOiBpbnNlcnRRdWV1ZVN0ZXAsXG4gICAgZGVsZXRlUXVldWVTdGVwOiBkZWxldGVRdWV1ZVN0ZXAsXG4gICAgc2hvd0xvYWRpbmc6IHNob3dMb2FkaW5nLFxuICAgIGVuYWJsZUxvYWRpbmc6IHNob3dMb2FkaW5nLFxuICAgIGdldFRpbWVyTGVmdDogZ2V0VGltZXJMZWZ0LFxuICAgIHN0b3BUaW1lcjogc3RvcFRpbWVyLFxuICAgIHJlc3VtZVRpbWVyOiByZXN1bWVUaW1lcixcbiAgICB0b2dnbGVUaW1lcjogdG9nZ2xlVGltZXIsXG4gICAgaW5jcmVhc2VUaW1lcjogaW5jcmVhc2VUaW1lcixcbiAgICBpc1RpbWVyUnVubmluZzogaXNUaW1lclJ1bm5pbmdcbiAgfSk7XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgYnV0dG9ucyBhbmQgaGlkZSBsb2FkZXIuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGhpZGVMb2FkaW5nKCkge1xuICAgIC8vIGRvIG5vdGhpbmcgaWYgcG9wdXAgaXMgY2xvc2VkXG4gICAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldCh0aGlzKTtcblxuICAgIGlmICghaW5uZXJQYXJhbXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuXG4gICAgaWYgKCFpbm5lclBhcmFtcy5zaG93Q29uZmlybUJ1dHRvbikge1xuICAgICAgaGlkZShkb21DYWNoZS5jb25maXJtQnV0dG9uKTtcblxuICAgICAgaWYgKCFpbm5lclBhcmFtcy5zaG93Q2FuY2VsQnV0dG9uKSB7XG4gICAgICAgIGhpZGUoZG9tQ2FjaGUuYWN0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlQ2xhc3MoW2RvbUNhY2hlLnBvcHVwLCBkb21DYWNoZS5hY3Rpb25zXSwgc3dhbENsYXNzZXMubG9hZGluZyk7XG4gICAgZG9tQ2FjaGUucG9wdXAucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWJ1c3knKTtcbiAgICBkb21DYWNoZS5wb3B1cC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICAgIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBkb21DYWNoZS5jYW5jZWxCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldElucHV0JDEoaW5zdGFuY2UpIHtcbiAgICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlIHx8IHRoaXMpO1xuICAgIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQoaW5zdGFuY2UgfHwgdGhpcyk7XG5cbiAgICBpZiAoIWRvbUNhY2hlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0SW5wdXQoZG9tQ2FjaGUuY29udGVudCwgaW5uZXJQYXJhbXMuaW5wdXQpO1xuICB9XG5cbiAgdmFyIGZpeFNjcm9sbGJhciA9IGZ1bmN0aW9uIGZpeFNjcm9sbGJhcigpIHtcbiAgICAvLyBmb3IgcXVldWVzLCBkbyBub3QgZG8gdGhpcyBtb3JlIHRoYW4gb25jZVxuICAgIGlmIChzdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZyAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gaWYgdGhlIGJvZHkgaGFzIG92ZXJmbG93XG5cblxuICAgIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgICAgLy8gYWRkIHBhZGRpbmcgc28gdGhlIGNvbnRlbnQgZG9lc24ndCBzaGlmdCBhZnRlciByZW1vdmFsIG9mIHNjcm9sbGJhclxuICAgICAgc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXJpZ2h0JykpO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIlwiLmNvbmNhdChzdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZyArIG1lYXN1cmVTY3JvbGxiYXIoKSwgXCJweFwiKTtcbiAgICB9XG4gIH07XG4gIHZhciB1bmRvU2Nyb2xsYmFyID0gZnVuY3Rpb24gdW5kb1Njcm9sbGJhcigpIHtcbiAgICBpZiAoc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgIT09IG51bGwpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCJcIi5jb25jYXQoc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcsIFwicHhcIik7XG4gICAgICBzdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZyA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBmaWxlICovXG5cbiAgdmFyIGlPU2ZpeCA9IGZ1bmN0aW9uIGlPU2ZpeCgpIHtcbiAgICB2YXIgaU9TID0gL2lQYWR8aVBob25lfGlQb2QvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIXdpbmRvdy5NU1N0cmVhbSB8fCBuYXZpZ2F0b3IucGxhdGZvcm0gPT09ICdNYWNJbnRlbCcgJiYgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMTtcblxuICAgIGlmIChpT1MgJiYgIWhhc0NsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLmlvc2ZpeCkpIHtcbiAgICAgIHZhciBvZmZzZXQgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gXCJcIi5jb25jYXQob2Zmc2V0ICogLTEsIFwicHhcIik7XG4gICAgICBhZGRDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpO1xuICAgICAgbG9ja0JvZHlTY3JvbGwoKTtcbiAgICAgIGFkZEJvdHRvbVBhZGRpbmdGb3JUYWxsUG9wdXBzKCk7IC8vICMxOTQ4XG4gICAgfVxuICB9O1xuXG4gIHZhciBhZGRCb3R0b21QYWRkaW5nRm9yVGFsbFBvcHVwcyA9IGZ1bmN0aW9uIGFkZEJvdHRvbVBhZGRpbmdGb3JUYWxsUG9wdXBzKCkge1xuICAgIHZhciBzYWZhcmkgPSAhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKENyaU9TfEZ4aU9TfEVkZ2lPU3xZYUJyb3dzZXJ8VUNCcm93c2VyKS9pKTtcblxuICAgIGlmIChzYWZhcmkpIHtcbiAgICAgIHZhciBib3R0b21QYW5lbEhlaWdodCA9IDQ0O1xuXG4gICAgICBpZiAoZ2V0UG9wdXAoKS5zY3JvbGxIZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQgLSBib3R0b21QYW5lbEhlaWdodCkge1xuICAgICAgICBnZXRDb250YWluZXIoKS5zdHlsZS5wYWRkaW5nQm90dG9tID0gXCJcIi5jb25jYXQoYm90dG9tUGFuZWxIZWlnaHQsIFwicHhcIik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBsb2NrQm9keVNjcm9sbCA9IGZ1bmN0aW9uIGxvY2tCb2R5U2Nyb2xsKCkge1xuICAgIC8vICMxMjQ2XG4gICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICAgIHZhciBwcmV2ZW50VG91Y2hNb3ZlO1xuXG4gICAgY29udGFpbmVyLm9udG91Y2hzdGFydCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBwcmV2ZW50VG91Y2hNb3ZlID0gc2hvdWxkUHJldmVudFRvdWNoTW92ZShlLnRhcmdldCk7XG4gICAgfTtcblxuICAgIGNvbnRhaW5lci5vbnRvdWNobW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAocHJldmVudFRvdWNoTW92ZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICB2YXIgc2hvdWxkUHJldmVudFRvdWNoTW92ZSA9IGZ1bmN0aW9uIHNob3VsZFByZXZlbnRUb3VjaE1vdmUodGFyZ2V0KSB7XG4gICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuXG4gICAgaWYgKHRhcmdldCA9PT0gY29udGFpbmVyKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIWlzU2Nyb2xsYWJsZShjb250YWluZXIpICYmIHRhcmdldC50YWdOYW1lICE9PSAnSU5QVVQnICYmIC8vICMxNjAzXG4gICAgIShpc1Njcm9sbGFibGUoZ2V0Q29udGVudCgpKSAmJiAvLyAjMTk0NFxuICAgIGdldENvbnRlbnQoKS5jb250YWlucyh0YXJnZXQpKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHZhciB1bmRvSU9TZml4ID0gZnVuY3Rpb24gdW5kb0lPU2ZpeCgpIHtcbiAgICBpZiAoaGFzQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuaW9zZml4KSkge1xuICAgICAgdmFyIG9mZnNldCA9IHBhcnNlSW50KGRvY3VtZW50LmJvZHkuc3R5bGUudG9wLCAxMCk7XG4gICAgICByZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSAnJztcbiAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gb2Zmc2V0ICogLTE7XG4gICAgfVxuICB9O1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBmaWxlICovXG5cbiAgdmFyIGlzSUUxMSA9IGZ1bmN0aW9uIGlzSUUxMSgpIHtcbiAgICByZXR1cm4gISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISFkb2N1bWVudC5kb2N1bWVudE1vZGU7XG4gIH07IC8vIEZpeCBJRTExIGNlbnRlcmluZyBzd2VldGFsZXJ0Mi9pc3N1ZXMvOTMzXG5cblxuICB2YXIgZml4VmVydGljYWxQb3NpdGlvbklFID0gZnVuY3Rpb24gZml4VmVydGljYWxQb3NpdGlvbklFKCkge1xuICAgIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIGNvbnRhaW5lci5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnYWxpZ24taXRlbXMnKTtcblxuICAgIGlmIChwb3B1cC5vZmZzZXRUb3AgPCAwKSB7XG4gICAgICBjb250YWluZXIuc3R5bGUuYWxpZ25JdGVtcyA9ICdmbGV4LXN0YXJ0JztcbiAgICB9XG4gIH07XG5cbiAgdmFyIElFZml4ID0gZnVuY3Rpb24gSUVmaXgoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGlzSUUxMSgpKSB7XG4gICAgICBmaXhWZXJ0aWNhbFBvc2l0aW9uSUUoKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmaXhWZXJ0aWNhbFBvc2l0aW9uSUUpO1xuICAgIH1cbiAgfTtcbiAgdmFyIHVuZG9JRWZpeCA9IGZ1bmN0aW9uIHVuZG9JRWZpeCgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNJRTExKCkpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmaXhWZXJ0aWNhbFBvc2l0aW9uSUUpO1xuICAgIH1cbiAgfTtcblxuICAvLyBBZGRpbmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgdG8gZWxlbWVudHMgb3V0c2lkZSBvZiB0aGUgYWN0aXZlIG1vZGFsIGRpYWxvZyBlbnN1cmVzIHRoYXRcbiAgLy8gZWxlbWVudHMgbm90IHdpdGhpbiB0aGUgYWN0aXZlIG1vZGFsIGRpYWxvZyB3aWxsIG5vdCBiZSBzdXJmYWNlZCBpZiBhIHVzZXIgb3BlbnMgYSBzY3JlZW5cbiAgLy8gcmVhZGVy4oCZcyBsaXN0IG9mIGVsZW1lbnRzIChoZWFkaW5ncywgZm9ybSBjb250cm9scywgbGFuZG1hcmtzLCBldGMuKSBpbiB0aGUgZG9jdW1lbnQuXG5cbiAgdmFyIHNldEFyaWFIaWRkZW4gPSBmdW5jdGlvbiBzZXRBcmlhSGlkZGVuKCkge1xuICAgIHZhciBib2R5Q2hpbGRyZW4gPSB0b0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICAgIGJvZHlDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgaWYgKGVsID09PSBnZXRDb250YWluZXIoKSB8fCBjb250YWlucyhlbCwgZ2V0Q29udGFpbmVyKCkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSkge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW4nLCBlbC5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykpO1xuICAgICAgfVxuXG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICB9KTtcbiAgfTtcbiAgdmFyIHVuc2V0QXJpYUhpZGRlbiA9IGZ1bmN0aW9uIHVuc2V0QXJpYUhpZGRlbigpIHtcbiAgICB2YXIgYm9keUNoaWxkcmVuID0gdG9BcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAgICBib2R5Q2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW4nKSkge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXByZXZpb3VzLWFyaWEtaGlkZGVuJykpO1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogVGhpcyBtb2R1bGUgY29udGFpbnRzIGBXZWFrTWFwYHMgZm9yIGVhY2ggZWZmZWN0aXZlbHktXCJwcml2YXRlICBwcm9wZXJ0eVwiIHRoYXQgYSBgU3dhbGAgaGFzLlxuICAgKiBGb3IgZXhhbXBsZSwgdG8gc2V0IHRoZSBwcml2YXRlIHByb3BlcnR5IFwiZm9vXCIgb2YgYHRoaXNgIHRvIFwiYmFyXCIsIHlvdSBjYW4gYHByaXZhdGVQcm9wcy5mb28uc2V0KHRoaXMsICdiYXInKWBcbiAgICogVGhpcyBpcyB0aGUgYXBwcm9hY2ggdGhhdCBCYWJlbCB3aWxsIHByb2JhYmx5IHRha2UgdG8gaW1wbGVtZW50IHByaXZhdGUgbWV0aG9kcy9maWVsZHNcbiAgICogICBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcml2YXRlLW1ldGhvZHNcbiAgICogICBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvcHVsbC83NTU1XG4gICAqIE9uY2Ugd2UgaGF2ZSB0aGUgY2hhbmdlcyBmcm9tIHRoYXQgUFIgaW4gQmFiZWwsIGFuZCBvdXIgY29yZSBjbGFzcyBmaXRzIHJlYXNvbmFibGUgaW4gKm9uZSBtb2R1bGUqXG4gICAqICAgdGhlbiB3ZSBjYW4gdXNlIHRoYXQgbGFuZ3VhZ2UgZmVhdHVyZS5cbiAgICovXG4gIHZhciBwcml2YXRlTWV0aG9kcyA9IHtcbiAgICBzd2FsUHJvbWlzZVJlc29sdmU6IG5ldyBXZWFrTWFwKClcbiAgfTtcblxuICAvKlxuICAgKiBJbnN0YW5jZSBtZXRob2QgdG8gY2xvc2Ugc3dlZXRBbGVydFxuICAgKi9cblxuICBmdW5jdGlvbiByZW1vdmVQb3B1cEFuZFJlc2V0U3RhdGUoaW5zdGFuY2UsIGNvbnRhaW5lciwgaXNUb2FzdCQkMSwgb25BZnRlckNsb3NlKSB7XG4gICAgaWYgKGlzVG9hc3QkJDEpIHtcbiAgICAgIHRyaWdnZXJPbkFmdGVyQ2xvc2VBbmREaXNwb3NlKGluc3RhbmNlLCBvbkFmdGVyQ2xvc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN0b3JlQWN0aXZlRWxlbWVudCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdHJpZ2dlck9uQWZ0ZXJDbG9zZUFuZERpc3Bvc2UoaW5zdGFuY2UsIG9uQWZ0ZXJDbG9zZSk7XG4gICAgICB9KTtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyLCB7XG4gICAgICAgIGNhcHR1cmU6IGdsb2JhbFN0YXRlLmtleWRvd25MaXN0ZW5lckNhcHR1cmVcbiAgICAgIH0pO1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXJBZGRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChjb250YWluZXIucGFyZW50Tm9kZSAmJiAhZG9jdW1lbnQuYm9keS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dhbDItcXVldWUtc3RlcCcpKSB7XG4gICAgICBjb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjb250YWluZXIpO1xuICAgIH1cblxuICAgIGlmIChpc01vZGFsKCkpIHtcbiAgICAgIHVuZG9TY3JvbGxiYXIoKTtcbiAgICAgIHVuZG9JT1NmaXgoKTtcbiAgICAgIHVuZG9JRWZpeCgpO1xuICAgICAgdW5zZXRBcmlhSGlkZGVuKCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQm9keUNsYXNzZXMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUJvZHlDbGFzc2VzKCkge1xuICAgIHJlbW92ZUNsYXNzKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldLCBbc3dhbENsYXNzZXMuc2hvd24sIHN3YWxDbGFzc2VzWydoZWlnaHQtYXV0byddLCBzd2FsQ2xhc3Nlc1snbm8tYmFja2Ryb3AnXSwgc3dhbENsYXNzZXNbJ3RvYXN0LXNob3duJ10sIHN3YWxDbGFzc2VzWyd0b2FzdC1jb2x1bW4nXV0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2UocmVzb2x2ZVZhbHVlKSB7XG4gICAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcblxuICAgIGlmICghcG9wdXApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO1xuXG4gICAgaWYgKCFpbm5lclBhcmFtcyB8fCBoYXNDbGFzcyhwb3B1cCwgaW5uZXJQYXJhbXMuaGlkZUNsYXNzLnBvcHVwKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBzd2FsUHJvbWlzZVJlc29sdmUgPSBwcml2YXRlTWV0aG9kcy5zd2FsUHJvbWlzZVJlc29sdmUuZ2V0KHRoaXMpO1xuICAgIHJlbW92ZUNsYXNzKHBvcHVwLCBpbm5lclBhcmFtcy5zaG93Q2xhc3MucG9wdXApO1xuICAgIGFkZENsYXNzKHBvcHVwLCBpbm5lclBhcmFtcy5oaWRlQ2xhc3MucG9wdXApO1xuICAgIHZhciBiYWNrZHJvcCA9IGdldENvbnRhaW5lcigpO1xuICAgIHJlbW92ZUNsYXNzKGJhY2tkcm9wLCBpbm5lclBhcmFtcy5zaG93Q2xhc3MuYmFja2Ryb3ApO1xuICAgIGFkZENsYXNzKGJhY2tkcm9wLCBpbm5lclBhcmFtcy5oaWRlQ2xhc3MuYmFja2Ryb3ApO1xuICAgIGhhbmRsZVBvcHVwQW5pbWF0aW9uKHRoaXMsIHBvcHVwLCBpbm5lclBhcmFtcyk7XG5cbiAgICBpZiAodHlwZW9mIHJlc29sdmVWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJlc29sdmVWYWx1ZS5pc0Rpc21pc3NlZCA9IHR5cGVvZiByZXNvbHZlVmFsdWUuZGlzbWlzcyAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgICByZXNvbHZlVmFsdWUuaXNDb25maXJtZWQgPSB0eXBlb2YgcmVzb2x2ZVZhbHVlLmRpc21pc3MgPT09ICd1bmRlZmluZWQnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlVmFsdWUgPSB7XG4gICAgICAgIGlzRGlzbWlzc2VkOiB0cnVlLFxuICAgICAgICBpc0NvbmZpcm1lZDogZmFsc2VcbiAgICAgIH07XG4gICAgfSAvLyBSZXNvbHZlIFN3YWwgcHJvbWlzZVxuXG5cbiAgICBzd2FsUHJvbWlzZVJlc29sdmUocmVzb2x2ZVZhbHVlIHx8IHt9KTtcbiAgfVxuXG4gIHZhciBoYW5kbGVQb3B1cEFuaW1hdGlvbiA9IGZ1bmN0aW9uIGhhbmRsZVBvcHVwQW5pbWF0aW9uKGluc3RhbmNlLCBwb3B1cCwgaW5uZXJQYXJhbXMpIHtcbiAgICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7IC8vIElmIGFuaW1hdGlvbiBpcyBzdXBwb3J0ZWQsIGFuaW1hdGVcblxuICAgIHZhciBhbmltYXRpb25Jc1N1cHBvcnRlZCA9IGFuaW1hdGlvbkVuZEV2ZW50ICYmIGhhc0Nzc0FuaW1hdGlvbihwb3B1cCk7XG4gICAgdmFyIG9uQ2xvc2UgPSBpbm5lclBhcmFtcy5vbkNsb3NlLFxuICAgICAgICBvbkFmdGVyQ2xvc2UgPSBpbm5lclBhcmFtcy5vbkFmdGVyQ2xvc2U7XG5cbiAgICBpZiAob25DbG9zZSAhPT0gbnVsbCAmJiB0eXBlb2Ygb25DbG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb25DbG9zZShwb3B1cCk7XG4gICAgfVxuXG4gICAgaWYgKGFuaW1hdGlvbklzU3VwcG9ydGVkKSB7XG4gICAgICBhbmltYXRlUG9wdXAoaW5zdGFuY2UsIHBvcHVwLCBjb250YWluZXIsIG9uQWZ0ZXJDbG9zZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE90aGVyd2lzZSwgcmVtb3ZlIGltbWVkaWF0ZWx5XG4gICAgICByZW1vdmVQb3B1cEFuZFJlc2V0U3RhdGUoaW5zdGFuY2UsIGNvbnRhaW5lciwgaXNUb2FzdCgpLCBvbkFmdGVyQ2xvc2UpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgYW5pbWF0ZVBvcHVwID0gZnVuY3Rpb24gYW5pbWF0ZVBvcHVwKGluc3RhbmNlLCBwb3B1cCwgY29udGFpbmVyLCBvbkFmdGVyQ2xvc2UpIHtcbiAgICBnbG9iYWxTdGF0ZS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2sgPSByZW1vdmVQb3B1cEFuZFJlc2V0U3RhdGUuYmluZChudWxsLCBpbnN0YW5jZSwgY29udGFpbmVyLCBpc1RvYXN0KCksIG9uQWZ0ZXJDbG9zZSk7XG4gICAgcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihhbmltYXRpb25FbmRFdmVudCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gcG9wdXApIHtcbiAgICAgICAgZ2xvYmFsU3RhdGUuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrKCk7XG4gICAgICAgIGRlbGV0ZSBnbG9iYWxTdGF0ZS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2s7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHRyaWdnZXJPbkFmdGVyQ2xvc2VBbmREaXNwb3NlID0gZnVuY3Rpb24gdHJpZ2dlck9uQWZ0ZXJDbG9zZUFuZERpc3Bvc2UoaW5zdGFuY2UsIG9uQWZ0ZXJDbG9zZSkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHR5cGVvZiBvbkFmdGVyQ2xvc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb25BZnRlckNsb3NlKCk7XG4gICAgICB9XG5cbiAgICAgIGluc3RhbmNlLl9kZXN0cm95KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gc2V0QnV0dG9uc0Rpc2FibGVkKGluc3RhbmNlLCBidXR0b25zLCBkaXNhYmxlZCkge1xuICAgIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQoaW5zdGFuY2UpO1xuICAgIGJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbiAoYnV0dG9uKSB7XG4gICAgICBkb21DYWNoZVtidXR0b25dLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRJbnB1dERpc2FibGVkKGlucHV0LCBkaXNhYmxlZCkge1xuICAgIGlmICghaW5wdXQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoaW5wdXQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgdmFyIHJhZGlvc0NvbnRhaW5lciA9IGlucHV0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIHZhciByYWRpb3MgPSByYWRpb3NDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByYWRpb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmFkaW9zW2ldLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0LmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZW5hYmxlQnV0dG9ucygpIHtcbiAgICBzZXRCdXR0b25zRGlzYWJsZWQodGhpcywgWydjb25maXJtQnV0dG9uJywgJ2NhbmNlbEJ1dHRvbiddLCBmYWxzZSk7XG4gIH1cbiAgZnVuY3Rpb24gZGlzYWJsZUJ1dHRvbnMoKSB7XG4gICAgc2V0QnV0dG9uc0Rpc2FibGVkKHRoaXMsIFsnY29uZmlybUJ1dHRvbicsICdjYW5jZWxCdXR0b24nXSwgdHJ1ZSk7XG4gIH1cbiAgZnVuY3Rpb24gZW5hYmxlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHNldElucHV0RGlzYWJsZWQodGhpcy5nZXRJbnB1dCgpLCBmYWxzZSk7XG4gIH1cbiAgZnVuY3Rpb24gZGlzYWJsZUlucHV0KCkge1xuICAgIHJldHVybiBzZXRJbnB1dERpc2FibGVkKHRoaXMuZ2V0SW5wdXQoKSwgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBzaG93VmFsaWRhdGlvbk1lc3NhZ2UoZXJyb3IpIHtcbiAgICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuICAgIHNldElubmVySHRtbChkb21DYWNoZS52YWxpZGF0aW9uTWVzc2FnZSwgZXJyb3IpO1xuICAgIHZhciBwb3B1cENvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb21DYWNoZS5wb3B1cCk7XG4gICAgZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2Uuc3R5bGUubWFyZ2luTGVmdCA9IFwiLVwiLmNvbmNhdChwb3B1cENvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1sZWZ0JykpO1xuICAgIGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCItXCIuY29uY2F0KHBvcHVwQ29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXJpZ2h0JykpO1xuICAgIHNob3coZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UpO1xuICAgIHZhciBpbnB1dCA9IHRoaXMuZ2V0SW5wdXQoKTtcblxuICAgIGlmIChpbnB1dCkge1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWludmFsaWQnLCB0cnVlKTtcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRCeScsIHN3YWxDbGFzc2VzWyd2YWxpZGF0aW9uLW1lc3NhZ2UnXSk7XG4gICAgICBmb2N1c0lucHV0KGlucHV0KTtcbiAgICAgIGFkZENsYXNzKGlucHV0LCBzd2FsQ2xhc3Nlcy5pbnB1dGVycm9yKTtcbiAgICB9XG4gIH0gLy8gSGlkZSBibG9jayB3aXRoIHZhbGlkYXRpb24gbWVzc2FnZVxuXG4gIGZ1bmN0aW9uIHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UkMSgpIHtcbiAgICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuXG4gICAgaWYgKGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgICBoaWRlKGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICB9XG5cbiAgICB2YXIgaW5wdXQgPSB0aGlzLmdldElucHV0KCk7XG5cbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJyk7XG4gICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkQnknKTtcbiAgICAgIHJlbW92ZUNsYXNzKGlucHV0LCBzd2FsQ2xhc3Nlcy5pbnB1dGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRQcm9ncmVzc1N0ZXBzJDEoKSB7XG4gICAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgICByZXR1cm4gZG9tQ2FjaGUucHJvZ3Jlc3NTdGVwcztcbiAgfVxuXG4gIHZhciBUaW1lciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGltZXIoY2FsbGJhY2ssIGRlbGF5KSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGltZXIpO1xuXG4gICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICB0aGlzLnJlbWFpbmluZyA9IGRlbGF5O1xuICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFRpbWVyLCBbe1xuICAgICAga2V5OiBcInN0YXJ0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5ydW5uaW5nKSB7XG4gICAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgIHRoaXMuaWQgPSBzZXRUaW1lb3V0KHRoaXMuY2FsbGJhY2ssIHRoaXMucmVtYWluaW5nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlbWFpbmluZztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic3RvcFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIGlmICh0aGlzLnJ1bm5pbmcpIHtcbiAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5pZCk7XG4gICAgICAgICAgdGhpcy5yZW1haW5pbmcgLT0gbmV3IERhdGUoKSAtIHRoaXMuc3RhcnRlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlbWFpbmluZztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiaW5jcmVhc2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbmNyZWFzZShuKSB7XG4gICAgICAgIHZhciBydW5uaW5nID0gdGhpcy5ydW5uaW5nO1xuXG4gICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlbWFpbmluZyArPSBuO1xuXG4gICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVtYWluaW5nO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRUaW1lckxlZnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUaW1lckxlZnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnJ1bm5pbmcpIHtcbiAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yZW1haW5pbmc7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImlzUnVubmluZ1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzUnVubmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucnVubmluZztcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVGltZXI7XG4gIH0oKTtcblxuICB2YXIgZGVmYXVsdElucHV0VmFsaWRhdG9ycyA9IHtcbiAgICBlbWFpbDogZnVuY3Rpb24gZW1haWwoc3RyaW5nLCB2YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgcmV0dXJuIC9eW2EtekEtWjAtOS4rXy1dK0BbYS16QS1aMC05Li1dK1xcLlthLXpBLVowLTktXXsyLDI0fSQvLnRlc3Qoc3RyaW5nKSA/IFByb21pc2UucmVzb2x2ZSgpIDogUHJvbWlzZS5yZXNvbHZlKHZhbGlkYXRpb25NZXNzYWdlIHx8ICdJbnZhbGlkIGVtYWlsIGFkZHJlc3MnKTtcbiAgICB9LFxuICAgIHVybDogZnVuY3Rpb24gdXJsKHN0cmluZywgdmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgIC8vIHRha2VuIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM4MDk0MzUgd2l0aCBhIHNtYWxsIGNoYW5nZSBmcm9tICMxMzA2IGFuZCAjMjAxM1xuICAgICAgcmV0dXJuIC9eaHR0cHM/OlxcL1xcLyh3d3dcXC4pP1stYS16QS1aMC05QDolLl8rfiM9XXsxLDI1Nn1cXC5bYS16XXsyLDYzfVxcYihbLWEtekEtWjAtOUA6JV8rLn4jPyYvPV0qKSQvLnRlc3Qoc3RyaW5nKSA/IFByb21pc2UucmVzb2x2ZSgpIDogUHJvbWlzZS5yZXNvbHZlKHZhbGlkYXRpb25NZXNzYWdlIHx8ICdJbnZhbGlkIFVSTCcpO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBzZXREZWZhdWx0SW5wdXRWYWxpZGF0b3JzKHBhcmFtcykge1xuICAgIC8vIFVzZSBkZWZhdWx0IGBpbnB1dFZhbGlkYXRvcmAgZm9yIHN1cHBvcnRlZCBpbnB1dCB0eXBlcyBpZiBub3QgcHJvdmlkZWRcbiAgICBpZiAoIXBhcmFtcy5pbnB1dFZhbGlkYXRvcikge1xuICAgICAgT2JqZWN0LmtleXMoZGVmYXVsdElucHV0VmFsaWRhdG9ycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmIChwYXJhbXMuaW5wdXQgPT09IGtleSkge1xuICAgICAgICAgIHBhcmFtcy5pbnB1dFZhbGlkYXRvciA9IGRlZmF1bHRJbnB1dFZhbGlkYXRvcnNba2V5XTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVDdXN0b21UYXJnZXRFbGVtZW50KHBhcmFtcykge1xuICAgIC8vIERldGVybWluZSBpZiB0aGUgY3VzdG9tIHRhcmdldCBlbGVtZW50IGlzIHZhbGlkXG4gICAgaWYgKCFwYXJhbXMudGFyZ2V0IHx8IHR5cGVvZiBwYXJhbXMudGFyZ2V0ID09PSAnc3RyaW5nJyAmJiAhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbXMudGFyZ2V0KSB8fCB0eXBlb2YgcGFyYW1zLnRhcmdldCAhPT0gJ3N0cmluZycgJiYgIXBhcmFtcy50YXJnZXQuYXBwZW5kQ2hpbGQpIHtcbiAgICAgIHdhcm4oJ1RhcmdldCBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkLCBkZWZhdWx0aW5nIHRvIFwiYm9keVwiJyk7XG4gICAgICBwYXJhbXMudGFyZ2V0ID0gJ2JvZHknO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogU2V0IHR5cGUsIHRleHQgYW5kIGFjdGlvbnMgb24gcG9wdXBcbiAgICpcbiAgICogQHBhcmFtIHBhcmFtc1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG5cblxuICBmdW5jdGlvbiBzZXRQYXJhbWV0ZXJzKHBhcmFtcykge1xuICAgIHNldERlZmF1bHRJbnB1dFZhbGlkYXRvcnMocGFyYW1zKTsgLy8gc2hvd0xvYWRlck9uQ29uZmlybSAmJiBwcmVDb25maXJtXG5cbiAgICBpZiAocGFyYW1zLnNob3dMb2FkZXJPbkNvbmZpcm0gJiYgIXBhcmFtcy5wcmVDb25maXJtKSB7XG4gICAgICB3YXJuKCdzaG93TG9hZGVyT25Db25maXJtIGlzIHNldCB0byB0cnVlLCBidXQgcHJlQ29uZmlybSBpcyBub3QgZGVmaW5lZC5cXG4nICsgJ3Nob3dMb2FkZXJPbkNvbmZpcm0gc2hvdWxkIGJlIHVzZWQgdG9nZXRoZXIgd2l0aCBwcmVDb25maXJtLCBzZWUgdXNhZ2UgZXhhbXBsZTpcXG4nICsgJ2h0dHBzOi8vc3dlZXRhbGVydDIuZ2l0aHViLmlvLyNhamF4LXJlcXVlc3QnKTtcbiAgICB9IC8vIHBhcmFtcy5hbmltYXRpb24gd2lsbCBiZSBhY3R1YWxseSB1c2VkIGluIHJlbmRlclBvcHVwLmpzXG4gICAgLy8gYnV0IGluIGNhc2Ugd2hlbiBwYXJhbXMuYW5pbWF0aW9uIGlzIGEgZnVuY3Rpb24sIHdlIG5lZWQgdG8gY2FsbCB0aGF0IGZ1bmN0aW9uXG4gICAgLy8gYmVmb3JlIHBvcHVwIChyZSlpbml0aWFsaXphdGlvbiwgc28gaXQnbGwgYmUgcG9zc2libGUgdG8gY2hlY2sgU3dhbC5pc1Zpc2libGUoKVxuICAgIC8vIGluc2lkZSB0aGUgcGFyYW1zLmFuaW1hdGlvbiBmdW5jdGlvblxuXG5cbiAgICBwYXJhbXMuYW5pbWF0aW9uID0gY2FsbElmRnVuY3Rpb24ocGFyYW1zLmFuaW1hdGlvbik7XG4gICAgdmFsaWRhdGVDdXN0b21UYXJnZXRFbGVtZW50KHBhcmFtcyk7IC8vIFJlcGxhY2UgbmV3bGluZXMgd2l0aCA8YnI+IGluIHRpdGxlXG5cbiAgICBpZiAodHlwZW9mIHBhcmFtcy50aXRsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBhcmFtcy50aXRsZSA9IHBhcmFtcy50aXRsZS5zcGxpdCgnXFxuJykuam9pbignPGJyIC8+Jyk7XG4gICAgfVxuXG4gICAgaW5pdChwYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW4gcG9wdXAsIGFkZCBuZWNlc3NhcnkgY2xhc3NlcyBhbmQgc3R5bGVzLCBmaXggc2Nyb2xsYmFyXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtc1xuICAgKi9cblxuICB2YXIgb3BlblBvcHVwID0gZnVuY3Rpb24gb3BlblBvcHVwKHBhcmFtcykge1xuICAgIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuXG4gICAgaWYgKHR5cGVvZiBwYXJhbXMub25CZWZvcmVPcGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwYXJhbXMub25CZWZvcmVPcGVuKHBvcHVwKTtcbiAgICB9XG5cbiAgICB2YXIgYm9keVN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpO1xuICAgIHZhciBpbml0aWFsQm9keU92ZXJmbG93ID0gYm9keVN0eWxlcy5vdmVyZmxvd1k7XG4gICAgYWRkQ2xhc3NlcyQxKGNvbnRhaW5lciwgcG9wdXAsIHBhcmFtcyk7IC8vIHNjcm9sbGluZyBpcyAnaGlkZGVuJyB1bnRpbCBhbmltYXRpb24gaXMgZG9uZSwgYWZ0ZXIgdGhhdCAnYXV0bydcblxuICAgIHNldFNjcm9sbGluZ1Zpc2liaWxpdHkoY29udGFpbmVyLCBwb3B1cCk7XG5cbiAgICBpZiAoaXNNb2RhbCgpKSB7XG4gICAgICBmaXhTY3JvbGxDb250YWluZXIoY29udGFpbmVyLCBwYXJhbXMuc2Nyb2xsYmFyUGFkZGluZywgaW5pdGlhbEJvZHlPdmVyZmxvdyk7XG4gICAgICBzZXRBcmlhSGlkZGVuKCk7XG4gICAgfVxuXG4gICAgaWYgKCFpc1RvYXN0KCkgJiYgIWdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudCkge1xuICAgICAgZ2xvYmFsU3RhdGUucHJldmlvdXNBY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHBhcmFtcy5vbk9wZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcGFyYW1zLm9uT3Blbihwb3B1cCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZW1vdmVDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzWyduby10cmFuc2l0aW9uJ10pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHN3YWxPcGVuQW5pbWF0aW9uRmluaXNoZWQoZXZlbnQpIHtcbiAgICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuXG4gICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gcG9wdXApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gICAgcG9wdXAucmVtb3ZlRXZlbnRMaXN0ZW5lcihhbmltYXRpb25FbmRFdmVudCwgc3dhbE9wZW5BbmltYXRpb25GaW5pc2hlZCk7XG4gICAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdhdXRvJztcbiAgfVxuXG4gIHZhciBzZXRTY3JvbGxpbmdWaXNpYmlsaXR5ID0gZnVuY3Rpb24gc2V0U2Nyb2xsaW5nVmlzaWJpbGl0eShjb250YWluZXIsIHBvcHVwKSB7XG4gICAgaWYgKGFuaW1hdGlvbkVuZEV2ZW50ICYmIGhhc0Nzc0FuaW1hdGlvbihwb3B1cCkpIHtcbiAgICAgIGNvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcbiAgICAgIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoYW5pbWF0aW9uRW5kRXZlbnQsIHN3YWxPcGVuQW5pbWF0aW9uRmluaXNoZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXIuc3R5bGUub3ZlcmZsb3dZID0gJ2F1dG8nO1xuICAgIH1cbiAgfTtcblxuICB2YXIgZml4U2Nyb2xsQ29udGFpbmVyID0gZnVuY3Rpb24gZml4U2Nyb2xsQ29udGFpbmVyKGNvbnRhaW5lciwgc2Nyb2xsYmFyUGFkZGluZywgaW5pdGlhbEJvZHlPdmVyZmxvdykge1xuICAgIGlPU2ZpeCgpO1xuICAgIElFZml4KCk7XG5cbiAgICBpZiAoc2Nyb2xsYmFyUGFkZGluZyAmJiBpbml0aWFsQm9keU92ZXJmbG93ICE9PSAnaGlkZGVuJykge1xuICAgICAgZml4U2Nyb2xsYmFyKCk7XG4gICAgfSAvLyBzd2VldGFsZXJ0Mi9pc3N1ZXMvMTI0N1xuXG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSAwO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBhZGRDbGFzc2VzJDEgPSBmdW5jdGlvbiBhZGRDbGFzc2VzKGNvbnRhaW5lciwgcG9wdXAsIHBhcmFtcykge1xuICAgIGFkZENsYXNzKGNvbnRhaW5lciwgcGFyYW1zLnNob3dDbGFzcy5iYWNrZHJvcCk7XG4gICAgc2hvdyhwb3B1cCk7IC8vIEFuaW1hdGUgcG9wdXAgcmlnaHQgYWZ0ZXIgc2hvd2luZyBpdFxuXG4gICAgYWRkQ2xhc3MocG9wdXAsIHBhcmFtcy5zaG93Q2xhc3MucG9wdXApO1xuICAgIGFkZENsYXNzKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldLCBzd2FsQ2xhc3Nlcy5zaG93bik7XG5cbiAgICBpZiAocGFyYW1zLmhlaWdodEF1dG8gJiYgcGFyYW1zLmJhY2tkcm9wICYmICFwYXJhbXMudG9hc3QpIHtcbiAgICAgIGFkZENsYXNzKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldLCBzd2FsQ2xhc3Nlc1snaGVpZ2h0LWF1dG8nXSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVJbnB1dE9wdGlvbnNBbmRWYWx1ZSA9IGZ1bmN0aW9uIGhhbmRsZUlucHV0T3B0aW9uc0FuZFZhbHVlKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgICBpZiAocGFyYW1zLmlucHV0ID09PSAnc2VsZWN0JyB8fCBwYXJhbXMuaW5wdXQgPT09ICdyYWRpbycpIHtcbiAgICAgIGhhbmRsZUlucHV0T3B0aW9ucyhpbnN0YW5jZSwgcGFyYW1zKTtcbiAgICB9IGVsc2UgaWYgKFsndGV4dCcsICdlbWFpbCcsICdudW1iZXInLCAndGVsJywgJ3RleHRhcmVhJ10uaW5kZXhPZihwYXJhbXMuaW5wdXQpICE9PSAtMSAmJiAoaGFzVG9Qcm9taXNlRm4ocGFyYW1zLmlucHV0VmFsdWUpIHx8IGlzUHJvbWlzZShwYXJhbXMuaW5wdXRWYWx1ZSkpKSB7XG4gICAgICBoYW5kbGVJbnB1dFZhbHVlKGluc3RhbmNlLCBwYXJhbXMpO1xuICAgIH1cbiAgfTtcbiAgdmFyIGdldElucHV0VmFsdWUgPSBmdW5jdGlvbiBnZXRJbnB1dFZhbHVlKGluc3RhbmNlLCBpbm5lclBhcmFtcykge1xuICAgIHZhciBpbnB1dCA9IGluc3RhbmNlLmdldElucHV0KCk7XG5cbiAgICBpZiAoIWlucHV0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGlubmVyUGFyYW1zLmlucHV0KSB7XG4gICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgIHJldHVybiBnZXRDaGVja2JveFZhbHVlKGlucHV0KTtcblxuICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICByZXR1cm4gZ2V0UmFkaW9WYWx1ZShpbnB1dCk7XG5cbiAgICAgIGNhc2UgJ2ZpbGUnOlxuICAgICAgICByZXR1cm4gZ2V0RmlsZVZhbHVlKGlucHV0KTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGlubmVyUGFyYW1zLmlucHV0QXV0b1RyaW0gPyBpbnB1dC52YWx1ZS50cmltKCkgOiBpbnB1dC52YWx1ZTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGdldENoZWNrYm94VmFsdWUgPSBmdW5jdGlvbiBnZXRDaGVja2JveFZhbHVlKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0LmNoZWNrZWQgPyAxIDogMDtcbiAgfTtcblxuICB2YXIgZ2V0UmFkaW9WYWx1ZSA9IGZ1bmN0aW9uIGdldFJhZGlvVmFsdWUoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQuY2hlY2tlZCA/IGlucHV0LnZhbHVlIDogbnVsbDtcbiAgfTtcblxuICB2YXIgZ2V0RmlsZVZhbHVlID0gZnVuY3Rpb24gZ2V0RmlsZVZhbHVlKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0LmZpbGVzLmxlbmd0aCA/IGlucHV0LmdldEF0dHJpYnV0ZSgnbXVsdGlwbGUnKSAhPT0gbnVsbCA/IGlucHV0LmZpbGVzIDogaW5wdXQuZmlsZXNbMF0gOiBudWxsO1xuICB9O1xuXG4gIHZhciBoYW5kbGVJbnB1dE9wdGlvbnMgPSBmdW5jdGlvbiBoYW5kbGVJbnB1dE9wdGlvbnMoaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHZhciBjb250ZW50ID0gZ2V0Q29udGVudCgpO1xuXG4gICAgdmFyIHByb2Nlc3NJbnB1dE9wdGlvbnMgPSBmdW5jdGlvbiBwcm9jZXNzSW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucykge1xuICAgICAgcmV0dXJuIHBvcHVsYXRlSW5wdXRPcHRpb25zW3BhcmFtcy5pbnB1dF0oY29udGVudCwgZm9ybWF0SW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucyksIHBhcmFtcyk7XG4gICAgfTtcblxuICAgIGlmIChoYXNUb1Byb21pc2VGbihwYXJhbXMuaW5wdXRPcHRpb25zKSB8fCBpc1Byb21pc2UocGFyYW1zLmlucHV0T3B0aW9ucykpIHtcbiAgICAgIHNob3dMb2FkaW5nKCk7XG4gICAgICBhc1Byb21pc2UocGFyYW1zLmlucHV0T3B0aW9ucykudGhlbihmdW5jdGlvbiAoaW5wdXRPcHRpb25zKSB7XG4gICAgICAgIGluc3RhbmNlLmhpZGVMb2FkaW5nKCk7XG4gICAgICAgIHByb2Nlc3NJbnB1dE9wdGlvbnMoaW5wdXRPcHRpb25zKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoX3R5cGVvZihwYXJhbXMuaW5wdXRPcHRpb25zKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHByb2Nlc3NJbnB1dE9wdGlvbnMocGFyYW1zLmlucHV0T3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVycm9yKFwiVW5leHBlY3RlZCB0eXBlIG9mIGlucHV0T3B0aW9ucyEgRXhwZWN0ZWQgb2JqZWN0LCBNYXAgb3IgUHJvbWlzZSwgZ290IFwiLmNvbmNhdChfdHlwZW9mKHBhcmFtcy5pbnB1dE9wdGlvbnMpKSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVJbnB1dFZhbHVlID0gZnVuY3Rpb24gaGFuZGxlSW5wdXRWYWx1ZShpbnN0YW5jZSwgcGFyYW1zKSB7XG4gICAgdmFyIGlucHV0ID0gaW5zdGFuY2UuZ2V0SW5wdXQoKTtcbiAgICBoaWRlKGlucHV0KTtcbiAgICBhc1Byb21pc2UocGFyYW1zLmlucHV0VmFsdWUpLnRoZW4oZnVuY3Rpb24gKGlucHV0VmFsdWUpIHtcbiAgICAgIGlucHV0LnZhbHVlID0gcGFyYW1zLmlucHV0ID09PSAnbnVtYmVyJyA/IHBhcnNlRmxvYXQoaW5wdXRWYWx1ZSkgfHwgMCA6IFwiXCIuY29uY2F0KGlucHV0VmFsdWUpO1xuICAgICAgc2hvdyhpbnB1dCk7XG4gICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgaW5zdGFuY2UuaGlkZUxvYWRpbmcoKTtcbiAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGVycm9yKFwiRXJyb3IgaW4gaW5wdXRWYWx1ZSBwcm9taXNlOiBcIi5jb25jYXQoZXJyKSk7XG4gICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgc2hvdyhpbnB1dCk7XG4gICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgaW5zdGFuY2UuaGlkZUxvYWRpbmcoKTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgcG9wdWxhdGVJbnB1dE9wdGlvbnMgPSB7XG4gICAgc2VsZWN0OiBmdW5jdGlvbiBzZWxlY3QoY29udGVudCwgaW5wdXRPcHRpb25zLCBwYXJhbXMpIHtcbiAgICAgIHZhciBzZWxlY3QgPSBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgc3dhbENsYXNzZXMuc2VsZWN0KTtcblxuICAgICAgdmFyIHJlbmRlck9wdGlvbiA9IGZ1bmN0aW9uIHJlbmRlck9wdGlvbihwYXJlbnQsIG9wdGlvbkxhYmVsLCBvcHRpb25WYWx1ZSkge1xuICAgICAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IG9wdGlvblZhbHVlO1xuICAgICAgICBzZXRJbm5lckh0bWwob3B0aW9uLCBvcHRpb25MYWJlbCk7XG5cbiAgICAgICAgaWYgKHBhcmFtcy5pbnB1dFZhbHVlLnRvU3RyaW5nKCkgPT09IG9wdGlvblZhbHVlLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICB9O1xuXG4gICAgICBpbnB1dE9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXRPcHRpb24pIHtcbiAgICAgICAgdmFyIG9wdGlvblZhbHVlID0gaW5wdXRPcHRpb25bMF07XG4gICAgICAgIHZhciBvcHRpb25MYWJlbCA9IGlucHV0T3B0aW9uWzFdOyAvLyA8b3B0Z3JvdXA+IHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9odG1sNDAxL2ludGVyYWN0L2Zvcm1zLmh0bWwjaC0xNy42XG4gICAgICAgIC8vIFwiLi4uYWxsIE9QVEdST1VQIGVsZW1lbnRzIG11c3QgYmUgc3BlY2lmaWVkIGRpcmVjdGx5IHdpdGhpbiBhIFNFTEVDVCBlbGVtZW50IChpLmUuLCBncm91cHMgbWF5IG5vdCBiZSBuZXN0ZWQpLi4uXCJcbiAgICAgICAgLy8gY2hlY2sgd2hldGhlciB0aGlzIGlzIGEgPG9wdGdyb3VwPlxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbkxhYmVsKSkge1xuICAgICAgICAgIC8vIGlmIGl0IGlzIGFuIGFycmF5LCB0aGVuIGl0IGlzIGFuIDxvcHRncm91cD5cbiAgICAgICAgICB2YXIgb3B0Z3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRncm91cCcpO1xuICAgICAgICAgIG9wdGdyb3VwLmxhYmVsID0gb3B0aW9uVmFsdWU7XG4gICAgICAgICAgb3B0Z3JvdXAuZGlzYWJsZWQgPSBmYWxzZTsgLy8gbm90IGNvbmZpZ3VyYWJsZSBmb3Igbm93XG5cbiAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0Z3JvdXApO1xuICAgICAgICAgIG9wdGlvbkxhYmVsLmZvckVhY2goZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIHJldHVybiByZW5kZXJPcHRpb24ob3B0Z3JvdXAsIG9bMV0sIG9bMF0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNhc2Ugb2YgPG9wdGlvbj5cbiAgICAgICAgICByZW5kZXJPcHRpb24oc2VsZWN0LCBvcHRpb25MYWJlbCwgb3B0aW9uVmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHNlbGVjdC5mb2N1cygpO1xuICAgIH0sXG4gICAgcmFkaW86IGZ1bmN0aW9uIHJhZGlvKGNvbnRlbnQsIGlucHV0T3B0aW9ucywgcGFyYW1zKSB7XG4gICAgICB2YXIgcmFkaW8gPSBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgc3dhbENsYXNzZXMucmFkaW8pO1xuICAgICAgaW5wdXRPcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKGlucHV0T3B0aW9uKSB7XG4gICAgICAgIHZhciByYWRpb1ZhbHVlID0gaW5wdXRPcHRpb25bMF07XG4gICAgICAgIHZhciByYWRpb0xhYmVsID0gaW5wdXRPcHRpb25bMV07XG4gICAgICAgIHZhciByYWRpb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdmFyIHJhZGlvTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgcmFkaW9JbnB1dC50eXBlID0gJ3JhZGlvJztcbiAgICAgICAgcmFkaW9JbnB1dC5uYW1lID0gc3dhbENsYXNzZXMucmFkaW87XG4gICAgICAgIHJhZGlvSW5wdXQudmFsdWUgPSByYWRpb1ZhbHVlO1xuXG4gICAgICAgIGlmIChwYXJhbXMuaW5wdXRWYWx1ZS50b1N0cmluZygpID09PSByYWRpb1ZhbHVlLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICByYWRpb0lucHV0LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBzZXRJbm5lckh0bWwobGFiZWwsIHJhZGlvTGFiZWwpO1xuICAgICAgICBsYWJlbC5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5sYWJlbDtcbiAgICAgICAgcmFkaW9MYWJlbEVsZW1lbnQuYXBwZW5kQ2hpbGQocmFkaW9JbnB1dCk7XG4gICAgICAgIHJhZGlvTGFiZWxFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgcmFkaW8uYXBwZW5kQ2hpbGQocmFkaW9MYWJlbEVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgICB2YXIgcmFkaW9zID0gcmFkaW8ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcblxuICAgICAgaWYgKHJhZGlvcy5sZW5ndGgpIHtcbiAgICAgICAgcmFkaW9zWzBdLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogQ29udmVydHMgYGlucHV0T3B0aW9uc2AgaW50byBhbiBhcnJheSBvZiBgW3ZhbHVlLCBsYWJlbF1gc1xuICAgKiBAcGFyYW0gaW5wdXRPcHRpb25zXG4gICAqL1xuXG4gIHZhciBmb3JtYXRJbnB1dE9wdGlvbnMgPSBmdW5jdGlvbiBmb3JtYXRJbnB1dE9wdGlvbnMoaW5wdXRPcHRpb25zKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiBNYXAgIT09ICd1bmRlZmluZWQnICYmIGlucHV0T3B0aW9ucyBpbnN0YW5jZW9mIE1hcCkge1xuICAgICAgaW5wdXRPcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlRm9ybWF0dGVkID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKF90eXBlb2YodmFsdWVGb3JtYXR0ZWQpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIC8vIGNhc2Ugb2YgPG9wdGdyb3VwPlxuICAgICAgICAgIHZhbHVlRm9ybWF0dGVkID0gZm9ybWF0SW5wdXRPcHRpb25zKHZhbHVlRm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5wdXNoKFtrZXksIHZhbHVlRm9ybWF0dGVkXSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LmtleXMoaW5wdXRPcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlRm9ybWF0dGVkID0gaW5wdXRPcHRpb25zW2tleV07XG5cbiAgICAgICAgaWYgKF90eXBlb2YodmFsdWVGb3JtYXR0ZWQpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIC8vIGNhc2Ugb2YgPG9wdGdyb3VwPlxuICAgICAgICAgIHZhbHVlRm9ybWF0dGVkID0gZm9ybWF0SW5wdXRPcHRpb25zKHZhbHVlRm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5wdXNoKFtrZXksIHZhbHVlRm9ybWF0dGVkXSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHZhciBoYW5kbGVDb25maXJtQnV0dG9uQ2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVDb25maXJtQnV0dG9uQ2xpY2soaW5zdGFuY2UsIGlubmVyUGFyYW1zKSB7XG4gICAgaW5zdGFuY2UuZGlzYWJsZUJ1dHRvbnMoKTtcblxuICAgIGlmIChpbm5lclBhcmFtcy5pbnB1dCkge1xuICAgICAgaGFuZGxlQ29uZmlybVdpdGhJbnB1dChpbnN0YW5jZSwgaW5uZXJQYXJhbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maXJtKGluc3RhbmNlLCBpbm5lclBhcmFtcywgdHJ1ZSk7XG4gICAgfVxuICB9O1xuICB2YXIgaGFuZGxlQ2FuY2VsQnV0dG9uQ2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVDYW5jZWxCdXR0b25DbGljayhpbnN0YW5jZSwgZGlzbWlzc1dpdGgpIHtcbiAgICBpbnN0YW5jZS5kaXNhYmxlQnV0dG9ucygpO1xuICAgIGRpc21pc3NXaXRoKERpc21pc3NSZWFzb24uY2FuY2VsKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlQ29uZmlybVdpdGhJbnB1dCA9IGZ1bmN0aW9uIGhhbmRsZUNvbmZpcm1XaXRoSW5wdXQoaW5zdGFuY2UsIGlubmVyUGFyYW1zKSB7XG4gICAgdmFyIGlucHV0VmFsdWUgPSBnZXRJbnB1dFZhbHVlKGluc3RhbmNlLCBpbm5lclBhcmFtcyk7XG5cbiAgICBpZiAoaW5uZXJQYXJhbXMuaW5wdXRWYWxpZGF0b3IpIHtcbiAgICAgIGluc3RhbmNlLmRpc2FibGVJbnB1dCgpO1xuICAgICAgdmFyIHZhbGlkYXRpb25Qcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhc1Byb21pc2UoaW5uZXJQYXJhbXMuaW5wdXRWYWxpZGF0b3IoaW5wdXRWYWx1ZSwgaW5uZXJQYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2UpKTtcbiAgICAgIH0pO1xuICAgICAgdmFsaWRhdGlvblByb21pc2UudGhlbihmdW5jdGlvbiAodmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgICAgaW5zdGFuY2UuZW5hYmxlQnV0dG9ucygpO1xuICAgICAgICBpbnN0YW5jZS5lbmFibGVJbnB1dCgpO1xuXG4gICAgICAgIGlmICh2YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgICAgIGluc3RhbmNlLnNob3dWYWxpZGF0aW9uTWVzc2FnZSh2YWxpZGF0aW9uTWVzc2FnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uZmlybShpbnN0YW5jZSwgaW5uZXJQYXJhbXMsIGlucHV0VmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKCFpbnN0YW5jZS5nZXRJbnB1dCgpLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgaW5zdGFuY2UuZW5hYmxlQnV0dG9ucygpO1xuICAgICAgaW5zdGFuY2Uuc2hvd1ZhbGlkYXRpb25NZXNzYWdlKGlubmVyUGFyYW1zLnZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlybShpbnN0YW5jZSwgaW5uZXJQYXJhbXMsIGlucHV0VmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgc3VjY2VlZFdpdGggPSBmdW5jdGlvbiBzdWNjZWVkV2l0aChpbnN0YW5jZSwgdmFsdWUpIHtcbiAgICBpbnN0YW5jZS5jbG9zZVBvcHVwKHtcbiAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH0pO1xuICB9O1xuXG4gIHZhciBjb25maXJtID0gZnVuY3Rpb24gY29uZmlybShpbnN0YW5jZSwgaW5uZXJQYXJhbXMsIHZhbHVlKSB7XG4gICAgaWYgKGlubmVyUGFyYW1zLnNob3dMb2FkZXJPbkNvbmZpcm0pIHtcbiAgICAgIHNob3dMb2FkaW5nKCk7IC8vIFRPRE86IG1ha2Ugc2hvd0xvYWRpbmcgYW4gKmluc3RhbmNlKiBtZXRob2RcbiAgICB9XG5cbiAgICBpZiAoaW5uZXJQYXJhbXMucHJlQ29uZmlybSkge1xuICAgICAgaW5zdGFuY2UucmVzZXRWYWxpZGF0aW9uTWVzc2FnZSgpO1xuICAgICAgdmFyIHByZUNvbmZpcm1Qcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhc1Byb21pc2UoaW5uZXJQYXJhbXMucHJlQ29uZmlybSh2YWx1ZSwgaW5uZXJQYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2UpKTtcbiAgICAgIH0pO1xuICAgICAgcHJlQ29uZmlybVByb21pc2UudGhlbihmdW5jdGlvbiAocHJlQ29uZmlybVZhbHVlKSB7XG4gICAgICAgIGlmIChpc1Zpc2libGUoZ2V0VmFsaWRhdGlvbk1lc3NhZ2UoKSkgfHwgcHJlQ29uZmlybVZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgIGluc3RhbmNlLmhpZGVMb2FkaW5nKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3VjY2VlZFdpdGgoaW5zdGFuY2UsIHR5cGVvZiBwcmVDb25maXJtVmFsdWUgPT09ICd1bmRlZmluZWQnID8gdmFsdWUgOiBwcmVDb25maXJtVmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3VjY2VlZFdpdGgoaW5zdGFuY2UsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGFkZEtleWRvd25IYW5kbGVyID0gZnVuY3Rpb24gYWRkS2V5ZG93bkhhbmRsZXIoaW5zdGFuY2UsIGdsb2JhbFN0YXRlLCBpbm5lclBhcmFtcywgZGlzbWlzc1dpdGgpIHtcbiAgICBpZiAoZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldCAmJiBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlckFkZGVkKSB7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlciwge1xuICAgICAgICBjYXB0dXJlOiBnbG9iYWxTdGF0ZS5rZXlkb3duTGlzdGVuZXJDYXB0dXJlXG4gICAgICB9KTtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyQWRkZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIWlubmVyUGFyYW1zLnRvYXN0KSB7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBrZXlkb3duSGFuZGxlcihpbnN0YW5jZSwgZSwgZGlzbWlzc1dpdGgpO1xuICAgICAgfTtcblxuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldCA9IGlubmVyUGFyYW1zLmtleWRvd25MaXN0ZW5lckNhcHR1cmUgPyB3aW5kb3cgOiBnZXRQb3B1cCgpO1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZSA9IGlubmVyUGFyYW1zLmtleWRvd25MaXN0ZW5lckNhcHR1cmU7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlciwge1xuICAgICAgICBjYXB0dXJlOiBnbG9iYWxTdGF0ZS5rZXlkb3duTGlzdGVuZXJDYXB0dXJlXG4gICAgICB9KTtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyQWRkZWQgPSB0cnVlO1xuICAgIH1cbiAgfTsgLy8gRm9jdXMgaGFuZGxpbmdcblxuICB2YXIgc2V0Rm9jdXMgPSBmdW5jdGlvbiBzZXRGb2N1cyhpbm5lclBhcmFtcywgaW5kZXgsIGluY3JlbWVudCkge1xuICAgIHZhciBmb2N1c2FibGVFbGVtZW50cyA9IGdldEZvY3VzYWJsZUVsZW1lbnRzKCk7IC8vIHNlYXJjaCBmb3IgdmlzaWJsZSBlbGVtZW50cyBhbmQgc2VsZWN0IHRoZSBuZXh0IHBvc3NpYmxlIG1hdGNoXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpbmRleCA9IGluZGV4ICsgaW5jcmVtZW50OyAvLyByb2xsb3ZlciB0byBmaXJzdCBpdGVtXG5cbiAgICAgIGlmIChpbmRleCA9PT0gZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgIGluZGV4ID0gMDsgLy8gZ28gdG8gbGFzdCBpdGVtXG4gICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICBpbmRleCA9IGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCAtIDE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb2N1c2FibGVFbGVtZW50c1tpbmRleF0uZm9jdXMoKTtcbiAgICB9IC8vIG5vIHZpc2libGUgZm9jdXNhYmxlIGVsZW1lbnRzLCBmb2N1cyB0aGUgcG9wdXBcblxuXG4gICAgZ2V0UG9wdXAoKS5mb2N1cygpO1xuICB9O1xuICB2YXIgYXJyb3dLZXlzID0gWydBcnJvd0xlZnQnLCAnQXJyb3dSaWdodCcsICdBcnJvd1VwJywgJ0Fycm93RG93bicsICdMZWZ0JywgJ1JpZ2h0JywgJ1VwJywgJ0Rvd24nIC8vIElFMTFcbiAgXTtcbiAgdmFyIGVzY0tleXMgPSBbJ0VzY2FwZScsICdFc2MnIC8vIElFMTFcbiAgXTtcblxuICB2YXIga2V5ZG93bkhhbmRsZXIgPSBmdW5jdGlvbiBrZXlkb3duSGFuZGxlcihpbnN0YW5jZSwgZSwgZGlzbWlzc1dpdGgpIHtcbiAgICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlKTtcblxuICAgIGlmIChpbm5lclBhcmFtcy5zdG9wS2V5ZG93blByb3BhZ2F0aW9uKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0gLy8gRU5URVJcblxuXG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBoYW5kbGVFbnRlcihpbnN0YW5jZSwgZSwgaW5uZXJQYXJhbXMpOyAvLyBUQUJcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnVGFiJykge1xuICAgICAgaGFuZGxlVGFiKGUsIGlubmVyUGFyYW1zKTsgLy8gQVJST1dTIC0gc3dpdGNoIGZvY3VzIGJldHdlZW4gYnV0dG9uc1xuICAgIH0gZWxzZSBpZiAoYXJyb3dLZXlzLmluZGV4T2YoZS5rZXkpICE9PSAtMSkge1xuICAgICAgaGFuZGxlQXJyb3dzKCk7IC8vIEVTQ1xuICAgIH0gZWxzZSBpZiAoZXNjS2V5cy5pbmRleE9mKGUua2V5KSAhPT0gLTEpIHtcbiAgICAgIGhhbmRsZUVzYyhlLCBpbm5lclBhcmFtcywgZGlzbWlzc1dpdGgpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlRW50ZXIgPSBmdW5jdGlvbiBoYW5kbGVFbnRlcihpbnN0YW5jZSwgZSwgaW5uZXJQYXJhbXMpIHtcbiAgICAvLyAjNzIwICM3MjFcbiAgICBpZiAoZS5pc0NvbXBvc2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlLnRhcmdldCAmJiBpbnN0YW5jZS5nZXRJbnB1dCgpICYmIGUudGFyZ2V0Lm91dGVySFRNTCA9PT0gaW5zdGFuY2UuZ2V0SW5wdXQoKS5vdXRlckhUTUwpIHtcbiAgICAgIGlmIChbJ3RleHRhcmVhJywgJ2ZpbGUnXS5pbmRleE9mKGlubmVyUGFyYW1zLmlucHV0KSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuOyAvLyBkbyBub3Qgc3VibWl0XG4gICAgICB9XG5cbiAgICAgIGNsaWNrQ29uZmlybSgpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlVGFiID0gZnVuY3Rpb24gaGFuZGxlVGFiKGUsIGlubmVyUGFyYW1zKSB7XG4gICAgdmFyIHRhcmdldEVsZW1lbnQgPSBlLnRhcmdldDtcbiAgICB2YXIgZm9jdXNhYmxlRWxlbWVudHMgPSBnZXRGb2N1c2FibGVFbGVtZW50cygpO1xuICAgIHZhciBidG5JbmRleCA9IC0xO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRhcmdldEVsZW1lbnQgPT09IGZvY3VzYWJsZUVsZW1lbnRzW2ldKSB7XG4gICAgICAgIGJ0bkluZGV4ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFlLnNoaWZ0S2V5KSB7XG4gICAgICAvLyBDeWNsZSB0byB0aGUgbmV4dCBidXR0b25cbiAgICAgIHNldEZvY3VzKGlubmVyUGFyYW1zLCBidG5JbmRleCwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEN5Y2xlIHRvIHRoZSBwcmV2IGJ1dHRvblxuICAgICAgc2V0Rm9jdXMoaW5uZXJQYXJhbXMsIGJ0bkluZGV4LCAtMSk7XG4gICAgfVxuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgdmFyIGhhbmRsZUFycm93cyA9IGZ1bmN0aW9uIGhhbmRsZUFycm93cygpIHtcbiAgICB2YXIgY29uZmlybUJ1dHRvbiA9IGdldENvbmZpcm1CdXR0b24oKTtcbiAgICB2YXIgY2FuY2VsQnV0dG9uID0gZ2V0Q2FuY2VsQnV0dG9uKCk7IC8vIGZvY3VzIENhbmNlbCBidXR0b24gaWYgQ29uZmlybSBidXR0b24gaXMgY3VycmVudGx5IGZvY3VzZWRcblxuICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBjb25maXJtQnV0dG9uICYmIGlzVmlzaWJsZShjYW5jZWxCdXR0b24pKSB7XG4gICAgICBjYW5jZWxCdXR0b24uZm9jdXMoKTsgLy8gYW5kIHZpY2UgdmVyc2FcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGNhbmNlbEJ1dHRvbiAmJiBpc1Zpc2libGUoY29uZmlybUJ1dHRvbikpIHtcbiAgICAgIGNvbmZpcm1CdXR0b24uZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZUVzYyA9IGZ1bmN0aW9uIGhhbmRsZUVzYyhlLCBpbm5lclBhcmFtcywgZGlzbWlzc1dpdGgpIHtcbiAgICBpZiAoY2FsbElmRnVuY3Rpb24oaW5uZXJQYXJhbXMuYWxsb3dFc2NhcGVLZXkpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkaXNtaXNzV2l0aChEaXNtaXNzUmVhc29uLmVzYyk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVQb3B1cENsaWNrID0gZnVuY3Rpb24gaGFuZGxlUG9wdXBDbGljayhpbnN0YW5jZSwgZG9tQ2FjaGUsIGRpc21pc3NXaXRoKSB7XG4gICAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSk7XG5cbiAgICBpZiAoaW5uZXJQYXJhbXMudG9hc3QpIHtcbiAgICAgIGhhbmRsZVRvYXN0Q2xpY2soaW5zdGFuY2UsIGRvbUNhY2hlLCBkaXNtaXNzV2l0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElnbm9yZSBjbGljayBldmVudHMgdGhhdCBoYWQgbW91c2Vkb3duIG9uIHRoZSBwb3B1cCBidXQgbW91c2V1cCBvbiB0aGUgY29udGFpbmVyXG4gICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gd2hlbiB0aGUgdXNlciBkcmFncyBhIHNsaWRlclxuICAgICAgaGFuZGxlTW9kYWxNb3VzZWRvd24oZG9tQ2FjaGUpOyAvLyBJZ25vcmUgY2xpY2sgZXZlbnRzIHRoYXQgaGFkIG1vdXNlZG93biBvbiB0aGUgY29udGFpbmVyIGJ1dCBtb3VzZXVwIG9uIHRoZSBwb3B1cFxuXG4gICAgICBoYW5kbGVDb250YWluZXJNb3VzZWRvd24oZG9tQ2FjaGUpO1xuICAgICAgaGFuZGxlTW9kYWxDbGljayhpbnN0YW5jZSwgZG9tQ2FjaGUsIGRpc21pc3NXaXRoKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZVRvYXN0Q2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVUb2FzdENsaWNrKGluc3RhbmNlLCBkb21DYWNoZSwgZGlzbWlzc1dpdGgpIHtcbiAgICAvLyBDbG9zaW5nIHRvYXN0IGJ5IGludGVybmFsIGNsaWNrXG4gICAgZG9tQ2FjaGUucG9wdXAub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpO1xuXG4gICAgICBpZiAoaW5uZXJQYXJhbXMuc2hvd0NvbmZpcm1CdXR0b24gfHwgaW5uZXJQYXJhbXMuc2hvd0NhbmNlbEJ1dHRvbiB8fCBpbm5lclBhcmFtcy5zaG93Q2xvc2VCdXR0b24gfHwgaW5uZXJQYXJhbXMuaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBkaXNtaXNzV2l0aChEaXNtaXNzUmVhc29uLmNsb3NlKTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBpZ25vcmVPdXRzaWRlQ2xpY2sgPSBmYWxzZTtcblxuICB2YXIgaGFuZGxlTW9kYWxNb3VzZWRvd24gPSBmdW5jdGlvbiBoYW5kbGVNb2RhbE1vdXNlZG93bihkb21DYWNoZSkge1xuICAgIGRvbUNhY2hlLnBvcHVwLm9ubW91c2Vkb3duID0gZnVuY3Rpb24gKCkge1xuICAgICAgZG9tQ2FjaGUuY29udGFpbmVyLm9ubW91c2V1cCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGRvbUNhY2hlLmNvbnRhaW5lci5vbm1vdXNldXAgPSB1bmRlZmluZWQ7IC8vIFdlIG9ubHkgY2hlY2sgaWYgdGhlIG1vdXNldXAgdGFyZ2V0IGlzIHRoZSBjb250YWluZXIgYmVjYXVzZSB1c3VhbGx5IGl0IGRvZXNuJ3RcbiAgICAgICAgLy8gaGF2ZSBhbnkgb3RoZXIgZGlyZWN0IGNoaWxkcmVuIGFzaWRlIG9mIHRoZSBwb3B1cFxuXG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gZG9tQ2FjaGUuY29udGFpbmVyKSB7XG4gICAgICAgICAgaWdub3JlT3V0c2lkZUNsaWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBoYW5kbGVDb250YWluZXJNb3VzZWRvd24gPSBmdW5jdGlvbiBoYW5kbGVDb250YWluZXJNb3VzZWRvd24oZG9tQ2FjaGUpIHtcbiAgICBkb21DYWNoZS5jb250YWluZXIub25tb3VzZWRvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBkb21DYWNoZS5wb3B1cC5vbm1vdXNldXAgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBkb21DYWNoZS5wb3B1cC5vbm1vdXNldXAgPSB1bmRlZmluZWQ7IC8vIFdlIGFsc28gbmVlZCB0byBjaGVjayBpZiB0aGUgbW91c2V1cCB0YXJnZXQgaXMgYSBjaGlsZCBvZiB0aGUgcG9wdXBcblxuICAgICAgICBpZiAoZS50YXJnZXQgPT09IGRvbUNhY2hlLnBvcHVwIHx8IGRvbUNhY2hlLnBvcHVwLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgIGlnbm9yZU91dHNpZGVDbGljayA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcbiAgfTtcblxuICB2YXIgaGFuZGxlTW9kYWxDbGljayA9IGZ1bmN0aW9uIGhhbmRsZU1vZGFsQ2xpY2soaW5zdGFuY2UsIGRvbUNhY2hlLCBkaXNtaXNzV2l0aCkge1xuICAgIGRvbUNhY2hlLmNvbnRhaW5lci5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpO1xuXG4gICAgICBpZiAoaWdub3JlT3V0c2lkZUNsaWNrKSB7XG4gICAgICAgIGlnbm9yZU91dHNpZGVDbGljayA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChlLnRhcmdldCA9PT0gZG9tQ2FjaGUuY29udGFpbmVyICYmIGNhbGxJZkZ1bmN0aW9uKGlubmVyUGFyYW1zLmFsbG93T3V0c2lkZUNsaWNrKSkge1xuICAgICAgICBkaXNtaXNzV2l0aChEaXNtaXNzUmVhc29uLmJhY2tkcm9wKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIF9tYWluKHVzZXJQYXJhbXMpIHtcbiAgICBzaG93V2FybmluZ3NGb3JQYXJhbXModXNlclBhcmFtcyk7XG5cbiAgICBpZiAoZ2xvYmFsU3RhdGUuY3VycmVudEluc3RhbmNlKSB7XG4gICAgICBnbG9iYWxTdGF0ZS5jdXJyZW50SW5zdGFuY2UuX2Rlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBnbG9iYWxTdGF0ZS5jdXJyZW50SW5zdGFuY2UgPSB0aGlzO1xuICAgIHZhciBpbm5lclBhcmFtcyA9IHByZXBhcmVQYXJhbXModXNlclBhcmFtcyk7XG4gICAgc2V0UGFyYW1ldGVycyhpbm5lclBhcmFtcyk7XG4gICAgT2JqZWN0LmZyZWV6ZShpbm5lclBhcmFtcyk7IC8vIGNsZWFyIHRoZSBwcmV2aW91cyB0aW1lclxuXG4gICAgaWYgKGdsb2JhbFN0YXRlLnRpbWVvdXQpIHtcbiAgICAgIGdsb2JhbFN0YXRlLnRpbWVvdXQuc3RvcCgpO1xuICAgICAgZGVsZXRlIGdsb2JhbFN0YXRlLnRpbWVvdXQ7XG4gICAgfSAvLyBjbGVhciB0aGUgcmVzdG9yZSBmb2N1cyB0aW1lb3V0XG5cblxuICAgIGNsZWFyVGltZW91dChnbG9iYWxTdGF0ZS5yZXN0b3JlRm9jdXNUaW1lb3V0KTtcbiAgICB2YXIgZG9tQ2FjaGUgPSBwb3B1bGF0ZURvbUNhY2hlKHRoaXMpO1xuICAgIHJlbmRlcih0aGlzLCBpbm5lclBhcmFtcyk7XG4gICAgcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLnNldCh0aGlzLCBpbm5lclBhcmFtcyk7XG4gICAgcmV0dXJuIHN3YWxQcm9taXNlKHRoaXMsIGRvbUNhY2hlLCBpbm5lclBhcmFtcyk7XG4gIH1cblxuICB2YXIgcHJlcGFyZVBhcmFtcyA9IGZ1bmN0aW9uIHByZXBhcmVQYXJhbXModXNlclBhcmFtcykge1xuICAgIHZhciBzaG93Q2xhc3MgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdFBhcmFtcy5zaG93Q2xhc3MsIHVzZXJQYXJhbXMuc2hvd0NsYXNzKTtcblxuICAgIHZhciBoaWRlQ2xhc3MgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdFBhcmFtcy5oaWRlQ2xhc3MsIHVzZXJQYXJhbXMuaGlkZUNsYXNzKTtcblxuICAgIHZhciBwYXJhbXMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdFBhcmFtcywgdXNlclBhcmFtcyk7XG5cbiAgICBwYXJhbXMuc2hvd0NsYXNzID0gc2hvd0NsYXNzO1xuICAgIHBhcmFtcy5oaWRlQ2xhc3MgPSBoaWRlQ2xhc3M7IC8vIEBkZXByZWNhdGVkXG5cbiAgICBpZiAodXNlclBhcmFtcy5hbmltYXRpb24gPT09IGZhbHNlKSB7XG4gICAgICBwYXJhbXMuc2hvd0NsYXNzID0ge1xuICAgICAgICBwb3B1cDogJ3N3YWwyLW5vYW5pbWF0aW9uJyxcbiAgICAgICAgYmFja2Ryb3A6ICdzd2FsMi1ub2FuaW1hdGlvbidcbiAgICAgIH07XG4gICAgICBwYXJhbXMuaGlkZUNsYXNzID0ge307XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfTtcblxuICB2YXIgc3dhbFByb21pc2UgPSBmdW5jdGlvbiBzd2FsUHJvbWlzZShpbnN0YW5jZSwgZG9tQ2FjaGUsIGlubmVyUGFyYW1zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAvLyBmdW5jdGlvbnMgdG8gaGFuZGxlIGFsbCBjbG9zaW5ncy9kaXNtaXNzYWxzXG4gICAgICB2YXIgZGlzbWlzc1dpdGggPSBmdW5jdGlvbiBkaXNtaXNzV2l0aChkaXNtaXNzKSB7XG4gICAgICAgIGluc3RhbmNlLmNsb3NlUG9wdXAoe1xuICAgICAgICAgIGRpc21pc3M6IGRpc21pc3NcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBwcml2YXRlTWV0aG9kcy5zd2FsUHJvbWlzZVJlc29sdmUuc2V0KGluc3RhbmNlLCByZXNvbHZlKTtcblxuICAgICAgZG9tQ2FjaGUuY29uZmlybUJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gaGFuZGxlQ29uZmlybUJ1dHRvbkNsaWNrKGluc3RhbmNlLCBpbm5lclBhcmFtcyk7XG4gICAgICB9O1xuXG4gICAgICBkb21DYWNoZS5jYW5jZWxCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZUNhbmNlbEJ1dHRvbkNsaWNrKGluc3RhbmNlLCBkaXNtaXNzV2l0aCk7XG4gICAgICB9O1xuXG4gICAgICBkb21DYWNoZS5jbG9zZUJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZGlzbWlzc1dpdGgoRGlzbWlzc1JlYXNvbi5jbG9zZSk7XG4gICAgICB9O1xuXG4gICAgICBoYW5kbGVQb3B1cENsaWNrKGluc3RhbmNlLCBkb21DYWNoZSwgZGlzbWlzc1dpdGgpO1xuICAgICAgYWRkS2V5ZG93bkhhbmRsZXIoaW5zdGFuY2UsIGdsb2JhbFN0YXRlLCBpbm5lclBhcmFtcywgZGlzbWlzc1dpdGgpO1xuXG4gICAgICBpZiAoaW5uZXJQYXJhbXMudG9hc3QgJiYgKGlubmVyUGFyYW1zLmlucHV0IHx8IGlubmVyUGFyYW1zLmZvb3RlciB8fCBpbm5lclBhcmFtcy5zaG93Q2xvc2VCdXR0b24pKSB7XG4gICAgICAgIGFkZENsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzWyd0b2FzdC1jb2x1bW4nXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlc1sndG9hc3QtY29sdW1uJ10pO1xuICAgICAgfVxuXG4gICAgICBoYW5kbGVJbnB1dE9wdGlvbnNBbmRWYWx1ZShpbnN0YW5jZSwgaW5uZXJQYXJhbXMpO1xuICAgICAgb3BlblBvcHVwKGlubmVyUGFyYW1zKTtcbiAgICAgIHNldHVwVGltZXIoZ2xvYmFsU3RhdGUsIGlubmVyUGFyYW1zLCBkaXNtaXNzV2l0aCk7XG4gICAgICBpbml0Rm9jdXMoZG9tQ2FjaGUsIGlubmVyUGFyYW1zKTsgLy8gU2Nyb2xsIGNvbnRhaW5lciB0byB0b3Agb24gb3BlbiAoIzEyNDcsICMxOTQ2KVxuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9tQ2FjaGUuY29udGFpbmVyLnNjcm9sbFRvcCA9IDA7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgcG9wdWxhdGVEb21DYWNoZSA9IGZ1bmN0aW9uIHBvcHVsYXRlRG9tQ2FjaGUoaW5zdGFuY2UpIHtcbiAgICB2YXIgZG9tQ2FjaGUgPSB7XG4gICAgICBwb3B1cDogZ2V0UG9wdXAoKSxcbiAgICAgIGNvbnRhaW5lcjogZ2V0Q29udGFpbmVyKCksXG4gICAgICBjb250ZW50OiBnZXRDb250ZW50KCksXG4gICAgICBhY3Rpb25zOiBnZXRBY3Rpb25zKCksXG4gICAgICBjb25maXJtQnV0dG9uOiBnZXRDb25maXJtQnV0dG9uKCksXG4gICAgICBjYW5jZWxCdXR0b246IGdldENhbmNlbEJ1dHRvbigpLFxuICAgICAgY2xvc2VCdXR0b246IGdldENsb3NlQnV0dG9uKCksXG4gICAgICB2YWxpZGF0aW9uTWVzc2FnZTogZ2V0VmFsaWRhdGlvbk1lc3NhZ2UoKSxcbiAgICAgIHByb2dyZXNzU3RlcHM6IGdldFByb2dyZXNzU3RlcHMoKVxuICAgIH07XG4gICAgcHJpdmF0ZVByb3BzLmRvbUNhY2hlLnNldChpbnN0YW5jZSwgZG9tQ2FjaGUpO1xuICAgIHJldHVybiBkb21DYWNoZTtcbiAgfTtcblxuICB2YXIgc2V0dXBUaW1lciA9IGZ1bmN0aW9uIHNldHVwVGltZXIoZ2xvYmFsU3RhdGUkJDEsIGlubmVyUGFyYW1zLCBkaXNtaXNzV2l0aCkge1xuICAgIHZhciB0aW1lclByb2dyZXNzQmFyID0gZ2V0VGltZXJQcm9ncmVzc0JhcigpO1xuICAgIGhpZGUodGltZXJQcm9ncmVzc0Jhcik7XG5cbiAgICBpZiAoaW5uZXJQYXJhbXMudGltZXIpIHtcbiAgICAgIGdsb2JhbFN0YXRlJCQxLnRpbWVvdXQgPSBuZXcgVGltZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICBkaXNtaXNzV2l0aCgndGltZXInKTtcbiAgICAgICAgZGVsZXRlIGdsb2JhbFN0YXRlJCQxLnRpbWVvdXQ7XG4gICAgICB9LCBpbm5lclBhcmFtcy50aW1lcik7XG5cbiAgICAgIGlmIChpbm5lclBhcmFtcy50aW1lclByb2dyZXNzQmFyKSB7XG4gICAgICAgIHNob3codGltZXJQcm9ncmVzc0Jhcik7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChnbG9iYWxTdGF0ZSQkMS50aW1lb3V0LnJ1bm5pbmcpIHtcbiAgICAgICAgICAgIC8vIHRpbWVyIGNhbiBiZSBhbHJlYWR5IHN0b3BwZWQgYXQgdGhpcyBwb2ludFxuICAgICAgICAgICAgYW5pbWF0ZVRpbWVyUHJvZ3Jlc3NCYXIoaW5uZXJQYXJhbXMudGltZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBpbml0Rm9jdXMgPSBmdW5jdGlvbiBpbml0Rm9jdXMoZG9tQ2FjaGUsIGlubmVyUGFyYW1zKSB7XG4gICAgaWYgKGlubmVyUGFyYW1zLnRvYXN0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFjYWxsSWZGdW5jdGlvbihpbm5lclBhcmFtcy5hbGxvd0VudGVyS2V5KSkge1xuICAgICAgcmV0dXJuIGJsdXJBY3RpdmVFbGVtZW50KCk7XG4gICAgfVxuXG4gICAgaWYgKGlubmVyUGFyYW1zLmZvY3VzQ2FuY2VsICYmIGlzVmlzaWJsZShkb21DYWNoZS5jYW5jZWxCdXR0b24pKSB7XG4gICAgICByZXR1cm4gZG9tQ2FjaGUuY2FuY2VsQnV0dG9uLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgaWYgKGlubmVyUGFyYW1zLmZvY3VzQ29uZmlybSAmJiBpc1Zpc2libGUoZG9tQ2FjaGUuY29uZmlybUJ1dHRvbikpIHtcbiAgICAgIHJldHVybiBkb21DYWNoZS5jb25maXJtQnV0dG9uLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgc2V0Rm9jdXMoaW5uZXJQYXJhbXMsIC0xLCAxKTtcbiAgfTtcblxuICB2YXIgYmx1ckFjdGl2ZUVsZW1lbnQgPSBmdW5jdGlvbiBibHVyQWN0aXZlRWxlbWVudCgpIHtcbiAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiB0eXBlb2YgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgcG9wdXAgcGFyYW1ldGVycy5cbiAgICovXG5cbiAgZnVuY3Rpb24gdXBkYXRlKHBhcmFtcykge1xuICAgIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG4gICAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldCh0aGlzKTtcblxuICAgIGlmICghcG9wdXAgfHwgaGFzQ2xhc3MocG9wdXAsIGlubmVyUGFyYW1zLmhpZGVDbGFzcy5wb3B1cCkpIHtcbiAgICAgIHJldHVybiB3YXJuKFwiWW91J3JlIHRyeWluZyB0byB1cGRhdGUgdGhlIGNsb3NlZCBvciBjbG9zaW5nIHBvcHVwLCB0aGF0IHdvbid0IHdvcmsuIFVzZSB0aGUgdXBkYXRlKCkgbWV0aG9kIGluIHByZUNvbmZpcm0gcGFyYW1ldGVyIG9yIHNob3cgYSBuZXcgcG9wdXAuXCIpO1xuICAgIH1cblxuICAgIHZhciB2YWxpZFVwZGF0YWJsZVBhcmFtcyA9IHt9OyAvLyBhc3NpZ24gdmFsaWQgcGFyYW1zIGZyb20gYHBhcmFtc2AgdG8gYGRlZmF1bHRzYFxuXG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgaWYgKFN3YWwuaXNVcGRhdGFibGVQYXJhbWV0ZXIocGFyYW0pKSB7XG4gICAgICAgIHZhbGlkVXBkYXRhYmxlUGFyYW1zW3BhcmFtXSA9IHBhcmFtc1twYXJhbV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuKFwiSW52YWxpZCBwYXJhbWV0ZXIgdG8gdXBkYXRlOiBcXFwiXCIuY29uY2F0KHBhcmFtLCBcIlxcXCIuIFVwZGF0YWJsZSBwYXJhbXMgYXJlIGxpc3RlZCBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvYmxvYi9tYXN0ZXIvc3JjL3V0aWxzL3BhcmFtcy5qc1wiKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdXBkYXRlZFBhcmFtcyA9IF9leHRlbmRzKHt9LCBpbm5lclBhcmFtcywgdmFsaWRVcGRhdGFibGVQYXJhbXMpO1xuXG4gICAgcmVuZGVyKHRoaXMsIHVwZGF0ZWRQYXJhbXMpO1xuICAgIHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5zZXQodGhpcywgdXBkYXRlZFBhcmFtcyk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHZhbHVlOiBfZXh0ZW5kcyh7fSwgdGhpcy5wYXJhbXMsIHBhcmFtcyksXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gX2Rlc3Ryb3koKSB7XG4gICAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO1xuXG4gICAgaWYgKCFpbm5lclBhcmFtcykge1xuICAgICAgcmV0dXJuOyAvLyBUaGlzIGluc3RhbmNlIGhhcyBhbHJlYWR5IGJlZW4gZGVzdHJveWVkXG4gICAgfSAvLyBDaGVjayBpZiB0aGVyZSBpcyBhbm90aGVyIFN3YWwgY2xvc2luZ1xuXG5cbiAgICBpZiAoZG9tQ2FjaGUucG9wdXAgJiYgZ2xvYmFsU3RhdGUuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrKSB7XG4gICAgICBnbG9iYWxTdGF0ZS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2soKTtcbiAgICAgIGRlbGV0ZSBnbG9iYWxTdGF0ZS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2s7XG4gICAgfSAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIHN3YWwgZGlzcG9zYWwgZGVmZXIgdGltZXJcblxuXG4gICAgaWYgKGdsb2JhbFN0YXRlLmRlZmVyRGlzcG9zYWxUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KGdsb2JhbFN0YXRlLmRlZmVyRGlzcG9zYWxUaW1lcik7XG4gICAgICBkZWxldGUgZ2xvYmFsU3RhdGUuZGVmZXJEaXNwb3NhbFRpbWVyO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaW5uZXJQYXJhbXMub25EZXN0cm95ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpbm5lclBhcmFtcy5vbkRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBkaXNwb3NlU3dhbCh0aGlzKTtcbiAgfVxuXG4gIHZhciBkaXNwb3NlU3dhbCA9IGZ1bmN0aW9uIGRpc3Bvc2VTd2FsKGluc3RhbmNlKSB7XG4gICAgLy8gVW5zZXQgdGhpcy5wYXJhbXMgc28gR0Mgd2lsbCBkaXNwb3NlIGl0ICgjMTU2OSlcbiAgICBkZWxldGUgaW5zdGFuY2UucGFyYW1zOyAvLyBVbnNldCBnbG9iYWxTdGF0ZSBwcm9wcyBzbyBHQyB3aWxsIGRpc3Bvc2UgZ2xvYmFsU3RhdGUgKCMxNTY5KVxuXG4gICAgZGVsZXRlIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyO1xuICAgIGRlbGV0ZSBnbG9iYWxTdGF0ZS5rZXlkb3duVGFyZ2V0OyAvLyBVbnNldCBXZWFrTWFwcyBzbyBHQyB3aWxsIGJlIGFibGUgdG8gZGlzcG9zZSB0aGVtICgjMTU2OSlcblxuICAgIHVuc2V0V2Vha01hcHMocHJpdmF0ZVByb3BzKTtcbiAgICB1bnNldFdlYWtNYXBzKHByaXZhdGVNZXRob2RzKTtcbiAgfTtcblxuICB2YXIgdW5zZXRXZWFrTWFwcyA9IGZ1bmN0aW9uIHVuc2V0V2Vha01hcHMob2JqKSB7XG4gICAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICAgIG9ialtpXSA9IG5ldyBXZWFrTWFwKCk7XG4gICAgfVxuICB9O1xuXG5cblxuICB2YXIgaW5zdGFuY2VNZXRob2RzID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICAgIGhpZGVMb2FkaW5nOiBoaWRlTG9hZGluZyxcbiAgICBkaXNhYmxlTG9hZGluZzogaGlkZUxvYWRpbmcsXG4gICAgZ2V0SW5wdXQ6IGdldElucHV0JDEsXG4gICAgY2xvc2U6IGNsb3NlLFxuICAgIGNsb3NlUG9wdXA6IGNsb3NlLFxuICAgIGNsb3NlTW9kYWw6IGNsb3NlLFxuICAgIGNsb3NlVG9hc3Q6IGNsb3NlLFxuICAgIGVuYWJsZUJ1dHRvbnM6IGVuYWJsZUJ1dHRvbnMsXG4gICAgZGlzYWJsZUJ1dHRvbnM6IGRpc2FibGVCdXR0b25zLFxuICAgIGVuYWJsZUlucHV0OiBlbmFibGVJbnB1dCxcbiAgICBkaXNhYmxlSW5wdXQ6IGRpc2FibGVJbnB1dCxcbiAgICBzaG93VmFsaWRhdGlvbk1lc3NhZ2U6IHNob3dWYWxpZGF0aW9uTWVzc2FnZSxcbiAgICByZXNldFZhbGlkYXRpb25NZXNzYWdlOiByZXNldFZhbGlkYXRpb25NZXNzYWdlJDEsXG4gICAgZ2V0UHJvZ3Jlc3NTdGVwczogZ2V0UHJvZ3Jlc3NTdGVwcyQxLFxuICAgIF9tYWluOiBfbWFpbixcbiAgICB1cGRhdGU6IHVwZGF0ZSxcbiAgICBfZGVzdHJveTogX2Rlc3Ryb3lcbiAgfSk7XG5cbiAgdmFyIGN1cnJlbnRJbnN0YW5jZTtcblxuICB2YXIgU3dlZXRBbGVydCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3dlZXRBbGVydCgpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTd2VldEFsZXJ0KTtcblxuICAgICAgLy8gUHJldmVudCBydW4gaW4gTm9kZSBlbnZcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIENoZWNrIGZvciB0aGUgZXhpc3RlbmNlIG9mIFByb21pc2VcblxuXG4gICAgICBpZiAodHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGVycm9yKCdUaGlzIHBhY2thZ2UgcmVxdWlyZXMgYSBQcm9taXNlIGxpYnJhcnksIHBsZWFzZSBpbmNsdWRlIGEgc2hpbSB0byBlbmFibGUgaXQgaW4gdGhpcyBicm93c2VyIChTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi93aWtpL01pZ3JhdGlvbi1mcm9tLVN3ZWV0QWxlcnQtdG8tU3dlZXRBbGVydDIjMS1pZS1zdXBwb3J0KScpO1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50SW5zdGFuY2UgPSB0aGlzO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgdmFyIG91dGVyUGFyYW1zID0gT2JqZWN0LmZyZWV6ZSh0aGlzLmNvbnN0cnVjdG9yLmFyZ3NUb1BhcmFtcyhhcmdzKSk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHZhbHVlOiBvdXRlclBhcmFtcyxcbiAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHZhciBwcm9taXNlID0gdGhpcy5fbWFpbih0aGlzLnBhcmFtcyk7XG5cbiAgICAgIHByaXZhdGVQcm9wcy5wcm9taXNlLnNldCh0aGlzLCBwcm9taXNlKTtcbiAgICB9IC8vIGBjYXRjaGAgY2Fubm90IGJlIHRoZSBuYW1lIG9mIGEgbW9kdWxlIGV4cG9ydCwgc28gd2UgZGVmaW5lIG91ciB0aGVuYWJsZSBtZXRob2RzIGhlcmUgaW5zdGVhZFxuXG5cbiAgICBfY3JlYXRlQ2xhc3MoU3dlZXRBbGVydCwgW3tcbiAgICAgIGtleTogXCJ0aGVuXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9IHByaXZhdGVQcm9wcy5wcm9taXNlLmdldCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbihvbkZ1bGZpbGxlZCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImZpbmFsbHlcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfZmluYWxseShvbkZpbmFsbHkpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSBwcml2YXRlUHJvcHMucHJvbWlzZS5nZXQodGhpcyk7XG4gICAgICAgIHJldHVybiBwcm9taXNlW1wiZmluYWxseVwiXShvbkZpbmFsbHkpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBTd2VldEFsZXJ0O1xuICB9KCk7IC8vIERlYXIgcnVzc2lhbiB1c2VycyB2aXNpdGluZyBydXNzaWFuIHNpdGVzLiBMZXQncyBoYXZlIGZ1bi5cblxuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAvXnJ1XFxiLy50ZXN0KG5hdmlnYXRvci5sYW5ndWFnZSkgJiYgbG9jYXRpb24uaG9zdC5tYXRjaCgvXFwuKHJ1fHN1fHhuLS1wMWFpKSQvKSkge1xuICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIHZhciBpbml0aWF0aW9uRGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzd2FsLWluaXRpYXRpb24nKTtcblxuICAgIGlmICghaW5pdGlhdGlvbkRhdGUpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzd2FsLWluaXRpYXRpb24nLCBcIlwiLmNvbmNhdChub3cpKTtcbiAgICB9IGVsc2UgaWYgKChub3cuZ2V0VGltZSgpIC0gRGF0ZS5wYXJzZShpbml0aWF0aW9uRGF0ZSkpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpID4gMykge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgdmFyIHVrcmFpbmlhbkFudGhlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XG4gICAgICAgIHVrcmFpbmlhbkFudGhlbS5zcmMgPSAnaHR0cHM6Ly9mbGFnLWdpbW4ucnUvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDkvVWtyYWluYS5tcDMnO1xuICAgICAgICB1a3JhaW5pYW5BbnRoZW0ubG9vcCA9IHRydWU7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodWtyYWluaWFuQW50aGVtKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdWtyYWluaWFuQW50aGVtLnBsYXkoKVtcImNhdGNoXCJdKGZ1bmN0aW9uICgpIHsvLyBpZ25vcmVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMjUwMCk7XG4gICAgICB9LCA1MDApO1xuICAgIH1cbiAgfSAvLyBBc3NpZ24gaW5zdGFuY2UgbWV0aG9kcyBmcm9tIHNyYy9pbnN0YW5jZU1ldGhvZHMvKi5qcyB0byBwcm90b3R5cGVcblxuXG4gIF9leHRlbmRzKFN3ZWV0QWxlcnQucHJvdG90eXBlLCBpbnN0YW5jZU1ldGhvZHMpOyAvLyBBc3NpZ24gc3RhdGljIG1ldGhvZHMgZnJvbSBzcmMvc3RhdGljTWV0aG9kcy8qLmpzIHRvIGNvbnN0cnVjdG9yXG5cblxuICBfZXh0ZW5kcyhTd2VldEFsZXJ0LCBzdGF0aWNNZXRob2RzKTsgLy8gUHJveHkgdG8gaW5zdGFuY2UgbWV0aG9kcyB0byBjb25zdHJ1Y3RvciwgZm9yIG5vdywgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5cblxuICBPYmplY3Qua2V5cyhpbnN0YW5jZU1ldGhvZHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIFN3ZWV0QWxlcnRba2V5XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChjdXJyZW50SW5zdGFuY2UpIHtcbiAgICAgICAgdmFyIF9jdXJyZW50SW5zdGFuY2U7XG5cbiAgICAgICAgcmV0dXJuIChfY3VycmVudEluc3RhbmNlID0gY3VycmVudEluc3RhbmNlKVtrZXldLmFwcGx5KF9jdXJyZW50SW5zdGFuY2UsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG4gIFN3ZWV0QWxlcnQuRGlzbWlzc1JlYXNvbiA9IERpc21pc3NSZWFzb247XG4gIFN3ZWV0QWxlcnQudmVyc2lvbiA9ICc5LjE3LjInO1xuXG4gIHZhciBTd2FsID0gU3dlZXRBbGVydDtcbiAgU3dhbFtcImRlZmF1bHRcIl0gPSBTd2FsO1xuXG4gIHJldHVybiBTd2FsO1xuXG59KSk7XG5pZiAodHlwZW9mIHRoaXMgIT09ICd1bmRlZmluZWQnICYmIHRoaXMuU3dlZXRhbGVydDIpeyAgdGhpcy5zd2FsID0gdGhpcy5zd2VldEFsZXJ0ID0gdGhpcy5Td2FsID0gdGhpcy5Td2VldEFsZXJ0ID0gdGhpcy5Td2VldGFsZXJ0Mn1cblxuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50JiZmdW5jdGlvbihlLHQpe3ZhciBuPWUuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO2lmKGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKG4pLG4uc3R5bGVTaGVldCluLnN0eWxlU2hlZXQuZGlzYWJsZWR8fChuLnN0eWxlU2hlZXQuY3NzVGV4dD10KTtlbHNlIHRyeXtuLmlubmVySFRNTD10fWNhdGNoKGUpe24uaW5uZXJUZXh0PXR9fShkb2N1bWVudCxcIi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdHtmbGV4LWRpcmVjdGlvbjpyb3c7YWxpZ24taXRlbXM6Y2VudGVyO3dpZHRoOmF1dG87cGFkZGluZzouNjI1ZW07b3ZlcmZsb3cteTpoaWRkZW47YmFja2dyb3VuZDojZmZmO2JveC1zaGFkb3c6MCAwIC42MjVlbSAjZDlkOWQ5fS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaGVhZGVye2ZsZXgtZGlyZWN0aW9uOnJvdztwYWRkaW5nOjB9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi10aXRsZXtmbGV4LWdyb3c6MTtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDttYXJnaW46MCAuNmVtO2ZvbnQtc2l6ZToxZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1mb290ZXJ7bWFyZ2luOi41ZW0gMCAwO3BhZGRpbmc6LjVlbSAwIDA7Zm9udC1zaXplOi44ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1jbG9zZXtwb3NpdGlvbjpzdGF0aWM7d2lkdGg6LjhlbTtoZWlnaHQ6LjhlbTtsaW5lLWhlaWdodDouOH0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWNvbnRlbnR7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7cGFkZGluZzowO2ZvbnQtc2l6ZToxZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29ue3dpZHRoOjJlbTttaW4td2lkdGg6MmVtO2hlaWdodDoyZW07bWFyZ2luOjB9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uIC5zd2FsMi1pY29uLWNvbnRlbnR7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtmb250LXNpemU6MS44ZW07Zm9udC13ZWlnaHQ6NzAwfUBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDpub25lKSwoLW1zLWhpZ2gtY29udHJhc3Q6YWN0aXZlKXsuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24gLnN3YWwyLWljb24tY29udGVudHtmb250LXNpemU6LjI1ZW19fS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLXJpbmd7d2lkdGg6MmVtO2hlaWdodDoyZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVde3RvcDouODc1ZW07d2lkdGg6MS4zNzVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV1bY2xhc3MkPWxlZnRde2xlZnQ6LjMxMjVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV1bY2xhc3MkPXJpZ2h0XXtyaWdodDouMzEyNWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItYWN0aW9uc3tmbGV4LWJhc2lzOmF1dG8haW1wb3J0YW50O3dpZHRoOmF1dG87aGVpZ2h0OmF1dG87bWFyZ2luOjAgLjMxMjVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN0eWxlZHttYXJnaW46MCAuMzEyNWVtO3BhZGRpbmc6LjMxMjVlbSAuNjI1ZW07Zm9udC1zaXplOjFlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN0eWxlZDpmb2N1c3tib3gtc2hhZG93OjAgMCAwIDFweCAjZmZmLDAgMCAwIDNweCByZ2JhKDUwLDEwMCwxNTAsLjQpfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2Vzc3tib3JkZXItY29sb3I6I2E1ZGM4Nn0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVde3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEuNmVtO2hlaWdodDozZW07dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7Ym9yZGVyLXJhZGl1czo1MCV9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXVtjbGFzcyQ9bGVmdF17dG9wOi0uOGVtO2xlZnQ6LS41ZW07dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybS1vcmlnaW46MmVtIDJlbTtib3JkZXItcmFkaXVzOjRlbSAwIDAgNGVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV1bY2xhc3MkPXJpZ2h0XXt0b3A6LS4yNWVtO2xlZnQ6LjkzNzVlbTt0cmFuc2Zvcm0tb3JpZ2luOjAgMS41ZW07Ym9yZGVyLXJhZGl1czowIDRlbSA0ZW0gMH0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtcmluZ3t3aWR0aDoyZW07aGVpZ2h0OjJlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtZml4e3RvcDowO2xlZnQ6LjQzNzVlbTt3aWR0aDouNDM3NWVtO2hlaWdodDoyLjY4NzVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVde2hlaWdodDouMzEyNWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPXRpcF17dG9wOjEuMTI1ZW07bGVmdDouMTg3NWVtO3dpZHRoOi43NWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPWxvbmdde3RvcDouOTM3NWVtO3JpZ2h0Oi4xODc1ZW07d2lkdGg6MS4zNzVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3Muc3dhbDItaWNvbi1zaG93IC5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwey13ZWJraXQtYW5pbWF0aW9uOnN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCAuNzVzO2FuaW1hdGlvbjpzd2FsMi10b2FzdC1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXAgLjc1c30uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3Muc3dhbDItaWNvbi1zaG93IC5zd2FsMi1zdWNjZXNzLWxpbmUtbG9uZ3std2Via2l0LWFuaW1hdGlvbjpzd2FsMi10b2FzdC1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIC43NXM7YW5pbWF0aW9uOnN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcgLjc1c30uc3dhbDItcG9wdXAuc3dhbDItdG9hc3Quc3dhbDItc2hvd3std2Via2l0LWFuaW1hdGlvbjpzd2FsMi10b2FzdC1zaG93IC41czthbmltYXRpb246c3dhbDItdG9hc3Qtc2hvdyAuNXN9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0LnN3YWwyLWhpZGV7LXdlYmtpdC1hbmltYXRpb246c3dhbDItdG9hc3QtaGlkZSAuMXMgZm9yd2FyZHM7YW5pbWF0aW9uOnN3YWwyLXRvYXN0LWhpZGUgLjFzIGZvcndhcmRzfS5zd2FsMi1jb250YWluZXJ7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6MTA2MDt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtmbGV4LWRpcmVjdGlvbjpyb3c7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7cGFkZGluZzouNjI1ZW07b3ZlcmZsb3cteDpoaWRkZW47dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4xczstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaH0uc3dhbDItY29udGFpbmVyLnN3YWwyLWJhY2tkcm9wLXNob3csLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ub2FuaW1hdGlvbntiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjQpfS5zd2FsMi1jb250YWluZXIuc3dhbDItYmFja2Ryb3AtaGlkZXtiYWNrZ3JvdW5kOjAgMCFpbXBvcnRhbnR9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3B7YWxpZ24taXRlbXM6ZmxleC1zdGFydH0uc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1sZWZ0LC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXN0YXJ0e2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtZW5kLC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXJpZ2h0e2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVye2FsaWduLWl0ZW1zOmNlbnRlcn0uc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1sZWZ0LC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXN0YXJ0e2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH0uc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1lbmQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItcmlnaHR7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0uc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbXthbGlnbi1pdGVtczpmbGV4LWVuZH0uc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1sZWZ0LC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXN0YXJ0e2FsaWduLWl0ZW1zOmZsZXgtZW5kO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWVuZCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1yaWdodHthbGlnbi1pdGVtczpmbGV4LWVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tZW5kPjpmaXJzdC1jaGlsZCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1sZWZ0PjpmaXJzdC1jaGlsZCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1yaWdodD46Zmlyc3QtY2hpbGQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tc3RhcnQ+OmZpcnN0LWNoaWxkLC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tPjpmaXJzdC1jaGlsZHttYXJnaW4tdG9wOmF1dG99LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWZ1bGxzY3JlZW4+LnN3YWwyLW1vZGFse2Rpc3BsYXk6ZmxleCFpbXBvcnRhbnQ7ZmxleDoxO2FsaWduLXNlbGY6c3RyZXRjaDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1yb3c+LnN3YWwyLW1vZGFse2Rpc3BsYXk6ZmxleCFpbXBvcnRhbnQ7ZmxleDoxO2FsaWduLWNvbnRlbnQ6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbntmbGV4OjE7ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItY2VudGVyLC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItdG9we2FsaWduLWl0ZW1zOmNlbnRlcn0uc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWJvdHRvbS1sZWZ0LC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLXN0YXJ0LC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItY2VudGVyLWxlZnQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1jZW50ZXItc3RhcnQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi10b3AtbGVmdCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLXRvcC1zdGFydHthbGlnbi1pdGVtczpmbGV4LXN0YXJ0fS5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLWVuZCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWJvdHRvbS1yaWdodCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWNlbnRlci1lbmQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1jZW50ZXItcmlnaHQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi10b3AtZW5kLC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItdG9wLXJpZ2h0e2FsaWduLWl0ZW1zOmZsZXgtZW5kfS5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4+LnN3YWwyLW1vZGFse2Rpc3BsYXk6ZmxleCFpbXBvcnRhbnQ7ZmxleDoxO2FsaWduLWNvbnRlbnQ6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1uby10cmFuc2l0aW9ue3RyYW5zaXRpb246bm9uZSFpbXBvcnRhbnR9LnN3YWwyLWNvbnRhaW5lcjpub3QoLnN3YWwyLXRvcCk6bm90KC5zd2FsMi10b3Atc3RhcnQpOm5vdCguc3dhbDItdG9wLWVuZCk6bm90KC5zd2FsMi10b3AtbGVmdCk6bm90KC5zd2FsMi10b3AtcmlnaHQpOm5vdCguc3dhbDItY2VudGVyLXN0YXJ0KTpub3QoLnN3YWwyLWNlbnRlci1lbmQpOm5vdCguc3dhbDItY2VudGVyLWxlZnQpOm5vdCguc3dhbDItY2VudGVyLXJpZ2h0KTpub3QoLnN3YWwyLWJvdHRvbSk6bm90KC5zd2FsMi1ib3R0b20tc3RhcnQpOm5vdCguc3dhbDItYm90dG9tLWVuZCk6bm90KC5zd2FsMi1ib3R0b20tbGVmdCk6bm90KC5zd2FsMi1ib3R0b20tcmlnaHQpOm5vdCguc3dhbDItZ3Jvdy1mdWxsc2NyZWVuKT4uc3dhbDItbW9kYWx7bWFyZ2luOmF1dG99QG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0Om5vbmUpLCgtbXMtaGlnaC1jb250cmFzdDphY3RpdmUpey5zd2FsMi1jb250YWluZXIgLnN3YWwyLW1vZGFse21hcmdpbjowIWltcG9ydGFudH19LnN3YWwyLXBvcHVwe2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MzJlbTttYXgtd2lkdGg6MTAwJTtwYWRkaW5nOjEuMjVlbTtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOi4zMTI1ZW07YmFja2dyb3VuZDojZmZmO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjFyZW19LnN3YWwyLXBvcHVwOmZvY3Vze291dGxpbmU6MH0uc3dhbDItcG9wdXAuc3dhbDItbG9hZGluZ3tvdmVyZmxvdy15OmhpZGRlbn0uc3dhbDItaGVhZGVye2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6Y2VudGVyO3BhZGRpbmc6MCAxLjhlbX0uc3dhbDItdGl0bGV7cG9zaXRpb246cmVsYXRpdmU7bWF4LXdpZHRoOjEwMCU7bWFyZ2luOjAgMCAuNGVtO3BhZGRpbmc6MDtjb2xvcjojNTk1OTU5O2ZvbnQtc2l6ZToxLjg3NWVtO2ZvbnQtd2VpZ2h0OjYwMDt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LXRyYW5zZm9ybTpub25lO3dvcmQtd3JhcDpicmVhay13b3JkfS5zd2FsMi1hY3Rpb25ze2Rpc3BsYXk6ZmxleDt6LWluZGV4OjE7ZmxleC13cmFwOndyYXA7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJTttYXJnaW46MS4yNWVtIGF1dG8gMH0uc3dhbDItYWN0aW9uczpub3QoLnN3YWwyLWxvYWRpbmcpIC5zd2FsMi1zdHlsZWRbZGlzYWJsZWRde29wYWNpdHk6LjR9LnN3YWwyLWFjdGlvbnM6bm90KC5zd2FsMi1sb2FkaW5nKSAuc3dhbDItc3R5bGVkOmhvdmVye2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsLjEpLHJnYmEoMCwwLDAsLjEpKX0uc3dhbDItYWN0aW9uczpub3QoLnN3YWwyLWxvYWRpbmcpIC5zd2FsMi1zdHlsZWQ6YWN0aXZle2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsLjIpLHJnYmEoMCwwLDAsLjIpKX0uc3dhbDItYWN0aW9ucy5zd2FsMi1sb2FkaW5nIC5zd2FsMi1zdHlsZWQuc3dhbDItY29uZmlybXtib3gtc2l6aW5nOmJvcmRlci1ib3g7d2lkdGg6Mi41ZW07aGVpZ2h0OjIuNWVtO21hcmdpbjouNDY4NzVlbTtwYWRkaW5nOjA7LXdlYmtpdC1hbmltYXRpb246c3dhbDItcm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO2FuaW1hdGlvbjpzd2FsMi1yb3RhdGUtbG9hZGluZyAxLjVzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7Ym9yZGVyOi4yNWVtIHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6MTAwJTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudCFpbXBvcnRhbnQ7Y29sb3I6dHJhbnNwYXJlbnQhaW1wb3J0YW50O2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uc3dhbDItYWN0aW9ucy5zd2FsMi1sb2FkaW5nIC5zd2FsMi1zdHlsZWQuc3dhbDItY2FuY2Vse21hcmdpbi1yaWdodDozMHB4O21hcmdpbi1sZWZ0OjMwcHh9LnN3YWwyLWFjdGlvbnMuc3dhbDItbG9hZGluZyA6bm90KC5zd2FsMi1zdHlsZWQpLnN3YWwyLWNvbmZpcm06OmFmdGVye2NvbnRlbnQ6XFxcIlxcXCI7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MTVweDtoZWlnaHQ6MTVweDttYXJnaW4tbGVmdDo1cHg7LXdlYmtpdC1hbmltYXRpb246c3dhbDItcm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO2FuaW1hdGlvbjpzd2FsMi1yb3RhdGUtbG9hZGluZyAxLjVzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7Ym9yZGVyOjNweCBzb2xpZCAjOTk5O2JvcmRlci1yYWRpdXM6NTAlO2JvcmRlci1yaWdodC1jb2xvcjp0cmFuc3BhcmVudDtib3gtc2hhZG93OjFweCAxcHggMXB4ICNmZmZ9LnN3YWwyLXN0eWxlZHttYXJnaW46LjMxMjVlbTtwYWRkaW5nOi42MjVlbSAyZW07Ym94LXNoYWRvdzpub25lO2ZvbnQtd2VpZ2h0OjUwMH0uc3dhbDItc3R5bGVkOm5vdChbZGlzYWJsZWRdKXtjdXJzb3I6cG9pbnRlcn0uc3dhbDItc3R5bGVkLnN3YWwyLWNvbmZpcm17Ym9yZGVyOjA7Ym9yZGVyLXJhZGl1czouMjVlbTtiYWNrZ3JvdW5kOmluaXRpYWw7YmFja2dyb3VuZC1jb2xvcjojMzA4NWQ2O2NvbG9yOiNmZmY7Zm9udC1zaXplOjEuMDYyNWVtfS5zd2FsMi1zdHlsZWQuc3dhbDItY2FuY2Vse2JvcmRlcjowO2JvcmRlci1yYWRpdXM6LjI1ZW07YmFja2dyb3VuZDppbml0aWFsO2JhY2tncm91bmQtY29sb3I6I2FhYTtjb2xvcjojZmZmO2ZvbnQtc2l6ZToxLjA2MjVlbX0uc3dhbDItc3R5bGVkOmZvY3Vze291dGxpbmU6MDtib3gtc2hhZG93OjAgMCAwIDFweCAjZmZmLDAgMCAwIDNweCByZ2JhKDUwLDEwMCwxNTAsLjQpfS5zd2FsMi1zdHlsZWQ6Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjB9LnN3YWwyLWZvb3RlcntqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbjoxLjI1ZW0gMCAwO3BhZGRpbmc6MWVtIDAgMDtib3JkZXItdG9wOjFweCBzb2xpZCAjZWVlO2NvbG9yOiM1NDU0NTQ7Zm9udC1zaXplOjFlbX0uc3dhbDItdGltZXItcHJvZ3Jlc3MtYmFyLWNvbnRhaW5lcntwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtoZWlnaHQ6LjI1ZW07b3ZlcmZsb3c6aGlkZGVuO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOi4zMTI1ZW07Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czouMzEyNWVtfS5zd2FsMi10aW1lci1wcm9ncmVzcy1iYXJ7d2lkdGg6MTAwJTtoZWlnaHQ6LjI1ZW07YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4yKX0uc3dhbDItaW1hZ2V7bWF4LXdpZHRoOjEwMCU7bWFyZ2luOjEuMjVlbSBhdXRvfS5zd2FsMi1jbG9zZXtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjI7dG9wOjA7cmlnaHQ6MDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxLjJlbTtoZWlnaHQ6MS4yZW07cGFkZGluZzowO292ZXJmbG93OmhpZGRlbjt0cmFuc2l0aW9uOmNvbG9yIC4xcyBlYXNlLW91dDtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjA7YmFja2dyb3VuZDowIDA7Y29sb3I6I2NjYztmb250LWZhbWlseTpzZXJpZjtmb250LXNpemU6Mi41ZW07bGluZS1oZWlnaHQ6MS4yO2N1cnNvcjpwb2ludGVyfS5zd2FsMi1jbG9zZTpob3Zlcnt0cmFuc2Zvcm06bm9uZTtiYWNrZ3JvdW5kOjAgMDtjb2xvcjojZjI3NDc0fS5zd2FsMi1jbG9zZTo6LW1vei1mb2N1cy1pbm5lcntib3JkZXI6MH0uc3dhbDItY29udGVudHt6LWluZGV4OjE7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW46MDtwYWRkaW5nOjAgMS42ZW07Y29sb3I6IzU0NTQ1NDtmb250LXNpemU6MS4xMjVlbTtmb250LXdlaWdodDo0MDA7bGluZS1oZWlnaHQ6bm9ybWFsO3RleHQtYWxpZ246Y2VudGVyO3dvcmQtd3JhcDpicmVhay13b3JkfS5zd2FsMi1jaGVja2JveCwuc3dhbDItZmlsZSwuc3dhbDItaW5wdXQsLnN3YWwyLXJhZGlvLC5zd2FsMi1zZWxlY3QsLnN3YWwyLXRleHRhcmVhe21hcmdpbjoxZW0gYXV0b30uc3dhbDItZmlsZSwuc3dhbDItaW5wdXQsLnN3YWwyLXRleHRhcmVhe2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDoxMDAlO3RyYW5zaXRpb246Ym9yZGVyLWNvbG9yIC4zcyxib3gtc2hhZG93IC4zcztib3JkZXI6MXB4IHNvbGlkICNkOWQ5ZDk7Ym9yZGVyLXJhZGl1czouMTg3NWVtO2JhY2tncm91bmQ6aW5oZXJpdDtib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNik7Y29sb3I6aW5oZXJpdDtmb250LXNpemU6MS4xMjVlbX0uc3dhbDItZmlsZS5zd2FsMi1pbnB1dGVycm9yLC5zd2FsMi1pbnB1dC5zd2FsMi1pbnB1dGVycm9yLC5zd2FsMi10ZXh0YXJlYS5zd2FsMi1pbnB1dGVycm9ye2JvcmRlci1jb2xvcjojZjI3NDc0IWltcG9ydGFudDtib3gtc2hhZG93OjAgMCAycHggI2YyNzQ3NCFpbXBvcnRhbnR9LnN3YWwyLWZpbGU6Zm9jdXMsLnN3YWwyLWlucHV0OmZvY3VzLC5zd2FsMi10ZXh0YXJlYTpmb2N1c3tib3JkZXI6MXB4IHNvbGlkICNiNGRiZWQ7b3V0bGluZTowO2JveC1zaGFkb3c6MCAwIDNweCAjYzRlNmY1fS5zd2FsMi1maWxlOjotbW96LXBsYWNlaG9sZGVyLC5zd2FsMi1pbnB1dDo6LW1vei1wbGFjZWhvbGRlciwuc3dhbDItdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXJ7Y29sb3I6I2NjY30uc3dhbDItZmlsZTotbXMtaW5wdXQtcGxhY2Vob2xkZXIsLnN3YWwyLWlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciwuc3dhbDItdGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOiNjY2N9LnN3YWwyLWZpbGU6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciwuc3dhbDItaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciwuc3dhbDItdGV4dGFyZWE6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjojY2NjfS5zd2FsMi1maWxlOjpwbGFjZWhvbGRlciwuc3dhbDItaW5wdXQ6OnBsYWNlaG9sZGVyLC5zd2FsMi10ZXh0YXJlYTo6cGxhY2Vob2xkZXJ7Y29sb3I6I2NjY30uc3dhbDItcmFuZ2V7bWFyZ2luOjFlbSBhdXRvO2JhY2tncm91bmQ6I2ZmZn0uc3dhbDItcmFuZ2UgaW5wdXR7d2lkdGg6ODAlfS5zd2FsMi1yYW5nZSBvdXRwdXR7d2lkdGg6MjAlO2NvbG9yOmluaGVyaXQ7Zm9udC13ZWlnaHQ6NjAwO3RleHQtYWxpZ246Y2VudGVyfS5zd2FsMi1yYW5nZSBpbnB1dCwuc3dhbDItcmFuZ2Ugb3V0cHV0e2hlaWdodDoyLjYyNWVtO3BhZGRpbmc6MDtmb250LXNpemU6MS4xMjVlbTtsaW5lLWhlaWdodDoyLjYyNWVtfS5zd2FsMi1pbnB1dHtoZWlnaHQ6Mi42MjVlbTtwYWRkaW5nOjAgLjc1ZW19LnN3YWwyLWlucHV0W3R5cGU9bnVtYmVyXXttYXgtd2lkdGg6MTBlbX0uc3dhbDItZmlsZXtiYWNrZ3JvdW5kOmluaGVyaXQ7Zm9udC1zaXplOjEuMTI1ZW19LnN3YWwyLXRleHRhcmVhe2hlaWdodDo2Ljc1ZW07cGFkZGluZzouNzVlbX0uc3dhbDItc2VsZWN0e21pbi13aWR0aDo1MCU7bWF4LXdpZHRoOjEwMCU7cGFkZGluZzouMzc1ZW0gLjYyNWVtO2JhY2tncm91bmQ6aW5oZXJpdDtjb2xvcjppbmhlcml0O2ZvbnQtc2l6ZToxLjEyNWVtfS5zd2FsMi1jaGVja2JveCwuc3dhbDItcmFkaW97YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7YmFja2dyb3VuZDojZmZmO2NvbG9yOmluaGVyaXR9LnN3YWwyLWNoZWNrYm94IGxhYmVsLC5zd2FsMi1yYWRpbyBsYWJlbHttYXJnaW46MCAuNmVtO2ZvbnQtc2l6ZToxLjEyNWVtfS5zd2FsMi1jaGVja2JveCBpbnB1dCwuc3dhbDItcmFkaW8gaW5wdXR7bWFyZ2luOjAgLjRlbX0uc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdle2Rpc3BsYXk6bm9uZTthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtwYWRkaW5nOi42MjVlbTtvdmVyZmxvdzpoaWRkZW47YmFja2dyb3VuZDojZjBmMGYwO2NvbG9yOiM2NjY7Zm9udC1zaXplOjFlbTtmb250LXdlaWdodDozMDB9LnN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZTo6YmVmb3Jle2NvbnRlbnQ6XFxcIiFcXFwiO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjEuNWVtO21pbi13aWR0aDoxLjVlbTtoZWlnaHQ6MS41ZW07bWFyZ2luOjAgLjYyNWVtO2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQtY29sb3I6I2YyNzQ3NDtjb2xvcjojZmZmO2ZvbnQtd2VpZ2h0OjYwMDtsaW5lLWhlaWdodDoxLjVlbTt0ZXh0LWFsaWduOmNlbnRlcn0uc3dhbDItaWNvbntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmNvbnRlbnQtYm94O2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6NWVtO2hlaWdodDo1ZW07bWFyZ2luOjEuMjVlbSBhdXRvIDEuODc1ZW07Ym9yZGVyOi4yNWVtIHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6NTAlO2ZvbnQtZmFtaWx5OmluaGVyaXQ7bGluZS1oZWlnaHQ6NWVtO2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uc3dhbDItaWNvbiAuc3dhbDItaWNvbi1jb250ZW50e2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Zm9udC1zaXplOjMuNzVlbX0uc3dhbDItaWNvbi5zd2FsMi1lcnJvcntib3JkZXItY29sb3I6I2YyNzQ3NDtjb2xvcjojZjI3NDc0fS5zd2FsMi1pY29uLnN3YWwyLWVycm9yIC5zd2FsMi14LW1hcmt7cG9zaXRpb246cmVsYXRpdmU7ZmxleC1ncm93OjF9LnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV17ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6Mi4zMTI1ZW07d2lkdGg6Mi45Mzc1ZW07aGVpZ2h0Oi4zMTI1ZW07Ym9yZGVyLXJhZGl1czouMTI1ZW07YmFja2dyb3VuZC1jb2xvcjojZjI3NDc0fS5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVdW2NsYXNzJD1sZWZ0XXtsZWZ0OjEuMDYyNWVtO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfS5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVdW2NsYXNzJD1yaWdodF17cmlnaHQ6MWVtO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX0uc3dhbDItaWNvbi5zd2FsMi1lcnJvci5zd2FsMi1pY29uLXNob3d7LXdlYmtpdC1hbmltYXRpb246c3dhbDItYW5pbWF0ZS1lcnJvci1pY29uIC41czthbmltYXRpb246c3dhbDItYW5pbWF0ZS1lcnJvci1pY29uIC41c30uc3dhbDItaWNvbi5zd2FsMi1lcnJvci5zd2FsMi1pY29uLXNob3cgLnN3YWwyLXgtbWFya3std2Via2l0LWFuaW1hdGlvbjpzd2FsMi1hbmltYXRlLWVycm9yLXgtbWFyayAuNXM7YW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtZXJyb3IteC1tYXJrIC41c30uc3dhbDItaWNvbi5zd2FsMi13YXJuaW5ne2JvcmRlci1jb2xvcjojZmFjZWE4O2NvbG9yOiNmOGJiODZ9LnN3YWwyLWljb24uc3dhbDItaW5mb3tib3JkZXItY29sb3I6IzlkZTBmNjtjb2xvcjojM2ZjM2VlfS5zd2FsMi1pY29uLnN3YWwyLXF1ZXN0aW9ue2JvcmRlci1jb2xvcjojYzlkYWUxO2NvbG9yOiM4N2FkYmR9LnN3YWwyLWljb24uc3dhbDItc3VjY2Vzc3tib3JkZXItY29sb3I6I2E1ZGM4Njtjb2xvcjojYTVkYzg2fS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVde3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjMuNzVlbTtoZWlnaHQ6Ny41ZW07dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7Ym9yZGVyLXJhZGl1czo1MCV9LnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV1bY2xhc3MkPWxlZnRde3RvcDotLjQzNzVlbTtsZWZ0Oi0yLjA2MzVlbTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtLW9yaWdpbjozLjc1ZW0gMy43NWVtO2JvcmRlci1yYWRpdXM6Ny41ZW0gMCAwIDcuNWVtfS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdW2NsYXNzJD1yaWdodF17dG9wOi0uNjg3NWVtO2xlZnQ6MS44NzVlbTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtLW9yaWdpbjowIDMuNzVlbTtib3JkZXItcmFkaXVzOjAgNy41ZW0gNy41ZW0gMH0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLXJpbmd7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoyO3RvcDotLjI1ZW07bGVmdDotLjI1ZW07Ym94LXNpemluZzpjb250ZW50LWJveDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JvcmRlcjouMjVlbSBzb2xpZCByZ2JhKDE2NSwyMjAsMTM0LC4zKTtib3JkZXItcmFkaXVzOjUwJX0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLWZpeHtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjE7dG9wOi41ZW07bGVmdDoxLjYyNWVtO3dpZHRoOi40Mzc1ZW07aGVpZ2h0OjUuNjI1ZW07dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVde2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoyO2hlaWdodDouMzEyNWVtO2JvcmRlci1yYWRpdXM6LjEyNWVtO2JhY2tncm91bmQtY29sb3I6I2E1ZGM4Nn0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXVtjbGFzcyQ9dGlwXXt0b3A6Mi44NzVlbTtsZWZ0Oi44MTI1ZW07d2lkdGg6MS41NjI1ZW07dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9LnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPWxvbmdde3RvcDoyLjM3NWVtO3JpZ2h0Oi41ZW07d2lkdGg6Mi45Mzc1ZW07dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3Muc3dhbDItaWNvbi1zaG93IC5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwey13ZWJraXQtYW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCAuNzVzO2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXAgLjc1c30uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzLnN3YWwyLWljb24tc2hvdyAuc3dhbDItc3VjY2Vzcy1saW5lLWxvbmd7LXdlYmtpdC1hbmltYXRpb246c3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZyAuNzVzO2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIC43NXN9LnN3YWwyLWljb24uc3dhbDItc3VjY2Vzcy5zd2FsMi1pY29uLXNob3cgLnN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1yaWdodHstd2Via2l0LWFuaW1hdGlvbjpzd2FsMi1yb3RhdGUtc3VjY2Vzcy1jaXJjdWxhci1saW5lIDQuMjVzIGVhc2UtaW47YW5pbWF0aW9uOnN3YWwyLXJvdGF0ZS1zdWNjZXNzLWNpcmN1bGFyLWxpbmUgNC4yNXMgZWFzZS1pbn0uc3dhbDItcHJvZ3Jlc3Mtc3RlcHN7YWxpZ24taXRlbXM6Y2VudGVyO21hcmdpbjowIDAgMS4yNWVtO3BhZGRpbmc6MDtiYWNrZ3JvdW5kOmluaGVyaXQ7Zm9udC13ZWlnaHQ6NjAwfS5zd2FsMi1wcm9ncmVzcy1zdGVwcyBsaXtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZX0uc3dhbDItcHJvZ3Jlc3Mtc3RlcHMgLnN3YWwyLXByb2dyZXNzLXN0ZXB7ei1pbmRleDoyMDt3aWR0aDoyZW07aGVpZ2h0OjJlbTtib3JkZXItcmFkaXVzOjJlbTtiYWNrZ3JvdW5kOiMzMDg1ZDY7Y29sb3I6I2ZmZjtsaW5lLWhlaWdodDoyZW07dGV4dC1hbGlnbjpjZW50ZXJ9LnN3YWwyLXByb2dyZXNzLXN0ZXBzIC5zd2FsMi1wcm9ncmVzcy1zdGVwLnN3YWwyLWFjdGl2ZS1wcm9ncmVzcy1zdGVwe2JhY2tncm91bmQ6IzMwODVkNn0uc3dhbDItcHJvZ3Jlc3Mtc3RlcHMgLnN3YWwyLXByb2dyZXNzLXN0ZXAuc3dhbDItYWN0aXZlLXByb2dyZXNzLXN0ZXB+LnN3YWwyLXByb2dyZXNzLXN0ZXB7YmFja2dyb3VuZDojYWRkOGU2O2NvbG9yOiNmZmZ9LnN3YWwyLXByb2dyZXNzLXN0ZXBzIC5zd2FsMi1wcm9ncmVzcy1zdGVwLnN3YWwyLWFjdGl2ZS1wcm9ncmVzcy1zdGVwfi5zd2FsMi1wcm9ncmVzcy1zdGVwLWxpbmV7YmFja2dyb3VuZDojYWRkOGU2fS5zd2FsMi1wcm9ncmVzcy1zdGVwcyAuc3dhbDItcHJvZ3Jlc3Mtc3RlcC1saW5le3otaW5kZXg6MTA7d2lkdGg6Mi41ZW07aGVpZ2h0Oi40ZW07bWFyZ2luOjAgLTFweDtiYWNrZ3JvdW5kOiMzMDg1ZDZ9W2NsYXNzXj1zd2FsMl17LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50fS5zd2FsMi1zaG93ey13ZWJraXQtYW5pbWF0aW9uOnN3YWwyLXNob3cgLjNzO2FuaW1hdGlvbjpzd2FsMi1zaG93IC4zc30uc3dhbDItaGlkZXstd2Via2l0LWFuaW1hdGlvbjpzd2FsMi1oaWRlIC4xNXMgZm9yd2FyZHM7YW5pbWF0aW9uOnN3YWwyLWhpZGUgLjE1cyBmb3J3YXJkc30uc3dhbDItbm9hbmltYXRpb257dHJhbnNpdGlvbjpub25lfS5zd2FsMi1zY3JvbGxiYXItbWVhc3VyZXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTk5OTlweDt3aWR0aDo1MHB4O2hlaWdodDo1MHB4O292ZXJmbG93OnNjcm9sbH0uc3dhbDItcnRsIC5zd2FsMi1jbG9zZXtyaWdodDphdXRvO2xlZnQ6MH0uc3dhbDItcnRsIC5zd2FsMi10aW1lci1wcm9ncmVzcy1iYXJ7cmlnaHQ6MDtsZWZ0OmF1dG99QHN1cHBvcnRzICgtbXMtYWNjZWxlcmF0b3I6dHJ1ZSl7LnN3YWwyLXJhbmdlIGlucHV0e3dpZHRoOjEwMCUhaW1wb3J0YW50fS5zd2FsMi1yYW5nZSBvdXRwdXR7ZGlzcGxheTpub25lfX1AbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6bm9uZSksKC1tcy1oaWdoLWNvbnRyYXN0OmFjdGl2ZSl7LnN3YWwyLXJhbmdlIGlucHV0e3dpZHRoOjEwMCUhaW1wb3J0YW50fS5zd2FsMi1yYW5nZSBvdXRwdXR7ZGlzcGxheTpub25lfX1ALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCl7LnN3YWwyLWNsb3NlOmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHJnYmEoNTAsMTAwLDE1MCwuNCl9fUAtd2Via2l0LWtleWZyYW1lcyBzd2FsMi10b2FzdC1zaG93ezAle3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0uNjI1ZW0pIHJvdGF0ZVooMmRlZyl9MzMle3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHJvdGF0ZVooLTJkZWcpfTY2JXt0cmFuc2Zvcm06dHJhbnNsYXRlWSguMzEyNWVtKSByb3RhdGVaKDJkZWcpfTEwMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgcm90YXRlWigwKX19QGtleWZyYW1lcyBzd2FsMi10b2FzdC1zaG93ezAle3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0uNjI1ZW0pIHJvdGF0ZVooMmRlZyl9MzMle3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHJvdGF0ZVooLTJkZWcpfTY2JXt0cmFuc2Zvcm06dHJhbnNsYXRlWSguMzEyNWVtKSByb3RhdGVaKDJkZWcpfTEwMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgcm90YXRlWigwKX19QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLXRvYXN0LWhpZGV7MTAwJXt0cmFuc2Zvcm06cm90YXRlWigxZGVnKTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgc3dhbDItdG9hc3QtaGlkZXsxMDAle3RyYW5zZm9ybTpyb3RhdGVaKDFkZWcpO29wYWNpdHk6MH19QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcHswJXt0b3A6LjU2MjVlbTtsZWZ0Oi4wNjI1ZW07d2lkdGg6MH01NCV7dG9wOi4xMjVlbTtsZWZ0Oi4xMjVlbTt3aWR0aDowfTcwJXt0b3A6LjYyNWVtO2xlZnQ6LS4yNWVtO3dpZHRoOjEuNjI1ZW19ODQle3RvcDoxLjA2MjVlbTtsZWZ0Oi43NWVtO3dpZHRoOi41ZW19MTAwJXt0b3A6MS4xMjVlbTtsZWZ0Oi4xODc1ZW07d2lkdGg6Ljc1ZW19fUBrZXlmcmFtZXMgc3dhbDItdG9hc3QtYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwezAle3RvcDouNTYyNWVtO2xlZnQ6LjA2MjVlbTt3aWR0aDowfTU0JXt0b3A6LjEyNWVtO2xlZnQ6LjEyNWVtO3dpZHRoOjB9NzAle3RvcDouNjI1ZW07bGVmdDotLjI1ZW07d2lkdGg6MS42MjVlbX04NCV7dG9wOjEuMDYyNWVtO2xlZnQ6Ljc1ZW07d2lkdGg6LjVlbX0xMDAle3RvcDoxLjEyNWVtO2xlZnQ6LjE4NzVlbTt3aWR0aDouNzVlbX19QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmd7MCV7dG9wOjEuNjI1ZW07cmlnaHQ6MS4zNzVlbTt3aWR0aDowfTY1JXt0b3A6MS4yNWVtO3JpZ2h0Oi45Mzc1ZW07d2lkdGg6MH04NCV7dG9wOi45Mzc1ZW07cmlnaHQ6MDt3aWR0aDoxLjEyNWVtfTEwMCV7dG9wOi45Mzc1ZW07cmlnaHQ6LjE4NzVlbTt3aWR0aDoxLjM3NWVtfX1Aa2V5ZnJhbWVzIHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmd7MCV7dG9wOjEuNjI1ZW07cmlnaHQ6MS4zNzVlbTt3aWR0aDowfTY1JXt0b3A6MS4yNWVtO3JpZ2h0Oi45Mzc1ZW07d2lkdGg6MH04NCV7dG9wOi45Mzc1ZW07cmlnaHQ6MDt3aWR0aDoxLjEyNWVtfTEwMCV7dG9wOi45Mzc1ZW07cmlnaHQ6LjE4NzVlbTt3aWR0aDoxLjM3NWVtfX1ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItc2hvd3swJXt0cmFuc2Zvcm06c2NhbGUoLjcpfTQ1JXt0cmFuc2Zvcm06c2NhbGUoMS4wNSl9ODAle3RyYW5zZm9ybTpzY2FsZSguOTUpfTEwMCV7dHJhbnNmb3JtOnNjYWxlKDEpfX1Aa2V5ZnJhbWVzIHN3YWwyLXNob3d7MCV7dHJhbnNmb3JtOnNjYWxlKC43KX00NSV7dHJhbnNmb3JtOnNjYWxlKDEuMDUpfTgwJXt0cmFuc2Zvcm06c2NhbGUoLjk1KX0xMDAle3RyYW5zZm9ybTpzY2FsZSgxKX19QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLWhpZGV7MCV7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX0xMDAle3RyYW5zZm9ybTpzY2FsZSguNSk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIHN3YWwyLWhpZGV7MCV7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX0xMDAle3RyYW5zZm9ybTpzY2FsZSguNSk7b3BhY2l0eTowfX1ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwezAle3RvcDoxLjE4NzVlbTtsZWZ0Oi4wNjI1ZW07d2lkdGg6MH01NCV7dG9wOjEuMDYyNWVtO2xlZnQ6LjEyNWVtO3dpZHRoOjB9NzAle3RvcDoyLjE4NzVlbTtsZWZ0Oi0uMzc1ZW07d2lkdGg6My4xMjVlbX04NCV7dG9wOjNlbTtsZWZ0OjEuMzEyNWVtO3dpZHRoOjEuMDYyNWVtfTEwMCV7dG9wOjIuODEyNWVtO2xlZnQ6LjgxMjVlbTt3aWR0aDoxLjU2MjVlbX19QGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXB7MCV7dG9wOjEuMTg3NWVtO2xlZnQ6LjA2MjVlbTt3aWR0aDowfTU0JXt0b3A6MS4wNjI1ZW07bGVmdDouMTI1ZW07d2lkdGg6MH03MCV7dG9wOjIuMTg3NWVtO2xlZnQ6LS4zNzVlbTt3aWR0aDozLjEyNWVtfTg0JXt0b3A6M2VtO2xlZnQ6MS4zMTI1ZW07d2lkdGg6MS4wNjI1ZW19MTAwJXt0b3A6Mi44MTI1ZW07bGVmdDouODEyNWVtO3dpZHRoOjEuNTYyNWVtfX1ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZ3swJXt0b3A6My4zNzVlbTtyaWdodDoyLjg3NWVtO3dpZHRoOjB9NjUle3RvcDozLjM3NWVtO3JpZ2h0OjIuODc1ZW07d2lkdGg6MH04NCV7dG9wOjIuMTg3NWVtO3JpZ2h0OjA7d2lkdGg6My40Mzc1ZW19MTAwJXt0b3A6Mi4zNzVlbTtyaWdodDouNWVtO3dpZHRoOjIuOTM3NWVtfX1Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmd7MCV7dG9wOjMuMzc1ZW07cmlnaHQ6Mi44NzVlbTt3aWR0aDowfTY1JXt0b3A6My4zNzVlbTtyaWdodDoyLjg3NWVtO3dpZHRoOjB9ODQle3RvcDoyLjE4NzVlbTtyaWdodDowO3dpZHRoOjMuNDM3NWVtfTEwMCV7dG9wOjIuMzc1ZW07cmlnaHQ6LjVlbTt3aWR0aDoyLjkzNzVlbX19QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLXJvdGF0ZS1zdWNjZXNzLWNpcmN1bGFyLWxpbmV7MCV7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfTUle3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX0xMiV7dHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKX0xMDAle3RyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyl9fUBrZXlmcmFtZXMgc3dhbDItcm90YXRlLXN1Y2Nlc3MtY2lyY3VsYXItbGluZXswJXt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9NSV7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfTEyJXt0cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpfTEwMCV7dHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKX19QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtZXJyb3IteC1tYXJrezAle21hcmdpbi10b3A6MS42MjVlbTt0cmFuc2Zvcm06c2NhbGUoLjQpO29wYWNpdHk6MH01MCV7bWFyZ2luLXRvcDoxLjYyNWVtO3RyYW5zZm9ybTpzY2FsZSguNCk7b3BhY2l0eTowfTgwJXttYXJnaW4tdG9wOi0uMzc1ZW07dHJhbnNmb3JtOnNjYWxlKDEuMTUpfTEwMCV7bWFyZ2luLXRvcDowO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1lcnJvci14LW1hcmt7MCV7bWFyZ2luLXRvcDoxLjYyNWVtO3RyYW5zZm9ybTpzY2FsZSguNCk7b3BhY2l0eTowfTUwJXttYXJnaW4tdG9wOjEuNjI1ZW07dHJhbnNmb3JtOnNjYWxlKC40KTtvcGFjaXR5OjB9ODAle21hcmdpbi10b3A6LS4zNzVlbTt0cmFuc2Zvcm06c2NhbGUoMS4xNSl9MTAwJXttYXJnaW4tdG9wOjA7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX19QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbnswJXt0cmFuc2Zvcm06cm90YXRlWCgxMDBkZWcpO29wYWNpdHk6MH0xMDAle3RyYW5zZm9ybTpyb3RhdGVYKDApO29wYWNpdHk6MX19QGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLWVycm9yLWljb257MCV7dHJhbnNmb3JtOnJvdGF0ZVgoMTAwZGVnKTtvcGFjaXR5OjB9MTAwJXt0cmFuc2Zvcm06cm90YXRlWCgwKTtvcGFjaXR5OjF9fUAtd2Via2l0LWtleWZyYW1lcyBzd2FsMi1yb3RhdGUtbG9hZGluZ3swJXt0cmFuc2Zvcm06cm90YXRlKDApfTEwMCV7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1Aa2V5ZnJhbWVzIHN3YWwyLXJvdGF0ZS1sb2FkaW5nezAle3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fWJvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCk6bm90KC5zd2FsMi10b2FzdC1zaG93bil7b3ZlcmZsb3c6aGlkZGVufWJvZHkuc3dhbDItaGVpZ2h0LWF1dG97aGVpZ2h0OmF1dG8haW1wb3J0YW50fWJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lcnt0b3A6YXV0bztyaWdodDphdXRvO2JvdHRvbTphdXRvO2xlZnQ6YXV0bzttYXgtd2lkdGg6Y2FsYygxMDAlIC0gLjYyNWVtICogMik7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudCFpbXBvcnRhbnR9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyPi5zd2FsMi1tb2RhbHtib3gtc2hhZG93OjAgMCAxMHB4IHJnYmEoMCwwLDAsLjQpfWJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3B7dG9wOjA7bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSl9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1sZWZ0LGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3Atc3RhcnR7dG9wOjA7bGVmdDowfWJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtZW5kLGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtcmlnaHR7dG9wOjA7cmlnaHQ6MH1ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVye3RvcDo1MCU7bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpfWJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItbGVmdCxib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXN0YXJ0e3RvcDo1MCU7bGVmdDowO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpfWJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItZW5kLGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItcmlnaHR7dG9wOjUwJTtyaWdodDowO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpfWJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b217Ym90dG9tOjA7bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSl9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1sZWZ0LGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tc3RhcnR7Ym90dG9tOjA7bGVmdDowfWJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tZW5kLGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tcmlnaHR7cmlnaHQ6MDtib3R0b206MH1AbWVkaWEgcHJpbnR7Ym9keS5zd2FsMi1zaG93bjpub3QoLnN3YWwyLW5vLWJhY2tkcm9wKTpub3QoLnN3YWwyLXRvYXN0LXNob3duKXtvdmVyZmxvdy15OnNjcm9sbCFpbXBvcnRhbnR9Ym9keS5zd2FsMi1zaG93bjpub3QoLnN3YWwyLW5vLWJhY2tkcm9wKTpub3QoLnN3YWwyLXRvYXN0LXNob3duKT5bYXJpYS1oaWRkZW49dHJ1ZV17ZGlzcGxheTpub25lfWJvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCk6bm90KC5zd2FsMi10b2FzdC1zaG93bikgLnN3YWwyLWNvbnRhaW5lcntwb3NpdGlvbjpzdGF0aWMhaW1wb3J0YW50fX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXJ7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9we3RvcDowO3JpZ2h0OmF1dG87Ym90dG9tOmF1dG87bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSl9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1lbmQsYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1yaWdodHt0b3A6MDtyaWdodDowO2JvdHRvbTphdXRvO2xlZnQ6YXV0b31ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLWxlZnQsYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1zdGFydHt0b3A6MDtyaWdodDphdXRvO2JvdHRvbTphdXRvO2xlZnQ6MH1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWxlZnQsYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1zdGFydHt0b3A6NTAlO3JpZ2h0OmF1dG87Ym90dG9tOmF1dG87bGVmdDowO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXJ7dG9wOjUwJTtyaWdodDphdXRvO2JvdHRvbTphdXRvO2xlZnQ6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWVuZCxib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXJpZ2h0e3RvcDo1MCU7cmlnaHQ6MDtib3R0b206YXV0bztsZWZ0OmF1dG87dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1sZWZ0LGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tc3RhcnR7dG9wOmF1dG87cmlnaHQ6YXV0bztib3R0b206MDtsZWZ0OjB9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbXt0b3A6YXV0bztyaWdodDphdXRvO2JvdHRvbTowO2xlZnQ6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tZW5kLGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tcmlnaHR7dG9wOmF1dG87cmlnaHQ6MDtib3R0b206MDtsZWZ0OmF1dG99Ym9keS5zd2FsMi10b2FzdC1jb2x1bW4gLnN3YWwyLXRvYXN0e2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpzdHJldGNofWJvZHkuc3dhbDItdG9hc3QtY29sdW1uIC5zd2FsMi10b2FzdCAuc3dhbDItYWN0aW9uc3tmbGV4OjE7YWxpZ24tc2VsZjpzdHJldGNoO2hlaWdodDoyLjJlbTttYXJnaW4tdG9wOi4zMTI1ZW19Ym9keS5zd2FsMi10b2FzdC1jb2x1bW4gLnN3YWwyLXRvYXN0IC5zd2FsMi1sb2FkaW5ne2p1c3RpZnktY29udGVudDpjZW50ZXJ9Ym9keS5zd2FsMi10b2FzdC1jb2x1bW4gLnN3YWwyLXRvYXN0IC5zd2FsMi1pbnB1dHtoZWlnaHQ6MmVtO21hcmdpbjouMzEyNWVtIGF1dG87Zm9udC1zaXplOjFlbX1ib2R5LnN3YWwyLXRvYXN0LWNvbHVtbiAuc3dhbDItdG9hc3QgLnN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZXtmb250LXNpemU6MWVtfVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9kaXN0L3N3ZWV0YWxlcnQyLmFsbC5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIiLCJcbmNvbnN0IE1pbmRtZWlzdGVyTG9jYXRvcnMgPSB7XG4gICdNSU5ETUFQX05PREVfQllfSUQnOiAnZGl2W2RhdGEtaWQ9JDFdJyxcbiAgJ01JTkRNQVBfTk9ERVMnOiAnZGl2W2RhdGEtaWRdJyxcbiAgJ01JTkRNQVBfTk9ERV9JQ09OX0VNT0pJJzogJ2J1dHRvbi5lbW9qaS1tYXJ0LWVtb2ppJyxcbiAgJ01JTkRNQVBfTk9ERV9DSElMRFJFTic6ICcnLFxuICAvLydORVdfTUlORE1BUF9CVVRUT04nOiAnI0RPTV9DT05UQUlORVIgPiBkaXYgPiBkaXYua3ItdmlldyA+IGRpdjpudGgtY2hpbGQoMikgPiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2ID4gZGl2Om50aC1jaGlsZCgxKSA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdjpudGgtY2hpbGQoMSknLFxuICAnTkVXX01JTkRNQVBfQlVUVE9OJzogJyNET01fQ09OVEFJTkVSID4gZGl2ID4gZGl2Om50aC1jaGlsZCgxKSA+IGRpdjpudGgtY2hpbGQoMikgPiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2ID4gZGl2Om50aC1jaGlsZCgxKSA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdjpudGgtY2hpbGQoMSknLFxuICAnQ0hBVElOX01JTkRNQVBfVEVNUExBVEUnOiAnLmNoYXRpblRlbXBsYXRlJyxcbiAgJ1RFTVBMQVRFX0JVVFRPTl9JTlNFUlRJT05fUE9JTlQnOiAnI0RPTV9DT05UQUlORVIgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKDEpID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdjpudGgtY2hpbGQoMikgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKDEpID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2Om50aC1jaGlsZCgxKScsXG4gIC8vJ1RFTVBMQVRFX0JVVFRPTl9JTlNFUlRJT05fUE9JTlQnOiAnI0RPTV9DT05UQUlORVIgPiBkaXYgPiBkaXYua3ItdmlldyA+IGRpdjpudGgtY2hpbGQoMikgPiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2ID4gZGl2Om50aC1jaGlsZCgxKSA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdicsXG4gIC8vJ1RFTVBMQVRFX0VMRU1FTlRfVE9fQ0xPTkUnOiAnI0RPTV9DT05UQUlORVIgPiBkaXYgPiBkaXYua3ItdmlldyA+IGRpdjpudGgtY2hpbGQoMikgPiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2ID4gZGl2Om50aC1jaGlsZCgxKSA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdjpudGgtY2hpbGQoMiknLFxuICAnVEVNUExBVEVfRUxFTUVOVF9UT19DTE9ORSc6ICcjRE9NX0NPTlRBSU5FUiA+IGRpdiA+IGRpdjpudGgtY2hpbGQoMSkgPiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdiA+IGRpdjpudGgtY2hpbGQoMSkgPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKDIpJyxcbiAgJ01JTkRNQVBfVEVNUExBVEVfTkFNRSc6ICcua3ItdGV4dCcsXG4gICdNSU5ETUFQX05PREVfSUNPTic6ICdidXR0b24uZW1vamktbWFydC1lbW9qaSxpbWcnXG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWluZG1laXN0ZXJMb2NhdG9yc1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3NjcmlwdHMvbWluZG1laXN0ZXIvd3JhcHBlci9Mb2NhdG9ycy5qcyIsIlxuY29uc3QgTWluZG1laXN0ZXJDbGllbnQgPSByZXF1aXJlKCcuL21pbmRtZWlzdGVyL01pbmRtZWlzdGVyQ2xpZW50JylcbmNvbnN0IENoYXRHUFRDbGllbnQgPSByZXF1aXJlKCcuL2NoYXRncHQvQ2hhdEdQVENsaWVudCcpXG5jb25zdCBNaW5kbWFwTWFuYWdlciA9IHJlcXVpcmUoJy4vY2hhdGluL01pbmRtYXBNYW5hZ2VyJylcbmNvbnN0IEhvbWVQYWdlTWFuYWdlciA9IHJlcXVpcmUoJy4vY2hhdGluL0hvbWVQYWdlTWFuYWdlcicpXG5jb25zdCBBbGVydHMgPSByZXF1aXJlKCcuL3V0aWxzL0FsZXJ0cycpXG5cbmNsYXNzIENvbnRlbnRTY3JpcHQge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5fbWluZG1hcE1hbmFnZXIgPSBuZXcgTWluZG1hcE1hbmFnZXIoKVxuICAgIHRoaXMuX2hvbWVwYWdlTWFuYWdlciA9IG5ldyBIb21lUGFnZU1hbmFnZXIoKVxuICAgIC8vIHRvZG9cbiAgfVxuXG4gIGluaXRVcmxNYW5hZ2VyICgpIHtcbiAgICBsZXQgaG9tZXBhZ2VVcmxQYXR0ZXJuID0gL2h0dHBzPzpcXC9cXC93d3dcXC5taW5kbWVpc3RlclxcLmNvbVxcLyhmb2xkZXJzfG1hcHMpXFwvPy9cbiAgICBsZXQgbWluZG1hcFVybFBhdHRlcm4gPSAvaHR0cHM/OlxcL1xcL3d3d1xcLm1pbmRtZWlzdGVyXFwuY29tXFwvbWFwXFwvXFxkKy9cbiAgICBpZiAoaG9tZXBhZ2VVcmxQYXR0ZXJuLnRlc3Qod2luZG93LmxvY2F0aW9uLmhyZWYpKSB0aGlzLl9ob21lcGFnZU1hbmFnZXIuaW5pdCgpXG4gICAgZWxzZSBpZiAobWluZG1hcFVybFBhdHRlcm4udGVzdCh3aW5kb3cubG9jYXRpb24uaHJlZikpIHRoaXMuX21pbmRtYXBNYW5hZ2VyLmluaXQoKVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgTWluZG1laXN0ZXJDbGllbnQuY2hlY2tUb2tlbigpLnRoZW4oKCkgPT4ge1xuICAgICAgLy9DaGF0R1BUQ2xpZW50LmdldEFwaUtleSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmluaXRVcmxNYW5hZ2VyKClcbiAgICAgIC8vfSwgKGVycm9yKSA9PiB7XG4gICAgICAvLyAgQWxlcnRzLnNob3dFcnJvclRvYXN0KCdDaGF0aW4gcmVxdWlyZXMgYW4gQ2hhdEdQVCBBUEkga2V5JylcbiAgICAgIC8vfSlcbiAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgIEFsZXJ0cy5zaG93RXJyb3JUb2FzdCgnQ2hhdGluIHJlcXVpcmVzIHRoYXQgeW91IGF1dGhvcml6ZSBpdCB0byBpbnRlcmFjdCB3aXRoIHlvdXIgTWluZG1laXN0ZXIgYWNjb3VudCcpXG4gICAgfSlcbiAgfVxufVxuXG5jb25zdCBjcyA9IG5ldyBDb250ZW50U2NyaXB0KClcbmNzLmluaXQoKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3NjcmlwdHMvY29udGVudF9zY3JpcHQuanMiLCJcbmNvbnN0IE1pbmRtYXBXcmFwcGVyID0gcmVxdWlyZSgnLi4vbWluZG1laXN0ZXIvd3JhcHBlci9NaW5kbWFwV3JhcHBlcicpXG5jb25zdCBUZW1wbGF0ZU5vZGVzID0gcmVxdWlyZSgnLi9UZW1wbGF0ZU5vZGVzJylcbmNvbnN0IE1pbmRtZWlzdGVyQ2xpZW50ID0gcmVxdWlyZSgnLi4vbWluZG1laXN0ZXIvTWluZG1laXN0ZXJDbGllbnQnKVxuY29uc3QgQ2hhdEdQVENsaWVudCA9IHJlcXVpcmUoJy4uL2NoYXRncHQvQ2hhdEdQVENsaWVudCcpXG5jb25zdCBBbGVydHMgPSByZXF1aXJlKCcuLi91dGlscy9BbGVydHMnKVxuY29uc3QgTWluZG1hcENvbnRlbnRQYXJzZXIgPSByZXF1aXJlKCcuLi9taW5kbWVpc3Rlci93cmFwcGVyL01pbmRtYXBDb250ZW50UGFyc2VyJylcbmNvbnN0IFByb2Nlc3NRdWVzdGlvbnMgPSByZXF1aXJlKCcuL1Byb2Nlc3NRdWVzdGlvbnMnKVxuY29uc3QgQ29uc2VxdWVuY2UgPSByZXF1aXJlKCcuL21vZGVsL0NvbnNlcXVlbmNlJylcbmNvbnN0IEludGVydmVudGlvbiA9IHJlcXVpcmUoJy4vbW9kZWwvSW50ZXJ2ZW50aW9uJylcbmNvbnN0IFByb2JsZW0gPSByZXF1aXJlKCcuL21vZGVsL1Byb2JsZW0nKVxuY29uc3QgUHJvbXB0U3R5bGVzID0gcmVxdWlyZSgnLi9Qcm9tcHRTdHlsZXMnKVxuY29uc3QgSWNvbnNNYXAgPSByZXF1aXJlKCcuL0ljb25zTWFwJylcbmNvbnN0IFV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMvVXRpbHMnKVxuXG5jbGFzcyBNaW5kbWFwTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICB0aGlzLl9tYXBJZCA9IG51bGxcbiAgICB0aGlzLl9wcm9jZXNzTW9kZXMgPSBbXG4gICAgICB7IG5hbWU6ICdQUk9CTEVNX0RFRVBFTicsXG4gICAgICAgIHRlbXBsYXRlTm9kZVRleHQ6IFRlbXBsYXRlTm9kZXMuUFJPQkxFTV9ERUVQRU5fTU9ERSxcbiAgICAgICAgbWluZG1hcE5vZGU6IG51bGwsXG4gICAgICAgIG9uRW5hYmxlOiAoKSA9PiB7IHRoYXQuZW5hYmxlUHJvYmxlbURlZXBlbigpIH0sXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAgeyBuYW1lOiAnUkVMRVZBTkNFX01BUFBJTkcnLFxuICAgICAgICB0ZW1wbGF0ZU5vZGVUZXh0OiBUZW1wbGF0ZU5vZGVzLlJFTEVWQU5DRV9NQVBQSU5HX01PREUsXG4gICAgICAgIG1pbmRtYXBOb2RlOiBudWxsLFxuICAgICAgICBvbkVuYWJsZTogKCkgPT4geyB0aGF0LmVuYWJsZVJlbGV2YW5jZU1hcHBpbmcoKSB9LFxuICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHsgbmFtZTogJ1NPTFVUSU9OX01BUFBJTkcnLFxuICAgICAgICB0ZW1wbGF0ZU5vZGVUZXh0OiBUZW1wbGF0ZU5vZGVzLlNPTFVUSU9OX01BUFBJTkdfTU9ERSxcbiAgICAgICAgbWluZG1hcE5vZGU6IG51bGwsXG4gICAgICAgIG9uRW5hYmxlOiAoKSA9PiB7IHRoYXQuZW5hYmxlU29sdXRpb25NYXBwaW5nKCkgfSxcbiAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgIH1cbiAgICBdXG4gICAgdGhpcy5fc3R5bGUgPSBudWxsXG4gICAgdGhpcy5fdmFyaWFibGVzID0gW11cbiAgICB0aGlzLl9zY29waW5nQW5hbHlzaXMgPSBudWxsXG4gICAgdGhpcy5fbWluZG1hcFBhcnNlciA9IG51bGxcbiAgfVxuICBpbml0ICgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICBsZXQgdXJsUmVnZXhwID0gL2h0dHBzPzpcXC9cXC93d3dcXC5taW5kbWVpc3RlclxcLmNvbVxcL21hcFxcLyhcXGQrKSgkfFxcL3xcXD98IykvXG4gICAgbGV0IG0gPSB3aW5kb3cubG9jYXRpb24uaHJlZi5tYXRjaCh1cmxSZWdleHApXG4gICAgaWYgKG0gPT0gbnVsbCB8fCBtLmxlbmd0aCA8IDIpIHJldHVyblxuICAgIGxldCBub2RlSWQgPSBtWzFdXG4gICAgbGV0IG5vZGUgPSBNaW5kbWFwV3JhcHBlci5nZXROb2RlQnlJZChub2RlSWQpXG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoYXQuaW5pdCgpXG4gICAgICB9LCAxMDApXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy5pc0NoYXRpbk1hcCgpLnRoZW4oKCkgPT4ge1xuICAgICAgQWxlcnRzLnNob3dMb2FkaW5nV2luZG93KCdMb2FkaW5nLi4uJylcbiAgICAgIC8vIHRoZSBpZCBpbiB0aGUgdXJsIGNhbiBiZSBvdGhlciBub2RlIGJ1dCB0aGUgcm9vdCwgc28gb2J0YWluIHRoZSByb290IG5vZGUgaWRcbiAgICAgIC8qIE1pbmRtZWlzdGVyQ2xpZW50LmdldEJlbG9uZ2luZ01hcChub2RlSWQpLnRoZW4oKG1hcElkKSA9PiB7XG4gICAgICAgIHRoYXQuX21hcElkID0gbWFwSWRcbiAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICBBbGVydHMuc2hvd0Vycm9yVG9hc3QoZXJyb3IpXG4gICAgICB9KSAqL1xuICAgICAgdGhhdC5fbWFwSWQgPSBub2RlSWRcbiAgICAgIC8vIHRvZG8gLSB0aGlzIGlzIGp1c3QgYSB3b3JrYXJvdW5kIGZvciB0aGUgcHJvdG90eXBlXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgQWxlcnRzLmNsb3NlTG9hZGluZ1dpbmRvdygpXG4gICAgICAgIC8vIHRoaXMuYWRkTW9kZU1hbmFnZXIoKVxuICAgICAgICAvLyB0aGlzLmluaXRRdWVzdGlvbk1hbmFnZXIoKVxuICAgICAgICAvLyB0aGlzLmluaXRBbnN3ZXJNYW5hZ2VyKClcbiAgICAgICAgdGhhdC5pbml0Q2hhbmdlTWFuYWdlcigpXG4gICAgICB9LCA1MDAwKVxuICAgIH0pXG4gIH1cbiAgaXNDaGF0aW5NYXAgKCkge1xuICAgIC8vIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gY2hlY2tzIG9ubHkgdGhlIHVpIG1hcCAoc3luYyksIGJ1dCBmdXR1cmUgaW1wbGVtZW50YXRpb25zIGNvdWxkIHJlcXVpcmUgYXN5bmMgY2hlY2tpbmdzXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBmb3VuZCA9IHRydWVcbiAgICAgIE9iamVjdC5rZXlzKFRlbXBsYXRlTm9kZXMpLmZvckVhY2goKGspID0+IHtcbiAgICAgICAgbGV0IG5vZGVzID0gTWluZG1hcFdyYXBwZXIuZ2V0Tm9kZXNCeVRleHQoVGVtcGxhdGVOb2Rlc1trXSlcbiAgICAgICAgaWYgKG5vZGVzID09IG51bGwgfHwgbm9kZXMubGVuZ3RoID09PSAwKSBmb3VuZCA9IGZhbHNlXG4gICAgICB9KVxuICAgICAgaWYgKGZvdW5kKSByZXNvbHZlKClcbiAgICAgIGVsc2UgcmVqZWN0KClcbiAgICB9KVxuICB9XG4gIGluaXRDaGFuZ2VNYW5hZ2VyICgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICBsZXQgcm9vdE5vZGUgPSBNaW5kbWFwV3JhcHBlci5nZXROb2RlQnlJZCh0aGlzLl9tYXBJZClcbiAgICBpZiAocm9vdE5vZGUgPT0gbnVsbCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoYXQuaW5pdENoYW5nZU1hbmFnZXIoKVxuICAgICAgfSwgMTAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGxldCBwYXJlbnQgPSByb290Tm9kZS5lbGVtZW50LnBhcmVudE5vZGVcbiAgICBsZXQgb2JzID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xuICAgICAgbGV0IG5ld05vZGVzID0gbXV0YXRpb25zLmZpbmQoKG0pID0+IHtcbiAgICAgICAgbGV0IGFkZGVkTm9kZXMgPSBBcnJheS5mcm9tKG0uYWRkZWROb2RlcylcbiAgICAgICAgbGV0IG1hcE5vZGVzID0gYWRkZWROb2Rlcy5maW5kKChuKSA9PiB7IHJldHVybiBuLmhhc0F0dHJpYnV0ZXMoJ2RhdGEtaWQnKSB9IClcbiAgICAgICAgcmV0dXJuIG1hcE5vZGVzICE9IG51bGxcbiAgICAgIH0pXG4gICAgICBpZiAobmV3Tm9kZXMpIHtcbiAgICAgICAgdGhhdC5hZGRNb2RlTWFuYWdlcigpXG4gICAgICAgIHRoYXQuYWRkQW5zd2VyQ2xpY2tNYW5hZ2VyKClcbiAgICAgICAgdGhhdC5hZGRRdWVzdGlvbkNsaWNrTWFuYWdlcigpXG4gICAgICB9XG4gICAgfSlcbiAgICBsZXQgY29uZmlnID0geyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfVxuICAgIG9icy5vYnNlcnZlKHBhcmVudCwgY29uZmlnKVxuICAgIC8vIG9icy5vYnNlcnZlKGRvY3VtZW50LCBjb25maWcpXG4gICAgdGhpcy5hZGRNb2RlTWFuYWdlcigpXG4gICAgdGhpcy5hZGRBbnN3ZXJDbGlja01hbmFnZXIoKVxuICAgIHRoaXMuYWRkUXVlc3Rpb25DbGlja01hbmFnZXIoKVxuICB9XG4gIC8qKlxuICAgKiAgUHJvY2VzcyBtb2RlIG1hbmFnZW1lbnRcbiAgICovXG4gIGFkZE1vZGVNYW5hZ2VyICgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICBsZXQgcHJvY2Vzc01vZGVOb2RlcyA9IE1pbmRtYXBXcmFwcGVyLmdldE5vZGVzQnlUZXh0KFRlbXBsYXRlTm9kZXMuUFJPQ0VTU19NT0RFKVxuICAgIGlmIChwcm9jZXNzTW9kZU5vZGVzID09IG51bGwgfHwgcHJvY2Vzc01vZGVOb2Rlcy5sZW5ndGggIT09IDEpIHJldHVyblxuICAgIHRoYXQuX3Byb2Nlc3NNb2Rlcy5mb3JFYWNoKChtKSA9PiB7XG4gICAgICBsZXQgbW9kZU5vZGVzID0gTWluZG1hcFdyYXBwZXIuZ2V0Tm9kZXNCeVRleHQobS50ZW1wbGF0ZU5vZGVUZXh0KVxuICAgICAgaWYgKG1vZGVOb2RlcyA9PSBudWxsIHx8IG1vZGVOb2Rlcy5sZW5ndGggIT09IDEpIHJldHVyblxuICAgICAgbGV0IG1vZGVOb2RlID0gbW9kZU5vZGVzWzBdXG4gICAgICBtLm1pbmRtYXBOb2RlID0gbW9kZU5vZGVcbiAgICAgIGlmIChtLm1pbmRtYXBOb2RlLmNsYXNzTGlzdCAhPSBudWxsKSByZXR1cm5cbiAgICAgIGxldCBpY29uRWwgPSBtb2RlTm9kZS5nZXRJY29uRWxlbWVudCgpXG4gICAgICBpZiAoaWNvbkVsID09IG51bGwgfHwgKGljb25FbC5jbGFzc0xpc3QgIT0gbnVsbCAmJiBpY29uRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGF0aW5fbW9kZScpKSkgcmV0dXJuXG4gICAgICBpY29uRWwuY2xhc3NMaXN0LmFkZCgnY2hhdGluX21vZGUnKVxuICAgICAgaWNvbkVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwb2ludGVyLWV2ZW50cycpXG4gICAgICBpY29uRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICB0aGF0Lm9uQ2xpY2tNb2RlKG0pXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgbW9kZUVuYWJsZUNoYW5nZXMgKG1vZGUpIHtcbiAgICBsZXQgbm9kZXMgPSBbXVxuICAgIHRoaXMuX3Byb2Nlc3NNb2Rlcy5mb3JFYWNoKChtKSA9PiB7XG4gICAgICBpZiAobS5uYW1lID09PSBtb2RlLm5hbWUpIHtcbiAgICAgICAgbm9kZXMucHVzaCh7XG4gICAgICAgICAgaWQ6IG0ubWluZG1hcE5vZGUuaWQsXG4gICAgICAgICAgaW1hZ2U6IEljb25zTWFwWyd0aWNrLWVuYWJsZWQnXVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZXMucHVzaCh7XG4gICAgICAgICAgaWQ6IG0ubWluZG1hcE5vZGUuaWQsXG4gICAgICAgICAgaW1hZ2U6IEljb25zTWFwWyd0aWNrLWRpc2FibGVkJ11cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBub2Rlc1xuICB9XG4gIG9uQ2xpY2tNb2RlIChtb2RlKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoYXQuX3Byb2Nlc3NNb2Rlcy5mb3JFYWNoKChtKSA9PiB7XG4gICAgICAgIGlmIChtLm5hbWUgPT09IG1vZGUubmFtZSkge1xuICAgICAgICAgIG0ub25FbmFibGUoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgZW5hYmxlUHJvYmxlbURlZXBlbiAoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzXG4gICAgdGhhdC5wYXJzZU1hcCgpLnRoZW4oKG1hcEluZm8pID0+IHtcbiAgICAgIGxldCBzY29waW5nQW5hbHlzaXNOb2RlcyA9IHRoaXMuX21pbmRtYXBQYXJzZXIuZ2V0Tm9kZXNXaXRoVGV4dChUZW1wbGF0ZU5vZGVzLlNDT1BJTkdfQU5BTFlTSVMpXG4gICAgICBpZiAoc2NvcGluZ0FuYWx5c2lzTm9kZXMgPT0gbnVsbCB8fCBzY29waW5nQW5hbHlzaXNOb2Rlcy5sZW5ndGggPT09IDApIHJldHVyblxuICAgICAgbGV0IHNjb3BpbmdBbmFseXNpc05vZGUgPSBzY29waW5nQW5hbHlzaXNOb2Rlc1swXVxuICAgICAgbGV0IHF1ZXN0aW9uID0gUHJvY2Vzc1F1ZXN0aW9ucy5QUk9CTEVNX1NUQVRFTUVOVFxuICAgICAgbGV0IGl0ZW1zID0gTWluZG1hcE1hbmFnZXIuZXh0cmFjdFF1ZXN0aW9uSXRlbXMocXVlc3Rpb24pXG4gICAgICBpdGVtcy5mb3JFYWNoKChpKSA9PiB7XG4gICAgICAgIGxldCB2ID0gdGhhdC5fdmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7IHJldHVybiB2YXJpYWJsZS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IGkudG9Mb3dlckNhc2UoKSB9KVxuICAgICAgICBpZiAodiA9PSBudWxsKSByZXR1cm5cbiAgICAgICAgcXVlc3Rpb24gPSBxdWVzdGlvbi5yZXBsYWNlKGA8JHtpfT5gLCB2LnZhbHVlKVxuICAgICAgfSlcbiAgICAgIGxldCBtaXNzaW5nSXRlbXMgPSBNaW5kbWFwTWFuYWdlci5leHRyYWN0UXVlc3Rpb25JdGVtcyhxdWVzdGlvbilcbiAgICAgIGlmIChtaXNzaW5nSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICBBbGVydHMuc2hvd0Vycm9yVG9hc3QoYE1pc3NpbmcgdmFyaWFibGVzOiAke21pc3NpbmdJdGVtc31gKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IG1vZGVDaGFuZ2VzID0gdGhhdC5tb2RlRW5hYmxlQ2hhbmdlcyh0aGF0Ll9wcm9jZXNzTW9kZXMuZmluZCgobSkgPT4geyByZXR1cm4gbS5uYW1lID09PSAnUFJPQkxFTV9ERUVQRU4nIH0pKVxuICAgICAgICBNaW5kbWVpc3RlckNsaWVudC5kb0FjdGlvbnModGhhdC5fbWFwSWQsIFt7dGV4dDogcXVlc3Rpb24sIHBhcmVudElkOiBzY29waW5nQW5hbHlzaXNOb2RlLmlkLCBzdHlsZTogUHJvbXB0U3R5bGVzLlF1ZXN0aW9uUHJvbXB0LCBpbWFnZTogSWNvbnNNYXAubWFnbmlmaWVyfV0sIG1vZGVDaGFuZ2VzKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBBbGVydHMuY2xvc2VMb2FkaW5nV2luZG93KClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGVuYWJsZVJlbGV2YW5jZU1hcHBpbmcgKCkge1xuICAgIGxldCB0aGF0ID0gdGhpc1xuICAgIGxldCBtb2RlQ2hhbmdlcyA9IHRoYXQubW9kZUVuYWJsZUNoYW5nZXModGhhdC5fcHJvY2Vzc01vZGVzLmZpbmQoKG0pID0+IHsgcmV0dXJuIG0ubmFtZSA9PT0gJ1JFTEVWQU5DRV9NQVBQSU5HJyB9KSlcbiAgICBNaW5kbWVpc3RlckNsaWVudC5kb0FjdGlvbnModGhhdC5fbWFwSWQsIFtdLCBtb2RlQ2hhbmdlcykudGhlbigoKSA9PiB7XG4gICAgICAvLyBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgQWxlcnRzLmNsb3NlTG9hZGluZ1dpbmRvdygpXG4gICAgfSlcbiAgfVxuICBlbmFibGVTb2x1dGlvbk1hcHBpbmcgKCkge1xuICAgIGxldCB0aGF0ID0gdGhpc1xuICAgIGxldCBtb2RlQ2hhbmdlcyA9IHRoYXQubW9kZUVuYWJsZUNoYW5nZXModGhhdC5fcHJvY2Vzc01vZGVzLmZpbmQoKG0pID0+IHsgcmV0dXJuIG0ubmFtZSA9PT0gJ1NPTFVUSU9OX01BUFBJTkcnIH0pKVxuICAgIE1pbmRtZWlzdGVyQ2xpZW50LmRvQWN0aW9ucyh0aGF0Ll9tYXBJZCwgW10sIG1vZGVDaGFuZ2VzKS50aGVuKCgpID0+IHtcbiAgICAgIC8vIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICBBbGVydHMuY2xvc2VMb2FkaW5nV2luZG93KClcbiAgICB9KVxuICB9XG4gIC8qKlxuICAgKiBNYW5hZ2VtZW50IG9mIHF1ZXN0aW9uIG5vZGVzXG4gICAqL1xuICBhZGRRdWVzdGlvbkNsaWNrTWFuYWdlciAoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzXG4gICAgbGV0IHF1ZXN0aW9uTm9kZXMgPSB0aGF0LmdldFF1ZXN0aW9uTm9kZXMoKVxuICAgIHF1ZXN0aW9uTm9kZXMuZm9yRWFjaCgobikgPT4ge1xuICAgICAgbGV0IGljb25FbGVtZW50ID0gbi5nZXRJY29uRWxlbWVudCgpXG4gICAgICBpZiAoaWNvbkVsZW1lbnQgPT0gbnVsbCB8fCBpY29uRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoYXRpbl9xdWVzdGlvbicpKSByZXR1cm5cbiAgICAgIGljb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NoYXRpbl9xdWVzdGlvbicpXG4gICAgICBpY29uRWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncG9pbnRlci1ldmVudHMnKVxuICAgICAgaWNvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICB0aGF0LnBlcmZvcm1RdWVzdGlvbihuKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG4gIGdldFF1ZXN0aW9uTm9kZXMgKCkge1xuICAgIGxldCBxdWVzdGlvblJlZ0V4cCA9IC9eKFdISUNIfEhPV3xXSFkpLitcXD8kL2lcbiAgICBsZXQgcXVlc3Rpb25Ob2RlcyA9IE1pbmRtYXBXcmFwcGVyLmdldE5vZGVzQnlUZXh0UmVnZXhwKHF1ZXN0aW9uUmVnRXhwKVxuICAgIC8vIHRvZG8gLT4gY2hlY2sgbm9kZSBzdHlsZSBhbmQgaWNvblxuICAgIHJldHVybiBxdWVzdGlvbk5vZGVzXG4gIH1cbiAgcGVyZm9ybVF1ZXN0aW9uIChub2RlKSB7XG4gICAgQWxlcnRzLnNob3dMb2FkaW5nV2luZG93KGBXYWl0aW5nIGZvciBDaGF0R1BUJ3MgYW5zd2VyLi4uYClcbiAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICB0aGlzLnBhcnNlTWFwKCkudGhlbigoKSA9PiB7XG4gICAgICBsZXQgcXVlc3Rpb24gPSBub2RlLnRleHQgKyB0aGF0Ll9zdHlsZVxuICAgICAgQ2hhdEdQVENsaWVudC5wZXJmb3JtUXVlc3Rpb24ocXVlc3Rpb24pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGxldCBjb25jZXB0cyA9IHRoYXQucGFyc2VDaGF0R1BUQW5zd2VyKHJlc3BvbnNlKVxuICAgICAgICBpZiAoY29uY2VwdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgQWxlcnRzLnNob3dFcnJvclRvYXN0KGBUaGVyZSB3YXMgYW4gZXJyb3IgcGFyc2luZyBDaGF0R1BUJ3MgYW5zd2VyLiBDaGVjayBicm93c2VyIGNvbnNvbGUgdG8gc2VlIHRoZSB3aG9sZSBhbnN3ZXIuYClcbiAgICAgICAgICBjb25zb2xlLmxvZyhgQ2hhdEdQVCdzIGFuc3dlcjpgKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGxldCBub2RlcyA9IGNvbmNlcHRzLm1hcCgoYykgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0ZXh0OiBjLmxhYmVsLFxuICAgICAgICAgICAgc3R5bGU6IFByb21wdFN0eWxlcy5BbnN3ZXJJdGVtLFxuICAgICAgICAgICAgaW1hZ2U6IEljb25zTWFwWyd0aWNrLWRpc2FibGVkJ10sXG4gICAgICAgICAgICBwYXJlbnRJZDogbm9kZS5pZCxcbiAgICAgICAgICAgIG5vdGU6IGMuZGVzY3JpcHRpb25cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIE1pbmRtZWlzdGVyQ2xpZW50LmFkZE5vZGVzKHRoYXQuX21hcElkLCBub2RlcykudGhlbigoKSA9PiB7XG4gICAgICAgICAgQWxlcnRzLmNsb3NlTG9hZGluZ1dpbmRvdygpXG4gICAgICAgIH0pXG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgaWYgKGVycm9yID09PSAnVW5hYmxlIHRvIG9idGFpbiBDaGF0R1BUIHRva2VuJykgQWxlcnRzLnNob3dFcnJvclRvYXN0KGBZb3UgbXVzdCBiZSBsb2dnZWQgaW4gQ2hhdEdQVGApXG4gICAgICAgIGVsc2UgQWxlcnRzLnNob3dFcnJvclRvYXN0KGBDaGF0R1BUIGVycm9yOiAke2Vycm9yfWApXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgcGFyc2VDaGF0R1BUQW5zd2VyIChhbnN3ZXIpIHtcbiAgICBsZXQgbm9kZXMgPSBbXVxuICAgIGxldCBwYXR0ZXJuID0gL1xcZChcXCl8XFwuKVteOlxcLVxcLlxcbiRdKyg6fFxcLXxcXC58XFxufCQpL2dcbiAgICBsZXQgcmVzdWx0ID0gYW5zd2VyLm1hdGNoKHBhdHRlcm4pXG4gICAgaWYgKHJlc3VsdCA9PSBudWxsIHx8IHJlc3VsdC5sZW5ndGggPT09IDApIHJldHVybiBbXVxuICAgIGxldCByZXN1bHROZXcgPSByZXN1bHQubWFwKChyKSA9PiByLnJlcGxhY2UoL1xcKS9nLCAnXFxcXCknKS5yZXBsYWNlKC9cXC4vZywgJ1xcXFwuJykpXG4gICAgbGV0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoJygnICsgcmVzdWx0TmV3LmpvaW4oJ3wnKSArICcpJywgJ2dpJylcbiAgICBsZXQgcGFydHMgPSBhbnN3ZXIuc3BsaXQocmVnZXhwKVxuICAgIHJlc3VsdC5mb3JFYWNoKChyLCBpbmQpID0+IHtcbiAgICAgIGxldCB3aG9sZSA9IHIucmVwbGFjZSgvXFxkKFxcKXxcXC4pLywgJycpLnJlcGxhY2UoJzonLCAnJykucmVwbGFjZSgnLScsICcnKVxuICAgICAgbm9kZXMucHVzaCh7bGFiZWw6IHdob2xlLnRyaW0oKSwgZGVzY3JpcHRpb246IHBhcnRzW2luZCAqIDIgKyAyXS50cmltKCl9KVxuICAgIH0pXG4gICAgcmV0dXJuIG5vZGVzXG4gIH1cbiAgLyoqXG4gICAqIE1hbmFnZW1lbnQgb2YgYW5zd2VyIG5vZGVzXG4gICAqL1xuICBhZGRBbnN3ZXJDbGlja01hbmFnZXIgKCkge1xuICAgIGxldCB0aGF0ID0gdGhpc1xuICAgIGxldCBhbnN3ZXJOb2RlcyA9IHRoYXQuZ2V0QW5zd2VyTm9kZXMoKVxuICAgIGFuc3dlck5vZGVzLmZvckVhY2goKG4pID0+IHtcbiAgICAgIGxldCBpY29uRWxlbWVudCA9IG4uZ2V0SWNvbkVsZW1lbnQoKVxuICAgICAgaWYgKGljb25FbGVtZW50ID09IG51bGwgfHwgaWNvbkVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGF0aW5fYW5zd2VyJykpIHJldHVyblxuICAgICAgaWNvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2hhdGluX2Fuc3dlcicpXG4gICAgICBpY29uRWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncG9pbnRlci1ldmVudHMnKVxuICAgICAgaWNvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICB0aGF0Lm9uQ2xpY2tBbnN3ZXIobilcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICBvbkNsaWNrQW5zd2VyICh1aU5vZGUpIHtcbiAgICAvLyB0b2RvXG4gICAgbGV0IHRoYXQgPSB0aGlzXG4gICAgQWxlcnRzLnNob3dMb2FkaW5nV2luZG93KGBMb2FkaW5nLi4uYClcbiAgICB0aGlzLnBhcnNlTWFwKCkudGhlbigoKSA9PiB7XG4gICAgICBsZXQgaXNzdWUgPSB0aGF0LmZpbmRJc3N1ZSh1aU5vZGUudGV4dCwgdWlOb2RlLmlkKVxuICAgICAgaWYgKGlzc3VlID09IG51bGwpIHtcbiAgICAgICAgQWxlcnRzLnNob3dFcnJvclRvYXN0KCdBbiBlcnJvciBvY2N1cnJlZCcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgbGV0IGVuYWJsZWRNb2RlID0gdGhhdC5fcHJvY2Vzc01vZGVzLmZpbmQoKG0pID0+IHsgcmV0dXJuIG0uZW5hYmxlZCB9KVxuICAgICAgaWYgKGVuYWJsZWRNb2RlID09IG51bGwpIHtcbiAgICAgICAgQWxlcnRzLnNob3dFcnJvclRvYXN0KCdBbiBlcnJvciBvY2N1cnJlZCcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgc3dpdGNoIChlbmFibGVkTW9kZS5uYW1lKSB7XG4gICAgICAgIGNhc2UgJ1BST0JMRU1fREVFUEVOJzpcbiAgICAgICAgICB0aGF0Lm9uQ2xpY2tBbnN3ZXJQcm9ibGVtRGVlcGVuKHVpTm9kZSwgaXNzdWUpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnUkVMRVZBTkNFX01BUFBJTkcnOlxuICAgICAgICAgIHRoYXQub25DbGlja0Fuc3dlclJlbGV2YW5jZU1hcHBpbmcodWlOb2RlLCBpc3N1ZSlcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdTT0xVVElPTl9NQVBQSU5HJzpcbiAgICAgICAgICB0aGF0Lm9uQ2xpY2tBbnN3ZXJTb2x1dGlvbk1hcHBpbmcodWlOb2RlLCBpc3N1ZSlcbiAgICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH0pLmNhdGNoKCAoZXJyb3IpID0+IHtcbiAgICAgIEFsZXJ0cy5zaG93RXJyb3JUb2FzdCgnQW4gZXJyb3Igb2NjdXJyZWQnKVxuICAgIH0pXG4gIH1cbiAgb25DbGlja0Fuc3dlclByb2JsZW1EZWVwZW4gKHVpTm9kZSwgaXNzdWUpIHtcbiAgICBpZiAoIShpc3N1ZSBpbnN0YW5jZW9mIFByb2JsZW0pKSB7XG4gICAgICBBbGVydHMuc2hvd0Vycm9yVG9hc3QoJ0ludmFsaWQgbW9kZScpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgbGV0IHF1ZXN0aW9uID0gUHJvY2Vzc1F1ZXN0aW9ucy5QUk9CTEVNX0FOQUxZU0lTXG4gICAgcXVlc3Rpb24gPSBxdWVzdGlvbi5yZXBsYWNlKCc8cHJvYmxlbT4nLCBpc3N1ZS50ZXh0KVxuICAgIGxldCBpdGVtcyA9IE1pbmRtYXBNYW5hZ2VyLmV4dHJhY3RRdWVzdGlvbkl0ZW1zKHF1ZXN0aW9uKVxuICAgIGl0ZW1zLmZvckVhY2goKGkpID0+IHtcbiAgICAgIGxldCB2ID0gdGhpcy5fdmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7IHJldHVybiB2YXJpYWJsZS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IGkudG9Mb3dlckNhc2UoKSB9KVxuICAgICAgaWYgKHYgPT0gbnVsbCkgcmV0dXJuXG4gICAgICBxdWVzdGlvbiA9IHF1ZXN0aW9uLnJlcGxhY2UoYDwke2l9PmAsIHYudmFsdWUpXG4gICAgfSlcbiAgICBsZXQgbWlzc2luZ0l0ZW1zID0gTWluZG1hcE1hbmFnZXIuZXh0cmFjdFF1ZXN0aW9uSXRlbXMocXVlc3Rpb24pXG4gICAgaWYgKG1pc3NpbmdJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICBBbGVydHMuc2hvd0Vycm9yVG9hc3QoYE1pc3NpbmcgdmFyaWFibGVzOiAke21pc3NpbmdJdGVtc31gKVxuICAgIH0gZWxzZSB7XG4gICAgICBNaW5kbWVpc3RlckNsaWVudC5kb0FjdGlvbnModGhpcy5fbWFwSWQsXG4gICAgICAgIFt7dGV4dDogcXVlc3Rpb24sIHBhcmVudElkOiBpc3N1ZS5ub2RlSWQsIHN0eWxlOiBQcm9tcHRTdHlsZXMuUXVlc3Rpb25Qcm9tcHQsIGltYWdlOiBJY29uc01hcC5tYWduaWZpZXJ9XSxcbiAgICAgICAgW3tpZDogaXNzdWUubm9kZUlkLCBpbWFnZTogSWNvbnNNYXBbJ3RpY2stZW5hYmxlZCddfV1cbiAgICAgICkudGhlbigoKSA9PiB7XG4gICAgICAgIEFsZXJ0cy5jbG9zZUxvYWRpbmdXaW5kb3coKVxuICAgICAgICAvLyBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25DbGlja0Fuc3dlclJlbGV2YW5jZU1hcHBpbmcgKHVpTm9kZSwgaXNzdWUpIHtcbiAgICBpZiAoIShpc3N1ZSBpbnN0YW5jZW9mIFByb2JsZW0pKSB7XG4gICAgICBBbGVydHMuc2hvd0Vycm9yVG9hc3QoJ0ludmFsaWQgbW9kZScpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgbGV0IHF1ZXN0aW9uID0gUHJvY2Vzc1F1ZXN0aW9ucy5SRUxFVkFOQ0VfTUFQUElOR1xuICAgIHF1ZXN0aW9uID0gcXVlc3Rpb24ucmVwbGFjZSgnPHByb2JsZW0+JywgaXNzdWUudGV4dClcbiAgICBsZXQgaXRlbXMgPSBNaW5kbWFwTWFuYWdlci5leHRyYWN0UXVlc3Rpb25JdGVtcyhxdWVzdGlvbilcbiAgICBpdGVtcy5mb3JFYWNoKChpKSA9PiB7XG4gICAgICBsZXQgdiA9IHRoaXMuX3ZhcmlhYmxlcy5maW5kKCh2YXJpYWJsZSkgPT4geyByZXR1cm4gdmFyaWFibGUubmFtZS50b0xvd2VyQ2FzZSgpID09PSBpLnRvTG93ZXJDYXNlKCkgfSlcbiAgICAgIGlmICh2ID09IG51bGwpIHJldHVyblxuICAgICAgcXVlc3Rpb24gPSBxdWVzdGlvbi5yZXBsYWNlKGA8JHtpfT5gLCB2LnZhbHVlKVxuICAgIH0pXG4gICAgbGV0IG1pc3NpbmdJdGVtcyA9IE1pbmRtYXBNYW5hZ2VyLmV4dHJhY3RRdWVzdGlvbkl0ZW1zKHF1ZXN0aW9uKVxuICAgIGlmIChtaXNzaW5nSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgQWxlcnRzLnNob3dFcnJvclRvYXN0KGBNaXNzaW5nIHZhcmlhYmxlczogJHttaXNzaW5nSXRlbXN9YClcbiAgICB9IGVsc2Uge1xuICAgICAgTWluZG1laXN0ZXJDbGllbnQuZG9BY3Rpb25zKHRoaXMuX21hcElkLFxuICAgICAgICBbe3RleHQ6IHF1ZXN0aW9uLCBwYXJlbnRJZDogaXNzdWUubm9kZUlkLCBzdHlsZTogUHJvbXB0U3R5bGVzLlF1ZXN0aW9uUHJvbXB0LCBpbWFnZTogSWNvbnNNYXAubWFnbmlmaWVyfV0sXG4gICAgICAgIFt7aWQ6IGlzc3VlLm5vZGVJZCwgaW1hZ2U6IEljb25zTWFwWyd0aWNrLWVuYWJsZWQnXX1dXG4gICAgICApLnRoZW4oKCkgPT4ge1xuICAgICAgICBBbGVydHMuY2xvc2VMb2FkaW5nV2luZG93KClcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uQ2xpY2tBbnN3ZXJTb2x1dGlvbk1hcHBpbmcgKHVpTm9kZSwgaXNzdWUpIHtcbiAgICBpZiAoaXNzdWUgaW5zdGFuY2VvZiBQcm9ibGVtIHx8IGlzc3VlIGluc3RhbmNlb2YgQ29uc2VxdWVuY2UpIHtcbiAgICAgIGxldCBxdWVzdGlvbiA9IFByb2Nlc3NRdWVzdGlvbnMuU09MVVRJT05fQU5BTFlTSVNcbiAgICAgIHF1ZXN0aW9uID0gcXVlc3Rpb24ucmVwbGFjZSgnPHByb2JsZW0+JywgaXNzdWUudGV4dClcbiAgICAgIGxldCBpdGVtcyA9IE1pbmRtYXBNYW5hZ2VyLmV4dHJhY3RRdWVzdGlvbkl0ZW1zKHF1ZXN0aW9uKVxuICAgICAgaXRlbXMuZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgICBsZXQgdiA9IHRoaXMuX3ZhcmlhYmxlcy5maW5kKCh2YXJpYWJsZSkgPT4geyByZXR1cm4gdmFyaWFibGUubmFtZS50b0xvd2VyQ2FzZSgpID09PSBpLnRvTG93ZXJDYXNlKCkgfSlcbiAgICAgICAgaWYgKHYgPT0gbnVsbCkgcmV0dXJuXG4gICAgICAgIHF1ZXN0aW9uID0gcXVlc3Rpb24ucmVwbGFjZShgPCR7aX0+YCwgdi52YWx1ZSlcbiAgICAgIH0pXG4gICAgICBsZXQgbWlzc2luZ0l0ZW1zID0gTWluZG1hcE1hbmFnZXIuZXh0cmFjdFF1ZXN0aW9uSXRlbXMocXVlc3Rpb24pXG4gICAgICBpZiAobWlzc2luZ0l0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgQWxlcnRzLnNob3dFcnJvclRvYXN0KGBNaXNzaW5nIHZhcmlhYmxlczogJHttaXNzaW5nSXRlbXN9YClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE1pbmRtZWlzdGVyQ2xpZW50LmRvQWN0aW9ucyh0aGlzLl9tYXBJZCxcbiAgICAgICAgICBbe3RleHQ6IHF1ZXN0aW9uLCBwYXJlbnRJZDogaXNzdWUubm9kZUlkLCBzdHlsZTogUHJvbXB0U3R5bGVzLlF1ZXN0aW9uUHJvbXB0LCBpbWFnZTogSWNvbnNNYXAubWFnbmlmaWVyfV0sXG4gICAgICAgICAgW3tpZDogaXNzdWUubm9kZUlkLCBpbWFnZTogSWNvbnNNYXBbJ3RpY2stZW5hYmxlZCddfV1cbiAgICAgICAgKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBBbGVydHMuY2xvc2VMb2FkaW5nV2luZG93KClcbiAgICAgICAgICAvLyBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNzdWUgaW5zdGFuY2VvZiBJbnRlcnZlbnRpb24pIHtcbiAgICAgIGxldCBxdWVzdGlvbjEgPSBQcm9jZXNzUXVlc3Rpb25zLlNPTFVUSU9OX0VGRkVDVElWRU5FU1NcbiAgICAgIGxldCBxdWVzdGlvbjIgPSBQcm9jZXNzUXVlc3Rpb25zLlNPTFVUSU9OX0ZFQVNJQklMSVRZXG4gICAgICBxdWVzdGlvbjEgPSBxdWVzdGlvbjEucmVwbGFjZSgnPHByb2JsZW0+JywgaXNzdWUuaXNzdWUudGV4dClcbiAgICAgIHF1ZXN0aW9uMSA9IHF1ZXN0aW9uMS5yZXBsYWNlKCc8aW50ZXJ2ZW50aW9uPicsIGlzc3VlLnRleHQpXG4gICAgICBxdWVzdGlvbjIgPSBxdWVzdGlvbjIucmVwbGFjZSgnPHByb2JsZW0+JywgaXNzdWUuaXNzdWUudGV4dClcbiAgICAgIHF1ZXN0aW9uMiA9IHF1ZXN0aW9uMi5yZXBsYWNlKCc8aW50ZXJ2ZW50aW9uPicsIGlzc3VlLnRleHQpXG5cbiAgICAgIGxldCBpdGVtcyA9IE1pbmRtYXBNYW5hZ2VyLmV4dHJhY3RRdWVzdGlvbkl0ZW1zKHF1ZXN0aW9uMSlcbiAgICAgIGl0ZW1zLmZvckVhY2goKGkpID0+IHtcbiAgICAgICAgbGV0IHYgPSB0aGlzLl92YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHsgcmV0dXJuIHZhcmlhYmxlLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gaS50b0xvd2VyQ2FzZSgpIH0pXG4gICAgICAgIGlmICh2ID09IG51bGwpIHJldHVyblxuICAgICAgICBxdWVzdGlvbjEgPSBxdWVzdGlvbjEucmVwbGFjZShgPCR7aX0+YCwgdi52YWx1ZSlcbiAgICAgIH0pXG4gICAgICBpdGVtcyA9IE1pbmRtYXBNYW5hZ2VyLmV4dHJhY3RRdWVzdGlvbkl0ZW1zKHF1ZXN0aW9uMilcbiAgICAgIGl0ZW1zLmZvckVhY2goKGkpID0+IHtcbiAgICAgICAgbGV0IHYgPSB0aGlzLl92YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHsgcmV0dXJuIHZhcmlhYmxlLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gaS50b0xvd2VyQ2FzZSgpIH0pXG4gICAgICAgIGlmICh2ID09IG51bGwpIHJldHVyblxuICAgICAgICBxdWVzdGlvbjIgPSBxdWVzdGlvbjIucmVwbGFjZShgPCR7aX0+YCwgdi52YWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIGxldCBtaXNzaW5nSXRlbXMgPSBNaW5kbWFwTWFuYWdlci5leHRyYWN0UXVlc3Rpb25JdGVtcyhxdWVzdGlvbjEpXG4gICAgICBsZXQgbWlzc2luZ0l0ZW1zMiA9IE1pbmRtYXBNYW5hZ2VyLmV4dHJhY3RRdWVzdGlvbkl0ZW1zKHF1ZXN0aW9uMilcbiAgICAgIGlmIChtaXNzaW5nSXRlbXMubGVuZ3RoID4gMCB8fCBtaXNzaW5nSXRlbXMyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgQWxlcnRzLnNob3dFcnJvclRvYXN0KGBNaXNzaW5nIHZhcmlhYmxlczogJHttaXNzaW5nSXRlbXN9YClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE1pbmRtZWlzdGVyQ2xpZW50LmRvQWN0aW9ucyh0aGlzLl9tYXBJZCxcbiAgICAgICAgICBbe3RleHQ6IHF1ZXN0aW9uMSwgcGFyZW50SWQ6IGlzc3VlLm5vZGVJZCwgc3R5bGU6IFByb21wdFN0eWxlcy5RdWVzdGlvblByb21wdCwgaW1hZ2U6IEljb25zTWFwLm1hZ25pZmllcn0sXG4gICAgICAgICAgICAgICAgICAgIHt0ZXh0OiBxdWVzdGlvbjIsIHBhcmVudElkOiBpc3N1ZS5ub2RlSWQsIHN0eWxlOiBQcm9tcHRTdHlsZXMuUXVlc3Rpb25Qcm9tcHQsIGltYWdlOiBJY29uc01hcC5tYWduaWZpZXJ9XSxcbiAgICAgICAgICBbe2lkOiBpc3N1ZS5ub2RlSWQsIGltYWdlOiBJY29uc01hcFsndGljay1lbmFibGVkJ119XVxuICAgICAgICApLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIEFsZXJ0cy5jbG9zZUxvYWRpbmdXaW5kb3coKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXRBbnN3ZXJOb2RlcyAoKSB7XG4gICAgLy8gZ3JlZW4gbm9kZXMgd2l0aCB0aWNrIChlaXRoZXIgZGlzYWJsZWQgb3IgZW5hYmxlZCkgaWNvblxuICAgIGxldCBhbnN3ZXJOb2Rlc0NvbG9yID0gVXRpbHMuaGV4VG9SZ2IoUHJvbXB0U3R5bGVzLkFuc3dlckl0ZW0uYmFja2dyb3VuZENvbG9yKVxuICAgIGxldCBxdWVzdGlvbk5vZGVzID0gTWluZG1hcFdyYXBwZXIuZ2V0Tm9kZXNCeVJHQkJhY2tncm91bmRDb2xvcihhbnN3ZXJOb2Rlc0NvbG9yKVxuICAgIHF1ZXN0aW9uTm9kZXMgPSBxdWVzdGlvbk5vZGVzLmZpbHRlcigobikgPT4geyByZXR1cm4gbi5lbW9qaUljb24gIT0gbnVsbCAmJiAobi5lbW9qaUljb24gPT09IEljb25zTWFwWyd0aWNrLWVuYWJsZWQnXS5taW5kbWVpc3Rlck5hbWUucmVwbGFjZSgvOi9nLCAnJykgfHwgbi5lbW9qaUljb24gPT09IEljb25zTWFwWyd0aWNrLWRpc2FibGVkJ10ubWluZG1laXN0ZXJOYW1lLnJlcGxhY2UoLzovZywgJycpKSB9KVxuICAgIHJldHVybiBxdWVzdGlvbk5vZGVzXG4gIH1cbiAgLyoqXG4gICAqIE1pbmQgbWFwIHBhcnNpbmdcbiAgICovXG4gIHBhcnNlVmFyaWFibGVzICgpIHtcbiAgICB0aGlzLl92YXJpYWJsZXMgPSBbXVxuICAgIGxldCBxdWVzdGlvbk1vZGVsTm9kZXMgPSB0aGlzLl9taW5kbWFwUGFyc2VyLmdldE5vZGVzV2l0aFRleHQoVGVtcGxhdGVOb2Rlcy5RVUVTVElPTl9NT0RFTClcbiAgICBpZiAocXVlc3Rpb25Nb2RlbE5vZGVzID09IG51bGwgfHwgcXVlc3Rpb25Nb2RlbE5vZGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC8vIHRvZG9cbiAgICBsZXQgcXVlc3Rpb25Nb2RlbE5vZGUgPSBxdWVzdGlvbk1vZGVsTm9kZXNbMF1cbiAgICBsZXQgdmFyaWFibGVzTm9kZXMgPSBxdWVzdGlvbk1vZGVsTm9kZS5nZXRDaGlsZHJlbldpdGhUZXh0KFRlbXBsYXRlTm9kZXMuVkFSSUFCTEVTKVxuICAgIGlmICh2YXJpYWJsZXNOb2RlcyA9PSBudWxsIHx8IHZhcmlhYmxlc05vZGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC8vIHRvZG9cbiAgICBsZXQgdmFyaWFibGVOb2RlID0gdmFyaWFibGVzTm9kZXNbMF1cbiAgICBsZXQgZGVmaW5lZFZhcmlhYmxlcyA9IHZhcmlhYmxlTm9kZS5jaGlsZHJlblxuICAgIGxldCB2YXJpYWJsZXMgPSBbXVxuICAgIGRlZmluZWRWYXJpYWJsZXMuZm9yRWFjaCgodikgPT4ge1xuICAgICAgbGV0IHZhcmlhYmxlTmFtZSA9IHYudGV4dFxuICAgICAgbGV0IHZhcmlhYmxlQ2hpbGRyZW4gPSB2LmNoaWxkcmVuXG4gICAgICBpZiAodmFyaWFibGVDaGlsZHJlbiA9PSBudWxsIHx8IHZhcmlhYmxlQ2hpbGRyZW4ubGVuZ3RoID09PSAwKSByZXR1cm5cbiAgICAgIGxldCBmaXJzdENoaWxkID0gdmFyaWFibGVDaGlsZHJlblswXVxuICAgICAgdmFyaWFibGVzLnB1c2goe25hbWU6IHZhcmlhYmxlTmFtZSwgdmFsdWU6IGZpcnN0Q2hpbGQudGV4dH0pXG4gICAgfSlcbiAgICB0aGlzLl92YXJpYWJsZXMgPSB2YXJpYWJsZXNcbiAgfVxuICBwYXJzZVN0eWxlICgpIHtcbiAgICB0aGlzLl9zdHlsZSA9IG51bGxcbiAgICBsZXQgcXVlc3Rpb25Nb2RlbE5vZGVzID0gdGhpcy5fbWluZG1hcFBhcnNlci5nZXROb2Rlc1dpdGhUZXh0KFRlbXBsYXRlTm9kZXMuUVVFU1RJT05fTU9ERUwpXG4gICAgaWYgKHF1ZXN0aW9uTW9kZWxOb2RlcyA9PSBudWxsIHx8IHF1ZXN0aW9uTW9kZWxOb2Rlcy5sZW5ndGggPT09IDApIHJldHVybiAvLyB0b2RvXG4gICAgbGV0IHF1ZXN0aW9uTW9kZWxOb2RlID0gcXVlc3Rpb25Nb2RlbE5vZGVzWzBdXG4gICAgbGV0IHN0eWxlTm9kZXMgPSBxdWVzdGlvbk1vZGVsTm9kZS5nZXRDaGlsZHJlbldpdGhUZXh0KFRlbXBsYXRlTm9kZXMuU1RZTEUpXG4gICAgaWYgKHN0eWxlTm9kZXMgPT0gbnVsbCB8fCBzdHlsZU5vZGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC8vIHRvZG9cbiAgICBsZXQgc3R5bGVOb2RlID0gc3R5bGVOb2Rlc1swXVxuICAgIGxldCBzdHlsZU5vZGVDaGlsZHJlbiA9IHN0eWxlTm9kZS5jaGlsZHJlblxuICAgIGlmIChzdHlsZU5vZGVDaGlsZHJlbiA9PSBudWxsIHx8IHN0eWxlTm9kZUNoaWxkcmVuLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC8vIHRvZG9cbiAgICB0aGlzLl9zdHlsZSA9IHN0eWxlTm9kZUNoaWxkcmVuWzBdLnRleHRcbiAgfVxuICBwYXJzZVNjb3BpbmdBbmFseXNpcyAoKSB7XG4gICAgdGhpcy5wYXJzZUZpcnN0TGV2ZWxQcm9ibGVtcygpXG4gIH1cbiAgcGFyc2VGaXJzdExldmVsUHJvYmxlbXMgKCkge1xuICAgIGxldCB0aGF0ID0gdGhpc1xuICAgIGxldCBzY29waW5nQW5hbHlzaXNOb2RlcyA9IHRoaXMuX21pbmRtYXBQYXJzZXIuZ2V0Tm9kZXNXaXRoVGV4dChUZW1wbGF0ZU5vZGVzLlNDT1BJTkdfQU5BTFlTSVMpXG4gICAgaWYgKHNjb3BpbmdBbmFseXNpc05vZGVzID09IG51bGwgfHwgc2NvcGluZ0FuYWx5c2lzTm9kZXMubGVuZ3RoID09PSAwKSByZXR1cm4gLy8gdG9kb1xuICAgIGxldCBzY29waW5nQW5hbHlzaXNOb2RlID0gc2NvcGluZ0FuYWx5c2lzTm9kZXNbMF1cbiAgICBsZXQgc2NvcGluZ0FuYWx5c2lzTm9kZUNoaWxkcmVuID0gc2NvcGluZ0FuYWx5c2lzTm9kZS5jaGlsZHJlblxuICAgIGxldCBwcm9ibGVtUHJvbXB0UkUgPSBNaW5kbWFwTWFuYWdlci5jcmVhdGVSZWdleHBGcm9tUHJvbXB0KFByb2Nlc3NRdWVzdGlvbnMuUFJPQkxFTV9TVEFURU1FTlQpXG4gICAgbGV0IHByb2JsZW1zID0gW11cbiAgICBzY29waW5nQW5hbHlzaXNOb2RlQ2hpbGRyZW4uZm9yRWFjaCgoYykgPT4ge1xuICAgICAgaWYgKHByb2JsZW1Qcm9tcHRSRS50ZXN0KGMudGV4dCkpIHtcbiAgICAgICAgYy5jaGlsZHJlbi5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAgICAgbGV0IHBybyA9IG5ldyBQcm9ibGVtKHAudGV4dCwgcC5pZClcbiAgICAgICAgICBwcm9ibGVtcy5wdXNoKHBybylcbiAgICAgICAgICB0aGF0LnBhcnNlUHJvYmxlbShwcm8pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLl9zY29waW5nQW5hbHlzaXMgPSBwcm9ibGVtc1xuICB9XG4gIHBhcnNlUHJvYmxlbSAocHJvYmxlbSkge1xuICAgIGxldCB0aGF0ID0gdGhpc1xuICAgIGxldCBub2RlID0gdGhpcy5fbWluZG1hcFBhcnNlci5nZXROb2RlQnlJZChwcm9ibGVtLm5vZGVJZClcbiAgICBpZiAobm9kZSA9PSBudWxsKSByZXR1cm5cbiAgICBsZXQgcHJvYmxlbU5vZGVDaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW5cbiAgICBsZXQgc3VicHJvYmxlbXNQcm9tcHRSRSA9IE1pbmRtYXBNYW5hZ2VyLmNyZWF0ZVJlZ2V4cEZyb21Qcm9tcHQoUHJvY2Vzc1F1ZXN0aW9ucy5QUk9CTEVNX0FOQUxZU0lTKVxuICAgIHByb2JsZW1Ob2RlQ2hpbGRyZW4uZm9yRWFjaCgoYykgPT4ge1xuICAgICAgaWYgKHN1YnByb2JsZW1zUHJvbXB0UkUudGVzdChjLnRleHQpKSB7XG4gICAgICAgIGMuY2hpbGRyZW4uZm9yRWFjaCgocCkgPT4ge1xuICAgICAgICAgIGxldCBzdWJQID0gbmV3IFByb2JsZW0ocC50ZXh0LCBwLmlkLCBwcm9ibGVtKVxuICAgICAgICAgIHByb2JsZW0uYWRkU3VicHJvYmxlbShzdWJQKVxuICAgICAgICAgIHRoYXQucGFyc2VQcm9ibGVtKHN1YlApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgICBsZXQgY29uc2VxdWVuY2VzUHJvbXB0UkUgPSBNaW5kbWFwTWFuYWdlci5jcmVhdGVSZWdleHBGcm9tUHJvbXB0KFByb2Nlc3NRdWVzdGlvbnMuUkVMRVZBTkNFX01BUFBJTkcpXG4gICAgcHJvYmxlbU5vZGVDaGlsZHJlbi5mb3JFYWNoKChjKSA9PiB7XG4gICAgICBpZiAoY29uc2VxdWVuY2VzUHJvbXB0UkUudGVzdChjLnRleHQpKSB7XG4gICAgICAgIGMuY2hpbGRyZW4uZm9yRWFjaCgocCkgPT4ge1xuICAgICAgICAgIGxldCBjb25zID0gbmV3IENvbnNlcXVlbmNlKHAudGV4dCwgcC5pZCwgcHJvYmxlbSlcbiAgICAgICAgICBwcm9ibGVtLmFkZENvbnNlcXVlbmNlKGNvbnMpXG4gICAgICAgICAgdGhhdC5wYXJzZUNvbnNlcXVlbmNlKGNvbnMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgICBsZXQgaW50ZXJ2ZW50aW9uc1Byb21wdFJFID0gTWluZG1hcE1hbmFnZXIuY3JlYXRlUmVnZXhwRnJvbVByb21wdChQcm9jZXNzUXVlc3Rpb25zLlNPTFVUSU9OX0FOQUxZU0lTKVxuICAgIHByb2JsZW1Ob2RlQ2hpbGRyZW4uZm9yRWFjaCgoYykgPT4ge1xuICAgICAgaWYgKGludGVydmVudGlvbnNQcm9tcHRSRS50ZXN0KGMudGV4dCkpIHtcbiAgICAgICAgYy5jaGlsZHJlbi5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAgICAgbGV0IGludCA9IG5ldyBJbnRlcnZlbnRpb24ocC50ZXh0LCBwLmlkLCBwcm9ibGVtKVxuICAgICAgICAgIHByb2JsZW0uYWRkSW50ZXJ2ZW50aW9uKGludClcbiAgICAgICAgICB0aGF0LnBhcnNlSW50ZXJ2ZW50aW9uKGludClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHBhcnNlQ29uc2VxdWVuY2UgKGNvbnNlcXVlbmNlKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzXG4gICAgbGV0IG5vZGUgPSB0aGlzLl9taW5kbWFwUGFyc2VyLmdldE5vZGVCeUlkKGNvbnNlcXVlbmNlLm5vZGVJZClcbiAgICBpZiAobm9kZSA9PSBudWxsKSByZXR1cm5cbiAgICBsZXQgY29uc2VxdWVuY2VOb2RlQ2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuXG4gICAgbGV0IGludGVydmVudGlvbnNQcm9tcHRSRSA9IE1pbmRtYXBNYW5hZ2VyLmNyZWF0ZVJlZ2V4cEZyb21Qcm9tcHQoUHJvY2Vzc1F1ZXN0aW9ucy5TT0xVVElPTl9BTkFMWVNJUylcbiAgICBjb25zZXF1ZW5jZU5vZGVDaGlsZHJlbi5mb3JFYWNoKChjKSA9PiB7XG4gICAgICBpZiAoaW50ZXJ2ZW50aW9uc1Byb21wdFJFLnRlc3QoYy50ZXh0KSkge1xuICAgICAgICBjLmNoaWxkcmVuLmZvckVhY2goKHApID0+IHtcbiAgICAgICAgICBsZXQgaW50ID0gbmV3IEludGVydmVudGlvbihwLnRleHQsIHAuaWQsIGNvbnNlcXVlbmNlKVxuICAgICAgICAgIGNvbnNlcXVlbmNlLmFkZEludGVydmVudGlvbihpbnQpXG4gICAgICAgICAgdGhhdC5wYXJzZUludGVydmVudGlvbihpbnQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBwYXJzZUludGVydmVudGlvbiAoaW50ZXJ2ZW50aW9uKSB7XG4gICAgbGV0IG5vZGUgPSB0aGlzLl9taW5kbWFwUGFyc2VyLmdldE5vZGVCeUlkKGludGVydmVudGlvbi5ub2RlSWQpXG4gICAgaWYgKG5vZGUgPT0gbnVsbCkgcmV0dXJuXG4gICAgbGV0IGludGVydmVudGlvbk5vZGVDaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW5cbiAgICBsZXQgZmVhc2liaWxpdHlSZWFzb25zUHJvbXB0UkUgPSBNaW5kbWFwTWFuYWdlci5jcmVhdGVSZWdleHBGcm9tUHJvbXB0KFByb2Nlc3NRdWVzdGlvbnMuU09MVVRJT05fRkVBU0lCSUxJVFkpXG4gICAgaW50ZXJ2ZW50aW9uTm9kZUNoaWxkcmVuLmZvckVhY2goKGMpID0+IHtcbiAgICAgIGlmIChmZWFzaWJpbGl0eVJlYXNvbnNQcm9tcHRSRS50ZXN0KGMudGV4dCkpIHtcbiAgICAgICAgYy5jaGlsZHJlbi5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAgICAgaW50ZXJ2ZW50aW9uLmFkZEZlYXNpYmlsaXR5UmVhc29uKHAudGV4dClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIGxldCBlZmZlY3RpdmVuZXNzUmVhc29uc1Byb21wdFJFID0gTWluZG1hcE1hbmFnZXIuY3JlYXRlUmVnZXhwRnJvbVByb21wdChQcm9jZXNzUXVlc3Rpb25zLlNPTFVUSU9OX0VGRkVDVElWRU5FU1MpXG4gICAgaW50ZXJ2ZW50aW9uTm9kZUNoaWxkcmVuLmZvckVhY2goKGMpID0+IHtcbiAgICAgIGlmIChlZmZlY3RpdmVuZXNzUmVhc29uc1Byb21wdFJFLnRlc3QoYy50ZXh0KSkge1xuICAgICAgICBjLmNoaWxkcmVuLmZvckVhY2goKHApID0+IHtcbiAgICAgICAgICBpbnRlcnZlbnRpb24uYWRkRWZmZWN0aXZlbmVzc1JlYXNvbihwLnRleHQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBwYXJzZVByb2Nlc3NNb2RlICgpIHtcbiAgICB0aGlzLl9wcm9jZXNzTW9kZXMuZm9yRWFjaCgobSkgPT4ge1xuICAgICAgaWYgKG0ubWluZG1hcE5vZGUgPT0gbnVsbCkgcmV0dXJuXG4gICAgICBsZXQgaWNvbiA9IG0ubWluZG1hcE5vZGUuZW1vamlJY29uXG4gICAgICBpZiAoaWNvbiA9PT0gSWNvbnNNYXBbJ3RpY2stZW5hYmxlZCddLm1pbmRtZWlzdGVyTmFtZS5yZXBsYWNlKC86L2csJycpKSBtLmVuYWJsZWQgPSB0cnVlXG4gICAgICBlbHNlIG0uZW5hYmxlZCA9IGZhbHNlXG4gICAgfSlcbiAgfVxuICBwYXJzZU1hcCAoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIE1pbmRtZWlzdGVyQ2xpZW50LmdldE1hcCh0aGF0Ll9tYXBJZCkudGhlbigobWFwSW5mbykgPT4ge1xuICAgICAgICB0aGF0Ll9taW5kbWFwUGFyc2VyID0gbmV3IE1pbmRtYXBDb250ZW50UGFyc2VyKG1hcEluZm8pXG4gICAgICAgIHRoYXQucGFyc2VQcm9jZXNzTW9kZSgpXG4gICAgICAgIHRoYXQucGFyc2VWYXJpYWJsZXMoKVxuICAgICAgICB0aGF0LnBhcnNlU3R5bGUoKVxuICAgICAgICB0aGF0LnBhcnNlU2NvcGluZ0FuYWx5c2lzKClcbiAgICAgICAgcmVzb2x2ZSgpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgLyoqXG4gICAqIE90aGVyIGZ1bmN0aW9uc1xuICAgKi9cbiAgc3RhdGljIGV4dHJhY3RRdWVzdGlvbkl0ZW1zIChxdWVzdGlvbikge1xuICAgIGxldCBpdGVtcyA9IHF1ZXN0aW9uLm1hdGNoKC88W14+XSs+L2cpXG4gICAgaWYgKGl0ZW1zID09IG51bGwpIHJldHVybiBbXVxuICAgIHJldHVybiBpdGVtcy5tYXAoKGl0KSA9PiBpdC5yZXBsYWNlKC88L2csICcnKS5yZXBsYWNlKC8+L2csICcnKS50cmltKCkpXG4gIH1cbiAgc3RhdGljIGNyZWF0ZVJlZ2V4cEZyb21Qcm9tcHQgKHRleHQpIHtcbiAgICBsZXQgcXVlc3Rpb25Qcm9tcHQgPSB0ZXh0LnJlcGxhY2UoLzxbXj5dKz4vZywgJy4rJykucmVwbGFjZSgvXFw/L2csICdcXD8nKVxuICAgIGxldCBwcm9tcHRSZWdFeHAgPSBuZXcgUmVnRXhwKHF1ZXN0aW9uUHJvbXB0LCAnZ2knKVxuICAgIHJldHVybiBwcm9tcHRSZWdFeHBcbiAgfVxuICBmaW5kSXNzdWUgKHRleHQsIG5vZGVJZCkge1xuICAgIGxldCBpZCA9IG5vZGVJZCA+IDAgPyBub2RlSWQgOiBudWxsXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9zY29waW5nQW5hbHlzaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBpc3N1ZSA9IHRoaXMuX3Njb3BpbmdBbmFseXNpc1tpXS5maW5kSXNzdWUodGV4dCwgaWQpXG4gICAgICBpZiAoaXNzdWUgIT0gbnVsbCkgcmV0dXJuIGlzc3VlXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNaW5kbWFwTWFuYWdlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3NjcmlwdHMvY2hhdGluL01pbmRtYXBNYW5hZ2VyLmpzIiwiXG5jb25zdCBMb2NhdG9ycyA9IHJlcXVpcmUoJy4vTG9jYXRvcnMnKVxuXG5jbGFzcyBNaW5kbWFwV3JhcHBlciB7XG4gIHN0YXRpYyBnZXROb2RlQnlJZCAoaWQpIHtcbiAgICBsZXQgbG9jYXRvciA9IExvY2F0b3JzLk1JTkRNQVBfTk9ERV9CWV9JRC5yZXBsYWNlKCckMScsIGBcIiR7aWR9XCJgKVxuICAgIGxldCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobG9jYXRvcilcbiAgICBpZiAoZWwgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICByZXR1cm4gbmV3IE1pbmRtYXBOb2RlKGVsKVxuICB9XG5cbiAgc3RhdGljIGdldE5vZGVzQnlUZXh0ICh0ZXh0KSB7XG4gICAgbGV0IGxvY2F0b3IgPSBMb2NhdG9ycy5NSU5ETUFQX05PREVTXG4gICAgbGV0IGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwobG9jYXRvcilcbiAgICBsZXQgbm9kZXMgPSBbXVxuICAgIGVscy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgbGV0IG5vZGUgPSBuZXcgTWluZG1hcE5vZGUoZWwpXG4gICAgICBpZiAodGV4dCA9PT0gbm9kZS50ZXh0KSBub2Rlcy5wdXNoKG5vZGUpXG4gICAgfSlcbiAgICByZXR1cm4gbm9kZXNcbiAgfVxuXG4gIHN0YXRpYyBnZXROb2Rlc0J5VGV4dFJlZ2V4cCAocmVnZXhwKSB7XG4gICAgbGV0IGxvY2F0b3IgPSBMb2NhdG9ycy5NSU5ETUFQX05PREVTXG4gICAgbGV0IGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwobG9jYXRvcilcbiAgICBsZXQgbm9kZXMgPSBbXVxuICAgIGVscy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgbGV0IG5vZGUgPSBuZXcgTWluZG1hcE5vZGUoZWwpXG4gICAgICBpZiAocmVnZXhwLnRlc3Qobm9kZS50ZXh0KSkgbm9kZXMucHVzaChub2RlKVxuICAgIH0pXG4gICAgcmV0dXJuIG5vZGVzXG4gIH1cblxuICBzdGF0aWMgZ2V0Tm9kZXNCeVJHQkJhY2tncm91bmRDb2xvciAoY29sb3IpIHtcbiAgICAvLyB0b2RvXG4gICAgbGV0IGNvbG9yU3RyaW5nID0gYHJnYigke2NvbG9yLnJ9LCAke2NvbG9yLmd9LCAke2NvbG9yLmJ9KWBcbiAgICBsZXQgbG9jYXRvciA9IExvY2F0b3JzLk1JTkRNQVBfTk9ERVNcbiAgICBsZXQgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChsb2NhdG9yKVxuICAgIGxldCBub2RlcyA9IFtdXG4gICAgZWxzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBsZXQgbm9kZSA9IG5ldyBNaW5kbWFwTm9kZShlbClcbiAgICAgIGlmIChub2RlLmJhY2tncm91bmRDb2xvciA9PSBudWxsKSByZXR1cm5cbiAgICAgIGlmIChub2RlLmJhY2tncm91bmRDb2xvci50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccy9nLCAnJykudHJpbSgpID09PSBjb2xvclN0cmluZy50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccy9nLCAnJykudHJpbSgpKSBub2Rlcy5wdXNoKG5vZGUpXG4gICAgfSlcbiAgICByZXR1cm4gbm9kZXNcbiAgfVxufVxuXG5jbGFzcyBNaW5kbWFwTm9kZSB7XG4gIGNvbnN0cnVjdG9yIChlbCkge1xuICAgIHRoaXMuX2RvbUVsZW1lbnQgPSBlbFxuICB9XG5cbiAgZ2V0IHRleHQgKCkge1xuICAgIHJldHVybiB0aGlzLl9kb21FbGVtZW50LmlubmVyVGV4dC5yZXBsYWNlKC9cXG4vZywgJyAnKS50cmltKClcbiAgfVxuICBnZXQgaWQgKCkge1xuICAgIHJldHVybiB0aGlzLl9kb21FbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXG4gIH1cbiAgZ2V0IGVtb2ppSWNvbiAoKSB7XG4gICAgbGV0IGxvY2F0b3IgPSBMb2NhdG9ycy5NSU5ETUFQX05PREVfSUNPTl9FTU9KSVxuICAgIGxldCBpY29uID0gdGhpcy5fZG9tRWxlbWVudC5xdWVyeVNlbGVjdG9yKGxvY2F0b3IpXG4gICAgaWYgKGljb24gPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBsZXQgZW1vamkgPSBpY29uLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgaWYgKGVtb2ppID09IG51bGwpIHJldHVybiBudWxsXG4gICAgbGV0IHBhcnRzID0gZW1vamkuc3BsaXQoJywnKVxuICAgIGlmIChwYXJ0cy5sZW5ndGggPCAyKSByZXR1cm4gbnVsbFxuICAgIHJldHVybiBwYXJ0c1sxXS50cmltKClcbiAgfVxuXG4gIGdldCBlbGVtZW50ICgpIHtcbiAgICByZXR1cm4gdGhpcy5fZG9tRWxlbWVudFxuICB9XG4gIGdldEljb25FbGVtZW50ICgpIHtcbiAgICBsZXQgbG9jYXRvciA9IExvY2F0b3JzLk1JTkRNQVBfTk9ERV9JQ09OXG4gICAgbGV0IGljb24gPSB0aGlzLl9kb21FbGVtZW50LnF1ZXJ5U2VsZWN0b3IobG9jYXRvcilcbiAgICByZXR1cm4gaWNvblxuICB9XG5cbiAgZ2V0IGJhY2tncm91bmRDb2xvciAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RvbUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yIHx8IG51bGxcbiAgfVxuXG4gIGdldCBjaGlsZHJlbiAoKSB7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNaW5kbWFwV3JhcHBlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3NjcmlwdHMvbWluZG1laXN0ZXIvd3JhcHBlci9NaW5kbWFwV3JhcHBlci5qcyIsIlxuY29uc3QgVGVtcGxhdGVOb2RlcyA9IHtcbiAgJ1ZBUklBQkxFUyc6ICdWQVJJQUJMRVMnLFxuICAnU1RZTEUnOiAnU1RZTEUnLFxuICAnUVVFU1RJT05fTU9ERUwnOiAnUVVFU1RJT04gTU9ERUwnLFxuICAnUFJPQ0VTU19NT0RFJzogJ1BST0NFU1MgTU9ERScsXG4gICdTQ09QSU5HX0FOQUxZU0lTJzogJ1NDT1BJTkcgQU5BTFlTSVMnLFxuICAnUFJPQkxFTV9ERUVQRU5fTU9ERSc6ICdQUk9CTEVNIERFRVBFTicsXG4gICdSRUxFVkFOQ0VfTUFQUElOR19NT0RFJzogJ1JFTEVWQU5DRSBNQVBQSU5HJyxcbiAgJ1NPTFVUSU9OX01BUFBJTkdfTU9ERSc6ICdTT0xVVElPTiBNQVBQSU5HJ1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlbXBsYXRlTm9kZXNcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9zY3JpcHRzL2NoYXRpbi9UZW1wbGF0ZU5vZGVzLmpzIiwiXG5jbGFzcyBNaW5kbWFwQ29udGVudFBhcnNlciB7XG4gIGNvbnN0cnVjdG9yIChtYXBJbmZvKSB7XG4gICAgdGhpcy5fbWFwSW5mbyA9IG1hcEluZm9cbiAgfVxuICBnZXROb2RlQnlJZCAobm9kZUlkKSB7XG4gICAgbGV0IG5vZGVFbCA9IHRoaXMuX21hcEluZm8uaWRlYXMuaWRlYS5maW5kKChpKSA9PiB7XG4gICAgICByZXR1cm4gaS5pZCA9PT0gbm9kZUlkXG4gICAgfSlcbiAgICBpZiAobm9kZUVsID09IG51bGwpIHJldHVybiBudWxsXG4gICAgZWxzZSByZXR1cm4gbmV3IE1pbmRtYXBDb250ZW50UGFyc2VyTm9kZShub2RlRWwsIHRoaXMpXG4gIH1cblxuICBnZXROb2Rlc1dpdGhUZXh0ICh0ZXh0KSB7XG4gICAgbGV0IG5vZGVFbHMgPSB0aGlzLl9tYXBJbmZvLmlkZWFzLmlkZWEuZmlsdGVyKChpKSA9PiB7XG4gICAgICByZXR1cm4gaS50aXRsZSA9PT0gdGV4dFxuICAgIH0pXG4gICAgaWYgKG5vZGVFbHMgPT0gbnVsbCkgcmV0dXJuIFtdXG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gbm9kZUVscy5tYXAoKG4pID0+IHsgcmV0dXJuIG5ldyBNaW5kbWFwQ29udGVudFBhcnNlck5vZGUobiwgdGhpcykgfSlcbiAgICB9XG4gIH1cblxuICBnZXROb2RlQ2hpbGRyZW4gKHBhcmVudElkKXtcbiAgICBsZXQgbm9kZUVscyA9IHRoaXMuX21hcEluZm8uaWRlYXMuaWRlYS5maWx0ZXIoKGkpID0+IHtcbiAgICAgIHJldHVybiBpLnBhcmVudCA9PT0gcGFyZW50SWRcbiAgICB9KVxuICAgIGlmIChub2RlRWxzID09IG51bGwpIHJldHVybiBbXVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIG5vZGVFbHMubWFwKChuKSA9PiB7IHJldHVybiBuZXcgTWluZG1hcENvbnRlbnRQYXJzZXJOb2RlKG4sIHRoaXMpfSlcbiAgICB9XG4gIH1cblxuICBnZXROb2RlQ2hpbGRyZW5XaXRoVGV4dCAocGFyZW50SWQsIHRleHQpIHtcbiAgICBsZXQgbm9kZUVscyA9IHRoaXMuX21hcEluZm8uaWRlYXMuaWRlYS5maWx0ZXIoKGkpID0+IHtcbiAgICAgIHJldHVybiBpLnBhcmVudCA9PT0gcGFyZW50SWQgJiYgaS50aXRsZSA9PT0gdGV4dFxuICAgIH0pXG4gICAgaWYgKG5vZGVFbHMgPT0gbnVsbCkgcmV0dXJuIFtdXG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gbm9kZUVscy5tYXAoKG4pID0+IHsgcmV0dXJuIG5ldyBNaW5kbWFwQ29udGVudFBhcnNlck5vZGUobiwgdGhpcyl9KVxuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBNaW5kbWFwQ29udGVudFBhcnNlck5vZGUge1xuICBjb25zdHJ1Y3RvciAoaW5mbywgcGFyc2VyKSB7XG4gICAgdGhpcy5faW5mbyA9IGluZm9cbiAgICB0aGlzLl9wYXJzZXIgPSBwYXJzZXJcbiAgfVxuXG4gIGdldCBpZCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luZm8uaWRcbiAgfVxuXG4gIGdldCB0ZXh0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5mby50aXRsZS5yZXBsYWNlKC9cXG4vZywgJyAnKS50cmltKClcbiAgfVxuXG4gIGdldCBjaGlsZHJlbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcnNlci5nZXROb2RlQ2hpbGRyZW4odGhpcy5pZClcbiAgfVxuXG4gIGdldENoaWxkcmVuV2l0aFRleHQgKHRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyc2VyLmdldE5vZGVDaGlsZHJlbldpdGhUZXh0KHRoaXMuaWQsIHRleHQpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNaW5kbWFwQ29udGVudFBhcnNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3NjcmlwdHMvbWluZG1laXN0ZXIvd3JhcHBlci9NaW5kbWFwQ29udGVudFBhcnNlci5qcyIsIlxuY29uc3QgUHJvY2Vzc1F1ZXN0aW9ucyA9IHtcbiAgJ1BST0JMRU1fU1RBVEVNRU5UJzogJ1dISUNIIFBST0JMRU1TIE1BWSBBUklTRSBEVVJJTkcgPHRhc2s+IElOIDxwcmFjdGljZT4gU0VUVElORz8nLFxuICAnUFJPQkxFTV9BTkFMWVNJUyc6ICdXSFkgRE9FUyA8cHJvYmxlbT4gT0NDVVIgRFVSSU5HIDx0YXNrPiBJTiA8cHJhY3RpY2U+PycsXG4gICdSRUxFVkFOQ0VfTUFQUElORyc6ICdXSFkgSVMgPHByb2JsZW0+IFJFTEVWQU5UIEZPUiA8dGFzaz4gSU4gPHByYWN0aWNlPiBTRVRUSU5HPycsXG4gICdTT0xVVElPTl9BTkFMWVNJUyc6ICdIT1cgQ0FOIDxwcm9ibGVtPiBCRSBBRERSRVNTRUQgRk9SIDx0YXNrPiBJTiA8cHJhY3RpY2U+IFNFVFRJTkc/JyxcbiAgJ1NPTFVUSU9OX0VGRkVDVElWRU5FU1MnOiAnSE9XIENBTiA8aW50ZXJ2ZW50aW9uPiBIRUxQIFRPIDxwcm9ibGVtPiBGT1IgPHRhc2s+IElOIDxwcmFjdGljZT4gU0VUVElORz8nLFxuICAnU09MVVRJT05fRkVBU0lCSUxJVFknOiAnSE9XIENBTiA8aW50ZXJ2ZW50aW9uPiBCRSBJTVBMRU1FTlRFRCBUTyA8cHJvYmxlbT4gRk9SIDx0YXNrPiBJTiA8cHJhY3RpY2U+IFNFVFRJTkc/J1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2Nlc3NRdWVzdGlvbnNcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9zY3JpcHRzL2NoYXRpbi9Qcm9jZXNzUXVlc3Rpb25zLmpzIiwiXG5jbGFzcyBDb25zZXF1ZW5jZSB7XG4gIGNvbnN0cnVjdG9yICh0ZXh0LCBub2RlSWQsIHByb2JsZW0gPSBudWxsKSB7XG4gICAgdGhpcy5fdGV4dCA9IHRleHRcbiAgICB0aGlzLl9pbnRlcnZlbnRpb25zID0gW11cbiAgICB0aGlzLl9ub2RlSWQgPSBub2RlSWRcbiAgICB0aGlzLl9wcm9ibGVtID0gcHJvYmxlbVxuICB9XG5cbiAgZ2V0IHRleHQgKCkge1xuICAgIHJldHVybiB0aGlzLl90ZXh0XG4gIH1cblxuICBnZXQgcHJvYmxlbSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2JsZW1cbiAgfVxuXG4gIGdldCBub2RlSWQgKCkge1xuICAgIHJldHVybiB0aGlzLl9ub2RlSWRcbiAgfVxuICBnZXQgaW50ZXJ2ZW50aW9ucyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVydmVudGlvbnNcbiAgfVxuXG4gIGFkZEludGVydmVudGlvbiAoaW50ZXJ2ZW50aW9uKSB7XG4gICAgdGhpcy5faW50ZXJ2ZW50aW9ucy5wdXNoKGludGVydmVudGlvbilcbiAgfVxuICBmaW5kSXNzdWUgKHRleHQsIG5vZGVJZCA9IG51bGwpIHtcbiAgICBpZiAobm9kZUlkICE9IG51bGwgJiYgdGhpcy5fbm9kZUlkID09PSBub2RlSWQpIHJldHVybiB0aGlzXG4gICAgZWxzZSBpZiAodGhpcy5fdGV4dCA9PT0gdGV4dCkgcmV0dXJuIHRoaXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2ludGVydmVudGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBpc3N1ZSA9IHRoaXMuX2ludGVydmVudGlvbnNbaV0uZmluZElzc3VlKHRleHQsIG5vZGVJZClcbiAgICAgIGlmIChpc3N1ZSAhPSBudWxsKSByZXR1cm4gaXNzdWVcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnNlcXVlbmNlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc2NyaXB0cy9jaGF0aW4vbW9kZWwvQ29uc2VxdWVuY2UuanMiLCJcbmNsYXNzIEludGVydmVudGlvbiB7XG4gIGNvbnN0cnVjdG9yICh0ZXh0LCBub2RlSWQsIGlzc3VlID0gbnVsbCkge1xuICAgIHRoaXMuX3RleHQgPSB0ZXh0XG4gICAgdGhpcy5fZWZmZWN0aXZlbmVzc1JlYXNvbnMgPSBbXVxuICAgIHRoaXMuX2ZlYXNpYmlsaXR5UmVhc29ucyA9IFtdXG4gICAgdGhpcy5fbm9kZUlkID0gbm9kZUlkXG4gICAgdGhpcy5faXNzdWUgPSBpc3N1ZVxuICB9XG5cbiAgZ2V0IHRleHQgKCkge1xuICAgIHJldHVybiB0aGlzLl90ZXh0XG4gIH1cblxuICBnZXQgaXNzdWUgKCkge1xuICAgIHJldHVybiB0aGlzLl9pc3N1ZVxuICB9XG5cbiAgZ2V0IG5vZGVJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbm9kZUlkXG4gIH1cbiAgYWRkRWZmZWN0aXZlbmVzc1JlYXNvbihyZWFzb24pIHtcbiAgICB0aGlzLl9lZmZlY3RpdmVuZXNzUmVhc29ucy5wdXNoKHJlYXNvbilcbiAgfVxuXG4gIGFkZEZlYXNpYmlsaXR5UmVhc29uKHJlYXNvbikge1xuICAgIHRoaXMuX2ZlYXNpYmlsaXR5UmVhc29ucy5wdXNoKHJlYXNvbilcbiAgfVxuXG4gIGdldCBlZmZlY3RpdmVuZXNzUmVhc29ucyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VmZmVjdGl2ZW5lc3NSZWFzb25zXG4gIH1cblxuICBnZXQgZmVhc2liaWxpdHlSZWFzb25zICgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmVhc2liaWxpdHlSZWFzb25zXG4gIH1cblxuICBmaW5kSXNzdWUgKHRleHQsIG5vZGVJZCA9IG51bGwpIHtcbiAgICBpZiAobm9kZUlkICE9IG51bGwgJiYgdGhpcy5fbm9kZUlkID09PSBub2RlSWQpIHJldHVybiB0aGlzXG4gICAgZWxzZSBpZiAodGhpcy5fdGV4dCA9PT0gdGV4dCkgcmV0dXJuIHRoaXNcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJ2ZW50aW9uXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc2NyaXB0cy9jaGF0aW4vbW9kZWwvSW50ZXJ2ZW50aW9uLmpzIiwiXG5jbGFzcyBQcm9ibGVtIHtcbiAgY29uc3RydWN0b3IgKHRleHQsIG5vZGVJZCwgcGFyZW50UHJvYmxlbSA9IG51bGwpIHtcbiAgICB0aGlzLl90ZXh0ID0gdGV4dFxuICAgIHRoaXMuX3N1YnByb2JsZW1zID0gW11cbiAgICB0aGlzLl9jb25zZXF1ZW5jZXMgPSBbXVxuICAgIHRoaXMuX25vZGVJZCA9IG5vZGVJZFxuICAgIHRoaXMuX3BhcmVudFByb2JsZW0gPSBwYXJlbnRQcm9ibGVtXG4gICAgdGhpcy5faW50ZXJ2ZW50aW9ucyA9IFtdXG4gIH1cbiAgZ2V0IHRleHQgKCkge1xuICAgIHJldHVybiB0aGlzLl90ZXh0XG4gIH1cblxuICBnZXQgcGFyZW50UHJvYmxlbSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudFByb2JsZW1cbiAgfVxuXG4gIGdldCBub2RlSWQgKCkge1xuICAgIHJldHVybiB0aGlzLl9ub2RlSWRcbiAgfVxuICBnZXQgc3VicHJvYmxlbXMgKCkge1xuICAgIHJldHVybiB0aGlzLl9zdWJwcm9ibGVtc1xuICB9XG4gIGFkZFN1YnByb2JsZW0gKHN1YnByb2JsZW0pIHtcbiAgICB0aGlzLl9zdWJwcm9ibGVtcy5wdXNoKHN1YnByb2JsZW0pXG4gIH1cblxuICBhZGRJbnRlcnZlbnRpb24gKGludGVydmVudGlvbikge1xuICAgIHRoaXMuX2ludGVydmVudGlvbnMucHVzaChpbnRlcnZlbnRpb24pXG4gIH1cblxuICBnZXQgY29uc2VxdWVuY2VzICgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uc2VxdWVuY2VzXG4gIH1cblxuICBhZGRDb25zZXF1ZW5jZSAoY29uc2VxdWVuY2UpIHtcbiAgICB0aGlzLl9jb25zZXF1ZW5jZXMucHVzaChjb25zZXF1ZW5jZSlcbiAgfVxuXG4gIGZpbmRJc3N1ZSAodGV4dCwgbm9kZUlkID0gbnVsbCkge1xuICAgIGlmIChub2RlSWQgIT0gbnVsbCAmJiB0aGlzLl9ub2RlSWQgPT09IG5vZGVJZCkgcmV0dXJuIHRoaXNcbiAgICBlbHNlIGlmICh0aGlzLl90ZXh0ID09PSB0ZXh0KSByZXR1cm4gdGhpc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fc3VicHJvYmxlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBpc3N1ZSA9IHRoaXMuX3N1YnByb2JsZW1zW2ldLmZpbmRJc3N1ZSh0ZXh0LCBub2RlSWQpXG4gICAgICBpZiAoaXNzdWUgIT0gbnVsbCkgcmV0dXJuIGlzc3VlXG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fY29uc2VxdWVuY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaXNzdWUgPSB0aGlzLl9jb25zZXF1ZW5jZXNbaV0uZmluZElzc3VlKHRleHQsIG5vZGVJZClcbiAgICAgIGlmIChpc3N1ZSAhPSBudWxsKSByZXR1cm4gaXNzdWVcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9pbnRlcnZlbnRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaXNzdWUgPSB0aGlzLl9pbnRlcnZlbnRpb25zW2ldLmZpbmRJc3N1ZSh0ZXh0LCBub2RlSWQpXG4gICAgICBpZiAoaXNzdWUgIT0gbnVsbCkgcmV0dXJuIGlzc3VlXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9ibGVtXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc2NyaXB0cy9jaGF0aW4vbW9kZWwvUHJvYmxlbS5qcyIsIlxuY29uc3QgSWNvbnNNYXAgPSB7XG4gICd0aWNrLWVuYWJsZWQnOiB7XG4gICAgZmlsZVVybDogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdpbWFnZXMvdGlja0VuYWJsZWQucG5nJyksXG4gICAgbWluZG1laXN0ZXJOYW1lOiAnOndoaXRlX2NoZWNrX21hcms6J1xuICB9LFxuICAndGljay1kaXNhYmxlZCc6IHtcbiAgICBmaWxlVXJsOiBjaHJvbWUucnVudGltZS5nZXRVUkwoJ2ltYWdlcy90aWNrRGlzYWJsZWQucG5nJyksXG4gICAgbWluZG1laXN0ZXJOYW1lOiAnOmJhbGxvdF9ib3hfd2l0aF9jaGVjazonXG4gIH0sXG4gICdtYWduaWZpZXInOiB7XG4gICAgZmlsZVVybDogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdpbWFnZXMvbWFnbmlmaWVyLnBuZycpLFxuICAgIG1pbmRtZWlzdGVyTmFtZTogJzptYWc6J1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSWNvbnNNYXBcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9zY3JpcHRzL2NoYXRpbi9JY29uc01hcC5qcyIsIlxuY29uc3QgTWluZG1laXN0ZXJDbGllbnQgPSByZXF1aXJlKCcuLi9taW5kbWVpc3Rlci9NaW5kbWVpc3RlckNsaWVudCcpXG5jb25zdCBBbGVydHMgPSByZXF1aXJlKCcuLi91dGlscy9BbGVydHMnKVxuY29uc3QgTG9jYXRvcnMgPSByZXF1aXJlKCcuLi9taW5kbWVpc3Rlci93cmFwcGVyL0xvY2F0b3JzJylcbmNvbnN0IFV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMvVXRpbHMnKVxuY2xhc3MgSG9tZVBhZ2VNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuX3RlbXBsYXRlcyA9IHtcbiAgICAgICdjaGF0aW4nOiAncmVzb3VyY2VzL21pbmRtYXBUZW1wbGF0ZXMvUlFTY29waW5nVGVtcGxhdGUubWluZCdcbiAgICB9XG4gICAgLy8gbm90aGluZyB0b2RvIGhlcmVcbiAgfVxuXG4gIGltcG9ydFRlbXBsYXRlICh0ZW1wbGF0ZSkge1xuICAgIGxldCB0aGF0ID0gdGhpc1xuICAgIEFsZXJ0cy5zaG93TG9hZGluZ1dpbmRvdygnQ3JlYXRpbmcgbWluZCBtYXAgZnJvbSB0ZW1wbGF0ZS4uLicpXG4gICAgTWluZG1laXN0ZXJDbGllbnQuY3JlYXRlTWluZG1hcEZyb21UZW1wbGF0ZShjaHJvbWUucnVudGltZS5nZXRVUkwodGhhdC5fdGVtcGxhdGVzW3RlbXBsYXRlXSkpLnRoZW4oKG1hcElkKSA9PiB7XG4gICAgICBVdGlscy5zbGVlcCgyMDAwKS50aGVuKCgpID0+IHtcbiAgICAgICAgTWluZG1laXN0ZXJDbGllbnQubGlua1NoYXJlKG1hcElkKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBBbGVydHMuY2xvc2VMb2FkaW5nV2luZG93KClcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwczovL3d3dy5taW5kbWVpc3Rlci5jb20vbWFwLyR7bWFwSWR9YFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIEFsZXJ0cy5zaG93RXJyb3JUb2FzdCgnVGhlcmUgd2FzIGFuIGVycm9yIHdoaWxlIGNyZWF0aW5nIHRoZSBtaW5kIG1hcCcpXG4gICAgfSlcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIGxldCB0aGF0ID0gdGhpc1xuICAgIGxldCBsb2NhdG9yID0gTG9jYXRvcnMuTkVXX01JTkRNQVBfQlVUVE9OXG4gICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobG9jYXRvcilcbiAgICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhhdC5pbml0KClcbiAgICAgIH0sIDUwMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoYXQuaW5zZXJ0VGVtcGxhdGVCdXR0b24oKVxuICAgIHRoYXQubWFuYWdlUmVzaXplKClcbiAgfVxuXG4gIGluc2VydFRlbXBsYXRlQnV0dG9uICgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICBsZXQgbG9jYXRvciA9IExvY2F0b3JzLk5FV19NSU5ETUFQX0JVVFRPTlxuICAgIGxldCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGxvY2F0b3IpXG4gICAgbGV0IG9ic2VydmVyRnVuYyA9ICgpID0+IHtcbiAgICAgIGxldCBpbnNlcnRlZFRlcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKExvY2F0b3JzLkNIQVRJTl9NSU5ETUFQX1RFTVBMQVRFKVxuICAgICAgaWYgKGluc2VydGVkVGVwbGF0ZSAhPSBudWxsKSByZXR1cm5cbiAgICAgIGxldCBjaGF0aW5UZW1wbGF0ZUluc2VydGlvblBvaW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihMb2NhdG9ycy5URU1QTEFURV9CVVRUT05fSU5TRVJUSU9OX1BPSU5UKVxuICAgICAgaWYgKGNoYXRpblRlbXBsYXRlSW5zZXJ0aW9uUG9pbnQgPT0gbnVsbCkgcmV0dXJuXG4gICAgICBsZXQgdGVtcGxhdGVFbGVtZW50VG9DbG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoTG9jYXRvcnMuVEVNUExBVEVfRUxFTUVOVF9UT19DTE9ORSlcbiAgICAgIGxldCBjaGF0aW5UZW1wbGF0ZSA9IHRlbXBsYXRlRWxlbWVudFRvQ2xvbmUuY2xvbmVOb2RlKHRydWUpXG4gICAgICBjaGF0aW5UZW1wbGF0ZS5pZCA9ICdjaGF0aW5UZW1wbGF0ZSdcbiAgICAgIGNoYXRpblRlbXBsYXRlLmNsYXNzTGlzdC5hZGQoJ2NoYXRpblRlbXBsYXRlJylcbiAgICAgIGNoYXRpblRlbXBsYXRlLnF1ZXJ5U2VsZWN0b3IoTG9jYXRvcnMuTUlORE1BUF9URU1QTEFURV9OQU1FKS5pbm5lclRleHQgPSAnQ2hhdGluJ1xuICAgICAgbGV0IHRlbXBsYXRlSW1hZ2UgPSBjaGF0aW5UZW1wbGF0ZS5xdWVyeVNlbGVjdG9yKCdzdmcnKVxuICAgICAgbGV0IHRlbXBsYXRlSW1hZ2VDb250YWluZXIgPSB0ZW1wbGF0ZUltYWdlLnBhcmVudE5vZGVcbiAgICAgIHRlbXBsYXRlSW1hZ2VDb250YWluZXIucmVtb3ZlQ2hpbGQodGVtcGxhdGVJbWFnZSlcbiAgICAgIGxldCBjaGF0aW5UZW1wbGF0ZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgIC8vIHRvZG8gLS0+IG1vdmUgdG8gY3NzXG4gICAgICBjaGF0aW5UZW1wbGF0ZUltYWdlLnN0eWxlLmhlaWdodCA9ICc0NHB4J1xuICAgICAgY2hhdGluVGVtcGxhdGVJbWFnZS5zcmMgPSBjaHJvbWUucnVudGltZS5nZXRVUkwoJ2ltYWdlcy9hcnR1cm8ucG5nJylcbiAgICAgIHRlbXBsYXRlSW1hZ2VDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJydcbiAgICAgIHRlbXBsYXRlSW1hZ2VDb250YWluZXIuc3R5bGUud2lkdGggPSAnJ1xuICAgICAgdGVtcGxhdGVJbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGF0aW5UZW1wbGF0ZUltYWdlKVxuICAgICAgY2hhdGluVGVtcGxhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICB0aGF0LmltcG9ydFRlbXBsYXRlKCdjaGF0aW4nKVxuICAgICAgfSwgZmFsc2UpXG4gICAgICBjaGF0aW5UZW1wbGF0ZUluc2VydGlvblBvaW50Lmluc2VydEJlZm9yZShjaGF0aW5UZW1wbGF0ZSwgY2hhdGluVGVtcGxhdGVJbnNlcnRpb25Qb2ludC5jaGlsZHJlblsxXSlcbiAgICB9XG4gICAgbGV0IG9icyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKG11dGF0aW9ucyl7XG4gICAgICBvYnNlcnZlckZ1bmMoKVxuICAgIH0pXG4gICAgaWYgKHRhcmdldCAhPSBudWxsKSB7XG4gICAgICBvYnMub2JzZXJ2ZSh0YXJnZXQsIHtcbiAgICAgICAgYXR0cmlidXRlczogdHJ1ZVxuICAgICAgfSlcbiAgICB9XG4gICAgb2JzZXJ2ZXJGdW5jKClcbiAgfVxuXG4gIG1hbmFnZVJlc2l6ZSAoKSB7XG4gICAgbGV0IHNpemVDaGVjayA9ICgpID0+IHtcbiAgICAgIGxldCByZWZlcmVuY2VUZW1wbGF0ZVNlbGVjdG9yID0gTG9jYXRvcnMuTkVXX01JTkRNQVBfQlVUVE9OXG4gICAgICBsZXQgcmVmZXJlbmNlVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJlZmVyZW5jZVRlbXBsYXRlU2VsZWN0b3IpXG4gICAgICBpZiAocmVmZXJlbmNlVGVtcGxhdGUgPT0gbnVsbCkgcmV0dXJuXG4gICAgICBsZXQgY2hhdGluVGVtcGxhdGVMb2NhdG9yID0gTG9jYXRvcnMuQ0hBVElOX01JTkRNQVBfVEVNUExBVEVcbiAgICAgIGxldCB0ZW1wbGF0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNoYXRpblRlbXBsYXRlTG9jYXRvcilcbiAgICAgIHRlbXBsYXRlcy5mb3JFYWNoKCh0ZW1wbGF0ZSkgPT4ge1xuICAgICAgICB0ZW1wbGF0ZS5zdHlsZS53aWR0aCA9IHJlZmVyZW5jZVRlbXBsYXRlLnN0eWxlLndpZHRoXG4gICAgICB9KVxuICAgIH1cbiAgICB3aW5kb3cuc2V0SW50ZXJ2YWwoc2l6ZUNoZWNrLCAxMDApXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBIb21lUGFnZU1hbmFnZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9zY3JpcHRzL2NoYXRpbi9Ib21lUGFnZU1hbmFnZXIuanMiXSwic291cmNlUm9vdCI6IiJ9