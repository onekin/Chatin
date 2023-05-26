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
/******/ 	return __webpack_require__(__webpack_require__.s = 91);
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
/* 43 */,
/* 44 */,
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
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = unsafeStringify;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validate_js__ = __webpack_require__(48);

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!Object(__WEBPACK_IMPORTED_MODULE_0__validate_js__["a" /* default */])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ __webpack_exports__["a"] = (stringify);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__regex_js__ = __webpack_require__(97);


function validate(uuid) {
  return typeof uuid === 'string' && __WEBPACK_IMPORTED_MODULE_0__regex_js__["a" /* default */].test(uuid);
}

/* harmony default export */ __webpack_exports__["a"] = (validate);

/***/ }),
/* 49 */,
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
/* 86 */,
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = rng;
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = v35;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stringify_js__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse_js__ = __webpack_require__(89);



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
/* unused harmony export DNS */

const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* unused harmony export URL */

function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;

    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = Object(__WEBPACK_IMPORTED_MODULE_1__parse_js__["a" /* default */])(namespace);
    }

    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return Object(__WEBPACK_IMPORTED_MODULE_0__stringify_js__["b" /* unsafeStringify */])(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validate_js__ = __webpack_require__(48);


function parse(uuid) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__validate_js__["a" /* default */])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ __webpack_exports__["a"] = (parse);

/***/ }),
/* 90 */,
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(92);


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MindmeisterBackground = __webpack_require__(93);
var ChatGPTBackground = __webpack_require__(94);

var Background = function () {
  function Background() {
    (0, _classCallCheck3.default)(this, Background);

    this._mindmeisterManager = null;
    this._chatGPTManager = null;
  }

  (0, _createClass3.default)(Background, [{
    key: 'init',
    value: function init() {
      this._mindmeisterManager = new MindmeisterBackground();
      this._mindmeisterManager.init();
      this._chatGPTManager = new ChatGPTBackground();
      this._chatGPTManager.init();

      /*chrome.browserAction.onClicked.addListener(function () {
        var newURL = chrome.extension.getURL('pages/options.html')
        chrome.tabs.create({ url: newURL })
      })*/
    }
  }]);
  return Background;
}();

var background = new Background();
background.init();

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var APIClientId = 'XxUt7w0Xri-9hmIvvRNaIbMe4HrOml2giLDT5qFT5W8';
var TokenStorageKey = 'MINDMEISTER_ACCESS_TOKEN';
var Utils = __webpack_require__(30);
var PromptStyles = __webpack_require__(85);

var MindmeisterBackground = function () {
  function MindmeisterBackground() {
    (0, _classCallCheck3.default)(this, MindmeisterBackground);

    this._currentNodeId = -100;
    this._currentChangeId = 100;
    this._csrfToken = null;
  }

  (0, _createClass3.default)(MindmeisterBackground, [{
    key: 'getCurrentNodeId',
    value: function getCurrentNodeId() {
      this._currentNodeId--;
      return this._currentNodeId;
    }
  }, {
    key: 'getCurrentChangeId',
    value: function getCurrentChangeId() {
      this._currentChangeId++;
      return this._currentChangeId;
    }
  }, {
    key: 'init',
    value: function init() {
      var that = this;
      chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
        if (message.scope === 'mindmeisterClient') {
          if (message.action === 'checkToken') {
            that.checkToken().then(function () {
              sendResponse({ response: true });
            }, function (error) {
              return sendResponse({ error: error });
            });
          } else if (message.action === 'authorize') {
            that.authorize().then(function () {
              sendResponse({ response: true });
            }, function (error) {
              return sendResponse({ error: error });
            });
          } else if (message.action === 'processInBackground') {
            if (message.method === 'getMap') {
              that.getMap(message.args.mapId).then(function (rsp) {
                return sendResponse({ response: rsp });
              }, function (error) {
                return sendResponse({ error: error });
              });
            } else if (message.method === 'createMindmapFromTemplate') {
              that.createMindmapFromTemplate(message.args.templateFileUrl).then(function (rsp) {
                return sendResponse({ response: rsp });
              }, function (error) {
                return sendResponse({ error: error });
              });
            } else if (message.method === 'getBelongingMap') {
              that.getBelongingMap(message.args.nodeId).then(function (rsp) {
                return sendResponse({ response: rsp });
              }, function (error) {
                return sendResponse({ error: error });
              });
              // } else if (message.method === 'changeNodeIcon') {
              //   that.changeNodeIcon(message.args.mapId, message.args.nodeId, message.args.icon).then((rsp) => sendResponse({response: rsp}), (error) => sendResponse({error: error}))
              // } else if (message.method === 'addNode') {
              //   that.addNode(message.args.mapId, message.args.parentId, message.args.newNode).then((rsp) => sendResponse({response: rsp}), (error) => sendResponse({error: error}))
            } else if (message.method === 'addNodes') {
              that.addNodes(message.args.mapId, message.args.newNodes).then(function (rsp) {
                return sendResponse({ response: rsp });
              }, function (error) {
                return sendResponse({ error: error });
              });
            } else if (message.method === 'modifyNodes') {
              that.modifyNodes(message.args.mapId, message.args.nodes).then(function (rsp) {
                return sendResponse({ response: rsp });
              }, function (error) {
                return sendResponse({ error: error });
              });
            } else if (message.method === 'doActions') {
              that.doActions(message.args.mapId, message.args.insertions, message.args.updates, message.args.deletions).then(function (rsp) {
                return sendResponse({ response: rsp });
              }, function (error) {
                return sendResponse({ error: error });
              });
            } else if (message.method === 'linkShare') {
              that.linkShare(message.args.mapId).then(function (rsp) {
                return sendResponse({ response: rsp });
              }, function (error) {
                return sendResponse({ error: error });
              });
            }
          }
        }
        return true;
      });

      chrome.webRequest.onSendHeaders.addListener(function (details) {
        for (var i = 0; i < details.requestHeaders.length; i++) {
          if (details.requestHeaders[i].name.toLowerCase() === 'x-csrf-token') {
            that._csrfToken = details.requestHeaders[i].value;
            break;
          } else if (details.requestHeaders[i].name.toLowerCase() === 'cookie') {
            that._cookie = details.requestHeaders[i].value;
            break;
          }
        }
        return { requestHeaders: details.requestHeaders };
      }, { urls: ['https://www.mindmeister.com/*', 'https://mindmeister.com/*'] }, ['requestHeaders', 'extraHeaders']);

      /* chrome.webRequest.onBeforeSendHeaders.addListener(
        (details) => {
          let originHeader = details.requestHeaders.find((h) => { return h.name.toLowerCase() === 'origin' })
          if (originHeader == null || !originHeader.value.includes('chrome-extension://')) return
          let headersToRemove = ['accept', 'origin', 'sec-fetch-mode', 'sec-fetch-dest', 'accept-language', 'sec-ch-ua', 'sec-ch-ua-platform', 'sec-ch-ua-mobile', 'user-agent', 'sec-fetch-site']
          let newH = details.requestHeaders.filter((h) => { return headersToRemove.indexOf(h.name.toLowerCase()) === -1 })
           let cookieH = newH.find((h) => { return h.name.toLowerCase() === 'cookie' })
          if (cookieH != null) cookieH.value = that._cookie
          return {requestHeaders: newH}
        },
        {urls: ['https://www.mindmeister.com/generic_files/*','https://www.mindmeister.com/sharing/*']},
        ['requestHeaders', 'extraHeaders', 'blocking']
      ) */
    }
  }, {
    key: 'authorize',
    value: function authorize() {
      var that = this;
      return new Promise(function (resolve, reject) {
        chrome.identity.launchWebAuthFlow({
          interactive: true,
          url: 'https://www.mindmeister.com/oauth2/authorize?client_id=' + APIClientId + '&scope=mindmeister&redirect_uri=https://' + chrome.runtime.id + '.chromiumapp.org&response_type=token'
        }, function (url) {
          var urlParams = new URLSearchParams(url.replace(/.*#/gi, ''));
          var token = urlParams.get('access_token');
          that.storeToken(token).then(function () {
            return resolve();
          });
        });
      });
    }
  }, {
    key: 'storeToken',
    value: function storeToken(token) {
      return new Promise(function (resolve, reject) {
        var opts = {};
        opts[TokenStorageKey] = token;
        chrome.storage.sync.set(opts, function () {
          resolve();
        });
      });
    }
  }, {
    key: 'removeToken',
    value: function removeToken() {
      return new Promise(function (resolve, reject) {
        chrome.storage.sync.remove([TokenStorageKey], function () {
          resolve();
        });
      });
    }
  }, {
    key: 'getToken',
    value: function getToken() {
      return new Promise(function (resolve, reject) {
        chrome.storage.sync.get(TokenStorageKey, function (options) {
          var token = options[TokenStorageKey] || null;
          if (token == null) reject('error');else resolve(token);
        });
      });
    }
  }, {
    key: 'checkToken',
    value: function checkToken() {
      var that = this;
      return new Promise(function (resolve, reject) {
        that.getToken().then(function (token) {
          var items = {
            access_token: token,
            method: 'mm.test.login'
          };
          var opts = {
            method: 'GET',
            url: 'https://www.mindmeister.com/services/rest/oauth2',
            params: items
          };
          Utils.performRequest(opts).then(function (resp) {
            return resp.json();
          }).then(function (ret) {
            if (ret.rsp.stat !== 'ok') {
              that.removeToken().then(function () {
                reject('error');
              });
            } else resolve();
          });
        }, function (error) {
          reject(error);
        });
      });
    }
  }, {
    key: 'getUserId',
    value: function getUserId() {
      // todo
    }
  }, {
    key: 'getMapNo',
    value: function getMapNo(mapId) {

      var that = this;
      return new Promise(function (resolve, reject) {
        var data = { idea_id: mapId, isEmbeddedView: false, isPrintView: false, isPublicView: false };
        fetch('https://www.mindmeister.com/maps/content.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'x-csrf-token': that._csrfToken
          },
          body: JSON.stringify(data)
        }).then(function (resp) {
          return resp.json();
        }).then(function (ret) {
          if (ret.map == null) reject('error');else resolve(ret);
        });
      }, function (error) {
        reject(error);
      });
    }
  }, {
    key: 'getMap',
    value: function getMap(mapId) {
      var that = this;
      return new Promise(function (resolve, reject) {
        that.getToken().then(function (token) {
          var items = {
            access_token: token,
            method: 'mm.maps.getMap',
            map_id: mapId
          };
          var opts = {
            method: 'GET',
            url: 'https://www.mindmeister.com/services/rest/oauth2',
            params: items
          };
          Utils.performRequest(opts).then(function (resp) {
            return resp.json();
          }).then(function (ret) {
            if (ret.rsp.stat !== 'ok') reject(ret.err.msg);else resolve(ret.rsp);
          });
        }, function (error) {
          reject(error);
        });
      });
    }
  }, {
    key: 'getBelongingMap',
    value: function getBelongingMap(nodeId) {
      var that = this;
      return new Promise(function (resolve, reject) {
        that.getToken().then(function (token) {
          var items = {
            access_token: token,
            method: 'mm.ideas.getMap',
            idea_id: nodeId
          };
          var opts = {
            method: 'GET',
            url: 'https://www.mindmeister.com/services/rest/oauth2',
            params: items
          };
          Utils.performRequest(opts).then(function (resp) {
            return resp.json();
          }).then(function (ret) {
            if (ret.rsp.stat !== 'ok') reject(ret.err.msg);else resolve(ret.rsp.map.id);
          });
        }, function (error) {
          reject(error);
        });
      });
    }
  }, {
    key: 'uploadImage',
    value: function uploadImage(mapId, image) {
      var that = this;
      return new Promise(function (resolve, reject) {
        // that.getToken().then((token) => {
        // fetch(fileUrl).then((response) => response.arrayBuffer()).then((fileContent) => {
        // that.getFileByUrl(fileUrl).then((file) => {
        // var fileContent = new File([file], 'image.png')
        // const formData  = new FormData()
        /*
        formData.append('method', 'mm.files.add')
        formData.append('map_id', mapId)
        formData.append('file_type', 'idea_image')
        formData.append('file', fileContent)
        formData.append('access_token', token)
        */
        var data = { 'filetype': 'idea_image', 'source': 3, 'name': image.mindmeisterName, 'width': 23, 'height': 23 };
        fetch('https://www.mindmeister.com/generic_files/upload.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'x-csrf-token': that._csrfToken
          },
          body: JSON.stringify(data)
        }).then(function (resp) {
          return resp.json();
        }).then(function (ret) {
          if (ret == null || ret.file == null || ret.file.id == null) reject('error');else resolve(ret.file.id);
        });

        /* var xhr = new XMLHttpRequest()
        xhr.addEventListener('readystatechange', function () {
          if (this.readyState === 4) {
            var response = JSON.parse(this.responseText)
            if (response.file != null) resolve(response.file.id)
            else if (response.err != null) reject(response.err.msg)
          }
        })
        xhr.open('POST', 'https://www.mindmeister.com/services/rest/oauth2')
        xhr.send(formData) */
        // })
        // }, (error) => { reject(error) })
      });
    }
  }, {
    key: 'addNodeToChangeList',
    value: function addNodeToChangeList(changeList, mapId, node) {
      var nodeId = this.getCurrentNodeId();
      var changeId = this.getCurrentChangeId();
      var insertAction = {
        'client_id': changeId,
        'idea_id': nodeId,
        'entity': 'Idea',
        'operation': 'Add',
        'new_data': {
          'parentId': parseInt(node.parentId),
          'title': Utils.prettifyNodeText(node.text),
          'rank': 1,
          'layout': null,
          'isFree': false,
          'isFloating': false,
          'x': 398, // todo
          'y': 235
        }
      };
      changeList.addChange(insertAction);
      if (node.note != null) {
        var noteAction = {
          'client_id': this.getCurrentChangeId(),
          'idea_id': nodeId,
          'entity': 'Note',
          'operation': 'Edit',
          'new_data': {
            'note': node.note
          },
          'old_data': null
        };
        changeList.addChange(noteAction);
      }
      if (node.style != null) {
        var styleAction = {
          'client_id': this.getCurrentChangeId(),
          'entity': 'Style',
          'idea_id': parseInt(nodeId),
          'operation': 'Edit',
          'new_data': node.style
        };
        changeList.addChange(styleAction);
      }
      if (node.image != null) {
        var imageId = changeList.getImageId(node.image.mindmeisterName);
        var addImageAction = {
          'client_id': this.getCurrentChangeId(),
          'entity': 'Image',
          'idea_id': parseInt(nodeId),
          'operation': 'Add',
          'new_data': {
            'idea_image_id': imageId,
            'height': 23,
            'width': 23,
            'source': 3,
            'image_identifier': node.image.mindmeisterName
          }
        };
        changeList.addChange(addImageAction);
      }
    }
  }, {
    key: 'addNodeToChangeListAPI',
    value: function addNodeToChangeListAPI(changeList, mapId, node) {
      var nodeId = this.getCurrentNodeId();
      var changeId = this.getCurrentChangeId();
      var insertAction = {
        'id': changeId,
        'idea_id': nodeId,
        'type': 'Insert',
        'new_data': {
          'parentId': node.parentId,
          'title': Utils.prettifyNodeText(node.text),
          'rank': 1,
          'isFree': false,
          'isFloating': false,
          'offsetX': 0,
          'offsetY': 0,
          'x': 1173.93, // todo
          'isBoundary': false,
          'comments': [],
          'attachments': [],
          'id': nodeId,
          'parent': node.parentId, // todo
          'pos': [1173.93, 212.81] // todo
        } };
      if (node.note != null) insertAction.new_data.note = node.note;
      changeList.addChange(insertAction);
      if (node.style != null) {
        var styleAction = {
          'id': this.getCurrentChangeId(),
          'idea_id': nodeId,
          'type': 'TextStyle',
          'new_data': {
            'style': node.style
          }
        };
        styleAction['new_data']['style']['id'] = nodeId;
        changeList.addChange(styleAction);
      }
      if (node.image != null) {
        var imageId = changeList.getImageId(node.image.mindmeisterName);
        var addImageAction = {
          'id': this.getCurrentChangeId(),
          'idea_id': nodeId,
          'type': 'AddImage',
          'new_data': { 'idea_image_id': imageId }
        };
        var resizeImageAction = {
          'id': this.getCurrentChangeId(),
          'idea_id': nodeId,
          'type': 'ResizeImage',
          'new_data': {
            'idea_image_id': imageId,
            'height': 23,
            'position': 3,
            'width': 23
          }
        };
        changeList.addChange(addImageAction);
        changeList.addChange(resizeImageAction);
      }
    }
  }, {
    key: 'modifyNodeToChangeList',
    value: function modifyNodeToChangeList(changeList, mapId, node) {
      if (node.style != null) {
        var styleAction = {
          'client_id': this.getCurrentChangeId(),
          'entity': 'Style',
          'idea_id': parseInt(node.id),
          'operation': 'Edit',
          'new_data': node.style
        };
        changeList.addChange(styleAction);
      }
      if (node.image != null) {
        var imageId = changeList.getImageId(node.image.mindmeisterName);
        var addImageAction = {
          'client_id': this.getCurrentChangeId(),
          'entity': 'Image',
          'idea_id': parseInt(node.id),
          'operation': 'Add',
          'new_data': {
            'idea_image_id': imageId,
            'height': 23,
            'width': 23,
            'source': 3,
            'image_identifier': node.image.mindmeisterName
          }
        };
        changeList.addChange(addImageAction);
      }
    }
  }, {
    key: 'modifyNodeToChangeListAPI',
    value: function modifyNodeToChangeListAPI(changeList, mapId, node) {
      if (node.style != null) {
        var styleAction = {
          'id': this.getCurrentChangeId(),
          'idea_id': node.id,
          'type': 'TextStyle',
          'new_data': {
            'style': node.style
          }
        };
        styleAction['new_data']['style']['id'] = node.id;
        changeList.addChange(styleAction);
      }
      if (node.image != null) {
        var imageId = changeList.getImageId(node.image.mindmeisterName);
        var addImageAction = {
          'id': this.getCurrentChangeId(),
          'idea_id': node.id,
          'type': 'AddImage',
          'new_data': { 'idea_image_id': imageId }
        };
        var resizeImageAction = {
          'id': this.getCurrentChangeId(),
          'idea_id': node.id,
          'type': 'ResizeImage',
          'new_data': {
            'idea_image_id': imageId,
            'height': 23,
            'position': 3,
            'width': 23
          }
        };
        changeList.addChange(addImageAction);
        changeList.addChange(resizeImageAction);
      }
    }
  }, {
    key: 'uploadNeccesaryImagesForChangeList',
    value: function uploadNeccesaryImagesForChangeList(mapId, changeList) {
      var that = this;
      return new Promise(function (resolve, reject) {
        var promiseList = [];
        changeList.images.forEach(function (i) {
          promiseList.push(new Promise(function (res, rej) {
            that.uploadImage(mapId, i).then(function (imageId) {
              changeList.setImageId(i.mindmeisterName, imageId);
              res();
            });
          }));
        });
        if (promiseList.length === 0) resolve();else {
          Promise.all(promiseList).then(function () {
            resolve();
          });
        }
      });
    }
  }, {
    key: 'uploadNeccesaryImagesForChangeListAPI',
    value: function uploadNeccesaryImagesForChangeListAPI(mapId, changeList) {
      var that = this;
      return new Promise(function (resolve, reject) {
        var promiseList = [];
        changeList.images.forEach(function (i) {
          promiseList.push(new Promise(function (res, rej) {
            that.uploadImage(mapId, i).then(function (imageId) {
              changeList.setImageId(i.mindmeisterName, imageId);
              res();
            });
          }));
        });
        if (promiseList.length === 0) resolve();else {
          Promise.all(promiseList).then(function () {
            resolve();
          });
        }
      });
    }
  }, {
    key: 'addNodes',
    value: function addNodes(mapId, nodes) {
      var _this = this;

      var that = this;
      return new Promise(function (resolve, reject) {
        var changeList = new ChangeList();
        nodes.forEach(function (n) {
          if (n.image != null && !changeList.hasImage(n.image)) changeList.addImage(n.image);
        });
        _this.uploadNeccesaryImagesForChangeList(mapId, changeList).then(function () {
          nodes.forEach(function (n) {
            _this.addNodeToChangeList(changeList, mapId, n);
          });
          that.doChanges(mapId, changeList.changes).then(function () {
            resolve('ok');
          });
        });
      });
    }
  }, {
    key: 'modifyNodes',
    value: function modifyNodes(mapId, nodes) {
      var _this2 = this;

      var that = this;
      return new Promise(function (resolve, reject) {
        var changeList = new ChangeList();
        nodes.forEach(function (n) {
          if (n.image != null && !changeList.hasImage(n.image)) changeList.addImage(n.image);
        });
        _this2.uploadNeccesaryImagesForChangeList(mapId, changeList).then(function () {
          nodes.forEach(function (n) {
            _this2.modifyNodeToChangeList(changeList, mapId, n);
          });
          that.doChanges(mapId, changeList.changes).then(function () {
            resolve('ok');
          });
        });
      });
    }
  }, {
    key: 'doChanges',
    value: function doChanges(mapId, changes) {
      var that = this;
      return new Promise(function (resolve, reject) {
        var data = { 'changes': changes, 'revision': 999, root_id: parseInt(mapId) };
        fetch('https://www.mindmeister.com/panda/maps/do.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'x-csrf-token': that._csrfToken
          },
          body: JSON.stringify(data)
        }).then(function (resp) {
          return resp.json();
        }).then(function (ret) {
          if (ret.errors != null && ret.errors.length > 0) reject(ret.errors[0]);else resolve();
        });
      }, function (error) {
        reject(error);
      });
    }
  }, {
    key: 'doChangesAPI',
    value: function doChangesAPI(mapId, changes) {
      var that = this;
      return new Promise(function (resolve, reject) {
        that.getToken().then(function (token) {
          var items = {
            method: 'mm.realtime.do',
            map_id: mapId,
            data: JSON.stringify(changes),
            access_token: token,
            client_revision: 999999
          };
          var opts = {
            method: 'POST',
            url: 'https://www.mindmeister.com/services/rest/oauth2',
            params: items,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          };
          Utils.performRequest(opts).then(function (resp) {
            return resp.json();
          }).then(function (ret) {
            if (ret.rsp != null && ret.rsp.err != null) reject(ret.err.msg);else resolve();
          });
        }, function (error) {
          reject(error);
        });
      });
    }
  }, {
    key: 'getFileByUrl',
    value: function getFileByUrl(fileUrl) {
      /*let that = this
      return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', fileUrl, true)
        xhr.responseType = 'arraybuffer'
        xhr.onreadystatechange = () => {
          if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            resolve(xhr.response)
          }
        }
        xhr.send()
      })*/
      var that = this;
      return new Promise(function (resolve, reject) {
        fetch(fileUrl).then(function (response) {
          return response.arrayBuffer();
        }).then(function (response) {
          resolve(response);
        });
      });
    }
  }, {
    key: 'doActions',
    value: function doActions(mapId) {
      var insertions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var _this3 = this;

      var updates = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var deletions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

      var that = this;
      return new Promise(function (resolve, reject) {
        var changeList = new ChangeList();
        updates.forEach(function (n) {
          if (n.image != null && !changeList.hasImage(n.image)) changeList.addImage(n.image);
        });
        insertions.forEach(function (n) {
          if (n.image != null && !changeList.hasImage(n.image)) changeList.addImage(n.image);
        });
        _this3.uploadNeccesaryImagesForChangeList(mapId, changeList).then(function () {
          insertions.forEach(function (n) {
            _this3.addNodeToChangeList(changeList, mapId, n);
          });
          updates.forEach(function (n) {
            _this3.modifyNodeToChangeList(changeList, mapId, n);
          });
          that.doChanges(mapId, changeList.changes).then(function () {
            resolve('ok');
          });
        });
      });
    }
  }, {
    key: 'createMindmapFromTemplate',
    value: function createMindmapFromTemplate(fileUrl) {
      var that = this;
      return new Promise(function (resolve, reject) {
        that.getToken().then(function (token) {
          that.getFileByUrl(fileUrl).then(function (file) {
            var url = 'https://www.mindmeister.com/services/rest/oauth2';
            var blob = new File([file], 'Template.mind');
            var data = new FormData();
            data.append('access_token', token);
            data.append('method', 'mm.maps.import');
            data.append('file', blob);
            var d = new URLSearchParams(data);
            fetch(url, {
              method: 'POST',
              body: data
            }).then(function (response) {
              return response.json();
            }).then(function (json) {
              if (json.rsp != null) resolve(json.rsp.map.id);else if (json.err != null) reject(json.err.msg);
            }).catch(function (err) {
              return reject(err);
            });
            /* var blob = new File([file], 'Template.mind')
            var data = new FormData()
            data.append('access_token', token)
            data.append('method', 'mm.maps.import')
            data.append('file', blob)
            var xhr = new XMLHttpRequest()
            xhr.addEventListener('readystatechange', function () {
              if (this.readyState === 4) {
                var response = JSON.parse(this.responseText)
                if (response.rsp != null) resolve(response.rsp.map.id)
                else if (response.err != null) reject(response.err.msg)
              }
            })
            xhr.open('POST', 'https://www.mindmeister.com/services/rest/oauth2')
            xhr.send(data) */
          });
        }, function (error) {
          reject(error);
        });
      });
    }
  }, {
    key: 'linkShare',
    value: function linkShare(mapId) {

      var that = this;
      return new Promise(function (resolve, reject) {
        fetch('https://www.mindmeister.com/sharing/link_share.json?root_id=' + parseInt(mapId) + '&editor=panda&on=true&write=true', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'x-csrf-token': that._csrfToken
          }
        }).then(function (resp) {
          return resp.json();
        }).then(function (ret) {
          if (ret.url == null) reject('error');else resolve('ok');
        });
      }, function (error) {
        reject(error);
      });
    }
  }, {
    key: 'linkShareAPI',
    value: function linkShareAPI(mapId) {
      var that = this;
      return new Promise(function (resolve, reject) {
        that.getToken().then(function (token) {
          var items = {
            access_token: token,
            method: 'mm.maps.linkShare',
            map_id: mapId,
            permission: 2
          };
          var opts = {
            method: 'GET',
            url: 'https://www.mindmeister.com/services/rest/oauth2',
            params: items,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept': 'application/json'
            }
          };
          Utils.performRequest(opts).then(function (resp) {
            return resp.json();
          }).then(function (ret) {
            if (ret.rsp.stat !== 'ok') reject(ret.err.msg);else resolve('ok');
          });
        }, function (error) {
          reject(error);
        });
      });
    }
  }]);
  return MindmeisterBackground;
}();

var ChangeList = function () {
  function ChangeList() {
    (0, _classCallCheck3.default)(this, ChangeList);

    this._changeList = [];
    this._images = [];
  }

  (0, _createClass3.default)(ChangeList, [{
    key: 'hasImage',
    value: function hasImage(image) {
      return this._images.find(function (i) {
        return i.mindmeisterName === image.mindmeisterName;
      }) != null;
    }
  }, {
    key: 'getImageId',
    value: function getImageId(mindmeisterName) {
      var img = this._images.find(function (i) {
        return i.mindmeisterName === mindmeisterName;
      });
      if (img == null || img.id == null) return null;
      return img.id;
    }
  }, {
    key: 'addImage',
    value: function addImage(image) {
      this._images.push({ url: image.fileUrl, mindmeisterName: image.mindmeisterName, id: null });
    }
  }, {
    key: 'setImageId',
    value: function setImageId(mindmeisterName, id) {
      var img = this._images.find(function (i) {
        return i.mindmeisterName === mindmeisterName;
      });
      if (img != null) img.id = id;
    }
  }, {
    key: 'addChange',
    value: function addChange(change) {
      this._changeList.push(change);
    }
  }, {
    key: 'images',
    get: function get() {
      return this._images;
    }
  }, {
    key: 'changes',
    get: function get() {
      return this._changeList;
    }
  }]);
  return ChangeList;
}();

module.exports = MindmeisterBackground;

/***/ }),
/* 94 */
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

var Utils = __webpack_require__(30);

var _require = __webpack_require__(95),
    uuidv4 = _require.v4;

var ChatGPTModeStorageKey = 'CHATGPT_MODE';
var ChatGPTAPIKeyStorageKey = 'CHATGPT_API_KEY';

var ChatGPTBackground = function () {
  function ChatGPTBackground() {
    (0, _classCallCheck3.default)(this, ChatGPTBackground);

    this._mode = null;
  }

  (0, _createClass3.default)(ChatGPTBackground, [{
    key: 'init',
    value: function init() {
      var that = this;
      chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
        if (message.scope === 'chatgptClient') {
          if (message.action === 'processInBackground') {
            if (message.method === 'performQuestion') {
              that.performQuestion(message.args.question).then(function (rsp) {
                return sendResponse({ response: rsp });
              }, function (error) {
                return sendResponse({ error: error.message });
              });
            } else if (message.method === 'getMode') {
              that.getMode().then(function (mode) {
                return sendResponse({ response: mode });
              }, function (error) {
                return sendResponse({ error: error.message });
              });
            } else if (message.method === 'setMode') {
              that.setMode(message.args.mode).then(function (rsp) {
                return sendResponse({ response: true });
              }, function (error) {
                return sendResponse({ error: true });
              });
            } else if (message.method === 'getApiKey') {
              that.getApiKey().then(function (rsp) {
                return sendResponse({ response: rsp });
              }, function (error) {
                return sendResponse({ error: error });
              });
            } else if (message.method === 'setApiKey') {
              that.setApiKey(message.args.apiKey).then(function (rsp) {
                return sendResponse({ response: rsp });
              }, function (error) {
                return sendResponse({ error: error });
              });
            }
          }
          return true;
        }
      });
    }
  }, {
    key: 'getMode',
    value: function getMode() {
      return new Promise(function (resolve, reject) {
        chrome.storage.sync.get(ChatGPTModeStorageKey, function (options) {
          var mode = options[ChatGPTModeStorageKey] || null;
          resolve(mode || 'chatgptLoginMode');
        });
      });
    }
  }, {
    key: 'setMode',
    value: function setMode(mode) {
      return new Promise(function (resolve, reject) {
        var opts = {};
        opts[ChatGPTModeStorageKey] = mode;
        chrome.storage.sync.set(opts, function () {
          resolve();
        });
      });
    }
  }, {
    key: 'performQuestion',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(question) {
        var mode;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getMode();

              case 2:
                mode = _context.sent;
                _context.t0 = mode;
                _context.next = _context.t0 === 'chatgptLoginMode' ? 6 : _context.t0 === 'chatgptApiKeyMode' ? 7 : 8;
                break;

              case 6:
                return _context.abrupt('return', this.performQuestionLogin(question));

              case 7:
                return _context.abrupt('return', this.performQuestionAPIKey(question));

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function performQuestion(_x) {
        return _ref.apply(this, arguments);
      }

      return performQuestion;
    }()
    /**
     * LOGIN MODE
     */

  }, {
    key: 'getToken',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var opts, resp, ret;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                opts = {
                  method: 'GET',
                  url: 'https://chat.openai.com/api/auth/session'
                };
                _context2.prev = 1;
                _context2.next = 4;
                return Utils.performRequest(opts);

              case 4:
                resp = _context2.sent;
                _context2.next = 7;
                return resp.json();

              case 7:
                ret = _context2.sent;
                return _context2.abrupt('return', ret.accessToken || null);

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2['catch'](1);
                return _context2.abrupt('return', Promise.reject(new Error('Unable to obtain ChatGPT token')));

              case 14:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 11]]);
      }));

      function getToken() {
        return _ref2.apply(this, arguments);
      }

      return getToken;
    }()
  }, {
    key: 'removeConversation',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(conversationId, token) {
        var body, opts, resp, ret;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                body = {
                  'is_visible': false
                };
                opts = {
                  method: 'PATCH',
                  url: 'https://chat.openai.com/backend-api/conversation/' + conversationId,
                  params: JSON.stringify(body),
                  headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json'
                  }
                };
                _context3.prev = 2;
                _context3.next = 5;
                return Utils.performRequest(opts);

              case 5:
                resp = _context3.sent;
                _context3.next = 8;
                return resp.json();

              case 8:
                ret = _context3.sent;
                return _context3.abrupt('return', ret);

              case 12:
                _context3.prev = 12;
                _context3.t0 = _context3['catch'](2);
                return _context3.abrupt('return', Promise.reject(_context3.t0));

              case 15:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[2, 12]]);
      }));

      function removeConversation(_x2, _x3) {
        return _ref3.apply(this, arguments);
      }

      return removeConversation;
    }()
  }, {
    key: 'conversation',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(question, token) {
        var items, opts, resp, reader, str, _ref5, value, done, str2, dataChunks, data, dataJson;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                items = {
                  'model': 'text-davinci-002-render',
                  'parent_message_id': uuidv4(),
                  'action': 'next',
                  'messages': [{ 'id': uuidv4(),
                    'role': 'user',
                    'content': {
                      'content_type': 'text',
                      'parts': [question]
                    }
                  }]
                };
                opts = {
                  method: 'POST',
                  body: JSON.stringify(items),
                  headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json'
                  }
                };
                _context4.prev = 2;
                _context4.next = 5;
                return fetch('https://chat.openai.com/backend-api/conversation', opts);

              case 5:
                resp = _context4.sent;

                if (resp.ok) {
                  _context4.next = 8;
                  break;
                }

                return _context4.abrupt('return', Promise.reject(new Error('Error communicating with ChatGPT')));

              case 8:
                reader = resp.body.getReader();
                str = '';

              case 10:
                if (false) {
                  _context4.next = 22;
                  break;
                }

                _context4.next = 13;
                return reader.read();

              case 13:
                _ref5 = _context4.sent;
                value = _ref5.value;
                done = _ref5.done;

                if (!done) {
                  _context4.next = 18;
                  break;
                }

                return _context4.abrupt('break', 22);

              case 18:
                str2 = new TextDecoder().decode(value);

                str += str2;
                _context4.next = 10;
                break;

              case 22:
                dataChunks = str.split('\ndata:');

                if (!(dataChunks.length > 1)) {
                  _context4.next = 34;
                  break;
                }

                data = dataChunks[dataChunks.length - 2].replace('data:', '');
                dataJson = void 0;
                _context4.prev = 26;

                dataJson = JSON.parse(data);
                _context4.next = 33;
                break;

              case 30:
                _context4.prev = 30;
                _context4.t0 = _context4['catch'](26);
                return _context4.abrupt('return', Promise.reject(new Error('Error parsing ChatGPT\'s answer: ' + data)));

              case 33:
                return _context4.abrupt('return', dataJson);

              case 34:
                return _context4.abrupt('return', {});

              case 37:
                _context4.prev = 37;
                _context4.t1 = _context4['catch'](2);
                return _context4.abrupt('return', Promise.reject(_context4.t1));

              case 40:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[2, 37], [26, 30]]);
      }));

      function conversation(_x4, _x5) {
        return _ref4.apply(this, arguments);
      }

      return conversation;
    }()
  }, {
    key: 'performQuestionLogin',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(question) {
        var token, answer;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return this.getToken();

              case 3:
                token = _context5.sent;

                if (!(token == null)) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt('return', Promise.reject(new Error('Unable to obtain ChatGPT token')));

              case 6:
                _context5.next = 8;
                return this.conversation(question, token);

              case 8:
                answer = _context5.sent;

                if (!(answer.message == null)) {
                  _context5.next = 11;
                  break;
                }

                return _context5.abrupt('return', Promise.reject(new Error('Error parsing ChatGPT\'s answer')));

              case 11:
                if (answer.conversation_id != null) this.removeConversation(answer.conversation_id, token);
                return _context5.abrupt('return', answer.message.content.parts[0]);

              case 15:
                _context5.prev = 15;
                _context5.t0 = _context5['catch'](0);
                return _context5.abrupt('return', Promise.reject(_context5.t0));

              case 18:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 15]]);
      }));

      function performQuestionLogin(_x6) {
        return _ref6.apply(this, arguments);
      }

      return performQuestionLogin;
    }()

    /**
     * API KEY MODE
     */

  }, {
    key: 'performQuestionAPIKey',
    value: function performQuestionAPIKey(question) {
      var that = this;
      return new Promise(function (resolve, reject) {
        if (that._apiKey == null || that._apiKey === '') {
          reject(new Error('Missing API key. Please, provide one in the options page.'));
          return;
        }
        var items = {
          'model': 'gpt-3.5-turbo',
          'messages': [{ 'role': 'user',
            'content': question }],
          'temperature': 0.7
        };
        var opts = {
          method: 'POST',
          url: 'https://api.openai.com/v1/chat/completions',
          params: JSON.stringify(items),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + that._apiKey
          }
        };
        Utils.performRequest(opts).then(function (resp) {
          return resp.json();
        }).then(function (ret) {
          if (ret.choices == null || ret.choices.length === 0) reject(new Error('No answer from ChatGPT'));else resolve(ret.choices[0].message.content);
        }).catch(function (error) {
          try {
            error.response.json().then(function (err) {
              if (err.error != null && err.error.message != null) reject(new Error(err.error.message));else reject(new Error('Unknown ChatGPT error'));
            });
          } catch (e) {
            reject(new Error('Unparsable response from ChatGPT'));
          }
        });
      });
    }
  }, {
    key: 'getApiKey',
    value: function getApiKey() {
      return new Promise(function (resolve, reject) {
        chrome.storage.sync.get(ChatGPTAPIKeyStorageKey, function (options) {
          var token = options[ChatGPTAPIKeyStorageKey] || null;
          resolve(token);
        });
      });
    }
  }, {
    key: 'setApiKey',
    value: function setApiKey(key) {
      var that = this;
      return new Promise(function (resolve, reject) {
        that.testApiKey(key).then(function () {
          var opts = {};
          opts[ChatGPTAPIKeyStorageKey] = key;
          chrome.storage.sync.set(opts, function () {
            that._apiKey = key;
            resolve(true);
          });
        }).catch(function (error) {
          return reject(error);
        });
      });
    }
  }, {
    key: 'testApiKey',
    value: function testApiKey(key) {
      return new Promise(function (resolve, reject) {
        var opts = {
          method: 'GET',
          url: 'https://api.openai.com/v1/models',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + key
          }
        };
        Utils.performRequest(opts).then(function (resp) {
          return resp.json();
        }).then(function (ret) {
          if (ret.data == null) reject(new Error('Invalid API key'));else resolve(true);
        }).catch(function (error) {
          reject(error);
        });
      });
    }
  }]);
  return ChatGPTBackground;
}();

