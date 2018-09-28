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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index-app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/form.js":
/*!********************************!*\
  !*** ./src/components/form.js ***!
  \********************************/
/*! exports provided: InputForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputForm", function() { return InputForm; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputForm = function (_React$Component) {
  _inherits(InputForm, _React$Component);

  function InputForm(props) {
    _classCallCheck(this, InputForm);

    return _possibleConstructorReturn(this, (InputForm.__proto__ || Object.getPrototypeOf(InputForm)).call(this, props));
  }

  _createClass(InputForm, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'changeCb',
    value: function changeCb(ev) {
      this.state[ev.target.name] = ev.target.value;
    }
  }, {
    key: 'submitCb',
    value: function submitCb(ev) {
      var _this2 = this;

      ev.preventDefault();

      window.setTimeout(function () {
        console.log('form submit, timeouted');
        _this2.props.submitCb({ status: 200, responseText: "" });
      }, 500);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var inputs = this.props.inputs.map(function (input, i) {
        if (input.tagName == 'input') {
          return React.createElement('input', { name: input.name, type: input.type, key: i.toString(), onChange: _this3.changeCb });
        } else if (input.tagName == 'textarea') {
          return React.createElement('textarea', { name: input.name, type: input.type, key: i.toString(), onChange: _this3.changeCb });
        }
      });

      return React.createElement(
        'form',
        null,
        inputs,
        React.createElement('input', { type: 'submit', value: this.props.submitVal, onClick: this.submitCb.bind(this) })
      );
    }
  }]);

  return InputForm;
}(React.Component);



/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
function Header(props) {
  return React.createElement(
    "header",
    { onClick: props.clickCb },
    props.children
  );
}



/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/components/header.js");
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav.js */ "./src/components/nav.js");
/* harmony import */ var _nav_link_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-link.js */ "./src/components/nav-link.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.js */ "./src/components/form.js");
/* harmony import */ var _switcher_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./switcher.js */ "./src/components/switcher.js");
/* harmony import */ var _section_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./section.js */ "./src/components/section.js");
/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info.js */ "./src/components/info.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





// import {Footer} from 'footer.js'




var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.sections = {
      home: React.createRef(),
      identity: React.createRef(),
      salesStatus: React.createRef(),
      wip0: React.createRef(),
      visitorPropertyEstimations: React.createRef(),
      sellWithUs: React.createRef(),
      sellWithUsResponse: React.createRef(),
      contactForm: React.createRef(),
      contactProcess: React.createRef()
    };

    _this.salesStatusMetrics = [{ h: "55000", text: 'two lines of text' }, { h: "55000", text: 'two lines of text' }, { h: "55000", text: 'two lines of text' }, { h: "55000", text: 'two lines of text' }];
    return _this;
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'getVisibleSections',
    value: function getVisibleSections() {
      var _this2 = this;

      var sectionsKeys = Object.keys(this.sections);
      var sectionsVisible = [];

      console.log(sectionsKeys);
      console.log(this.sections);
      sectionsKeys.forEach(function (key) {
        if (_this2.sections[key].current.isVisible()) {
          sectionsVisible.push(_this2.sections[key].current);
        }
      });

      console.log(sectionsVisible);
      return sectionsVisible;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return React.createElement(
        'div',
        { className: 'page' },
        React.createElement(
          _section_js__WEBPACK_IMPORTED_MODULE_5__["Section"],
          { ref: this.sections.home, identifier: 'home', visible: true, inViewCb: this.props.onSectionEnterCb, onToggleVisib: this.props.onToggleSectionVisibility },
          React.createElement(
            'div',
            { className: 'half' },
            React.createElement(
              _info_js__WEBPACK_IMPORTED_MODULE_6__["Info"],
              { className: 'info', heading: 'Home Heading' },
              "Home info text body"
            )
          ),
          React.createElement('div', { className: 'half' })
        ),
        React.createElement(
          _section_js__WEBPACK_IMPORTED_MODULE_5__["Section"],
          { ref: this.sections.identity, identifier: 'identity', visible: true, inViewCb: this.props.onSectionEnterCb, onToggleVisib: this.props.onToggleSectionVisibility },
          React.createElement(
            'div',
            { className: 'logo-large' },
            "Logo"
          )
        ),
        React.createElement(
          _section_js__WEBPACK_IMPORTED_MODULE_5__["Section"],
          { ref: this.sections.salesStatus, identifier: 'salesStatus', visible: true, inViewCb: this.props.onSectionEnterCb, onToggleVisib: this.props.onToggleSectionVisibility },
          React.createElement(_info_js__WEBPACK_IMPORTED_MODULE_6__["Infos"], { items: this.salesStatusMetrics })
        ),
        React.createElement(
          _section_js__WEBPACK_IMPORTED_MODULE_5__["Section"],
          { ref: this.sections.wip0, identifier: 'wip0', visible: true, inViewCb: this.props.onSectionEnterCb, onToggleVisib: this.props.onToggleSectionVisibility },
          React.createElement(
            'h1',
            null,
            'Work In Progress Here ...'
          ),
          React.createElement(
            'p',
            null,
            'I suppose, this should be a form, which on response reveals the next sections'
          ),
          React.createElement(
            'h2',
            { onClick: function onClick() {
                _this3.sections.visitorPropertyEstimations.current.show();
                _this3.sections.sellWithUs.current.show();
              } },
            'Click Me!'
          )
        ),
        React.createElement(
          _section_js__WEBPACK_IMPORTED_MODULE_5__["Section"],
          { ref: this.sections.visitorPropertyEstimations, identifier: 'visitorPropertyEstimations', visible: false, inViewCb: this.props.onSectionEnterCb, onToggleVisib: this.props.onToggleSectionVisibility },
          React.createElement(
            'div',
            { className: 'half' },
            React.createElement(
              _info_js__WEBPACK_IMPORTED_MODULE_6__["Info"],
              { className: 'info', heading: 'Based on Info You Provided' },
              React.createElement(
                'p',
                null,
                'we found that your ducks is worth ',
                React.createElement(
                  'span',
                  null,
                  "$5 - $6",
                  'M range'
                ),
                ' and there are ',
                "25",
                ' buyers'
              )
            )
          ),
          React.createElement('div', { className: 'half' })
        ),
        React.createElement(
          _section_js__WEBPACK_IMPORTED_MODULE_5__["Section"],
          { ref: this.sections.sellWithUs, identifier: 'sellWithUs', visible: false, inViewCb: this.props.onSectionEnterCb, onToggleVisib: this.props.onToggleSectionVisibility },
          React.createElement(_form_js__WEBPACK_IMPORTED_MODULE_3__["InputForm"], {
            submitCb: function submitCb(xhr) {
              console.log('submitCb cb');
              if (xhr.status == 200) {
                _this3.sections.sellWithUsResponse.current.show();
              }
            },
            inputs: [{
              tagName: "input",
              type: "text"
            }, {
              tagName: "textarea",
              type: "text"
            }]
          })
        ),
        React.createElement(
          _section_js__WEBPACK_IMPORTED_MODULE_5__["Section"],
          { ref: this.sections.sellWithUsResponse, identifier: 'sellWithUsResponse', visible: false, inViewCb: this.props.onSectionEnterCb, onToggleVisib: this.props.onToggleSectionVisibility },
          React.createElement(
            'h1',
            null,
            'We Received:'
          ),
          React.createElement(
            'span',
            null,
            'ducks'
          )
        ),
        React.createElement(_section_js__WEBPACK_IMPORTED_MODULE_5__["Section"], { ref: this.sections.contactForm, identifier: 'contactForm', visible: true, inViewCb: this.props.onSectionEnterCb, onToggleVisib: this.props.onToggleSectionVisibility }),
        React.createElement(_section_js__WEBPACK_IMPORTED_MODULE_5__["Section"], { ref: this.sections.contactProcess, identifier: 'contactProcess', visible: true, inViewCb: this.props.onSectionEnterCb, onToggleVisib: this.props.onToggleSectionVisibility })
      );
    }
  }]);

  return Home;
}(React.Component);

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App(props) {
    _classCallCheck(this, App);

    var _this4 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this4.home = React.createRef();
    // this.contact = React.createRef()
    // this.about = React.createRef()
    // this.news = React.createRef()

    _this4.switcher = React.createRef();
    return _this4;
  }

  _createClass(App, [{
    key: 'createSwitcherItems',
    value: function createSwitcherItems() {
      return this.home.current.getVisibleSections().map(function (section, i) {
        return {
          val: '0' + i,
          identifier: section.props.identifier
        };
      });
    }
  }, {
    key: 'updateSwitcher',
    value: function updateSwitcher() {
      var _this5 = this;

      console.log("items", this.createSwitcherItems());
      this.switcher.current.setItems(this.createSwitcherItems());
      window.setTimeout(function () {
        _this5.switcher.current.switchTo(_this5.sectionCurrentId);
      }, 30);
    }
  }, {
    key: 'sectionEnterCb',
    value: function sectionEnterCb(sectionId) {
      this.switcher.current.switchTo(sectionId);
      this.sectionCurrentId = sectionId;
    }
  }, {
    key: 'testToggleSection',
    value: function testToggleSection() {
      this.home.current.sections.visitorPropertyEstimations.current.show();
    }

    /*
    route(url) {
      const query = url.slice(url.indexOf("?")+1)
      const hash = query.slice(query.indexOf("#")+1)
      const search = query.slice(0, query.indexOf("#"))
       const page = search.split("=")[1]
      switch(page) {
        case(page == "home") {
         }
         case(page == "about") {
         }
         case(page == "news") {
         }
      }
    }
    */

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this6 = this;

      console.log("app", this);
      this.sectionCurrentId = 'home';
      this.updateSwitcher();
      window.setTimeout(function () {
        _this6.switcher.current.switchTo('home');
      }, 250);

      // this.switcher.current.switchTo("identity")
    }
  }, {
    key: 'render',
    value: function render() {
      var items = [{
        val: '01',
        identifier: 'home'
      }];

      return React.createElement(
        'div',
        { className: 'app' },
        React.createElement(
          _header_js__WEBPACK_IMPORTED_MODULE_0__["Header"],
          { clickCb: this.testToggleSection.bind(this) },
          React.createElement('div', { className: 'logo' }),
          React.createElement(
            _nav_js__WEBPACK_IMPORTED_MODULE_1__["Nav"],
            null,
            React.createElement(_nav_link_js__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { text: 'HOME', url: '?page=home#home' }),
            React.createElement(_nav_link_js__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { text: 'ABOUT US', url: '?page=about' }),
            React.createElement(_nav_link_js__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { text: 'NEWS', url: '?page=news' }),
            React.createElement(_nav_link_js__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { text: 'CONTACT', url: '?page=home#contact' })
          ),
          React.createElement('div', { className: 'search-button' })
        ),
        React.createElement('div', { className: 'toggle-menu-button' }),
        React.createElement(_switcher_js__WEBPACK_IMPORTED_MODULE_4__["Switcher"], { ref: this.switcher, className: 'switcher', items: items }),
        React.createElement(Home, { ref: this.home, onToggleSectionVisibility: this.updateSwitcher.bind(this), onSectionEnterCb: this.sectionEnterCb.bind(this) })
      );
    }
  }]);

  return App;
}(React.Component);

 // Home, HomeWrapper

/***/ }),

/***/ "./src/components/info.js":
/*!********************************!*\
  !*** ./src/components/info.js ***!
  \********************************/
/*! exports provided: Info, Infos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return Info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Infos", function() { return Infos; });
function Info(props) {
  return React.createElement(
    "div",
    { className: "info" },
    React.createElement(
      "h1",
      null,
      props.heading
    ),
    props.children
  );
}

function Infos(props) {
  var items = props.items.map(function (item, i) {
    return React.createElement(
      Info,
      { heading: item.h, key: i.toString() },
      item.text
    );
  });

  return React.createElement(
    "div",
    { className: "infos" },
    items
  );
}



/***/ }),

/***/ "./src/components/nav-link.js":
/*!************************************!*\
  !*** ./src/components/nav-link.js ***!
  \************************************/
/*! exports provided: NavLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
function NavLink(props) {
  return React.createElement(
    "a",
    { href: props.url },
    React.createElement(
      "span",
      null,
      props.text
    )
  );
}



/***/ }),

/***/ "./src/components/nav.js":
/*!*******************************!*\
  !*** ./src/components/nav.js ***!
  \*******************************/
/*! exports provided: Nav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
function Nav(props) {
  return React.createElement(
    "nav",
    { className: "links-container" },
    props.children
  );
}



/***/ }),

/***/ "./src/components/section.js":
/*!***********************************!*\
  !*** ./src/components/section.js ***!
  \***********************************/
/*! exports provided: Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getViewportHeight() {
  return window.innerHeight && document.documentElement.clientHeight ? Math.min(window.innerHeight, document.documentElement.clientHeight) : window.innerHeight || document.documentElement.clientHeight || document.querySelector('body').clientHeight || document.getElementsByTagName('body')[0].clientHeight;
}

function getViewportWidth() {
  return window.innerWidth && document.documentElement.clientWidth ? Math.min(window.innerWidth, document.documentElement.clientWidth) : window.innerWidth || document.documentElement.clientWidth || document.querySelector('body').clientWidth || document.getElementsByTagName('body')[0].clientWidth;
}

var Section = function (_React$Component) {
  _inherits(Section, _React$Component);

  function Section(props) {
    _classCallCheck(this, Section);

    var _this = _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).call(this, props));

    _this.visible = props.visible;
    _this.dom = React.createRef();

    // we'll use this to determine if section is in the viewport
    _this.vH = getViewportHeight();
    _this.inViewPrev = false;

    window.addEventListener('resize', function () {
      _this.vH = getViewportHeight();
    });

    window.addEventListener('scroll', function () {
      if (!_this.visible) return;

      var inView = _this.isInView();
      if (_this.inViewPrev != inView) {
        if (inView) _this.props.inViewCb(_this.props.identifier);
      }
    });

    // this.state = {}
    // this.state.visible = props.visible

    return _this;
  }

  _createClass(Section, [{
    key: 'show',
    value: function show() {
      this.dom.current.classList.remove("noned");
      this.visible = true;
      this.props.onToggleVisib(this.props.identifier);
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.dom.current.classList.add("noned");
      this.visible = false;
      this.props.onToggleVisib(this.props.identifier);
    }
  }, {
    key: 'isInView',
    value: function isInView() {
      var rect = this.dom.current.getBoundingClientRect();

      return rect.top >= Math.round(this.vH / 3 * -1) && rect.top <= Math.round(this.vH / 3)
      // rect.left >= 0 &&
      // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
      // rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
      ;
    }
  }, {
    key: 'isVisible',
    value: function isVisible() {
      return this.visible;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      var className = this.visible ? 'content-section' : 'content-section noned';

      return React.createElement(
        'section',
        { ref: this.dom, className: className, id: this.props.identifier },
        this.props.children
      );
    }
  }]);

  return Section;
}(React.Component);



/***/ }),