module.exports = ChatGPTBackground;

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__v1_js__ = __webpack_require__(96);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v1", function() { return __WEBPACK_IMPORTED_MODULE_0__v1_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__v3_js__ = __webpack_require__(98);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v3", function() { return __WEBPACK_IMPORTED_MODULE_1__v3_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__v4_js__ = __webpack_require__(100);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v4", function() { return __WEBPACK_IMPORTED_MODULE_2__v4_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__v5_js__ = __webpack_require__(102);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v5", function() { return __WEBPACK_IMPORTED_MODULE_3__v5_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nil_js__ = __webpack_require__(104);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NIL", function() { return __WEBPACK_IMPORTED_MODULE_4__nil_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__version_js__ = __webpack_require__(105);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return __WEBPACK_IMPORTED_MODULE_5__version_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validate_js__ = __webpack_require__(48);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return __WEBPACK_IMPORTED_MODULE_6__validate_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stringify_js__ = __webpack_require__(47);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return __WEBPACK_IMPORTED_MODULE_7__stringify_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__parse_js__ = __webpack_require__(89);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return __WEBPACK_IMPORTED_MODULE_8__parse_js__["a"]; });










/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rng_js__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stringify_js__ = __webpack_require__(47);

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

let _nodeId;

let _clockseq; // Previous uuid creation time


let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || __WEBPACK_IMPORTED_MODULE_0__rng_js__["a" /* default */])();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || Object(__WEBPACK_IMPORTED_MODULE_1__stringify_js__["b" /* unsafeStringify */])(b);
}

/* harmony default export */ __webpack_exports__["a"] = (v1);

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__v35_js__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__md5_js__ = __webpack_require__(99);


const v3 = Object(__WEBPACK_IMPORTED_MODULE_0__v35_js__["a" /* default */])('v3', 0x30, __WEBPACK_IMPORTED_MODULE_1__md5_js__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (v3);

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (let i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  const output = [];
  const length32 = input.length * 32;
  const hexTab = '0123456789abcdef';

  for (let i = 0; i < length32; i += 8) {
    const x = input[i >> 5] >>> i % 32 & 0xff;
    const hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  let a = 1732584193;
  let b = -271733879;
  let c = -1732584194;
  let d = 271733878;

  for (let i = 0; i < x.length; i += 16) {
    const olda = a;
    const oldb = b;
    const oldc = c;
    const oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  const length8 = input.length * 8;
  const output = new Uint32Array(getOutputLength(length8));

  for (let i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  const lsw = (x & 0xffff) + (y & 0xffff);
  const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

/* harmony default export */ __webpack_exports__["a"] = (md5);

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__native_js__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rng_js__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stringify_js__ = __webpack_require__(47);




function v4(options, buf, offset) {
  if (__WEBPACK_IMPORTED_MODULE_0__native_js__["a" /* default */].randomUUID && !buf && !options) {
    return __WEBPACK_IMPORTED_MODULE_0__native_js__["a" /* default */].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || __WEBPACK_IMPORTED_MODULE_1__rng_js__["a" /* default */])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return Object(__WEBPACK_IMPORTED_MODULE_2__stringify_js__["b" /* unsafeStringify */])(rnds);
}

/* harmony default export */ __webpack_exports__["a"] = (v4);

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ __webpack_exports__["a"] = ({
  randomUUID
});

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__v35_js__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sha1_js__ = __webpack_require__(103);


const v5 = Object(__WEBPACK_IMPORTED_MODULE_0__v35_js__["a" /* default */])('v5', 0x50, __WEBPACK_IMPORTED_MODULE_1__sha1_js__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (v5);

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  const K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  const H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (let i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  const l = bytes.length / 4 + 2;
  const N = Math.ceil(l / 16);
  const M = new Array(N);

  for (let i = 0; i < N; ++i) {
    const arr = new Uint32Array(16);

    for (let j = 0; j < 16; ++j) {
      arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
    }

    M[i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (let i = 0; i < N; ++i) {
    const W = new Uint32Array(80);

    for (let t = 0; t < 16; ++t) {
      W[t] = M[i][t];
    }

    for (let t = 16; t < 80; ++t) {
      W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
    }

    let a = H[0];
    let b = H[1];
    let c = H[2];
    let d = H[3];
    let e = H[4];

    for (let t = 0; t < 80; ++t) {
      const s = Math.floor(t / 20);
      const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

/* harmony default export */ __webpack_exports__["a"] = (sha1);

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ('00000000-0000-0000-0000-000000000000');

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validate_js__ = __webpack_require__(48);


function version(uuid) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__validate_js__["a" /* default */])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.slice(14, 15), 16);
}

/* harmony default export */ __webpack_exports__["a"] = (version);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWEzMzNjODYxYzRhNWNjMjVlZDQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL3V0aWxzL1V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wZXJmb3JtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9jaGF0aW4vUHJvbXB0U3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjM1LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9taW5kbWVpc3Rlci9NaW5kbWVpc3RlckJhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvY2hhdGdwdC9DaGF0R1BUQmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3YzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbWQ1LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3NoYTEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uaWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92ZXJzaW9uLmpzIl0sIm5hbWVzIjpbIlV0aWxzIiwiaGV4IiwicmVzdWx0IiwiZXhlYyIsInIiLCJwYXJzZUludCIsImciLCJiIiwibXMiLCJQcm9taXNlIiwic2V0VGltZW91dCIsInJlc29sdmUiLCJvcHRzIiwicmVxT3B0aW9ucyIsInJlbWFpbmluZ0F0dGVtcHRzIiwiYXR0ZW1wdCIsInRoYXQiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXJzIiwiaW5jbHVkZXMiLCJwYXJhbXMiLCJmb3JtQm9keSIsInByb3BlcnR5IiwiZW5jb2RlZEtleSIsImVuY29kZVVSSUNvbXBvbmVudCIsImVuY29kZWRWYWx1ZSIsInB1c2giLCJqb2luIiwiVVJMU2VhcmNoUGFyYW1zIiwiZmV0Y2giLCJyZXNwb25zZSIsIm9rIiwiaW50ZXJ2YWwiLCJNYXRoIiwicG93Iiwic2xlZXAiLCJwZXJmb3JtUmVxdWVzdCIsInJlamVjdCIsIm1lc3NhZ2UiLCJjYXVzZSIsImNvZGUiLCJzdGF0dXMiLCJ0ZXh0IiwibGluZUNoYXJzIiwibmV3VGV4dCIsInJlbWFpbmRlciIsInN1YnN0cmluZyIsIm5leHRCbGFuayIsImluZGV4T2YiLCJsZW5ndGgiLCJtb2R1bGUiLCJleHBvcnRzIiwiUHJvbXB0U3R5bGVzIiwiUXVlc3Rpb25Qcm9tcHQiLCJsaW5lX3Bvc2l0aW9uIiwiQW5zd2VySXRlbSIsIlF1ZXN0aW9uUHJvbXB0QVBJIiwiQW5zd2VySXRlbUFQSSIsIk1pbmRtZWlzdGVyQmFja2dyb3VuZCIsInJlcXVpcmUiLCJDaGF0R1BUQmFja2dyb3VuZCIsIkJhY2tncm91bmQiLCJfbWluZG1laXN0ZXJNYW5hZ2VyIiwiX2NoYXRHUFRNYW5hZ2VyIiwiaW5pdCIsImJhY2tncm91bmQiLCJBUElDbGllbnRJZCIsIlRva2VuU3RvcmFnZUtleSIsIl9jdXJyZW50Tm9kZUlkIiwiX2N1cnJlbnRDaGFuZ2VJZCIsIl9jc3JmVG9rZW4iLCJjaHJvbWUiLCJydW50aW1lIiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJzY29wZSIsImFjdGlvbiIsImNoZWNrVG9rZW4iLCJ0aGVuIiwiZXJyb3IiLCJhdXRob3JpemUiLCJnZXRNYXAiLCJhcmdzIiwibWFwSWQiLCJyc3AiLCJjcmVhdGVNaW5kbWFwRnJvbVRlbXBsYXRlIiwidGVtcGxhdGVGaWxlVXJsIiwiZ2V0QmVsb25naW5nTWFwIiwibm9kZUlkIiwiYWRkTm9kZXMiLCJuZXdOb2RlcyIsIm1vZGlmeU5vZGVzIiwibm9kZXMiLCJkb0FjdGlvbnMiLCJpbnNlcnRpb25zIiwidXBkYXRlcyIsImRlbGV0aW9ucyIsImxpbmtTaGFyZSIsIndlYlJlcXVlc3QiLCJvblNlbmRIZWFkZXJzIiwiZGV0YWlscyIsImkiLCJyZXF1ZXN0SGVhZGVycyIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsInZhbHVlIiwiX2Nvb2tpZSIsInVybHMiLCJpZGVudGl0eSIsImxhdW5jaFdlYkF1dGhGbG93IiwiaW50ZXJhY3RpdmUiLCJpZCIsInVybFBhcmFtcyIsInJlcGxhY2UiLCJ0b2tlbiIsImdldCIsInN0b3JlVG9rZW4iLCJzdG9yYWdlIiwic3luYyIsInNldCIsInJlbW92ZSIsIm9wdGlvbnMiLCJnZXRUb2tlbiIsIml0ZW1zIiwiYWNjZXNzX3Rva2VuIiwicmVzcCIsImpzb24iLCJyZXQiLCJzdGF0IiwicmVtb3ZlVG9rZW4iLCJkYXRhIiwiaWRlYV9pZCIsImlzRW1iZWRkZWRWaWV3IiwiaXNQcmludFZpZXciLCJpc1B1YmxpY1ZpZXciLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm1hcCIsIm1hcF9pZCIsImVyciIsIm1zZyIsImltYWdlIiwibWluZG1laXN0ZXJOYW1lIiwiZmlsZSIsImNoYW5nZUxpc3QiLCJub2RlIiwiZ2V0Q3VycmVudE5vZGVJZCIsImNoYW5nZUlkIiwiZ2V0Q3VycmVudENoYW5nZUlkIiwiaW5zZXJ0QWN0aW9uIiwicGFyZW50SWQiLCJwcmV0dGlmeU5vZGVUZXh0IiwiYWRkQ2hhbmdlIiwibm90ZSIsIm5vdGVBY3Rpb24iLCJzdHlsZSIsInN0eWxlQWN0aW9uIiwiaW1hZ2VJZCIsImdldEltYWdlSWQiLCJhZGRJbWFnZUFjdGlvbiIsIm5ld19kYXRhIiwicmVzaXplSW1hZ2VBY3Rpb24iLCJwcm9taXNlTGlzdCIsImltYWdlcyIsImZvckVhY2giLCJyZXMiLCJyZWoiLCJ1cGxvYWRJbWFnZSIsInNldEltYWdlSWQiLCJhbGwiLCJDaGFuZ2VMaXN0IiwibiIsImhhc0ltYWdlIiwiYWRkSW1hZ2UiLCJ1cGxvYWROZWNjZXNhcnlJbWFnZXNGb3JDaGFuZ2VMaXN0IiwiYWRkTm9kZVRvQ2hhbmdlTGlzdCIsImRvQ2hhbmdlcyIsImNoYW5nZXMiLCJtb2RpZnlOb2RlVG9DaGFuZ2VMaXN0Iiwicm9vdF9pZCIsImVycm9ycyIsImNsaWVudF9yZXZpc2lvbiIsImZpbGVVcmwiLCJhcnJheUJ1ZmZlciIsImdldEZpbGVCeVVybCIsImJsb2IiLCJGaWxlIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJkIiwiY2F0Y2giLCJwZXJtaXNzaW9uIiwiX2NoYW5nZUxpc3QiLCJfaW1hZ2VzIiwiZmluZCIsImltZyIsImNoYW5nZSIsInV1aWR2NCIsInY0IiwiQ2hhdEdQVE1vZGVTdG9yYWdlS2V5IiwiQ2hhdEdQVEFQSUtleVN0b3JhZ2VLZXkiLCJfbW9kZSIsInBlcmZvcm1RdWVzdGlvbiIsInF1ZXN0aW9uIiwiZ2V0TW9kZSIsIm1vZGUiLCJzZXRNb2RlIiwiZ2V0QXBpS2V5Iiwic2V0QXBpS2V5IiwiYXBpS2V5IiwicGVyZm9ybVF1ZXN0aW9uTG9naW4iLCJwZXJmb3JtUXVlc3Rpb25BUElLZXkiLCJhY2Nlc3NUb2tlbiIsIkVycm9yIiwiY29udmVyc2F0aW9uSWQiLCJyZWFkZXIiLCJnZXRSZWFkZXIiLCJzdHIiLCJyZWFkIiwiZG9uZSIsInN0cjIiLCJUZXh0RGVjb2RlciIsImRlY29kZSIsImRhdGFDaHVua3MiLCJzcGxpdCIsImRhdGFKc29uIiwicGFyc2UiLCJjb252ZXJzYXRpb24iLCJhbnN3ZXIiLCJjb252ZXJzYXRpb25faWQiLCJyZW1vdmVDb252ZXJzYXRpb24iLCJjb250ZW50IiwicGFydHMiLCJfYXBpS2V5IiwiY2hvaWNlcyIsImUiLCJrZXkiLCJ0ZXN0QXBpS2V5Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qzs7Ozs7OztBQ0x6QyxZQUFZLG1CQUFPLENBQUMsRUFBVztBQUMvQixVQUFVLG1CQUFPLENBQUMsRUFBUTtBQUMxQixhQUFhLG1CQUFPLENBQUMsQ0FBVztBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNWYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUNSYTs7QUFFYjs7QUFFQSxzQkFBc0IsbUJBQU8sQ0FBQyxFQUFtQzs7QUFFakU7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEc7Ozs7OztBQzFCRCw2QkFBNkI7QUFDN0IsdUNBQXVDOzs7Ozs7O0FDRHZDO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsRUFBVTtBQUNwQyxpQ0FBaUMsUUFBUSxtQkFBbUIsVUFBVSxFQUFFLEVBQUU7QUFDMUUsQ0FBQzs7Ozs7OztBQ0hELGVBQWUsbUJBQU8sQ0FBQyxDQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSkEsU0FBUyxtQkFBTyxDQUFDLENBQWM7QUFDL0IsaUJBQWlCLG1CQUFPLENBQUMsRUFBa0I7QUFDM0MsaUJBQWlCLG1CQUFPLENBQUMsQ0FBZ0I7QUFDekM7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOzs7Ozs7O0FDUEE7QUFDQTtBQUNBOzs7Ozs7O0FDRkEsZUFBZSxtQkFBTyxDQUFDLENBQWM7QUFDckMscUJBQXFCLG1CQUFPLENBQUMsRUFBbUI7QUFDaEQsa0JBQWtCLG1CQUFPLENBQUMsRUFBaUI7QUFDM0M7O0FBRUEsWUFBWSxtQkFBTyxDQUFDLENBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLFlBQVk7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2ZBLGFBQWEsbUJBQU8sQ0FBQyxDQUFXO0FBQ2hDLFdBQVcsbUJBQU8sQ0FBQyxDQUFTO0FBQzVCLFVBQVUsbUJBQU8sQ0FBQyxFQUFRO0FBQzFCLFdBQVcsbUJBQU8sQ0FBQyxDQUFTO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFO0FBQ2pFO0FBQ0Esa0ZBQWtGO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLGNBQWM7QUFDZCxjQUFjO0FBQ2QsY0FBYztBQUNkLGVBQWU7QUFDZixlQUFlO0FBQ2YsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQjs7Ozs7OztBQzVEQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLEVBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSEE7Ozs7Ozs7QUNBQSxlQUFlLG1CQUFPLENBQUMsQ0FBYztBQUNyQyxlQUFlLG1CQUFPLENBQUMsQ0FBVztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTkEsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTs7Ozs7OztBQ0hBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSkE7QUFDQSxjQUFjLG1CQUFPLENBQUMsRUFBWTtBQUNsQyxjQUFjLG1CQUFPLENBQUMsRUFBWTtBQUNsQztBQUNBO0FBQ0E7Ozs7Ozs7QUNMQSxhQUFhLG1CQUFPLENBQUMsRUFBVztBQUNoQyxVQUFVLG1CQUFPLENBQUMsRUFBUTtBQUMxQjtBQUNBO0FBQ0E7Ozs7Ozs7QUNKQSxVQUFVLG1CQUFPLENBQUMsQ0FBYztBQUNoQyxVQUFVLG1CQUFPLENBQUMsRUFBUTtBQUMxQixVQUFVLG1CQUFPLENBQUMsQ0FBUTs7QUFFMUI7QUFDQSxvRUFBb0UsaUNBQWlDO0FBQ3JHOzs7Ozs7OztBQ05hO0FBQ2I7QUFDQSxnQkFBZ0IsbUJBQU8sQ0FBQyxFQUFlOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pCQSxrQkFBa0IsWUFBWSxtQkFBTyxDQUFDLEVBQTJDLHNCOzs7Ozs7QUNBakYsbUJBQU8sQ0FBQyxFQUEwQztBQUNsRCxjQUFjLG1CQUFPLENBQUMsQ0FBcUI7QUFDM0M7QUFDQTtBQUNBOzs7Ozs7O0FDSkEsY0FBYyxtQkFBTyxDQUFDLEVBQVc7QUFDakM7QUFDQSxpQ0FBaUMsbUJBQU8sQ0FBQyxDQUFnQixjQUFjLGlCQUFpQixtQkFBTyxDQUFDLENBQWMsS0FBSzs7Ozs7OztBQ0ZuSCxrQkFBa0IsbUJBQU8sQ0FBQyxDQUFnQixNQUFNLG1CQUFPLENBQUMsRUFBVTtBQUNsRSwrQkFBK0IsbUJBQU8sQ0FBQyxFQUFlLGdCQUFnQixtQkFBbUIsVUFBVSxFQUFFLEVBQUU7QUFDdkcsQ0FBQzs7Ozs7OztBQ0ZEO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLENBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNYTUEsSzs7Ozs7Ozs2QkFDYUMsRyxFQUFLO0FBQ3BCLFVBQUlDLFNBQVMsNENBQTRDQyxJQUE1QyxDQUFpREYsR0FBakQsQ0FBYjtBQUNBLGFBQU9DLFNBQVM7QUFDZEUsV0FBR0MsU0FBU0gsT0FBTyxDQUFQLENBQVQsRUFBb0IsRUFBcEIsQ0FEVztBQUVkSSxXQUFHRCxTQUFTSCxPQUFPLENBQVAsQ0FBVCxFQUFvQixFQUFwQixDQUZXO0FBR2RLLFdBQUdGLFNBQVNILE9BQU8sQ0FBUCxDQUFULEVBQW9CLEVBQXBCO0FBSFcsT0FBVCxHQUlILElBSko7QUFLRDs7OzBCQUNhTSxFLEVBQUk7QUFDaEIsYUFBTyxJQUFJQyxPQUFKLENBQVk7QUFBQSxlQUFXQyxXQUFXQyxPQUFYLEVBQW9CSCxFQUFwQixDQUFYO0FBQUEsT0FBWixDQUFQO0FBQ0Q7Ozs7MkdBQzRCSSxJO1lBQU1DLFUsdUVBQWEsRUFBQ0MsbUJBQW1CLENBQXBCLEVBQXVCQyxTQUFTLENBQWhDLEU7Ozs7OztBQUMxQ0Msb0IsR0FBTyxJO0FBQ1BDLG1CLEdBQU1MLEtBQUtLLEc7QUFDWGIsaUIsR0FBSTtBQUNOYywwQkFBUU4sS0FBS00sTUFBTCxJQUFlLEtBRGpCO0FBRU5DLDJCQUFTUCxLQUFLTyxPQUFMLElBQWdCO0FBRm5CLGlCOzhCQUlBUCxLQUFLTSxNO2dEQUNOLE0sdUJBZUEsSyx1QkFHQSxRLHdCQUdBLE8sd0JBR0EsSzs7OztBQXZCSDtBQUNBLG9CQUFJZCxFQUFFZSxPQUFGLENBQVUsY0FBVixLQUE2QixJQUE3QixJQUFxQ2YsRUFBRWUsT0FBRixDQUFVLGNBQVYsRUFBMEJDLFFBQTFCLENBQW1DLGtCQUFuQyxDQUF6QyxFQUFpRztBQUMvRmhCLG9CQUFFLE1BQUYsSUFBWVEsS0FBS1MsTUFBakI7QUFDRCxpQkFGRCxNQUVPLElBQUlqQixFQUFFZSxPQUFGLENBQVUsY0FBVixFQUEwQkMsUUFBMUIsQ0FBbUMsbUNBQW5DLENBQUosRUFBNEU7QUFDN0VFLDBCQUQ2RSxHQUNsRSxFQURrRTs7QUFFakYsdUJBQVNDLFFBQVQsSUFBcUJYLEtBQUtTLE1BQTFCLEVBQWtDO0FBQzVCRyw4QkFENEIsR0FDZkMsbUJBQW1CRixRQUFuQixDQURlO0FBRTVCRyxnQ0FGNEIsR0FFYkQsbUJBQW1CYixLQUFLUyxNQUFMLENBQVlFLFFBQVosQ0FBbkIsQ0FGYTs7QUFHaENELDZCQUFTSyxJQUFULENBQWNILGFBQWEsR0FBYixHQUFtQkUsWUFBakM7QUFDRDtBQUNESiw2QkFBV0EsU0FBU00sSUFBVCxDQUFjLEdBQWQsQ0FBWDtBQUNBeEIsb0JBQUUsTUFBRixJQUFZa0IsUUFBWjtBQUNEOzs7O0FBR0RMLHVCQUFPLE1BQU0sSUFBSVksZUFBSixDQUFvQmpCLEtBQUtTLE1BQXpCLENBQWI7Ozs7Ozs7QUFNQWpCLGtCQUFFLE1BQUYsSUFBWVEsS0FBS1MsTUFBakI7Ozs7Ozs7O3VCQU1pQlMsTUFBTWIsR0FBTixFQUFXYixDQUFYLEM7OztBQUFqQjJCLHdCOztxQkFDQUEsU0FBU0MsRTs7Ozs7aURBQ0pELFE7OztzQkFJSGxCLFdBQVdDLGlCQUFYLEdBQStCLEM7Ozs7O0FBQzdCbUIsd0IsR0FBVyxNQUFNQyxLQUFLQyxHQUFMLENBQVMsQ0FBVCxFQUFZdEIsV0FBV0UsT0FBdkIsQyxFQUFnQzs7O3VCQUMvQ0MsS0FBS29CLEtBQUwsQ0FBV0gsUUFBWCxDOzs7QUFDTnBCLDJCQUFXQyxpQkFBWDtBQUNBRCwyQkFBV0UsT0FBWDtpREFDT0MsS0FBS3FCLGNBQUwsQ0FBb0J6QixJQUFwQixFQUEwQkMsVUFBMUIsQzs7O2lEQUVBSixRQUFRNkIsTUFBUixDQUFlLEVBQUNDLFNBQVMsZUFBVixFQUEyQkMsT0FBTyxFQUFDQyxNQUFNVixTQUFTVyxNQUFoQixFQUFsQyxFQUEyRFgsVUFBVUEsUUFBckUsRUFBZixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBS1lZLEksRUFBTTtBQUM3QixVQUFNQyxZQUFZLEVBQWxCO0FBQ0EsVUFBSUMsVUFBVSxFQUFkO0FBQ0EsVUFBSUMsWUFBWUgsSUFBaEI7QUFDQSxTQUFHO0FBQ0RFLGtCQUFVQSxVQUFVQyxVQUFVQyxTQUFWLENBQW9CLENBQXBCLEVBQXVCSCxZQUFVLENBQWpDLENBQXBCO0FBQ0FFLG9CQUFZQSxVQUFVQyxTQUFWLENBQW9CSCxZQUFZLENBQWhDLENBQVo7QUFDQSxZQUFJSSxZQUFZRixVQUFVRyxPQUFWLENBQWtCLEdBQWxCLENBQWhCO0FBQ0EsWUFBSUQsYUFBYSxDQUFDLENBQWxCLEVBQW9CO0FBQ2xCSCxxQkFBV0MsU0FBWDtBQUNBQSxzQkFBWSxFQUFaO0FBQ0QsU0FIRCxNQUdPO0FBQ0xELHFCQUFXQyxVQUFVQyxTQUFWLENBQW9CLENBQXBCLEVBQXVCQyxTQUF2QixJQUFvQyxJQUEvQztBQUNBRixzQkFBWUEsVUFBVUMsU0FBVixDQUFvQkMsWUFBWSxDQUFoQyxDQUFaO0FBQ0Q7QUFDRixPQVhELFFBV1NGLFVBQVVJLE1BQVYsR0FBbUIsQ0FYNUI7QUFZQSxhQUFPTCxPQUFQO0FBQ0Q7Ozs7O0FBR0hNLE9BQU9DLE9BQVAsR0FBaUJwRCxLQUFqQixDOzs7Ozs7O0FDdEZhO0FBQ2IsY0FBYyxtQkFBTyxDQUFDLEVBQVk7QUFDbEMsY0FBYyxtQkFBTyxDQUFDLEVBQVc7QUFDakMsZUFBZSxtQkFBTyxDQUFDLEVBQWE7QUFDcEMsV0FBVyxtQkFBTyxDQUFDLENBQVM7QUFDNUIsVUFBVSxtQkFBTyxDQUFDLEVBQVE7QUFDMUIsZ0JBQWdCLG1CQUFPLENBQUMsRUFBYztBQUN0QyxrQkFBa0IsbUJBQU8sQ0FBQyxFQUFnQjtBQUMxQyxxQkFBcUIsbUJBQU8sQ0FBQyxFQUFzQjtBQUNuRCxxQkFBcUIsbUJBQU8sQ0FBQyxFQUFlO0FBQzVDLGVBQWUsbUJBQU8sQ0FBQyxDQUFRO0FBQy9CLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7O0FBRUEsOEJBQThCLGFBQWE7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsb0NBQW9DO0FBQzdFLDZDQUE2QyxvQ0FBb0M7QUFDakYsS0FBSyw0QkFBNEIsb0NBQW9DO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7QUFDQSxrQ0FBa0MsMkJBQTJCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7OztBQ3JFQTs7Ozs7OztBQ0FBO0FBQ0EsZ0JBQWdCLG1CQUFPLENBQUMsRUFBZTtBQUN2QztBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEOzs7Ozs7O0FDTEEsYUFBYSxtQkFBTyxDQUFDLENBQVc7QUFDaEM7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQSx1Q0FBdUM7QUFDdkM7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNIQSxlQUFlLG1CQUFPLENBQUMsQ0FBVztBQUNsQzs7Ozs7OztBQ0RBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLEVBQVE7QUFDMUIsVUFBVSxtQkFBTyxDQUFDLENBQVE7QUFDMUI7QUFDQSwyQkFBMkIsa0JBQWtCLEVBQUU7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxZQUFZO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN0QkE7QUFDQSxlQUFlLG1CQUFPLENBQUMsQ0FBYztBQUNyQyxnQkFBZ0IsbUJBQU8sQ0FBQyxFQUFlO0FBQ3ZDLGNBQWMsbUJBQU8sQ0FBQyxDQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNSQSxVQUFVLG1CQUFPLENBQUMsRUFBUTtBQUMxQixhQUFhLG1CQUFPLENBQUMsRUFBVztBQUNoQyxXQUFXLG1CQUFPLENBQUMsRUFBUztBQUM1QixVQUFVLG1CQUFPLENBQUMsRUFBZTtBQUNqQyxhQUFhLG1CQUFPLENBQUMsQ0FBVztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtQkFBTyxDQUFDLEVBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbkZBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osR0FBRztBQUNILFlBQVk7QUFDWjtBQUNBOzs7Ozs7O0FDTkEsZUFBZSxtQkFBTyxDQUFDLENBQWM7QUFDckMsZUFBZSxtQkFBTyxDQUFDLENBQWM7QUFDckMsMkJBQTJCLG1CQUFPLENBQUMsRUFBMkI7O0FBRTlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ1hBLGlCQUFpQixtQkFBTyxDQUFDLEVBQXFCOzs7Ozs7OztBQ0FqQzs7QUFFYjs7QUFFQSxlQUFlLG1CQUFPLENBQUMsRUFBb0I7O0FBRTNDOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEU7Ozs7Ozs7QUNyQ0E7QUFBQTtBQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8scUVBQVE7QUFDZjtBQUNBOztBQUVBO0FBQ0E7O0FBRWUsa0VBQVMsRTs7Ozs7OztBQ2hDeEI7QUFBK0I7O0FBRS9CO0FBQ0EscUNBQXFDLDBEQUFLO0FBQzFDOztBQUVlLGlFQUFRLEU7Ozs7Ozs7QUNOdkI7QUFDQTtBQUNBLHFCQUFxQixjQUFjOztBQUVuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLG1CQUFPLENBQUMsRUFBVzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0I7Ozs7Ozs7QUN6dEJBLGtCQUFrQixZQUFZLG1CQUFPLENBQUMsRUFBNEIsc0I7Ozs7OztBQ0FsRSxtQkFBTyxDQUFDLEVBQWlDO0FBQ3pDLG1CQUFPLENBQUMsRUFBZ0M7QUFDeEMsbUJBQU8sQ0FBQyxFQUE2QjtBQUNyQyxtQkFBTyxDQUFDLEVBQXdCO0FBQ2hDLG1CQUFPLENBQUMsRUFBZ0M7QUFDeEMsbUJBQU8sQ0FBQyxFQUE0QjtBQUNwQyxpQkFBaUIsbUJBQU8sQ0FBQyxDQUFrQjs7Ozs7Ozs7Ozs7Ozs7QUNOOUI7QUFDYixVQUFVLG1CQUFPLENBQUMsRUFBYzs7QUFFaEM7QUFDQSxtQkFBTyxDQUFDLEVBQWdCO0FBQ3hCLDZCQUE2QjtBQUM3QixjQUFjO0FBQ2Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsQ0FBQzs7Ozs7OztBQ2hCRCxnQkFBZ0IsbUJBQU8sQ0FBQyxFQUFlO0FBQ3ZDLGNBQWMsbUJBQU8sQ0FBQyxFQUFZO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2hCQSxpQkFBaUIsbUJBQU8sQ0FBQyxDQUFTOzs7Ozs7OztBQ0FyQjtBQUNiLGFBQWEsbUJBQU8sQ0FBQyxFQUFrQjtBQUN2QyxpQkFBaUIsbUJBQU8sQ0FBQyxFQUFrQjtBQUMzQyxxQkFBcUIsbUJBQU8sQ0FBQyxFQUFzQjtBQUNuRDs7QUFFQTtBQUNBLG1CQUFPLENBQUMsQ0FBUyxxQkFBcUIsbUJBQU8sQ0FBQyxDQUFRLDRCQUE0QixhQUFhLEVBQUU7O0FBRWpHO0FBQ0EscURBQXFELDRCQUE0QjtBQUNqRjtBQUNBOzs7Ozs7O0FDWkE7QUFDQSxlQUFlLG1CQUFPLENBQUMsQ0FBYztBQUNyQyxVQUFVLG1CQUFPLENBQUMsRUFBZTtBQUNqQyxrQkFBa0IsbUJBQU8sQ0FBQyxFQUFrQjtBQUM1QyxlQUFlLG1CQUFPLENBQUMsRUFBZTtBQUN0Qyx5QkFBeUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLEVBQWU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUJBQU8sQ0FBQyxFQUFTO0FBQ25CLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7QUN4Q0EsU0FBUyxtQkFBTyxDQUFDLENBQWM7QUFDL0IsZUFBZSxtQkFBTyxDQUFDLENBQWM7QUFDckMsY0FBYyxtQkFBTyxDQUFDLEVBQWdCOztBQUV0QyxpQkFBaUIsbUJBQU8sQ0FBQyxDQUFnQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDWkE7QUFDQSxZQUFZLG1CQUFPLENBQUMsRUFBeUI7QUFDN0Msa0JBQWtCLG1CQUFPLENBQUMsRUFBa0I7O0FBRTVDO0FBQ0E7QUFDQTs7Ozs7OztBQ05BLFVBQVUsbUJBQU8sQ0FBQyxFQUFRO0FBQzFCLGdCQUFnQixtQkFBTyxDQUFDLEVBQWU7QUFDdkMsbUJBQW1CLG1CQUFPLENBQUMsRUFBbUI7QUFDOUMsZUFBZSxtQkFBTyxDQUFDLEVBQWU7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2hCQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyxFQUFRO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTEE7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLEVBQWU7QUFDdkMsZUFBZSxtQkFBTyxDQUFDLEVBQWM7QUFDckMsc0JBQXNCLG1CQUFPLENBQUMsRUFBc0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLFlBQVksZUFBZTtBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7O0FDdEJBLGdCQUFnQixtQkFBTyxDQUFDLEVBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTkE7QUFDQSxVQUFVLG1CQUFPLENBQUMsRUFBUTtBQUMxQixlQUFlLG1CQUFPLENBQUMsRUFBYztBQUNyQyxlQUFlLG1CQUFPLENBQUMsRUFBZTtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7O0FDWkE7QUFDQSxjQUFjLG1CQUFPLENBQUMsRUFBWTtBQUNsQztBQUNBO0FBQ0E7Ozs7Ozs7QUNKQSxtQkFBTyxDQUFDLEVBQXNCO0FBQzlCLGFBQWEsbUJBQU8sQ0FBQyxDQUFXO0FBQ2hDLFdBQVcsbUJBQU8sQ0FBQyxDQUFTO0FBQzVCLGdCQUFnQixtQkFBTyxDQUFDLEVBQWM7QUFDdEMsb0JBQW9CLG1CQUFPLENBQUMsQ0FBUTs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLHlCQUF5QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbEJhO0FBQ2IsdUJBQXVCLG1CQUFPLENBQUMsRUFBdUI7QUFDdEQsV0FBVyxtQkFBTyxDQUFDLEVBQWM7QUFDakMsZ0JBQWdCLG1CQUFPLENBQUMsRUFBYztBQUN0QyxnQkFBZ0IsbUJBQU8sQ0FBQyxFQUFlOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixtQkFBTyxDQUFDLEVBQWdCO0FBQ3pDLGdDQUFnQztBQUNoQyxjQUFjO0FBQ2QsaUJBQWlCO0FBQ2pCO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pDQSw4QkFBOEI7Ozs7Ozs7QUNBOUI7QUFDQSxVQUFVO0FBQ1Y7Ozs7Ozs7O0FDRmE7QUFDYixjQUFjLG1CQUFPLENBQUMsRUFBWTtBQUNsQyxhQUFhLG1CQUFPLENBQUMsQ0FBVztBQUNoQyxVQUFVLG1CQUFPLENBQUMsRUFBUTtBQUMxQixjQUFjLG1CQUFPLENBQUMsRUFBWTtBQUNsQyxjQUFjLG1CQUFPLENBQUMsRUFBVztBQUNqQyxlQUFlLG1CQUFPLENBQUMsQ0FBYztBQUNyQyxnQkFBZ0IsbUJBQU8sQ0FBQyxFQUFlO0FBQ3ZDLGlCQUFpQixtQkFBTyxDQUFDLEVBQWdCO0FBQ3pDLFlBQVksbUJBQU8sQ0FBQyxFQUFXO0FBQy9CLHlCQUF5QixtQkFBTyxDQUFDLEVBQXdCO0FBQ3pELFdBQVcsbUJBQU8sQ0FBQyxFQUFTO0FBQzVCLGdCQUFnQixtQkFBTyxDQUFDLEVBQWM7QUFDdEMsaUNBQWlDLG1CQUFPLENBQUMsRUFBMkI7QUFDcEUsY0FBYyxtQkFBTyxDQUFDLEVBQVk7QUFDbEMscUJBQXFCLG1CQUFPLENBQUMsRUFBb0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLEVBQUUsbUJBQU8sQ0FBQyxDQUFRO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxZQUFZO0FBQ2YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULG1CQUFtQixrQ0FBa0M7QUFDckQsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGVBQWUsdUNBQXVDO0FBQ3REO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMEJBQTBCO0FBQ2pEO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsa0JBQWtCLHlCQUF5QixLQUFLO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsd0JBQXdCO0FBQ3hCLGdCQUFnQjtBQUNoQixvQkFBb0I7QUFDcEIsd0JBQXdCO0FBQ3hCLGdCQUFnQjtBQUNoQixvQkFBb0I7QUFDcEI7QUFDQSx1QkFBdUIsbUJBQU8sQ0FBQyxFQUFpQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMERBQTBELG9CQUFvQjtBQUM5RSxtQkFBTyxDQUFDLEVBQXNCO0FBQzlCLG1CQUFPLENBQUMsRUFBZ0I7QUFDeEIsVUFBVSxtQkFBTyxDQUFDLENBQVM7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGdEQUFnRCxtQkFBTyxDQUFDLEVBQWdCO0FBQ3hFO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7OztBQ3ZSRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7QUNKQSxVQUFVLG1CQUFPLENBQUMsRUFBUTtBQUMxQixXQUFXLG1CQUFPLENBQUMsRUFBYztBQUNqQyxrQkFBa0IsbUJBQU8sQ0FBQyxFQUFrQjtBQUM1QyxlQUFlLG1CQUFPLENBQUMsQ0FBYztBQUNyQyxlQUFlLG1CQUFPLENBQUMsRUFBYztBQUNyQyxnQkFBZ0IsbUJBQU8sQ0FBQyxFQUE0QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsaUJBQWlCLEVBQUU7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxnQkFBZ0I7QUFDbkY7QUFDQTtBQUNBLEdBQUcsNENBQTRDLGdDQUFnQztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN4QkE7QUFDQSxlQUFlLG1CQUFPLENBQUMsQ0FBYztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDWEE7QUFDQSxnQkFBZ0IsbUJBQU8sQ0FBQyxFQUFjO0FBQ3RDLGVBQWUsbUJBQU8sQ0FBQyxDQUFRO0FBQy9COztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ1BBLGNBQWMsbUJBQU8sQ0FBQyxFQUFZO0FBQ2xDLGVBQWUsbUJBQU8sQ0FBQyxDQUFRO0FBQy9CLGdCQUFnQixtQkFBTyxDQUFDLEVBQWM7QUFDdEMsaUJBQWlCLG1CQUFPLENBQUMsQ0FBUztBQUNsQztBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7QUNmQSxhQUFhLG1CQUFPLENBQUMsQ0FBVztBQUNoQyxnQkFBZ0IsbUJBQU8sQ0FBQyxFQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUJBQU8sQ0FBQyxFQUFROztBQUU3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLHVDQUF1QyxzQkFBc0IsRUFBRTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7QUNuRUEsV0FBVyxtQkFBTyxDQUFDLENBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7O0FDTmE7QUFDYixhQUFhLG1CQUFPLENBQUMsQ0FBVztBQUNoQyxXQUFXLG1CQUFPLENBQUMsQ0FBUztBQUM1QixTQUFTLG1CQUFPLENBQUMsQ0FBYztBQUMvQixrQkFBa0IsbUJBQU8sQ0FBQyxDQUFnQjtBQUMxQyxjQUFjLG1CQUFPLENBQUMsQ0FBUTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsYUFBYTtBQUNuQyxHQUFHO0FBQ0g7Ozs7Ozs7QUNiQSxlQUFlLG1CQUFPLENBQUMsQ0FBUTtBQUMvQjs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLHFCQUFxQjtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLEVBQUU7QUFDNUMsQ0FBQyxZQUFZOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixTQUFTLHFCQUFxQjtBQUMzRCxpQ0FBaUMsYUFBYTtBQUM5QztBQUNBLEdBQUcsWUFBWTtBQUNmO0FBQ0E7Ozs7Ozs7O0FDckJBO0FBQ2E7QUFDYixjQUFjLG1CQUFPLENBQUMsRUFBVztBQUNqQyxXQUFXLG1CQUFPLENBQUMsQ0FBUztBQUM1QixhQUFhLG1CQUFPLENBQUMsQ0FBVztBQUNoQyx5QkFBeUIsbUJBQU8sQ0FBQyxFQUF3QjtBQUN6RCxxQkFBcUIsbUJBQU8sQ0FBQyxFQUFvQjs7QUFFakQsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELFVBQVUsRUFBRTtBQUMxRSxLQUFLO0FBQ0w7QUFDQSw4REFBOEQsU0FBUyxFQUFFO0FBQ3pFLEtBQUs7QUFDTDtBQUNBLENBQUMsRUFBRTs7Ozs7Ozs7QUNuQlU7QUFDYjtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxFQUFXO0FBQ2pDLDJCQUEyQixtQkFBTyxDQUFDLEVBQTJCO0FBQzlELGNBQWMsbUJBQU8sQ0FBQyxFQUFZOztBQUVsQywrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7QUNWSCxJQUFNcUQsZUFBZTtBQUNuQkMsa0JBQWdCLEVBQUMsbUJBQW1CLFNBQXBCLEVBQStCLGNBQWMsU0FBN0MsRUFBd0QsUUFBUSxJQUFoRSxFQUFzRUMsZUFBZSxJQUFyRixFQURHO0FBRW5CQyxjQUFZLEVBQUMsbUJBQW1CLFNBQXBCLEVBQStCLGNBQWMsU0FBN0MsRUFBd0QsUUFBUSxJQUFoRSxFQUFzRUQsZUFBZSxJQUFyRixFQUZPO0FBR25CRSxxQkFBbUIsRUFBQyxtQkFBbUIsUUFBcEIsRUFBOEIsUUFBUSxJQUF0QyxFQUE0QyxlQUFlLElBQTNELEVBQWlFLGdCQUFnQixJQUFqRixFQUF1RixlQUFlLElBQXRHLEVBQTRHLGFBQWEsS0FBekgsRUFBZ0ksU0FBUyxJQUF6SSxFQUErSSxTQUFTLElBQXhKLEVBQThKLFlBQVksSUFBMUssRUFBZ0wsZUFBZSxJQUEvTCxFQUFxTSxVQUFVLElBQS9NLEVBQXFOLGNBQWMsSUFBbk8sRUFBeU8saUJBQWlCLElBQTFQLEVBQWdRLGNBQWMsSUFBOVEsRUFBb1IsYUFBYSxJQUFqUyxFQUF1UyxjQUFjLElBQXJULEVBQTJULFNBQVMsSUFBcFUsRUFBMFUsTUFBTSxDQUFDLEVBQWpWLEVBQXFWLFFBQVEsSUFBN1YsRUFBbVcsZUFBZSxLQUFsWCxFQUhBO0FBSW5CQyxpQkFBZSxFQUFDLG1CQUFtQixRQUFwQixFQUE4QixRQUFRLElBQXRDLEVBQTRDLGVBQWUsSUFBM0QsRUFBaUUsZ0JBQWdCLElBQWpGLEVBQXVGLGVBQWUsSUFBdEcsRUFBNEcsYUFBYSxLQUF6SCxFQUFnSSxTQUFTLFFBQXpJLEVBQW1KLFNBQVMsSUFBNUosRUFBa0ssWUFBWSxJQUE5SyxFQUFvTCxlQUFlLElBQW5NLEVBQXlNLFVBQVUsSUFBbk4sRUFBeU4sY0FBYyxJQUF2TyxFQUE2TyxpQkFBaUIsSUFBOVAsRUFBb1EsY0FBYyxJQUFsUixFQUF3UixhQUFhLElBQXJTLEVBQTJTLGNBQWMsSUFBelQsRUFBK1QsU0FBUyxJQUF4VSxFQUE4VSxNQUFNLENBQUMsRUFBclYsRUFBeVYsUUFBUSxJQUFqVyxFQUF1VyxlQUFlLEtBQXRYO0FBSkksQ0FBckI7O0FBT0FQLE9BQU9DLE9BQVAsR0FBaUJDLFlBQWpCLEM7Ozs7Ozs7O0FDUkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQWlEO0FBQ2xCOztBQUUvQjtBQUNBLDBDQUEwQzs7QUFFMUM7O0FBRUEsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBOztBQUVBO0FBQ0E7O0FBRU8sbURBQW1EO0FBQUE7QUFBQTtBQUNuRCxtREFBbUQ7QUFBQTtBQUFBO0FBQzNDO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0Isa0VBQUs7QUFDdkI7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxQkFBcUIsUUFBUTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsV0FBVyw4RUFBZTtBQUMxQixHQUFHOzs7QUFHSDtBQUNBLDZCQUE2QjtBQUM3QixHQUFHLGVBQWU7OztBQUdsQjtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDakVBO0FBQXFDOztBQUVyQztBQUNBLE9BQU8scUVBQVE7QUFDZjtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7O0FBRXBCO0FBQ0Esb0JBQW9COztBQUVwQjtBQUNBLG9CQUFvQjs7QUFFcEI7QUFDQSxvQkFBb0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSw4REFBSyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ3BCLElBQU1NLHdCQUF3QkMsbUJBQU9BLENBQUMsRUFBUixDQUE5QjtBQUNBLElBQU1DLG9CQUFvQkQsbUJBQU9BLENBQUMsRUFBUixDQUExQjs7SUFFTUUsVTtBQUNKLHdCQUFlO0FBQUE7O0FBQ2IsU0FBS0MsbUJBQUwsR0FBMkIsSUFBM0I7QUFDQSxTQUFLQyxlQUFMLEdBQXVCLElBQXZCO0FBQ0Q7Ozs7MkJBQ087QUFDTixXQUFLRCxtQkFBTCxHQUEyQixJQUFJSixxQkFBSixFQUEzQjtBQUNBLFdBQUtJLG1CQUFMLENBQXlCRSxJQUF6QjtBQUNBLFdBQUtELGVBQUwsR0FBdUIsSUFBSUgsaUJBQUosRUFBdkI7QUFDQSxXQUFLRyxlQUFMLENBQXFCQyxJQUFyQjs7QUFFQTs7OztBQUlEOzs7OztBQUdILElBQU1DLGFBQWEsSUFBSUosVUFBSixFQUFuQjtBQUNBSSxXQUFXRCxJQUFYLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkEsSUFBTUUsY0FBYyw2Q0FBcEI7QUFDQSxJQUFNQyxrQkFBa0IsMEJBQXhCO0FBQ0EsSUFBTXBFLFFBQVE0RCxtQkFBT0EsQ0FBQyxFQUFSLENBQWQ7QUFDQSxJQUFNUCxlQUFlTyxtQkFBT0EsQ0FBQyxFQUFSLENBQXJCOztJQUVNRCxxQjtBQUNKLG1DQUFlO0FBQUE7O0FBQ2IsU0FBS1UsY0FBTCxHQUFzQixDQUFDLEdBQXZCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0IsR0FBeEI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0Q7Ozs7dUNBQ21CO0FBQ2xCLFdBQUtGLGNBQUw7QUFDQSxhQUFPLEtBQUtBLGNBQVo7QUFDRDs7O3lDQUNxQjtBQUNwQixXQUFLQyxnQkFBTDtBQUNBLGFBQU8sS0FBS0EsZ0JBQVo7QUFDRDs7OzJCQUNPO0FBQ04sVUFBSXRELE9BQU8sSUFBWDtBQUNBd0QsYUFBT0MsT0FBUCxDQUFlQyxTQUFmLENBQXlCQyxXQUF6QixDQUFxQyxVQUFDcEMsT0FBRCxFQUFVcUMsTUFBVixFQUFrQkMsWUFBbEIsRUFBbUM7QUFDdEUsWUFBSXRDLFFBQVF1QyxLQUFSLEtBQWtCLG1CQUF0QixFQUEyQztBQUN6QyxjQUFJdkMsUUFBUXdDLE1BQVIsS0FBbUIsWUFBdkIsRUFBcUM7QUFDbkMvRCxpQkFBS2dFLFVBQUwsR0FBa0JDLElBQWxCLENBQXVCLFlBQU07QUFDM0JKLDJCQUFhLEVBQUM5QyxVQUFVLElBQVgsRUFBYjtBQUNELGFBRkQsRUFFRyxVQUFDbUQsS0FBRDtBQUFBLHFCQUFXTCxhQUFhLEVBQUNLLE9BQU9BLEtBQVIsRUFBYixDQUFYO0FBQUEsYUFGSDtBQUdELFdBSkQsTUFJTyxJQUFJM0MsUUFBUXdDLE1BQVIsS0FBbUIsV0FBdkIsRUFBb0M7QUFDekMvRCxpQkFBS21FLFNBQUwsR0FBaUJGLElBQWpCLENBQXNCLFlBQU07QUFDMUJKLDJCQUFhLEVBQUM5QyxVQUFVLElBQVgsRUFBYjtBQUNELGFBRkQsRUFFRyxVQUFDbUQsS0FBRDtBQUFBLHFCQUFXTCxhQUFhLEVBQUNLLE9BQU9BLEtBQVIsRUFBYixDQUFYO0FBQUEsYUFGSDtBQUdELFdBSk0sTUFJQSxJQUFJM0MsUUFBUXdDLE1BQVIsS0FBbUIscUJBQXZCLEVBQThDO0FBQ25ELGdCQUFJeEMsUUFBUXJCLE1BQVIsS0FBbUIsUUFBdkIsRUFBaUM7QUFDL0JGLG1CQUFLb0UsTUFBTCxDQUFZN0MsUUFBUThDLElBQVIsQ0FBYUMsS0FBekIsRUFBZ0NMLElBQWhDLENBQXFDLFVBQUNNLEdBQUQ7QUFBQSx1QkFBU1YsYUFBYSxFQUFDOUMsVUFBVXdELEdBQVgsRUFBYixDQUFUO0FBQUEsZUFBckMsRUFBNkUsVUFBQ0wsS0FBRDtBQUFBLHVCQUFXTCxhQUFhLEVBQUNLLE9BQU9BLEtBQVIsRUFBYixDQUFYO0FBQUEsZUFBN0U7QUFDRCxhQUZELE1BRU8sSUFBSTNDLFFBQVFyQixNQUFSLEtBQW1CLDJCQUF2QixFQUFvRDtBQUN6REYsbUJBQUt3RSx5QkFBTCxDQUErQmpELFFBQVE4QyxJQUFSLENBQWFJLGVBQTVDLEVBQTZEUixJQUE3RCxDQUFrRSxVQUFDTSxHQUFEO0FBQUEsdUJBQVNWLGFBQWEsRUFBQzlDLFVBQVV3RCxHQUFYLEVBQWIsQ0FBVDtBQUFBLGVBQWxFLEVBQTBHLFVBQUNMLEtBQUQ7QUFBQSx1QkFBV0wsYUFBYSxFQUFDSyxPQUFPQSxLQUFSLEVBQWIsQ0FBWDtBQUFBLGVBQTFHO0FBQ0QsYUFGTSxNQUVBLElBQUkzQyxRQUFRckIsTUFBUixLQUFtQixpQkFBdkIsRUFBMEM7QUFDL0NGLG1CQUFLMEUsZUFBTCxDQUFxQm5ELFFBQVE4QyxJQUFSLENBQWFNLE1BQWxDLEVBQTBDVixJQUExQyxDQUErQyxVQUFDTSxHQUFEO0FBQUEsdUJBQVNWLGFBQWEsRUFBQzlDLFVBQVV3RCxHQUFYLEVBQWIsQ0FBVDtBQUFBLGVBQS9DLEVBQXVGLFVBQUNMLEtBQUQ7QUFBQSx1QkFBV0wsYUFBYSxFQUFDSyxPQUFPQSxLQUFSLEVBQWIsQ0FBWDtBQUFBLGVBQXZGO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQyxhQU5NLE1BTUEsSUFBSTNDLFFBQVFyQixNQUFSLEtBQW1CLFVBQXZCLEVBQW1DO0FBQ3hDRixtQkFBSzRFLFFBQUwsQ0FBY3JELFFBQVE4QyxJQUFSLENBQWFDLEtBQTNCLEVBQWtDL0MsUUFBUThDLElBQVIsQ0FBYVEsUUFBL0MsRUFBeURaLElBQXpELENBQThELFVBQUNNLEdBQUQ7QUFBQSx1QkFBU1YsYUFBYSxFQUFDOUMsVUFBVXdELEdBQVgsRUFBYixDQUFUO0FBQUEsZUFBOUQsRUFBc0csVUFBQ0wsS0FBRDtBQUFBLHVCQUFXTCxhQUFhLEVBQUNLLE9BQU9BLEtBQVIsRUFBYixDQUFYO0FBQUEsZUFBdEc7QUFDRCxhQUZNLE1BRUEsSUFBSTNDLFFBQVFyQixNQUFSLEtBQW1CLGFBQXZCLEVBQXNDO0FBQzNDRixtQkFBSzhFLFdBQUwsQ0FBaUJ2RCxRQUFROEMsSUFBUixDQUFhQyxLQUE5QixFQUFxQy9DLFFBQVE4QyxJQUFSLENBQWFVLEtBQWxELEVBQXlEZCxJQUF6RCxDQUE4RCxVQUFDTSxHQUFEO0FBQUEsdUJBQVNWLGFBQWEsRUFBQzlDLFVBQVV3RCxHQUFYLEVBQWIsQ0FBVDtBQUFBLGVBQTlELEVBQXNHLFVBQUNMLEtBQUQ7QUFBQSx1QkFBV0wsYUFBYSxFQUFDSyxPQUFPQSxLQUFSLEVBQWIsQ0FBWDtBQUFBLGVBQXRHO0FBQ0QsYUFGTSxNQUVBLElBQUkzQyxRQUFRckIsTUFBUixLQUFtQixXQUF2QixFQUFvQztBQUN6Q0YsbUJBQUtnRixTQUFMLENBQWV6RCxRQUFROEMsSUFBUixDQUFhQyxLQUE1QixFQUFtQy9DLFFBQVE4QyxJQUFSLENBQWFZLFVBQWhELEVBQTREMUQsUUFBUThDLElBQVIsQ0FBYWEsT0FBekUsRUFBa0YzRCxRQUFROEMsSUFBUixDQUFhYyxTQUEvRixFQUEwR2xCLElBQTFHLENBQStHLFVBQUNNLEdBQUQ7QUFBQSx1QkFBU1YsYUFBYSxFQUFDOUMsVUFBVXdELEdBQVgsRUFBYixDQUFUO0FBQUEsZUFBL0csRUFBdUosVUFBQ0wsS0FBRDtBQUFBLHVCQUFXTCxhQUFhLEVBQUNLLE9BQU9BLEtBQVIsRUFBYixDQUFYO0FBQUEsZUFBdko7QUFDRCxhQUZNLE1BRUEsSUFBSTNDLFFBQVFyQixNQUFSLEtBQW1CLFdBQXZCLEVBQW9DO0FBQ3pDRixtQkFBS29GLFNBQUwsQ0FBZTdELFFBQVE4QyxJQUFSLENBQWFDLEtBQTVCLEVBQW1DTCxJQUFuQyxDQUF3QyxVQUFDTSxHQUFEO0FBQUEsdUJBQVNWLGFBQWEsRUFBQzlDLFVBQVV3RCxHQUFYLEVBQWIsQ0FBVDtBQUFBLGVBQXhDLEVBQWdGLFVBQUNMLEtBQUQ7QUFBQSx1QkFBV0wsYUFBYSxFQUFDSyxPQUFPQSxLQUFSLEVBQWIsQ0FBWDtBQUFBLGVBQWhGO0FBQ0Q7QUFDRjtBQUNGO0FBQ0QsZUFBTyxJQUFQO0FBQ0QsT0FqQ0Q7O0FBbUNBVixhQUFPNkIsVUFBUCxDQUFrQkMsYUFBbEIsQ0FBZ0MzQixXQUFoQyxDQUNFLFVBQUM0QixPQUFELEVBQWE7QUFDWCxhQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUQsUUFBUUUsY0FBUixDQUF1QnZELE1BQTNDLEVBQW1Ec0QsR0FBbkQsRUFBd0Q7QUFDdEQsY0FBSUQsUUFBUUUsY0FBUixDQUF1QkQsQ0FBdkIsRUFBMEJFLElBQTFCLENBQStCQyxXQUEvQixPQUFpRCxjQUFyRCxFQUFxRTtBQUNuRTNGLGlCQUFLdUQsVUFBTCxHQUFrQmdDLFFBQVFFLGNBQVIsQ0FBdUJELENBQXZCLEVBQTBCSSxLQUE1QztBQUNBO0FBQ0QsV0FIRCxNQUdPLElBQUlMLFFBQVFFLGNBQVIsQ0FBdUJELENBQXZCLEVBQTBCRSxJQUExQixDQUErQkMsV0FBL0IsT0FBaUQsUUFBckQsRUFBK0Q7QUFDcEUzRixpQkFBSzZGLE9BQUwsR0FBZU4sUUFBUUUsY0FBUixDQUF1QkQsQ0FBdkIsRUFBMEJJLEtBQXpDO0FBQ0E7QUFDRDtBQUNGO0FBQ0QsZUFBTyxFQUFDSCxnQkFBZ0JGLFFBQVFFLGNBQXpCLEVBQVA7QUFDRCxPQVpILEVBYUUsRUFBQ0ssTUFBTSxDQUFDLCtCQUFELEVBQWtDLDJCQUFsQyxDQUFQLEVBYkYsRUFjRSxDQUFDLGdCQUFELEVBQW1CLGNBQW5CLENBZEY7O0FBaUJBOzs7Ozs7Ozs7Ozs7O0FBY0Q7OztnQ0FFWTtBQUNYLFVBQUk5RixPQUFPLElBQVg7QUFDQSxhQUFPLElBQUlQLE9BQUosQ0FBWSxVQUFDRSxPQUFELEVBQVUyQixNQUFWLEVBQXFCO0FBQ3RDa0MsZUFBT3VDLFFBQVAsQ0FBZ0JDLGlCQUFoQixDQUFrQztBQUNoQ0MsdUJBQWEsSUFEbUI7QUFFaENoRywyRUFBK0RrRCxXQUEvRCxnREFBcUhLLE9BQU9DLE9BQVAsQ0FBZXlDLEVBQXBJO0FBRmdDLFNBQWxDLEVBR0csVUFBQ2pHLEdBQUQsRUFBUztBQUNWLGNBQUlrRyxZQUFZLElBQUl0RixlQUFKLENBQW9CWixJQUFJbUcsT0FBSixDQUFZLE9BQVosRUFBcUIsRUFBckIsQ0FBcEIsQ0FBaEI7QUFDQSxjQUFJQyxRQUFRRixVQUFVRyxHQUFWLENBQWMsY0FBZCxDQUFaO0FBQ0F0RyxlQUFLdUcsVUFBTCxDQUFnQkYsS0FBaEIsRUFBdUJwQyxJQUF2QixDQUE0QjtBQUFBLG1CQUFNdEUsU0FBTjtBQUFBLFdBQTVCO0FBQ0QsU0FQRDtBQVFELE9BVE0sQ0FBUDtBQVVEOzs7K0JBRVcwRyxLLEVBQU87QUFDakIsYUFBTyxJQUFJNUcsT0FBSixDQUFZLFVBQUNFLE9BQUQsRUFBVTJCLE1BQVYsRUFBcUI7QUFDdEMsWUFBSTFCLE9BQU8sRUFBWDtBQUNBQSxhQUFLd0QsZUFBTCxJQUF3QmlELEtBQXhCO0FBQ0E3QyxlQUFPZ0QsT0FBUCxDQUFlQyxJQUFmLENBQW9CQyxHQUFwQixDQUF3QjlHLElBQXhCLEVBQThCLFlBQU07QUFDbENEO0FBQ0QsU0FGRDtBQUdELE9BTk0sQ0FBUDtBQU9EOzs7a0NBRWM7QUFDYixhQUFPLElBQUlGLE9BQUosQ0FBWSxVQUFDRSxPQUFELEVBQVUyQixNQUFWLEVBQXFCO0FBQ3RDa0MsZUFBT2dELE9BQVAsQ0FBZUMsSUFBZixDQUFvQkUsTUFBcEIsQ0FBMkIsQ0FBQ3ZELGVBQUQsQ0FBM0IsRUFBOEMsWUFBTTtBQUNsRHpEO0FBQ0QsU0FGRDtBQUdELE9BSk0sQ0FBUDtBQUtEOzs7K0JBRVc7QUFDVixhQUFPLElBQUlGLE9BQUosQ0FBWSxVQUFDRSxPQUFELEVBQVUyQixNQUFWLEVBQXFCO0FBQ3RDa0MsZUFBT2dELE9BQVAsQ0FBZUMsSUFBZixDQUFvQkgsR0FBcEIsQ0FBd0JsRCxlQUF4QixFQUF5QyxVQUFDd0QsT0FBRCxFQUFhO0FBQ3BELGNBQUlQLFFBQVFPLFFBQVF4RCxlQUFSLEtBQTRCLElBQXhDO0FBQ0EsY0FBSWlELFNBQVMsSUFBYixFQUFtQi9FLE9BQU8sT0FBUCxFQUFuQixLQUNLM0IsUUFBUTBHLEtBQVI7QUFDTixTQUpEO0FBS0QsT0FOTSxDQUFQO0FBT0Q7OztpQ0FFYTtBQUNaLFVBQUlyRyxPQUFPLElBQVg7QUFDQSxhQUFPLElBQUlQLE9BQUosQ0FBWSxVQUFDRSxPQUFELEVBQVUyQixNQUFWLEVBQXFCO0FBQ3RDdEIsYUFBSzZHLFFBQUwsR0FBZ0I1QyxJQUFoQixDQUFxQixVQUFDb0MsS0FBRCxFQUFXO0FBQzlCLGNBQUlTLFFBQVE7QUFDVkMsMEJBQWNWLEtBREo7QUFFVm5HLG9CQUFRO0FBRkUsV0FBWjtBQUlBLGNBQUlOLE9BQU87QUFDVE0sb0JBQVEsS0FEQztBQUVURCxpQkFBSyxrREFGSTtBQUdUSSxvQkFBUXlHO0FBSEMsV0FBWDtBQUtBOUgsZ0JBQU1xQyxjQUFOLENBQXFCekIsSUFBckIsRUFBMkJxRSxJQUEzQixDQUFnQyxVQUFDK0MsSUFBRDtBQUFBLG1CQUFVQSxLQUFLQyxJQUFMLEVBQVY7QUFBQSxXQUFoQyxFQUF1RGhELElBQXZELENBQTRELFVBQUNpRCxHQUFELEVBQVM7QUFDbkUsZ0JBQUlBLElBQUkzQyxHQUFKLENBQVE0QyxJQUFSLEtBQWlCLElBQXJCLEVBQTJCO0FBQ3pCbkgsbUJBQUtvSCxXQUFMLEdBQW1CbkQsSUFBbkIsQ0FBd0IsWUFBTTtBQUM1QjNDLHVCQUFPLE9BQVA7QUFDRCxlQUZEO0FBR0QsYUFKRCxNQUlPM0I7QUFDUixXQU5EO0FBT0QsU0FqQkQsRUFpQkcsVUFBQ3VFLEtBQUQsRUFBVztBQUNaNUMsaUJBQU80QyxLQUFQO0FBQ0QsU0FuQkQ7QUFvQkQsT0FyQk0sQ0FBUDtBQXNCRDs7O2dDQUVZO0FBQ1g7QUFDRDs7OzZCQUVTSSxLLEVBQU87O0FBRWYsVUFBSXRFLE9BQU8sSUFBWDtBQUNBLGFBQU8sSUFBSVAsT0FBSixDQUFZLFVBQUNFLE9BQUQsRUFBVTJCLE1BQVYsRUFBcUI7QUFDdEMsWUFBSStGLE9BQU8sRUFBQ0MsU0FBU2hELEtBQVYsRUFBaUJpRCxnQkFBZ0IsS0FBakMsRUFBd0NDLGFBQWEsS0FBckQsRUFBNERDLGNBQWMsS0FBMUUsRUFBWDtBQUNBM0csY0FBTSwrQ0FBTixFQUF1RDtBQUNyRFosa0JBQVEsTUFENkM7QUFFckRDLG1CQUFTO0FBQ1AsNEJBQWdCLGdDQURUO0FBRVAsNEJBQWdCSCxLQUFLdUQ7QUFGZCxXQUY0QztBQU1yRG1FLGdCQUFNQyxLQUFLQyxTQUFMLENBQWVQLElBQWY7QUFOK0MsU0FBdkQsRUFPR3BELElBUEgsQ0FPUSxVQUFDK0MsSUFBRDtBQUFBLGlCQUFVQSxLQUFLQyxJQUFMLEVBQVY7QUFBQSxTQVBSLEVBTytCaEQsSUFQL0IsQ0FPb0MsVUFBQ2lELEdBQUQsRUFBUztBQUN6QyxjQUFJQSxJQUFJVyxHQUFKLElBQVcsSUFBZixFQUFxQnZHLE9BQU8sT0FBUCxFQUFyQixLQUNLM0IsUUFBUXVILEdBQVI7QUFDTixTQVZIO0FBV0MsT0FiSSxFQWFGLFVBQUNoRCxLQUFELEVBQVc7QUFBRTVDLGVBQU80QyxLQUFQO0FBQWUsT0FiMUIsQ0FBUDtBQWNEOzs7MkJBRU9JLEssRUFBTztBQUNiLFVBQUl0RSxPQUFPLElBQVg7QUFDQSxhQUFPLElBQUlQLE9BQUosQ0FBWSxVQUFDRSxPQUFELEVBQVUyQixNQUFWLEVBQXFCO0FBQ3RDdEIsYUFBSzZHLFFBQUwsR0FBZ0I1QyxJQUFoQixDQUFxQixVQUFDb0MsS0FBRCxFQUFXO0FBQzlCLGNBQUlTLFFBQVE7QUFDVkMsMEJBQWNWLEtBREo7QUFFVm5HLG9CQUFRLGdCQUZFO0FBR1Y0SCxvQkFBUXhEO0FBSEUsV0FBWjtBQUtBLGNBQUkxRSxPQUFPO0FBQ1RNLG9CQUFRLEtBREM7QUFFVEQsaUJBQUssa0RBRkk7QUFHVEksb0JBQVF5RztBQUhDLFdBQVg7QUFLQTlILGdCQUFNcUMsY0FBTixDQUFxQnpCLElBQXJCLEVBQTJCcUUsSUFBM0IsQ0FBZ0MsVUFBQytDLElBQUQ7QUFBQSxtQkFBVUEsS0FBS0MsSUFBTCxFQUFWO0FBQUEsV0FBaEMsRUFBdURoRCxJQUF2RCxDQUE0RCxVQUFDaUQsR0FBRCxFQUFTO0FBQ25FLGdCQUFJQSxJQUFJM0MsR0FBSixDQUFRNEMsSUFBUixLQUFpQixJQUFyQixFQUEyQjdGLE9BQU80RixJQUFJYSxHQUFKLENBQVFDLEdBQWYsRUFBM0IsS0FDS3JJLFFBQVF1SCxJQUFJM0MsR0FBWjtBQUNOLFdBSEQ7QUFJRCxTQWZELEVBZUcsVUFBQ0wsS0FBRCxFQUFXO0FBQUU1QyxpQkFBTzRDLEtBQVA7QUFBZSxTQWYvQjtBQWdCRCxPQWpCTSxDQUFQO0FBa0JEOzs7b0NBRWdCUyxNLEVBQVE7QUFDdkIsVUFBSTNFLE9BQU8sSUFBWDtBQUNBLGFBQU8sSUFBSVAsT0FBSixDQUFZLFVBQUNFLE9BQUQsRUFBVTJCLE1BQVYsRUFBcUI7QUFDdEN0QixhQUFLNkcsUUFBTCxHQUFnQjVDLElBQWhCLENBQXFCLFVBQUNvQyxLQUFELEVBQVc7QUFDOUIsY0FBSVMsUUFBUTtBQUNWQywwQkFBY1YsS0FESjtBQUVWbkcsb0JBQVEsaUJBRkU7QUFHVm9ILHFCQUFTM0M7QUFIQyxXQUFaO0FBS0EsY0FBSS9FLE9BQU87QUFDVE0sb0JBQVEsS0FEQztBQUVURCxpQkFBSyxrREFGSTtBQUdUSSxvQkFBUXlHO0FBSEMsV0FBWDtBQUtBOUgsZ0JBQU1xQyxjQUFOLENBQXFCekIsSUFBckIsRUFBMkJxRSxJQUEzQixDQUFnQyxVQUFDK0MsSUFBRDtBQUFBLG1CQUFVQSxLQUFLQyxJQUFMLEVBQVY7QUFBQSxXQUFoQyxFQUF1RGhELElBQXZELENBQTRELFVBQUNpRCxHQUFELEVBQVM7QUFDbkUsZ0JBQUlBLElBQUkzQyxHQUFKLENBQVE0QyxJQUFSLEtBQWlCLElBQXJCLEVBQTJCN0YsT0FBTzRGLElBQUlhLEdBQUosQ0FBUUMsR0FBZixFQUEzQixLQUNLckksUUFBUXVILElBQUkzQyxHQUFKLENBQVFzRCxHQUFSLENBQVkzQixFQUFwQjtBQUNOLFdBSEQ7QUFJRCxTQWZELEVBZUcsVUFBQ2hDLEtBQUQsRUFBVztBQUFFNUMsaUJBQU80QyxLQUFQO0FBQWUsU0FmL0I7QUFnQkQsT0FqQk0sQ0FBUDtBQWtCRDs7O2dDQUVZSSxLLEVBQU8yRCxLLEVBQU87QUFDekIsVUFBSWpJLE9BQU8sSUFBWDtBQUNBLGFBQU8sSUFBSVAsT0FBSixDQUFZLFVBQUNFLE9BQUQsRUFBVTJCLE1BQVYsRUFBcUI7QUFDdEM7QUFDRTtBQUNBO0FBQ0U7QUFDQTtBQUNBOzs7Ozs7O0FBT0osWUFBSStGLE9BQU8sRUFBRSxZQUFZLFlBQWQsRUFBNEIsVUFBVSxDQUF0QyxFQUF5QyxRQUFRWSxNQUFNQyxlQUF2RCxFQUF3RSxTQUFTLEVBQWpGLEVBQXFGLFVBQVUsRUFBL0YsRUFBWDtBQUNBcEgsY0FBTSx1REFBTixFQUErRDtBQUM3RFosa0JBQVEsTUFEcUQ7QUFFN0RDLG1CQUFTO0FBQ1AsNEJBQWdCLGdDQURUO0FBRVAsNEJBQWdCSCxLQUFLdUQ7QUFGZCxXQUZvRDtBQU03RG1FLGdCQUFNQyxLQUFLQyxTQUFMLENBQWVQLElBQWY7QUFOdUQsU0FBL0QsRUFPR3BELElBUEgsQ0FPUSxVQUFDK0MsSUFBRDtBQUFBLGlCQUFVQSxLQUFLQyxJQUFMLEVBQVY7QUFBQSxTQVBSLEVBTytCaEQsSUFQL0IsQ0FPb0MsVUFBQ2lELEdBQUQsRUFBUztBQUMzQyxjQUFJQSxPQUFPLElBQVAsSUFBZUEsSUFBSWlCLElBQUosSUFBWSxJQUEzQixJQUFtQ2pCLElBQUlpQixJQUFKLENBQVNqQyxFQUFULElBQWUsSUFBdEQsRUFBNEQ1RSxPQUFPLE9BQVAsRUFBNUQsS0FDSzNCLFFBQVF1SCxJQUFJaUIsSUFBSixDQUFTakMsRUFBakI7QUFDTixTQVZEOztBQVlJOzs7Ozs7Ozs7O0FBVUY7QUFDRjtBQUNELE9BdENNLENBQVA7QUF1Q0Q7Ozt3Q0FFb0JrQyxVLEVBQVk5RCxLLEVBQU8rRCxJLEVBQU07QUFDNUMsVUFBSTFELFNBQVMsS0FBSzJELGdCQUFMLEVBQWI7QUFDQSxVQUFJQyxXQUFXLEtBQUtDLGtCQUFMLEVBQWY7QUFDQSxVQUFJQyxlQUFlO0FBQ2pCLHFCQUFhRixRQURJO0FBRWpCLG1CQUFXNUQsTUFGTTtBQUdqQixrQkFBVSxNQUhPO0FBSWpCLHFCQUFhLEtBSkk7QUFLakIsb0JBQVk7QUFDVixzQkFBWXRGLFNBQVNnSixLQUFLSyxRQUFkLENBREY7QUFFVixtQkFBUzFKLE1BQU0ySixnQkFBTixDQUF1Qk4sS0FBSzFHLElBQTVCLENBRkM7QUFHVixrQkFBUSxDQUhFO0FBSVYsb0JBQVUsSUFKQTtBQUtWLG9CQUFVLEtBTEE7QUFNVix3QkFBYyxLQU5KO0FBT1YsZUFBSyxHQVBLLEVBT0E7QUFDVixlQUFLO0FBUks7QUFMSyxPQUFuQjtBQWdCQXlHLGlCQUFXUSxTQUFYLENBQXFCSCxZQUFyQjtBQUNBLFVBQUlKLEtBQUtRLElBQUwsSUFBYSxJQUFqQixFQUF1QjtBQUNyQixZQUFJQyxhQUFhO0FBQ2YsdUJBQWEsS0FBS04sa0JBQUwsRUFERTtBQUVmLHFCQUFXN0QsTUFGSTtBQUdmLG9CQUFVLE1BSEs7QUFJZix1QkFBYSxNQUpFO0FBS2Ysc0JBQVk7QUFDVixvQkFBUTBELEtBQUtRO0FBREgsV0FMRztBQVFmLHNCQUFZO0FBUkcsU0FBakI7QUFVQVQsbUJBQVdRLFNBQVgsQ0FBcUJFLFVBQXJCO0FBQ0Q7QUFDRCxVQUFJVCxLQUFLVSxLQUFMLElBQWMsSUFBbEIsRUFBd0I7QUFDdEIsWUFBSUMsY0FBYztBQUNoQix1QkFBYSxLQUFLUixrQkFBTCxFQURHO0FBRWhCLG9CQUFVLE9BRk07QUFHaEIscUJBQVduSixTQUFTc0YsTUFBVCxDQUhLO0FBSWhCLHVCQUFhLE1BSkc7QUFLaEIsc0JBQVkwRCxLQUFLVTtBQUxELFNBQWxCO0FBT0FYLG1CQUFXUSxTQUFYLENBQXFCSSxXQUFyQjtBQUNEO0FBQ0QsVUFBSVgsS0FBS0osS0FBTCxJQUFjLElBQWxCLEVBQXdCO0FBQ3RCLFlBQUlnQixVQUFVYixXQUFXYyxVQUFYLENBQXNCYixLQUFLSixLQUFMLENBQVdDLGVBQWpDLENBQWQ7QUFDQSxZQUFJaUIsaUJBQWlCO0FBQ25CLHVCQUFhLEtBQUtYLGtCQUFMLEVBRE07QUFFbkIsb0JBQVUsT0FGUztBQUduQixxQkFBV25KLFNBQVNzRixNQUFULENBSFE7QUFJbkIsdUJBQWEsS0FKTTtBQUtuQixzQkFBWTtBQUNWLDZCQUFpQnNFLE9BRFA7QUFFVixzQkFBVSxFQUZBO0FBR1YscUJBQVMsRUFIQztBQUlWLHNCQUFVLENBSkE7QUFLVixnQ0FBb0JaLEtBQUtKLEtBQUwsQ0FBV0M7QUFMckI7QUFMTyxTQUFyQjtBQWFBRSxtQkFBV1EsU0FBWCxDQUFxQk8sY0FBckI7QUFDRDtBQUNGOzs7MkNBRXVCZixVLEVBQVk5RCxLLEVBQU8rRCxJLEVBQU07QUFDL0MsVUFBSTFELFNBQVMsS0FBSzJELGdCQUFMLEVBQWI7QUFDQSxVQUFJQyxXQUFXLEtBQUtDLGtCQUFMLEVBQWY7QUFDQSxVQUFJQyxlQUFlO0FBQ2pCLGNBQU1GLFFBRFc7QUFFakIsbUJBQVc1RCxNQUZNO0FBR2pCLGdCQUFRLFFBSFM7QUFJakIsb0JBQVk7QUFDVixzQkFBWTBELEtBQUtLLFFBRFA7QUFFVixtQkFBUzFKLE1BQU0ySixnQkFBTixDQUF1Qk4sS0FBSzFHLElBQTVCLENBRkM7QUFHVixrQkFBUSxDQUhFO0FBSVYsb0JBQVUsS0FKQTtBQUtWLHdCQUFjLEtBTEo7QUFNVixxQkFBVyxDQU5EO0FBT1YscUJBQVcsQ0FQRDtBQVFWLGVBQUssT0FSSyxFQVFJO0FBQ2Qsd0JBQWMsS0FUSjtBQVVWLHNCQUFZLEVBVkY7QUFXVix5QkFBZSxFQVhMO0FBWVYsZ0JBQU1nRCxNQVpJO0FBYVYsb0JBQVUwRCxLQUFLSyxRQWJMLEVBYWU7QUFDekIsaUJBQU8sQ0FBQyxPQUFELEVBQVUsTUFBVixDQWRHLENBY2dCO0FBZGhCLFNBSkssRUFBbkI7QUFvQkEsVUFBSUwsS0FBS1EsSUFBTCxJQUFhLElBQWpCLEVBQXVCSixhQUFhVyxRQUFiLENBQXNCUCxJQUF0QixHQUE2QlIsS0FBS1EsSUFBbEM7QUFDdkJULGlCQUFXUSxTQUFYLENBQXFCSCxZQUFyQjtBQUNBLFVBQUlKLEtBQUtVLEtBQUwsSUFBYyxJQUFsQixFQUF3QjtBQUN0QixZQUFJQyxjQUFjO0FBQ2hCLGdCQUFNLEtBQUtSLGtCQUFMLEVBRFU7QUFFaEIscUJBQVc3RCxNQUZLO0FBR2hCLGtCQUFRLFdBSFE7QUFJaEIsc0JBQVk7QUFDVixxQkFBUzBELEtBQUtVO0FBREo7QUFKSSxTQUFsQjtBQVFBQyxvQkFBWSxVQUFaLEVBQXdCLE9BQXhCLEVBQWlDLElBQWpDLElBQXlDckUsTUFBekM7QUFDQXlELG1CQUFXUSxTQUFYLENBQXFCSSxXQUFyQjtBQUNEO0FBQ0QsVUFBSVgsS0FBS0osS0FBTCxJQUFjLElBQWxCLEVBQXdCO0FBQ3RCLFlBQUlnQixVQUFVYixXQUFXYyxVQUFYLENBQXNCYixLQUFLSixLQUFMLENBQVdDLGVBQWpDLENBQWQ7QUFDQSxZQUFJaUIsaUJBQWlCO0FBQ25CLGdCQUFNLEtBQUtYLGtCQUFMLEVBRGE7QUFFbkIscUJBQVc3RCxNQUZRO0FBR25CLGtCQUFRLFVBSFc7QUFJbkIsc0JBQ0UsRUFBQyxpQkFBaUJzRSxPQUFsQjtBQUxpQixTQUFyQjtBQU9BLFlBQUlJLG9CQUFvQjtBQUN0QixnQkFBTSxLQUFLYixrQkFBTCxFQURnQjtBQUV0QixxQkFBVzdELE1BRlc7QUFHdEIsa0JBQVEsYUFIYztBQUl0QixzQkFBWTtBQUNWLDZCQUFpQnNFLE9BRFA7QUFFVixzQkFBVSxFQUZBO0FBR1Ysd0JBQVksQ0FIRjtBQUlWLHFCQUFTO0FBSkM7QUFKVSxTQUF4QjtBQVdBYixtQkFBV1EsU0FBWCxDQUFxQk8sY0FBckI7QUFDQWYsbUJBQVdRLFNBQVgsQ0FBcUJTLGlCQUFyQjtBQUNEO0FBQ0Y7OzsyQ0FFdUJqQixVLEVBQVk5RCxLLEVBQU8rRCxJLEVBQU07QUFDL0MsVUFBSUEsS0FBS1UsS0FBTCxJQUFjLElBQWxCLEVBQXdCO0FBQ3RCLFlBQUlDLGNBQWM7QUFDaEIsdUJBQWEsS0FBS1Isa0JBQUwsRUFERztBQUVoQixvQkFBVSxPQUZNO0FBR2hCLHFCQUFXbkosU0FBU2dKLEtBQUtuQyxFQUFkLENBSEs7QUFJaEIsdUJBQWEsTUFKRztBQUtoQixzQkFBWW1DLEtBQUtVO0FBTEQsU0FBbEI7QUFPQVgsbUJBQVdRLFNBQVgsQ0FBcUJJLFdBQXJCO0FBQ0Q7QUFDRCxVQUFJWCxLQUFLSixLQUFMLElBQWMsSUFBbEIsRUFBd0I7QUFDdEIsWUFBSWdCLFVBQVViLFdBQVdjLFVBQVgsQ0FBc0JiLEtBQUtKLEtBQUwsQ0FBV0MsZUFBakMsQ0FBZDtBQUNBLFlBQUlpQixpQkFBaUI7QUFDbkIsdUJBQWEsS0FBS1gsa0JBQUwsRUFETTtBQUVuQixvQkFBVSxPQUZTO0FBR25CLHFCQUFXbkosU0FBU2dKLEtBQUtuQyxFQUFkLENBSFE7QUFJbkIsdUJBQWEsS0FKTTtBQUtuQixzQkFBWTtBQUNWLDZCQUFpQitDLE9BRFA7QUFFVixzQkFBVSxFQUZBO0FBR1YscUJBQVMsRUFIQztBQUlWLHNCQUFVLENBSkE7QUFLVixnQ0FBb0JaLEtBQUtKLEtBQUwsQ0FBV0M7QUFMckI7QUFMTyxTQUFyQjtBQWFBRSxtQkFBV1EsU0FBWCxDQUFxQk8sY0FBckI7QUFDRDtBQUNGOzs7OENBRTBCZixVLEVBQVk5RCxLLEVBQU8rRCxJLEVBQU07QUFDbEQsVUFBSUEsS0FBS1UsS0FBTCxJQUFjLElBQWxCLEVBQXdCO0FBQ3RCLFlBQUlDLGNBQWM7QUFDaEIsZ0JBQU0sS0FBS1Isa0JBQUwsRUFEVTtBQUVoQixxQkFBV0gsS0FBS25DLEVBRkE7QUFHaEIsa0JBQVEsV0FIUTtBQUloQixzQkFBWTtBQUNWLHFCQUFTbUMsS0FBS1U7QUFESjtBQUpJLFNBQWxCO0FBUUFDLG9CQUFZLFVBQVosRUFBd0IsT0FBeEIsRUFBaUMsSUFBakMsSUFBeUNYLEtBQUtuQyxFQUE5QztBQUNBa0MsbUJBQVdRLFNBQVgsQ0FBcUJJLFdBQXJCO0FBQ0Q7QUFDRCxVQUFJWCxLQUFLSixLQUFMLElBQWMsSUFBbEIsRUFBd0I7QUFDdEIsWUFBSWdCLFVBQVViLFdBQVdjLFVBQVgsQ0FBc0JiLEtBQUtKLEtBQUwsQ0FBV0MsZUFBakMsQ0FBZDtBQUNBLFlBQUlpQixpQkFBaUI7QUFDbkIsZ0JBQU0sS0FBS1gsa0JBQUwsRUFEYTtBQUVuQixxQkFBV0gsS0FBS25DLEVBRkc7QUFHbkIsa0JBQVEsVUFIVztBQUluQixzQkFDRSxFQUFDLGlCQUFpQitDLE9BQWxCO0FBTGlCLFNBQXJCO0FBT0EsWUFBSUksb0JBQW9CO0FBQ3RCLGdCQUFNLEtBQUtiLGtCQUFMLEVBRGdCO0FBRXRCLHFCQUFXSCxLQUFLbkMsRUFGTTtBQUd0QixrQkFBUSxhQUhjO0FBSXRCLHNCQUFZO0FBQ1YsNkJBQWlCK0MsT0FEUDtBQUVWLHNCQUFVLEVBRkE7QUFHVix3QkFBWSxDQUhGO0FBSVYscUJBQVM7QUFKQztBQUpVLFNBQXhCO0FBV0FiLG1CQUFXUSxTQUFYLENBQXFCTyxjQUFyQjtBQUNBZixtQkFBV1EsU0FBWCxDQUFxQlMsaUJBQXJCO0FBQ0Q7QUFDRjs7O3VEQUVtQy9FLEssRUFBTzhELFUsRUFBWTtBQUNyRCxVQUFJcEksT0FBTyxJQUFYO0FBQ0EsYUFBTyxJQUFJUCxPQUFKLENBQVksVUFBQ0UsT0FBRCxFQUFVMkIsTUFBVixFQUFxQjtBQUN0QyxZQUFJZ0ksY0FBYyxFQUFsQjtBQUNBbEIsbUJBQVdtQixNQUFYLENBQWtCQyxPQUFsQixDQUEwQixVQUFDaEUsQ0FBRCxFQUFPO0FBQy9COEQsc0JBQVkzSSxJQUFaLENBQWlCLElBQUlsQixPQUFKLENBQVksVUFBQ2dLLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ3pDMUosaUJBQUsySixXQUFMLENBQWlCckYsS0FBakIsRUFBd0JrQixDQUF4QixFQUEyQnZCLElBQTNCLENBQWdDLFVBQUNnRixPQUFELEVBQWE7QUFDM0NiLHlCQUFXd0IsVUFBWCxDQUFzQnBFLEVBQUUwQyxlQUF4QixFQUF5Q2UsT0FBekM7QUFDQVE7QUFDRCxhQUhEO0FBSUQsV0FMZ0IsQ0FBakI7QUFNRCxTQVBEO0FBUUEsWUFBSUgsWUFBWXBILE1BQVosS0FBdUIsQ0FBM0IsRUFBOEJ2QyxVQUE5QixLQUNLO0FBQ0hGLGtCQUFRb0ssR0FBUixDQUFZUCxXQUFaLEVBQXlCckYsSUFBekIsQ0FBOEIsWUFBTTtBQUNsQ3RFO0FBQ0QsV0FGRDtBQUdEO0FBQ0YsT0FoQk0sQ0FBUDtBQWlCRDs7OzBEQUVzQzJFLEssRUFBTzhELFUsRUFBWTtBQUN4RCxVQUFJcEksT0FBTyxJQUFYO0FBQ0EsYUFBTyxJQUFJUCxPQUFKLENBQVksVUFBQ0UsT0FBRCxFQUFVMkIsTUFBVixFQUFxQjtBQUN0QyxZQUFJZ0ksY0FBYyxFQUFsQjtBQUNBbEIsbUJBQVdtQixNQUFYLENBQWtCQyxPQUFsQixDQUEwQixVQUFDaEUsQ0FBRCxFQUFPO0FBQy9COEQsc0JBQVkzSSxJQUFaLENBQWlCLElBQUlsQixPQUFKLENBQVksVUFBQ2dLLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ3pDMUosaUJBQUsySixXQUFMLENBQWlCckYsS0FBakIsRUFBd0JrQixDQUF4QixFQUEyQnZCLElBQTNCLENBQWdDLFVBQUNnRixPQUFELEVBQWE7QUFDM0NiLHlCQUFXd0IsVUFBWCxDQUFzQnBFLEVBQUUwQyxlQUF4QixFQUF5Q2UsT0FBekM7QUFDQVE7QUFDRCxhQUhEO0FBSUQsV0FMZ0IsQ0FBakI7QUFNRCxTQVBEO0FBUUEsWUFBSUgsWUFBWXBILE1BQVosS0FBdUIsQ0FBM0IsRUFBOEJ2QyxVQUE5QixLQUNLO0FBQ0hGLGtCQUFRb0ssR0FBUixDQUFZUCxXQUFaLEVBQXlCckYsSUFBekIsQ0FBOEIsWUFBTTtBQUNsQ3RFO0FBQ0QsV0FGRDtBQUdEO0FBQ0YsT0FoQk0sQ0FBUDtBQWlCRDs7OzZCQUVTMkUsSyxFQUFPUyxLLEVBQU87QUFBQTs7QUFDdEIsVUFBSS9FLE9BQU8sSUFBWDtBQUNBLGFBQU8sSUFBSVAsT0FBSixDQUFZLFVBQUNFLE9BQUQsRUFBVTJCLE1BQVYsRUFBcUI7QUFDdEMsWUFBSThHLGFBQWEsSUFBSTBCLFVBQUosRUFBakI7QUFDQS9FLGNBQU15RSxPQUFOLENBQWMsVUFBQ08sQ0FBRCxFQUFPO0FBQ25CLGNBQUlBLEVBQUU5QixLQUFGLElBQVcsSUFBWCxJQUFtQixDQUFDRyxXQUFXNEIsUUFBWCxDQUFvQkQsRUFBRTlCLEtBQXRCLENBQXhCLEVBQXNERyxXQUFXNkIsUUFBWCxDQUFvQkYsRUFBRTlCLEtBQXRCO0FBQ3ZELFNBRkQ7QUFHQSxjQUFLaUMsa0NBQUwsQ0FBd0M1RixLQUF4QyxFQUErQzhELFVBQS9DLEVBQTJEbkUsSUFBM0QsQ0FBZ0UsWUFBTTtBQUNwRWMsZ0JBQU15RSxPQUFOLENBQWMsVUFBQ08sQ0FBRCxFQUFPO0FBQ25CLGtCQUFLSSxtQkFBTCxDQUF5Qi9CLFVBQXpCLEVBQXFDOUQsS0FBckMsRUFBNEN5RixDQUE1QztBQUNELFdBRkQ7QUFHQS9KLGVBQUtvSyxTQUFMLENBQWU5RixLQUFmLEVBQXNCOEQsV0FBV2lDLE9BQWpDLEVBQTBDcEcsSUFBMUMsQ0FBK0MsWUFBTTtBQUNuRHRFLG9CQUFRLElBQVI7QUFDRCxXQUZEO0FBR0QsU0FQRDtBQVFELE9BYk0sQ0FBUDtBQWNEOzs7Z0NBRVkyRSxLLEVBQU9TLEssRUFBTztBQUFBOztBQUN6QixVQUFJL0UsT0FBTyxJQUFYO0FBQ0EsYUFBTyxJQUFJUCxPQUFKLENBQVksVUFBQ0UsT0FBRCxFQUFVMkIsTUFBVixFQUFxQjtBQUN0QyxZQUFJOEcsYUFBYSxJQUFJMEIsVUFBSixFQUFqQjtBQUNBL0UsY0FBTXlFLE9BQU4sQ0FBYyxVQUFDTyxDQUFELEVBQU87QUFDbkIsY0FBSUEsRUFBRTlCLEtBQUYsSUFBVyxJQUFYLElBQW1CLENBQUNHLFdBQVc0QixRQUFYLENBQW9CRCxFQUFFOUIsS0FBdEIsQ0FBeEIsRUFBc0RHLFdBQVc2QixRQUFYLENBQW9CRixFQUFFOUIsS0FBdEI7QUFDdkQsU0FGRDtBQUdBLGVBQUtpQyxrQ0FBTCxDQUF3QzVGLEtBQXhDLEVBQStDOEQsVUFBL0MsRUFBMkRuRSxJQUEzRCxDQUFnRSxZQUFNO0FBQ3BFYyxnQkFBTXlFLE9BQU4sQ0FBYyxVQUFDTyxDQUFELEVBQU87QUFDbkIsbUJBQUtPLHNCQUFMLENBQTRCbEMsVUFBNUIsRUFBd0M5RCxLQUF4QyxFQUErQ3lGLENBQS9DO0FBQ0QsV0FGRDtBQUdBL0osZUFBS29LLFNBQUwsQ0FBZTlGLEtBQWYsRUFBc0I4RCxXQUFXaUMsT0FBakMsRUFBMENwRyxJQUExQyxDQUErQyxZQUFNO0FBQ25EdEUsb0JBQVEsSUFBUjtBQUNELFdBRkQ7QUFHRCxTQVBEO0FBUUQsT0FiTSxDQUFQO0FBY0Q7Ozs4QkFFVTJFLEssRUFBTytGLE8sRUFBUztBQUN6QixVQUFJckssT0FBTyxJQUFYO0FBQ0EsYUFBTyxJQUFJUCxPQUFKLENBQVksVUFBQ0UsT0FBRCxFQUFVMkIsTUFBVixFQUFxQjtBQUN0QyxZQUFJK0YsT0FBTyxFQUFDLFdBQVdnRCxPQUFaLEVBQXFCLFlBQVksR0FBakMsRUFBc0NFLFNBQVNsTCxTQUFTaUYsS0FBVCxDQUEvQyxFQUFYO0FBQ0F4RCxjQUFNLGdEQUFOLEVBQXdEO0FBQ3REWixrQkFBUSxNQUQ4QztBQUV0REMsbUJBQVM7QUFDUCw0QkFBZ0IsZ0NBRFQ7QUFFUCw0QkFBZ0JILEtBQUt1RDtBQUZkLFdBRjZDO0FBTXREbUUsZ0JBQU1DLEtBQUtDLFNBQUwsQ0FBZVAsSUFBZjtBQU5nRCxTQUF4RCxFQU9HcEQsSUFQSCxDQU9RLFVBQUMrQyxJQUFEO0FBQUEsaUJBQVVBLEtBQUtDLElBQUwsRUFBVjtBQUFBLFNBUFIsRUFPK0JoRCxJQVAvQixDQU9vQyxVQUFDaUQsR0FBRCxFQUFTO0FBQzNDLGNBQUlBLElBQUlzRCxNQUFKLElBQWMsSUFBZCxJQUFzQnRELElBQUlzRCxNQUFKLENBQVd0SSxNQUFYLEdBQW9CLENBQTlDLEVBQWlEWixPQUFPNEYsSUFBSXNELE1BQUosQ0FBVyxDQUFYLENBQVAsRUFBakQsS0FDSzdLO0FBQ04sU0FWRDtBQVdELE9BYk0sRUFhSixVQUFDdUUsS0FBRCxFQUFXO0FBQUU1QyxlQUFPNEMsS0FBUDtBQUFlLE9BYnhCLENBQVA7QUFjRDs7O2lDQUVhSSxLLEVBQU8rRixPLEVBQVM7QUFDNUIsVUFBSXJLLE9BQU8sSUFBWDtBQUNBLGFBQU8sSUFBSVAsT0FBSixDQUFZLFVBQUNFLE9BQUQsRUFBVTJCLE1BQVYsRUFBcUI7QUFDdEN0QixhQUFLNkcsUUFBTCxHQUFnQjVDLElBQWhCLENBQXFCLFVBQUNvQyxLQUFELEVBQVc7QUFDOUIsY0FBSVMsUUFBUTtBQUNWNUcsb0JBQVEsZ0JBREU7QUFFVjRILG9CQUFReEQsS0FGRTtBQUdWK0Msa0JBQU1NLEtBQUtDLFNBQUwsQ0FBZXlDLE9BQWYsQ0FISTtBQUlWdEQsMEJBQWNWLEtBSko7QUFLVm9FLDZCQUFpQjtBQUxQLFdBQVo7QUFPQSxjQUFJN0ssT0FBTztBQUNUTSxvQkFBUSxNQURDO0FBRVRELGlCQUFLLGtEQUZJO0FBR1RJLG9CQUFReUcsS0FIQztBQUlUM0cscUJBQVM7QUFDUCw4QkFBZ0I7QUFEVDtBQUpBLFdBQVg7QUFRQW5CLGdCQUFNcUMsY0FBTixDQUFxQnpCLElBQXJCLEVBQTJCcUUsSUFBM0IsQ0FBZ0MsVUFBQytDLElBQUQ7QUFBQSxtQkFBVUEsS0FBS0MsSUFBTCxFQUFWO0FBQUEsV0FBaEMsRUFBdURoRCxJQUF2RCxDQUE0RCxVQUFDaUQsR0FBRCxFQUFTO0FBQ25FLGdCQUFJQSxJQUFJM0MsR0FBSixJQUFXLElBQVgsSUFBbUIyQyxJQUFJM0MsR0FBSixDQUFRd0QsR0FBUixJQUFlLElBQXRDLEVBQTRDekcsT0FBTzRGLElBQUlhLEdBQUosQ0FBUUMsR0FBZixFQUE1QyxLQUNLckk7QUFDTixXQUhEO0FBSUQsU0FwQkQsRUFvQkcsVUFBQ3VFLEtBQUQsRUFBVztBQUFFNUMsaUJBQU80QyxLQUFQO0FBQWUsU0FwQi9CO0FBcUJELE9BdEJNLENBQVA7QUF1QkQ7OztpQ0FDYXdHLE8sRUFBUztBQUNyQjs7Ozs7Ozs7Ozs7O0FBWUEsVUFBSTFLLE9BQU8sSUFBWDtBQUNBLGFBQU8sSUFBSVAsT0FBSixDQUFZLFVBQUNFLE9BQUQsRUFBVTJCLE1BQVYsRUFBcUI7QUFDdENSLGNBQU00SixPQUFOLEVBQWV6RyxJQUFmLENBQW9CLFVBQUNsRCxRQUFEO0FBQUEsaUJBQWNBLFNBQVM0SixXQUFULEVBQWQ7QUFBQSxTQUFwQixFQUEwRDFHLElBQTFELENBQStELFVBQUNsRCxRQUFELEVBQWM7QUFDM0VwQixrQkFBUW9CLFFBQVI7QUFDRCxTQUZEO0FBR0QsT0FKTSxDQUFQO0FBS0Q7Ozs4QkFFVXVELEssRUFBc0Q7QUFBQSxVQUEvQ1csVUFBK0MsdUVBQWxDLEVBQWtDOztBQUFBOztBQUFBLFVBQTlCQyxPQUE4Qix1RUFBcEIsRUFBb0I7QUFBQSxVQUFoQkMsU0FBZ0IsdUVBQUosRUFBSTs7QUFDL0QsVUFBSW5GLE9BQU8sSUFBWDtBQUNBLGFBQU8sSUFBSVAsT0FBSixDQUFZLFVBQUNFLE9BQUQsRUFBVTJCLE1BQVYsRUFBcUI7QUFDdEMsWUFBSThHLGFBQWEsSUFBSTBCLFVBQUosRUFBakI7QUFDQTVFLGdCQUFRc0UsT0FBUixDQUFnQixVQUFDTyxDQUFELEVBQU87QUFDckIsY0FBSUEsRUFBRTlCLEtBQUYsSUFBVyxJQUFYLElBQW1CLENBQUNHLFdBQVc0QixRQUFYLENBQW9CRCxFQUFFOUIsS0FBdEIsQ0FBeEIsRUFBc0RHLFdBQVc2QixRQUFYLENBQW9CRixFQUFFOUIsS0FBdEI7QUFDdkQsU0FGRDtBQUdBaEQsbUJBQVd1RSxPQUFYLENBQW1CLFVBQUNPLENBQUQsRUFBTztBQUN4QixjQUFJQSxFQUFFOUIsS0FBRixJQUFXLElBQVgsSUFBbUIsQ0FBQ0csV0FBVzRCLFFBQVgsQ0FBb0JELEVBQUU5QixLQUF0QixDQUF4QixFQUFzREcsV0FBVzZCLFFBQVgsQ0FBb0JGLEVBQUU5QixLQUF0QjtBQUN2RCxTQUZEO0FBR0EsZUFBS2lDLGtDQUFMLENBQXdDNUYsS0FBeEMsRUFBK0M4RCxVQUEvQyxFQUEyRG5FLElBQTNELENBQWdFLFlBQU07QUFDcEVnQixxQkFBV3VFLE9BQVgsQ0FBbUIsVUFBQ08sQ0FBRCxFQUFPO0FBQ3hCLG1CQUFLSSxtQkFBTCxDQUF5Qi9CLFVBQXpCLEVBQXFDOUQsS0FBckMsRUFBNEN5RixDQUE1QztBQUNELFdBRkQ7QUFHQTdFLGtCQUFRc0UsT0FBUixDQUFnQixVQUFDTyxDQUFELEVBQU87QUFDckIsbUJBQUtPLHNCQUFMLENBQTRCbEMsVUFBNUIsRUFBd0M5RCxLQUF4QyxFQUErQ3lGLENBQS9DO0FBQ0QsV0FGRDtBQUdBL0osZUFBS29LLFNBQUwsQ0FBZTlGLEtBQWYsRUFBc0I4RCxXQUFXaUMsT0FBakMsRUFBMENwRyxJQUExQyxDQUErQyxZQUFNO0FBQ25EdEUsb0JBQVEsSUFBUjtBQUNELFdBRkQ7QUFHRCxTQVZEO0FBV0QsT0FuQk0sQ0FBUDtBQW9CRDs7OzhDQUMwQitLLE8sRUFBUztBQUNsQyxVQUFJMUssT0FBTyxJQUFYO0FBQ0EsYUFBTyxJQUFJUCxPQUFKLENBQVksVUFBQ0UsT0FBRCxFQUFVMkIsTUFBVixFQUFxQjtBQUN0Q3RCLGFBQUs2RyxRQUFMLEdBQWdCNUMsSUFBaEIsQ0FBcUIsVUFBQ29DLEtBQUQsRUFBVztBQUM5QnJHLGVBQUs0SyxZQUFMLENBQWtCRixPQUFsQixFQUEyQnpHLElBQTNCLENBQWdDLFVBQUNrRSxJQUFELEVBQVU7QUFDeEMsZ0JBQUlsSSxNQUFNLGtEQUFWO0FBQ0EsZ0JBQUk0SyxPQUFPLElBQUlDLElBQUosQ0FBUyxDQUFDM0MsSUFBRCxDQUFULEVBQWlCLGVBQWpCLENBQVg7QUFDQSxnQkFBSWQsT0FBTyxJQUFJMEQsUUFBSixFQUFYO0FBQ0ExRCxpQkFBSzJELE1BQUwsQ0FBWSxjQUFaLEVBQTRCM0UsS0FBNUI7QUFDQWdCLGlCQUFLMkQsTUFBTCxDQUFZLFFBQVosRUFBc0IsZ0JBQXRCO0FBQ0EzRCxpQkFBSzJELE1BQUwsQ0FBWSxNQUFaLEVBQW9CSCxJQUFwQjtBQUNBLGdCQUFJSSxJQUFJLElBQUlwSyxlQUFKLENBQW9Cd0csSUFBcEIsQ0FBUjtBQUNBdkcsa0JBQU1iLEdBQU4sRUFBVztBQUNUQyxzQkFBUSxNQURDO0FBRVR3SCxvQkFBTUw7QUFGRyxhQUFYLEVBSUdwRCxJQUpILENBSVE7QUFBQSxxQkFBWWxELFNBQVNrRyxJQUFULEVBQVo7QUFBQSxhQUpSLEVBS0doRCxJQUxILENBS1EsZ0JBQVE7QUFDWixrQkFBSWdELEtBQUsxQyxHQUFMLElBQVksSUFBaEIsRUFBc0I1RSxRQUFRc0gsS0FBSzFDLEdBQUwsQ0FBU3NELEdBQVQsQ0FBYTNCLEVBQXJCLEVBQXRCLEtBQ0ssSUFBSWUsS0FBS2MsR0FBTCxJQUFZLElBQWhCLEVBQXNCekcsT0FBTzJGLEtBQUtjLEdBQUwsQ0FBU0MsR0FBaEI7QUFDNUIsYUFSSCxFQVNEa0QsS0FUQyxDQVNLO0FBQUEscUJBQU81SixPQUFPeUcsR0FBUCxDQUFQO0FBQUEsYUFUTDtBQVVBOzs7Ozs7Ozs7Ozs7Ozs7QUFlRCxXQWpDRDtBQWtDRCxTQW5DRCxFQW1DRyxVQUFDN0QsS0FBRCxFQUFXO0FBQUU1QyxpQkFBTzRDLEtBQVA7QUFBZSxTQW5DL0I7QUFvQ0QsT0FyQ00sQ0FBUDtBQXNDRDs7OzhCQUVVSSxLLEVBQU87O0FBRWhCLFVBQUl0RSxPQUFPLElBQVg7QUFDQSxhQUFPLElBQUlQLE9BQUosQ0FBWSxVQUFDRSxPQUFELEVBQVUyQixNQUFWLEVBQXFCO0FBQ3RDUiwrRUFBcUV6QixTQUFTaUYsS0FBVCxDQUFyRSx1Q0FBd0g7QUFDdEhwRSxrQkFBUSxNQUQ4RztBQUV0SEMsbUJBQVM7QUFDUCw0QkFBZ0IsZ0NBRFQ7QUFFUCw0QkFBZ0JILEtBQUt1RDtBQUZkO0FBRjZHLFNBQXhILEVBTUdVLElBTkgsQ0FNUSxVQUFDK0MsSUFBRDtBQUFBLGlCQUFVQSxLQUFLQyxJQUFMLEVBQVY7QUFBQSxTQU5SLEVBTStCaEQsSUFOL0IsQ0FNb0MsVUFBQ2lELEdBQUQsRUFBUztBQUN6QyxjQUFJQSxJQUFJakgsR0FBSixJQUFXLElBQWYsRUFBcUJxQixPQUFPLE9BQVAsRUFBckIsS0FDSzNCLFFBQVEsSUFBUjtBQUNOLFNBVEg7QUFVQyxPQVhJLEVBV0YsVUFBQ3VFLEtBQUQsRUFBVztBQUFFNUMsZUFBTzRDLEtBQVA7QUFBZSxPQVgxQixDQUFQO0FBWUQ7OztpQ0FFYUksSyxFQUFPO0FBQ25CLFVBQUl0RSxPQUFPLElBQVg7QUFDQSxhQUFPLElBQUlQLE9BQUosQ0FBWSxVQUFDRSxPQUFELEVBQVUyQixNQUFWLEVBQXFCO0FBQ3RDdEIsYUFBSzZHLFFBQUwsR0FBZ0I1QyxJQUFoQixDQUFxQixVQUFDb0MsS0FBRCxFQUFXO0FBQzlCLGNBQUlTLFFBQVE7QUFDVkMsMEJBQWNWLEtBREo7QUFFVm5HLG9CQUFRLG1CQUZFO0FBR1Y0SCxvQkFBUXhELEtBSEU7QUFJVjZHLHdCQUFZO0FBSkYsV0FBWjtBQU1BLGNBQUl2TCxPQUFPO0FBQ1RNLG9CQUFRLEtBREM7QUFFVEQsaUJBQUssa0RBRkk7QUFHVEksb0JBQVF5RyxLQUhDO0FBSVQzRyxxQkFBUztBQUNQLDhCQUFnQixtQ0FEVDtBQUVQLHdCQUFVO0FBRkg7QUFKQSxXQUFYO0FBU0FuQixnQkFBTXFDLGNBQU4sQ0FBcUJ6QixJQUFyQixFQUEyQnFFLElBQTNCLENBQWdDLFVBQUMrQyxJQUFEO0FBQUEsbUJBQVVBLEtBQUtDLElBQUwsRUFBVjtBQUFBLFdBQWhDLEVBQXVEaEQsSUFBdkQsQ0FBNEQsVUFBQ2lELEdBQUQsRUFBUztBQUNuRSxnQkFBSUEsSUFBSTNDLEdBQUosQ0FBUTRDLElBQVIsS0FBaUIsSUFBckIsRUFBMkI3RixPQUFPNEYsSUFBSWEsR0FBSixDQUFRQyxHQUFmLEVBQTNCLEtBQ0tySSxRQUFRLElBQVI7QUFDTixXQUhEO0FBSUQsU0FwQkQsRUFvQkcsVUFBQ3VFLEtBQUQsRUFBVztBQUFFNUMsaUJBQU80QyxLQUFQO0FBQWUsU0FwQi9CO0FBcUJELE9BdEJNLENBQVA7QUF1QkQ7Ozs7O0lBR0c0RixVO0FBQ0osd0JBQWU7QUFBQTs7QUFDYixTQUFLc0IsV0FBTCxHQUFtQixFQUFuQjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0Q7Ozs7NkJBSVNwRCxLLEVBQU87QUFDZixhQUFPLEtBQUtvRCxPQUFMLENBQWFDLElBQWIsQ0FBa0IsVUFBQzlGLENBQUQsRUFBTztBQUFFLGVBQU9BLEVBQUUwQyxlQUFGLEtBQXNCRCxNQUFNQyxlQUFuQztBQUFvRCxPQUEvRSxLQUFvRixJQUEzRjtBQUNEOzs7K0JBQ1dBLGUsRUFBaUI7QUFDM0IsVUFBSXFELE1BQU0sS0FBS0YsT0FBTCxDQUFhQyxJQUFiLENBQWtCLFVBQUM5RixDQUFELEVBQU87QUFBRSxlQUFPQSxFQUFFMEMsZUFBRixLQUFzQkEsZUFBN0I7QUFBOEMsT0FBekUsQ0FBVjtBQUNBLFVBQUlxRCxPQUFPLElBQVAsSUFBZUEsSUFBSXJGLEVBQUosSUFBVSxJQUE3QixFQUFtQyxPQUFPLElBQVA7QUFDbkMsYUFBT3FGLElBQUlyRixFQUFYO0FBQ0Q7Ozs2QkFDUytCLEssRUFBTztBQUNmLFdBQUtvRCxPQUFMLENBQWExSyxJQUFiLENBQWtCLEVBQUNWLEtBQUtnSSxNQUFNeUMsT0FBWixFQUFxQnhDLGlCQUFpQkQsTUFBTUMsZUFBNUMsRUFBNkRoQyxJQUFJLElBQWpFLEVBQWxCO0FBQ0Q7OzsrQkFDV2dDLGUsRUFBaUJoQyxFLEVBQUk7QUFDL0IsVUFBSXFGLE1BQU0sS0FBS0YsT0FBTCxDQUFhQyxJQUFiLENBQWtCLFVBQUM5RixDQUFELEVBQU87QUFBRSxlQUFPQSxFQUFFMEMsZUFBRixLQUFzQkEsZUFBN0I7QUFBOEMsT0FBekUsQ0FBVjtBQUNBLFVBQUlxRCxPQUFPLElBQVgsRUFBaUJBLElBQUlyRixFQUFKLEdBQVNBLEVBQVQ7QUFDbEI7Ozs4QkFDVXNGLE0sRUFBUTtBQUNqQixXQUFLSixXQUFMLENBQWlCekssSUFBakIsQ0FBc0I2SyxNQUF0QjtBQUNEOzs7d0JBcEJhO0FBQ1osYUFBTyxLQUFLSCxPQUFaO0FBQ0Q7Ozt3QkFtQmM7QUFDYixhQUFPLEtBQUtELFdBQVo7QUFDRDs7Ozs7QUFHSGpKLE9BQU9DLE9BQVAsR0FBaUJPLHFCQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4dUJBLElBQU0zRCxRQUFRNEQsbUJBQU9BLENBQUMsRUFBUixDQUFkOztlQUN1QkEsbUJBQU9BLENBQUMsRUFBUixDO0lBQVg2SSxNLFlBQUpDLEU7O0FBQ1IsSUFBTUMsd0JBQXdCLGNBQTlCO0FBQ0EsSUFBTUMsMEJBQTBCLGlCQUFoQzs7SUFFTS9JLGlCO0FBQ0osK0JBQWU7QUFBQTs7QUFDYixTQUFLZ0osS0FBTCxHQUFhLElBQWI7QUFDRDs7OzsyQkFDTztBQUNOLFVBQUk3TCxPQUFPLElBQVg7QUFDQXdELGFBQU9DLE9BQVAsQ0FBZUMsU0FBZixDQUF5QkMsV0FBekIsQ0FBcUMsVUFBQ3BDLE9BQUQsRUFBVXFDLE1BQVYsRUFBa0JDLFlBQWxCLEVBQW1DO0FBQ3RFLFlBQUl0QyxRQUFRdUMsS0FBUixLQUFrQixlQUF0QixFQUF1QztBQUNyQyxjQUFJdkMsUUFBUXdDLE1BQVIsS0FBbUIscUJBQXZCLEVBQThDO0FBQzVDLGdCQUFJeEMsUUFBUXJCLE1BQVIsS0FBbUIsaUJBQXZCLEVBQTBDO0FBQ3hDRixtQkFBSzhMLGVBQUwsQ0FBcUJ2SyxRQUFROEMsSUFBUixDQUFhMEgsUUFBbEMsRUFBNEM5SCxJQUE1QyxDQUFpRCxVQUFDTSxHQUFEO0FBQUEsdUJBQVNWLGFBQWEsRUFBQzlDLFVBQVV3RCxHQUFYLEVBQWIsQ0FBVDtBQUFBLGVBQWpELEVBQXlGLFVBQUNMLEtBQUQ7QUFBQSx1QkFBV0wsYUFBYSxFQUFDSyxPQUFPQSxNQUFNM0MsT0FBZCxFQUFiLENBQVg7QUFBQSxlQUF6RjtBQUNELGFBRkQsTUFFTyxJQUFJQSxRQUFRckIsTUFBUixLQUFtQixTQUF2QixFQUFrQztBQUN2Q0YsbUJBQUtnTSxPQUFMLEdBQWUvSCxJQUFmLENBQW9CLFVBQUNnSSxJQUFEO0FBQUEsdUJBQVVwSSxhQUFhLEVBQUM5QyxVQUFVa0wsSUFBWCxFQUFiLENBQVY7QUFBQSxlQUFwQixFQUE4RCxVQUFDL0gsS0FBRDtBQUFBLHVCQUFXTCxhQUFhLEVBQUNLLE9BQU9BLE1BQU0zQyxPQUFkLEVBQWIsQ0FBWDtBQUFBLGVBQTlEO0FBQ0QsYUFGTSxNQUVBLElBQUlBLFFBQVFyQixNQUFSLEtBQW1CLFNBQXZCLEVBQWtDO0FBQ3ZDRixtQkFBS2tNLE9BQUwsQ0FBYTNLLFFBQVE4QyxJQUFSLENBQWE0SCxJQUExQixFQUFnQ2hJLElBQWhDLENBQXFDLFVBQUNNLEdBQUQ7QUFBQSx1QkFBU1YsYUFBYSxFQUFDOUMsVUFBVSxJQUFYLEVBQWIsQ0FBVDtBQUFBLGVBQXJDLEVBQThFLFVBQUNtRCxLQUFEO0FBQUEsdUJBQVdMLGFBQWEsRUFBQ0ssT0FBTyxJQUFSLEVBQWIsQ0FBWDtBQUFBLGVBQTlFO0FBQ0QsYUFGTSxNQUVBLElBQUkzQyxRQUFRckIsTUFBUixLQUFtQixXQUF2QixFQUFvQztBQUN6Q0YsbUJBQUttTSxTQUFMLEdBQWlCbEksSUFBakIsQ0FBc0IsVUFBQ00sR0FBRDtBQUFBLHVCQUFTVixhQUFhLEVBQUM5QyxVQUFVd0QsR0FBWCxFQUFiLENBQVQ7QUFBQSxlQUF0QixFQUE4RCxVQUFDTCxLQUFEO0FBQUEsdUJBQVdMLGFBQWEsRUFBQ0ssT0FBT0EsS0FBUixFQUFiLENBQVg7QUFBQSxlQUE5RDtBQUNELGFBRk0sTUFFQSxJQUFJM0MsUUFBUXJCLE1BQVIsS0FBbUIsV0FBdkIsRUFBb0M7QUFDekNGLG1CQUFLb00sU0FBTCxDQUFlN0ssUUFBUThDLElBQVIsQ0FBYWdJLE1BQTVCLEVBQW9DcEksSUFBcEMsQ0FBeUMsVUFBQ00sR0FBRDtBQUFBLHVCQUFTVixhQUFhLEVBQUM5QyxVQUFVd0QsR0FBWCxFQUFiLENBQVQ7QUFBQSxlQUF6QyxFQUFpRixVQUFDTCxLQUFEO0FBQUEsdUJBQVdMLGFBQWEsRUFBQ0ssT0FBT0EsS0FBUixFQUFiLENBQVg7QUFBQSxlQUFqRjtBQUNEO0FBQ0Y7QUFDRCxpQkFBTyxJQUFQO0FBQ0Q7QUFDRixPQWpCRDtBQWtCRDs7OzhCQUNVO0FBQ1QsYUFBTyxJQUFJekUsT0FBSixDQUFZLFVBQUNFLE9BQUQsRUFBVTJCLE1BQVYsRUFBcUI7QUFDdENrQyxlQUFPZ0QsT0FBUCxDQUFlQyxJQUFmLENBQW9CSCxHQUFwQixDQUF3QnFGLHFCQUF4QixFQUErQyxVQUFDL0UsT0FBRCxFQUFhO0FBQzFELGNBQUlxRixPQUFPckYsUUFBUStFLHFCQUFSLEtBQWtDLElBQTdDO0FBQ0FoTSxrQkFBUXNNLFFBQVEsa0JBQWhCO0FBQ0QsU0FIRDtBQUlELE9BTE0sQ0FBUDtBQU1EOzs7NEJBQ1FBLEksRUFBTTtBQUNiLGFBQU8sSUFBSXhNLE9BQUosQ0FBWSxVQUFDRSxPQUFELEVBQVUyQixNQUFWLEVBQXFCO0FBQ3RDLFlBQUkxQixPQUFPLEVBQVg7QUFDQUEsYUFBSytMLHFCQUFMLElBQThCTSxJQUE5QjtBQUNBekksZUFBT2dELE9BQVAsQ0FBZUMsSUFBZixDQUFvQkMsR0FBcEIsQ0FBd0I5RyxJQUF4QixFQUE4QixZQUFNO0FBQ2xDRDtBQUNELFNBRkQ7QUFHRCxPQU5NLENBQVA7QUFPRDs7OzsyR0FFc0JvTSxROzs7Ozs7O3VCQUNKLEtBQUtDLE9BQUwsRTs7O0FBQWJDLG9COzhCQUNJQSxJO2dEQUNELGtCLHVCQUVBLG1COzs7O2lEQURJLEtBQUtLLG9CQUFMLENBQTBCUCxRQUExQixDOzs7aURBRUEsS0FBS1EscUJBQUwsQ0FBMkJSLFFBQTNCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHYjs7Ozs7Ozs7Ozs7OztBQUlNbk0sb0IsR0FBTztBQUNUTSwwQkFBUSxLQURDO0FBRVRELHVCQUFLO0FBRkksaUI7Ozt1QkFLUWpCLE1BQU1xQyxjQUFOLENBQXFCekIsSUFBckIsQzs7O0FBQWJvSCxvQjs7dUJBQ1lBLEtBQUtDLElBQUwsRTs7O0FBQVpDLG1CO2tEQUNHQSxJQUFJc0YsV0FBSixJQUFtQixJOzs7OztrREFFbkIvTSxRQUFRNkIsTUFBUixDQUFlLElBQUltTCxLQUFKLENBQVUsZ0NBQVYsQ0FBZixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZHQUdlQyxjLEVBQWdCckcsSzs7Ozs7O0FBQ3BDcUIsb0IsR0FBTztBQUNULGdDQUFjO0FBREwsaUI7QUFHUDlILG9CLEdBQU87QUFDVE0sMEJBQVEsT0FEQztBQUVURCx1QkFBSyxzREFBc0R5TSxjQUZsRDtBQUdUck0sMEJBQVFzSCxLQUFLQyxTQUFMLENBQWVGLElBQWYsQ0FIQztBQUlUdkgsMkJBQVM7QUFDUCxxQ0FBaUIsWUFBWWtHLEtBRHRCO0FBRVAsb0NBQWdCO0FBRlQ7QUFKQSxpQjs7O3VCQVVRckgsTUFBTXFDLGNBQU4sQ0FBcUJ6QixJQUFyQixDOzs7QUFBYm9ILG9COzt1QkFDWUEsS0FBS0MsSUFBTCxFOzs7QUFBWkMsbUI7a0RBQ0dBLEc7Ozs7O2tEQUVBekgsUUFBUTZCLE1BQVIsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2R0FHU3lLLFEsRUFBVTFGLEs7Ozs7Ozs7QUFDeEJTLHFCLEdBQVE7QUFDViwyQkFBUyx5QkFEQztBQUVWLHVDQUFxQjJFLFFBRlg7QUFHViw0QkFBVSxNQUhBO0FBSVYsOEJBQVksQ0FDVixFQUFDLE1BQU1BLFFBQVA7QUFDRSw0QkFBUSxNQURWO0FBRUUsK0JBQVc7QUFDVCxzQ0FBZ0IsTUFEUDtBQUVULCtCQUFTLENBQUNNLFFBQUQ7QUFGQTtBQUZiLG1CQURVO0FBSkYsaUI7QUFjUm5NLG9CLEdBQU87QUFDVE0sMEJBQVEsTUFEQztBQUVUd0gsd0JBQU1DLEtBQUtDLFNBQUwsQ0FBZWQsS0FBZixDQUZHO0FBR1QzRywyQkFBUztBQUNQLHFDQUFpQixZQUFZa0csS0FEdEI7QUFFUCxvQ0FBZ0I7QUFGVDtBQUhBLGlCOzs7dUJBU1V2RixNQUFNLGtEQUFOLEVBQTBEbEIsSUFBMUQsQzs7O0FBQWJvSCxvQjs7b0JBQ0RBLEtBQUtoRyxFOzs7OztrREFDRHZCLFFBQVE2QixNQUFSLENBQWUsSUFBSW1MLEtBQUosQ0FBVSxrQ0FBVixDQUFmLEM7OztBQUVIRSxzQixHQUFTM0YsS0FBS1UsSUFBTCxDQUFVa0YsU0FBVixFO0FBQ1hDLG1CLEdBQU0sRTs7Ozs7Ozs7O3VCQUVvQkYsT0FBT0csSUFBUCxFOzs7O0FBQXJCbEgscUIsU0FBQUEsSztBQUFPbUgsb0IsU0FBQUEsSTs7cUJBQ1ZBLEk7Ozs7Ozs7O0FBQ0FDLG9CLEdBQU8sSUFBSUMsV0FBSixHQUFrQkMsTUFBbEIsQ0FBeUJ0SCxLQUF6QixDOztBQUNYaUgsdUJBQU9HLElBQVA7Ozs7O0FBRUVHLDBCLEdBQWFOLElBQUlPLEtBQUosQ0FBVSxTQUFWLEM7O3NCQUNiRCxXQUFXakwsTUFBWCxHQUFvQixDOzs7OztBQUNsQm1GLG9CLEdBQU84RixXQUFXQSxXQUFXakwsTUFBWCxHQUFvQixDQUEvQixFQUFrQ2tFLE9BQWxDLENBQTBDLE9BQTFDLEVBQW1ELEVBQW5ELEM7QUFDUGlILHdCOzs7QUFFRkEsMkJBQVcxRixLQUFLMkYsS0FBTCxDQUFXakcsSUFBWCxDQUFYOzs7Ozs7O2tEQUVPNUgsUUFBUTZCLE1BQVIsQ0FBZSxJQUFJbUwsS0FBSix1Q0FBNkNwRixJQUE3QyxDQUFmLEM7OztrREFFRmdHLFE7OztrREFFRixFOzs7OztrREFFQTVOLFFBQVE2QixNQUFSLGM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkdBR2lCeUssUTs7Ozs7Ozs7dUJBRU4sS0FBS2xGLFFBQUwsRTs7O0FBQWRSLHFCOztzQkFDQUEsU0FBUyxJOzs7OztrREFBYTVHLFFBQVE2QixNQUFSLENBQWUsSUFBSW1MLEtBQUosQ0FBVSxnQ0FBVixDQUFmLEM7Ozs7dUJBQ1AsS0FBS2MsWUFBTCxDQUFrQnhCLFFBQWxCLEVBQTRCMUYsS0FBNUIsQzs7O0FBQWZtSCxzQjs7c0JBQ0FBLE9BQU9qTSxPQUFQLElBQWtCLEk7Ozs7O2tEQUFhOUIsUUFBUTZCLE1BQVIsQ0FBZSxJQUFJbUwsS0FBSixtQ0FBZixDOzs7QUFDbkMsb0JBQUllLE9BQU9DLGVBQVAsSUFBMEIsSUFBOUIsRUFBb0MsS0FBS0Msa0JBQUwsQ0FBd0JGLE9BQU9DLGVBQS9CLEVBQWdEcEgsS0FBaEQ7a0RBQzdCbUgsT0FBT2pNLE9BQVAsQ0FBZW9NLE9BQWYsQ0FBdUJDLEtBQXZCLENBQTZCLENBQTdCLEM7Ozs7O2tEQUVBbk8sUUFBUTZCLE1BQVIsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJWDs7Ozs7OzBDQUd1QnlLLFEsRUFBVTtBQUMvQixVQUFJL0wsT0FBTyxJQUFYO0FBQ0EsYUFBTyxJQUFJUCxPQUFKLENBQVksVUFBQ0UsT0FBRCxFQUFVMkIsTUFBVixFQUFxQjtBQUN0QyxZQUFJdEIsS0FBSzZOLE9BQUwsSUFBZ0IsSUFBaEIsSUFBd0I3TixLQUFLNk4sT0FBTCxLQUFpQixFQUE3QyxFQUFpRDtBQUMvQ3ZNLGlCQUFPLElBQUltTCxLQUFKLENBQVUsMkRBQVYsQ0FBUDtBQUNBO0FBQ0Q7QUFDRCxZQUFJM0YsUUFBUTtBQUNWLG1CQUFTLGVBREM7QUFFVixzQkFBWSxDQUNWLEVBQUMsUUFBUSxNQUFUO0FBQ0UsdUJBQVdpRixRQURiLEVBRFUsQ0FGRjtBQU1WLHlCQUFlO0FBTkwsU0FBWjtBQVFBLFlBQUluTSxPQUFPO0FBQ1RNLGtCQUFRLE1BREM7QUFFVEQsZUFBSyw0Q0FGSTtBQUdUSSxrQkFBUXNILEtBQUtDLFNBQUwsQ0FBZWQsS0FBZixDQUhDO0FBSVQzRyxtQkFBUztBQUNQLDRCQUFnQixrQkFEVDtBQUVQLDZCQUFpQixZQUFZSCxLQUFLNk47QUFGM0I7QUFKQSxTQUFYO0FBU0E3TyxjQUFNcUMsY0FBTixDQUFxQnpCLElBQXJCLEVBQTJCcUUsSUFBM0IsQ0FBZ0MsVUFBQytDLElBQUQ7QUFBQSxpQkFBVUEsS0FBS0MsSUFBTCxFQUFWO0FBQUEsU0FBaEMsRUFBdURoRCxJQUF2RCxDQUE0RCxVQUFDaUQsR0FBRCxFQUFTO0FBQ25FLGNBQUlBLElBQUk0RyxPQUFKLElBQWUsSUFBZixJQUF1QjVHLElBQUk0RyxPQUFKLENBQVk1TCxNQUFaLEtBQXVCLENBQWxELEVBQXFEWixPQUFPLElBQUltTCxLQUFKLENBQVUsd0JBQVYsQ0FBUCxFQUFyRCxLQUNLOU0sUUFBUXVILElBQUk0RyxPQUFKLENBQVksQ0FBWixFQUFldk0sT0FBZixDQUF1Qm9NLE9BQS9CO0FBQ04sU0FIRCxFQUdHekMsS0FISCxDQUdTLFVBQUNoSCxLQUFELEVBQVc7QUFDbEIsY0FBSTtBQUNGQSxrQkFBTW5ELFFBQU4sQ0FBZWtHLElBQWYsR0FBc0JoRCxJQUF0QixDQUEyQixVQUFDOEQsR0FBRCxFQUFTO0FBQ2xDLGtCQUFJQSxJQUFJN0QsS0FBSixJQUFhLElBQWIsSUFBcUI2RCxJQUFJN0QsS0FBSixDQUFVM0MsT0FBVixJQUFxQixJQUE5QyxFQUFvREQsT0FBTyxJQUFJbUwsS0FBSixDQUFVMUUsSUFBSTdELEtBQUosQ0FBVTNDLE9BQXBCLENBQVAsRUFBcEQsS0FDS0QsT0FBTyxJQUFJbUwsS0FBSixDQUFVLHVCQUFWLENBQVA7QUFDTixhQUhEO0FBSUQsV0FMRCxDQUtFLE9BQU9zQixDQUFQLEVBQVU7QUFDVnpNLG1CQUFPLElBQUltTCxLQUFKLENBQVUsa0NBQVYsQ0FBUDtBQUNEO0FBQ0YsU0FaRDtBQWFELE9BbkNNLENBQVA7QUFvQ0Q7OztnQ0FDWTtBQUNYLGFBQU8sSUFBSWhOLE9BQUosQ0FBWSxVQUFDRSxPQUFELEVBQVUyQixNQUFWLEVBQXFCO0FBQ3RDa0MsZUFBT2dELE9BQVAsQ0FBZUMsSUFBZixDQUFvQkgsR0FBcEIsQ0FBd0JzRix1QkFBeEIsRUFBaUQsVUFBQ2hGLE9BQUQsRUFBYTtBQUM1RCxjQUFJUCxRQUFRTyxRQUFRZ0YsdUJBQVIsS0FBb0MsSUFBaEQ7QUFDQWpNLGtCQUFRMEcsS0FBUjtBQUNELFNBSEQ7QUFJRCxPQUxNLENBQVA7QUFNRDs7OzhCQUNVMkgsRyxFQUFLO0FBQ2QsVUFBSWhPLE9BQU8sSUFBWDtBQUNBLGFBQU8sSUFBSVAsT0FBSixDQUFZLFVBQUNFLE9BQUQsRUFBVTJCLE1BQVYsRUFBcUI7QUFDdEN0QixhQUFLaU8sVUFBTCxDQUFnQkQsR0FBaEIsRUFBcUIvSixJQUFyQixDQUEwQixZQUFNO0FBQzlCLGNBQUlyRSxPQUFPLEVBQVg7QUFDQUEsZUFBS2dNLHVCQUFMLElBQWdDb0MsR0FBaEM7QUFDQXhLLGlCQUFPZ0QsT0FBUCxDQUFlQyxJQUFmLENBQW9CQyxHQUFwQixDQUF3QjlHLElBQXhCLEVBQThCLFlBQU07QUFDbENJLGlCQUFLNk4sT0FBTCxHQUFlRyxHQUFmO0FBQ0FyTyxvQkFBUSxJQUFSO0FBQ0QsV0FIRDtBQUlELFNBUEQsRUFPR3VMLEtBUEgsQ0FPUyxVQUFDaEgsS0FBRDtBQUFBLGlCQUFXNUMsT0FBTzRDLEtBQVAsQ0FBWDtBQUFBLFNBUFQ7QUFRRCxPQVRNLENBQVA7QUFVRDs7OytCQUNXOEosRyxFQUFLO0FBQ2YsYUFBTyxJQUFJdk8sT0FBSixDQUFZLFVBQUNFLE9BQUQsRUFBVTJCLE1BQVYsRUFBcUI7QUFDdEMsWUFBSTFCLE9BQU87QUFDVE0sa0JBQVEsS0FEQztBQUVURCxlQUFLLGtDQUZJO0FBR1RFLG1CQUFTO0FBQ1AsNEJBQWdCLGtCQURUO0FBRVAsNkJBQWlCLFlBQVk2TjtBQUZ0QjtBQUhBLFNBQVg7QUFRQWhQLGNBQU1xQyxjQUFOLENBQXFCekIsSUFBckIsRUFBMkJxRSxJQUEzQixDQUFnQyxVQUFDK0MsSUFBRDtBQUFBLGlCQUFVQSxLQUFLQyxJQUFMLEVBQVY7QUFBQSxTQUFoQyxFQUF1RGhELElBQXZELENBQTRELFVBQUNpRCxHQUFELEVBQVM7QUFDbkUsY0FBSUEsSUFBSUcsSUFBSixJQUFZLElBQWhCLEVBQXNCL0YsT0FBTyxJQUFJbUwsS0FBSixDQUFVLGlCQUFWLENBQVAsRUFBdEIsS0FDSzlNLFFBQVEsSUFBUjtBQUNOLFNBSEQsRUFHR3VMLEtBSEgsQ0FHUyxVQUFDaEgsS0FBRCxFQUFXO0FBQ2xCNUMsaUJBQU80QyxLQUFQO0FBQ0QsU0FMRDtBQU1ELE9BZk0sQ0FBUDtBQWdCRDs7Ozs7QUFHSC9CLE9BQU9DLE9BQVAsR0FBaUJTLGlCQUFqQixDOzs7Ozs7O0FDbFBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0U7QUFDUTtBQUNFO0FBQ0U7Ozs7Ozs7O0FDUHREO0FBQUE7QUFBMkI7QUFDc0I7QUFDakQ7QUFDQTtBQUNBOztBQUVBOztBQUVBLGNBQWM7OztBQUdkO0FBQ0EsbUJBQW1COztBQUVuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFO0FBQy9FO0FBQ0E7O0FBRUE7QUFDQSx3REFBd0Qsd0RBQUc7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0EsdUVBQXVFO0FBQ3ZFOztBQUVBLDJFQUEyRTs7QUFFM0UsK0RBQStEOztBQUUvRDtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUI7O0FBRXZCLDBCQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQSxzQkFBc0I7O0FBRXRCLG1DQUFtQzs7QUFFbkMsNkJBQTZCOztBQUU3QixpQ0FBaUM7O0FBRWpDLDJCQUEyQjs7QUFFM0IsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTs7QUFFQSxnQkFBZ0IsOEVBQWU7QUFDL0I7O0FBRWUsMkRBQUUsRTs7Ozs7OztBQzlGRix1RUFBYyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxHQUFHLHlDQUF5QyxFOzs7Ozs7O0FDQXBJO0FBQUE7QUFBMkI7QUFDQTtBQUMzQixXQUFXLGdFQUFHLGFBQWEsd0RBQUc7QUFDZiwyREFBRSxFOzs7Ozs7O0FDSGpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EOztBQUVwRDs7QUFFQSxtQkFBbUIsZ0JBQWdCO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsY0FBYztBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGNBQWM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixhQUFhO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWUsNERBQUcsRTs7Ozs7OztBQ3RObEI7QUFBQTtBQUFBO0FBQWlDO0FBQ047QUFDc0I7O0FBRWpEO0FBQ0EsTUFBTSwyREFBTTtBQUNaLFdBQVcsMkRBQU07QUFDakI7O0FBRUE7QUFDQSxpREFBaUQsd0RBQUcsSUFBSTs7QUFFeEQ7QUFDQSxrQ0FBa0M7O0FBRWxDO0FBQ0E7O0FBRUEsbUJBQW1CLFFBQVE7QUFDM0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFNBQVMsOEVBQWU7QUFDeEI7O0FBRWUsMkRBQUUsRTs7Ozs7OztBQzVCakI7QUFDZTtBQUNmO0FBQ0EsQ0FBQyxFOzs7Ozs7O0FDSEQ7QUFBQTtBQUEyQjtBQUNFO0FBQzdCLFdBQVcsZ0VBQUcsYUFBYSx5REFBSTtBQUNoQiwyREFBRSxFOzs7Ozs7O0FDSGpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9EQUFvRDs7QUFFcEQ7O0FBRUEsbUJBQW1CLGdCQUFnQjtBQUNuQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsT0FBTztBQUN4Qjs7QUFFQSxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixPQUFPO0FBQ3hCOztBQUVBLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0E7O0FBRUEsb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWUsNkRBQUksRTs7Ozs7OztBQy9GSiwrRkFBc0MsRTs7Ozs7OztBQ0FyRDtBQUFxQzs7QUFFckM7QUFDQSxPQUFPLHFFQUFRO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVlLGdFQUFPLEUiLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDkxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1YTMzM2M4NjFjNGE1Y2MyNWVkNCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjUuMScgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgSVNfV1JBUCA9IHR5cGUgJiAkZXhwb3J0Llc7XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXTtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBrZXksIG93biwgb3V0O1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmIChvd24gJiYga2V5IGluIGV4cG9ydHMpIGNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24gKEMpIHtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBDKSB7XG4gICAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQygpO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZiAoSVNfUFJPVE8pIHtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZiAodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSkgaGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG4vLyAyNS40LjEuNSBOZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcblxuZnVuY3Rpb24gUHJvbWlzZUNhcGFiaWxpdHkoQykge1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbiAoJCRyZXNvbHZlLCAkJHJlamVjdCkge1xuICAgIGlmIChyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCA9IGFGdW5jdGlvbihyZWplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gKEMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKSB7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpLCAnT2JqZWN0JywgeyBkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZiB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJjbGFzcyBVdGlscyB7XG4gIHN0YXRpYyBoZXhUb1JnYiAoaGV4KSB7XG4gICAgdmFyIHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpXG4gICAgcmV0dXJuIHJlc3VsdCA/IHtcbiAgICAgIHI6IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxuICAgICAgZzogcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksXG4gICAgICBiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KVxuICAgIH0gOiBudWxsXG4gIH1cbiAgc3RhdGljIHNsZWVwIChtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKVxuICB9XG4gIHN0YXRpYyBhc3luYyBwZXJmb3JtUmVxdWVzdCAob3B0cywgcmVxT3B0aW9ucyA9IHtyZW1haW5pbmdBdHRlbXB0czogNCwgYXR0ZW1wdDogMH0pIHtcbiAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICBsZXQgdXJsID0gb3B0cy51cmxcbiAgICBsZXQgciA9IHtcbiAgICAgIG1ldGhvZDogb3B0cy5tZXRob2QgfHwgJ0dFVCcsXG4gICAgICBoZWFkZXJzOiBvcHRzLmhlYWRlcnMgfHwge31cbiAgICB9XG4gICAgc3dpdGNoIChvcHRzLm1ldGhvZCkge1xuICAgICAgY2FzZSAnUE9TVCc6XG4gICAgICAgIC8vIHRvZG8gY29uc2lkZXIgZGlmZmVyZW50IGNvbnRlbnQtdHlwZXNcbiAgICAgICAgaWYgKHIuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPT0gbnVsbCB8fCByLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddLmluY2x1ZGVzKCdhcHBsaWNhdGlvbi9qc29uJykpIHtcbiAgICAgICAgICByWydib2R5J10gPSBvcHRzLnBhcmFtc1xuICAgICAgICB9IGVsc2UgaWYgKHIuaGVhZGVyc1snQ29udGVudC1UeXBlJ10uaW5jbHVkZXMoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpKXtcbiAgICAgICAgICBsZXQgZm9ybUJvZHkgPSBbXVxuICAgICAgICAgIGZvciAobGV0IHByb3BlcnR5IGluIG9wdHMucGFyYW1zKSB7XG4gICAgICAgICAgICBsZXQgZW5jb2RlZEtleSA9IGVuY29kZVVSSUNvbXBvbmVudChwcm9wZXJ0eSlcbiAgICAgICAgICAgIGxldCBlbmNvZGVkVmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQob3B0cy5wYXJhbXNbcHJvcGVydHldKVxuICAgICAgICAgICAgZm9ybUJvZHkucHVzaChlbmNvZGVkS2V5ICsgJz0nICsgZW5jb2RlZFZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgICAgICBmb3JtQm9keSA9IGZvcm1Cb2R5LmpvaW4oJyYnKVxuICAgICAgICAgIHJbJ2JvZHknXSA9IGZvcm1Cb2R5XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ0dFVCc6XG4gICAgICAgIHVybCArPSAnPycgKyBuZXcgVVJMU2VhcmNoUGFyYW1zKG9wdHMucGFyYW1zKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnREVMRVRFJzpcbiAgICAgICAgLy8gRE8gTk9USElOR1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnUEFUQ0gnOlxuICAgICAgICByWydib2R5J10gPSBvcHRzLnBhcmFtc1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnUFVUJzpcbiAgICAgICAgLy8gdG9kb1xuICAgICAgICBicmVha1xuICAgIH1cbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHIpXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY2hlY2sgZXJyb3JcbiAgICAgIC8vIGlmIHRpbWVvdXQgZXJyb3IgLS0+IHJldHJ5XG4gICAgICBpZiAocmVxT3B0aW9ucy5yZW1haW5pbmdBdHRlbXB0cyA+IDApIHtcbiAgICAgICAgbGV0IGludGVydmFsID0gNTAwICogTWF0aC5wb3coMiwgcmVxT3B0aW9ucy5hdHRlbXB0KSAvLyBtYWtlIGNvbmZpZ3VyYWJsZVxuICAgICAgICBhd2FpdCB0aGF0LnNsZWVwKGludGVydmFsKVxuICAgICAgICByZXFPcHRpb25zLnJlbWFpbmluZ0F0dGVtcHRzLS1cbiAgICAgICAgcmVxT3B0aW9ucy5hdHRlbXB0KytcbiAgICAgICAgcmV0dXJuIHRoYXQucGVyZm9ybVJlcXVlc3Qob3B0cywgcmVxT3B0aW9ucylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7bWVzc2FnZTogJ1JlcXVlc3QgZXJyb3InLCBjYXVzZToge2NvZGU6IHJlc3BvbnNlLnN0YXR1c30sIHJlc3BvbnNlOiByZXNwb25zZX0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHByZXR0aWZ5Tm9kZVRleHQgKHRleHQpIHtcbiAgICBjb25zdCBsaW5lQ2hhcnMgPSAyMFxuICAgIGxldCBuZXdUZXh0ID0gJydcbiAgICBsZXQgcmVtYWluZGVyID0gdGV4dFxuICAgIGRvIHtcbiAgICAgIG5ld1RleHQgPSBuZXdUZXh0ICsgcmVtYWluZGVyLnN1YnN0cmluZygwLCBsaW5lQ2hhcnMtMSlcbiAgICAgIHJlbWFpbmRlciA9IHJlbWFpbmRlci5zdWJzdHJpbmcobGluZUNoYXJzIC0gMSlcbiAgICAgIGxldCBuZXh0QmxhbmsgPSByZW1haW5kZXIuaW5kZXhPZignICcpXG4gICAgICBpZiAobmV4dEJsYW5rID09IC0xKXtcbiAgICAgICAgbmV3VGV4dCArPSByZW1haW5kZXJcbiAgICAgICAgcmVtYWluZGVyID0gJydcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1RleHQgKz0gcmVtYWluZGVyLnN1YnN0cmluZygwLCBuZXh0QmxhbmspICsgJ1xcbidcbiAgICAgICAgcmVtYWluZGVyID0gcmVtYWluZGVyLnN1YnN0cmluZyhuZXh0QmxhbmsgKyAxKVxuICAgICAgfVxuICAgIH0gd2hpbGUgKHJlbWFpbmRlci5sZW5ndGggPiAwKVxuICAgIHJldHVybiBuZXdUZXh0XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVdGlsc1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3NjcmlwdHMvdXRpbHMvVXRpbHMuanMiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSkgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBEKSB7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gIHZhciBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGludm9rZSA9IHJlcXVpcmUoJy4vX2ludm9rZScpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuL19odG1sJyk7XG52YXIgY2VsID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBzZXRUYXNrID0gZ2xvYmFsLnNldEltbWVkaWF0ZTtcbnZhciBjbGVhclRhc2sgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGU7XG52YXIgTWVzc2FnZUNoYW5uZWwgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWw7XG52YXIgRGlzcGF0Y2ggPSBnbG9iYWwuRGlzcGF0Y2g7XG52YXIgY291bnRlciA9IDA7XG52YXIgcXVldWUgPSB7fTtcbnZhciBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbnZhciBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpZCA9ICt0aGlzO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIGlmIChxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmICghc2V0VGFzayB8fCAhY2xlYXJUYXNrKSB7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIHZhciBpID0gMTtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKSB7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmIChyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2VzcycpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIFNwaGVyZSAoSlMgZ2FtZSBlbmdpbmUpIERpc3BhdGNoIEFQSVxuICB9IGVsc2UgaWYgKERpc3BhdGNoICYmIERpc3BhdGNoLm5vdykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBEaXNwYXRjaC5ub3coY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZiAoTWVzc2FnZUNoYW5uZWwpIHtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgcG9ydCA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZiAoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0JykpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiB7IGU6IGZhbHNlLCB2OiBleGVjKCkgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB7IGU6IHRydWUsIHY6IGUgfTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wZXJmb3JtLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEMsIHgpIHtcbiAgYW5PYmplY3QoQyk7XG4gIGlmIChpc09iamVjdCh4KSAmJiB4LmNvbnN0cnVjdG9yID09PSBDKSByZXR1cm4geDtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZihDKTtcbiAgdmFyIHJlc29sdmUgPSBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlO1xuICByZXNvbHZlKHgpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3Byb21pc2UgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9wcm9taXNlXCIpO1xuXG52YXIgX3Byb21pc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvbWlzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBnZW4gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiBuZXcgX3Byb21pc2UyLmRlZmF1bHQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgZnVuY3Rpb24gc3RlcChrZXksIGFyZykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBfcHJvbWlzZTIuZGVmYXVsdC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgc3RlcChcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIHN0ZXAoXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdGVwKFwibmV4dFwiKTtcbiAgICB9KTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID0gKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9tYXN0ZXIvTElDRU5TRSBmaWxlLiBBblxuICogYWRkaXRpb25hbCBncmFudCBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluXG4gKiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2VcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5wcm9taXNlLnRyeScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUHJvbWlzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG52YXIgRE9NSXRlcmFibGVzID0gKCdDU1NSdWxlTGlzdCxDU1NTdHlsZURlY2xhcmF0aW9uLENTU1ZhbHVlTGlzdCxDbGllbnRSZWN0TGlzdCxET01SZWN0TGlzdCxET01TdHJpbmdMaXN0LCcgK1xuICAnRE9NVG9rZW5MaXN0LERhdGFUcmFuc2Zlckl0ZW1MaXN0LEZpbGVMaXN0LEhUTUxBbGxDb2xsZWN0aW9uLEhUTUxDb2xsZWN0aW9uLEhUTUxGb3JtRWxlbWVudCxIVE1MU2VsZWN0RWxlbWVudCwnICtcbiAgJ01lZGlhTGlzdCxNaW1lVHlwZUFycmF5LE5hbWVkTm9kZU1hcCxOb2RlTGlzdCxQYWludFJlcXVlc3RMaXN0LFBsdWdpbixQbHVnaW5BcnJheSxTVkdMZW5ndGhMaXN0LFNWR051bWJlckxpc3QsJyArXG4gICdTVkdQYXRoU2VnTGlzdCxTVkdQb2ludExpc3QsU1ZHU3RyaW5nTGlzdCxTVkdUcmFuc2Zvcm1MaXN0LFNvdXJjZUJ1ZmZlckxpc3QsU3R5bGVTaGVldExpc3QsVGV4dFRyYWNrQ3VlTGlzdCwnICtcbiAgJ1RleHRUcmFja0xpc3QsVG91Y2hMaXN0Jykuc3BsaXQoJywnKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBET01JdGVyYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBET01JdGVyYWJsZXNbaV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZiAocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBraW5kID0gdGhpcy5faztcbiAgdmFyIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgbWljcm90YXNrID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi9fcHJvbWlzZS1yZXNvbHZlJyk7XG52YXIgUFJPTUlTRSA9ICdQcm9taXNlJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciAkUHJvbWlzZSA9IGdsb2JhbFtQUk9NSVNFXTtcbnZhciBpc05vZGUgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJztcbnZhciBlbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBJbnRlcm5hbCwgbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBPd25Qcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmY7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgPSAkUHJvbWlzZS5yZXNvbHZlKDEpO1xuICAgIHZhciBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgICAgIGV4ZWMoZW1wdHksIGVtcHR5KTtcbiAgICB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uIChwcm9taXNlLCBpc1JlamVjdCkge1xuICBpZiAocHJvbWlzZS5fbikgcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciBvayA9IHByb21pc2UuX3MgPT0gMTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uIChyZWFjdGlvbikge1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbDtcbiAgICAgIHZhciByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZTtcbiAgICAgIHZhciByZWplY3QgPSByZWFjdGlvbi5yZWplY3Q7XG4gICAgICB2YXIgZG9tYWluID0gcmVhY3Rpb24uZG9tYWluO1xuICAgICAgdmFyIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgaWYgKCFvaykge1xuICAgICAgICAgICAgaWYgKHByb21pc2UuX2ggPT0gMikgb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhbmRsZXIgPT09IHRydWUpIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2UpIHtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaSkgcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYgKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKSBvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIHVuaGFuZGxlZCA9IGlzVW5oYW5kbGVkKHByb21pc2UpO1xuICAgIHZhciByZXN1bHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYgKHVuaGFuZGxlZCkge1xuICAgICAgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc05vZGUpIHtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKSB7XG4gICAgICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWUgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZiAodW5oYW5kbGVkICYmIHJlc3VsdC5lKSB0aHJvdyByZXN1bHQudjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgaWYgKHByb21pc2UuX2ggPT0gMSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9hIHx8IHByb21pc2UuX2M7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlYWN0aW9uO1xuICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaSkge1xuICAgIHJlYWN0aW9uID0gY2hhaW5baSsrXTtcbiAgICBpZiAocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpIHJldHVybiBmYWxzZTtcbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYgKGlzTm9kZSkge1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCkge1xuICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdiB9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZiAoIXByb21pc2UuX2EpIHByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICB2YXIgdGhlbjtcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkgdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSkge1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAkcmVqZWN0LmNhbGwoeyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICB2YXIgcmVhY3Rpb24gPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX2EpIHRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fcykgbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIE93blByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9taXNlID0gbmV3IEludGVybmFsKCk7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xuICBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoQykge1xuICAgIHJldHVybiBDID09PSAkUHJvbWlzZSB8fCBDID09PSBXcmFwcGVyXG4gICAgICA/IG5ldyBPd25Qcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgOiBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgUHJvbWlzZTogJFByb21pc2UgfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpIHtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpO1xuICAgIHZhciAkJHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCkge1xuICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShMSUJSQVJZICYmIHRoaXMgPT09IFdyYXBwZXIgPyAkUHJvbWlzZSA6IHRoaXMsIHgpO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVzb2x2ZSA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIHZhciByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICB2YXIgJGluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgdmFyIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGlmIChhbHJlYWR5Q2FsbGVkKSByZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCkge1xuICBpZiAoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBCUkVBSyA9IHt9O1xudmFyIFJFVFVSTiA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKSB7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKTtcbiAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYgKGlzQXJyYXlJdGVyKGl0ZXJGbikpIGZvciAobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgYXJncywgdGhhdCkge1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBPYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG52YXIgaXNOb2RlID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYgKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKSBwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGhlYWQpIG5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYgKGlzTm9kZSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlclxuICB9IGVsc2UgaWYgKE9ic2VydmVyKSB7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWU7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZiAoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpIHtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGZuKSB7XG4gICAgdmFyIHRhc2sgPSB7IGZuOiBmbiwgbmV4dDogdW5kZWZpbmVkIH07XG4gICAgaWYgKGxhc3QpIGxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYgKCFoZWFkKSB7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBzYWZlKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHtcbiAgICBpZiAoc2FmZSAmJiB0YXJnZXRba2V5XSkgdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICBlbHNlIGhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfSByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSkge1xuICB2YXIgQyA9IHR5cGVvZiBjb3JlW0tFWV0gPT0gJ2Z1bmN0aW9uJyA/IGNvcmVbS0VZXSA6IGdsb2JhbFtLRVldO1xuICBpZiAoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSkgZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gIGlmICghc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBbN107XG4gICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiBzYWZlID0gdHJ1ZSB9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcm9taXNlLWZpbmFsbHlcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuL19wcm9taXNlLXJlc29sdmUnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlIsICdQcm9taXNlJywgeyAnZmluYWxseSc6IGZ1bmN0aW9uIChvbkZpbmFsbHkpIHtcbiAgdmFyIEMgPSBzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgY29yZS5Qcm9taXNlIHx8IGdsb2JhbC5Qcm9taXNlKTtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2Ygb25GaW5hbGx5ID09ICdmdW5jdGlvbic7XG4gIHJldHVybiB0aGlzLnRoZW4oXG4gICAgaXNGdW5jdGlvbiA/IGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoQywgb25GaW5hbGx5KCkpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4geDsgfSk7XG4gICAgfSA6IG9uRmluYWxseSxcbiAgICBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHRocm93IGU7IH0pO1xuICAgIH0gOiBvbkZpbmFsbHlcbiAgKTtcbn0gfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5LmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtdHJ5XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUHJvbWlzZScsIHsgJ3RyeSc6IGZ1bmN0aW9uIChjYWxsYmFja2ZuKSB7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYodGhpcyk7XG4gIHZhciByZXN1bHQgPSBwZXJmb3JtKGNhbGxiYWNrZm4pO1xuICAocmVzdWx0LmUgPyBwcm9taXNlQ2FwYWJpbGl0eS5yZWplY3QgOiBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlKShyZXN1bHQudik7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLnRyeS5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJcbmNvbnN0IFByb21wdFN0eWxlcyA9IHtcbiAgUXVlc3Rpb25Qcm9tcHQ6IHsnYmFja2dyb3VuZENvbG9yJzogJyNGRkQ0MjYnLCAnZm9udF9jb2xvcic6ICcjMDAwMDAwJywgJ2JvbGQnOiB0cnVlLCBsaW5lX3Bvc2l0aW9uOiBudWxsfSxcbiAgQW5zd2VySXRlbTogeydiYWNrZ3JvdW5kQ29sb3InOiAnIzk2REIwQicsICdmb250X2NvbG9yJzogJyNGRkZGRkYnLCAnYm9sZCc6IHRydWUsIGxpbmVfcG9zaXRpb246IG51bGx9LFxuICBRdWVzdGlvblByb21wdEFQSTogeydiYWNrZ3JvdW5kQ29sb3InOiAnRkZENDI2JywgJ2JvbGQnOiB0cnVlLCAnYm9yZGVyQ29sb3InOiBudWxsLCAnYm9yZGVyX3N0eWxlJzogbnVsbCwgJ2JvcmRlcldpZHRoJzogbnVsbCwgJ2JveFNoYWRvdyc6IGZhbHNlLCAnY29sb3InOiBudWxsLCAnZm9udHMnOiBudWxsLCAnZm9udFNpemUnOiBudWxsLCAnaW1hZ2VfY29sb3InOiBudWxsLCAnaXRhbGljJzogbnVsbCwgJ2xpbmVfY29sb3InOiBudWxsLCAnbGluZV9wb3NpdGlvbic6IG51bGwsICdsaW5lX3N0eWxlJzogbnVsbCwgJ2xpbmVfdHlwZSc6IG51bGwsICdsaW5lX3dpZHRoJzogbnVsbCwgJ3NoYXBlJzogbnVsbCwgJ2lkJzogLTMzLCAnbmFtZSc6IG51bGwsICdpc19ib3VuZGFyeSc6IGZhbHNlfSxcbiAgQW5zd2VySXRlbUFQSTogeydiYWNrZ3JvdW5kQ29sb3InOiAnOTZEQjBCJywgJ2JvbGQnOiBudWxsLCAnYm9yZGVyQ29sb3InOiBudWxsLCAnYm9yZGVyX3N0eWxlJzogbnVsbCwgJ2JvcmRlcldpZHRoJzogbnVsbCwgJ2JveFNoYWRvdyc6IGZhbHNlLCAnY29sb3InOiAnRkZGRkZGJywgJ2ZvbnRzJzogbnVsbCwgJ2ZvbnRTaXplJzogbnVsbCwgJ2ltYWdlX2NvbG9yJzogbnVsbCwgJ2l0YWxpYyc6IG51bGwsICdsaW5lX2NvbG9yJzogbnVsbCwgJ2xpbmVfcG9zaXRpb24nOiBudWxsLCAnbGluZV9zdHlsZSc6IG51bGwsICdsaW5lX3R5cGUnOiBudWxsLCAnbGluZV93aWR0aCc6IG51bGwsICdzaGFwZSc6IG51bGwsICdpZCc6IC0zMywgJ25hbWUnOiBudWxsLCAnaXNfYm91bmRhcnknOiBmYWxzZX1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9tcHRTdHlsZXNcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9zY3JpcHRzL2NoYXRpbi9Qcm9tcHRTdHlsZXMuanMiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanNcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcbmltcG9ydCBwYXJzZSBmcm9tICcuL3BhcnNlLmpzJztcblxuZnVuY3Rpb24gc3RyaW5nVG9CeXRlcyhzdHIpIHtcbiAgc3RyID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpOyAvLyBVVEY4IGVzY2FwZVxuXG4gIGNvbnN0IGJ5dGVzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBieXRlcy5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKTtcbiAgfVxuXG4gIHJldHVybiBieXRlcztcbn1cblxuZXhwb3J0IGNvbnN0IEROUyA9ICc2YmE3YjgxMC05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZXhwb3J0IGNvbnN0IFVSTCA9ICc2YmE3YjgxMS05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdjM1KG5hbWUsIHZlcnNpb24sIGhhc2hmdW5jKSB7XG4gIGZ1bmN0aW9uIGdlbmVyYXRlVVVJRCh2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCkge1xuICAgIHZhciBfbmFtZXNwYWNlO1xuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gc3RyaW5nVG9CeXRlcyh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuYW1lc3BhY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lc3BhY2UgPSBwYXJzZShuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGlmICgoKF9uYW1lc3BhY2UgPSBuYW1lc3BhY2UpID09PSBudWxsIHx8IF9uYW1lc3BhY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9uYW1lc3BhY2UubGVuZ3RoKSAhPT0gMTYpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignTmFtZXNwYWNlIG11c3QgYmUgYXJyYXktbGlrZSAoMTYgaXRlcmFibGUgaW50ZWdlciB2YWx1ZXMsIDAtMjU1KScpO1xuICAgIH0gLy8gQ29tcHV0ZSBoYXNoIG9mIG5hbWVzcGFjZSBhbmQgdmFsdWUsIFBlciA0LjNcbiAgICAvLyBGdXR1cmU6IFVzZSBzcHJlYWQgc3ludGF4IHdoZW4gc3VwcG9ydGVkIG9uIGFsbCBwbGF0Zm9ybXMsIGUuZy4gYGJ5dGVzID1cbiAgICAvLyBoYXNoZnVuYyhbLi4ubmFtZXNwYWNlLCAuLi4gdmFsdWVdKWBcblxuXG4gICAgbGV0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoMTYgKyB2YWx1ZS5sZW5ndGgpO1xuICAgIGJ5dGVzLnNldChuYW1lc3BhY2UpO1xuICAgIGJ5dGVzLnNldCh2YWx1ZSwgbmFtZXNwYWNlLmxlbmd0aCk7XG4gICAgYnl0ZXMgPSBoYXNoZnVuYyhieXRlcyk7XG4gICAgYnl0ZXNbNl0gPSBieXRlc1s2XSAmIDB4MGYgfCB2ZXJzaW9uO1xuICAgIGJ5dGVzWzhdID0gYnl0ZXNbOF0gJiAweDNmIHwgMHg4MDtcblxuICAgIGlmIChidWYpIHtcbiAgICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgICAgYnVmW29mZnNldCArIGldID0gYnl0ZXNbaV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBidWY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShieXRlcyk7XG4gIH0gLy8gRnVuY3Rpb24jbmFtZSBpcyBub3Qgc2V0dGFibGUgb24gc29tZSBwbGF0Zm9ybXMgKCMyNzApXG5cblxuICB0cnkge1xuICAgIGdlbmVyYXRlVVVJRC5uYW1lID0gbmFtZTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gIH0gY2F0Y2ggKGVycikge30gLy8gRm9yIENvbW1vbkpTIGRlZmF1bHQgZXhwb3J0IHN1cHBvcnRcblxuXG4gIGdlbmVyYXRlVVVJRC5ETlMgPSBETlM7XG4gIGdlbmVyYXRlVVVJRC5VUkwgPSBVUkw7XG4gIHJldHVybiBnZW5lcmF0ZVVVSUQ7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3YzNS5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuXG5mdW5jdGlvbiBwYXJzZSh1dWlkKSB7XG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgVVVJRCcpO1xuICB9XG5cbiAgbGV0IHY7XG4gIGNvbnN0IGFyciA9IG5ldyBVaW50OEFycmF5KDE2KTsgLy8gUGFyc2UgIyMjIyMjIyMtLi4uLi0uLi4uLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzBdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDAsIDgpLCAxNikpID4+PiAyNDtcbiAgYXJyWzFdID0gdiA+Pj4gMTYgJiAweGZmO1xuICBhcnJbMl0gPSB2ID4+PiA4ICYgMHhmZjtcbiAgYXJyWzNdID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLSMjIyMtLi4uLi0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFycls0XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSg5LCAxMyksIDE2KSkgPj4+IDg7XG4gIGFycls1XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLSMjIyMtLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbNl0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMTQsIDE4KSwgMTYpKSA+Pj4gODtcbiAgYXJyWzddID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tLi4uLi0jIyMjLS4uLi4uLi4uLi4uLlxuXG4gIGFycls4XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxOSwgMjMpLCAxNikpID4+PiA4O1xuICBhcnJbOV0gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0uLi4uLS4uLi4tIyMjIyMjIyMjIyMjXG4gIC8vIChVc2UgXCIvXCIgdG8gYXZvaWQgMzItYml0IHRydW5jYXRpb24gd2hlbiBiaXQtc2hpZnRpbmcgaGlnaC1vcmRlciBieXRlcylcblxuICBhcnJbMTBdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDI0LCAzNiksIDE2KSkgLyAweDEwMDAwMDAwMDAwICYgMHhmZjtcbiAgYXJyWzExXSA9IHYgLyAweDEwMDAwMDAwMCAmIDB4ZmY7XG4gIGFyclsxMl0gPSB2ID4+PiAyNCAmIDB4ZmY7XG4gIGFyclsxM10gPSB2ID4+PiAxNiAmIDB4ZmY7XG4gIGFyclsxNF0gPSB2ID4+PiA4ICYgMHhmZjtcbiAgYXJyWzE1XSA9IHYgJiAweGZmO1xuICByZXR1cm4gYXJyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwYXJzZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcGFyc2UuanNcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuY29uc3QgTWluZG1laXN0ZXJCYWNrZ3JvdW5kID0gcmVxdWlyZSgnLi9taW5kbWVpc3Rlci9NaW5kbWVpc3RlckJhY2tncm91bmQnKVxuY29uc3QgQ2hhdEdQVEJhY2tncm91bmQgPSByZXF1aXJlKCcuL2NoYXRncHQvQ2hhdEdQVEJhY2tncm91bmQnKVxuXG5jbGFzcyBCYWNrZ3JvdW5kIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuX21pbmRtZWlzdGVyTWFuYWdlciA9IG51bGxcbiAgICB0aGlzLl9jaGF0R1BUTWFuYWdlciA9IG51bGxcbiAgfVxuICBpbml0ICgpIHtcbiAgICB0aGlzLl9taW5kbWVpc3Rlck1hbmFnZXIgPSBuZXcgTWluZG1laXN0ZXJCYWNrZ3JvdW5kKClcbiAgICB0aGlzLl9taW5kbWVpc3Rlck1hbmFnZXIuaW5pdCgpXG4gICAgdGhpcy5fY2hhdEdQVE1hbmFnZXIgPSBuZXcgQ2hhdEdQVEJhY2tncm91bmQoKVxuICAgIHRoaXMuX2NoYXRHUFRNYW5hZ2VyLmluaXQoKVxuXG4gICAgLypjaHJvbWUuYnJvd3NlckFjdGlvbi5vbkNsaWNrZWQuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG5ld1VSTCA9IGNocm9tZS5leHRlbnNpb24uZ2V0VVJMKCdwYWdlcy9vcHRpb25zLmh0bWwnKVxuICAgICAgY2hyb21lLnRhYnMuY3JlYXRlKHsgdXJsOiBuZXdVUkwgfSlcbiAgICB9KSovXG4gIH1cbn1cblxuY29uc3QgYmFja2dyb3VuZCA9IG5ldyBCYWNrZ3JvdW5kKClcbmJhY2tncm91bmQuaW5pdCgpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc2NyaXB0cy9iYWNrZ3JvdW5kLmpzIiwiXG5jb25zdCBBUElDbGllbnRJZCA9ICdYeFV0N3cwWHJpLTlobUl2dlJOYUliTWU0SHJPbWwyZ2lMRFQ1cUZUNVc4J1xuY29uc3QgVG9rZW5TdG9yYWdlS2V5ID0gJ01JTkRNRUlTVEVSX0FDQ0VTU19UT0tFTidcbmNvbnN0IFV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMvVXRpbHMnKVxuY29uc3QgUHJvbXB0U3R5bGVzID0gcmVxdWlyZSgnLi4vY2hhdGluL1Byb21wdFN0eWxlcycpXG5cbmNsYXNzIE1pbmRtZWlzdGVyQmFja2dyb3VuZCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLl9jdXJyZW50Tm9kZUlkID0gLTEwMFxuICAgIHRoaXMuX2N1cnJlbnRDaGFuZ2VJZCA9IDEwMFxuICAgIHRoaXMuX2NzcmZUb2tlbiA9IG51bGxcbiAgfVxuICBnZXRDdXJyZW50Tm9kZUlkICgpIHtcbiAgICB0aGlzLl9jdXJyZW50Tm9kZUlkLS1cbiAgICByZXR1cm4gdGhpcy5fY3VycmVudE5vZGVJZFxuICB9XG4gIGdldEN1cnJlbnRDaGFuZ2VJZCAoKSB7XG4gICAgdGhpcy5fY3VycmVudENoYW5nZUlkKytcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudENoYW5nZUlkXG4gIH1cbiAgaW5pdCAoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzXG4gICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKG1lc3NhZ2Uuc2NvcGUgPT09ICdtaW5kbWVpc3RlckNsaWVudCcpIHtcbiAgICAgICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnY2hlY2tUb2tlbicpIHtcbiAgICAgICAgICB0aGF0LmNoZWNrVG9rZW4oKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7cmVzcG9uc2U6IHRydWV9KVxuICAgICAgICAgIH0sIChlcnJvcikgPT4gc2VuZFJlc3BvbnNlKHtlcnJvcjogZXJyb3J9KSlcbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ2F1dGhvcml6ZScpIHtcbiAgICAgICAgICB0aGF0LmF1dGhvcml6ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHtyZXNwb25zZTogdHJ1ZX0pXG4gICAgICAgICAgfSwgKGVycm9yKSA9PiBzZW5kUmVzcG9uc2Uoe2Vycm9yOiBlcnJvcn0pKVxuICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAncHJvY2Vzc0luQmFja2dyb3VuZCcpIHtcbiAgICAgICAgICBpZiAobWVzc2FnZS5tZXRob2QgPT09ICdnZXRNYXAnKSB7XG4gICAgICAgICAgICB0aGF0LmdldE1hcChtZXNzYWdlLmFyZ3MubWFwSWQpLnRoZW4oKHJzcCkgPT4gc2VuZFJlc3BvbnNlKHtyZXNwb25zZTogcnNwfSksIChlcnJvcikgPT4gc2VuZFJlc3BvbnNlKHtlcnJvcjogZXJyb3J9KSlcbiAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UubWV0aG9kID09PSAnY3JlYXRlTWluZG1hcEZyb21UZW1wbGF0ZScpIHtcbiAgICAgICAgICAgIHRoYXQuY3JlYXRlTWluZG1hcEZyb21UZW1wbGF0ZShtZXNzYWdlLmFyZ3MudGVtcGxhdGVGaWxlVXJsKS50aGVuKChyc3ApID0+IHNlbmRSZXNwb25zZSh7cmVzcG9uc2U6IHJzcH0pLCAoZXJyb3IpID0+IHNlbmRSZXNwb25zZSh7ZXJyb3I6IGVycm9yfSkpXG4gICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLm1ldGhvZCA9PT0gJ2dldEJlbG9uZ2luZ01hcCcpIHtcbiAgICAgICAgICAgIHRoYXQuZ2V0QmVsb25naW5nTWFwKG1lc3NhZ2UuYXJncy5ub2RlSWQpLnRoZW4oKHJzcCkgPT4gc2VuZFJlc3BvbnNlKHtyZXNwb25zZTogcnNwfSksIChlcnJvcikgPT4gc2VuZFJlc3BvbnNlKHtlcnJvcjogZXJyb3J9KSlcbiAgICAgICAgICAvLyB9IGVsc2UgaWYgKG1lc3NhZ2UubWV0aG9kID09PSAnY2hhbmdlTm9kZUljb24nKSB7XG4gICAgICAgICAgLy8gICB0aGF0LmNoYW5nZU5vZGVJY29uKG1lc3NhZ2UuYXJncy5tYXBJZCwgbWVzc2FnZS5hcmdzLm5vZGVJZCwgbWVzc2FnZS5hcmdzLmljb24pLnRoZW4oKHJzcCkgPT4gc2VuZFJlc3BvbnNlKHtyZXNwb25zZTogcnNwfSksIChlcnJvcikgPT4gc2VuZFJlc3BvbnNlKHtlcnJvcjogZXJyb3J9KSlcbiAgICAgICAgICAvLyB9IGVsc2UgaWYgKG1lc3NhZ2UubWV0aG9kID09PSAnYWRkTm9kZScpIHtcbiAgICAgICAgICAvLyAgIHRoYXQuYWRkTm9kZShtZXNzYWdlLmFyZ3MubWFwSWQsIG1lc3NhZ2UuYXJncy5wYXJlbnRJZCwgbWVzc2FnZS5hcmdzLm5ld05vZGUpLnRoZW4oKHJzcCkgPT4gc2VuZFJlc3BvbnNlKHtyZXNwb25zZTogcnNwfSksIChlcnJvcikgPT4gc2VuZFJlc3BvbnNlKHtlcnJvcjogZXJyb3J9KSlcbiAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UubWV0aG9kID09PSAnYWRkTm9kZXMnKSB7XG4gICAgICAgICAgICB0aGF0LmFkZE5vZGVzKG1lc3NhZ2UuYXJncy5tYXBJZCwgbWVzc2FnZS5hcmdzLm5ld05vZGVzKS50aGVuKChyc3ApID0+IHNlbmRSZXNwb25zZSh7cmVzcG9uc2U6IHJzcH0pLCAoZXJyb3IpID0+IHNlbmRSZXNwb25zZSh7ZXJyb3I6IGVycm9yfSkpXG4gICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLm1ldGhvZCA9PT0gJ21vZGlmeU5vZGVzJykge1xuICAgICAgICAgICAgdGhhdC5tb2RpZnlOb2RlcyhtZXNzYWdlLmFyZ3MubWFwSWQsIG1lc3NhZ2UuYXJncy5ub2RlcykudGhlbigocnNwKSA9PiBzZW5kUmVzcG9uc2Uoe3Jlc3BvbnNlOiByc3B9KSwgKGVycm9yKSA9PiBzZW5kUmVzcG9uc2Uoe2Vycm9yOiBlcnJvcn0pKVxuICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS5tZXRob2QgPT09ICdkb0FjdGlvbnMnKSB7XG4gICAgICAgICAgICB0aGF0LmRvQWN0aW9ucyhtZXNzYWdlLmFyZ3MubWFwSWQsIG1lc3NhZ2UuYXJncy5pbnNlcnRpb25zLCBtZXNzYWdlLmFyZ3MudXBkYXRlcywgbWVzc2FnZS5hcmdzLmRlbGV0aW9ucykudGhlbigocnNwKSA9PiBzZW5kUmVzcG9uc2Uoe3Jlc3BvbnNlOiByc3B9KSwgKGVycm9yKSA9PiBzZW5kUmVzcG9uc2Uoe2Vycm9yOiBlcnJvcn0pKVxuICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS5tZXRob2QgPT09ICdsaW5rU2hhcmUnKSB7XG4gICAgICAgICAgICB0aGF0LmxpbmtTaGFyZShtZXNzYWdlLmFyZ3MubWFwSWQpLnRoZW4oKHJzcCkgPT4gc2VuZFJlc3BvbnNlKHtyZXNwb25zZTogcnNwfSksIChlcnJvcikgPT4gc2VuZFJlc3BvbnNlKHtlcnJvcjogZXJyb3J9KSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSlcblxuICAgIGNocm9tZS53ZWJSZXF1ZXN0Lm9uU2VuZEhlYWRlcnMuYWRkTGlzdGVuZXIoXG4gICAgICAoZGV0YWlscykgPT4ge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRldGFpbHMucmVxdWVzdEhlYWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoZGV0YWlscy5yZXF1ZXN0SGVhZGVyc1tpXS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd4LWNzcmYtdG9rZW4nKSB7XG4gICAgICAgICAgICB0aGF0Ll9jc3JmVG9rZW4gPSBkZXRhaWxzLnJlcXVlc3RIZWFkZXJzW2ldLnZhbHVlXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH0gZWxzZSBpZiAoZGV0YWlscy5yZXF1ZXN0SGVhZGVyc1tpXS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdjb29raWUnKSB7XG4gICAgICAgICAgICB0aGF0Ll9jb29raWUgPSBkZXRhaWxzLnJlcXVlc3RIZWFkZXJzW2ldLnZhbHVlXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge3JlcXVlc3RIZWFkZXJzOiBkZXRhaWxzLnJlcXVlc3RIZWFkZXJzfVxuICAgICAgfSxcbiAgICAgIHt1cmxzOiBbJ2h0dHBzOi8vd3d3Lm1pbmRtZWlzdGVyLmNvbS8qJywgJ2h0dHBzOi8vbWluZG1laXN0ZXIuY29tLyonXX0sXG4gICAgICBbJ3JlcXVlc3RIZWFkZXJzJywgJ2V4dHJhSGVhZGVycyddXG4gICAgKVxuXG4gICAgLyogY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVTZW5kSGVhZGVycy5hZGRMaXN0ZW5lcihcbiAgICAgIChkZXRhaWxzKSA9PiB7XG4gICAgICAgIGxldCBvcmlnaW5IZWFkZXIgPSBkZXRhaWxzLnJlcXVlc3RIZWFkZXJzLmZpbmQoKGgpID0+IHsgcmV0dXJuIGgubmFtZS50b0xvd2VyQ2FzZSgpID09PSAnb3JpZ2luJyB9KVxuICAgICAgICBpZiAob3JpZ2luSGVhZGVyID09IG51bGwgfHwgIW9yaWdpbkhlYWRlci52YWx1ZS5pbmNsdWRlcygnY2hyb21lLWV4dGVuc2lvbjovLycpKSByZXR1cm5cbiAgICAgICAgbGV0IGhlYWRlcnNUb1JlbW92ZSA9IFsnYWNjZXB0JywgJ29yaWdpbicsICdzZWMtZmV0Y2gtbW9kZScsICdzZWMtZmV0Y2gtZGVzdCcsICdhY2NlcHQtbGFuZ3VhZ2UnLCAnc2VjLWNoLXVhJywgJ3NlYy1jaC11YS1wbGF0Zm9ybScsICdzZWMtY2gtdWEtbW9iaWxlJywgJ3VzZXItYWdlbnQnLCAnc2VjLWZldGNoLXNpdGUnXVxuICAgICAgICBsZXQgbmV3SCA9IGRldGFpbHMucmVxdWVzdEhlYWRlcnMuZmlsdGVyKChoKSA9PiB7IHJldHVybiBoZWFkZXJzVG9SZW1vdmUuaW5kZXhPZihoLm5hbWUudG9Mb3dlckNhc2UoKSkgPT09IC0xIH0pXG5cbiAgICAgICAgbGV0IGNvb2tpZUggPSBuZXdILmZpbmQoKGgpID0+IHsgcmV0dXJuIGgubmFtZS50b0xvd2VyQ2FzZSgpID09PSAnY29va2llJyB9KVxuICAgICAgICBpZiAoY29va2llSCAhPSBudWxsKSBjb29raWVILnZhbHVlID0gdGhhdC5fY29va2llXG4gICAgICAgIHJldHVybiB7cmVxdWVzdEhlYWRlcnM6IG5ld0h9XG4gICAgICB9LFxuICAgICAge3VybHM6IFsnaHR0cHM6Ly93d3cubWluZG1laXN0ZXIuY29tL2dlbmVyaWNfZmlsZXMvKicsJ2h0dHBzOi8vd3d3Lm1pbmRtZWlzdGVyLmNvbS9zaGFyaW5nLyonXX0sXG4gICAgICBbJ3JlcXVlc3RIZWFkZXJzJywgJ2V4dHJhSGVhZGVycycsICdibG9ja2luZyddXG4gICAgKSAqL1xuICB9XG5cbiAgYXV0aG9yaXplICgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY2hyb21lLmlkZW50aXR5LmxhdW5jaFdlYkF1dGhGbG93KHtcbiAgICAgICAgaW50ZXJhY3RpdmU6IHRydWUsXG4gICAgICAgIHVybDogYGh0dHBzOi8vd3d3Lm1pbmRtZWlzdGVyLmNvbS9vYXV0aDIvYXV0aG9yaXplP2NsaWVudF9pZD0ke0FQSUNsaWVudElkfSZzY29wZT1taW5kbWVpc3RlciZyZWRpcmVjdF91cmk9aHR0cHM6Ly8ke2Nocm9tZS5ydW50aW1lLmlkfS5jaHJvbWl1bWFwcC5vcmcmcmVzcG9uc2VfdHlwZT10b2tlbmBcbiAgICAgIH0sICh1cmwpID0+IHtcbiAgICAgICAgbGV0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXModXJsLnJlcGxhY2UoLy4qIy9naSwgJycpKVxuICAgICAgICBsZXQgdG9rZW4gPSB1cmxQYXJhbXMuZ2V0KCdhY2Nlc3NfdG9rZW4nKVxuICAgICAgICB0aGF0LnN0b3JlVG9rZW4odG9rZW4pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgc3RvcmVUb2tlbiAodG9rZW4pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IG9wdHMgPSB7fVxuICAgICAgb3B0c1tUb2tlblN0b3JhZ2VLZXldID0gdG9rZW5cbiAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KG9wdHMsICgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZW1vdmVUb2tlbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMucmVtb3ZlKFtUb2tlblN0b3JhZ2VLZXldLCAoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgZ2V0VG9rZW4gKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChUb2tlblN0b3JhZ2VLZXksIChvcHRpb25zKSA9PiB7XG4gICAgICAgIGxldCB0b2tlbiA9IG9wdGlvbnNbVG9rZW5TdG9yYWdlS2V5XSB8fCBudWxsXG4gICAgICAgIGlmICh0b2tlbiA9PSBudWxsKSByZWplY3QoJ2Vycm9yJylcbiAgICAgICAgZWxzZSByZXNvbHZlKHRva2VuKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgY2hlY2tUb2tlbiAoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoYXQuZ2V0VG9rZW4oKS50aGVuKCh0b2tlbikgPT4ge1xuICAgICAgICBsZXQgaXRlbXMgPSB7XG4gICAgICAgICAgYWNjZXNzX3Rva2VuOiB0b2tlbixcbiAgICAgICAgICBtZXRob2Q6ICdtbS50ZXN0LmxvZ2luJ1xuICAgICAgICB9XG4gICAgICAgIGxldCBvcHRzID0ge1xuICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cubWluZG1laXN0ZXIuY29tL3NlcnZpY2VzL3Jlc3Qvb2F1dGgyJyxcbiAgICAgICAgICBwYXJhbXM6IGl0ZW1zXG4gICAgICAgIH1cbiAgICAgICAgVXRpbHMucGVyZm9ybVJlcXVlc3Qob3B0cykudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpLnRoZW4oKHJldCkgPT4ge1xuICAgICAgICAgIGlmIChyZXQucnNwLnN0YXQgIT09ICdvaycpIHtcbiAgICAgICAgICAgIHRoYXQucmVtb3ZlVG9rZW4oKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgcmVqZWN0KCdlcnJvcicpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKClcbiAgICAgICAgfSlcbiAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICByZWplY3QoZXJyb3IpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBnZXRVc2VySWQgKCkge1xuICAgIC8vIHRvZG9cbiAgfVxuXG4gIGdldE1hcE5vIChtYXBJZCkge1xuXG4gICAgbGV0IHRoYXQgPSB0aGlzXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBkYXRhID0ge2lkZWFfaWQ6IG1hcElkLCBpc0VtYmVkZGVkVmlldzogZmFsc2UsIGlzUHJpbnRWaWV3OiBmYWxzZSwgaXNQdWJsaWNWaWV3OiBmYWxzZX1cbiAgICAgIGZldGNoKCdodHRwczovL3d3dy5taW5kbWVpc3Rlci5jb20vbWFwcy9jb250ZW50Lmpzb24nLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLTgnLFxuICAgICAgICAgICd4LWNzcmYtdG9rZW4nOiB0aGF0Ll9jc3JmVG9rZW5cbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICAgIH0pLnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKS50aGVuKChyZXQpID0+IHtcbiAgICAgICAgICBpZiAocmV0Lm1hcCA9PSBudWxsKSByZWplY3QoJ2Vycm9yJylcbiAgICAgICAgICBlbHNlIHJlc29sdmUocmV0KVxuICAgICAgICB9KVxuICAgICAgfSwgKGVycm9yKSA9PiB7IHJlamVjdChlcnJvcikgfSlcbiAgfVxuXG4gIGdldE1hcCAobWFwSWQpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhhdC5nZXRUb2tlbigpLnRoZW4oKHRva2VuKSA9PiB7XG4gICAgICAgIGxldCBpdGVtcyA9IHtcbiAgICAgICAgICBhY2Nlc3NfdG9rZW46IHRva2VuLFxuICAgICAgICAgIG1ldGhvZDogJ21tLm1hcHMuZ2V0TWFwJyxcbiAgICAgICAgICBtYXBfaWQ6IG1hcElkXG4gICAgICAgIH1cbiAgICAgICAgbGV0IG9wdHMgPSB7XG4gICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5taW5kbWVpc3Rlci5jb20vc2VydmljZXMvcmVzdC9vYXV0aDInLFxuICAgICAgICAgIHBhcmFtczogaXRlbXNcbiAgICAgICAgfVxuICAgICAgICBVdGlscy5wZXJmb3JtUmVxdWVzdChvcHRzKS50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSkudGhlbigocmV0KSA9PiB7XG4gICAgICAgICAgaWYgKHJldC5yc3Auc3RhdCAhPT0gJ29rJykgcmVqZWN0KHJldC5lcnIubXNnKVxuICAgICAgICAgIGVsc2UgcmVzb2x2ZShyZXQucnNwKVxuICAgICAgICB9KVxuICAgICAgfSwgKGVycm9yKSA9PiB7IHJlamVjdChlcnJvcikgfSlcbiAgICB9KVxuICB9XG5cbiAgZ2V0QmVsb25naW5nTWFwIChub2RlSWQpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhhdC5nZXRUb2tlbigpLnRoZW4oKHRva2VuKSA9PiB7XG4gICAgICAgIGxldCBpdGVtcyA9IHtcbiAgICAgICAgICBhY2Nlc3NfdG9rZW46IHRva2VuLFxuICAgICAgICAgIG1ldGhvZDogJ21tLmlkZWFzLmdldE1hcCcsXG4gICAgICAgICAgaWRlYV9pZDogbm9kZUlkXG4gICAgICAgIH1cbiAgICAgICAgbGV0IG9wdHMgPSB7XG4gICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5taW5kbWVpc3Rlci5jb20vc2VydmljZXMvcmVzdC9vYXV0aDInLFxuICAgICAgICAgIHBhcmFtczogaXRlbXNcbiAgICAgICAgfVxuICAgICAgICBVdGlscy5wZXJmb3JtUmVxdWVzdChvcHRzKS50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSkudGhlbigocmV0KSA9PiB7XG4gICAgICAgICAgaWYgKHJldC5yc3Auc3RhdCAhPT0gJ29rJykgcmVqZWN0KHJldC5lcnIubXNnKVxuICAgICAgICAgIGVsc2UgcmVzb2x2ZShyZXQucnNwLm1hcC5pZClcbiAgICAgICAgfSlcbiAgICAgIH0sIChlcnJvcikgPT4geyByZWplY3QoZXJyb3IpIH0pXG4gICAgfSlcbiAgfVxuXG4gIHVwbG9hZEltYWdlIChtYXBJZCwgaW1hZ2UpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgLy8gdGhhdC5nZXRUb2tlbigpLnRoZW4oKHRva2VuKSA9PiB7XG4gICAgICAgIC8vIGZldGNoKGZpbGVVcmwpLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5hcnJheUJ1ZmZlcigpKS50aGVuKChmaWxlQ29udGVudCkgPT4ge1xuICAgICAgICAvLyB0aGF0LmdldEZpbGVCeVVybChmaWxlVXJsKS50aGVuKChmaWxlKSA9PiB7XG4gICAgICAgICAgLy8gdmFyIGZpbGVDb250ZW50ID0gbmV3IEZpbGUoW2ZpbGVdLCAnaW1hZ2UucG5nJylcbiAgICAgICAgICAvLyBjb25zdCBmb3JtRGF0YSAgPSBuZXcgRm9ybURhdGEoKVxuICAgICAgICAgIC8qXG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdtZXRob2QnLCAnbW0uZmlsZXMuYWRkJylcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ21hcF9pZCcsIG1hcElkKVxuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZV90eXBlJywgJ2lkZWFfaW1hZ2UnKVxuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGVDb250ZW50KVxuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnYWNjZXNzX3Rva2VuJywgdG9rZW4pXG4gICAgICAgICAgKi9cbiAgICAgIGxldCBkYXRhID0geyAnZmlsZXR5cGUnOiAnaWRlYV9pbWFnZScsICdzb3VyY2UnOiAzLCAnbmFtZSc6IGltYWdlLm1pbmRtZWlzdGVyTmFtZSwgJ3dpZHRoJzogMjMsICdoZWlnaHQnOiAyMyB9XG4gICAgICBmZXRjaCgnaHR0cHM6Ly93d3cubWluZG1laXN0ZXIuY29tL2dlbmVyaWNfZmlsZXMvdXBsb2FkLmpzb24nLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLTgnLFxuICAgICAgICAgICd4LWNzcmYtdG9rZW4nOiB0aGF0Ll9jc3JmVG9rZW5cbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICAgIH0pLnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKS50aGVuKChyZXQpID0+IHtcbiAgICAgICAgaWYgKHJldCA9PSBudWxsIHx8IHJldC5maWxlID09IG51bGwgfHwgcmV0LmZpbGUuaWQgPT0gbnVsbCkgcmVqZWN0KCdlcnJvcicpXG4gICAgICAgIGVsc2UgcmVzb2x2ZShyZXQuZmlsZS5pZClcbiAgICAgIH0pXG5cbiAgICAgICAgICAvKiB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcbiAgICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dClcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmZpbGUgIT0gbnVsbCkgcmVzb2x2ZShyZXNwb25zZS5maWxlLmlkKVxuICAgICAgICAgICAgICBlbHNlIGlmIChyZXNwb25zZS5lcnIgIT0gbnVsbCkgcmVqZWN0KHJlc3BvbnNlLmVyci5tc2cpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICB4aHIub3BlbignUE9TVCcsICdodHRwczovL3d3dy5taW5kbWVpc3Rlci5jb20vc2VydmljZXMvcmVzdC9vYXV0aDInKVxuICAgICAgICAgIHhoci5zZW5kKGZvcm1EYXRhKSAqL1xuICAgICAgICAvLyB9KVxuICAgICAgLy8gfSwgKGVycm9yKSA9PiB7IHJlamVjdChlcnJvcikgfSlcbiAgICB9KVxuICB9XG5cbiAgYWRkTm9kZVRvQ2hhbmdlTGlzdCAoY2hhbmdlTGlzdCwgbWFwSWQsIG5vZGUpIHtcbiAgICBsZXQgbm9kZUlkID0gdGhpcy5nZXRDdXJyZW50Tm9kZUlkKClcbiAgICBsZXQgY2hhbmdlSWQgPSB0aGlzLmdldEN1cnJlbnRDaGFuZ2VJZCgpXG4gICAgbGV0IGluc2VydEFjdGlvbiA9IHtcbiAgICAgICdjbGllbnRfaWQnOiBjaGFuZ2VJZCxcbiAgICAgICdpZGVhX2lkJzogbm9kZUlkLFxuICAgICAgJ2VudGl0eSc6ICdJZGVhJyxcbiAgICAgICdvcGVyYXRpb24nOiAnQWRkJyxcbiAgICAgICduZXdfZGF0YSc6IHtcbiAgICAgICAgJ3BhcmVudElkJzogcGFyc2VJbnQobm9kZS5wYXJlbnRJZCksXG4gICAgICAgICd0aXRsZSc6IFV0aWxzLnByZXR0aWZ5Tm9kZVRleHQobm9kZS50ZXh0KSxcbiAgICAgICAgJ3JhbmsnOiAxLFxuICAgICAgICAnbGF5b3V0JzogbnVsbCxcbiAgICAgICAgJ2lzRnJlZSc6IGZhbHNlLFxuICAgICAgICAnaXNGbG9hdGluZyc6IGZhbHNlLFxuICAgICAgICAneCc6IDM5OCwgLy8gdG9kb1xuICAgICAgICAneSc6IDIzNVxuICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VMaXN0LmFkZENoYW5nZShpbnNlcnRBY3Rpb24pXG4gICAgaWYgKG5vZGUubm90ZSAhPSBudWxsKSB7XG4gICAgICBsZXQgbm90ZUFjdGlvbiA9IHtcbiAgICAgICAgJ2NsaWVudF9pZCc6IHRoaXMuZ2V0Q3VycmVudENoYW5nZUlkKCksXG4gICAgICAgICdpZGVhX2lkJzogbm9kZUlkLFxuICAgICAgICAnZW50aXR5JzogJ05vdGUnLFxuICAgICAgICAnb3BlcmF0aW9uJzogJ0VkaXQnLFxuICAgICAgICAnbmV3X2RhdGEnOiB7XG4gICAgICAgICAgJ25vdGUnOiBub2RlLm5vdGVcbiAgICAgICAgfSxcbiAgICAgICAgJ29sZF9kYXRhJzogbnVsbFxuICAgICAgfVxuICAgICAgY2hhbmdlTGlzdC5hZGRDaGFuZ2Uobm90ZUFjdGlvbilcbiAgICB9XG4gICAgaWYgKG5vZGUuc3R5bGUgIT0gbnVsbCkge1xuICAgICAgbGV0IHN0eWxlQWN0aW9uID0ge1xuICAgICAgICAnY2xpZW50X2lkJzogdGhpcy5nZXRDdXJyZW50Q2hhbmdlSWQoKSxcbiAgICAgICAgJ2VudGl0eSc6ICdTdHlsZScsXG4gICAgICAgICdpZGVhX2lkJzogcGFyc2VJbnQobm9kZUlkKSxcbiAgICAgICAgJ29wZXJhdGlvbic6ICdFZGl0JyxcbiAgICAgICAgJ25ld19kYXRhJzogbm9kZS5zdHlsZVxuICAgICAgfVxuICAgICAgY2hhbmdlTGlzdC5hZGRDaGFuZ2Uoc3R5bGVBY3Rpb24pXG4gICAgfVxuICAgIGlmIChub2RlLmltYWdlICE9IG51bGwpIHtcbiAgICAgIGxldCBpbWFnZUlkID0gY2hhbmdlTGlzdC5nZXRJbWFnZUlkKG5vZGUuaW1hZ2UubWluZG1laXN0ZXJOYW1lKVxuICAgICAgbGV0IGFkZEltYWdlQWN0aW9uID0ge1xuICAgICAgICAnY2xpZW50X2lkJzogdGhpcy5nZXRDdXJyZW50Q2hhbmdlSWQoKSxcbiAgICAgICAgJ2VudGl0eSc6ICdJbWFnZScsXG4gICAgICAgICdpZGVhX2lkJzogcGFyc2VJbnQobm9kZUlkKSxcbiAgICAgICAgJ29wZXJhdGlvbic6ICdBZGQnLFxuICAgICAgICAnbmV3X2RhdGEnOiB7XG4gICAgICAgICAgJ2lkZWFfaW1hZ2VfaWQnOiBpbWFnZUlkLFxuICAgICAgICAgICdoZWlnaHQnOiAyMyxcbiAgICAgICAgICAnd2lkdGgnOiAyMyxcbiAgICAgICAgICAnc291cmNlJzogMyxcbiAgICAgICAgICAnaW1hZ2VfaWRlbnRpZmllcic6IG5vZGUuaW1hZ2UubWluZG1laXN0ZXJOYW1lXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNoYW5nZUxpc3QuYWRkQ2hhbmdlKGFkZEltYWdlQWN0aW9uKVxuICAgIH1cbiAgfVxuXG4gIGFkZE5vZGVUb0NoYW5nZUxpc3RBUEkgKGNoYW5nZUxpc3QsIG1hcElkLCBub2RlKSB7XG4gICAgbGV0IG5vZGVJZCA9IHRoaXMuZ2V0Q3VycmVudE5vZGVJZCgpXG4gICAgbGV0IGNoYW5nZUlkID0gdGhpcy5nZXRDdXJyZW50Q2hhbmdlSWQoKVxuICAgIGxldCBpbnNlcnRBY3Rpb24gPSB7XG4gICAgICAnaWQnOiBjaGFuZ2VJZCxcbiAgICAgICdpZGVhX2lkJzogbm9kZUlkLFxuICAgICAgJ3R5cGUnOiAnSW5zZXJ0JyxcbiAgICAgICduZXdfZGF0YSc6IHtcbiAgICAgICAgJ3BhcmVudElkJzogbm9kZS5wYXJlbnRJZCxcbiAgICAgICAgJ3RpdGxlJzogVXRpbHMucHJldHRpZnlOb2RlVGV4dChub2RlLnRleHQpLFxuICAgICAgICAncmFuayc6IDEsXG4gICAgICAgICdpc0ZyZWUnOiBmYWxzZSxcbiAgICAgICAgJ2lzRmxvYXRpbmcnOiBmYWxzZSxcbiAgICAgICAgJ29mZnNldFgnOiAwLFxuICAgICAgICAnb2Zmc2V0WSc6IDAsXG4gICAgICAgICd4JzogMTE3My45MywgLy8gdG9kb1xuICAgICAgICAnaXNCb3VuZGFyeSc6IGZhbHNlLFxuICAgICAgICAnY29tbWVudHMnOiBbXSxcbiAgICAgICAgJ2F0dGFjaG1lbnRzJzogW10sXG4gICAgICAgICdpZCc6IG5vZGVJZCxcbiAgICAgICAgJ3BhcmVudCc6IG5vZGUucGFyZW50SWQsIC8vIHRvZG9cbiAgICAgICAgJ3Bvcyc6IFsxMTczLjkzLCAyMTIuODFdfSAvLyB0b2RvXG4gICAgfVxuICAgIGlmIChub2RlLm5vdGUgIT0gbnVsbCkgaW5zZXJ0QWN0aW9uLm5ld19kYXRhLm5vdGUgPSBub2RlLm5vdGVcbiAgICBjaGFuZ2VMaXN0LmFkZENoYW5nZShpbnNlcnRBY3Rpb24pXG4gICAgaWYgKG5vZGUuc3R5bGUgIT0gbnVsbCkge1xuICAgICAgbGV0IHN0eWxlQWN0aW9uID0ge1xuICAgICAgICAnaWQnOiB0aGlzLmdldEN1cnJlbnRDaGFuZ2VJZCgpLFxuICAgICAgICAnaWRlYV9pZCc6IG5vZGVJZCxcbiAgICAgICAgJ3R5cGUnOiAnVGV4dFN0eWxlJyxcbiAgICAgICAgJ25ld19kYXRhJzoge1xuICAgICAgICAgICdzdHlsZSc6IG5vZGUuc3R5bGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc3R5bGVBY3Rpb25bJ25ld19kYXRhJ11bJ3N0eWxlJ11bJ2lkJ10gPSBub2RlSWRcbiAgICAgIGNoYW5nZUxpc3QuYWRkQ2hhbmdlKHN0eWxlQWN0aW9uKVxuICAgIH1cbiAgICBpZiAobm9kZS5pbWFnZSAhPSBudWxsKSB7XG4gICAgICBsZXQgaW1hZ2VJZCA9IGNoYW5nZUxpc3QuZ2V0SW1hZ2VJZChub2RlLmltYWdlLm1pbmRtZWlzdGVyTmFtZSlcbiAgICAgIGxldCBhZGRJbWFnZUFjdGlvbiA9IHtcbiAgICAgICAgJ2lkJzogdGhpcy5nZXRDdXJyZW50Q2hhbmdlSWQoKSxcbiAgICAgICAgJ2lkZWFfaWQnOiBub2RlSWQsXG4gICAgICAgICd0eXBlJzogJ0FkZEltYWdlJyxcbiAgICAgICAgJ25ld19kYXRhJzpcbiAgICAgICAgICB7J2lkZWFfaW1hZ2VfaWQnOiBpbWFnZUlkfVxuICAgICAgfVxuICAgICAgbGV0IHJlc2l6ZUltYWdlQWN0aW9uID0ge1xuICAgICAgICAnaWQnOiB0aGlzLmdldEN1cnJlbnRDaGFuZ2VJZCgpLFxuICAgICAgICAnaWRlYV9pZCc6IG5vZGVJZCxcbiAgICAgICAgJ3R5cGUnOiAnUmVzaXplSW1hZ2UnLFxuICAgICAgICAnbmV3X2RhdGEnOiB7XG4gICAgICAgICAgJ2lkZWFfaW1hZ2VfaWQnOiBpbWFnZUlkLFxuICAgICAgICAgICdoZWlnaHQnOiAyMyxcbiAgICAgICAgICAncG9zaXRpb24nOiAzLFxuICAgICAgICAgICd3aWR0aCc6IDIzXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNoYW5nZUxpc3QuYWRkQ2hhbmdlKGFkZEltYWdlQWN0aW9uKVxuICAgICAgY2hhbmdlTGlzdC5hZGRDaGFuZ2UocmVzaXplSW1hZ2VBY3Rpb24pXG4gICAgfVxuICB9XG5cbiAgbW9kaWZ5Tm9kZVRvQ2hhbmdlTGlzdCAoY2hhbmdlTGlzdCwgbWFwSWQsIG5vZGUpIHtcbiAgICBpZiAobm9kZS5zdHlsZSAhPSBudWxsKSB7XG4gICAgICBsZXQgc3R5bGVBY3Rpb24gPSB7XG4gICAgICAgICdjbGllbnRfaWQnOiB0aGlzLmdldEN1cnJlbnRDaGFuZ2VJZCgpLFxuICAgICAgICAnZW50aXR5JzogJ1N0eWxlJyxcbiAgICAgICAgJ2lkZWFfaWQnOiBwYXJzZUludChub2RlLmlkKSxcbiAgICAgICAgJ29wZXJhdGlvbic6ICdFZGl0JyxcbiAgICAgICAgJ25ld19kYXRhJzogbm9kZS5zdHlsZVxuICAgICAgfVxuICAgICAgY2hhbmdlTGlzdC5hZGRDaGFuZ2Uoc3R5bGVBY3Rpb24pXG4gICAgfVxuICAgIGlmIChub2RlLmltYWdlICE9IG51bGwpIHtcbiAgICAgIGxldCBpbWFnZUlkID0gY2hhbmdlTGlzdC5nZXRJbWFnZUlkKG5vZGUuaW1hZ2UubWluZG1laXN0ZXJOYW1lKVxuICAgICAgbGV0IGFkZEltYWdlQWN0aW9uID0ge1xuICAgICAgICAnY2xpZW50X2lkJzogdGhpcy5nZXRDdXJyZW50Q2hhbmdlSWQoKSxcbiAgICAgICAgJ2VudGl0eSc6ICdJbWFnZScsXG4gICAgICAgICdpZGVhX2lkJzogcGFyc2VJbnQobm9kZS5pZCksXG4gICAgICAgICdvcGVyYXRpb24nOiAnQWRkJyxcbiAgICAgICAgJ25ld19kYXRhJzoge1xuICAgICAgICAgICdpZGVhX2ltYWdlX2lkJzogaW1hZ2VJZCxcbiAgICAgICAgICAnaGVpZ2h0JzogMjMsXG4gICAgICAgICAgJ3dpZHRoJzogMjMsXG4gICAgICAgICAgJ3NvdXJjZSc6IDMsXG4gICAgICAgICAgJ2ltYWdlX2lkZW50aWZpZXInOiBub2RlLmltYWdlLm1pbmRtZWlzdGVyTmFtZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjaGFuZ2VMaXN0LmFkZENoYW5nZShhZGRJbWFnZUFjdGlvbilcbiAgICB9XG4gIH1cblxuICBtb2RpZnlOb2RlVG9DaGFuZ2VMaXN0QVBJIChjaGFuZ2VMaXN0LCBtYXBJZCwgbm9kZSkge1xuICAgIGlmIChub2RlLnN0eWxlICE9IG51bGwpIHtcbiAgICAgIGxldCBzdHlsZUFjdGlvbiA9IHtcbiAgICAgICAgJ2lkJzogdGhpcy5nZXRDdXJyZW50Q2hhbmdlSWQoKSxcbiAgICAgICAgJ2lkZWFfaWQnOiBub2RlLmlkLFxuICAgICAgICAndHlwZSc6ICdUZXh0U3R5bGUnLFxuICAgICAgICAnbmV3X2RhdGEnOiB7XG4gICAgICAgICAgJ3N0eWxlJzogbm9kZS5zdHlsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzdHlsZUFjdGlvblsnbmV3X2RhdGEnXVsnc3R5bGUnXVsnaWQnXSA9IG5vZGUuaWRcbiAgICAgIGNoYW5nZUxpc3QuYWRkQ2hhbmdlKHN0eWxlQWN0aW9uKVxuICAgIH1cbiAgICBpZiAobm9kZS5pbWFnZSAhPSBudWxsKSB7XG4gICAgICBsZXQgaW1hZ2VJZCA9IGNoYW5nZUxpc3QuZ2V0SW1hZ2VJZChub2RlLmltYWdlLm1pbmRtZWlzdGVyTmFtZSlcbiAgICAgIGxldCBhZGRJbWFnZUFjdGlvbiA9IHtcbiAgICAgICAgJ2lkJzogdGhpcy5nZXRDdXJyZW50Q2hhbmdlSWQoKSxcbiAgICAgICAgJ2lkZWFfaWQnOiBub2RlLmlkLFxuICAgICAgICAndHlwZSc6ICdBZGRJbWFnZScsXG4gICAgICAgICduZXdfZGF0YSc6XG4gICAgICAgICAgeydpZGVhX2ltYWdlX2lkJzogaW1hZ2VJZH1cbiAgICAgIH1cbiAgICAgIGxldCByZXNpemVJbWFnZUFjdGlvbiA9IHtcbiAgICAgICAgJ2lkJzogdGhpcy5nZXRDdXJyZW50Q2hhbmdlSWQoKSxcbiAgICAgICAgJ2lkZWFfaWQnOiBub2RlLmlkLFxuICAgICAgICAndHlwZSc6ICdSZXNpemVJbWFnZScsXG4gICAgICAgICduZXdfZGF0YSc6IHtcbiAgICAgICAgICAnaWRlYV9pbWFnZV9pZCc6IGltYWdlSWQsXG4gICAgICAgICAgJ2hlaWdodCc6IDIzLFxuICAgICAgICAgICdwb3NpdGlvbic6IDMsXG4gICAgICAgICAgJ3dpZHRoJzogMjNcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2hhbmdlTGlzdC5hZGRDaGFuZ2UoYWRkSW1hZ2VBY3Rpb24pXG4gICAgICBjaGFuZ2VMaXN0LmFkZENoYW5nZShyZXNpemVJbWFnZUFjdGlvbilcbiAgICB9XG4gIH1cblxuICB1cGxvYWROZWNjZXNhcnlJbWFnZXNGb3JDaGFuZ2VMaXN0IChtYXBJZCwgY2hhbmdlTGlzdCkge1xuICAgIGxldCB0aGF0ID0gdGhpc1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgcHJvbWlzZUxpc3QgPSBbXVxuICAgICAgY2hhbmdlTGlzdC5pbWFnZXMuZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgICBwcm9taXNlTGlzdC5wdXNoKG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgICAgIHRoYXQudXBsb2FkSW1hZ2UobWFwSWQsIGkpLnRoZW4oKGltYWdlSWQpID0+IHtcbiAgICAgICAgICAgIGNoYW5nZUxpc3Quc2V0SW1hZ2VJZChpLm1pbmRtZWlzdGVyTmFtZSwgaW1hZ2VJZClcbiAgICAgICAgICAgIHJlcygpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSkpXG4gICAgICB9KVxuICAgICAgaWYgKHByb21pc2VMaXN0Lmxlbmd0aCA9PT0gMCkgcmVzb2x2ZSgpXG4gICAgICBlbHNlIHtcbiAgICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZUxpc3QpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICB1cGxvYWROZWNjZXNhcnlJbWFnZXNGb3JDaGFuZ2VMaXN0QVBJIChtYXBJZCwgY2hhbmdlTGlzdCkge1xuICAgIGxldCB0aGF0ID0gdGhpc1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgcHJvbWlzZUxpc3QgPSBbXVxuICAgICAgY2hhbmdlTGlzdC5pbWFnZXMuZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgICBwcm9taXNlTGlzdC5wdXNoKG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgICAgIHRoYXQudXBsb2FkSW1hZ2UobWFwSWQsIGkpLnRoZW4oKGltYWdlSWQpID0+IHtcbiAgICAgICAgICAgIGNoYW5nZUxpc3Quc2V0SW1hZ2VJZChpLm1pbmRtZWlzdGVyTmFtZSwgaW1hZ2VJZClcbiAgICAgICAgICAgIHJlcygpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSkpXG4gICAgICB9KVxuICAgICAgaWYgKHByb21pc2VMaXN0Lmxlbmd0aCA9PT0gMCkgcmVzb2x2ZSgpXG4gICAgICBlbHNlIHtcbiAgICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZUxpc3QpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhZGROb2RlcyAobWFwSWQsIG5vZGVzKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBjaGFuZ2VMaXN0ID0gbmV3IENoYW5nZUxpc3QoKVxuICAgICAgbm9kZXMuZm9yRWFjaCgobikgPT4ge1xuICAgICAgICBpZiAobi5pbWFnZSAhPSBudWxsICYmICFjaGFuZ2VMaXN0Lmhhc0ltYWdlKG4uaW1hZ2UpKSBjaGFuZ2VMaXN0LmFkZEltYWdlKG4uaW1hZ2UpXG4gICAgICB9KVxuICAgICAgdGhpcy51cGxvYWROZWNjZXNhcnlJbWFnZXNGb3JDaGFuZ2VMaXN0KG1hcElkLCBjaGFuZ2VMaXN0KS50aGVuKCgpID0+IHtcbiAgICAgICAgbm9kZXMuZm9yRWFjaCgobikgPT4ge1xuICAgICAgICAgIHRoaXMuYWRkTm9kZVRvQ2hhbmdlTGlzdChjaGFuZ2VMaXN0LCBtYXBJZCwgbilcbiAgICAgICAgfSlcbiAgICAgICAgdGhhdC5kb0NoYW5nZXMobWFwSWQsIGNoYW5nZUxpc3QuY2hhbmdlcykudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSgnb2snKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgbW9kaWZ5Tm9kZXMgKG1hcElkLCBub2Rlcykge1xuICAgIGxldCB0aGF0ID0gdGhpc1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgY2hhbmdlTGlzdCA9IG5ldyBDaGFuZ2VMaXN0KClcbiAgICAgIG5vZGVzLmZvckVhY2goKG4pID0+IHtcbiAgICAgICAgaWYgKG4uaW1hZ2UgIT0gbnVsbCAmJiAhY2hhbmdlTGlzdC5oYXNJbWFnZShuLmltYWdlKSkgY2hhbmdlTGlzdC5hZGRJbWFnZShuLmltYWdlKVxuICAgICAgfSlcbiAgICAgIHRoaXMudXBsb2FkTmVjY2VzYXJ5SW1hZ2VzRm9yQ2hhbmdlTGlzdChtYXBJZCwgY2hhbmdlTGlzdCkudGhlbigoKSA9PiB7XG4gICAgICAgIG5vZGVzLmZvckVhY2goKG4pID0+IHtcbiAgICAgICAgICB0aGlzLm1vZGlmeU5vZGVUb0NoYW5nZUxpc3QoY2hhbmdlTGlzdCwgbWFwSWQsIG4pXG4gICAgICAgIH0pXG4gICAgICAgIHRoYXQuZG9DaGFuZ2VzKG1hcElkLCBjaGFuZ2VMaXN0LmNoYW5nZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoJ29rJylcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGRvQ2hhbmdlcyAobWFwSWQsIGNoYW5nZXMpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IGRhdGEgPSB7J2NoYW5nZXMnOiBjaGFuZ2VzLCAncmV2aXNpb24nOiA5OTksIHJvb3RfaWQ6IHBhcnNlSW50KG1hcElkKX1cbiAgICAgIGZldGNoKCdodHRwczovL3d3dy5taW5kbWVpc3Rlci5jb20vcGFuZGEvbWFwcy9kby5qc29uJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04JyxcbiAgICAgICAgICAneC1jc3JmLXRva2VuJzogdGhhdC5fY3NyZlRva2VuXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgICB9KS50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSkudGhlbigocmV0KSA9PiB7XG4gICAgICAgIGlmIChyZXQuZXJyb3JzICE9IG51bGwgJiYgcmV0LmVycm9ycy5sZW5ndGggPiAwKSByZWplY3QocmV0LmVycm9yc1swXSlcbiAgICAgICAgZWxzZSByZXNvbHZlKClcbiAgICAgIH0pXG4gICAgfSwgKGVycm9yKSA9PiB7IHJlamVjdChlcnJvcikgfSlcbiAgfVxuXG4gIGRvQ2hhbmdlc0FQSSAobWFwSWQsIGNoYW5nZXMpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhhdC5nZXRUb2tlbigpLnRoZW4oKHRva2VuKSA9PiB7XG4gICAgICAgIGxldCBpdGVtcyA9IHtcbiAgICAgICAgICBtZXRob2Q6ICdtbS5yZWFsdGltZS5kbycsXG4gICAgICAgICAgbWFwX2lkOiBtYXBJZCxcbiAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShjaGFuZ2VzKSxcbiAgICAgICAgICBhY2Nlc3NfdG9rZW46IHRva2VuLFxuICAgICAgICAgIGNsaWVudF9yZXZpc2lvbjogOTk5OTk5XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG9wdHMgPSB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cubWluZG1laXN0ZXIuY29tL3NlcnZpY2VzL3Jlc3Qvb2F1dGgyJyxcbiAgICAgICAgICBwYXJhbXM6IGl0ZW1zLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBVdGlscy5wZXJmb3JtUmVxdWVzdChvcHRzKS50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSkudGhlbigocmV0KSA9PiB7XG4gICAgICAgICAgaWYgKHJldC5yc3AgIT0gbnVsbCAmJiByZXQucnNwLmVyciAhPSBudWxsKSByZWplY3QocmV0LmVyci5tc2cpXG4gICAgICAgICAgZWxzZSByZXNvbHZlKClcbiAgICAgICAgfSlcbiAgICAgIH0sIChlcnJvcikgPT4geyByZWplY3QoZXJyb3IpIH0pXG4gICAgfSlcbiAgfVxuICBnZXRGaWxlQnlVcmwgKGZpbGVVcmwpIHtcbiAgICAvKmxldCB0aGF0ID0gdGhpc1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcbiAgICAgIHhoci5vcGVuKCdHRVQnLCBmaWxlVXJsLCB0cnVlKVxuICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcidcbiAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSAmJiB4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICByZXNvbHZlKHhoci5yZXNwb25zZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgeGhyLnNlbmQoKVxuICAgIH0pKi9cbiAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZmV0Y2goZmlsZVVybCkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmFycmF5QnVmZmVyKCkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBkb0FjdGlvbnMgKG1hcElkLCBpbnNlcnRpb25zID0gW10sIHVwZGF0ZXMgPSBbXSwgZGVsZXRpb25zID0gW10pIHtcbiAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IGNoYW5nZUxpc3QgPSBuZXcgQ2hhbmdlTGlzdCgpXG4gICAgICB1cGRhdGVzLmZvckVhY2goKG4pID0+IHtcbiAgICAgICAgaWYgKG4uaW1hZ2UgIT0gbnVsbCAmJiAhY2hhbmdlTGlzdC5oYXNJbWFnZShuLmltYWdlKSkgY2hhbmdlTGlzdC5hZGRJbWFnZShuLmltYWdlKVxuICAgICAgfSlcbiAgICAgIGluc2VydGlvbnMuZm9yRWFjaCgobikgPT4ge1xuICAgICAgICBpZiAobi5pbWFnZSAhPSBudWxsICYmICFjaGFuZ2VMaXN0Lmhhc0ltYWdlKG4uaW1hZ2UpKSBjaGFuZ2VMaXN0LmFkZEltYWdlKG4uaW1hZ2UpXG4gICAgICB9KVxuICAgICAgdGhpcy51cGxvYWROZWNjZXNhcnlJbWFnZXNGb3JDaGFuZ2VMaXN0KG1hcElkLCBjaGFuZ2VMaXN0KS50aGVuKCgpID0+IHtcbiAgICAgICAgaW5zZXJ0aW9ucy5mb3JFYWNoKChuKSA9PiB7XG4gICAgICAgICAgdGhpcy5hZGROb2RlVG9DaGFuZ2VMaXN0KGNoYW5nZUxpc3QsIG1hcElkLCBuKVxuICAgICAgICB9KVxuICAgICAgICB1cGRhdGVzLmZvckVhY2goKG4pID0+IHtcbiAgICAgICAgICB0aGlzLm1vZGlmeU5vZGVUb0NoYW5nZUxpc3QoY2hhbmdlTGlzdCwgbWFwSWQsIG4pXG4gICAgICAgIH0pXG4gICAgICAgIHRoYXQuZG9DaGFuZ2VzKG1hcElkLCBjaGFuZ2VMaXN0LmNoYW5nZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoJ29rJylcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICBjcmVhdGVNaW5kbWFwRnJvbVRlbXBsYXRlIChmaWxlVXJsKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoYXQuZ2V0VG9rZW4oKS50aGVuKCh0b2tlbikgPT4ge1xuICAgICAgICB0aGF0LmdldEZpbGVCeVVybChmaWxlVXJsKS50aGVuKChmaWxlKSA9PiB7XG4gICAgICAgICAgbGV0IHVybCA9ICdodHRwczovL3d3dy5taW5kbWVpc3Rlci5jb20vc2VydmljZXMvcmVzdC9vYXV0aDInXG4gICAgICAgICAgbGV0IGJsb2IgPSBuZXcgRmlsZShbZmlsZV0sICdUZW1wbGF0ZS5taW5kJylcbiAgICAgICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgICAgZGF0YS5hcHBlbmQoJ2FjY2Vzc190b2tlbicsIHRva2VuKVxuICAgICAgICAgIGRhdGEuYXBwZW5kKCdtZXRob2QnLCAnbW0ubWFwcy5pbXBvcnQnKVxuICAgICAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgYmxvYilcbiAgICAgICAgICBsZXQgZCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoZGF0YSlcbiAgICAgICAgICBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogZGF0YVxuICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgaWYgKGpzb24ucnNwICE9IG51bGwpIHJlc29sdmUoanNvbi5yc3AubWFwLmlkKVxuICAgICAgICAgICAgICBlbHNlIGlmIChqc29uLmVyciAhPSBudWxsKSByZWplY3QoanNvbi5lcnIubXNnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiByZWplY3QoZXJyKSlcbiAgICAgICAgICAvKiB2YXIgYmxvYiA9IG5ldyBGaWxlKFtmaWxlXSwgJ1RlbXBsYXRlLm1pbmQnKVxuICAgICAgICAgIHZhciBkYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgICBkYXRhLmFwcGVuZCgnYWNjZXNzX3Rva2VuJywgdG9rZW4pXG4gICAgICAgICAgZGF0YS5hcHBlbmQoJ21ldGhvZCcsICdtbS5tYXBzLmltcG9ydCcpXG4gICAgICAgICAgZGF0YS5hcHBlbmQoJ2ZpbGUnLCBibG9iKVxuICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuICAgICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KVxuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UucnNwICE9IG51bGwpIHJlc29sdmUocmVzcG9uc2UucnNwLm1hcC5pZClcbiAgICAgICAgICAgICAgZWxzZSBpZiAocmVzcG9uc2UuZXJyICE9IG51bGwpIHJlamVjdChyZXNwb25zZS5lcnIubXNnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgeGhyLm9wZW4oJ1BPU1QnLCAnaHR0cHM6Ly93d3cubWluZG1laXN0ZXIuY29tL3NlcnZpY2VzL3Jlc3Qvb2F1dGgyJylcbiAgICAgICAgICB4aHIuc2VuZChkYXRhKSAqL1xuICAgICAgICB9KVxuICAgICAgfSwgKGVycm9yKSA9PiB7IHJlamVjdChlcnJvcikgfSlcbiAgICB9KVxuICB9XG5cbiAgbGlua1NoYXJlIChtYXBJZCkge1xuXG4gICAgbGV0IHRoYXQgPSB0aGlzXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGZldGNoKGBodHRwczovL3d3dy5taW5kbWVpc3Rlci5jb20vc2hhcmluZy9saW5rX3NoYXJlLmpzb24/cm9vdF9pZD0ke3BhcnNlSW50KG1hcElkKX0mZWRpdG9yPXBhbmRhJm9uPXRydWUmd3JpdGU9dHJ1ZWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOCcsXG4gICAgICAgICAgJ3gtY3NyZi10b2tlbic6IHRoYXQuX2NzcmZUb2tlblxuICAgICAgICB9XG4gICAgICB9KS50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSkudGhlbigocmV0KSA9PiB7XG4gICAgICAgICAgaWYgKHJldC51cmwgPT0gbnVsbCkgcmVqZWN0KCdlcnJvcicpXG4gICAgICAgICAgZWxzZSByZXNvbHZlKCdvaycpXG4gICAgICAgIH0pXG4gICAgICB9LCAoZXJyb3IpID0+IHsgcmVqZWN0KGVycm9yKSB9KVxuICB9XG5cbiAgbGlua1NoYXJlQVBJIChtYXBJZCkge1xuICAgIGxldCB0aGF0ID0gdGhpc1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGF0LmdldFRva2VuKCkudGhlbigodG9rZW4pID0+IHtcbiAgICAgICAgbGV0IGl0ZW1zID0ge1xuICAgICAgICAgIGFjY2Vzc190b2tlbjogdG9rZW4sXG4gICAgICAgICAgbWV0aG9kOiAnbW0ubWFwcy5saW5rU2hhcmUnLFxuICAgICAgICAgIG1hcF9pZDogbWFwSWQsXG4gICAgICAgICAgcGVybWlzc2lvbjogMlxuICAgICAgICB9XG4gICAgICAgIGxldCBvcHRzID0ge1xuICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cubWluZG1laXN0ZXIuY29tL3NlcnZpY2VzL3Jlc3Qvb2F1dGgyJyxcbiAgICAgICAgICBwYXJhbXM6IGl0ZW1zLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgVXRpbHMucGVyZm9ybVJlcXVlc3Qob3B0cykudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpLnRoZW4oKHJldCkgPT4ge1xuICAgICAgICAgIGlmIChyZXQucnNwLnN0YXQgIT09ICdvaycpIHJlamVjdChyZXQuZXJyLm1zZylcbiAgICAgICAgICBlbHNlIHJlc29sdmUoJ29rJylcbiAgICAgICAgfSlcbiAgICAgIH0sIChlcnJvcikgPT4geyByZWplY3QoZXJyb3IpIH0pXG4gICAgfSlcbiAgfVxufVxuXG5jbGFzcyBDaGFuZ2VMaXN0IHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuX2NoYW5nZUxpc3QgPSBbXVxuICAgIHRoaXMuX2ltYWdlcyA9IFtdXG4gIH1cbiAgZ2V0IGltYWdlcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ltYWdlc1xuICB9XG4gIGhhc0ltYWdlIChpbWFnZSkge1xuICAgIHJldHVybiB0aGlzLl9pbWFnZXMuZmluZCgoaSkgPT4geyByZXR1cm4gaS5taW5kbWVpc3Rlck5hbWUgPT09IGltYWdlLm1pbmRtZWlzdGVyTmFtZSB9KSAhPSBudWxsXG4gIH1cbiAgZ2V0SW1hZ2VJZCAobWluZG1laXN0ZXJOYW1lKSB7XG4gICAgbGV0IGltZyA9IHRoaXMuX2ltYWdlcy5maW5kKChpKSA9PiB7IHJldHVybiBpLm1pbmRtZWlzdGVyTmFtZSA9PT0gbWluZG1laXN0ZXJOYW1lIH0pXG4gICAgaWYgKGltZyA9PSBudWxsIHx8IGltZy5pZCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIHJldHVybiBpbWcuaWRcbiAgfVxuICBhZGRJbWFnZSAoaW1hZ2UpIHtcbiAgICB0aGlzLl9pbWFnZXMucHVzaCh7dXJsOiBpbWFnZS5maWxlVXJsLCBtaW5kbWVpc3Rlck5hbWU6IGltYWdlLm1pbmRtZWlzdGVyTmFtZSwgaWQ6IG51bGx9KVxuICB9XG4gIHNldEltYWdlSWQgKG1pbmRtZWlzdGVyTmFtZSwgaWQpIHtcbiAgICBsZXQgaW1nID0gdGhpcy5faW1hZ2VzLmZpbmQoKGkpID0+IHsgcmV0dXJuIGkubWluZG1laXN0ZXJOYW1lID09PSBtaW5kbWVpc3Rlck5hbWUgfSlcbiAgICBpZiAoaW1nICE9IG51bGwpIGltZy5pZCA9IGlkXG4gIH1cbiAgYWRkQ2hhbmdlIChjaGFuZ2UpIHtcbiAgICB0aGlzLl9jaGFuZ2VMaXN0LnB1c2goY2hhbmdlKVxuICB9XG4gIGdldCBjaGFuZ2VzICgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2hhbmdlTGlzdFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWluZG1laXN0ZXJCYWNrZ3JvdW5kXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc2NyaXB0cy9taW5kbWVpc3Rlci9NaW5kbWVpc3RlckJhY2tncm91bmQuanMiLCJjb25zdCBVdGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzL1V0aWxzJylcbmNvbnN0IHsgdjQ6IHV1aWR2NCB9ID0gcmVxdWlyZSgndXVpZCcpXG5jb25zdCBDaGF0R1BUTW9kZVN0b3JhZ2VLZXkgPSAnQ0hBVEdQVF9NT0RFJ1xuY29uc3QgQ2hhdEdQVEFQSUtleVN0b3JhZ2VLZXkgPSAnQ0hBVEdQVF9BUElfS0VZJ1xuXG5jbGFzcyBDaGF0R1BUQmFja2dyb3VuZCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLl9tb2RlID0gbnVsbFxuICB9XG4gIGluaXQgKCkge1xuICAgIGxldCB0aGF0ID0gdGhpc1xuICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChtZXNzYWdlLnNjb3BlID09PSAnY2hhdGdwdENsaWVudCcpIHtcbiAgICAgICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAncHJvY2Vzc0luQmFja2dyb3VuZCcpIHtcbiAgICAgICAgICBpZiAobWVzc2FnZS5tZXRob2QgPT09ICdwZXJmb3JtUXVlc3Rpb24nKSB7XG4gICAgICAgICAgICB0aGF0LnBlcmZvcm1RdWVzdGlvbihtZXNzYWdlLmFyZ3MucXVlc3Rpb24pLnRoZW4oKHJzcCkgPT4gc2VuZFJlc3BvbnNlKHtyZXNwb25zZTogcnNwfSksIChlcnJvcikgPT4gc2VuZFJlc3BvbnNlKHtlcnJvcjogZXJyb3IubWVzc2FnZX0pKVxuICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS5tZXRob2QgPT09ICdnZXRNb2RlJykge1xuICAgICAgICAgICAgdGhhdC5nZXRNb2RlKCkudGhlbigobW9kZSkgPT4gc2VuZFJlc3BvbnNlKHtyZXNwb25zZTogbW9kZX0pLCAoZXJyb3IpID0+IHNlbmRSZXNwb25zZSh7ZXJyb3I6IGVycm9yLm1lc3NhZ2V9KSlcbiAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UubWV0aG9kID09PSAnc2V0TW9kZScpIHtcbiAgICAgICAgICAgIHRoYXQuc2V0TW9kZShtZXNzYWdlLmFyZ3MubW9kZSkudGhlbigocnNwKSA9PiBzZW5kUmVzcG9uc2Uoe3Jlc3BvbnNlOiB0cnVlfSksIChlcnJvcikgPT4gc2VuZFJlc3BvbnNlKHtlcnJvcjogdHJ1ZX0pKVxuICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS5tZXRob2QgPT09ICdnZXRBcGlLZXknKSB7XG4gICAgICAgICAgICB0aGF0LmdldEFwaUtleSgpLnRoZW4oKHJzcCkgPT4gc2VuZFJlc3BvbnNlKHtyZXNwb25zZTogcnNwfSksIChlcnJvcikgPT4gc2VuZFJlc3BvbnNlKHtlcnJvcjogZXJyb3J9KSlcbiAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UubWV0aG9kID09PSAnc2V0QXBpS2V5Jykge1xuICAgICAgICAgICAgdGhhdC5zZXRBcGlLZXkobWVzc2FnZS5hcmdzLmFwaUtleSkudGhlbigocnNwKSA9PiBzZW5kUmVzcG9uc2Uoe3Jlc3BvbnNlOiByc3B9KSwgKGVycm9yKSA9PiBzZW5kUmVzcG9uc2Uoe2Vycm9yOiBlcnJvcn0pKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgZ2V0TW9kZSAoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KENoYXRHUFRNb2RlU3RvcmFnZUtleSwgKG9wdGlvbnMpID0+IHtcbiAgICAgICAgbGV0IG1vZGUgPSBvcHRpb25zW0NoYXRHUFRNb2RlU3RvcmFnZUtleV0gfHwgbnVsbFxuICAgICAgICByZXNvbHZlKG1vZGUgfHwgJ2NoYXRncHRMb2dpbk1vZGUnKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG4gIHNldE1vZGUgKG1vZGUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IG9wdHMgPSB7fVxuICAgICAgb3B0c1tDaGF0R1BUTW9kZVN0b3JhZ2VLZXldID0gbW9kZVxuICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQob3B0cywgKCkgPT4ge1xuICAgICAgICByZXNvbHZlKClcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIHBlcmZvcm1RdWVzdGlvbiAocXVlc3Rpb24pIHtcbiAgICBsZXQgbW9kZSA9IGF3YWl0IHRoaXMuZ2V0TW9kZSgpXG4gICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICBjYXNlICdjaGF0Z3B0TG9naW5Nb2RlJzpcbiAgICAgICAgcmV0dXJuIHRoaXMucGVyZm9ybVF1ZXN0aW9uTG9naW4ocXVlc3Rpb24pXG4gICAgICBjYXNlICdjaGF0Z3B0QXBpS2V5TW9kZSc6XG4gICAgICAgIHJldHVybiB0aGlzLnBlcmZvcm1RdWVzdGlvbkFQSUtleShxdWVzdGlvbilcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIExPR0lOIE1PREVcbiAgICovXG4gIGFzeW5jIGdldFRva2VuICgpIHtcbiAgICBsZXQgb3B0cyA9IHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmw6ICdodHRwczovL2NoYXQub3BlbmFpLmNvbS9hcGkvYXV0aC9zZXNzaW9uJ1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgbGV0IHJlc3AgPSBhd2FpdCBVdGlscy5wZXJmb3JtUmVxdWVzdChvcHRzKVxuICAgICAgbGV0IHJldCA9IGF3YWl0IHJlc3AuanNvbigpXG4gICAgICByZXR1cm4gcmV0LmFjY2Vzc1Rva2VuIHx8IG51bGxcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignVW5hYmxlIHRvIG9idGFpbiBDaGF0R1BUIHRva2VuJykpXG4gICAgfVxuICB9XG4gIGFzeW5jIHJlbW92ZUNvbnZlcnNhdGlvbiAoY29udmVyc2F0aW9uSWQsIHRva2VuKSB7XG4gICAgbGV0IGJvZHkgPSB7XG4gICAgICAnaXNfdmlzaWJsZSc6IGZhbHNlXG4gICAgfVxuICAgIGxldCBvcHRzID0ge1xuICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9jaGF0Lm9wZW5haS5jb20vYmFja2VuZC1hcGkvY29udmVyc2F0aW9uLycgKyBjb252ZXJzYXRpb25JZCxcbiAgICAgIHBhcmFtczogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdG9rZW4sXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH1cbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGxldCByZXNwID0gYXdhaXQgVXRpbHMucGVyZm9ybVJlcXVlc3Qob3B0cylcbiAgICAgIGxldCByZXQgPSBhd2FpdCByZXNwLmpzb24oKVxuICAgICAgcmV0dXJuIHJldFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXG4gICAgfVxuICB9XG4gIGFzeW5jIGNvbnZlcnNhdGlvbiAocXVlc3Rpb24sIHRva2VuKSB7XG4gICAgbGV0IGl0ZW1zID0ge1xuICAgICAgJ21vZGVsJzogJ3RleHQtZGF2aW5jaS0wMDItcmVuZGVyJyxcbiAgICAgICdwYXJlbnRfbWVzc2FnZV9pZCc6IHV1aWR2NCgpLFxuICAgICAgJ2FjdGlvbic6ICduZXh0JyxcbiAgICAgICdtZXNzYWdlcyc6IFtcbiAgICAgICAgeydpZCc6IHV1aWR2NCgpLFxuICAgICAgICAgICdyb2xlJzogJ3VzZXInLFxuICAgICAgICAgICdjb250ZW50Jzoge1xuICAgICAgICAgICAgJ2NvbnRlbnRfdHlwZSc6ICd0ZXh0JyxcbiAgICAgICAgICAgICdwYXJ0cyc6IFtxdWVzdGlvbl1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gICAgbGV0IG9wdHMgPSB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGl0ZW1zKSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0b2tlbixcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKCdodHRwczovL2NoYXQub3BlbmFpLmNvbS9iYWNrZW5kLWFwaS9jb252ZXJzYXRpb24nLCBvcHRzKVxuICAgICAgaWYgKCFyZXNwLm9rKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ0Vycm9yIGNvbW11bmljYXRpbmcgd2l0aCBDaGF0R1BUJykpXG4gICAgICB9XG4gICAgICBjb25zdCByZWFkZXIgPSByZXNwLmJvZHkuZ2V0UmVhZGVyKClcbiAgICAgIGxldCBzdHIgPSAnJ1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgY29uc3Qge3ZhbHVlLCBkb25lfSA9IGF3YWl0IHJlYWRlci5yZWFkKClcbiAgICAgICAgaWYgKGRvbmUpIGJyZWFrXG4gICAgICAgIGxldCBzdHIyID0gbmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKHZhbHVlKVxuICAgICAgICBzdHIgKz0gc3RyMlxuICAgICAgfVxuICAgICAgbGV0IGRhdGFDaHVua3MgPSBzdHIuc3BsaXQoJ1xcbmRhdGE6JylcbiAgICAgIGlmIChkYXRhQ2h1bmtzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgbGV0IGRhdGEgPSBkYXRhQ2h1bmtzW2RhdGFDaHVua3MubGVuZ3RoIC0gMl0ucmVwbGFjZSgnZGF0YTonLCAnJylcbiAgICAgICAgbGV0IGRhdGFKc29uXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZGF0YUpzb24gPSBKU09OLnBhcnNlKGRhdGEpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihgRXJyb3IgcGFyc2luZyBDaGF0R1BUJ3MgYW5zd2VyOiAke2RhdGF9YCkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGFKc29uXG4gICAgICB9XG4gICAgICByZXR1cm4ge31cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxuICAgIH1cbiAgfVxuICBhc3luYyBwZXJmb3JtUXVlc3Rpb25Mb2dpbiAocXVlc3Rpb24pIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHRva2VuID0gYXdhaXQgdGhpcy5nZXRUb2tlbigpXG4gICAgICBpZiAodG9rZW4gPT0gbnVsbCkgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignVW5hYmxlIHRvIG9idGFpbiBDaGF0R1BUIHRva2VuJykpXG4gICAgICBsZXQgYW5zd2VyID0gYXdhaXQgdGhpcy5jb252ZXJzYXRpb24ocXVlc3Rpb24sIHRva2VuKVxuICAgICAgaWYgKGFuc3dlci5tZXNzYWdlID09IG51bGwpIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoYEVycm9yIHBhcnNpbmcgQ2hhdEdQVCdzIGFuc3dlcmApKVxuICAgICAgaWYgKGFuc3dlci5jb252ZXJzYXRpb25faWQgIT0gbnVsbCkgdGhpcy5yZW1vdmVDb252ZXJzYXRpb24oYW5zd2VyLmNvbnZlcnNhdGlvbl9pZCwgdG9rZW4pXG4gICAgICByZXR1cm4gYW5zd2VyLm1lc3NhZ2UuY29udGVudC5wYXJ0c1swXVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFQSSBLRVkgTU9ERVxuICAgKi9cbiAgcGVyZm9ybVF1ZXN0aW9uQVBJS2V5IChxdWVzdGlvbikge1xuICAgIGxldCB0aGF0ID0gdGhpc1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhhdC5fYXBpS2V5ID09IG51bGwgfHwgdGhhdC5fYXBpS2V5ID09PSAnJykge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKCdNaXNzaW5nIEFQSSBrZXkuIFBsZWFzZSwgcHJvdmlkZSBvbmUgaW4gdGhlIG9wdGlvbnMgcGFnZS4nKSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBsZXQgaXRlbXMgPSB7XG4gICAgICAgICdtb2RlbCc6ICdncHQtMy41LXR1cmJvJyxcbiAgICAgICAgJ21lc3NhZ2VzJzogW1xuICAgICAgICAgIHsncm9sZSc6ICd1c2VyJyxcbiAgICAgICAgICAgICdjb250ZW50JzogcXVlc3Rpb259XG4gICAgICAgIF0sXG4gICAgICAgICd0ZW1wZXJhdHVyZSc6IDAuN1xuICAgICAgfVxuICAgICAgbGV0IG9wdHMgPSB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICB1cmw6ICdodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2NoYXQvY29tcGxldGlvbnMnLFxuICAgICAgICBwYXJhbXM6IEpTT04uc3RyaW5naWZ5KGl0ZW1zKSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGF0Ll9hcGlLZXlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgVXRpbHMucGVyZm9ybVJlcXVlc3Qob3B0cykudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpLnRoZW4oKHJldCkgPT4ge1xuICAgICAgICBpZiAocmV0LmNob2ljZXMgPT0gbnVsbCB8fCByZXQuY2hvaWNlcy5sZW5ndGggPT09IDApIHJlamVjdChuZXcgRXJyb3IoJ05vIGFuc3dlciBmcm9tIENoYXRHUFQnKSlcbiAgICAgICAgZWxzZSByZXNvbHZlKHJldC5jaG9pY2VzWzBdLm1lc3NhZ2UuY29udGVudClcbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGVycm9yLnJlc3BvbnNlLmpzb24oKS50aGVuKChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIuZXJyb3IgIT0gbnVsbCAmJiBlcnIuZXJyb3IubWVzc2FnZSAhPSBudWxsKSByZWplY3QobmV3IEVycm9yKGVyci5lcnJvci5tZXNzYWdlKSlcbiAgICAgICAgICAgIGVsc2UgcmVqZWN0KG5ldyBFcnJvcignVW5rbm93biBDaGF0R1BUIGVycm9yJykpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1VucGFyc2FibGUgcmVzcG9uc2UgZnJvbSBDaGF0R1BUJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICBnZXRBcGlLZXkgKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChDaGF0R1BUQVBJS2V5U3RvcmFnZUtleSwgKG9wdGlvbnMpID0+IHtcbiAgICAgICAgbGV0IHRva2VuID0gb3B0aW9uc1tDaGF0R1BUQVBJS2V5U3RvcmFnZUtleV0gfHwgbnVsbFxuICAgICAgICByZXNvbHZlKHRva2VuKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG4gIHNldEFwaUtleSAoa2V5KSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoYXQudGVzdEFwaUtleShrZXkpLnRoZW4oKCkgPT4ge1xuICAgICAgICBsZXQgb3B0cyA9IHt9XG4gICAgICAgIG9wdHNbQ2hhdEdQVEFQSUtleVN0b3JhZ2VLZXldID0ga2V5XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KG9wdHMsICgpID0+IHtcbiAgICAgICAgICB0aGF0Ll9hcGlLZXkgPSBrZXlcbiAgICAgICAgICByZXNvbHZlKHRydWUpXG4gICAgICAgIH0pXG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHJlamVjdChlcnJvcikpXG4gICAgfSlcbiAgfVxuICB0ZXN0QXBpS2V5IChrZXkpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IG9wdHMgPSB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEvbW9kZWxzJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyBrZXlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgVXRpbHMucGVyZm9ybVJlcXVlc3Qob3B0cykudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpLnRoZW4oKHJldCkgPT4ge1xuICAgICAgICBpZiAocmV0LmRhdGEgPT0gbnVsbCkgcmVqZWN0KG5ldyBFcnJvcignSW52YWxpZCBBUEkga2V5JykpXG4gICAgICAgIGVsc2UgcmVzb2x2ZSh0cnVlKVxuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHJlamVjdChlcnJvcilcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENoYXRHUFRCYWNrZ3JvdW5kXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc2NyaXB0cy9jaGF0Z3B0L0NoYXRHUFRCYWNrZ3JvdW5kLmpzIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyB2MSB9IGZyb20gJy4vdjEuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2MyB9IGZyb20gJy4vdjMuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2NCB9IGZyb20gJy4vdjQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2NSB9IGZyb20gJy4vdjUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBOSUwgfSBmcm9tICcuL25pbC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHZlcnNpb24gfSBmcm9tICcuL3ZlcnNpb24uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2YWxpZGF0ZSB9IGZyb20gJy4vdmFsaWRhdGUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHBhcnNlIH0gZnJvbSAnLi9wYXJzZS5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJzsgLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuLy9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4vLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxuXG5sZXQgX25vZGVJZDtcblxubGV0IF9jbG9ja3NlcTsgLy8gUHJldmlvdXMgdXVpZCBjcmVhdGlvbiB0aW1lXG5cblxubGV0IF9sYXN0TVNlY3MgPSAwO1xubGV0IF9sYXN0TlNlY3MgPSAwOyAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkIGZvciBBUEkgZGV0YWlsc1xuXG5mdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBsZXQgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgY29uc3QgYiA9IGJ1ZiB8fCBuZXcgQXJyYXkoMTYpO1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGV0IG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgX25vZGVJZDtcbiAgbGV0IGNsb2Nrc2VxID0gb3B0aW9ucy5jbG9ja3NlcSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5jbG9ja3NlcSA6IF9jbG9ja3NlcTsgLy8gbm9kZSBhbmQgY2xvY2tzZXEgbmVlZCB0byBiZSBpbml0aWFsaXplZCB0byByYW5kb20gdmFsdWVzIGlmIHRoZXkncmUgbm90XG4gIC8vIHNwZWNpZmllZC4gIFdlIGRvIHRoaXMgbGF6aWx5IHRvIG1pbmltaXplIGlzc3VlcyByZWxhdGVkIHRvIGluc3VmZmljaWVudFxuICAvLyBzeXN0ZW0gZW50cm9weS4gIFNlZSAjMTg5XG5cbiAgaWYgKG5vZGUgPT0gbnVsbCB8fCBjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgY29uc3Qgc2VlZEJ5dGVzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTtcblxuICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjUsIGNyZWF0ZSBhbmQgNDgtYml0IG5vZGUgaWQsICg0NyByYW5kb20gYml0cyArIG11bHRpY2FzdCBiaXQgPSAxKVxuICAgICAgbm9kZSA9IF9ub2RlSWQgPSBbc2VlZEJ5dGVzWzBdIHwgMHgwMSwgc2VlZEJ5dGVzWzFdLCBzZWVkQnl0ZXNbMl0sIHNlZWRCeXRlc1szXSwgc2VlZEJ5dGVzWzRdLCBzZWVkQnl0ZXNbNV1dO1xuICAgIH1cblxuICAgIGlmIChjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC4yLjIsIHJhbmRvbWl6ZSAoMTQgYml0KSBjbG9ja3NlcVxuICAgICAgY2xvY2tzZXEgPSBfY2xvY2tzZXEgPSAoc2VlZEJ5dGVzWzZdIDw8IDggfCBzZWVkQnl0ZXNbN10pICYgMHgzZmZmO1xuICAgIH1cbiAgfSAvLyBVVUlEIHRpbWVzdGFtcHMgYXJlIDEwMCBuYW5vLXNlY29uZCB1bml0cyBzaW5jZSB0aGUgR3JlZ29yaWFuIGVwb2NoLFxuICAvLyAoMTU4Mi0xMC0xNSAwMDowMCkuICBKU051bWJlcnMgYXJlbid0IHByZWNpc2UgZW5vdWdoIGZvciB0aGlzLCBzb1xuICAvLyB0aW1lIGlzIGhhbmRsZWQgaW50ZXJuYWxseSBhcyAnbXNlY3MnIChpbnRlZ2VyIG1pbGxpc2Vjb25kcykgYW5kICduc2VjcydcbiAgLy8gKDEwMC1uYW5vc2Vjb25kcyBvZmZzZXQgZnJvbSBtc2Vjcykgc2luY2UgdW5peCBlcG9jaCwgMTk3MC0wMS0wMSAwMDowMC5cblxuXG4gIGxldCBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubXNlY3MgOiBEYXRlLm5vdygpOyAvLyBQZXIgNC4yLjEuMiwgdXNlIGNvdW50IG9mIHV1aWQncyBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBjdXJyZW50IGNsb2NrXG4gIC8vIGN5Y2xlIHRvIHNpbXVsYXRlIGhpZ2hlciByZXNvbHV0aW9uIGNsb2NrXG5cbiAgbGV0IG5zZWNzID0gb3B0aW9ucy5uc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uc2VjcyA6IF9sYXN0TlNlY3MgKyAxOyAvLyBUaW1lIHNpbmNlIGxhc3QgdXVpZCBjcmVhdGlvbiAoaW4gbXNlY3MpXG5cbiAgY29uc3QgZHQgPSBtc2VjcyAtIF9sYXN0TVNlY3MgKyAobnNlY3MgLSBfbGFzdE5TZWNzKSAvIDEwMDAwOyAvLyBQZXIgNC4yLjEuMiwgQnVtcCBjbG9ja3NlcSBvbiBjbG9jayByZWdyZXNzaW9uXG5cbiAgaWYgKGR0IDwgMCAmJiBvcHRpb25zLmNsb2Nrc2VxID09PSB1bmRlZmluZWQpIHtcbiAgICBjbG9ja3NlcSA9IGNsb2Nrc2VxICsgMSAmIDB4M2ZmZjtcbiAgfSAvLyBSZXNldCBuc2VjcyBpZiBjbG9jayByZWdyZXNzZXMgKG5ldyBjbG9ja3NlcSkgb3Igd2UndmUgbW92ZWQgb250byBhIG5ld1xuICAvLyB0aW1lIGludGVydmFsXG5cblxuICBpZiAoKGR0IDwgMCB8fCBtc2VjcyA+IF9sYXN0TVNlY3MpICYmIG9wdGlvbnMubnNlY3MgPT09IHVuZGVmaW5lZCkge1xuICAgIG5zZWNzID0gMDtcbiAgfSAvLyBQZXIgNC4yLjEuMiBUaHJvdyBlcnJvciBpZiB0b28gbWFueSB1dWlkcyBhcmUgcmVxdWVzdGVkXG5cblxuICBpZiAobnNlY3MgPj0gMTAwMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1dWlkLnYxKCk6IENhbid0IGNyZWF0ZSBtb3JlIHRoYW4gMTBNIHV1aWRzL3NlY1wiKTtcbiAgfVxuXG4gIF9sYXN0TVNlY3MgPSBtc2VjcztcbiAgX2xhc3ROU2VjcyA9IG5zZWNzO1xuICBfY2xvY2tzZXEgPSBjbG9ja3NlcTsgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG5cbiAgbXNlY3MgKz0gMTIyMTkyOTI4MDAwMDA7IC8vIGB0aW1lX2xvd2BcblxuICBjb25zdCB0bCA9ICgobXNlY3MgJiAweGZmZmZmZmYpICogMTAwMDAgKyBuc2VjcykgJSAweDEwMDAwMDAwMDtcbiAgYltpKytdID0gdGwgPj4+IDI0ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDE2ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bCAmIDB4ZmY7IC8vIGB0aW1lX21pZGBcblxuICBjb25zdCB0bWggPSBtc2VjcyAvIDB4MTAwMDAwMDAwICogMTAwMDAgJiAweGZmZmZmZmY7XG4gIGJbaSsrXSA9IHRtaCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRtaCAmIDB4ZmY7IC8vIGB0aW1lX2hpZ2hfYW5kX3ZlcnNpb25gXG5cbiAgYltpKytdID0gdG1oID4+PiAyNCAmIDB4ZiB8IDB4MTA7IC8vIGluY2x1ZGUgdmVyc2lvblxuXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMTYgJiAweGZmOyAvLyBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGAgKFBlciA0LjIuMiAtIGluY2x1ZGUgdmFyaWFudClcblxuICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7IC8vIGBjbG9ja19zZXFfbG93YFxuXG4gIGJbaSsrXSA9IGNsb2Nrc2VxICYgMHhmZjsgLy8gYG5vZGVgXG5cbiAgZm9yIChsZXQgbiA9IDA7IG4gPCA2OyArK24pIHtcbiAgICBiW2kgKyBuXSA9IG5vZGVbbl07XG4gIH1cblxuICByZXR1cm4gYnVmIHx8IHVuc2FmZVN0cmluZ2lmeShiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjE7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3YxLmpzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgdjM1IGZyb20gJy4vdjM1LmpzJztcbmltcG9ydCBtZDUgZnJvbSAnLi9tZDUuanMnO1xuY29uc3QgdjMgPSB2MzUoJ3YzJywgMHgzMCwgbWQ1KTtcbmV4cG9ydCBkZWZhdWx0IHYzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92My5qc1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIEJyb3dzZXItY29tcGF0aWJsZSBKYXZhU2NyaXB0IE1ENVxuICpcbiAqIE1vZGlmaWNhdGlvbiBvZiBKYXZhU2NyaXB0IE1ENVxuICogaHR0cHM6Ly9naXRodWIuY29tL2JsdWVpbXAvSmF2YVNjcmlwdC1NRDVcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMSwgU2ViYXN0aWFuIFRzY2hhblxuICogaHR0cHM6Ly9ibHVlaW1wLm5ldFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKlxuICogQmFzZWQgb25cbiAqIEEgSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgUlNBIERhdGEgU2VjdXJpdHksIEluYy4gTUQ1IE1lc3NhZ2VcbiAqIERpZ2VzdCBBbGdvcml0aG0sIGFzIGRlZmluZWQgaW4gUkZDIDEzMjEuXG4gKiBWZXJzaW9uIDIuMiBDb3B5cmlnaHQgKEMpIFBhdWwgSm9obnN0b24gMTk5OSAtIDIwMDlcbiAqIE90aGVyIGNvbnRyaWJ1dG9yczogR3JlZyBIb2x0LCBBbmRyZXcgS2VwZXJ0LCBZZG5hciwgTG9zdGluZXRcbiAqIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSBCU0QgTGljZW5zZVxuICogU2VlIGh0dHA6Ly9wYWpob21lLm9yZy51ay9jcnlwdC9tZDUgZm9yIG1vcmUgaW5mby5cbiAqL1xuZnVuY3Rpb24gbWQ1KGJ5dGVzKSB7XG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IG5ldyBVaW50OEFycmF5KG1zZy5sZW5ndGgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzW2ldID0gbXNnLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1kNVRvSGV4RW5jb2RlZEFycmF5KHdvcmRzVG9NZDUoYnl0ZXNUb1dvcmRzKGJ5dGVzKSwgYnl0ZXMubGVuZ3RoICogOCkpO1xufVxuLypcbiAqIENvbnZlcnQgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcyB0byBhbiBhcnJheSBvZiBieXRlc1xuICovXG5cblxuZnVuY3Rpb24gbWQ1VG9IZXhFbmNvZGVkQXJyYXkoaW5wdXQpIHtcbiAgY29uc3Qgb3V0cHV0ID0gW107XG4gIGNvbnN0IGxlbmd0aDMyID0gaW5wdXQubGVuZ3RoICogMzI7XG4gIGNvbnN0IGhleFRhYiA9ICcwMTIzNDU2Nzg5YWJjZGVmJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDMyOyBpICs9IDgpIHtcbiAgICBjb25zdCB4ID0gaW5wdXRbaSA+PiA1XSA+Pj4gaSAlIDMyICYgMHhmZjtcbiAgICBjb25zdCBoZXggPSBwYXJzZUludChoZXhUYWIuY2hhckF0KHggPj4+IDQgJiAweDBmKSArIGhleFRhYi5jaGFyQXQoeCAmIDB4MGYpLCAxNik7XG4gICAgb3V0cHV0LnB1c2goaGV4KTtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG4vKipcbiAqIENhbGN1bGF0ZSBvdXRwdXQgbGVuZ3RoIHdpdGggcGFkZGluZyBhbmQgYml0IGxlbmd0aFxuICovXG5cblxuZnVuY3Rpb24gZ2V0T3V0cHV0TGVuZ3RoKGlucHV0TGVuZ3RoOCkge1xuICByZXR1cm4gKGlucHV0TGVuZ3RoOCArIDY0ID4+PiA5IDw8IDQpICsgMTQgKyAxO1xufVxuLypcbiAqIENhbGN1bGF0ZSB0aGUgTUQ1IG9mIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMsIGFuZCBhIGJpdCBsZW5ndGguXG4gKi9cblxuXG5mdW5jdGlvbiB3b3Jkc1RvTWQ1KHgsIGxlbikge1xuICAvKiBhcHBlbmQgcGFkZGluZyAqL1xuICB4W2xlbiA+PiA1XSB8PSAweDgwIDw8IGxlbiAlIDMyO1xuICB4W2dldE91dHB1dExlbmd0aChsZW4pIC0gMV0gPSBsZW47XG4gIGxldCBhID0gMTczMjU4NDE5MztcbiAgbGV0IGIgPSAtMjcxNzMzODc5O1xuICBsZXQgYyA9IC0xNzMyNTg0MTk0O1xuICBsZXQgZCA9IDI3MTczMzg3ODtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHgubGVuZ3RoOyBpICs9IDE2KSB7XG4gICAgY29uc3Qgb2xkYSA9IGE7XG4gICAgY29uc3Qgb2xkYiA9IGI7XG4gICAgY29uc3Qgb2xkYyA9IGM7XG4gICAgY29uc3Qgb2xkZCA9IGQ7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaV0sIDcsIC02ODA4NzY5MzYpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxXSwgMTIsIC0zODk1NjQ1ODYpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTcsIDYwNjEwNTgxOSk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDNdLCAyMiwgLTEwNDQ1MjUzMzApO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNywgLTE3NjQxODg5Nyk7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDVdLCAxMiwgMTIwMDA4MDQyNik7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNywgLTE0NzMyMzEzNDEpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyA3XSwgMjIsIC00NTcwNTk4Myk7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA3LCAxNzcwMDM1NDE2KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgOV0sIDEyLCAtMTk1ODQxNDQxNyk7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTcsIC00MjA2Myk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDExXSwgMjIsIC0xOTkwNDA0MTYyKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA3LCAxODA0NjAzNjgyKTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMTNdLCAxMiwgLTQwMzQxMTAxKTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNywgLTE1MDIwMDIyOTApO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxNV0sIDIyLCAxMjM2NTM1MzI5KTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMV0sIDUsIC0xNjU3OTY1MTApO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyA2XSwgOSwgLTEwNjk1MDE2MzIpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE0LCA2NDM3MTc3MTMpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2ldLCAyMCwgLTM3Mzg5NzMwMik7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA1LCAtNzAxNTU4NjkxKTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTBdLCA5LCAzODAxNjA4Myk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTQsIC02NjA0NzgzMzUpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA0XSwgMjAsIC00MDU1Mzc4NDgpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNSwgNTY4NDQ2NDM4KTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTRdLCA5LCAtMTAxOTgwMzY5MCk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNCwgLTE4NzM2Mzk2MSk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDhdLCAyMCwgMTE2MzUzMTUwMSk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNSwgLTE0NDQ2ODE0NjcpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAyXSwgOSwgLTUxNDAzNzg0KTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgN10sIDE0LCAxNzM1MzI4NDczKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgMTJdLCAyMCwgLTE5MjY2MDc3MzQpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNCwgLTM3ODU1OCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDhdLCAxMSwgLTIwMjI1NzQ0NjMpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE2LCAxODM5MDMwNTYyKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTRdLCAyMywgLTM1MzA5NTU2KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMV0sIDQsIC0xNTMwOTkyMDYwKTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgNF0sIDExLCAxMjcyODkzMzUzKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgN10sIDE2LCAtMTU1NDk3NjMyKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTBdLCAyMywgLTEwOTQ3MzA2NDApO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDQsIDY4MTI3OTE3NCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaV0sIDExLCAtMzU4NTM3MjIyKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgM10sIDE2LCAtNzIyNTIxOTc5KTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgNl0sIDIzLCA3NjAyOTE4OSk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDldLCA0LCAtNjQwMzY0NDg3KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgMTJdLCAxMSwgLTQyMTgxNTgzNSk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTYsIDUzMDc0MjUyMCk7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDJdLCAyMywgLTk5NTMzODY1MSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaV0sIDYsIC0xOTg2MzA4NDQpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyA3XSwgMTAsIDExMjY4OTE0MTUpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE1LCAtMTQxNjM1NDkwNSk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDVdLCAyMSwgLTU3NDM0MDU1KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA2LCAxNzAwNDg1NTcxKTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgM10sIDEwLCAtMTg5NDk4NjYwNik7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTUsIC0xMDUxNTIzKTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMV0sIDIxLCAtMjA1NDkyMjc5OSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA2LCAxODczMzEzMzU5KTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTVdLCAxMCwgLTMwNjExNzQ0KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE1LCAtMTU2MDE5ODM4MCk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDEzXSwgMjEsIDEzMDkxNTE2NDkpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNiwgLTE0NTUyMzA3MCk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDExXSwgMTAsIC0xMTIwMjEwMzc5KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE1LCA3MTg3ODcyNTkpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA5XSwgMjEsIC0zNDM0ODU1NTEpO1xuICAgIGEgPSBzYWZlQWRkKGEsIG9sZGEpO1xuICAgIGIgPSBzYWZlQWRkKGIsIG9sZGIpO1xuICAgIGMgPSBzYWZlQWRkKGMsIG9sZGMpO1xuICAgIGQgPSBzYWZlQWRkKGQsIG9sZGQpO1xuICB9XG5cbiAgcmV0dXJuIFthLCBiLCBjLCBkXTtcbn1cbi8qXG4gKiBDb252ZXJ0IGFuIGFycmF5IGJ5dGVzIHRvIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHNcbiAqIENoYXJhY3RlcnMgPjI1NSBoYXZlIHRoZWlyIGhpZ2gtYnl0ZSBzaWxlbnRseSBpZ25vcmVkLlxuICovXG5cblxuZnVuY3Rpb24gYnl0ZXNUb1dvcmRzKGlucHV0KSB7XG4gIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjb25zdCBsZW5ndGg4ID0gaW5wdXQubGVuZ3RoICogODtcbiAgY29uc3Qgb3V0cHV0ID0gbmV3IFVpbnQzMkFycmF5KGdldE91dHB1dExlbmd0aChsZW5ndGg4KSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg4OyBpICs9IDgpIHtcbiAgICBvdXRwdXRbaSA+PiA1XSB8PSAoaW5wdXRbaSAvIDhdICYgMHhmZikgPDwgaSAlIDMyO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbi8qXG4gKiBBZGQgaW50ZWdlcnMsIHdyYXBwaW5nIGF0IDJeMzIuIFRoaXMgdXNlcyAxNi1iaXQgb3BlcmF0aW9ucyBpbnRlcm5hbGx5XG4gKiB0byB3b3JrIGFyb3VuZCBidWdzIGluIHNvbWUgSlMgaW50ZXJwcmV0ZXJzLlxuICovXG5cblxuZnVuY3Rpb24gc2FmZUFkZCh4LCB5KSB7XG4gIGNvbnN0IGxzdyA9ICh4ICYgMHhmZmZmKSArICh5ICYgMHhmZmZmKTtcbiAgY29uc3QgbXN3ID0gKHggPj4gMTYpICsgKHkgPj4gMTYpICsgKGxzdyA+PiAxNik7XG4gIHJldHVybiBtc3cgPDwgMTYgfCBsc3cgJiAweGZmZmY7XG59XG4vKlxuICogQml0d2lzZSByb3RhdGUgYSAzMi1iaXQgbnVtYmVyIHRvIHRoZSBsZWZ0LlxuICovXG5cblxuZnVuY3Rpb24gYml0Um90YXRlTGVmdChudW0sIGNudCkge1xuICByZXR1cm4gbnVtIDw8IGNudCB8IG51bSA+Pj4gMzIgLSBjbnQ7XG59XG4vKlxuICogVGhlc2UgZnVuY3Rpb25zIGltcGxlbWVudCB0aGUgZm91ciBiYXNpYyBvcGVyYXRpb25zIHRoZSBhbGdvcml0aG0gdXNlcy5cbiAqL1xuXG5cbmZ1bmN0aW9uIG1kNWNtbihxLCBhLCBiLCB4LCBzLCB0KSB7XG4gIHJldHVybiBzYWZlQWRkKGJpdFJvdGF0ZUxlZnQoc2FmZUFkZChzYWZlQWRkKGEsIHEpLCBzYWZlQWRkKHgsIHQpKSwgcyksIGIpO1xufVxuXG5mdW5jdGlvbiBtZDVmZihhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGMgfCB+YiAmIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVnZyhhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGQgfCBjICYgfmQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVoaChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiBeIGMgXiBkLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1aWkoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGMgXiAoYiB8IH5kKSwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1kNTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbWQ1LmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgdjM1IGZyb20gJy4vdjM1LmpzJztcbmltcG9ydCBzaGExIGZyb20gJy4vc2hhMS5qcyc7XG5jb25zdCB2NSA9IHYzNSgndjUnLCAweDUwLCBzaGExKTtcbmV4cG9ydCBkZWZhdWx0IHY1O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NS5qc1xuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIEFkYXB0ZWQgZnJvbSBDaHJpcyBWZW5lc3MnIFNIQTEgY29kZSBhdFxuLy8gaHR0cDovL3d3dy5tb3ZhYmxlLXR5cGUuY28udWsvc2NyaXB0cy9zaGExLmh0bWxcbmZ1bmN0aW9uIGYocywgeCwgeSwgeikge1xuICBzd2l0Y2ggKHMpIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4geCAmIHkgXiB+eCAmIHo7XG5cbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4geCBeIHkgXiB6O1xuXG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIHggJiB5IF4geCAmIHogXiB5ICYgejtcblxuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG4gIH1cbn1cblxuZnVuY3Rpb24gUk9UTCh4LCBuKSB7XG4gIHJldHVybiB4IDw8IG4gfCB4ID4+PiAzMiAtIG47XG59XG5cbmZ1bmN0aW9uIHNoYTEoYnl0ZXMpIHtcbiAgY29uc3QgSyA9IFsweDVhODI3OTk5LCAweDZlZDllYmExLCAweDhmMWJiY2RjLCAweGNhNjJjMWQ2XTtcbiAgY29uc3QgSCA9IFsweDY3NDUyMzAxLCAweGVmY2RhYjg5LCAweDk4YmFkY2ZlLCAweDEwMzI1NDc2LCAweGMzZDJlMWYwXTtcblxuICBpZiAodHlwZW9mIGJ5dGVzID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IG1zZyA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChieXRlcykpOyAvLyBVVEY4IGVzY2FwZVxuXG4gICAgYnl0ZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXNnLmxlbmd0aDsgKytpKSB7XG4gICAgICBieXRlcy5wdXNoKG1zZy5jaGFyQ29kZUF0KGkpKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkoYnl0ZXMpKSB7XG4gICAgLy8gQ29udmVydCBBcnJheS1saWtlIHRvIEFycmF5XG4gICAgYnl0ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChieXRlcyk7XG4gIH1cblxuICBieXRlcy5wdXNoKDB4ODApO1xuICBjb25zdCBsID0gYnl0ZXMubGVuZ3RoIC8gNCArIDI7XG4gIGNvbnN0IE4gPSBNYXRoLmNlaWwobCAvIDE2KTtcbiAgY29uc3QgTSA9IG5ldyBBcnJheShOKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IE47ICsraSkge1xuICAgIGNvbnN0IGFyciA9IG5ldyBVaW50MzJBcnJheSgxNik7XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDE2OyArK2opIHtcbiAgICAgIGFycltqXSA9IGJ5dGVzW2kgKiA2NCArIGogKiA0XSA8PCAyNCB8IGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgMV0gPDwgMTYgfCBieXRlc1tpICogNjQgKyBqICogNCArIDJdIDw8IDggfCBieXRlc1tpICogNjQgKyBqICogNCArIDNdO1xuICAgIH1cblxuICAgIE1baV0gPSBhcnI7XG4gIH1cblxuICBNW04gLSAxXVsxNF0gPSAoYnl0ZXMubGVuZ3RoIC0gMSkgKiA4IC8gTWF0aC5wb3coMiwgMzIpO1xuICBNW04gLSAxXVsxNF0gPSBNYXRoLmZsb29yKE1bTiAtIDFdWzE0XSk7XG4gIE1bTiAtIDFdWzE1XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggJiAweGZmZmZmZmZmO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgTjsgKytpKSB7XG4gICAgY29uc3QgVyA9IG5ldyBVaW50MzJBcnJheSg4MCk7XG5cbiAgICBmb3IgKGxldCB0ID0gMDsgdCA8IDE2OyArK3QpIHtcbiAgICAgIFdbdF0gPSBNW2ldW3RdO1xuICAgIH1cblxuICAgIGZvciAobGV0IHQgPSAxNjsgdCA8IDgwOyArK3QpIHtcbiAgICAgIFdbdF0gPSBST1RMKFdbdCAtIDNdIF4gV1t0IC0gOF0gXiBXW3QgLSAxNF0gXiBXW3QgLSAxNl0sIDEpO1xuICAgIH1cblxuICAgIGxldCBhID0gSFswXTtcbiAgICBsZXQgYiA9IEhbMV07XG4gICAgbGV0IGMgPSBIWzJdO1xuICAgIGxldCBkID0gSFszXTtcbiAgICBsZXQgZSA9IEhbNF07XG5cbiAgICBmb3IgKGxldCB0ID0gMDsgdCA8IDgwOyArK3QpIHtcbiAgICAgIGNvbnN0IHMgPSBNYXRoLmZsb29yKHQgLyAyMCk7XG4gICAgICBjb25zdCBUID0gUk9UTChhLCA1KSArIGYocywgYiwgYywgZCkgKyBlICsgS1tzXSArIFdbdF0gPj4+IDA7XG4gICAgICBlID0gZDtcbiAgICAgIGQgPSBjO1xuICAgICAgYyA9IFJPVEwoYiwgMzApID4+PiAwO1xuICAgICAgYiA9IGE7XG4gICAgICBhID0gVDtcbiAgICB9XG5cbiAgICBIWzBdID0gSFswXSArIGEgPj4+IDA7XG4gICAgSFsxXSA9IEhbMV0gKyBiID4+PiAwO1xuICAgIEhbMl0gPSBIWzJdICsgYyA+Pj4gMDtcbiAgICBIWzNdID0gSFszXSArIGQgPj4+IDA7XG4gICAgSFs0XSA9IEhbNF0gKyBlID4+PiAwO1xuICB9XG5cbiAgcmV0dXJuIFtIWzBdID4+IDI0ICYgMHhmZiwgSFswXSA+PiAxNiAmIDB4ZmYsIEhbMF0gPj4gOCAmIDB4ZmYsIEhbMF0gJiAweGZmLCBIWzFdID4+IDI0ICYgMHhmZiwgSFsxXSA+PiAxNiAmIDB4ZmYsIEhbMV0gPj4gOCAmIDB4ZmYsIEhbMV0gJiAweGZmLCBIWzJdID4+IDI0ICYgMHhmZiwgSFsyXSA+PiAxNiAmIDB4ZmYsIEhbMl0gPj4gOCAmIDB4ZmYsIEhbMl0gJiAweGZmLCBIWzNdID4+IDI0ICYgMHhmZiwgSFszXSA+PiAxNiAmIDB4ZmYsIEhbM10gPj4gOCAmIDB4ZmYsIEhbM10gJiAweGZmLCBIWzRdID4+IDI0ICYgMHhmZiwgSFs0XSA+PiAxNiAmIDB4ZmYsIEhbNF0gPj4gOCAmIDB4ZmYsIEhbNF0gJiAweGZmXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hhMTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc2hhMS5qc1xuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0ICcwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uaWwuanNcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG5cbmZ1bmN0aW9uIHZlcnNpb24odXVpZCkge1xuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdJbnZhbGlkIFVVSUQnKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZUludCh1dWlkLnNsaWNlKDE0LCAxNSksIDE2KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmVyc2lvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmVyc2lvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=