/***/ "./src/components/switcher.js":
/*!************************************!*\
  !*** ./src/components/switcher.js ***!
  \************************************/
/*! exports provided: Switcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switcher", function() { return Switcher; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
  @param {array} props.items array of items, each of the format:
    @param {string} props.items[n].innerText
    @param {object} props.items[n]. ...
*/

function SwitcherItem(props) {
  var id = "item_" + props.identifier;
  return React.createElement(
    "div",
    { className: "switcher-item", id: id, "data-identifier": props.identifier },
    props.val
  );
}

function SwitcherItemDummy(props) {
  return React.createElement(
    "div",
    { className: "switcher-item", "data-identifier": props.identifier },
    props.val
  );
}

var Switcher = function (_React$Component) {
  _inherits(Switcher, _React$Component);

  function Switcher(props) {
    _classCallCheck(this, Switcher);

    // this.refRoot = React.createRef()
    var _this = _possibleConstructorReturn(this, (Switcher.__proto__ || Object.getPrototypeOf(Switcher)).call(this, props));

    _this.items = React.createRef();

    _this.state = {
      items: _this.formItemEls(props.items)
    };
    return _this;
  }

  _createClass(Switcher, [{
    key: "setItems",
    value: function setItems(items) {
      var itemEls = this.formItemEls(items);
      this.setState({ items: itemEls });
    }
  }, {
    key: "switchTo",
    value: function switchTo(identifier) {
      // const offset = this.items.indexOf(itemId)
      // this.domRef.style.top =
      // console.log("switcher items ref", this.items)
      var offset = this.items.current.querySelector('#item_' + identifier).offsetTop;
      this.items.current.style.top = offset * -1 + "px";
    }
  }, {
    key: "formItemEls",
    value: function formItemEls(items) {
      var itemsDummyPre = items.map(function (item, i) {
        var key = "dummy-pre_" + item.identifier;
        return React.createElement(SwitcherItemDummy, { val: item.val, identifier: item.identifier, key: key });
      });

      var itemsDummyPost = items.map(function (item, i) {
        var key = "dummy-post_" + item.identifier;
        return React.createElement(SwitcherItemDummy, { val: item.val, identifier: item.identifier, key: key });
      });

      var itemsReal = items.map(function (item, i) {
        return React.createElement(SwitcherItem, { val: item.val, identifier: item.identifier, key: item.identifier.toString() });
      });

      return itemsDummyPre.concat(itemsReal).concat(itemsDummyPost);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      console.log('switcher, render');
      return React.createElement(
        "div",
        { className: "switcher" },
        React.createElement(
          "div",
          { className: "switcher-highlight" },
          React.createElement(
            "div",
            { ref: this.items, className: "switcher-items" },
            this.state.items
          )
        )
      );
    }
  }]);

  return Switcher;
}(React.Component);



/***/ }),

/***/ "./src/index-app.js":
/*!**************************!*\
  !*** ./src/index-app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/script.js */ "./src/scripts/script.js");

Object(_scripts_script_js__WEBPACK_IMPORTED_MODULE_0__["main"])();

/***/ }),

/***/ "./src/scripts/script.js":
/*!*******************************!*\
  !*** ./src/scripts/script.js ***!
  \*******************************/
/*! exports provided: main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony import */ var _components_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/home.js */ "./src/components/home.js");
// import {Switcher} from '../components/switcher.js'


function main() {
  var container = document.querySelector('main');
  ReactDOM.render(React.createElement(_components_home_js__WEBPACK_IMPORTED_MODULE_0__["App"], null), container); // <Switcher className="slider" visibleItems={3} items={data.items} />
}



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmZvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdi1saW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N3aXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC1hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2NyaXB0LmpzIl0sIm5hbWVzIjpbIklucHV0Rm9ybSIsInByb3BzIiwiZXYiLCJzdGF0ZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0Iiwid2luZG93Iiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJzdWJtaXRDYiIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsImlucHV0cyIsIm1hcCIsImlucHV0IiwiaSIsInRhZ05hbWUiLCJ0eXBlIiwidG9TdHJpbmciLCJjaGFuZ2VDYiIsInN1Ym1pdFZhbCIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkhlYWRlciIsImNsaWNrQ2IiLCJjaGlsZHJlbiIsIkhvbWUiLCJzZWN0aW9ucyIsImhvbWUiLCJjcmVhdGVSZWYiLCJpZGVudGl0eSIsInNhbGVzU3RhdHVzIiwid2lwMCIsInZpc2l0b3JQcm9wZXJ0eUVzdGltYXRpb25zIiwic2VsbFdpdGhVcyIsInNlbGxXaXRoVXNSZXNwb25zZSIsImNvbnRhY3RGb3JtIiwiY29udGFjdFByb2Nlc3MiLCJzYWxlc1N0YXR1c01ldHJpY3MiLCJoIiwidGV4dCIsInNlY3Rpb25zS2V5cyIsIk9iamVjdCIsImtleXMiLCJzZWN0aW9uc1Zpc2libGUiLCJmb3JFYWNoIiwia2V5IiwiY3VycmVudCIsImlzVmlzaWJsZSIsInB1c2giLCJvblNlY3Rpb25FbnRlckNiIiwib25Ub2dnbGVTZWN0aW9uVmlzaWJpbGl0eSIsInNob3ciLCJ4aHIiLCJBcHAiLCJzd2l0Y2hlciIsImdldFZpc2libGVTZWN0aW9ucyIsInNlY3Rpb24iLCJ2YWwiLCJpZGVudGlmaWVyIiwiY3JlYXRlU3dpdGNoZXJJdGVtcyIsInNldEl0ZW1zIiwic3dpdGNoVG8iLCJzZWN0aW9uQ3VycmVudElkIiwic2VjdGlvbklkIiwidXBkYXRlU3dpdGNoZXIiLCJpdGVtcyIsInRlc3RUb2dnbGVTZWN0aW9uIiwic2VjdGlvbkVudGVyQ2IiLCJJbmZvIiwiaGVhZGluZyIsIkluZm9zIiwiaXRlbSIsIk5hdkxpbmsiLCJ1cmwiLCJOYXYiLCJnZXRWaWV3cG9ydEhlaWdodCIsImlubmVySGVpZ2h0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJNYXRoIiwibWluIiwicXVlcnlTZWxlY3RvciIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZ2V0Vmlld3BvcnRXaWR0aCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsIlNlY3Rpb24iLCJ2aXNpYmxlIiwiZG9tIiwidkgiLCJpblZpZXdQcmV2IiwiYWRkRXZlbnRMaXN0ZW5lciIsImluVmlldyIsImlzSW5WaWV3IiwiaW5WaWV3Q2IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJvblRvZ2dsZVZpc2liIiwiYWRkIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInJvdW5kIiwiY2xhc3NOYW1lIiwiU3dpdGNoZXJJdGVtIiwiaWQiLCJTd2l0Y2hlckl0ZW1EdW1teSIsIlN3aXRjaGVyIiwiZm9ybUl0ZW1FbHMiLCJpdGVtRWxzIiwic2V0U3RhdGUiLCJvZmZzZXQiLCJvZmZzZXRUb3AiLCJzdHlsZSIsIml0ZW1zRHVtbXlQcmUiLCJpdGVtc0R1bW15UG9zdCIsIml0ZW1zUmVhbCIsImNvbmNhdCIsIm1haW4iLCJjb250YWluZXIiLCJSZWFjdERPTSIsInJlbmRlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNsRk1BLFM7OztBQUNKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaUhBQ1hBLEtBRFc7QUFFbEI7Ozs7d0NBRW1CLENBRW5COzs7NkJBRVFDLEUsRUFBSTtBQUNYLFdBQUtDLEtBQUwsQ0FBV0QsR0FBR0UsTUFBSCxDQUFVQyxJQUFyQixJQUE2QkgsR0FBR0UsTUFBSCxDQUFVRSxLQUF2QztBQUNEOzs7NkJBRVFKLEUsRUFBSTtBQUFBOztBQUNYQSxTQUFHSyxjQUFIOztBQUVBQyxhQUFPQyxVQUFQLENBQWtCLFlBQU07QUFDdEJDLGdCQUFRQyxHQUFSLENBQVksd0JB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LENBQVksa0JBQVo7QUFDQSxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsVUFBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsb0JBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxLQUFLLEtBQUsyRCxLQUFmLEVBQXNCLFdBQVUsZ0JBQWhDO0FBQWtELGlCQUFLbkUsS0FBTCxDQUFXbUU7QUFBN0Q7QUFERjtBQURGLE9BREY7QUFPRDs7OztFQWhFb0I3QyxNQUFNQyxTOzs7Ozs7Ozs7Ozs7OztBQ3BCN0I7QUFBQTtBQUFBO0FBQ0FrRywrREFBSUEsRzs7Ozs7Ozs7Ozs7O0FDREo7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQ2QsTUFBTUMsWUFBWTNDLFNBQVNLLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBbEI7QUFDQXVDLFdBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsdURBQUQsT0FBaEIsRUFBeUJGLFNBQXpCLEVBRmMsQ0FFc0I7QUFDckMiLCJmaWxlIjoiaW5kZXgtYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgtYXBwLmpzXCIpO1xuIiwiY2xhc3MgSW5wdXRGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gIH1cblxuICBjaGFuZ2VDYihldikge1xuICAgIHRoaXMuc3RhdGVbZXYudGFyZ2V0Lm5hbWVdID0gZXYudGFyZ2V0LnZhbHVlXG4gIH1cblxuICBzdWJtaXRDYihldikge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KClcblxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdmb3JtIHN1Ym1pdCwgdGltZW91dGVkJylcbiAgICAgIHRoaXMucHJvcHMuc3VibWl0Q2Ioe3N0YXR1czogMjAwLCByZXNwb25zZVRleHQ6IFwiXCJ9KVxuICAgIH0sIDUwMClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpbnB1dHMgPSB0aGlzLnByb3BzLmlucHV0cy5tYXAoKGlucHV0LCBpKSA9PiB7XG4gICAgICBpZiAoaW5wdXQudGFnTmFtZSA9PSAnaW5wdXQnKSB7XG4gICAgICAgIHJldHVybiA8aW5wdXQgbmFtZT17aW5wdXQubmFtZX0gdHlwZT17aW5wdXQudHlwZX0ga2V5PXtpLnRvU3RyaW5nKCl9IG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUNifSAvPlxuICAgICAgfSBlbHNlIGlmIChpbnB1dC50YWdOYW1lID09ICd0ZXh0YXJlYScpIHtcbiAgICAgICAgcmV0dXJuIDx0ZXh0YXJlYSBuYW1lPXtpbnB1dC5uYW1lfSB0eXBlPXtpbnB1dC50eXBlfSBrZXk9e2kudG9TdHJpbmcoKX0gb25DaGFuZ2U9e3RoaXMuY2hhbmdlQ2J9IC8+XG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybT5cbiAgICAgICAge2lucHV0c31cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT17dGhpcy5wcm9wcy5zdWJtaXRWYWx9IG9uQ2xpY2s9e3RoaXMuc3VibWl0Q2IuYmluZCh0aGlzKX0gLz5cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IHtJbnB1dEZvcm19XG4iLCJmdW5jdGlvbiBIZWFkZXIocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIG9uQ2xpY2s9e3Byb3BzLmNsaWNrQ2J9PlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvaGVhZGVyPlxuICApXG59XG5cbmV4cG9ydCB7SGVhZGVyfVxuIiwiaW1wb3J0IHtIZWFkZXJ9IGZyb20gJy4vaGVhZGVyLmpzJ1xuaW1wb3J0IHtOYXZ9IGZyb20gJy4vbmF2LmpzJ1xuaW1wb3J0IHtOYXZMaW5rfSBmcm9tICcuL25hdi1saW5rLmpzJ1xuaW1wb3J0IHtJbnB1dEZvcm19IGZyb20gJy4vZm9ybS5qcydcbi8vIGltcG9ydCB7Rm9vdGVyfSBmcm9tICdmb290ZXIuanMnXG5pbXBvcnQge1N3aXRjaGVyfSBmcm9tICcuL3N3aXRjaGVyLmpzJ1xuaW1wb3J0IHtTZWN0aW9ufSBmcm9tICcuL3NlY3Rpb24uanMnXG5pbXBvcnQge0luZm8sIEluZm9zfSBmcm9tICcuL2luZm8uanMnXG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zZWN0aW9ucyA9IHtcbiAgICAgIGhvbWU6IFJlYWN0LmNyZWF0ZVJlZigpLFxuICAgICAgaWRlbnRpdHk6IFJlYWN0LmNyZWF0ZVJlZigpLFxuICAgICAgc2FsZXNTdGF0dXM6IFJlYWN0LmNyZWF0ZVJlZigpLFxuICAgICAgd2lwMDogUmVhY3QuY3JlYXRlUmVmKCksXG4gICAgICB2aXNpdG9yUHJvcGVydHlFc3RpbWF0aW9uczogUmVhY3QuY3JlYXRlUmVmKCksXG4gICAgICBzZWxsV2l0aFVzOiBSZWFjdC5jcmVhdGVSZWYoKSxcbiAgICAgIHNlbGxXaXRoVXNSZXNwb25zZTogUmVhY3QuY3JlYXRlUmVmKCksXG4gICAgICBjb250YWN0Rm9ybTogUmVhY3QuY3JlYXRlUmVmKCksXG4gICAgICBjb250YWN0UHJvY2VzczogUmVhY3QuY3JlYXRlUmVmKCksXG4gICAgfVxuXG4gICAgdGhpcy5zYWxlc1N0YXR1c01ldHJpY3MgPSBbXG4gICAgICB7aDogXCI1NTAwMFwiLCB0ZXh0OiAndHdvIGxpbmVzIG9mIHRleHQnfSxcbiAgICAgIHtoOiBcIjU1MDAwXCIsIHRleHQ6ICd0d28gbGluZXMgb2YgdGV4dCd9LFxuICAgICAge2g6IFwiNTUwMDBcIiwgdGV4dDogJ3R3byBsaW5lcyBvZiB0ZXh0J30sXG4gICAgICB7aDogXCI1NTAwMFwiLCB0ZXh0OiAndHdvIGxpbmVzIG9mIHRleHQnfSxcbiAgICBdXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICB9XG5cbiAgZ2V0VmlzaWJsZVNlY3Rpb25zKCkge1xuICAgIGNvbnN0IHNlY3Rpb25zS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc2VjdGlvbnMpXG4gICAgY29uc3Qgc2VjdGlvbnNWaXNpYmxlID0gW11cblxuICAgIGNvbnNvbGUubG9nKHNlY3Rpb25zS2V5cylcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNlY3Rpb25zKVxuICAgIHNlY3Rpb25zS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAodGhpcy5zZWN0aW9uc1trZXldLmN1cnJlbnQuaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgc2VjdGlvbnNWaXNpYmxlLnB1c2godGhpcy5zZWN0aW9uc1trZXldLmN1cnJlbnQpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnNvbGUubG9nKHNlY3Rpb25zVmlzaWJsZSlcbiAgICByZXR1cm4gc2VjdGlvbnNWaXNpYmxlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxuICAgICAgPFNlY3Rpb24gcmVmPXt0aGlzLnNlY3Rpb25zLmhvbWV9IGlkZW50aWZpZXI9XCJob21lXCIgdmlzaWJsZT17dHJ1ZX0gaW5WaWV3Q2I9e3RoaXMucHJvcHMub25TZWN0aW9uRW50ZXJDYn0gb25Ub2dnbGVWaXNpYj17dGhpcy5wcm9wcy5vblRvZ2dsZVNlY3Rpb25WaXNpYmlsaXR5fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmXCI+XG4gICAgICAgICAgPEluZm8gY2xhc3NOYW1lPVwiaW5mb1wiIGhlYWRpbmc9XCJIb21lIEhlYWRpbmdcIj5cbiAgICAgICAgICAgIHtcIkhvbWUgaW5mbyB0ZXh0IGJvZHlcIn1cbiAgICAgICAgICA8L0luZm8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGZcIj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2VjdGlvbj5cblxuICAgICAgPFNlY3Rpb24gcmVmPXt0aGlzLnNlY3Rpb25zLmlkZW50aXR5fSBpZGVudGlmaWVyPVwiaWRlbnRpdHlcIiB2aXNpYmxlPXt0cnVlfSBpblZpZXdDYj17dGhpcy5wcm9wcy5vblNlY3Rpb25FbnRlckNifSBvblRvZ2dsZVZpc2liPXt0aGlzLnByb3BzLm9uVG9nZ2xlU2VjdGlvblZpc2liaWxpdHl9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28tbGFyZ2VcIj57XCJMb2dvXCJ9PC9kaXY+XG4gICAgICA8L1NlY3Rpb24+XG5cbiAgICAgIDxTZWN0aW9uIHJlZj17dGhpcy5zZWN0aW9ucy5zYWxlc1N0YXR1c30gaWRlbnRpZmllcj1cInNhbGVzU3RhdHVzXCIgdmlzaWJsZT17dHJ1ZX0gaW5WaWV3Q2I9e3RoaXMucHJvcHMub25TZWN0aW9uRW50ZXJDYn0gb25Ub2dnbGVWaXNpYj17dGhpcy5wcm9wcy5vblRvZ2dsZVNlY3Rpb25WaXNpYmlsaXR5fT5cbiAgICAgICAgPEluZm9zIGl0ZW1zPXt0aGlzLnNhbGVzU3RhdHVzTWV0cmljc30+PC9JbmZvcz5cbiAgICAgIDwvU2VjdGlvbj5cblxuICAgICAgPFNlY3Rpb24gcmVmPXt0aGlzLnNlY3Rpb25zLndpcDB9IGlkZW50aWZpZXI9XCJ3aXAwXCIgdmlzaWJsZT17dHJ1ZX0gaW5WaWV3Q2I9e3RoaXMucHJvcHMub25TZWN0aW9uRW50ZXJDYn0gb25Ub2dnbGVWaXNpYj17dGhpcy5wcm9wcy5vblRvZ2dsZVNlY3Rpb25WaXNpYmlsaXR5fT5cbiAgICAgICAgPGgxPldvcmsgSW4gUHJvZ3Jlc3MgSGVyZSAuLi48L2gxPlxuICAgICAgICA8cD5JIHN1cHBvc2UsIHRoaXMgc2hvdWxkIGJlIGEgZm9ybSwgd2hpY2ggb24gcmVzcG9uc2UgcmV2ZWFscyB0aGUgbmV4dCBzZWN0aW9uczwvcD5cbiAgICAgICAgPGgyIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICB0aGlzLnNlY3Rpb25zLnZpc2l0b3JQcm9wZXJ0eUVzdGltYXRpb25zLmN1cnJlbnQuc2hvdygpXG4gICAgICAgICAgdGhpcy5zZWN0aW9ucy5zZWxsV2l0aFVzLmN1cnJlbnQuc2hvdygpXG4gICAgICAgIH19PkNsaWNrIE1lITwvaDI+XG4gICAgICA8L1NlY3Rpb24+XG5cbiAgICAgIDxTZWN0aW9uIHJlZj17dGhpcy5zZWN0aW9ucy52aXNpdG9yUHJvcGVydHlFc3RpbWF0aW9uc30gaWRlbnRpZmllcj1cInZpc2l0b3JQcm9wZXJ0eUVzdGltYXRpb25zXCIgdmlzaWJsZT17ZmFsc2V9IGluVmlld0NiPXt0aGlzLnByb3BzLm9uU2VjdGlvbkVudGVyQ2J9IG9uVG9nZ2xlVmlzaWI9e3RoaXMucHJvcHMub25Ub2dnbGVTZWN0aW9uVmlzaWJpbGl0eX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZlwiPlxuICAgICAgICAgIDxJbmZvIGNsYXNzTmFtZT1cImluZm9cIiBoZWFkaW5nPVwiQmFzZWQgb24gSW5mbyBZb3UgUHJvdmlkZWRcIj5cbiAgICAgICAgICAgIDxwPndlIGZvdW5kIHRoYXQgeW91ciBkdWNrcyBpcyB3b3J0aCA8c3Bhbj57XCIkNSAtICQ2XCJ9TSByYW5nZTwvc3Bhbj4gYW5kIHRoZXJlIGFyZSB7XCIyNVwifSBidXllcnM8L3A+XG4gICAgICAgICAgPC9JbmZvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmXCI+PC9kaXY+XG4gICAgICA8L1NlY3Rpb24+XG5cbiAgICAgIDxTZWN0aW9uIHJlZj17dGhpcy5zZWN0aW9ucy5zZWxsV2l0aFVzfSBpZGVudGlmaWVyPVwic2VsbFdpdGhVc1wiIHZpc2libGU9e2ZhbHNlfSBpblZpZXdDYj17dGhpcy5wcm9wcy5vblNlY3Rpb25FbnRlckNifSBvblRvZ2dsZVZpc2liPXt0aGlzLnByb3BzLm9uVG9nZ2xlU2VjdGlvblZpc2liaWxpdHl9PlxuICAgICAgICA8SW5wdXRGb3JtXG4gICAgICAgICAgc3VibWl0Q2I9eyh4aHIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWJtaXRDYiBjYicpXG4gICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgdGhpcy5zZWN0aW9ucy5zZWxsV2l0aFVzUmVzcG9uc2UuY3VycmVudC5zaG93KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAgIGlucHV0cz17W1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0YWdOYW1lOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0YWdOYW1lOiBcInRleHRhcmVhXCIsXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF19XG4gICAgICAgICAgPlxuICAgICAgICA8L0lucHV0Rm9ybT5cbiAgICAgIDwvU2VjdGlvbj5cblxuICAgICAgPFNlY3Rpb24gcmVmPXt0aGlzLnNlY3Rpb25zLnNlbGxXaXRoVXNSZXNwb25zZX0gaWRlbnRpZmllcj1cInNlbGxXaXRoVXNSZXNwb25zZVwiIHZpc2libGU9e2ZhbHNlfSBpblZpZXdDYj17dGhpcy5wcm9wcy5vblNlY3Rpb25FbnRlckNifSBvblRvZ2dsZVZpc2liPXt0aGlzLnByb3BzLm9uVG9nZ2xlU2VjdGlvblZpc2liaWxpdHl9PlxuICAgICAgICA8aDE+V2UgUmVjZWl2ZWQ6PC9oMT5cbiAgICAgICAgPHNwYW4+ZHVja3M8L3NwYW4+XG4gICAgICA8L1NlY3Rpb24+XG5cbiAgICAgIDxTZWN0aW9uIHJlZj17dGhpcy5zZWN0aW9ucy5jb250YWN0Rm9ybX0gaWRlbnRpZmllcj1cImNvbnRhY3RGb3JtXCIgdmlzaWJsZT17dHJ1ZX0gaW5WaWV3Q2I9e3RoaXMucHJvcHMub25TZWN0aW9uRW50ZXJDYn0gb25Ub2dnbGVWaXNpYj17dGhpcy5wcm9wcy5vblRvZ2dsZVNlY3Rpb25WaXNpYmlsaXR5fT5cbiAgICAgIDwvU2VjdGlvbj5cblxuICAgICAgPFNlY3Rpb24gcmVmPXt0aGlzLnNlY3Rpb25zLmNvbnRhY3RQcm9jZXNzfSBpZGVudGlmaWVyPVwiY29udGFjdFByb2Nlc3NcIiB2aXNpYmxlPXt0cnVlfSBpblZpZXdDYj17dGhpcy5wcm9wcy5vblNlY3Rpb25FbnRlckNifSBvblRvZ2dsZVZpc2liPXt0aGlzLnByb3BzLm9uVG9nZ2xlU2VjdGlvblZpc2liaWxpdHl9PlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLmhvbWUgPSBSZWFjdC5jcmVhdGVSZWYoKVxuICAgIC8vIHRoaXMuY29udGFjdCA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gICAgLy8gdGhpcy5hYm91dCA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gICAgLy8gdGhpcy5uZXdzID0gUmVhY3QuY3JlYXRlUmVmKClcblxuICAgIHRoaXMuc3dpdGNoZXIgPSBSZWFjdC5jcmVhdGVSZWYoKVxuICB9XG5cbiAgY3JlYXRlU3dpdGNoZXJJdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5ob21lLmN1cnJlbnQuZ2V0VmlzaWJsZVNlY3Rpb25zKCkubWFwKChzZWN0aW9uLCBpKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWw6ICcwJysgaSxcbiAgICAgICAgaWRlbnRpZmllcjogc2VjdGlvbi5wcm9wcy5pZGVudGlmaWVyXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZVN3aXRjaGVyKCkge1xuICAgIGNvbnNvbGUubG9nKFwiaXRlbXNcIiwgdGhpcy5jcmVhdGVTd2l0Y2hlckl0ZW1zKCkpXG4gICAgdGhpcy5zd2l0Y2hlci5jdXJyZW50LnNldEl0ZW1zKHRoaXMuY3JlYXRlU3dpdGNoZXJJdGVtcygpKVxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc3dpdGNoZXIuY3VycmVudC5zd2l0Y2hUbyh0aGlzLnNlY3Rpb25DdXJyZW50SWQpXG4gICAgfSwgMzApXG4gIH1cblxuICBzZWN0aW9uRW50ZXJDYihzZWN0aW9uSWQpIHtcbiAgICB0aGlzLnN3aXRjaGVyLmN1cnJlbnQuc3dpdGNoVG8oc2VjdGlvbklkKVxuICAgIHRoaXMuc2VjdGlvbkN1cnJlbnRJZCA9IHNlY3Rpb25JZFxuICB9XG5cbiAgdGVzdFRvZ2dsZVNlY3Rpb24oKSB7XG4gICAgdGhpcy5ob21lLmN1cnJlbnQuc2VjdGlvbnMudmlzaXRvclByb3BlcnR5RXN0aW1hdGlvbnMuY3VycmVudC5zaG93KClcbiAgfVxuXG4gIC8qXG4gIHJvdXRlKHVybCkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gdXJsLnNsaWNlKHVybC5pbmRleE9mKFwiP1wiKSsxKVxuICAgIGNvbnN0IGhhc2ggPSBxdWVyeS5zbGljZShxdWVyeS5pbmRleE9mKFwiI1wiKSsxKVxuICAgIGNvbnN0IHNlYXJjaCA9IHF1ZXJ5LnNsaWNlKDAsIHF1ZXJ5LmluZGV4T2YoXCIjXCIpKVxuXG4gICAgY29uc3QgcGFnZSA9IHNlYXJjaC5zcGxpdChcIj1cIilbMV1cbiAgICBzd2l0Y2gocGFnZSkge1xuICAgICAgY2FzZShwYWdlID09IFwiaG9tZVwiKSB7XG5cbiAgICAgIH1cblxuICAgICAgY2FzZShwYWdlID09IFwiYWJvdXRcIikge1xuXG4gICAgICB9XG5cbiAgICAgIGNhc2UocGFnZSA9PSBcIm5ld3NcIikge1xuXG4gICAgICB9XG4gICAgfVxuICB9XG4gICovXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc29sZS5sb2coXCJhcHBcIiwgdGhpcylcbiAgICB0aGlzLnNlY3Rpb25DdXJyZW50SWQgPSAnaG9tZSdcbiAgICB0aGlzLnVwZGF0ZVN3aXRjaGVyKClcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnN3aXRjaGVyLmN1cnJlbnQuc3dpdGNoVG8oJ2hvbWUnKVxuICAgIH0sIDI1MClcblxuXG4gICAgLy8gdGhpcy5zd2l0Y2hlci5jdXJyZW50LnN3aXRjaFRvKFwiaWRlbnRpdHlcIilcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpdGVtcyA9IFt7XG4gICAgICB2YWw6ICcwMScsXG4gICAgICBpZGVudGlmaWVyOiAnaG9tZSdcbiAgICB9XVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XG4gICAgICAgIDxIZWFkZXIgY2xpY2tDYj17dGhpcy50ZXN0VG9nZ2xlU2VjdGlvbi5iaW5kKHRoaXMpfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj48L2Rpdj5cbiAgICAgICAgICA8TmF2PlxuICAgICAgICAgICAgPE5hdkxpbmsgdGV4dD1cIkhPTUVcIiB1cmw9XCI/cGFnZT1ob21lI2hvbWVcIi8+XG4gICAgICAgICAgICA8TmF2TGluayB0ZXh0PVwiQUJPVVQgVVNcIiB1cmw9XCI/cGFnZT1hYm91dFwiLz5cbiAgICAgICAgICAgIDxOYXZMaW5rIHRleHQ9XCJORVdTXCIgdXJsPVwiP3BhZ2U9bmV3c1wiLz5cbiAgICAgICAgICAgIDxOYXZMaW5rIHRleHQ9XCJDT05UQUNUXCIgdXJsPVwiP3BhZ2U9aG9tZSNjb250YWN0XCIvPlxuICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJ1dHRvblwiPjwvZGl2PlxuICAgICAgICA8L0hlYWRlcj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZ2dsZS1tZW51LWJ1dHRvblwiPjwvZGl2PlxuXG5cbiAgICAgICAgPFN3aXRjaGVyIHJlZj17dGhpcy5zd2l0Y2hlcn0gY2xhc3NOYW1lPVwic3dpdGNoZXJcIiBpdGVtcz17aXRlbXN9PjwvU3dpdGNoZXI+XG5cbiAgICAgICAgPEhvbWUgcmVmPXt0aGlzLmhvbWV9IG9uVG9nZ2xlU2VjdGlvblZpc2liaWxpdHk9e3RoaXMudXBkYXRlU3dpdGNoZXIuYmluZCh0aGlzKX0gb25TZWN0aW9uRW50ZXJDYj17dGhpcy5zZWN0aW9uRW50ZXJDYi5iaW5kKHRoaXMpfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCB7QXBwfSAvLyBIb21lLCBIb21lV3JhcHBlclxuIiwiZnVuY3Rpb24gSW5mbyhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgPGgxPntwcm9wcy5oZWFkaW5nfTwvaDE+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gSW5mb3MocHJvcHMpIHtcbiAgY29uc3QgaXRlbXMgPSBwcm9wcy5pdGVtcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICByZXR1cm4gKDxJbmZvIGhlYWRpbmc9e2l0ZW0uaH0ga2V5PXtpLnRvU3RyaW5nKCl9PntpdGVtLnRleHR9PC9JbmZvPilcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb3NcIj5cbiAgICAgIHtpdGVtc31cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQge0luZm8sIEluZm9zfVxuIiwiZnVuY3Rpb24gTmF2TGluayhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxhIGhyZWY9e3Byb3BzLnVybH0+PHNwYW4+e3Byb3BzLnRleHR9PC9zcGFuPjwvYT5cbiAgKVxufVxuXG5leHBvcnQge05hdkxpbmt9XG4iLCJmdW5jdGlvbiBOYXYocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cImxpbmtzLWNvbnRhaW5lclwiPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvbmF2PlxuICApXG59XG5cbmV4cG9ydCB7TmF2fVxuIiwiZnVuY3Rpb24gZ2V0Vmlld3BvcnRIZWlnaHQoKSB7XG4gIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA/XG4gICAgTWF0aC5taW4od2luZG93LmlubmVySGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSA6XG4gICAgd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICAgIHx8IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xpZW50SGVpZ2h0IHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uY2xpZW50SGVpZ2h0KTtcbn1cblxuZnVuY3Rpb24gZ2V0Vmlld3BvcnRXaWR0aCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA/XG4gICAgTWF0aC5taW4od2luZG93LmlubmVyV2lkdGgsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCkgOlxuICAgIHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuICAgICAgfHwgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGllbnRXaWR0aCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLmNsaWVudFdpZHRoKTtcblxufVxuXG5jbGFzcyBTZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMudmlzaWJsZSA9IHByb3BzLnZpc2libGVcbiAgICB0aGlzLmRvbSA9IFJlYWN0LmNyZWF0ZVJlZigpXG5cbiAgICAvLyB3ZSdsbCB1c2UgdGhpcyB0byBkZXRlcm1pbmUgaWYgc2VjdGlvbiBpcyBpbiB0aGUgdmlld3BvcnRcbiAgICB0aGlzLnZIID0gZ2V0Vmlld3BvcnRIZWlnaHQoKVxuICAgIHRoaXMuaW5WaWV3UHJldiA9IGZhbHNlXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgdGhpcy52SCA9IGdldFZpZXdwb3J0SGVpZ2h0KClcbiAgICB9KVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgIGlmICghdGhpcy52aXNpYmxlKVxuICAgICAgICByZXR1cm5cblxuICAgICAgY29uc3QgaW5WaWV3ID0gdGhpcy5pc0luVmlldygpXG4gICAgICBpZiAodGhpcy5pblZpZXdQcmV2ICE9IGluVmlldykge1xuICAgICAgICBpZiAoaW5WaWV3KVxuICAgICAgICAgIHRoaXMucHJvcHMuaW5WaWV3Q2IodGhpcy5wcm9wcy5pZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyB0aGlzLnN0YXRlID0ge31cbiAgICAvLyB0aGlzLnN0YXRlLnZpc2libGUgPSBwcm9wcy52aXNpYmxlXG5cbiAgfVxuXG4gIHNob3coKSB7XG4gICAgdGhpcy5kb20uY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKFwibm9uZWRcIilcbiAgICB0aGlzLnZpc2libGUgPSB0cnVlXG4gICAgdGhpcy5wcm9wcy5vblRvZ2dsZVZpc2liKHRoaXMucHJvcHMuaWRlbnRpZmllcilcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5kb20uY3VycmVudC5jbGFzc0xpc3QuYWRkKFwibm9uZWRcIilcbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZVxuICAgIHRoaXMucHJvcHMub25Ub2dnbGVWaXNpYih0aGlzLnByb3BzLmlkZW50aWZpZXIpXG4gIH1cblxuICBpc0luVmlldygpIHtcbiAgICBjb25zdCByZWN0ID0gdGhpcy5kb20uY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIHJlY3QudG9wID49IE1hdGgucm91bmQoKHRoaXMudkgvMykqLTEpICYmXG4gICAgICByZWN0LnRvcCA8PSBNYXRoLnJvdW5kKHRoaXMudkgvMylcbiAgICAgIC8vIHJlY3QubGVmdCA+PSAwICYmXG4gICAgICAvLyByZWN0LmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmIC8qb3IgJCh3aW5kb3cpLmhlaWdodCgpICovXG4gICAgICAvLyByZWN0LnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpIC8qb3IgJCh3aW5kb3cpLndpZHRoKCkgKi9cbiAgICApXG4gIH1cblxuICBpc1Zpc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmlzaWJsZVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSAodGhpcy52aXNpYmxlKSA/ICdjb250ZW50LXNlY3Rpb24nIDogJ2NvbnRlbnQtc2VjdGlvbiBub25lZCdcblxuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiByZWY9e3RoaXMuZG9tfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaWQ9e3RoaXMucHJvcHMuaWRlbnRpZmllcn0+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9zZWN0aW9uPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQge1NlY3Rpb259XG4iLCIvKipcbiAgQHBhcmFtIHthcnJheX0gcHJvcHMuaXRlbXMgYXJyYXkgb2YgaXRlbXMsIGVhY2ggb2YgdGhlIGZvcm1hdDpcbiAgICBAcGFyYW0ge3N0cmluZ30gcHJvcHMuaXRlbXNbbl0uaW5uZXJUZXh0XG4gICAgQHBhcmFtIHtvYmplY3R9IHByb3BzLml0ZW1zW25dLiAuLi5cbiovXG5cblxuZnVuY3Rpb24gU3dpdGNoZXJJdGVtKHByb3BzKSB7XG4gIGNvbnN0IGlkID0gXCJpdGVtX1wiKyBwcm9wcy5pZGVudGlmaWVyXG4gIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hlci1pdGVtXCIgaWQ9e2lkfSBkYXRhLWlkZW50aWZpZXI9e3Byb3BzLmlkZW50aWZpZXJ9PlxuICAgIHtwcm9wcy52YWx9XG4gIDwvZGl2Pilcbn1cblxuZnVuY3Rpb24gU3dpdGNoZXJJdGVtRHVtbXkocHJvcHMpIHtcbiAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaGVyLWl0ZW1cIiBkYXRhLWlkZW50aWZpZXI9e3Byb3BzLmlkZW50aWZpZXJ9PlxuICAgIHtwcm9wcy52YWx9XG4gIDwvZGl2Pilcbn1cblxuY2xhc3MgU3dpdGNoZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgLy8gdGhpcy5yZWZSb290ID0gUmVhY3QuY3JlYXRlUmVmKClcbiAgICB0aGlzLml0ZW1zID0gUmVhY3QuY3JlYXRlUmVmKClcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpdGVtczogdGhpcy5mb3JtSXRlbUVscyhwcm9wcy5pdGVtcylcbiAgICB9XG4gIH1cblxuICBzZXRJdGVtcyhpdGVtcykge1xuICAgIGNvbnN0IGl0ZW1FbHMgPSB0aGlzLmZvcm1JdGVtRWxzKGl0ZW1zKVxuICAgIHRoaXMuc2V0U3RhdGUoe2l0ZW1zOiBpdGVtRWxzfSlcbiAgfVxuXG4gIHN3aXRjaFRvKGlkZW50aWZpZXIpIHtcbiAgICAvLyBjb25zdCBvZmZzZXQgPSB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbUlkKVxuICAgIC8vIHRoaXMuZG9tUmVmLnN0eWxlLnRvcCA9XG4gICAgLy8gY29uc29sZS5sb2coXCJzd2l0Y2hlciBpdGVtcyByZWZcIiwgdGhpcy5pdGVtcylcbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLml0ZW1zLmN1cnJlbnQucXVlcnlTZWxlY3RvcignI2l0ZW1fJytpZGVudGlmaWVyKS5vZmZzZXRUb3BcbiAgICB0aGlzLml0ZW1zLmN1cnJlbnQuc3R5bGUudG9wID0gb2Zmc2V0ICogLTEgKyBcInB4XCJcbiAgfVxuXG4gIGZvcm1JdGVtRWxzKGl0ZW1zKSB7XG4gICAgY29uc3QgaXRlbXNEdW1teVByZSA9IGl0ZW1zLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gXCJkdW1teS1wcmVfXCIrIGl0ZW0uaWRlbnRpZmllclxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN3aXRjaGVySXRlbUR1bW15IHZhbD17aXRlbS52YWx9IGlkZW50aWZpZXI9e2l0ZW0uaWRlbnRpZmllcn0ga2V5PXtrZXl9Lz5cbiAgICAgIClcbiAgICB9KVxuXG4gICAgY29uc3QgaXRlbXNEdW1teVBvc3QgPSBpdGVtcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IFwiZHVtbXktcG9zdF9cIisgaXRlbS5pZGVudGlmaWVyXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3dpdGNoZXJJdGVtRHVtbXkgdmFsPXtpdGVtLnZhbH0gaWRlbnRpZmllcj17aXRlbS5pZGVudGlmaWVyfSBrZXk9e2tleX0vPlxuICAgICAgKVxuICAgIH0pXG5cbiAgICBjb25zdCBpdGVtc1JlYWwgPSBpdGVtcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTd2l0Y2hlckl0ZW0gdmFsPXtpdGVtLnZhbH0gaWRlbnRpZmllcj17aXRlbS5pZGVudGlmaWVyfSBrZXk9e2l0ZW0uaWRlbnRpZmllci50b1N0cmluZygpfSAvPlxuICAgICAgKVxuICAgIH0pXG5cbiAgICByZXR1cm4gaXRlbXNEdW1teVByZVxuICAgICAgLmNvbmNhdChpdGVtc1JlYWwpXG4gICAgICAuY29uY2F0KGl0ZW1zRHVtbXlQb3N0KVxuXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZygnc3dpdGNoZXIsIHJlbmRlcicpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hlci1oaWdobGlnaHRcIj5cbiAgICAgICAgICA8ZGl2IHJlZj17dGhpcy5pdGVtc30gY2xhc3NOYW1lPVwic3dpdGNoZXItaXRlbXNcIj57dGhpcy5zdGF0ZS5pdGVtc308L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IHtTd2l0Y2hlcn1cbiIsImltcG9ydCB7bWFpbn0gZnJvbSAnLi9zY3JpcHRzL3NjcmlwdC5qcydcbm1haW4oKVxuIiwiLy8gaW1wb3J0IHtTd2l0Y2hlcn0gZnJvbSAnLi4vY29tcG9uZW50cy9zd2l0Y2hlci5qcydcbmltcG9ydCB7QXBwfSBmcm9tICcuLi9jb21wb25lbnRzL2hvbWUuanMnXG5cbmZ1bmN0aW9uIG1haW4oKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICBSZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgY29udGFpbmVyKSAvLyA8U3dpdGNoZXIgY2xhc3NOYW1lPVwic2xpZGVyXCIgdmlzaWJsZUl0ZW1zPXszfSBpdGVtcz17ZGF0YS5pdGVtc30gLz5cbn1cblxuZXhwb3J0IHttYWlufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==