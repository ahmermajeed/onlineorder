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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\papag-live\\node_modules\\@babel\\runtime\\regenerator\\index.js'");

/***/ }),

/***/ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@stripe/stripe-js/dist/stripe.esm.js ***!
  \***********************************************************/
/*! exports provided: loadStripe */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\papag-live\\node_modules\\@stripe\\stripe-js\\dist\\stripe.esm.js'");

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\papag-live\\node_modules\\axios\\index.js'");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Aboutus.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Aboutus.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    this.getAboutUs();
  },
  methods: {
    getAboutUs: function getAboutUs() {
      var _this = this;

      _this.loading = true;
      axios.get('api/cms/about-us').then(function (response) {
        console.log(response);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Checkout.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Checkout.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");
/* harmony import */ var vue2_selectize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-selectize */ "./node_modules/vue2-selectize/dist/vue2-selectize.js");
/* harmony import */ var vue2_selectize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_selectize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_credit_card_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-credit-card-validation */ "./node_modules/vue-credit-card-validation/dist/vue-credit-card-validation.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Selectize: vue2_selectize__WEBPACK_IMPORTED_MODULE_2___default.a,
    VueCardFormat: vue_credit_card_validation__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      settings: {},
      selected: 1,
      stripe: {},
      cardElement: {},
      loading: false,
      cat_count: false,
      coupon_code: "",
      coupon_error: "",
      card: false,
      order_card: false,
      interval: 45,
      iframe: null,
      iform: null,
      form: {
        address: '',
        street: '',
        town: null,
        postal_code: '',
        land_mark: '',
        email: '',
        number: '',
        name: '',
        payment_type: '',
        order_type: this.$store.getters.getOrderType,
        deliveryTime: '',
        asap: ''
      },
      foods: [{
        text: 'Select One',
        value: null
      }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true,
      errorMessage: [],
      validForm: true,
      sendRequest: false,
      offers: [],
      generatedToken: '',
      discountedAmount: 0,
      discountedPercentAge: 10,
      slots: [],
      delivery_fees: this.$store.getters.getDeliveryCharges == 'undefined' ? 0 : this.$store.getters.getDeliveryCharges,
      coupon_applied: false,
      hostedFieldInstance: false,
      threeDSecure: false,
      nonce: "",
      error: "",
      amount: 10
    };
  },
  mounted: function mounted() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var elements;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__["loadStripe"])("pk_test_S7WpzetVyucJWjY37ogd9Cmj");

            case 2:
              _this2.stripe = _context.sent;
              elements = _this2.stripe.elements();
              _this2.cardElement = elements.create('card', {
                classes: {
                  base: 'form-control'
                }
              });

              _this2.cardElement.mount('#card-element');

              _this2.form.order_type = _this2.$store.getters.getOrderType;
              if (_this2.form.order_type == "Pickup") _this2.interval = 20;else _this2.interval = 45;

              _this2.getTimeSlots();

              if (_this2.delivery_fees == null || _this2.delivery_fees == "null") {
                _this2.delivery_fees = 0;
              }

              _this2.scrollToMain();

              _this2.getOffers();

              document.documentElement.classList.remove("remove-overflow"); // this.generateToken();

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    getOffers: function getOffers() {
      var _this = this;

      _this.loading = true;
      axios.get('/api/offer').then(function (response) {
        _this.offers = response.data.data;
        _this.loading = false;
      });
    },
    generateToken: function generateToken() {
      var _this = this;

      _this.loading = true;
      axios.get('/api/generate-braintree-token').then(function (response) {
        _this.generatedToken = response.data.data;
        _this.loading = false;
      });
    },
    getTimeSlots: function getTimeSlots() {
      var _this = this;

      _this.loading = true;
      axios.get('/api/get-time-slots/' + _this.interval).then(function (response) {
        _this.slots = response.data;
        _this.loading = false;
      });
    },
    applyCoupon: function applyCoupon() {
      var _this = this;

      var data = {
        'coupon_code': _this.coupon_code,
        'total_amount': _this.finalAmount
      };
      _this.loading = true;

      if (this.coupon_code === "") {
        _this.coupon_error = 'please enter a valid coupon code';
        _this.loading = false;
        setTimeout(function () {
          _this.coupon_error = "";
        }, 2000);
        return;
      }

      axios({
        method: 'post',
        url: '/api/apply-coupon',
        data: data
      }).then(function (response) {
        _this.loading = false; //handle success

        _this.discountedAmount = response.data.data;
        _this.coupon_applied = true;
      })["catch"](function (response) {
        //handle error
        _this.loading = false;
        _this.coupon_error = response.response.data.error.message;
        setTimeout(function () {
          _this.coupon_error = "";
        }, 2000);
      });
    },
    removeCoupon: function removeCoupon() {
      var _this = this;

      _this.coupon_applied = false;
      _this.discountedAmount = 0;
      _this.coupon_code = "";
    },
    priceFormat: function priceFormat(num) {
      return parseFloat(num).toFixed(2);
    },
    showCard: function showCard(val) {
      this.card = val;
    },
    showOrderType: function showOrderType(val) {
      this.order_card = val;
    },
    scrollToMain: function scrollToMain() {
      var element = document.getElementById("mainSection");
      element.scrollIntoView({
        behavior: "instant",
        block: "start"
      });
    },
    scrollToTop: function scrollToTop() {
      var element = document.getElementById("mainSection");
      console.log(element);
      element.scrollIntoView({
        behavior: "instant",
        block: "start"
      });
    },
    placeOrder: function placeOrder() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var error, _this, vm, data, _yield$_this3$stripe$, paymentMethod, _error;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                error = [];
                _this = _this3; //  if (this.form.order_type != '') {

                if (_this3.form.email === "") {
                  error.push('Please Enter Your Email');
                  $("#email").addClass('input-valid');
                }

                if (_this3.form.deliveryTime === "") {
                  error.push('Please select delivery/pickup time');
                  $("#delivery_time").addClass('input-valid');
                }

                if (_this3.form.name === "") {
                  error.push('Please Enter Your Name');
                  $("#name").addClass('input-valid');
                }

                if (_this3.form.number === "") {
                  error.push('Please Enter Your Number');
                  $("#phone").addClass('input-valid');
                }

                if (_this3.form.order_type === 'Delivery') {
                  if (_this3.form.address === "") {
                    error.push('Please Enter Your Address');
                    $("#address").addClass('input-valid');
                  }

                  if (_this3.form.street === "") {
                    error.push('Please Enter Your Street');
                    $("#street").addClass('input-valid');
                  }

                  if (_this3.form.town === "" || _this3.form.town === null) {
                    error.push('Please Enter Your Town');
                    $("#town").addClass('input-valid');
                  }

                  if (_this3.form.postal_code === "") {
                    error.push('Please Enter Your Postal Code');
                    $("#postalcode").addClass('input-valid');
                  }
                }

                if (_this3.form.payment_type === "") {
                  error.push('Please Enter Your Payment Type');
                  $("#payment_type").addClass('input-valid');
                }
                /*} else {
                    error.push('Please Choose Your Order Type');
                }*/


                _this3.errorMessage = error;

                if (!(_this3.errorMessage.length > 0)) {
                  _context2.next = 13;
                  break;
                }

                _this.scrollToTop();

                _context2.next = 34;
                break;

              case 13:
                vm = _this3;

                if (_this3.form.order_type == 'Pickup') {
                  vm.form.address = '---';
                  vm.form.street = '---';
                  vm.form.postal_code = '---';
                }

                data = {
                  'user_id': 11,
                  'total_amount_with_fee': _this3.finalAmount,
                  'delivery_fees': _this3.delivery_fees,
                  'discounted_amount': _this3.discountedAmount,
                  'payment': vm.form.payment_type,
                  'delivery_address': vm.form.address + " " + vm.form.street + " " + vm.form.postal_code,
                  // 'delivery_address': "===",
                  'order_details': vm.cartItems,
                  'user_data': _this3.form,
                  'order_type': _this3.form.order_type,
                  'payment_method_id': ''
                };

                if (!_this3.validForm) {
                  _context2.next = 34;
                  break;
                }

                vm.loading = true;

                if (!(_this3.form.payment_type === "credit_card")) {
                  _context2.next = 27;
                  break;
                }

                _context2.next = 21;
                return _this3.stripe.createPaymentMethod('card', _this3.cardElement, {
                  billing_details: {
                    name: _this3.form.name,
                    email: _this3.form.email,
                    address: {
                      line1: _this3.form.address,
                      city: _this3.form.street,
                      state: _this3.form.town,
                      postal_code: _this3.form.postal_code
                    }
                  }
                });

              case 21:
                _yield$_this3$stripe$ = _context2.sent;
                paymentMethod = _yield$_this3$stripe$.paymentMethod;
                _error = _yield$_this3$stripe$.error;

                if (_error) {
                  vm.loading = false; //  alert(error.message)

                  console.log(_error);
                } else {
                  data.payment_method_id = paymentMethod.id;
                  axios({
                    method: 'post',
                    url: '/api/stripe-order',
                    data: data
                  }).then(function (response) {
                    vm.loading = false; //handle success

                    console.log(response);
                    vm.$router.push({
                      name: 'thankyou'
                    });
                    vm.$store.state.cartItems = [];
                    vm.$store.state.cartItemsCount = 0;
                  })["catch"](function (response) {
                    //handle error
                    vm.loading = false;
                    vm.stripe.confirmCardPayment(response.response.data.error.payment_data.client_secret, {
                      payment_method: response.response.data.error.payment_data.payment_method
                    }).then(function (result) {
                      vm.sendPlaceOrder(data);
                    });
                  });
                }

                _context2.next = 34;
                break;

              case 27:
                if (!(_this3.form.payment_type === "card_stream")) {
                  _context2.next = 33;
                  break;
                }

                console.log(_this3.cardElement);
                return _context2.abrupt("return");

              case 33:
                vm.sendPlaceOrder(data);

              case 34:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    sendPlaceOrder: function sendPlaceOrder(data) {
      var self = this;
      console.log(data);
      axios({
        method: 'post',
        url: '/api/placeOrder',
        data: data
      }).then(function (response) {
        self.loading = false;
        self.$store.state.cartItems = [];
        self.$store.state.cartItemsCount = 0;
        self.$router.push({
          path: '/order-confirmed/' + response.data.data.order_id
        });
      })["catch"](function (response) {
        //handle error
        self.loading = false;
        alert(response.response.data.error.message);
        console.log(response.response.data.error.message);
      });
    },
    payWithCreditCard: function payWithCreditCard() {}
  },
  computed: {
    cartItems: function cartItems() {
      return this.$store.state.cartItems;
    },
    totalPrice: function totalPrice() {
      var price = 0;
      this.$store.state.cartItems.map(function (el) {
        price += el['quantity'] * el['price'];
      });
      return price;
    },
    finalAmount: function finalAmount() {
      var final_amount = 0;

      if (localStorage.getItem('order_type') === "Pickup") {
        final_amount = this.totalPrice - this.discountedAmount;
      } else {
        if (this.delivery_fees == null || this.delivery_fees == "null") {
          final_amount = this.totalPrice - this.discountedAmount;
        } else {
          final_amount = this.totalPrice + this.delivery_fees - this.discountedAmount;
        }
      }

      return final_amount;
    }
    /*getAllCartArray() {
      if (this.$store.getters.getAllCartArray.length > 1) {
          let sum = 0;
        let count = 0;
        this.$store.getters.getAllCartArray.forEach(function (item) {
          count++;
          if (count > 1) {
            sum += item.single_product_total_amount;
          }
        });
        this.total_amount = sum;
        if (sum >= 1500000000) {
          this.discountedAmount = (sum / 100 * this.discountedPercentAge).toFixed(2)
        }
          if (localStorage.getItem('order_type') === "Pickup") {
          this.finalAmount = this.total_amount - this.discountedAmount;
        } else {
          this.finalAmount = this.total_amount + this.delivery_fees - this.discountedAmount;
        }
        }
      return this.$store.getters.getAllCartArray;
    },*/

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Contactus.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Contactus.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  methods: {
    randomNumber: function randomNumber() {
      return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Feedback.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Feedback.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuejs_countdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuejs-countdown */ "./node_modules/vuejs-countdown/dist/vuejs-countdown.js");
/* harmony import */ var vuejs_countdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuejs_countdown__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_1__["default"],
    Countdown: vuejs_countdown__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      formData: {
        name: '',
        email: '',
        rating: '',
        experience: ''
      },
      successMessage: null,
      errorMessage: null
    };
  },
  mounted: function mounted() {
    $('div#page_content').stop().animate({
      scrollTop: 0
    }, 'fast', 'swing');
  },
  created: function created() {
    $('div#page_content').stop().animate({
      scrollTop: 0
    }, 'fast', 'swing');
  },
  methods: {
    CreateFeedback: function CreateFeedback() {
      var self = this;
      axios.post('api/feedback', self.formData).then(function (response) {
        console.log('response');
        console.log(response);
        self.loading = false;
        self.errorMessage = '';
        response = response.data;
        setTimeout(function () {
          self.successMessage = '';
          self.formData = {
            name: '',
            email: '',
            rating: '',
            experience: ''
          };
          self.successMessage = response.message;
          self.scrollToTop();
        }, 3000);
      })["catch"](function (error) {
        if (Object.keys(error.response.data).length > 0) {
          self.errorMessage = error.response.data.error.message;
          self.scrollToTop();
          setTimeout(function () {
            self.errorMessage = '';
          }, 5000);
          return;
        }
      });
    },
    validateBeforeSubmit: function validateBeforeSubmit() {
      var self = this;
      var error = false;

      if (self.formData.name == null || self.formData.name == '') {
        self.errorMessage = 'Name is required';
        error = true;
        self.scrollToTop();
        return;
      }

      if (self.formData.email == null || self.formData.email == '') {
        self.errorMessage = 'Email is required';
        error = true;
        self.scrollToTop();
        return;
      }

      if (!this.validateEmail(self.formData.email)) {
        self.errorMessage = 'Email is must be a valid email';
        error = true;
        self.scrollToTop();
        return;
      }

      if (self.formData.rating == null || self.formData.rating == '') {
        self.errorMessage = 'Rating is required';
        error = true;
        self.scrollToTop();
        return;
      }

      if (error == false) {
        self.CreateFeedback();
      }
    },
    validateEmail: function validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
    scrollToTop: function scrollToTop() {
      $('html, body').animate({
        scrollTop: $("div#messages").offset().top
      }, 1000);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Gallery.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Gallery.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_easy_lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-easy-lightbox */ "./node_modules/vue-easy-lightbox/dist/vue-easy-lightbox.es5.esm.min.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueEasyLightbox: vue_easy_lightbox__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      visible: false,
      index: 0,
      // default: 0
      imgs: ['/images/gallery/1.jpeg', '/images/gallery/2.jpg', '/images/gallery/3.jpg', '/images/gallery/4.jpg', '/images/gallery/5.jpg', '/images/gallery/6.jpg']
    };
  },
  methods: {
    showImg: function showImg(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide: function handleHide() {
      this.visible = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-gallery */ "./node_modules/vue-gallery/dist/js/vue-gallery.js");
/* harmony import */ var vue_gallery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_gallery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hooper */ "./node_modules/hooper/dist/hooper.esm.js");
/* harmony import */ var hooper_dist_hooper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hooper/dist/hooper.css */ "./node_modules/hooper/dist/hooper.css");
/* harmony import */ var hooper_dist_hooper_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hooper_dist_hooper_css__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Hooper: hooper__WEBPACK_IMPORTED_MODULE_1__["Hooper"],
    Slide: hooper__WEBPACK_IMPORTED_MODULE_1__["Slide"],
    HooperNavigation: hooper__WEBPACK_IMPORTED_MODULE_1__["Navigation"],
    'gallery': vue_gallery__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      images: [],
      stories: [],
      index: null,
      showPopup: false,
      menu: false,
      showPostalCode: false,
      allergy: false,
      categories: []
    };
  },
  mounted: function mounted() {
    this.getStory();
    this.getCategories();
    document.documentElement.classList.remove("remove-overflow");
  },
  methods: {
    getStory: function getStory() {
      var _this = this;

      _this.loading = true;
      axios.get('/api/our-story').then(function (response) {
        _this.stories = response.data.data;
        _this.loading = false;
      });
    },
    openPostalCode: function openPostalCode() {
      this.showPostalCode = true;
    },
    hideModal: function hideModal() {
      this.showPostalCode = false;
    },
    getCategories: function getCategories() {
      var _this = this;

      _this.loading = true;
      axios.get('/api/categories').then(function (response) {
        _this.categories = response.data.data;
      });
    }
  },
  computed: {
    info: function info() {
      return this.$store.state.general_data;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/KitchenScreen.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/KitchenScreen.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      orders: []
    };
  },
  methods: {
    getOrders: function getOrders() {
      var _this2 = this;

      var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var _this = this;

      _this.loading = true;
      var url = "https://aisha-cafe.softdemo.co.uk/api/getKitchenOrders";

      if (status) {
        url = "https://aisha-cafe.softdemo.co.uk/api/getKitchenOrders?" + status;
      }

      axios.get(url).then(function (response) {
        _this.orders = response.data.data;
        console.log(_this2.orders); // alert("test");

        _this.loading = false;
      });
    },
    getExtrasData: function getExtrasData(value) {
      var html;
      var data = JSON.parse(value);
      var arr = [];
      Object.keys(data).forEach(function (itm) {
        arr.push(data[itm].choice);
      });
      html = "<span>" + arr.join(',') + "</span>";
      return html;
    }
  },
  created: function created() {
    this.getOrders();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OrderConfirmed.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/OrderConfirmed.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      order_details: [],
      user_detail: []
    };
  },
  mounted: function mounted() {
    this.scrollToMain();
    this.getGeneralSetting();
    this.getOrderDetails();
  },
  methods: {
    getGeneralSetting: function getGeneralSetting() {
      var vm = this;
      axios.get('/api/restaurant_info').then(function (response) {
        vm.$store.commit('setGeneralData', response.data.data); //vm.info.email = response.data.data.email;
        //console.log(vm.info.email);
      });
    },
    getOrderDetails: function getOrderDetails() {
      var vm = this;
      axios.get('/api/getOrderDetails/' + this.$route.params.id).then(function (response) {
        vm.order_details = response.data.data;
        vm.user_detail = response.data.data.user_detail;
      });
    },
    returnDateFormat: function returnDateFormat(value) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(String(value)).format('D-MM- Y hh:mm');
    },
    getExtrasData: function getExtrasData(value) {
      var html;
      var data = JSON.parse(value);
      var arr = [];
      Object.keys(data).forEach(function (itm) {
        arr.push(data[itm].choice);
      });
      html = "<span>" + arr.join(',') + "</span>";
      return html;
    },
    priceFormat: function priceFormat(num) {
      return parseFloat(num).toFixed(2);
    },
    scrollToMain: function scrollToMain() {
      var element = document.getElementById("product-scroll");
      element.scrollIntoView({
        behavior: "instant",
        block: "start"
      });
    }
  },
  computed: {
    info: function info() {
      return this.$store.state.general_data;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OrderDetail.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/OrderDetail.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      images: ['../../images/mainbanner1.jpeg', '../../images/image00003.jpg'],
      stories: [],
      index: null,
      showPopup: false,
      menu: false,
      allergy: false,
      categories: [],
      postal_code: '',
      error_message: '',
      showPostalCode: false,
      listingHeads: [{
        title: 'ID'
      }, {
        title: 'Menu',
        width: 300
      }, {
        title: 'Description',
        width: 150
      }, {
        title: 'Quantity',
        width: 150
      }, {
        title: 'Status',
        width: 150
      }, {
        title: 'Price',
        width: 600
      }],
      records: [{
        id: '1',
        item_name: 'Margherita Pizza',
        item_descp: 'Pepperoni.',
        quantity: '1',
        price: '£7.50'
      }, {
        id: '2',
        item_name: 'Hawaiian Pizza',
        item_descp: 'ham & pineapple..',
        quantity: '2',
        price: '£8.00'
      }, {
        id: '3',
        item_name: 'Vegetarian',
        item_descp: 'mushrooms, onions, pepper & sweetcorn.',
        quantity: '3',
        price: '£9.00'
      }]
    };
  },
  created: function created() {
    this.getStory();
    this.getCategories();
    var scripts = ["https://apps.elfsight.com/p/platform.js"];
    scripts.forEach(function (script) {
      var tag = document.createElement("script");
      tag.setAttribute("src", script);
      document.head.appendChild(tag);
    });
  },
  methods: {
    getStory: function getStory() {
      var _this = this;

      _this.loading = true;
      axios.get('/api/our-story').then(function (response) {
        _this.stories = response.data.data;
        _this.loading = false;
      });
    },
    openPostalCode: function openPostalCode() {
      this.showPopup = false;
      this.allergy = false;
      this.menu = false;
      this.showPostalCode = true;
    },
    getCategories: function getCategories() {
      var _this2 = this;

      var _this = this;

      _this.loading = true;
      axios.get('/api/categories').then(function (response) {
        _this.categories = response.data.data;
        console.log(_this2.categories);
        _this.loading = false;
      });
    },
    returnPriceValue: function returnPriceValue(product) {
      var price_string = '';

      if (product.sizes.length) {
        for (var price in product.sizes) {
          price_string = product.sizes[0].price;
        }
      } else {
        price_string = product.price;
      }

      return '£' + price_string;
    },
    hideModal: function hideModal() {
      this.showPopup = false;
      this.showPostalCode = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reservation.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Reservation.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lingallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lingallery */ "./node_modules/lingallery/dist/lingallery.umd.js");
/* harmony import */ var lingallery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lingallery__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Lingallery: lingallery__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      gallery: [],
      width: 400,
      height: 400,
      items: [{
        src: 'images/tasty-land/gallery/1.jpg',
        thumbnail: 'images/tasty-land/gallery/1.jpg'
      }, {
        src: 'images/tasty-land/gallery/2.jpg',
        thumbnail: 'images/tasty-land/gallery/2.jpg'
      }, {
        src: 'images/tasty-land/gallery/3.jpg',
        thumbnail: 'images/tasty-land/gallery/3.jpg'
      }],
      currentId: null
    };
  },
  mounted: function mounted() {
    console.log('Component mounted.');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Thankyou.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Thankyou.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  methods: {
    randomNumber: function randomNumber() {
      return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    }
  },
  created: function created() {
    $('div#page_content').stop().animate({
      scrollTop: 0
    }, 'slow', 'swing');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common-components/Alert.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common-components/Alert.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['errorMessage', 'successMessage']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common-components/download-menu.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common-components/download-menu.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['showModalProp', 'isMenu', 'isAllergy'],
  data: function data() {
    return {};
  },
  methods: {
    openMenu: function openMenu() {
      this.$emit('HideModalValue');

      javascript: window.open('./../files/our_menu.pdf');
    },
    downloadMenu: function downloadMenu() {
      this.$emit('HideModalValue');
      var self = this;
      var url = 'api/downloadMenu';
      var request;
      var headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
      };
      request = $.ajax({
        url: url,
        method: "GET",
        responseType: 'blob',
        headers: headers
      });
      request.done(function (response, textStatus, jqXHR) {
        var fileURL = response.data;
        var fileLink = document.createElement('a');
        fileLink.href = fileURL;
        fileLink.setAttribute('download', 'Menu.pdf');
        document.body.appendChild(fileLink);
        fileLink.click();
      });
      request.fail(function (jqXHR, textStatus, errorThrown) {});
    },
    openAllergy: function openAllergy() {
      this.$emit('HideModalValue');

      javascript: window.open('./../files/allergy_info.pdf');
    },
    downloadAllery: function downloadAllery() {
      this.$emit('HideModalValue');
      var self = this;
      var url = 'api/downloadAllergy';
      var request;
      var headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
      };
      request = $.ajax({
        url: url,
        method: "GET",
        responseType: 'blob',
        headers: headers
      });
      request.done(function (response, textStatus, jqXHR) {
        var fileURL = response.data;
        var fileLink = document.createElement('a');
        fileLink.href = fileURL;
        fileLink.setAttribute('download', 'Allergy.pdf');
        document.body.appendChild(fileLink);
        fileLink.click();
      });
      request.fail(function (jqXHR, textStatus, errorThrown) {});
    },
    showModal: function showModal() {
      this.$refs.myModalRef.show();
    },
    onHidden: function onHidden() {
      this.$emit('HideModalValue');
    },
    hideModal: function hideModal() {
      var self = this;
      this.$refs.myModalRef.hide();
    }
  },
  watch: {
    showModalProp: function showModalProp(value) {
      if (value) {
        this.showModal();
      }

      if (!value) {
        this.hideModal();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common-components/footer.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common-components/footer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      showPostalCode: false
    };
  },
  mounted: function mounted() {},
  methods: {
    openPostalCode: function openPostalCode() {
      this.showPostalCode = true;
    },
    hideModal: function hideModal() {
      this.showPostalCode = false;
    },
    scrollToTop: function scrollToTop() {
      window.scrollTo(0, 0);

      behavior: 'smooth';
    }
  },
  computed: {
    info: function info() {
      return this.$store.state.general_data;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common-components/nav-menu.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common-components/nav-menu.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var v_click_outside__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! v-click-outside */ "./node_modules/v-click-outside/dist/v-click-outside.umd.js");
/* harmony import */ var v_click_outside__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(v_click_outside__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  directives: {
    clickOutside: v_click_outside__WEBPACK_IMPORTED_MODULE_0___default.a.directive
  },
  data: function data() {
    return {
      loading: false,
      postal_code: '',
      error_message: '',
      showPopup: false,
      showPostalCode: false,
      menu: false,
      allergy: false,
      loginModal: false,
      registerModal: false,
      openCart: false,
      editProduct: false,
      list: {},
      editList: {},
      has_sizes: false,
      editIndex: '',
      editDeal: false,
      deals_data: {},
      editDealsData: {},
      cart_height: false //info:{},

    };
  },
  methods: {
    getGeneralSetting: function getGeneralSetting() {
      var vm = this;
      axios.get('api/restaurant_info').then(function (response) {
        vm.$store.commit('setGeneralData', response.data.data);
      });
    },
    onClickOutside: function onClickOutside(event) {
      this.openCart = false;
    },
    opencartlist: function opencartlist() {
      this.cart_height = !this.cart_height;

      if (this.cart_height == true) {
        document.querySelector("body").style.overflow = 'hidden';
      } else {
        document.querySelector("body").style.overflow = 'auto';
      }
    },
    hideModal: function hideModal() {
      this.showPopup = false;
      this.showPostalCode = false;
      this.loginModal = false;
      this.registerModal = false;
      this.editProduct = false;
      this.list = {};
      this.deals_data = {};
      this.editDeal = false;
      this.editDealsData = {};
    },
    openMenu: function openMenu() {
      this.showPopup = true;
      this.menu = true;
      this.allergy = false;
    },
    openAllergy: function openAllergy() {
      this.showPopup = true;
      this.allergy = true;
      this.menu = false;
    },
    openPostalCode: function openPostalCode() {
      this.showPopup = false;
      this.allergy = false;
      this.menu = false;
      this.showPostalCode = true;
    },
    loginPopup: function loginPopup() {
      this.loginModal = true;
    },
    registerPopup: function registerPopup() {
      this.registerModal = true;
    },
    logout: function logout() {
      this.$store.commit('setUserData', '');
      location.reload();
    },
    gotoMenu: function gotoMenu() {
      this.$router.push({
        path: 'online-order' + this.postal_code
      });
    },
    checkPostCode: function checkPostCode() {
      var vm = this;

      if (this.postal_code == '') {
        vm.error_message = 'Please Enter Your Postcode';
      } else {
        axios({
          method: 'post',
          url: '/api/check-postal',
          data: {
            postal_code: this.postal_code
          }
        }).then(function (response) {
          if (response.data.error === undefined) {
            vm.error_message = response.data.data.amount;
            vm.$router.push({
              path: 'online-order/' + vm.postal_code
            });
            vm.$store.commit('setDeliveryCharges', response.data.data.amount);
          } else {
            vm.error_message = 'We are not providing food in your Area';
          }
        })["catch"](function (response) {
          //handle error
          console.log(response);
        });
      }
    },
    quantityAddInCart: function quantityAddInCart(index, cart) {
      this.$store.state.cartItems[index]['quantity'] += 1;
      this.$store.state.cartItemsCount += 1;
    },
    quantityMinusInCart: function quantityMinusInCart(index) {
      index.removalQuantity = 1;
      this.$store.commit('removeFromCart', index);
    },
    priceFormat: function priceFormat(num) {
      return parseFloat(num).toFixed(2);
    },
    removeFromCart: function removeFromCart(index) {
      var product = index;
      product.removalQuantity = index.quantity;
      this.$store.commit('removeFromCart', product);
    },
    updateProduct: function updateProduct(id, cart, index) {
      var _this = this;

      var url = '';

      if (cart.product_type === "deal") {
        this.editDealsData = cart;
        _this.loading = true;
        url = '/api/deals/' + id;
      } else {
        this.editList = cart;
        _this.loading = true;
        url = '/api/products/' + id;
      }

      axios.get(url).then(function (response) {
        if (cart.product_type === 'deal') {
          _this.deals_data = response.data.data;
          _this.loading = false;
          _this.editIndex = index;
          _this.editDeal = true;
        } else {
          console.log(response.data.data);
          _this.list = response.data.data;
          _this.has_sizes = _this.list.sizes.length > 0;
          _this.loading = false;
          _this.editIndex = index;
          _this.editProduct = true;
        }
      });
    },
    moveToCheckOutMobile: function moveToCheckOutMobile() {
      this.$router.push({
        name: 'check-out'
      });
    }
  },
  created: function created() {
    console.log("here");
    this.getGeneralSetting(); // if (this.$route.name === 'online-order') {
    //     $(document).scroll(function () {
    //         var scroll = $(document).scrollTop();
    //         if (scroll >= 200) {
    //             $(".masthead").addClass("smooth-scroll");
    //             $(".filter-page-style2").addClass("fixed-scroll");
    //             $("html").addClass("remove-overflow");
    //         } else {
    //             $(".masthead").removeClass("smooth-scroll");
    //             $(".filter-page-style2").removeClass("fixed-scroll");
    //             $("html").removeClass("remove-overflow");
    //         }
    //     });
    // } else {
    //     $(".masthead").removeClass("smooth-scroll");
    //     $(".filter-page-style2").removeClass("fixed-scroll");
    //     $("html").removeClass("remove-overflow");
    // }
  },
  computed: {
    loggedIn: function loggedIn() {
      return this.$store.getters.getUserData;
    },
    cartItems: function cartItems() {
      return this.$store.state.cartItems;
    },
    totalPrice: function totalPrice() {
      var price = 0;
      this.$store.state.cartItems.map(function (el) {
        price += el['quantity'] * el['price'];
      });
      return price;
    },
    info: function info() {
      return this.$store.state.general_data;
    },
    count: function count() {
      return this.$store.state.cartItemsCount;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common-components/postal-code-popup.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common-components/postal-code-popup.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['showModalProp'],
  data: function data() {
    return {
      postal_code: '',
      error_message: '',
      order_type: '',
      showPostal: false
    };
  },
  methods: {
    openMenu: function openMenu() {
      this.$emit('HideModalValue');

      javascript: window.open('./../files/our_menu.pdf');
    },
    showModal: function showModal() {
      this.$refs.myModalRef.show();
    },
    onHidden: function onHidden() {
      this.$emit('HideModalValue');
    },
    hideModal: function hideModal() {
      var self = this;
      this.$refs.myModalRef.hide();
      this.$bvModal.hide('postal-code-popup');
      this.showPostal = false;
      this.order_type = '';
    },
    checkPostCode: function checkPostCode() {
      var vm = this;

      if (this.order_type == '') {
        vm.error_message = 'Please Select Order Type';
        setTimeout(function () {
          vm.errorMessage = "";
        }, 2000);
      } else if (this.order_type == 'Delivery' && this.postal_code == "") {
        vm.error_message = 'Please Enter Your Post Code';
        setTimeout(function () {
          vm.errorMessage = "";
        }, 2000);
      } else {
        if (vm.order_type == "Pickup") {
          vm.$store.commit('setOrderType', 'Pickup');
          vm.$router.push({
            path: 'online-order'
          });
        } else {
          axios({
            method: 'post',
            url: '/api/check-postal',
            data: {
              order_type: this.order_type,
              postal_code: this.postal_code
            }
          }).then(function (response) {
            if (response.data.error === undefined) {
              vm.error_message = response.data.data.amount;
              vm.$store.commit('setDeliveryCharges', response.data.data.amount);
              vm.$store.commit('setOrderType', vm.order_type);
              vm.$store.commit('setPostalCode', vm.postal_code);
              vm.$router.push({
                path: 'online-order'
              });
            } else {
              vm.error_message = 'We are not providing food in your area.';
            }
          })["catch"](function (response) {
            //handle error
            console.log(response);
          });
        }
      }
    },
    showPostalCode: function showPostalCode() {
      var self = this;
      if (self.order_type == "Delivery") self.showPostal = true;else self.showPostal = false;
    }
  },
  watch: {
    showModalProp: function showModalProp(value) {
      if (value) {
        this.showModal();
      }

      if (!value) {
        this.hideModal();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common-components/reservation.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common-components/reservation.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuejs_countdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuejs-countdown */ "./node_modules/vuejs-countdown/dist/vuejs-countdown.js");
/* harmony import */ var vuejs_countdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuejs_countdown__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_1__["default"],
    Countdown: vuejs_countdown__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      dinerDetails: false,
      dinerDetailsTime: '',
      timeSection: false,
      formData: {
        booking_date: new Date(),
        persons: null,
        booking_time: null,
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        special_occasion: '',
        special_request: '',
        restaurant_newsletter: 0,
        opentable_newsletter: 0,
        reservations_reminder: 0
      },
      timeSlot: [],
      successMessage: null,
      errorMessage: null,
      highlighted: {
        "daysOfMonth": [parseInt(moment(new Date()).format('DD'))]
      },
      disabledDates: {
        to: new Date() // Disable all dates up to specific date

      },
      restaurantTimes: [],
      selectedTime: null,
      noOfperson: []
    };
  },
  mounted: function mounted() {
    this.getRestaurantTime();
    this.getRestaurantPersons();
  },
  methods: {
    selectedToDate: function selectedToDate(date) {
      this.formData.to_date = moment(date).format('YYYY-MM-DD');
    },
    selectedFromDate: function selectedFromDate(date) {
      this.formData.from_date = moment(date).format('YYYY-MM-DD');
    },
    customFormatter: function customFormatter(date) {
      return moment(date).format('DD, MMM YYYY');
    },
    showDinerDetail: function showDinerDetail() {
      var self = this;

      if (self.formData.booking_time != null) {
        self.dinerDetails = true;
      } else {
        self.dinerDetails = false;
      }
    },
    onCustomerReservation: function onCustomerReservation() {
      var self = this;
      axios.post('api/reservation', self.formData).then(function (response) {
        console.log('response');
        console.log(response);
        self.loading = false;
        response = response.data;
        self.successMessage = response.message;
        self.scrollToTop();
        setTimeout(function () {
          self.successMessage = '';
          self.resetForm;
        }, 3000);
      })["catch"](function (error) {
        if (Object.keys(error.response.data).length > 0) {
          self.errorMessage = error.response.data.error.message;
          self.scrollToTop();
          setTimeout(function () {
            self.errorMessage = '';
          }, 5000);
          return;
        }
      });
    },
    checkDate: function checkDate() {
      var self = this;
      var day = moment(this.formData.booking_date).format('dddd');
      this.restaurantTimes.forEach(function (item, index) {
        if (day == item.day) {
          self.selectedTime = item;
        }
      });

      if (Object.keys(self.selectedTime).length > 0) {
        if (self.selectedTime.shop_close == 1) {
          this.calcTime(self.selectedTime.start_time, self.selectedTime.end_time);
        } else {
          self.errorMessage = 'Sorry!!! Restaurant Is Close.';
          self.scrollToTop();
        }
      } else {
        self.errorMessage = 'Please Select Proper Booking Date.';
        self.scrollToTop();
      }

      setTimeout(function () {
        self.errorMessage = '';
      }, 3000);
    },
    calcTime: function calcTime() {
      var startTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var endTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      this.timeSection = true;

      if (startTime == 0 || endTime == 0) {
        return false;
      }

      this.timeSlot = this.returnTimesInBetween(startTime, endTime);
    },
    returnTimesInBetween: function returnTimesInBetween(start, end) {
      var timesInBetween = [];
      var startH = parseInt(start.split(":")[0]);
      var startM = parseInt(start.split(":")[1]);
      var endH = parseInt(end.split(":")[0]);
      var endM = parseInt(end.split(":")[1]);
      if (startM == 30) startH++;

      for (var i = startH; i < endH; i++) {
        timesInBetween.push(i < 10 ? "0" + i + ":00" : i + ":00");
        timesInBetween.push(i < 10 ? "0" + i + ":30" : i + ":30");
      }

      timesInBetween.push(endH + ":00");
      if (endM == 30) timesInBetween.push(endH + ":30");
      var time = timesInBetween.map(function (timeString) {
        var H = +timeString.substr(0, 2);
        var h = H % 12 || 12;
        var ampm = H < 12 ? " AM" : " PM";
        return timeString = h + timeString.substr(2, 3) + ampm;
      });
      return time;
    },
    getRestaurantTime: function getRestaurantTime() {
      var self = this;
      axios.get('api/restuarant_time').then(function (response) {
        response = response.data;
        self.restaurantTimes = response.data;
      })["catch"](function (error) {
        self.errorMessage = 'Something went wrong.';
        self.scrollToTop();
        setTimeout(function () {
          self.errorMessage = '';
        }, 3000);
      });
    },
    getRestaurantPersons: function getRestaurantPersons() {
      var self = this;
      axios.get('api/no_of_persons').then(function (response) {
        response = response.data;
        var persons = response.data;

        for (var i = 1; i <= persons; i++) {
          self.noOfperson.push(i);
        }
      })["catch"](function (error) {
        self.errorMessage = 'Something went wrong.';
        self.scrollToTop();
        setTimeout(function () {
          self.errorMessage = '';
        }, 3000);
      });
    },
    validateBeforeSubmit: function validateBeforeSubmit() {
      var self = this;
      var error = false;

      if (self.formData.booking_date == null) {
        self.errorMessage = 'Booking Date is required';
        error = true;
        self.scrollToTop();
        return;
      }

      if (self.formData.booking_time == null) {
        self.errorMessage = 'Booking Time is required';
        error = true;
        self.scrollToTop();
        return;
      }

      if (self.formData.firstname == null || self.formData.firstname == '') {
        self.errorMessage = 'First Name is required';
        error = true;
        self.scrollToTop();
        return;
      }

      if (self.formData.lastname == null || self.formData.lastname == '') {
        self.errorMessage = 'Last Name is required';
        error = true;
        self.scrollToTop();
        return;
      }

      if (self.formData.phone == null || self.formData.phone == '') {
        self.errorMessage = 'Phone is required';
        error = true;
        self.scrollToTop();
        return;
      }

      if (self.formData.email == null || self.formData.email == '') {
        self.errorMessage = 'Email is required';
        error = true;
        self.scrollToTop();
        return;
      }

      if (!this.validateEmail(self.formData.email)) {
        self.errorMessage = 'Email is must be a valid email';
        error = true;
        self.scrollToTop();
        return;
      }

      if (error == false) {
        self.onCustomerReservation();
      }
    },
    validateEmail: function validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
    resetForm: function resetForm() {
      var self = this;
      self.formData = {
        booking_date: new Date(),
        persons: null,
        booking_time: null,
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        special_occasion: '',
        special_request: '',
        restaurant_newsletter: 0,
        opentable_newsletter: 0,
        reservations_reminder: 0
      };
    },
    scrollToTop: function scrollToTop() {
      $('html, body').animate({
        scrollTop: $("div#messages").offset().top
      }, 2000);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common-components/slider.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common-components/slider.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-gallery */ "./node_modules/vue-gallery/dist/js/vue-gallery.js");
/* harmony import */ var vue_gallery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_gallery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hooper */ "./node_modules/hooper/dist/hooper.esm.js");
/* harmony import */ var hooper_dist_hooper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hooper/dist/hooper.css */ "./node_modules/hooper/dist/hooper.css");
/* harmony import */ var hooper_dist_hooper_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hooper_dist_hooper_css__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Hooper: hooper__WEBPACK_IMPORTED_MODULE_1__["Hooper"],
    Slide: hooper__WEBPACK_IMPORTED_MODULE_1__["Slide"],
    HooperNavigation: hooper__WEBPACK_IMPORTED_MODULE_1__["Navigation"],
    'gallery': vue_gallery__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  methods: {
    getSlider: function getSlider() {
      var _this = this;

      _this.loading = true;
      axios.get('/api/slider').then(function (response) {
        _this.sliders = response.data.data;
        _this.loading = false;
      });
    }
  },
  data: function data() {
    return {
      sliders: []
    };
  },
  mounted: function mounted() {
    this.getSlider();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common-components/testimonials.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common-components/testimonials.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var v_click_outside__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! v-click-outside */ "./node_modules/v-click-outside/dist/v-click-outside.umd.js");
/* harmony import */ var v_click_outside__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(v_click_outside__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  directives: {
    clickOutside: v_click_outside__WEBPACK_IMPORTED_MODULE_0___default.a.directive
  },
  data: function data() {
    return {
      showTestimonialPopup: false
    };
  },
  methods: {
    hideModal: function hideModal() {
      this.showTestimonialPopup = false;
    },
    openPopup: function openPopup() {
      this.showTestimonialPopup = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order-page/main.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/order-page/main.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: false,
      categories: [],
      products: [],
      product: false,
      editProduct: false,
      list: {},
      editList: {},
      has_sizes: false,
      cat_count: false,
      total_amount: 0,
      cart_height: false,
      limitPosition: 380,
      scrolled: false,
      editIndex: '',
      deals: [],
      deals_data: {},
      dealsModal: false,
      editDeal: false,
      editDealsData: {},
      foodAllergyModal: false,
      orderType: '',
      postalCode: '',
      showPostal: false,
      errorMessage: '',
      totalNumberofDeals: 0,
      ShopClose: true,
      text: ''
    };
  },
  mounted: function mounted() {
    this.getCategories();
    this.getProductAgainstCategories(1); // this.getDeals()

    this.orderType = this.$store.getters.getOrderType;
    this.postalCode = this.$store.getters.getPostalCode;

    if (this.orderType == "Delivery") {
      this.showPostal = true;
    }

    this.scrollToMain();
    window.addEventListener("scroll", this.handleScroll);
    document.documentElement.className = 'remove-overflow';
  },
  created: function created() {
    this.checkShoptime();
  },
  methods: {
    checkShoptime: function checkShoptime() {
      var d = new Date();
      var n = d.getHours();
      var vm = this;
      /* if(n > 10){
           vm.ShopClose =false
       }*/
    },
    showPostalCode: function showPostalCode() {
      var self = this;
      if (self.orderType == "Delivery") self.showPostal = true;else self.showPostal = false;
    },
    scrollToMain: function scrollToMain() {
      var element = document.getElementById("product-scroll");
      element.scrollIntoView({
        behavior: "instant",
        block: "start"
      });
    },
    updateProduct: function updateProduct(id, cart, index) {
      var _this = this;

      var url = '';

      if (cart.product_type === "deal") {
        this.editDealsData = cart;
        _this.loading = true;
        url = '/api/deals/' + id;
      } else {
        this.editList = cart;
        _this.loading = true;
        url = '/api/products/' + id;
      }

      axios.get(url).then(function (response) {
        if (cart.product_type === 'deal') {
          _this.deals_data = response.data.data;
          _this.loading = false;
          _this.editIndex = index;
          _this.editDeal = true;
        } else {
          _this.list = response.data.data;
          _this.has_sizes = _this.list.sizes.length > 0;
          _this.loading = false;
          _this.editIndex = index;
          _this.editProduct = true;
        }
      });
    },
    priceFormat: function priceFormat(num) {
      return parseFloat(num).toFixed(2);
    },
    addProduct: function addProduct() {
      this.product = true;
    },
    hideModal: function hideModal() {
      this.product = false;
      this.editProduct = false;
      this.dealsModal = false;
      this.list = {};
      this.deals_data = {};
      this.editDeal = false;
      this.editDealsData = {};
      this.foodAllergyModal = false;
      document.documentElement.classList.remove("onlypopup");
    },
    getCategories: function getCategories() {
      var _this = this;

      _this.loading = true;
      axios.get('/api/categories').then(function (response) {
        _this.categories = response.data.data;
        _this.loading = false;

        if (_this.categories.length > 7) {
          _this.cat_count = true;
        }
      });
    },
    getDeals: function getDeals(deal) {
      var _this = this;

      if (deal == 1) {
        _this.loading = true;
      }

      axios.get('/api/deals').then(function (response) {
        // console.log( response.data.data);
        if (deal == 1) {
          _this.products = [];
        }

        _this.deals = response.data.data;
        _this.totalNumberofDeals = _this.deals.length;
        _this.loading = false;
      });
    },
    getProductAgainstCategories: function getProductAgainstCategories(id) {
      var _this = this;

      _this.deals = [];
      _this.products = [];
      _this.loading = true;
      var url = '/api/categories';

      if (id) {
        url = url + '?id=' + id;
      }

      axios.get(url).then(function (response) {
        _this.products = response.data.data;
        _this.loading = false;
        setTimeout(function () {
          if (!id) {
            _this.getDeals(false);
          }
        }, 2000);
      });
    },
    opencartlist: function opencartlist() {
      this.cart_height = !this.cart_height;

      if (this.cart_height == true) {
        document.querySelector("body").style.overflow = 'hidden';
      } else {
        document.querySelector("body").style.overflow = 'auto';
      }
    },
    viewProduct: function viewProduct(id) {
      var _this = this;

      _this.loading = true;
      var url = '/api/products/' + id;
      axios.get(url).then(function (response) {
        _this.list = response.data.data;
        _this.has_sizes = _this.list.sizes.length > 0;
        _this.loading = false;
        _this.product = true;
      });
      document.documentElement.className = 'onlypopup';
    },
    viewDeal: function viewDeal(id) {
      var _this = this;

      _this.loading = true;
      var url = '/api/deals/' + id;
      axios.get(url).then(function (response) {
        _this.deals_data = response.data.data;
        _this.loading = false;
        _this.dealsModal = true;
      });
      document.documentElement.className = 'onlypopup';
    },
    placeOrder: function placeOrder() {
      var vm = this;

      if (this.orderType == '') {
        vm.errorMessage = 'Please Select Order Type';
        setTimeout(function () {
          vm.errorMessage = "";
        }, 2000);
      } else if (this.orderType == 'Delivery' && this.postalCode == "") {
        vm.errorMessage = 'Please Enter Your Postcode';
        setTimeout(function () {
          vm.errorMessage = "";
        }, 2000);
      } else {
        axios({
          method: 'post',
          url: '/api/check-postal',
          data: {
            order_type: this.orderType,
            postal_code: this.postalCode
          }
        }).then(function (response) {
          if (response.data.error === undefined) {
            vm.errorMessage = response.data.data.amount;
            vm.$store.commit('setDeliveryCharges', response.data.data.amount);
            vm.$store.commit('setOrderType', vm.orderType);
            vm.$store.commit('setPostalCode', vm.postalCode);
            vm.$router.push({
              name: 'check-out'
            });
          } else {
            vm.errorMessage = 'We are not providing food in your area';
          }
        })["catch"](function (response) {
          //handle error
          console.log(response);
        });
      }
    },
    removeFromCart: function removeFromCart(index) {
      var product = index;
      product.removalQuantity = index.quantity;
      this.$store.commit('removeFromCart', product);
    },
    quantityAddInCart: function quantityAddInCart(index, cart) {
      this.$store.state.cartItems[index]['quantity'] += 1;
      this.$store.state.cartItemsCount += 1;
    },
    quantityMinusInCart: function quantityMinusInCart(index) {
      index.removalQuantity = 1;
      this.$store.commit('removeFromCart', index);
    },

    /*updateCart() {
        if (this.$store.getters.getAllCartArray.length > 1) {
            let sum = 0;
            let count = 0;
            this.$store.getters.getAllCartArray.forEach(function (item) {
                count++;
                if (count > 1) {
                      console.log(item.single_product_total_amount)
                      sum += item.single_product_total_amount;
                }
            });
            this.total_amount = sum;
        }
          return this.$store.getters.getAllCartArray;
        }, */
    handleScroll: function handleScroll() {
      if (this.limitPosition < window.scrollY) {
        this.scrolled = true; // move up!
      }

      if (this.limitPosition > window.scrollY) {
        this.scrolled = false; // move down
      }
    },
    foodAllergyPopup: function foodAllergyPopup() {
      this.foodAllergyModal = true;
    }
  },
  computed: {
    info: function info() {
      return this.$store.state.general_data;
    },
    cartItems: function cartItems() {
      return this.$store.state.cartItems;
    },
    totalPrice: function totalPrice() {
      var price = 0;
      this.$store.state.cartItems.map(function (el) {
        price += el['quantity'] * el['price'];
      });
      return price;
    },
    count: function count() {
      return this.$store.state.cartItemsCount;
    }
  },
  destroyed: function destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order-page/popup/add-deal.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/order-page/popup/add-deal.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['showModalProp', 'deals_data'],
  data: function data() {
    return {
      errorMessage: '',
      successMessage: '',
      isError: false,
      product_quantity: 1,
      main_array: [],
      productData: {},
      total_amount_of_single_product: 0,
      product_array: {},
      error_message: '',
      dealsProducts: [],
      mandatory: false
    };
  },
  methods: {
    scrollToTop: function scrollToTop() {
      $('div#add-product').stop().animate({
        scrollTop: 0
      }, 'slow', 'swing');
    },
    priceFormat: function priceFormat(num) {
      return parseFloat(num).toFixed(2);
    },
    showModal: function showModal() {
      if (this.deals_data.items.length > 0) {
        this.dealsProducts = this.deals_data.items;
      }

      this.$refs.myModalRef.show();
      this.total_amount_of_single_product = this.priceFormat(this.deals_data.price); // let checkMandatory = this.checkMandatory();

      /* if(checkMandatory.length > 0 ){
        this.mandatory = true
      }*/
    },
    onHidden: function onHidden() {
      this.dealsProducts = [];
      this.$emit('HideModalValue');
    },
    hideModal: function hideModal() {
      var self = this;
      self.total_amount_of_single_product = 0;
      self.product_quantity = 1;
      this.productData = {};
      this.main_array = [];
      this.error_message = '';
      this.$refs.myModalRef.hide();
      this.$bvModal.hide('add-deal');
    },
    addToCart: function addToCart() {
      this.error_message = '';
      this.product_array = {};
      var total_amount = 0;
      total_amount = this.total_amount_of_single_product * this.product_quantity;
      var extras = [];
      this.product_array = {
        'product_id': this.deals_data.id,
        'product_type': 'deal',
        'quantity': this.product_quantity,
        'product_name': this.deals_data.name,
        'price': this.total_amount_of_single_product,
        'special_instructions': this.productData.special_instruction,
        'single_product_total_amount': total_amount
      };
      var group_check = [];

      for (var key in this.productData) {
        if (key != undefined) {
          if (key != 'special_instruction') {
            var choice = this.productData[key].split("##@@");

            if (choice[0] != undefined) {
              extras.push({
                group_name: key,
                choice: choice[0],
                'price': choice[1]
              });
            } else {
              extras.push({
                group_name: key,
                choice: this.productData[key],
                'price': 0
              });
            }

            group_check.push(key);
          }
        }
      }

      if (extras.length > 0) {
        this.product_array.extras = extras;
      }

      this.$store.commit('addToCart', this.product_array);
      this.hideModal();
    },
    validateBeforeSubmit: function validateBeforeSubmit() {
      var _this2 = this;

      var form_data = this.productData;
      this.errorBag.clear();
      this.$validator.validateAll().then(function (result) {
        if (result && !_this2.errorBag.all().length) {
          if (_this2.productData.name === "") {
            _this2.errorBag.add({
              msg: 'The Name is required.',
              rule: 'required'
            });

            _this2.errorMessage = _this2.errorBag.all()[0];
          }
        } //his.errorMessage = this.errorBag.all()[0];

      });
    },
    plusQuantity: function plusQuantity() {
      this.quantity = this.product_quantity++;
    },
    minusQuantity: function minusQuantity() {
      if (this.product_quantity > 1) {
        this.quantity = this.product_quantity--;
      }
    },
    checkMandatory: function checkMandatory() {
      var _this = this;

      var mandatory = [];

      if (this.has_sizes) {
        mandatory.push('size');
      }

      if (this.list.groups.length > 0) {
        for (var group in this.list.groups) {
          if (this.list.groups[group].type == 'Mandatory') {
            mandatory.push(_this.list.groups[group].name);
          }
        }
      }

      return mandatory;
    },
    productSum: function productSum(array_key, value) {
      var _this3 = this;

      setTimeout(function () {
        var total = 0;
        var vm = _this3;

        if (!_this3.has_sizes) {
          total = parseFloat(_this3.list.price);
        }

        for (var key in _this3.productData) {
          var price = _this3.productData[key].split("##@@");

          total += parseFloat(price[1]);
        }

        _this3.total_amount_of_single_product = total;
      }, 300);
    }
  },
  watch: {
    showModalProp: function showModalProp(value) {
      if (value) {
        this.showModal();
      }

      if (!value) {
        this.hideModal();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order-page/popup/add-product.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/order-page/popup/add-product.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Thankyou__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Thankyou */ "./resources/js/components/Thankyou.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['showModalProp', 'list', 'has_sizes'],
  data: function data() {
    return {
      errorMessage: '',
      successMessage: '',
      isError: false,
      product_quantity: 1,
      main_array: [],
      productData: {},
      total_amount_of_single_product: 0,
      product_array: {},
      error_message: '',
      mandatory: false,
      sizeGroups: []
    };
  },
  methods: {
    scrollToTop: function scrollToTop() {
      $('div#tt').stop().animate({
        scrollTop: 0
      }, 'slow', 'swing');
      return;
    },
    priceFormat: function priceFormat(num) {
      return parseFloat(num).toFixed(2);
    },
    showModal: function showModal() {
      this.$refs.myModalRef.show();
      this.sizeGroups = [];
      this.total_amount_of_single_product = this.priceFormat(this.list.price);
      var checkMandatory = this.checkMandatory();

      if (checkMandatory.length > 0) {
        this.mandatory = true;
      }
    },
    onHidden: function onHidden() {
      this.$emit('HideModalValue');
    },
    hideModal: function hideModal() {
      var self = this;
      self.total_amount_of_single_product = 0;
      self.product_quantity = 1;
      this.productData = {};
      this.main_array = [];
      this.error_message = '';
      this.$refs.myModalRef.hide();
      this.$bvModal.hide('add-product');
      this.sizeGroups = [];
    },
    addToCart: function addToCart() {
      this.error_message = '';
      this.product_array = {};
      var total_amount = 0;
      total_amount = this.total_amount_of_single_product * this.product_quantity;
      var extras = [];
      this.product_array = {
        'product_id': this.list.id,
        'product_type': 'product',
        'quantity': this.product_quantity,
        'product_name': this.list.name,
        'price': this.total_amount_of_single_product,
        'special_instructions': this.productData.special_instruction,
        'single_product_total_amount': total_amount
      };
      var group_check = [];

      for (var key in this.productData) {
        if (key != undefined) {
          if (key != 'special_instruction') {
            var choice = this.productData[key].split("##@@");
            extras.push({
              group_name: key,
              choice: choice[0],
              'price': choice[1]
            });
            group_check.push(key);
          }
        }
      }

      var checkMandatory = this.checkMandatory();

      if (checkMandatory.length > 0) {
        for (var cm in checkMandatory) {
          if (group_check.indexOf(checkMandatory[cm]) === -1) {
            this.error_message = checkMandatory[cm] + ' is Required';
            this.scrollToTop();
            return;
          }
        }
      }

      if (extras.length > 0) {
        this.product_array.extras = extras;
      }

      this.$store.commit('addToCart', this.product_array);
      this.hideModal();
    },
    validateBeforeSubmit: function validateBeforeSubmit() {
      var _this2 = this;

      var form_data = this.productData;
      this.errorBag.clear();
      this.$validator.validateAll().then(function (result) {
        if (result && !_this2.errorBag.all().length) {
          if (_this2.productData.name === "") {
            _this2.errorBag.add({
              msg: 'The Name is required.',
              rule: 'required'
            });

            _this2.errorMessage = _this2.errorBag.all()[0];
          }
        } //his.errorMessage = this.errorBag.all()[0];

      });
    },
    plusQuantity: function plusQuantity() {
      this.quantity = this.product_quantity++;
    },
    minusQuantity: function minusQuantity() {
      if (this.product_quantity > 1) {
        this.quantity = this.product_quantity--;
      }
    },
    checkMandatory: function checkMandatory() {
      var _this = this;

      var mandatory = [];

      if (this.has_sizes) {
        mandatory.push('size');
      }

      if (this.list.groups.length > 0) {
        for (var group in this.list.groups) {
          if (this.list.groups[group].type == 'Mandatory') {
            mandatory.push(_this.list.groups[group].name);
          }
        }
      }
      /*if(this.sizeGroups.length > 0 ){
        for( let group in  this.sizeGroups){
          if(this.sizeGroups[group].group.type == 'Mandatory'){
              mandatory.push(this.sizeGroups[group].group.name)
          }
        }
      }*/


      return mandatory;
    },
    checkValidate: function checkValidate() {
      var group_check = [];
      var size_group_check = [];
      var self = this;

      for (var key in this.productData) {
        if (key != undefined) {
          if (key != 'special_instruction') {
            group_check.push(key);
          }
        }
      }
      /*for (var key1 in this.sizeGroups) {
          if(key1 != undefined){
          if(key1 != 'special_instruction'){
            size_group_check.push(this.sizeGroups[key1].group.name)
          }
        }
      }*/


      var checkMandatory = this.checkMandatory();

      if (checkMandatory.length > 0) {
        for (var cm in checkMandatory) {
          if (group_check.indexOf(checkMandatory[cm]) === -1) {
            self.mandatory = true;
          } else {
            self.mandatory = false;
            $('div[name="' + checkMandatory[cm] + '"]').removeAttr('id');
          }
        }
      }
    },
    productSum: function productSum(array_key, value, item) {
      var _this3 = this;

      setTimeout(function () {
        var total = 0;
        var vm = _this3;

        if (item.size_groups) {
          _this3.sizeGroups = item.size_groups;
        }

        if (!_this3.has_sizes) {
          total = parseFloat(_this3.list.price);
        }

        for (var key in _this3.productData) {
          var price = _this3.productData[key].split("##@@");

          total += parseFloat(price[1]);
        }

        _this3.total_amount_of_single_product = total;

        _this3.checkValidate();
      }, 300);
    }
  },
  watch: {
    showModalProp: function showModalProp(value) {
      if (value) {
        this.showModal();
      }

      if (!value) {
        this.hideModal();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order-page/popup/edit-deal.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/order-page/popup/edit-deal.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['showModalProp', 'deals_data', 'editIndex', 'editDealsData'],
  data: function data() {
    return {
      errorMessage: '',
      successMessage: '',
      isError: false,
      product_quantity: 1,
      main_array: [],
      productData: {},
      total_amount_of_single_product: 0,
      product_array: {},
      cart: [],
      error_message: '',
      dealsProducts: []
    };
  },
  methods: {
    scrollToTop: function scrollToTop() {
      $('div#add-product').stop().animate({
        scrollTop: 0
      }, 'slow', 'swing');
    },
    priceFormat: function priceFormat(num) {
      return parseFloat(num).toFixed(2);
    },
    showModal: function showModal() {
      if (this.deals_data.items.length > 0) {
        this.dealsProducts = this.deals_data.items;
      }

      this.$refs.myModalRef.show();
      this.total_amount_of_single_product = this.priceFormat(this.deals_data.price);
      this.product_quantity = this.editDealsData.quantity;
      console.log(this.editDealsData.extras);

      for (var key in this.editDealsData.extras) {
        this.productData[this.editDealsData.extras[key]['group_name']] = this.editDealsData.extras[key]['choice'];
      }
    },
    onHidden: function onHidden() {
      this.dealsProducts = [];
      this.$emit('HideModalValue');
    },
    hideModal: function hideModal() {
      var self = this;
      self.total_amount_of_single_product = 0;
      self.product_quantity = 1;
      this.productData = {};
      this.main_array = [];
      this.error_message = '';
      this.$refs.myModalRef.hide();
      this.$bvModal.hide('edit-deal');
    },
    addToCart: function addToCart() {
      var old_quantity = this.$store.state.cartItems[this.editIndex]['quantity'];
      this.$store.state.cartItems.splice(this.editIndex, 1);
      this.$store.state.cartItemsCount -= old_quantity;
      this.error_message = '';
      this.product_array = {};
      var total_amount = 0;
      total_amount = this.total_amount_of_single_product * this.product_quantity;
      var extras = [];
      console.log(this.productData); // return;

      this.product_array = {
        'product_id': this.deals_data.id,
        'product_type': 'deal',
        'quantity': this.product_quantity,
        'product_name': this.deals_data.name,
        'price': this.total_amount_of_single_product,
        'special_instructions': this.productData.special_instruction,
        'single_product_total_amount': total_amount
      };
      var group_check = [];

      for (var key in this.productData) {
        if (key != undefined) {
          if (key != 'special_instruction') {
            extras.push({
              group_name: key,
              choice: this.productData[key],
              'price': 0
            });
            group_check.push(key);
          }
        }
      }

      if (extras.length > 0) {
        this.product_array.extras = extras;
      } //this.$store.getters.getAllCartArray[this.editIndex]  = this.product_array;


      this.$store.commit('addToCart', this.product_array);
      this.hideModal();
    },
    validateBeforeSubmit: function validateBeforeSubmit() {
      var _this2 = this;

      var form_data = this.productData;
      this.errorBag.clear();
      this.$validator.validateAll().then(function (result) {
        if (result && !_this2.errorBag.all().length) {
          if (_this2.productData.name === "") {
            _this2.errorBag.add({
              msg: 'The Name is required.',
              rule: 'required'
            });

            _this2.errorMessage = _this2.errorBag.all()[0];
          }
        } //his.errorMessage = this.errorBag.all()[0];

      });
    },
    plusQuantity: function plusQuantity() {
      //  this.quantity = this.product_quantity ++;
      this.product_quantity++;
    },
    minusQuantity: function minusQuantity() {
      if (this.product_quantity > 1) {
        // this.quantity = this.product_quantity --;
        this.product_quantity--;
      }
    },
    checkMandatory: function checkMandatory() {
      var _this = this;

      var mandatory = [];

      if (this.has_sizes) {
        mandatory.push('size');
      }

      if (this.list.groups.length > 0) {
        for (var group in this.list.groups) {
          if (this.list.groups[group].type == 'Mandatory') {
            mandatory.push(_this.list.groups[group].name);
          }
        }
      }

      return mandatory;
    },
    productSum: function productSum(array_key, value) {
      var _this3 = this;

      setTimeout(function () {
        var total = 0;
        var vm = _this3;

        if (!_this3.has_sizes) {
          total = parseFloat(_this3.list.price);
        }

        for (var key in _this3.productData) {
          var price = _this3.productData[key].split("##@@");

          total += parseFloat(price[1]);
        }

        _this3.total_amount_of_single_product = total;
      }, 300);
    }
  },
  watch: {
    showModalProp: function showModalProp(value) {
      if (value) {
        this.showModal();
      }

      if (!value) {
        this.hideModal();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order-page/popup/edit-product.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/order-page/popup/edit-product.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['showModalProp', 'list', 'has_sizes', 'editList', 'editIndex'],
  data: function data() {
    return {
      errorMessage: '',
      successMessage: '',
      isError: false,
      product_quantity: 1,
      main_array: [],
      productData: {},
      total_amount_of_single_product: 0,
      product_array: {},
      error_message: '',
      totalPrice: 0,
      sizeGroups: []
    };
  },
  methods: {
    scrollToTop: function scrollToTop() {
      $('div#add-product').stop().animate({
        scrollTop: 0
      }, 'slow', 'swing');
    },
    priceFormat: function priceFormat(num) {
      return parseFloat(num).toFixed(2);
    },
    showModal: function showModal() {
      this.$refs.myModalRef.show();
      this.product_quantity = this.editList.quantity;
      this.totalPrice = this.editList.price * this.editList.quantity;
      this.total_amount_of_single_product = this.editList.price;

      for (var choice in this.editList.extras) {
        var index = this.editList.extras[choice]['group_name'];

        if (index == 'size') {
          for (var ss in this.list.sizes) {
            for (var ed in this.editList.extras) {
              if (this.editList.extras[ed].choice == this.list.sizes[ss].size) {
                this.sizeGroups = this.list.sizes[ss].size_groups;
              }
            }
          }
        }

        this.productData[index] = this.editList.extras[choice]['choice'] + '##@@' + this.priceFormat(this.editList.extras[choice]['price']);
      }
    },
    onHidden: function onHidden() {
      this.$emit('HideModalValue');
    },
    hideModal: function hideModal() {
      var self = this;
      self.total_amount_of_single_product = 0;
      self.product_quantity = 1;
      this.productData = {};
      this.main_array = [];
      this.error_message = '';
      this.$refs.myModalRef.hide();
      this.$bvModal.hide('edit-product');
      this.sizeGroups = [];
    },
    addToCart: function addToCart() {
      var old_quantity = this.$store.state.cartItems[this.editIndex]['quantity'];
      this.$store.state.cartItems.splice(this.editIndex, 1);
      this.$store.state.cartItemsCount -= old_quantity;
      this.error_message = '';
      this.product_array = {};
      var total_amount = 0;
      total_amount = this.total_amount_of_single_product * this.product_quantity;
      var extras = [];
      this.product_array = {
        'product_id': this.list.id,
        'quantity': this.product_quantity,
        'product_name': this.list.name,
        'price': this.total_amount_of_single_product,
        'special_instructions': this.productData.special_instruction,
        'single_product_total_amount': total_amount
      };
      var group_check = [];

      for (var key in this.productData) {
        if (key != undefined) {
          if (key != 'special_instruction') {
            var choice = this.productData[key].split("##@@");
            extras.push({
              group_name: key,
              choice: choice[0],
              'price': choice[1]
            });
            group_check.push(key);
          }
        }
      }

      var checkMandatory = this.checkMandatory();

      if (checkMandatory.length > 0) {
        for (var cm in checkMandatory) {
          if (group_check.indexOf(checkMandatory[cm]) === -1) {
            this.error_message = checkMandatory[cm] + ' is Required';
            this.scrollToTop();
            return;
          }
        }
      }

      if (extras.length > 0) {
        this.product_array.extras = extras;
      }

      this.$store.commit('addToCart', this.product_array);
      this.hideModal();
    },
    validateBeforeSubmit: function validateBeforeSubmit() {
      var _this2 = this;

      this.productData = this.errorBag.clear();
      this.$validator.validateAll().then(function (result) {
        if (result && !_this2.errorBag.all().length) {
          if (_this2.productData.name === "") {
            _this2.errorBag.add({
              msg: 'The Name is required.',
              rule: 'required'
            });

            _this2.errorMessage = _this2.errorBag.all()[0];
          }
        } //his.errorMessage = this.errorBag.all()[0];

      });
    },
    plusQuantity: function plusQuantity() {
      this.product_quantity++; //this.productSum()
    },
    minusQuantity: function minusQuantity() {
      if (this.product_quantity > 1) {
        this.product_quantity--; // this.productSum()
      }
    },
    checkMandatory: function checkMandatory() {
      var _this = this;

      var mandatory = [];

      if (this.has_sizes) {
        mandatory.push('size');
      }

      if (this.list.groups.length > 0) {
        for (var group in this.list.groups) {
          if (this.list.groups[group].type == 'Mandatory') {
            mandatory.push(_this.list.groups[group].name);
          }
        }
      }

      return mandatory;
    },
    productSum: function productSum(array_key, value, item) {
      var _this3 = this;

      setTimeout(function () {
        var total = 0;
        var vm = _this3;

        if (item.size_groups) {
          _this3.sizeGroups = item.size_groups;
          console.log(_this3.productData);
          var keys = Object.keys(_this3.productData);
          console.log(keys);
          Object.keys(_this3.productData).forEach(function (itm) {
            if (itm != "size") delete vm.productData[itm];
          });
        }

        if (!_this3.has_sizes) {
          total = parseFloat(_this3.list.price);
        }

        for (var key in _this3.productData) {
          var price = _this3.productData[key].split("##@@");

          total += parseFloat(price[1]);
        }

        _this3.total_amount_of_single_product = total;
        _this3.totalPrice = total * _this3.product_quantity;
      }, 200);
    }
  },
  watch: {
    showModalProp: function showModalProp(value) {
      if (value) {
        this.showModal();
      }

      if (!value) {
        this.hideModal();
      }
    }
  }
  /*,
       computed: {
           totalPrice() {
           let price = this.total_amount_of_single_product * this.product_quantity;
           return price;
         }
       }*/

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order-page/popup/food-allergy.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/order-page/popup/food-allergy.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['showModalProp'],
  data: function data() {
    return {
      errorMessage: '',
      successMessage: ''
    };
  },
  methods: {
    showModal: function showModal() {
      this.$refs.myModalRef.show();
    },
    onHidden: function onHidden() {
      this.$emit('HideModalValue');
    },
    hideModal: function hideModal() {
      var self = this;
      this.$refs.myModalRef.hide();
    },
    addToCart: function addToCart() {
      this.hideModal();
    }
  },
  watch: {
    showModalProp: function showModalProp(value) {
      if (value) {
        this.showModal();
      }

      if (!value) {
        this.hideModal();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order-page/popup/testimonials.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/order-page/popup/testimonials.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['showModalProp'],
  data: function data() {
    return {
      errorMessage: '',
      successMessage: ''
    };
  },
  methods: {
    showModal: function showModal() {
      this.$refs.myModalRef.show();
    },
    onHidden: function onHidden() {
      this.$emit('HideModalValue');
    },
    hideModal: function hideModal() {
      var self = this;
      this.$refs.myModalRef.hide();
    },
    addToCart: function addToCart() {
      this.hideModal();
    }
  },
  watch: {
    showModalProp: function showModalProp(value) {
      if (value) {
        this.showModal();
      }

      if (!value) {
        this.hideModal();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/index.js":
/*!*************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/index.js ***!
  \*************************************************/
/*! exports provided: install, NAME, BVConfigPlugin, BVConfig, BootstrapVue, BVModalPlugin, BVToastPlugin, IconsPlugin, BootstrapVueIcons, BIcon, BIconstack, BIconBlank, BIconAlarm, BIconAlarmFill, BIconAlignBottom, BIconAlignCenter, BIconAlignEnd, BIconAlignMiddle, BIconAlignStart, BIconAlignTop, BIconAlt, BIconApp, BIconAppIndicator, BIconArchive, BIconArchiveFill, BIconArrow90degDown, BIconArrow90degLeft, BIconArrow90degRight, BIconArrow90degUp, BIconArrowBarDown, BIconArrowBarLeft, BIconArrowBarRight, BIconArrowBarUp, BIconArrowClockwise, BIconArrowCounterclockwise, BIconArrowDown, BIconArrowDownCircle, BIconArrowDownCircleFill, BIconArrowDownLeft, BIconArrowDownLeftCircle, BIconArrowDownLeftCircleFill, BIconArrowDownLeftSquare, BIconArrowDownLeftSquareFill, BIconArrowDownRight, BIconArrowDownRightCircle, BIconArrowDownRightCircleFill, BIconArrowDownRightSquare, BIconArrowDownRightSquareFill, BIconArrowDownShort, BIconArrowDownSquare, BIconArrowDownSquareFill, BIconArrowDownUp, BIconArrowLeft, BIconArrowLeftCircle, BIconArrowLeftCircleFill, BIconArrowLeftRight, BIconArrowLeftShort, BIconArrowLeftSquare, BIconArrowLeftSquareFill, BIconArrowRepeat, BIconArrowReturnLeft, BIconArrowReturnRight, BIconArrowRight, BIconArrowRightCircle, BIconArrowRightCircleFill, BIconArrowRightShort, BIconArrowRightSquare, BIconArrowRightSquareFill, BIconArrowUp, BIconArrowUpCircle, BIconArrowUpCircleFill, BIconArrowUpLeft, BIconArrowUpLeftCircle, BIconArrowUpLeftCircleFill, BIconArrowUpLeftSquare, BIconArrowUpLeftSquareFill, BIconArrowUpRight, BIconArrowUpRightCircle, BIconArrowUpRightCircleFill, BIconArrowUpRightSquare, BIconArrowUpRightSquareFill, BIconArrowUpShort, BIconArrowUpSquare, BIconArrowUpSquareFill, BIconArrowsAngleContract, BIconArrowsAngleExpand, BIconArrowsCollapse, BIconArrowsExpand, BIconArrowsFullscreen, BIconArrowsMove, BIconAspectRatio, BIconAspectRatioFill, BIconAsterisk, BIconAt, BIconAward, BIconAwardFill, BIconBack, BIconBackspace, BIconBackspaceFill, BIconBackspaceReverse, BIconBackspaceReverseFill, BIconBadge4k, BIconBadge4kFill, BIconBadge8k, BIconBadge8kFill, BIconBadgeAd, BIconBadgeAdFill, BIconBadgeCc, BIconBadgeCcFill, BIconBadgeHd, BIconBadgeHdFill, BIconBadgeTm, BIconBadgeTmFill, BIconBadgeVo, BIconBadgeVoFill, BIconBag, BIconBagCheck, BIconBagCheckFill, BIconBagDash, BIconBagDashFill, BIconBagFill, BIconBagPlus, BIconBagPlusFill, BIconBagX, BIconBagXFill, BIconBarChart, BIconBarChartFill, BIconBarChartLine, BIconBarChartLineFill, BIconBarChartSteps, BIconBasket, BIconBasket2, BIconBasket2Fill, BIconBasket3, BIconBasket3Fill, BIconBasketFill, BIconBattery, BIconBatteryCharging, BIconBatteryFull, BIconBatteryHalf, BIconBell, BIconBellFill, BIconBezier, BIconBezier2, BIconBicycle, BIconBinoculars, BIconBinocularsFill, BIconBlockquoteLeft, BIconBlockquoteRight, BIconBook, BIconBookFill, BIconBookHalf, BIconBookmark, BIconBookmarkCheck, BIconBookmarkCheckFill, BIconBookmarkDash, BIconBookmarkDashFill, BIconBookmarkFill, BIconBookmarkHeart, BIconBookmarkHeartFill, BIconBookmarkPlus, BIconBookmarkPlusFill, BIconBookmarkStar, BIconBookmarkStarFill, BIconBookmarkX, BIconBookmarkXFill, BIconBookmarks, BIconBookmarksFill, BIconBookshelf, BIconBootstrap, BIconBootstrapFill, BIconBootstrapReboot, BIconBorderStyle, BIconBorderWidth, BIconBoundingBox, BIconBoundingBoxCircles, BIconBox, BIconBoxArrowDown, BIconBoxArrowDownLeft, BIconBoxArrowDownRight, BIconBoxArrowInDown, BIconBoxArrowInDownLeft, BIconBoxArrowInDownRight, BIconBoxArrowInLeft, BIconBoxArrowInRight, BIconBoxArrowInUp, BIconBoxArrowInUpLeft, BIconBoxArrowInUpRight, BIconBoxArrowLeft, BIconBoxArrowRight, BIconBoxArrowUp, BIconBoxArrowUpLeft, BIconBoxArrowUpRight, BIconBoxSeam, BIconBraces, BIconBricks, BIconBriefcase, BIconBriefcaseFill, BIconBrightnessAltHigh, BIconBrightnessAltHighFill, BIconBrightnessAltLow, BIconBrightnessAltLowFill, BIconBrightnessHigh, BIconBrightnessHighFill, BIconBrightnessLow, BIconBrightnessLowFill, BIconBroadcast, BIconBroadcastPin, BIconBrush, BIconBrushFill, BIconBucket, BIconBucketFill, BIconBug, BIconBugFill, BIconBuilding, BIconBullseye, BIconCalculator, BIconCalculatorFill, BIconCalendar, BIconCalendar2, BIconCalendar2Check, BIconCalendar2CheckFill, BIconCalendar2Date, BIconCalendar2DateFill, BIconCalendar2Day, BIconCalendar2DayFill, BIconCalendar2Event, BIconCalendar2EventFill, BIconCalendar2Fill, BIconCalendar2Minus, BIconCalendar2MinusFill, BIconCalendar2Month, BIconCalendar2MonthFill, BIconCalendar2Plus, BIconCalendar2PlusFill, BIconCalendar2Range, BIconCalendar2RangeFill, BIconCalendar2Week, BIconCalendar2WeekFill, BIconCalendar2X, BIconCalendar2XFill, BIconCalendar3, BIconCalendar3Event, BIconCalendar3EventFill, BIconCalendar3Fill, BIconCalendar3Range, BIconCalendar3RangeFill, BIconCalendar3Week, BIconCalendar3WeekFill, BIconCalendar4, BIconCalendar4Event, BIconCalendar4Range, BIconCalendar4Week, BIconCalendarCheck, BIconCalendarCheckFill, BIconCalendarDate, BIconCalendarDateFill, BIconCalendarDay, BIconCalendarDayFill, BIconCalendarEvent, BIconCalendarEventFill, BIconCalendarFill, BIconCalendarMinus, BIconCalendarMinusFill, BIconCalendarMonth, BIconCalendarMonthFill, BIconCalendarPlus, BIconCalendarPlusFill, BIconCalendarRange, BIconCalendarRangeFill, BIconCalendarWeek, BIconCalendarWeekFill, BIconCalendarX, BIconCalendarXFill, BIconCamera, BIconCamera2, BIconCameraFill, BIconCameraReels, BIconCameraReelsFill, BIconCameraVideo, BIconCameraVideoFill, BIconCameraVideoOff, BIconCameraVideoOffFill, BIconCapslock, BIconCapslockFill, BIconCardChecklist, BIconCardHeading, BIconCardImage, BIconCardList, BIconCardText, BIconCaretDown, BIconCaretDownFill, BIconCaretDownSquare, BIconCaretDownSquareFill, BIconCaretLeft, BIconCaretLeftFill, BIconCaretLeftSquare, BIconCaretLeftSquareFill, BIconCaretRight, BIconCaretRightFill, BIconCaretRightSquare, BIconCaretRightSquareFill, BIconCaretUp, BIconCaretUpFill, BIconCaretUpSquare, BIconCaretUpSquareFill, BIconCart, BIconCart2, BIconCart3, BIconCart4, BIconCartCheck, BIconCartCheckFill, BIconCartDash, BIconCartDashFill, BIconCartFill, BIconCartPlus, BIconCartPlusFill, BIconCartX, BIconCartXFill, BIconCash, BIconCashStack, BIconCast, BIconChat, BIconChatDots, BIconChatDotsFill, BIconChatFill, BIconChatLeft, BIconChatLeftDots, BIconChatLeftDotsFill, BIconChatLeftFill, BIconChatLeftQuote, BIconChatLeftQuoteFill, BIconChatLeftText, BIconChatLeftTextFill, BIconChatQuote, BIconChatQuoteFill, BIconChatRight, BIconChatRightDots, BIconChatRightDotsFill, BIconChatRightFill, BIconChatRightQuote, BIconChatRightQuoteFill, BIconChatRightText, BIconChatRightTextFill, BIconChatSquare, BIconChatSquareDots, BIconChatSquareDotsFill, BIconChatSquareFill, BIconChatSquareQuote, BIconChatSquareQuoteFill, BIconChatSquareText, BIconChatSquareTextFill, BIconChatText, BIconChatTextFill, BIconCheck, BIconCheck2, BIconCheck2All, BIconCheck2Circle, BIconCheck2Square, BIconCheckAll, BIconCheckCircle, BIconCheckCircleFill, BIconCheckSquare, BIconCheckSquareFill, BIconChevronBarContract, BIconChevronBarDown, BIconChevronBarExpand, BIconChevronBarLeft, BIconChevronBarRight, BIconChevronBarUp, BIconChevronCompactDown, BIconChevronCompactLeft, BIconChevronCompactRight, BIconChevronCompactUp, BIconChevronContract, BIconChevronDoubleDown, BIconChevronDoubleLeft, BIconChevronDoubleRight, BIconChevronDoubleUp, BIconChevronDown, BIconChevronExpand, BIconChevronLeft, BIconChevronRight, BIconChevronUp, BIconCircle, BIconCircleFill, BIconCircleHalf, BIconCircleSquare, BIconClipboard, BIconClipboardCheck, BIconClipboardData, BIconClipboardMinus, BIconClipboardPlus, BIconClipboardX, BIconClock, BIconClockFill, BIconClockHistory, BIconCloud, BIconCloudArrowDown, BIconCloudArrowDownFill, BIconCloudArrowUp, BIconCloudArrowUpFill, BIconCloudCheck, BIconCloudCheckFill, BIconCloudDownload, BIconCloudDownloadFill, BIconCloudFill, BIconCloudMinus, BIconCloudMinusFill, BIconCloudPlus, BIconCloudPlusFill, BIconCloudSlash, BIconCloudSlashFill, BIconCloudUpload, BIconCloudUploadFill, BIconCode, BIconCodeSlash, BIconCodeSquare, BIconCollection, BIconCollectionFill, BIconCollectionPlay, BIconCollectionPlayFill, BIconColumns, BIconColumnsGap, BIconCommand, BIconCompass, BIconCompassFill, BIconCone, BIconConeStriped, BIconController, BIconCpu, BIconCpuFill, BIconCreditCard, BIconCreditCard2Back, BIconCreditCard2BackFill, BIconCreditCard2Front, BIconCreditCard2FrontFill, BIconCreditCardFill, BIconCrop, BIconCup, BIconCupFill, BIconCupStraw, BIconCursor, BIconCursorFill, BIconCursorText, BIconDash, BIconDashCircle, BIconDashCircleFill, BIconDashSquare, BIconDashSquareFill, BIconDiagram2, BIconDiagram2Fill, BIconDiagram3, BIconDiagram3Fill, BIconDiamond, BIconDiamondFill, BIconDiamondHalf, BIconDice1, BIconDice1Fill, BIconDice2, BIconDice2Fill, BIconDice3, BIconDice3Fill, BIconDice4, BIconDice4Fill, BIconDice5, BIconDice5Fill, BIconDice6, BIconDice6Fill, BIconDisc, BIconDiscFill, BIconDiscord, BIconDisplay, BIconDisplayFill, BIconDistributeHorizontal, BIconDistributeVertical, BIconDoorClosed, BIconDoorClosedFill, BIconDoorOpen, BIconDoorOpenFill, BIconDot, BIconDownload, BIconDroplet, BIconDropletFill, BIconDropletHalf, BIconEarbuds, BIconEasel, BIconEaselFill, BIconEgg, BIconEggFill, BIconEggFried, BIconEject, BIconEjectFill, BIconEmojiAngry, BIconEmojiAngryFill, BIconEmojiDizzy, BIconEmojiDizzyFill, BIconEmojiExpressionless, BIconEmojiExpressionlessFill, BIconEmojiFrown, BIconEmojiFrownFill, BIconEmojiHeartEyes, BIconEmojiHeartEyesFill, BIconEmojiLaughing, BIconEmojiLaughingFill, BIconEmojiNeutral, BIconEmojiNeutralFill, BIconEmojiSmile, BIconEmojiSmileFill, BIconEmojiSmileUpsideDown, BIconEmojiSmileUpsideDownFill, BIconEmojiSunglasses, BIconEmojiSunglassesFill, BIconEmojiWink, BIconEmojiWinkFill, BIconEnvelope, BIconEnvelopeFill, BIconEnvelopeOpen, BIconEnvelopeOpenFill, BIconExclamation, BIconExclamationCircle, BIconExclamationCircleFill, BIconExclamationDiamond, BIconExclamationDiamondFill, BIconExclamationOctagon, BIconExclamationOctagonFill, BIconExclamationSquare, BIconExclamationSquareFill, BIconExclamationTriangle, BIconExclamationTriangleFill, BIconExclude, BIconEye, BIconEyeFill, BIconEyeSlash, BIconEyeSlashFill, BIconEyeglasses, BIconFacebook, BIconFile, BIconFileArrowDown, BIconFileArrowDownFill, BIconFileArrowUp, BIconFileArrowUpFill, BIconFileBarGraph, BIconFileBarGraphFill, BIconFileBinary, BIconFileBinaryFill, BIconFileBreak, BIconFileBreakFill, BIconFileCheck, BIconFileCheckFill, BIconFileCode, BIconFileCodeFill, BIconFileDiff, BIconFileDiffFill, BIconFileEarmark, BIconFileEarmarkArrowDown, BIconFileEarmarkArrowDownFill, BIconFileEarmarkArrowUp, BIconFileEarmarkArrowUpFill, BIconFileEarmarkBarGraph, BIconFileEarmarkBarGraphFill, BIconFileEarmarkBinary, BIconFileEarmarkBinaryFill, BIconFileEarmarkBreak, BIconFileEarmarkBreakFill, BIconFileEarmarkCheck, BIconFileEarmarkCheckFill, BIconFileEarmarkCode, BIconFileEarmarkCodeFill, BIconFileEarmarkDiff, BIconFileEarmarkDiffFill, BIconFileEarmarkEasel, BIconFileEarmarkEaselFill, BIconFileEarmarkExcel, BIconFileEarmarkExcelFill, BIconFileEarmarkFill, BIconFileEarmarkFont, BIconFileEarmarkFontFill, BIconFileEarmarkImage, BIconFileEarmarkImageFill, BIconFileEarmarkLock, BIconFileEarmarkLock2, BIconFileEarmarkLock2Fill, BIconFileEarmarkLockFill, BIconFileEarmarkMedical, BIconFileEarmarkMedicalFill, BIconFileEarmarkMinus, BIconFileEarmarkMinusFill, BIconFileEarmarkMusic, BIconFileEarmarkMusicFill, BIconFileEarmarkPerson, BIconFileEarmarkPersonFill, BIconFileEarmarkPlay, BIconFileEarmarkPlayFill, BIconFileEarmarkPlus, BIconFileEarmarkPlusFill, BIconFileEarmarkPost, BIconFileEarmarkPostFill, BIconFileEarmarkPpt, BIconFileEarmarkPptFill, BIconFileEarmarkRichtext, BIconFileEarmarkRichtextFill, BIconFileEarmarkRuled, BIconFileEarmarkRuledFill, BIconFileEarmarkSlides, BIconFileEarmarkSlidesFill, BIconFileEarmarkSpreadsheet, BIconFileEarmarkSpreadsheetFill, BIconFileEarmarkText, BIconFileEarmarkTextFill, BIconFileEarmarkWord, BIconFileEarmarkWordFill, BIconFileEarmarkX, BIconFileEarmarkXFill, BIconFileEarmarkZip, BIconFileEarmarkZipFill, BIconFileEasel, BIconFileEaselFill, BIconFileExcel, BIconFileExcelFill, BIconFileFill, BIconFileFont, BIconFileFontFill, BIconFileImage, BIconFileImageFill, BIconFileLock, BIconFileLock2, BIconFileLock2Fill, BIconFileLockFill, BIconFileMedical, BIconFileMedicalFill, BIconFileMinus, BIconFileMinusFill, BIconFileMusic, BIconFileMusicFill, BIconFilePerson, BIconFilePersonFill, BIconFilePlay, BIconFilePlayFill, BIconFilePlus, BIconFilePlusFill, BIconFilePost, BIconFilePostFill, BIconFilePpt, BIconFilePptFill, BIconFileRichtext, BIconFileRichtextFill, BIconFileRuled, BIconFileRuledFill, BIconFileSlides, BIconFileSlidesFill, BIconFileSpreadsheet, BIconFileSpreadsheetFill, BIconFileText, BIconFileTextFill, BIconFileWord, BIconFileWordFill, BIconFileX, BIconFileXFill, BIconFileZip, BIconFileZipFill, BIconFiles, BIconFilesAlt, BIconFilm, BIconFilter, BIconFilterCircle, BIconFilterCircleFill, BIconFilterLeft, BIconFilterRight, BIconFilterSquare, BIconFilterSquareFill, BIconFlag, BIconFlagFill, BIconFlower1, BIconFlower2, BIconFlower3, BIconFolder, BIconFolder2, BIconFolder2Open, BIconFolderCheck, BIconFolderFill, BIconFolderMinus, BIconFolderPlus, BIconFolderSymlink, BIconFolderSymlinkFill, BIconFolderX, BIconFonts, BIconForward, BIconForwardFill, BIconFront, BIconFullscreen, BIconFullscreenExit, BIconFunnel, BIconFunnelFill, BIconGear, BIconGearFill, BIconGearWide, BIconGearWideConnected, BIconGem, BIconGeo, BIconGeoAlt, BIconGeoAltFill, BIconGeoFill, BIconGift, BIconGiftFill, BIconGithub, BIconGlobe, BIconGlobe2, BIconGoogle, BIconGraphDown, BIconGraphUp, BIconGrid, BIconGrid1x2, BIconGrid1x2Fill, BIconGrid3x2, BIconGrid3x2Gap, BIconGrid3x2GapFill, BIconGrid3x3, BIconGrid3x3Gap, BIconGrid3x3GapFill, BIconGridFill, BIconGripHorizontal, BIconGripVertical, BIconHammer, BIconHandIndex, BIconHandIndexThumb, BIconHandThumbsDown, BIconHandThumbsUp, BIconHandbag, BIconHandbagFill, BIconHash, BIconHdd, BIconHddFill, BIconHddNetwork, BIconHddNetworkFill, BIconHddRack, BIconHddRackFill, BIconHddStack, BIconHddStackFill, BIconHeadphones, BIconHeadset, BIconHeart, BIconHeartFill, BIconHeartHalf, BIconHeptagon, BIconHeptagonFill, BIconHeptagonHalf, BIconHexagon, BIconHexagonFill, BIconHexagonHalf, BIconHourglass, BIconHourglassBottom, BIconHourglassSplit, BIconHourglassTop, BIconHouse, BIconHouseDoor, BIconHouseDoorFill, BIconHouseFill, BIconHr, BIconImage, BIconImageAlt, BIconImageFill, BIconImages, BIconInbox, BIconInboxFill, BIconInboxes, BIconInboxesFill, BIconInfo, BIconInfoCircle, BIconInfoCircleFill, BIconInfoSquare, BIconInfoSquareFill, BIconInputCursor, BIconInputCursorText, BIconInstagram, BIconIntersect, BIconJournal, BIconJournalAlbum, BIconJournalArrowDown, BIconJournalArrowUp, BIconJournalBookmark, BIconJournalBookmarkFill, BIconJournalCheck, BIconJournalCode, BIconJournalMedical, BIconJournalMinus, BIconJournalPlus, BIconJournalRichtext, BIconJournalText, BIconJournalX, BIconJournals, BIconJoystick, BIconJustify, BIconJustifyLeft, BIconJustifyRight, BIconKanban, BIconKanbanFill, BIconKey, BIconKeyFill, BIconKeyboard, BIconKeyboardFill, BIconLadder, BIconLamp, BIconLampFill, BIconLaptop, BIconLaptopFill, BIconLayers, BIconLayersFill, BIconLayersHalf, BIconLayoutSidebar, BIconLayoutSidebarInset, BIconLayoutSidebarInsetReverse, BIconLayoutSidebarReverse, BIconLayoutSplit, BIconLayoutTextSidebar, BIconLayoutTextSidebarReverse, BIconLayoutTextWindow, BIconLayoutTextWindowReverse, BIconLayoutThreeColumns, BIconLayoutWtf, BIconLifePreserver, BIconLightning, BIconLightningFill, BIconLink, BIconLink45deg, BIconLinkedin, BIconList, BIconListCheck, BIconListNested, BIconListOl, BIconListStars, BIconListTask, BIconListUl, BIconLock, BIconLockFill, BIconMailbox, BIconMailbox2, BIconMap, BIconMapFill, BIconMarkdown, BIconMarkdownFill, BIconMenuApp, BIconMenuAppFill, BIconMenuButton, BIconMenuButtonFill, BIconMenuButtonWide, BIconMenuButtonWideFill, BIconMenuDown, BIconMenuUp, BIconMic, BIconMicFill, BIconMicMute, BIconMicMuteFill, BIconMinecart, BIconMinecartLoaded, BIconMoon, BIconMouse, BIconMouse2, BIconMouse3, BIconMusicNote, BIconMusicNoteBeamed, BIconMusicNoteList, BIconMusicPlayer, BIconMusicPlayerFill, BIconNewspaper, BIconNodeMinus, BIconNodeMinusFill, BIconNodePlus, BIconNodePlusFill, BIconNut, BIconNutFill, BIconOctagon, BIconOctagonFill, BIconOctagonHalf, BIconOption, BIconOutlet, BIconPaperclip, BIconParagraph, BIconPatchCheck, BIconPatchCheckFill, BIconPatchExclamation, BIconPatchExclamationFill, BIconPatchMinus, BIconPatchMinusFill, BIconPatchPlus, BIconPatchPlusFill, BIconPatchQuestion, BIconPatchQuestionFill, BIconPause, BIconPauseBtn, BIconPauseBtnFill, BIconPauseCircle, BIconPauseCircleFill, BIconPauseFill, BIconPeace, BIconPeaceFill, BIconPen, BIconPenFill, BIconPencil, BIconPencilFill, BIconPencilSquare, BIconPentagon, BIconPentagonFill, BIconPentagonHalf, BIconPeople, BIconPeopleFill, BIconPercent, BIconPerson, BIconPersonBadge, BIconPersonBadgeFill, BIconPersonBoundingBox, BIconPersonCheck, BIconPersonCheckFill, BIconPersonCircle, BIconPersonDash, BIconPersonDashFill, BIconPersonFill, BIconPersonLinesFill, BIconPersonPlus, BIconPersonPlusFill, BIconPersonSquare, BIconPersonX, BIconPersonXFill, BIconPhone, BIconPhoneFill, BIconPhoneLandscape, BIconPhoneLandscapeFill, BIconPhoneVibrate, BIconPieChart, BIconPieChartFill, BIconPip, BIconPipFill, BIconPlay, BIconPlayBtn, BIconPlayBtnFill, BIconPlayCircle, BIconPlayCircleFill, BIconPlayFill, BIconPlug, BIconPlugFill, BIconPlus, BIconPlusCircle, BIconPlusCircleFill, BIconPlusSquare, BIconPlusSquareFill, BIconPower, BIconPrinter, BIconPrinterFill, BIconPuzzle, BIconPuzzleFill, BIconQuestion, BIconQuestionCircle, BIconQuestionCircleFill, BIconQuestionDiamond, BIconQuestionDiamondFill, BIconQuestionOctagon, BIconQuestionOctagonFill, BIconQuestionSquare, BIconQuestionSquareFill, BIconReceipt, BIconReceiptCutoff, BIconReception0, BIconReception1, BIconReception2, BIconReception3, BIconReception4, BIconRecord, BIconRecord2, BIconRecord2Fill, BIconRecordBtn, BIconRecordBtnFill, BIconRecordCircle, BIconRecordCircleFill, BIconRecordFill, BIconReply, BIconReplyAll, BIconReplyAllFill, BIconReplyFill, BIconRss, BIconRssFill, BIconScissors, BIconScrewdriver, BIconSearch, BIconSegmentedNav, BIconServer, BIconShare, BIconShareFill, BIconShield, BIconShieldCheck, BIconShieldExclamation, BIconShieldFill, BIconShieldFillCheck, BIconShieldFillExclamation, BIconShieldFillMinus, BIconShieldFillPlus, BIconShieldFillX, BIconShieldLock, BIconShieldLockFill, BIconShieldMinus, BIconShieldPlus, BIconShieldShaded, BIconShieldSlash, BIconShieldSlashFill, BIconShieldX, BIconShift, BIconShiftFill, BIconShop, BIconShopWindow, BIconShuffle, BIconSignpost, BIconSignpost2, BIconSignpost2Fill, BIconSignpostFill, BIconSignpostSplit, BIconSignpostSplitFill, BIconSim, BIconSimFill, BIconSkipBackward, BIconSkipBackwardBtn, BIconSkipBackwardBtnFill, BIconSkipBackwardCircle, BIconSkipBackwardCircleFill, BIconSkipBackwardFill, BIconSkipEnd, BIconSkipEndBtn, BIconSkipEndBtnFill, BIconSkipEndCircle, BIconSkipEndCircleFill, BIconSkipEndFill, BIconSkipForward, BIconSkipForwardBtn, BIconSkipForwardBtnFill, BIconSkipForwardCircle, BIconSkipForwardCircleFill, BIconSkipForwardFill, BIconSkipStart, BIconSkipStartBtn, BIconSkipStartBtnFill, BIconSkipStartCircle, BIconSkipStartCircleFill, BIconSkipStartFill, BIconSlack, BIconSlash, BIconSlashCircle, BIconSlashCircleFill, BIconSlashSquare, BIconSlashSquareFill, BIconSliders, BIconSmartwatch, BIconSortAlphaDown, BIconSortAlphaDownAlt, BIconSortAlphaUp, BIconSortAlphaUpAlt, BIconSortDown, BIconSortDownAlt, BIconSortNumericDown, BIconSortNumericDownAlt, BIconSortNumericUp, BIconSortNumericUpAlt, BIconSortUp, BIconSortUpAlt, BIconSoundwave, BIconSpeaker, BIconSpeakerFill, BIconSpellcheck, BIconSquare, BIconSquareFill, BIconSquareHalf, BIconStar, BIconStarFill, BIconStarHalf, BIconStickies, BIconStickiesFill, BIconSticky, BIconStickyFill, BIconStop, BIconStopBtn, BIconStopBtnFill, BIconStopCircle, BIconStopCircleFill, BIconStopFill, BIconStoplights, BIconStoplightsFill, BIconStopwatch, BIconStopwatchFill, BIconSubtract, BIconSuitClub, BIconSuitClubFill, BIconSuitDiamond, BIconSuitDiamondFill, BIconSuitHeart, BIconSuitHeartFill, BIconSuitSpade, BIconSuitSpadeFill, BIconSun, BIconSunglasses, BIconTable, BIconTablet, BIconTabletFill, BIconTabletLandscape, BIconTabletLandscapeFill, BIconTag, BIconTagFill, BIconTags, BIconTagsFill, BIconTelephone, BIconTelephoneFill, BIconTelephoneForward, BIconTelephoneForwardFill, BIconTelephoneInbound, BIconTelephoneInboundFill, BIconTelephoneMinus, BIconTelephoneMinusFill, BIconTelephoneOutbound, BIconTelephoneOutboundFill, BIconTelephonePlus, BIconTelephonePlusFill, BIconTelephoneX, BIconTelephoneXFill, BIconTerminal, BIconTerminalFill, BIconTextCenter, BIconTextIndentLeft, BIconTextIndentRight, BIconTextLeft, BIconTextParagraph, BIconTextRight, BIconTextarea, BIconTextareaResize, BIconTextareaT, BIconThermometer, BIconThermometerHalf, BIconThreeDots, BIconThreeDotsVertical, BIconToggle2Off, BIconToggle2On, BIconToggleOff, BIconToggleOn, BIconToggles, BIconToggles2, BIconTools, BIconTrash, BIconTrash2, BIconTrash2Fill, BIconTrashFill, BIconTree, BIconTreeFill, BIconTriangle, BIconTriangleFill, BIconTriangleHalf, BIconTrophy, BIconTrophyFill, BIconTruck, BIconTruckFlatbed, BIconTv, BIconTvFill, BIconTwitch, BIconTwitter, BIconType, BIconTypeBold, BIconTypeH1, BIconTypeH2, BIconTypeH3, BIconTypeItalic, BIconTypeStrikethrough, BIconTypeUnderline, BIconUiChecks, BIconUiChecksGrid, BIconUiRadios, BIconUiRadiosGrid, BIconUnion, BIconUnlock, BIconUnlockFill, BIconUpc, BIconUpcScan, BIconUpload, BIconVectorPen, BIconViewList, BIconViewStacked, BIconVinyl, BIconVinylFill, BIconVoicemail, BIconVolumeDown, BIconVolumeDownFill, BIconVolumeMute, BIconVolumeMuteFill, BIconVolumeOff, BIconVolumeOffFill, BIconVolumeUp, BIconVolumeUpFill, BIconVr, BIconWallet, BIconWallet2, BIconWalletFill, BIconWatch, BIconWifi, BIconWifi1, BIconWifi2, BIconWifiOff, BIconWindow, BIconWrench, BIconX, BIconXCircle, BIconXCircleFill, BIconXDiamond, BIconXDiamondFill, BIconXOctagon, BIconXOctagonFill, BIconXSquare, BIconXSquareFill, BIconYoutube, BIconZoomIn, BIconZoomOut, AlertPlugin, BAlert, AspectPlugin, BAspect, AvatarPlugin, BAvatar, BAvatarGroup, BadgePlugin, BBadge, BreadcrumbPlugin, BBreadcrumb, BBreadcrumbItem, ButtonPlugin, BButton, BButtonClose, ButtonGroupPlugin, BButtonGroup, ButtonToolbarPlugin, BButtonToolbar, CalendarPlugin, BCalendar, CardPlugin, BCard, BCardBody, BCardFooter, BCardGroup, BCardHeader, BCardImg, BCardImgLazy, BCardSubTitle, BCardText, BCardTitle, CarouselPlugin, BCarousel, BCarouselSlide, CollapsePlugin, BCollapse, DropdownPlugin, BDropdown, BDropdownItem, BDropdownItemButton, BDropdownDivider, BDropdownForm, BDropdownGroup, BDropdownHeader, BDropdownText, EmbedPlugin, BEmbed, FormPlugin, BForm, BFormDatalist, BFormText, BFormInvalidFeedback, BFormValidFeedback, FormCheckboxPlugin, BFormCheckbox, BFormCheckboxGroup, FormDatepickerPlugin, BFormDatepicker, FormFilePlugin, BFormFile, FormGroupPlugin, BFormGroup, FormInputPlugin, BFormInput, FormRadioPlugin, BFormRadio, BFormRadioGroup, FormRatingPlugin, BFormRating, FormTagsPlugin, BFormTags, BFormTag, FormSelectPlugin, BFormSelect, BFormSelectOption, BFormSelectOptionGroup, FormSpinbuttonPlugin, BFormSpinbutton, FormTextareaPlugin, BFormTextarea, FormTimepickerPlugin, BFormTimepicker, ImagePlugin, BImg, BImgLazy, InputGroupPlugin, BInputGroup, BInputGroupAddon, BInputGroupAppend, BInputGroupPrepend, BInputGroupText, JumbotronPlugin, BJumbotron, LayoutPlugin, BContainer, BRow, BCol, BFormRow, LinkPlugin, BLink, ListGroupPlugin, BListGroup, BListGroupItem, MediaPlugin, BMedia, BMediaAside, BMediaBody, ModalPlugin, BModal, NavPlugin, BNav, BNavForm, BNavItem, BNavItemDropdown, BNavText, NavbarPlugin, BNavbar, BNavbarBrand, BNavbarNav, BNavbarToggle, OverlayPlugin, BOverlay, PaginationPlugin, BPagination, PaginationNavPlugin, BPaginationNav, PopoverPlugin, BPopover, ProgressPlugin, BProgress, BProgressBar, SidebarPlugin, BSidebar, SkeletonPlugin, BSkeleton, BSkeletonIcon, BSkeletonImg, BSkeletonTable, BSkeletonWrapper, SpinnerPlugin, BSpinner, TablePlugin, TableLitePlugin, TableSimplePlugin, BTable, BTableLite, BTableSimple, BTbody, BThead, BTfoot, BTr, BTh, BTd, TabsPlugin, BTabs, BTab, TimePlugin, BTime, ToastPlugin, BToast, BToaster, TooltipPlugin, BTooltip, VBHoverPlugin, VBHover, VBModalPlugin, VBModal, VBPopoverPlugin, VBPopover, VBScrollspyPlugin, VBScrollspy, VBTogglePlugin, VBToggle, VBTooltipPlugin, VBTooltip, VBVisiblePlugin, VBVisible, default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\papag-live\\node_modules\\bootstrap-vue\\esm\\index.js'");

/***/ }),

/***/ "./node_modules/bootstrap/dist/js/bootstrap.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\papag-live\\node_modules\\bootstrap\\dist\\js\\bootstrap.js'");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/hooper/dist/hooper.css":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/hooper/dist/hooper.css ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/postcss-loader/src/index.js):\nError: ENOENT: no such file or directory, open 'C:\\laragon\\www\\papag-live\\node_modules\\hooper\\dist\\hooper.css'");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/selectize/dist/css/selectize.bootstrap3.css":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/selectize/dist/css/selectize.bootstrap3.css ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/postcss-loader/src/index.js):\nError: ENOENT: no such file or directory, open 'C:\\laragon\\www\\papag-live\\node_modules\\selectize\\dist\\css\\selectize.bootstrap3.css'");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/postcss-loader/src/index.js):\nError: ENOENT: no such file or directory, open 'C:\\laragon\\www\\papag-live\\node_modules\\vue-ctk-date-time-picker\\dist\\vue-ctk-date-time-picker.css'");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-image-lightbox/dist/vue-image-lightbox.min.css":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-image-lightbox/dist/vue-image-lightbox.min.css ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/postcss-loader/src/index.js):\nError: ENOENT: no such file or directory, open 'C:\\laragon\\www\\papag-live\\node_modules\\vue-image-lightbox\\dist\\vue-image-lightbox.min.css'");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Aboutus.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Aboutus.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#contatti{\n    background-color: black;\n    letter-spacing: 2px;\n}\n#contatti a{\n    color: #fff;\n    text-decoration: none;\n}\n@media (max-width: 575.98px) {\n#contatti{padding-bottom: 800px;}\n#contatti .maps iframe{\n        width: 100%;\n        height: 450px;\n}\n}\n@media (min-width: 576px) {\n#contatti{padding-bottom: 800px;}\n#contatti .maps iframe{\n        width: 100%;\n        height: 450px;\n}\n}\n@media (min-width: 768px) {\n#contatti{padding-bottom: 350px;}\n#contatti .maps iframe{\n        width: 100%;\n        height: 850px;\n}\n}\n@media (min-width: 992px) {\n#contatti{padding-bottom: 200px;}\n#contatti .maps iframe{\n        width: 100%;\n        height: 700px;\n}\n}\n#author a{\n    color: #fff;\n    text-decoration: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Contactus.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Contactus.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#contatti{\n    background-color: black;\n    letter-spacing: 2px;\n}\n#contatti a{\n    color: #fff;\n    text-decoration: none;\n}\n.maps iframe {\n    height:300px;\n}\n@media (max-width: 575.98px) {\n#contatti{padding-bottom: 800px;}\n}\n@media (min-width: 576px) {\n#contatti{padding-bottom: 800px;}\n}\n@media (min-width: 768px) {\n#contatti{padding-bottom: 350px;}\n}\n@media (min-width: 992px) {\n#contatti{padding-bottom: 200px;}\n}\n#author a{\n    color: #fff;\n    text-decoration: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/KitchenScreen.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/KitchenScreen.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,500&display=swap);", ""]);

// module
exports.push([module.i, "\nhtml{\n    overflow-x: hidden;\n}\nbody{\n    font-family: 'Poppins', sans-serif;\n    color: #7F7F7F;\n}\nh1, h2, h3, h4, h5, h6{\n    font-family: 'Poppins', sans-serif;\n}\na{\n    text-decoration: none;\n    color: #000;\n}\nsection.header {\n    width: 100%;\n    position: fixed;\n    background: #1e0d00;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px 20px;\n    z-index: 2;\n}\nsection.header ul{\n    list-style: none;\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 0;\n}\nsection.header ul li{\n    padding: 0 20px;\n}\nsection.header ul li a{\n    color: #fff;\n    font-size: 14px;\n    font-weight: 400;\n}\nsection.header ul li a span{\n    background: #462104;\n    font-size: 11px;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    display: inline-block;\n    line-height: 20px;\n    text-align: center;\n}\nsection.dish-listing {\n    background: #fef7f2;\n    padding: 80px 0 30px 0;\n}\nsection.dish-listing ol{\n    padding: 0;\n}\nsection.dish-listing ol.dish-wrap li{\n    border: 2px dashed #c7b299;\n    width: 24%;\n    background: #fff8f3;\n    display: inline-block;\n    height: 250px;\n    vertical-align: top;\n    overflow-y: hidden;\n    margin: 0 5px 20px 5px;\n    position: relative;\n}\nsection.dish-listing ol.dish-wrap li .table-count {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n}\nsection.dish-listing ol.dish-wrap li .table-count .no{\n    font-size: 72px;\n    font-weight: bold;\n    color: #c7b299;\n    line-height: 1;\n}\nsection.dish-listing ol.dish-wrap li .table-count .t{\n    font-size: 20px;\n    font-weight: bold;\n    color: #c7b299;\n    line-height: 1;\n    text-transform: uppercase;\n}\nsection.dish-listing ol.dish-wrap li .box-status{\n    background: #fff;\n}\nsection.dish-listing ol.dish-wrap li .box-status .d-title{\n    background: #5ec5bd;\n}\nsection.dish-listing ol.dish-wrap li .box-status.status-done .d-title{\n    background: #86ba54;\n}\nsection.dish-listing ol.dish-wrap li .box-status.status-prepare .d-title{\n    background: #ba9554;\n}\nsection.dish-listing ol.dish-wrap li .top {\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.09);\n    align-items: center;\n}\nsection.dish-listing ol.dish-wrap li .top .status{\n    color: #fff;\n    font-size: 15px;\n    font-weight: 300;\n}\nsection.dish-listing ol.dish-wrap li .top .status span{\n    background: #fff;\n    font-size: 18px;\n    width: 28px;\n    height: 28px;\n    border-radius: 50%;\n    display: inline-block;\n    line-height: 30px;\n    text-align: center;\n    color: #000;\n    font-weight: bold;\n}\nsection.dish-listing ol.dish-wrap li .top .time{\n    font-size: 13px;\n    color: rgba(0, 0, 0, 0.42);\n}\nsection.dish-listing ol.dish-wrap li .bottom{\n    padding: 10px;\n}\nsection.dish-listing ol.dish-wrap li .bottom .table{\n    margin-bottom: 0;\n    font-size: 14px;\n    font-weight: bold;\n    color: rgba(0, 0, 0, 0.42);\n}\nsection.dish-listing ol.dish-wrap li .bottom .persons{\n    color: rgba(0, 0, 0, 0.42);\n    font-size: 12px;\n}\nsection.dish-listing ol.dish-wrap li .dishes {\n    overflow-y: scroll;\n    height: 140px;\n    padding: 10px 10px 0 10px;\n}\nsection.dish-listing ol.dish-wrap li .dishes ul{\n    display: flex;\n    align-items: center;\n    padding: 0;\n    flex-direction: column;\n}\nsection.dish-listing ol.dish-wrap li .dishes ul li{\n    width: 100%;\n    background: #f6f6f6;\n    border: none;\n    height: auto;\n    margin: 0 0 5px 0;\n    border-radius: 4px;\n    color: #585858;\n    font-size: 13px;\n}\nsection.dish-listing ol.dish-wrap li .dishes ul li span{\n    padding: 5px 12px;\n    background: #eeeeee;\n    display: inline-block;\n    color: #000;\n    font-weight: bold;\n    font-size: 13px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common-components/nav-menu.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common-components/nav-menu.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nnav.collapse {\n    display: block !important;\n}\nnav.collapse.show {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    z-index: 99;\n    margin-top: 0 !important;\n}\nnav.collapse.show .navbar-toggler {\n    top: 80px;\n    right: 30px;\n    position: absolute;\n}\nnav.collapse.show .navbar-collapse {\n    position: relative;\n    height: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order-page/main.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/order-page/main.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.cover {\n    background-image: url('https://res.cloudinary.com/ordering2/image/upload/f_auto,q_auto,h_800,c_limit/v1573197396/w7h69zusidjo01abgrel.jpg');\n}\n.full {\n    padding: 0;\n}\n.cover {\n    position: relative;\n    overflow: hidden;\n    max-height: 45vh;\n    height: 26.5vw;\n    background: #f5f5f5;\n    background-size: cover;\n    background-position: center;\n    margin-bottom:0;\n}\n.cover img.principal {\n    background: #f5f5f5;\n    height: 100%;\n}\n.cover img.logo.preload {\n    border: 1px solid #eee;\n    box-shadow: none;\n}\n.cover img.logo {\n    position: absolute;\n    width: 8vw;\n    height: 8vw;\n    min-width: 60px;\n    min-height: 60px;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    bottom: 5%;\n    left: 5%;\n    border-radius: 3px;\n    box-shadow: 0 0 10px 5px rgba(0,0,0,0.2);\n}\n.arabic_rtl .cover img.logo {\n    left: initial;\n    right: 5%;\n}\n.business-content {\n    padding-left: 5%;\n    background: #fff;\n    overflow:hidden;\n}\n.business-content .preorder {\n    display: inline-block;\n    padding: 0;\n    margin-bottom: 7px;\n}\n.business-content .preorder .current {\n    display: inherit;\n    background: #ddd;\n    padding: 5px 7px;\n    border-radius: 3px;\n    font-size: 14px;\n    vertical-align: middle;\n    color: #333;\n}\n.business-content .preorder .current i {\n    font-size: 18px;\n    vertical-align: middle;\n    margin-left: 5px;\n    display: inline;\n}\n.business-content p.description.preload {\n    background: #eee;\n    color: #eee;\n    width: 65%;\n}\n.business-content p.description {\n    font-size: 16px;\n}\n.business-content p.description,\n.business-content p.description.preload {\n    direction: ltr;\n}\n.arabic_rtl .business-content p.description,\n.arabic_rtl .business-content p.description.preload {\n    direction: rtl;\n}\nh3.title,\ninput.title {\n    margin: 15px 0;\n    color: #EF1962;\n    font-size: 30px;\n    direction: ltr;\n}\nh3.title.preload {\n    color: #EF1962;\n    background: #EF1962;\n    width: 35%;\n    direction: ltr;\n}\n.arabic_rtl h3.title,\n.arabic_rtl h3.title.preload {\n    direction: rtl;\n}\n.nav-tabs {\n    padding-bottom: 1px;\n    width: 100%;\n}\n#categories-tabs .dropdown {\n    cursor:pointer;\n}\n.nav-tabs.preload li a span {\n    background: #ccc;\n    color: #ccc;\n}\n.nav-tabs.preload li a.active span {\n    background: #EF1962;\n    color: #EF1962;\n}\n.nav-tabs > li.dropdown > a,\n.nav-tabs > li > a {\n    background: none;\n    text-align: center;\n    font-weight: bold;\n    font-size: 15px;\n    border-radius: 0;\n    border-bottom: 3px solid #fff;\n    box-shadow: none;\n    outline: none;\n    color: #666;\n    padding: 10px;\n}\n.nav-tabs > li > a:hover {\n    background: #fff;\n    border-color: transparent;\n    border-bottom: 3px solid #01a8fb;\n    text-decoration:none;\n}\n.nav-tabs > li > a.active {\n    border-bottom: 3px solid #01a8fb;\n}\n.nav-tabs > li.dropdown > a.open,\n.nav-tabs > li.dropdown > a.active,\n.nav-tabs > li > a.active {\n    color: #EF1962;\n    background: #fff;\n    border-color: transparent;\n    border-bottom: 3px solid #EF1962;\n}\n.nav-tabs .open > a, .nav-tabs .open > a:hover, .nav-tabs .open > a:focus {\n    border-color: transparent;\n    color: #666;\n    background: #fff;\n    box-shadow: none;\n    border-bottom: 3px solid #666;\n}\n.navbar-nav > li > .dropdown-menu {\n    max-height: 320px;\n    overflow-y: scroll;\n}\n.dropdown-menu {\n    max-height: 180px;\n    overflow-y: auto;\n    overflow-x: hidden;\n    position: absolute;\n}\n.nav-tabs .dropdown-menu > li > a {\n    color: #EF1962;\n    font-weight: bold;\n}\n.nav-tabs .dropdown-menu > li.active > a {\n    color: #666;\n    background: #fff;\n}\n.dishes-wrapper{\n    background-color: #f9f9f9;\n}\n.dishes {\n    position: static;\n    padding: 15px;\n    background: #ffffff;\n    margin: 20px 0;\n}\n.dishes div[class*=col-] {\n    padding: 10px;\n    padding-left: 10px;\n    padding-right: 10px;\n}\n.arabic_rtl .dishes div[class*=col-] {\n    float: right;\n}\n.dishes .dishe {\n    cursor: pointer;\n    background: #fff;\n    position: relative;\n    padding: 15px 10px 10px 30px;\n    border: 1px solid transparent;\n    border-radius: 2px;\n    height: 90px;\n    overflow: hidden;\n    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.08);\n}\n.dishe strong{\n    font-size: 15px;\n}\n.dishes .disheMulti {\n    cursor: pointer;\n    background: #fff;\n    position: relative;\n    padding: 10px;\n    border: 1px solid transparent;\n    border-radius: 2px;\n    height: 96px;\n    overflow: hidden;\n}\n.dishes .dishe.sold_out {\n    background: #eee;\n}\n.dishes .dishe .sold_out {\n    position: absolute;\n    background-color: #333;\n    top: 0;\n    left: 0;\n    color: #ffffff;\n    font-weight: bold;\n    font-size: 12px;\n    padding: 2px 5px;\n    border-radius: 0 0 3px 0;\n}\n.item-sold-out {\n    background: #e5e5e5;\n    padding: 12px 10px;\n    text-align: center;\n    font-weight: bold;\n    font-size: 16px;\n    border-radius: 3px;\n}\n.arabic_rtl .my_orders, .arabic_rtl .my_orders .middle-div {\n    display: flex;\n    align-items: flex-start;\n}\n.arabic_rtl .dishes .dishe img {\n    float: right;\n    margin-left: 7px;\n    margin-right: 0;\n}\n.arabic_rtl .dishes .dishe strong {\n    display: inline-flex;\n    direction: initial;\n}\n.arabic_rtl .dishes .dishe strong span:nth-of-type(2) {\n    margin-top: -.3rem;\n    margin-left: .7rem;\n}\n.dishes .dishe img {\n    width: 60px;\n    height: 60px;\n    border-radius: 4px;\n    float: left;\n    margin: 7px 0;\n    margin-right: 7px;\n}\n.dishes .dishe:hover {\n    border: 1px solid #ddd;\n}\n.dishes .dishe.preload strong {\n    background: #ccc;\n    color: #ccc;\n}\n.dishes .dishe p,\n.dishes .dishe textarea {\n    color: #777;\n    font-size: 13px;\n    height: 36px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.dishes .dishe.preload p {\n    background: #eee;\n    color: #eee;\n}\n.dishes .dishe .price {\n    float: right;\n    margin-top: -10px;\n    margin-left: 10px;\n    font-weight: normal;\n    color: #EF1962;\n}\n.dishes .dishe.preload .price span {\n    background: #EF1962;\n    color: #EF1962;\n}\n.arabic_rtl .dishes .dishe .price {\n    right: auto;\n    left: 10px;\n    direction: rtl;\n}\n.cart.bordered {\n    border-left: 1px solid #ccc;\n}\n.cart {\n    padding-bottom: 15px;\n    background:#fff;\n}\n#cart-stiky > img {\n    max-width:100%;\n}\n.arabic_rtl .cart .order {\n    direction: rtl;\n}\n.cart .order button{\n    font-size: 16px !important;\n}\nbutton.btn-gray {\n    background: #ccc;\n}\n.cart .order .table-holder {\n    overflow-y: scroll !important;\n    max-height: 50vh;\n}\n.cart .order .table-holder::-webkit-scrollbar {\n    width:3px;\n}\n.cart .order .table-holder::-webkit-scrollbar-track {\n    background: #f1f1f1;\n}\n.cart .order .table-holder::-webkit-scrollbar-thumb {\n    background: #888;\n}\n.cart .order .table-holder::-webkit-scrollbar-thumb:hover {\n    background: #555;\n}\n.cart .order table {\n    width: 100%;\n    text-align: left;\n    border-top: 1px solid #eee;\n}\n.cart .order table .mealactions{\n    display:block;\n    margin-top:2px;\n}\n.cart .order table .mealactions i{\n    background: #01a8fb;\n    padding: 2px;\n    text-align: center;\n    border-radius: 100%;\n    width: 24px;\n    height: 24px;\n    line-height: 20px;\n    margin: 0 5px 0 0;\n    color: #454545;\n}\n.cart .order table .mealactions i:before{\n}\n.cart .order .cart-money-detail{\n    background: #eee;\n}\n.cart .order .cart-money-detail ul{\n    margin:0;\n    padding:0;\n}\n.cart .order .cart-money-detail ul li.fees{\n    display:none;\n}\n.cart .order .cart-money-detail ul li{\n    display:flex;\n    width:100%;\n    align-items: center;\n    justify-content: space-between;\n    padding: 15px;\n    font-size:18px;\n    font-weight:700;\n}\n.cart .order .cart-money-detail ul li span{}\n.cart .order table tr {\n    border-top: 1px solid #eee;\n}\n.cart .order table tr td:nth-child(3) {\n    min-width: 140px;\n}\n.cart .order table tr td:nth-child(4) {\n    overflow:hidden;\n}\n.cart .order table .fees {\n    border-top: 1px solid #eee;\n}\n.cart .order table tr.fees td:nth-child(2){\n    font-weight: normal;\n}\n.cart .order table tr.fees td:first-child {\n    padding: 10px;\n}\n.cart .order table tr:last-child {\n    background:none;\n}\n.cart .order table tr td {\n    padding: 10px 5px;\n    vertical-align:middle;\n}\n.cart .order table tr td i {\n    cursor: pointer;\n    padding: 6px 7px;\n    border-radius: 15px;\n}\n.cart .order table tr td p.options {\n    font-size: 12px;\n    font-weight: normal;\n    word-break: break-all;\n}\n.cart .order table tr td i.remove {\n    background: #EF1962;\n    color: #fff;\n}\n.cart .order table tr td i.edit {\n    background: #33cd5f;\n    color: #fff;\n}\n.cart .order table tr td.highlighted {\n    color: #EF1962;\n    font-weight: bold;\n    text-align: center;\n}\n.cart .order table tr td:nth-child(2) {\n    font-weight: bold;\n}\n.cart .order table tr td:nth-child(2) span{\n    display:block;\n    text-align: right;\n    margin-right: 2px;\n}\n.cart .order table tr td:nth-child(2) span i{\n    font-style: normal;\n    font-size: 12px;\n    padding: 0;\n}\n.cart .order table tr td:nth-child(2) span,\n.cart .order table tr td:nth-child(2) i{\n    line-height: 1;\n}\n.cart .order p {\n    color: #777;\n    font-size: 20px;\n}\n.business {\n    border-right: 1px solid #ccc;\n}\n.arabic_rtl .business {\n    float: right;\n    border-right: 0;\n    border-left: 1px solid #ccc;\n}\n.form {\n    border-right: 1px solid #ccc;\n    margin-right: -1px;\n}\n.arabic_rtl .form {\n    float: right;\n    border-right: 0;\n    border-left: 1px solid #ccc;\n}\n.form .form-horizontal {\n    width: 80%;\n    margin: 20px auto;\n}\n.form .form-horizontal .form-group {\n    border-top: 1px solid #eee;\n    padding-top: 15px;\n}\n.form .form-horizontal .form-group input,\n.form .form-horizontal .form-group select {\n    height: 40px;\n    vertical-align: middle;\n}\n.form .form-horizontal .form-group input,\n.form .form-horizontal .form-group select,\n.form .form-horizontal .form-group textarea {\n    padding: 5px 20px;\n    margin-bottom: 10px;\n    border-color: #ddd;\n    font-size: 15px;\n    outline: none;\n    box-shadow: none;\n}\n.form .form-horizontal .control-label span {\n    color: #EF1962;\n}\n.form .form-horizontal .diver-type {\n    border: 0;\n}\n.form .form-horizontal p {\n    padding: 5px;\n    font-size: 17px;\n    color: #999;\n}\n.form .form-horizontal p.help-error {\n    padding: 0;\n    font-size: 13px;\n    margin-top: -6px;\n    color: #f45353;\n}\n.form .form-horizontal p.input {\n    padding: 9px 20px;\n    border: 1px solid #ddd;\n    font-size: 15px;\n    border-radius: 4px;\n    cursor: pointer;\n}\n.form .form-horizontal p.input i {\n    float: right;\n    font-size: 20px;\n}\n.arabic_rtl .form .form-horizontal p.input i {\n    float: left;\n}\n.form.form-popup {\n    border: 0;\n}\n.form.form-popup .form-horizontal .form-group {\n    border: 0;\n}\n.form.form-popup .form-horizontal {\n    margin: 0;\n    width: 100%;\n}\n.diver-type.checkout {\n    margin: 0;\n    background: inherit;\n    min-height: auto;\n}\n.diver-type.checkout .item-radio input:checked + .radio-content .dynamic-radio:before,\n.diver-type.checkout .item-radio input + .radio-content .dynamic-radio:before {\n    font-size: 30px;\n    color: #EF1962;\n}\n.diver-type.checkout .item-radio input:checked + .radio-content .text-radio,\n.diver-type.checkout .item-radio input + .radio-content .text-radio {\n    line-height: 30px;\n    font-weight: normal;\n}\n#add-product.modal{\n    padding-left:0 !important;\n}\n.modal.fullscreen {\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    border-radius: 0;\n}\n.checkout-header .buttons {\n    width: 100%;\n    background: #fff;\n    border-bottom: 1px solid #ccc;\n    padding: 7px 0;\n}\n.checkout-header .buttons button {\n    font-size: 17px;\n    padding: 8px 35px;\n}\n.checkout-header h1 {\n    padding: 8% 0;\n    color: #fafafa;\n    font-size: 2.25em;\n}\n.checkout-header h1 small {\n    color: #fafafa;\n}\n.checkout {\n    margin-top: 20px;\n    margin-bottom: 20px;\n    background: #f9f9f9;\n}\n.checkout .content {\n    padding: 0 25px;\n}\n.checkout .content .information tr td:first-child {\n    padding-right: 20px;\n}\n.checkout .content .information tr td:last-child {\n    padding-left: 20px;\n}\n@media (max-width: 767.98px) {\n.to {\n        padding-top: 20px !important;\n        padding-bottom: 0px !important;\n}\n.chat .messages .message.to {\n        padding-top: 0!important;\n}\n}\n.checkout .content table {\n    width: 100%;\n}\n.checkout .header {\n    background: #EF1962;\n    color: #fafafa;\n    text-align: center;\n}\n.checkout .header {\n    padding: 15px;\n}\n.checkout .header h2 small {\n    color: #fafafa;\n}\n.checkout .content table tbody {\n    border-bottom: 1px solid #ddd;\n}\n.checkout .content table tbody:last-child {\n    border-bottom: 0;\n}\n.checkout .content table tbody tr td {\n    width: 50%;\n    font-size: 16px;\n    color: #333;\n}\n.checkout .content table tbody tr:first-child td:first-child {\n    padding-top: 20px;\n}\n.checkout .content table tbody tr:first-child td:last-child {\n    padding-bottom: 20px;\n}\n.checkout .content table tbody tr.title td {\n    text-align: left !important;\n    font-size: 20px;\n    color: #333;\n}\n.arabic_rtl .checkout .content table tbody tr.title td {\n    text-align: right !important;\n}\n.checkout .content table tbody tr:last-child td {\n    padding-bottom: 15px;\n}\n.checkout .content table tbody tr td:first-child {\n    padding: 3px;\n}\n.checkout .content table tbody tr td:first-child {\n    padding-left: 20px;\n}\n.checkout .content table tbody tr td:last-child {\n    padding-right: 20px;\n}\n.checkout .content table tbody.price tr td:nth-child(2) {\n    text-align: right!important;\n}\n.checkout .content table tbody tr td i {\n    color: #999;\n}\n.checkout .content table tbody tr td span {\n    color: #EF1962;\n}\n.checkout .content table tbody tr td span.omit {\n    color: #333!important;\n}\n.checkout .content table tbody tr td p {\n    font-size: 14px;\n}\n.checkout .content table tbody tr td p span {\n    color: #999;\n}\n.checkout .content table tbody.footer {\n    background: #f9f9f9;\n    text-align: center;\n    position: static;\n    height: auto;\n}\n.checkout .content table tbody.footer tr td {\n    padding: 15px;\n    color: #777;\n    font-size: 18px;\n    border-bottom: 0;\n}\n.popup {\n    border-radius: 7px;\n}\n.popup.big {\n    width: 90%;\n    left: 5%;\n    right: 5%;\n    bottom: 5%!important;\n}\n.modal .popup-mode {\n    padding: 20px 30px;\n    background: #fff;\n}\n.safari-browser{\n    padding-right: env(safe-area-inset-bottom);\n}\n.modal .close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    font-size: 25px;\n    padding: 15px;\n    z-index: 999;\n    font-weight: normal;\n}\n.modal .close.share {\n    right: 3.5rem;\n}\n.arabic_rtl .modal .close {\n    top: 0;\n    left: 0;\n    right: auto;\n}\n.arabic_rtl .modal .close.share {\n    left: 3.5rem;\n}\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n.modal .close {\n        position: absolute;\n}\n}\n.categories-tabs,\n#categories-tabs,\n#categories-tabss {\n    background: #fff;\n}\n.offset-categories {\n    /*height: 46px;*/\n    overflow: unset !important;\n}\n.nav.nav-tabs.editor {\n    height: auto;\n}\n.nav.nav-tabs {\n    height: 46px;\n    overflow: hidden;\n    align-items: center;\n}\n.nav-tabs.three > li {\n    width: 33.3333333333%;\n}\n.nav-tabs.four > li {\n    width: 25%;\n}\n.nav-tabs.four > li > a,\n.nav-tabs.three > li > a {\n    white-space: initial;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    padding: 2px;\n    font-size: 90%;\n    height: 44px;\n}\n.offset-categories.editor {\n    height: auto;\n}\n#categories-tabs.fixed,\n#cart-stiky.fixed {\n    position: fixed;\n    top: 0;\n    z-index: 9;\n    top: 70px;\n    z-index: 9;\n    right: 0;\n}\n#cart-stiky.fixed.bottom {\n    top: initial;\n    bottom: 0;\n}\n.navbar .dropdown a {\n    padding: 11px 15px 12px 15px;\n}\n.navbar .dropdown .dropdown-toggle label.round {\n    border: 1px solid #EF1962;\n    padding: 3px 7px;\n    border-radius: 3px;\n    cursor: pointer;\n    margin-bottom: 0;\n}\n.view-more {\n    border: 0;\n    color: #EF1962;\n    font-weight: bold;\n    float: none;\n}\n.bottom-wrap {\n    height: auto;\n    white-space: normal;\n}\n.category-image {\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    margin-right: 15px !important;\n}\n.title-category {\n    vertical-align: middle;\n    width: 100%;\n    padding: 15px 5px;\n    font-size: 20px;\n    font-weight: bold;\n}\n.cart_badge {\n    position: absolute;\n    left: 0;\n    top: 0;\n    padding: 0 3px;\n    min-width: 2rem;\n    text-align: center;\n    color: white;\n}\n.product-search {\n    width: 100%;\n    background: #fff;\n    border-bottom: 1px solid #ccc;\n    padding: 10px;\n    margin-bottom: 0;\n}\n.product-search .input-group input.form-control {\n    border-color: #ccc!important;\n    height: auto;\n    padding: 7px;\n    font-size: 14px;\n}\n.product-search .input-group-addon:first-child,\n.product-search .input-group-addon {\n    border-color: #ccc;\n    color: #ccc;\n    padding: 4px 7px 5px 0;\n    font-size: 20px;\n}\n.tbl_cart_list .form-group {\n    min-width: 56px;\n    max-width: 56px;\n    margin-top: .5rem;\n    margin-left: .5rem;\n}\n.tbl_cart_list .form-group select.form-control {\n    padding: 2px 10px;\n    height: 32px;\n    border:0;\n}\n.bottom-cont div a,\n.btn.btn-primary,\n.button.button-positive,\n.cart .order table tr td i.remove,\n.checkbox input:checked+.checkbox-icon:before,\n.checkbox input:checked:before {\n    background-color: #01a8fb;\n    border-color: #01a8fb;\n    color: #fff !important\n}\n.btn-primary.disabled:hover,\n.btn-primary[disabled]:hover,\n.btn.btn-primary:active,\n.button.button-positive.activated,\n.button.button-positive.active,\n.button.button-positive:active,\n.item-btn a.button.activated {\n    background-color: #000;\n    border-color: #000;\n    color: #fff\n}\n.input-group-addon,\n.input-group-addon:first-child,\n.pre-checkout .address .info .action button {\n    border-color: #01a8fb;\n    color: #01a8fb\n}\n.modal .popup-mode .tab-item-cont .button-bar .tab.active,\n.nav-tabs>li.dropdown>a.active,\n.nav-tabs>li.dropdown>a.open,\n.nav-tabs>li>a.active {\n    color: #01a8fb;\n    border-bottom-color: #01a8fb\n}\n.navbar-default .navbar-nav>li>a:hover,\n.view-more:active,\na:hover {\n    color: #b49334\n}\n.navbar-default .navbar-nav>li>a.cart label,\n.switcher__toggle {\n    background-color: #01a8fb\n}\n.navbar-default .navbar-nav>li>a.cart.empty label {\n    border-color: #01a8fb;\n    color: #01a8fb\n}\n.navbar .dropdown .dropdown-toggle label.round {\n    border-color: #01a8fb\n}\n.dishes .dishe.preload .price span,\n.nav-tabs.preload li a.active span,\nh3.title.preload {\n    background: #01a8fb;\n    color: #01a8fb\n}\n.addr_tag_item.active,\n.badge-cont,\n.thumbnail .cartel.featured {\n    background: #01a8fb\n}\n.btn-badge-cont,\n.row-eq-height .unread-messages {\n    background-color: #b49334;\n    color: #fff\n}\n.checkout .header,\n.form.editable .group ul.tree .treecheckbox.check .icheckbox,\n.form.editable .group ul.tree .treecheckbox.indeterminate .icheckbox,\n.go-cart,\n.navbar-default .navbar-nav>li label.notifications .count,\ntable .count {\n    background: #01a8fb;\n    color: #fff\n}\n.spinner.spinner-assertive {\n    stroke: #01a8fb;\n    fill: #01a8fb\n}\n.offset-categories.editor .nav-tabs>li>.category.selected {\n    border-bottom-color: #01a8fb\n}\n.webtabs .tab.active {\n    color: #01a8fb;\n    border-bottom: 3px solid #01a8fb\n}\ninput[readonly].form-control.home-address {\n    border: 1px solid #01a8fb !important;\n    border-left: 0 !important\n}\n.check-box i {\n    color: #01a8fb\n}\n.color-primary {\n    color: #01a8fb\n}\n.color-secundary {\n    color: #fff\n}\n.background-primary {\n    background-color: #01a8fb\n}\n.background-secondary {\n    background-color: #fff\n}\n.border-primary {\n    border-color: #01a8fb\n}\n.border-secondary {\n    border-color: #fff\n}\n.color-primary-active:active,\n.color-primary-checked:checked,\n.color-primary-hover:hover,\n.color-primary-visited:visited {\n    color: #b49334\n}\n.background-primary-active:active,\n.background-primary-checked:checked,\n.background-primary-hover:hover,\n.background-primary-visited:visited {\n    background-color: #b49334\n}\n.border-primary-active:active,\n.border-primary-checked:checked,\n.border-primary-hover:hover,\n.border-primary-visited:visited {\n    border-color: #b49334\n}\n.nav-tabs .dropdown-menu>li>a {\n    display:block;\n    padding:3px 20px;\n    line-height:1.4;\n}\n.loading {\n    position: fixed;\n    z-index: 999;\n    height: 2em;\n    width: 2em;\n    overflow: show;\n    margin: auto;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n}\n.loading:before {\n    content: '';\n    display: block;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0, .8));\n\n    background: -webkit-radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0,.8));\n}\n.loading:not(:required) {\n    font: 0/0 a;\n    color: transparent;\n    text-shadow: none;\n    background-color: transparent;\n    border: 0;\n}\n.loading:not(:required):after {\n    content: '';\n    display: block;\n    font-size: 10px;\n    width: 1em;\n    height: 1em;\n    margin-top: -0.5em;\n    -webkit-animation: spinner 150ms infinite linear;\n    animation: spinner 150ms infinite linear;\n    border-radius: 0.5em;\n    box-shadow: rgba(255,255,255, 0.75) 1.5em 0 0 0, rgba(255,255,255, 0.75) 1.1em 1.1em 0 0, rgba(255,255,255, 0.75) 0 1.5em 0 0, rgba(255,255,255, 0.75) -1.1em 1.1em 0 0, rgba(255,255,255, 0.75) -1.5em 0 0 0, rgba(255,255,255, 0.75) -1.1em -1.1em 0 0, rgba(255,255,255, 0.75) 0 -1.5em 0 0, rgba(255,255,255, 0.75) 1.1em -1.1em 0 0;\n}\n.dish_title .dish_price{\n    float:right;\n}\n@-webkit-keyframes spinner {\n0% {\n        transform: rotate(0deg);\n}\n100% {\n        transform: rotate(360deg);\n}\n}\n@keyframes spinner {\n0% {\n        transform: rotate(0deg);\n}\n100% {\n        transform: rotate(360deg);\n}\n}\n.mobile-tabs,\n.mobile-cart-button{\n    display:none;\n}\n#cart-stiky{\n    direction: ltr;\n    text-align: center;\n    width: 100%;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 128px;\n}\n.desktop-tabs{\n    max-width:100%;\n    overflow-x:scroll !important;\n    margin-bottom:5px;\n}\n.desktop-tabs ul.nav.nav-tabs{\n    flex-wrap: nowrap;\n    overflow: visible;\n    width: auto;\n}\n.nav-tabs > li.dropdown > a, .nav-tabs > li{\n    display: inline-block;\n    flex: 0 0 auto;\n}\n.nav-tabs > li.dropdown > a, .nav-tabs > li{\n    display:block;\n}\n.desktop-tabs::-webkit-scrollbar {\n    height: 5px;\n    width: 5px;\n    border: 1px solid #d5d5d5;\n}\n.desktop-tabs::-webkit-scrollbar-track {\n    background: #f1f1f1;\n}\n.desktop-tabs::-webkit-scrollbar-thumb {\n    background: #888;\n}\n.desktop-tabs::-webkit-scrollbar-thumb:hover {\n    background: #555;\n}\n@media (max-width: 767px) {\n.increment-buttons {\n}\n.mobile-tabs{\n        display:flex;\n}\n.nav-tabs > li.dropdown > a, .nav-tabs > li {\n}\n.nav.nav-tabs.mobile-tabs {\n        height:auto;\n}\n.dishes .dishe{\n        height:auto;\n}\n.dishes .dishe p, .dishes .dishe textarea{\n        height: auto;\n}\n.mobile-cart-button{\n        position: fixed;\n        bottom: 0;\n        background-color: #01a8fb ;\n        border-color: #01a8fb ;\n        font-weight: 600;\n        font-size: 16px;\n        width: 100%;\n        left: 0;\n        padding: 20px;\n        justify-content: space-around;\n        cursor:pointer;\n        height: 64px;\n        display:block;\n        transition: all ease-in-out 0.3s;\n        z-index: 2;\n}\n.mobile-cart-button .inner {\n        display: flex;\n        width: 100%;\n        justify-content: space-between;\n        align-items: center;\n        margin-bottom:20px;\n        transition: all 0.5s ease-in;\n}\n.mobile-cart-button .inner span{\n        color: #000;\n}\n.mobile-cart-button .inner span.text:after{\n        margin-left:5px;\n        content: \"\";\n        display: inline-block;\n        font: normal normal normal 14px/1 Font Awesome 5 Free;\n        font-size: inherit;\n        text-rendering: auto;\n        -webkit-font-smoothing: antialiased;\n        display: none;\n}\n.mobile-cart-button.cartheight .inner span.text:after{\n        margin-left:5px;\n        content: \"\";\n        display: inline-block;\n        font: normal normal normal 14px/1 Font Awesome 5 Free;\n        font-size: inherit;\n        text-rendering: auto;\n        -webkit-font-smoothing: antialiased;\n}\n.mobile-cart-button svg{\n        filter: brightness(0);\n        display: inline-block;\n        vertical-align: sub;\n}\n#add-product.modal .modal-dialog {\n        transform: none;\n        width: 100%;\n        max-width: 100%;\n        height: 100vh;\n        margin:0;\n        align-items: flex-start;\n}\n#add-product.modal .modal-dialog .modal-content{\n        overflow: hidden;\n        padding-bottom:60px;\n}\n#add-product.modal .count-footer {\n        justify-content: space-between;\n        align-items: center;\n        position: fixed;\n        bottom: 0;\n        left: 10px;\n        padding: 10px 0;\n        background: #343a40;\n        right: 10px;\n}\n#add-product.modal .count-footer h3{\n        display:none;\n}\n.cartheight{\n        height: 70vh;\n}\n.cartheight>ul {\n        margin:0;\n        padding:0;\n        max-height: 250px;\n        overflow-y: scroll;\n}\n.cartheight>ul>li{\n        display:flex;\n        font-size:14px;\n        border-top: 1px dashed #414141;\n        padding: 10px 0;\n        width:100%;\n        justify-content: space-between;\n}\n.cartheight>ul>li>span{\n        padding:5px;\n        color: #000;\n}\n.cartheight>ul>li>span.qty{\n        flex: 0 0 50px;\n        min-width: 50px;\n        position: relative;\n        padding-right: 25px;\n}\n.cartheight>ul>li>span.qty .qtyincrement{\n        display: inline-block;\n        vertical-align: middle;\n        position: absolute;\n        left: 0;\n        top: -7px;\n}\n.cartheight>ul>li>span.qty .qtyincrement i{\n        display: block;\n        margin: 5px 0;\n        font-size:15px\n}\n.cartheight>ul>li>span.meal{\n        flex: 0 0 calc(100% - 115px);\n}\n.cartheight>ul>li>span.meal ul{\n        margin: 0;\n        padding: 0;\n}\n.cartheight>ul>li>span.meal ul li{\n        margin-bottom:2px;\n        font-size:12px;\n        display:block;\n}\n.cartheight>ul>li>span.prices{\n        flex:0 0 100px;\n        width:100px;\n}\n.cartheight>ul>li>span.meal .mealactions{\n        display:block;\n        margin-top:2px;\n}\n.cartheight>ul>li>span.meal .mealactions i{\n        background: #f1f1f1;\n        padding: 2px;\n        text-align: center;\n        border-radius: 100%;\n        width: 22px;\n        height: 22px;\n        line-height: 19px;\n        margin: 0 5px 0 0;\n        color: #454545;\n}\n.cartheight>ul>li>span.meal .mealactions i:before{\n        margin-left: 1px;\n}\n.cartheight .confirm-btn{\n        text-align:center;\n        position: fixed;\n        width: 100%;\n        bottom: 30px;\n        background: #fff;\n        box-shadow: 0px -4px 5px #0000000f;\n}\n.cartheight .confirm-btn .anima-btn{\n        color: #000 !important;\n        margin-top: 20px;\n        border: 1px solid #000;\n        border-radius: 0;\n}\n.cartheight .confirm-btn .anima-btn:focus{\n        outline:0;\n        box-shadow:none;\n}\n.cartheight .confirm-btn .move-eff span{\n        top: 3px;\n        left: 0;\n        font-size: 16px;\n}\n}\n.cart-menu-fixed .offset-categories{\n    position: fixed;\n    top: 0;\n    z-index: 1000;\n    width: calc(100% - 25%);\n    margin-top: 0;\n    padding-top: 0 !important;\n    border-right: 1px solid rgba(0,0,0,0);\n}\n.cart-menu-fixed .offset-categories{\n    width: 100%;\n}\n.business > div.dishes-wrapper {\n    padding-top: 2px !important;\n}\n.business > div.offset-categories {\n    padding-bottom: 0 !important;\n}\n.cart-menu-fixed .business > div.dishes-wrapper {\n    padding-top: 190px !important;\n}\n@media (max-width: 767px) {\n.cartheight .mb-cart-box{\n      overflow-y: scroll !important;\n      height: 77vh;\n}\n.cart-menu-fixed .offset-categories {\n        width: 100%;\n        z-index: 2;\n}\n.cart-menu-fixed .business > div.dishes-wrapper {\n        padding-top: 210px !important;\n}\n.mealactions a {\n        margin-right: 24px;\n        margin-right: 6px;\n        position: relative;\n        top: -6px;\n}\nspan.price {\n        position: relative;\n        top: -4px;\n        font-size: 18px;\n}\n.mb-cart-box ul li span.qty {\n        flex: 0 0 50px;\n        min-width: 50px;\n        position: relative;\n        padding-left:0;\n        border: 1px solid #ddd;\n        display: flex;\n        align-items: center;\n        border-radius: 4px;\n        justify-content: space-between;\n        padding:0 10px;\n        margin-bottom: 15px;\n        margin-top: 15px;\n}\n.mb-cart-box ul li span.qty i{\n        font-style: normal;\n        font-size: 26px !important;\n        background: #ccc;\n        width: 30px;\n        text-align: center;\n        border-radius: 50%;\n        height: 30px;\n        line-height: 30px;\n}\n.mb-cart-box svg {\n        filter: brightness(0);\n        display: inline-block;\n        vertical-align: sub;\n}\n.mb-cart-box ul li span.meal {\n        margin-right: 20px;\n}\n.mb-cart-box ul li span.meal .mealactions {\n        display: inline-block;\n        margin-top: 2px;\n        margin-left: 10px;\n}\n.mb-cart-box ul li price {\n        padding: 5px;\n        color: #000;\n        margin-left: 10px;\n}\n.qty.mob span {\n        padding: 15px;\n}\n.offset-categories {\n        position: fixed;\n        top: -100%;\n        z-index: 1000;\n        width: calc(100% - 0%);\n        margin-top: 0;\n        padding-top: 0 !important;\n        border-right: 1px solid rgba(0,0,0,0);\n}\n.cartheight .mb-cart-box ul.cart-list {\n        list-style: none;\n        border: 1px solid #ccc;\n        margin-bottom: 10px;\n}\n.mb-cart-box ul li {\n      text-align: left;\n      display: flex;\n      padding: 15px;\n      flex-direction: column;\n}\n.mb-cart-box ul li .m-box{\n      display: flex;\n      justify-content: space-between;\n}\n.mb-cart-box ul li .m-box h5{\n      font-size: 18px;\n      font-weight: bold;\n}\n.mb-cart-box ul li .m-box ul li{\n      padding: 0;\n}\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\papag-live\\node_modules\\css-loader\\lib\\css-base.js'");

/***/ }),

/***/ "./node_modules/hooper/dist/hooper.css":
/*!*********************************************!*\
  !*** ./node_modules/hooper/dist/hooper.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../postcss-loader/src??ref--6-2!./hooper.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/hooper/dist/hooper.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/hooper/dist/hooper.esm.js":
/*!************************************************!*\
  !*** ./node_modules/hooper/dist/hooper.esm.js ***!
  \************************************************/
/*! exports provided: default, Hooper, Icon, Navigation, Pagination, Progress, Slide, addonMixin */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\papag-live\\node_modules\\hooper\\dist\\hooper.esm.js'");

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\papag-live\\node_modules\\jquery\\dist\\jquery.js'");

/***/ }),

/***/ "./node_modules/lingallery/dist/lingallery.umd.js":
/*!********************************************************!*\
  !*** ./node_modules/lingallery/dist/lingallery.umd.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\papag-live\\node_modules\\lingallery\\dist\\lingallery.umd.js'");

/***/ }),

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\papag-live\\node_modules\\lodash\\lodash.js'");

/***/ }),

/***/ "./node_modules/moment/moment.js":
/*!***************************************!*\
  !*** ./node_modules/moment/moment.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\papag-live\\node_modules\\moment\\moment.js'");

/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\papag-live\\node_modules\\popper.js\\dist\\esm\\popper.js'");

/***/ }),

/***/ "./node_modules/selectize/dist/css/selectize.bootstrap3.css":
/*!******************************************************************!*\
  !*** ./node_modules/selectize/dist/css/selectize.bootstrap3.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader??ref--6-1!../../../postcss-loader/src??ref--6-2!./selectize.bootstrap3.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/selectize/dist/css/selectize.bootstrap3.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Aboutus.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Aboutus.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Aboutus.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Aboutus.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Contactus.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Contactus.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Contactus.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Contactus.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/KitchenScreen.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/KitchenScreen.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./KitchenScreen.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/KitchenScreen.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common-components/nav-menu.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common-components/nav-menu.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./nav-menu.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common-components/nav-menu.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order-page/main.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/order-page/main.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order-page/main.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\papag-live\\node_modules\\style-loader\\lib\\addStyles.js'");

/***/ }),

/***/ "./node_modules/v-click-outside/dist/v-click-outside.umd.js":
/*!******************************************************************!*\
  !*** ./node_modules/v-click-outside/dist/v-click-outside.umd.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\papag-live\\node_modules\\v-click-outside\\dist\\v-click-outside.umd.js'");

/***/ }),

/***/ "./node_modules/vee-validate/dist/vee-validate.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/vee-validate/dist/vee-validate.esm.js ***!
  \************************************************************/
/*! exports provided: default, ErrorBag, Rules, ValidationObserver, ValidationProvider, Validator, directive, install, mapFields, mixin, version, withValidation */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\papag-live\\node_modules\\vee-validate\\dist\\vee-validate.esm.js'");

/***/ }),

/***/ "./node_modules/vue-credit-card-validation/dist/vue-credit-card-validation.esm.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/vue-credit-card-validation/dist/vue-credit-card-validation.esm.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\papag-live\\node_modules\\vue-credit-card-validation\\dist\\vue-credit-card-validation.esm.js'");

/***/ }),

/***/ "./node_modules/vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.common.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.common.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\papag-live\\node_modules\\vue-ctk-date-time-picker\\dist\\vue-ctk-date-time-picker.common.js'");

/***/ }),

/***/ "./node_modules/vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../postcss-loader/src??ref--6-2!./vue-ctk-date-time-picker.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-easy-lightbox/dist/vue-easy-lightbox.es5.esm.min.js":
/*!******************************************************************************!*\
  !*** ./node_modules/vue-easy-lightbox/dist/vue-easy-lightbox.es5.esm.min.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\papag-live\\node_modules\\vue-easy-lightbox\\dist\\vue-easy-lightbox.es5.esm.min.js'");

/***/ }),

/***/ "./node_modules/vue-gallery/dist/js/vue-gallery.js":
/*!*********************************************************!*\
  !*** ./node_modules/vue-gallery/dist/js/vue-gallery.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\papag-live\\node_modules\\vue-gallery\\dist\\js\\vue-gallery.js'");

/***/ }),

/***/ "./node_modules/vue-image-lightbox/dist/vue-image-lightbox.min.css":
/*!*************************************************************************!*\
  !*** ./node_modules/vue-image-lightbox/dist/vue-image-lightbox.min.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../postcss-loader/src??ref--6-2!./vue-image-lightbox.min.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-image-lightbox/dist/vue-image-lightbox.min.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Aboutus.vue?vue&type=template&id=504e3ed0&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Aboutus.vue?vue&type=template&id=504e3ed0& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [_c("header-menu"), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1)],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row " }, [
        _c("div", { staticClass: "aboutuspage col-12 px-0" }, [
          _c("div", { staticClass: "container-fluid about-content" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-8 col-md-6 col-sm-12" }, [
                _c("div", { staticClass: "image-holder about-us-banner1" }, [
                  _c("div", { staticClass: "first-about-us" }, [
                    _c("h2", [_vm._v("About Us")]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "We are an independent family owned business which thrives on \n                                    delivering customers with a variety of cuisines and excellent customer service. We understand our customers have varying preferences within a family, therefore, with our extensive menu we believe we offer a “one stop shop” which caters for all. Most \\excitingly, we have a great Vegan menu, hopefully this means you don’t need to order from 2 places and have the \n                                    inconvenience of making sure they get delivered at the same time so that you can enjoy your takeaway together."
                      ),
                    ]),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-4 col-md-6 col-sm-12" }, [
                _c("div", { staticClass: "about-us-banner2" }),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-8 col-md-6 col-sm-12" }, [
                _c("div", { staticClass: "about-content-tow" }, [
                  _c("p", [
                    _vm._v(
                      "Based in Coventry the City of Culture, we pride ourselves in serving the local community with quality produce and ingredients. We have a wealth of experience and a great ethos for delivering consistently high levels of customer satisfaction."
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-4" }),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container-fluid bottom-section mt-0" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "footer mt-0" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-5 footer-left" }, [
                _c("p", [
                  _vm._v("© 2020 "),
                  _c("span", [_vm._v("All rights reserved")]),
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [_vm._v("Site by")]),
                  _vm._v(" "),
                  _c("a", { attrs: { href: "#" } }, [_vm._v("PapaGes")]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-2 footer-logo" }, [
                _c("img", {
                  attrs: { src: "public/images/mainlogo.png", alt: "logo" },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-5 footer-right" }, [
                _c("p", [
                  _c("span", [_vm._v("Email:")]),
                  _vm._v(" "),
                  _c("a", { attrs: { href: "#" } }, [
                    _vm._v("support@papages.com"),
                  ]),
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [_vm._v("Phone:")]),
                  _vm._v(" +44 121 242 2020"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "footer-social" }, [
                  _c("a", { attrs: { href: "#" } }, [
                    _c("i", { staticClass: "fa fa-facebook-f" }),
                  ]),
                  _vm._v(" "),
                  _c("a", { attrs: { href: "#" } }, [
                    _c("i", { staticClass: "fa fa-twitter" }),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Checkout.vue?vue&type=template&id=715e4fb1&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Checkout.vue?vue&type=template&id=715e4fb1& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "for-checkout-only" },
      [
        _c("header-menu"),
        _vm._v(" "),
        _c("section", { staticClass: "inner-section check-out-page" }, [
          _vm.loading
            ? _c("div", { staticClass: "loading" }, [_vm._v("Loading…")])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                {
                  staticClass:
                    "col-sm-12 checkoutpage col-lg-8 col-md-8 col-sm-8 checkout-cart-form",
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      {
                        staticClass: "col-sm-12  col-md-10",
                        attrs: { id: "mainSection" },
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "row section-border order-check" },
                          [
                            _c("div", { staticClass: "col-12" }),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-sm-12" }, [
                              _c("label", [
                                _vm._v(_vm._s(_vm.form.order_type) + " Time"),
                              ]),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.deliveryTime,
                                      expression: "form.deliveryTime",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: { id: "delivery_time" },
                                  on: {
                                    change: function ($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call(
                                          $event.target.options,
                                          function (o) {
                                            return o.selected
                                          }
                                        )
                                        .map(function (o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.form,
                                        "deliveryTime",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    },
                                  },
                                },
                                [
                                  _c("option", { attrs: { value: "" } }, [
                                    _vm._v(
                                      "Please select " +
                                        _vm._s(_vm.form.order_type) +
                                        " Time"
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _vm._l(_vm.slots, function (slot) {
                                    return _c("option", [_vm._v(_vm._s(slot))])
                                  }),
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c("br"),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-12" }, [
                              _c(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.form.order_type == "Delivery",
                                      expression:
                                        "form.order_type == 'Delivery'",
                                    },
                                  ],
                                  staticClass: "row",
                                },
                                [
                                  _vm._m(0),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-sm-6" }, [
                                    _c("label", [_vm._v("Address ")]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.address,
                                          expression: "form.address",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        id: "address",
                                        name: "address",
                                        required: "",
                                        placeholder: "Address",
                                      },
                                      domProps: { value: _vm.form.address },
                                      on: {
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "address",
                                            $event.target.value
                                          )
                                        },
                                      },
                                    }),
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-sm-6" }, [
                                    _c("label", [_vm._v("Street *")]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.street,
                                          expression: "form.street",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        id: "street",
                                        required: "",
                                        state: true,
                                        placeholder: "street",
                                      },
                                      domProps: { value: _vm.form.street },
                                      on: {
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "street",
                                            $event.target.value
                                          )
                                        },
                                      },
                                    }),
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-sm-6" }, [
                                    _c(
                                      "label",
                                      { staticClass: "col-form-label" },
                                      [_vm._v("Town *")]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.town,
                                          expression: "form.town",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        id: "town",
                                        required: "",
                                        placeholder: "abc town",
                                      },
                                      domProps: { value: _vm.form.town },
                                      on: {
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "town",
                                            $event.target.value
                                          )
                                        },
                                      },
                                    }),
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-sm-6 mb-2" }, [
                                    _c(
                                      "label",
                                      { staticClass: "col-form-label" },
                                      [_vm._v("Postal Code *")]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.postal_code,
                                          expression: "form.postal_code",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        id: "postalcode",
                                        required: "",
                                        placeholder: "wc2h 9ah",
                                      },
                                      domProps: { value: _vm.form.postal_code },
                                      on: {
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "postal_code",
                                            $event.target.value
                                          )
                                        },
                                      },
                                    }),
                                  ]),
                                ]
                              ),
                            ]),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "row  section-border check-form" },
                          [
                            _vm._m(1),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-sm-4" }, [
                              _c("label", { staticClass: "col-form-label" }, [
                                _vm._v("Name"),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.name,
                                    expression: "form.name",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  id: "name",
                                  required: "",
                                  placeholder: "Enter Name",
                                },
                                domProps: { value: _vm.form.name },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "name",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-sm-4" }, [
                              _c("label", { staticClass: "col-form-label" }, [
                                _vm._v("Email"),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.email,
                                    expression: "form.email",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  required: "",
                                  id: "email",
                                  placeholder: "abc@example.com",
                                },
                                domProps: { value: _vm.form.email },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "email",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-sm-4" }, [
                              _c("label", { staticClass: "col-form-label" }, [
                                _vm._v("Number"),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.number,
                                    expression: "form.number",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  required: "",
                                  id: "phone",
                                  placeholder: "Enter Number",
                                },
                                domProps: { value: _vm.form.number },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "number",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "row border-dashed payment-sec" },
                          [
                            _c(
                              "div",
                              { staticClass: "col-sm-12 cash-delivery" },
                              [
                                _c("h3", [_vm._v("Payment")]),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  {
                                    staticClass:
                                      "customradiobutton radioiconed radio-inline mr-3",
                                  },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.payment_type,
                                          expression: "form.payment_type",
                                        },
                                      ],
                                      attrs: {
                                        type: "radio",
                                        value: "COD",
                                        id: "payment_type",
                                        required: "",
                                      },
                                      domProps: {
                                        checked: _vm._q(
                                          _vm.form.payment_type,
                                          "COD"
                                        ),
                                      },
                                      on: {
                                        change: [
                                          function ($event) {
                                            return _vm.$set(
                                              _vm.form,
                                              "payment_type",
                                              "COD"
                                            )
                                          },
                                          function ($event) {
                                            $event.preventDefault()
                                            return _vm.showCard(false)
                                          },
                                        ],
                                      },
                                    }),
                                    _c("i", { staticClass: "fas fa-wallet" }),
                                    _vm._v(
                                      " Cash on Delivery\n                           "
                                    ),
                                  ]
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-sm-12 cash-delivery" },
                              [
                                _c(
                                  "label",
                                  {
                                    staticClass:
                                      "customradiobutton radioiconed radio-inline mr-3",
                                  },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.payment_type,
                                          expression: "form.payment_type",
                                        },
                                      ],
                                      attrs: {
                                        type: "radio",
                                        value: "credit_card",
                                      },
                                      domProps: {
                                        checked: _vm._q(
                                          _vm.form.payment_type,
                                          "credit_card"
                                        ),
                                      },
                                      on: {
                                        change: [
                                          function ($event) {
                                            return _vm.$set(
                                              _vm.form,
                                              "payment_type",
                                              "credit_card"
                                            )
                                          },
                                          function ($event) {
                                            $event.preventDefault()
                                            return _vm.showCard(true)
                                          },
                                        ],
                                      },
                                    }),
                                    _c("i", {
                                      staticClass: "fas fa-credit-card",
                                    }),
                                    _vm._v(
                                      " Credit/Debit Card\n                         "
                                    ),
                                  ]
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-12" }, [
                              _c(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.card,
                                      expression: "card",
                                    },
                                  ],
                                  staticClass: "row",
                                },
                                [_vm._m(2)]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-12" }, [
                                _c(
                                  "div",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: _vm.card,
                                        expression: "card",
                                      },
                                    ],
                                    staticClass: "row",
                                  },
                                  [
                                    _c("form", [
                                      _vm._m(3),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "form-group" }, [
                                        _c("label", [_vm._v("Card Expiry")]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "cardformat",
                                              rawName:
                                                "v-cardformat:formatCardExpiry",
                                              arg: "formatCardExpiry",
                                            },
                                          ],
                                          staticClass: "form-control",
                                        }),
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "form-group" }, [
                                        _c("label", [_vm._v("Card CVC")]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "cardformat",
                                              rawName:
                                                "v-cardformat:formatCardCVC",
                                              arg: "formatCardCVC",
                                            },
                                          ],
                                          staticClass: "form-control",
                                        }),
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "form-group" }, [
                                        _c("label", [_vm._v("Numeric input")]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "cardformat",
                                              rawName:
                                                "v-cardformat:restrictNumeric",
                                              arg: "restrictNumeric",
                                            },
                                          ],
                                          staticClass: "form-control",
                                        }),
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "button",
                                        { staticClass: "btn btn-primary" },
                                        [_vm._v("Submit")]
                                      ),
                                    ]),
                                  ]
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", {
                                staticClass: "row",
                                attrs: { id: "card-stream-iform" },
                                domProps: { innerHTML: _vm._s(_vm.iform) },
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "row mt-3" }, [
                                _c("div", { staticClass: "col-sm-4" }, [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "subscribe btn btn-rounded-danger btn-block",
                                      attrs: { type: "button" },
                                      on: {
                                        click: function ($event) {
                                          return _vm.placeOrder()
                                        },
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                             Confirm\n                           "
                                      ),
                                    ]
                                  ),
                                ]),
                              ]),
                            ]),
                          ]
                        ),
                      ]
                    ),
                  ]),
                ]
              ),
              _vm._v(" "),
              _vm.cartItems.length > 0
                ? _c(
                    "div",
                    {
                      staticClass:
                        "col-xs-12 full cart col-lg-4 col-md-4 col-sm-12 cart  checkout-cart-desktop",
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "order cart-box",
                          attrs: { id: "cart-stiky" },
                        },
                        [
                          _c("h3", [_vm._v("Your Order ")]),
                          _vm._v(" "),
                          _c("div", { staticClass: "check-out-list" }, [
                            _c("div", { staticClass: "table-holder" }, [
                              _c(
                                "table",
                                { staticClass: "tbl_cart_list" },
                                [
                                  _c("h4", [_vm._v("Order Details")]),
                                  _vm._v(" "),
                                  _vm._l(
                                    _vm.cartItems,
                                    function (cart, product_index) {
                                      return _c("tr", [
                                        _c(
                                          "td",
                                          { staticClass: "order-name" },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "check-order" },
                                              [
                                                _vm._v(
                                                  _vm._s(cart.product_name)
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _vm._l(
                                              cart.extras,
                                              function (extra, extra_index) {
                                                return cart.extras
                                                  ? _c("div", [
                                                      _c("strong", [
                                                        _vm._v(
                                                          _vm._s(
                                                            extra.group_name
                                                          ) + ":"
                                                        ),
                                                      ]),
                                                      _vm._v(
                                                        " " +
                                                          _vm._s(extra.choice) +
                                                          "\n                                   "
                                                      ),
                                                    ])
                                                  : _vm._e()
                                              }
                                            ),
                                          ],
                                          2
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "order-quty" },
                                          [
                                            _c("span", [
                                              _vm._v(_vm._s(cart.quantity)),
                                            ]),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        !cart.extras
                                          ? _c(
                                              "td",
                                              { staticClass: "amount" },
                                              [
                                                _vm._v(
                                                  "£ " +
                                                    _vm._s(
                                                      _vm.priceFormat(
                                                        cart.price *
                                                          cart.quantity
                                                      )
                                                    )
                                                ),
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        cart.extras
                                          ? _c(
                                              "td",
                                              { staticClass: "text-right" },
                                              [
                                                _vm._v(
                                                  "£" +
                                                    _vm._s(
                                                      _vm.priceFormat(
                                                        cart.single_product_total_amount
                                                      )
                                                    )
                                                ),
                                              ]
                                            )
                                          : _vm._e(),
                                      ])
                                    }
                                  ),
                                ],
                                2
                              ),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "cart-money-detail" }, [
                              _c("ul", [
                                _c("li", { staticClass: "fees" }),
                                _vm._v(" "),
                                _c("li", [
                                  _c("span", [_vm._v("Sub Total")]),
                                  _vm._v(" "),
                                  _c("span", [
                                    _vm._v(
                                      "£" +
                                        _vm._s(_vm.priceFormat(_vm.totalPrice))
                                    ),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _c("span", [_vm._v("Discount")]),
                                  _vm._v(" "),
                                  _c("span", [
                                    _vm.discountedAmount > 0
                                      ? _c(
                                          "a",
                                          {
                                            attrs: { href: "#" },
                                            on: {
                                              click: function ($event) {
                                                $event.preventDefault()
                                                return _vm.removeCoupon.apply(
                                                  null,
                                                  arguments
                                                )
                                              },
                                            },
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fa fa-trash",
                                            }),
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(
                                      " - " + _vm._s(_vm.discountedAmount) + " "
                                    ),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _c("span", [_vm._v("Total")]),
                                  _vm._v(" "),
                                  _c("span", [
                                    _vm._v(
                                      "£" +
                                        _vm._s(_vm.priceFormat(_vm.finalAmount))
                                    ),
                                  ]),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]
                      ),
                    ]
                  )
                : _vm._e(),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("footer-menu"),
      ],
      1
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("h3", [_vm._v(" Delivery Details")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("h3", [_vm._v(" Personal Details")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-12" }, [
      _c("div", { attrs: { id: "card-element" } }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", [_vm._v("Card number")]),
      _vm._v(" "),
      _c("input", { staticClass: "form-control" }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Contactus.vue?vue&type=template&id=e71c743a&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Contactus.vue?vue&type=template&id=e71c743a& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [_c("header-menu"), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1)],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row contactuspage" }, [
        _c("div", { staticClass: "container mt-5" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12 maps" }, [
              _c("iframe", {
                staticStyle: { border: "0" },
                attrs: {
                  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.2156154533595!2d-1.822215984654894!3d52.49333647980907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bae64827134d%3A0x2e1a51de3c022c50!2s888a%20Washwood%20Heath%20Rd%2C%20Ward%20End%2C%20Birmingham%20B8%202NB%2C%20UK!5e0!3m2!1sen!2s!4v1592827053509!5m2!1sen!2s",
                  frameborder: "0",
                  allowfullscreen: "",
                  "aria-hidden": "false",
                  tabindex: "0",
                },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 contact-info-sec text-center" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-4 col-sm-4 col-lg-4" }, [
                  _c("div", { staticClass: "contact-info-box" }, [
                    _c("i", { staticClass: "fa fa-phone-square" }),
                    _vm._v(" "),
                    _c("h5", { attrs: { itemprop: "headline" } }, [
                      _vm._v("PHONE"),
                    ]),
                    _vm._v(" "),
                    _c("p", { attrs: { itemprop: "description" } }, [
                      _vm._v("Phone +44 121 242 2020"),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4 col-sm-4 col-lg-4" }, [
                  _c("div", { staticClass: "contact-info-box" }, [
                    _c("i", { staticClass: "fa fa-map-marker" }),
                    _vm._v(" "),
                    _c("h5", { attrs: { itemprop: "headline" } }, [
                      _vm._v("ADDRESS"),
                    ]),
                    _vm._v(" "),
                    _c("p", { attrs: { itemprop: "description" } }, [
                      _vm._v(
                        "888a Washwood Heath Rd, Ward End, Birmingham B8 2NB, United Kingdom"
                      ),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4 col-sm-4 col-lg-4" }, [
                  _c("div", { staticClass: "contact-info-box" }, [
                    _c("i", { staticClass: "fa fa-envelope" }),
                    _vm._v(" "),
                    _c("h5", { attrs: { itemprop: "headline" } }, [
                      _vm._v("EMAIL"),
                    ]),
                    _vm._v(" "),
                    _c("p", { attrs: { itemprop: "description" } }, [
                      _vm._v("support@papages.com"),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-12 contactus-form" }, [
              _c("h2", [_vm._v("Contact Us")]),
              _vm._v(" "),
              _c("form", { attrs: { action: "" } }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-lg-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        staticClass: "form-control mt-2",
                        attrs: {
                          type: "text",
                          placeholder: "First Name",
                          required: "",
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        staticClass: "form-control mt-2",
                        attrs: {
                          type: "text",
                          placeholder: "Last Name",
                          required: "",
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        staticClass: "form-control mt-2",
                        attrs: {
                          type: "email",
                          placeholder: "Email",
                          required: "",
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        staticClass: "form-control mt-2",
                        attrs: {
                          type: "number",
                          placeholder: "Mobile",
                          required: "",
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("textarea", {
                        staticClass: "form-control",
                        attrs: {
                          id: "exampleFormControlTextarea1",
                          placeholder: "Comment",
                          rows: "5",
                          required: "",
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 text-right" }, [
                    _c(
                      "button",
                      {
                        staticClass: "anima-btn move-eff",
                        attrs: { type: "submit" },
                      },
                      [_vm._v("Submit")]
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container-fluid bottom-section mt-0" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "footer mt-0" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-5 footer-left" }, [
                _c("p", [
                  _vm._v("© 2020 "),
                  _c("span", [_vm._v("All rights reserved")]),
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [_vm._v("Site by")]),
                  _vm._v(" "),
                  _c("a", { attrs: { href: "#" } }, [_vm._v("PapaGes")]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-2 footer-logo" }, [
                _c("img", {
                  attrs: { src: "public/images/mainlogo.png", alt: "logo" },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-5 footer-right" }, [
                _c("p", [
                  _c("span", [_vm._v("Email:")]),
                  _vm._v(" "),
                  _c("a", { attrs: { href: "#" } }, [
                    _vm._v("support@papages.com"),
                  ]),
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [_vm._v("Phone:")]),
                  _vm._v(" +44 121 242 2020"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "footer-social" }, [
                  _c("a", { attrs: { href: "#" } }, [
                    _c("i", { staticClass: "fa fa-facebook-f" }),
                  ]),
                  _vm._v(" "),
                  _c("a", { attrs: { href: "#" } }, [
                    _c("i", { staticClass: "fa fa-twitter" }),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Feedback.vue?vue&type=template&id=995c9320&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Feedback.vue?vue&type=template&id=995c9320& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("header-menu"),
      _vm._v(" "),
      _c("section", { staticClass: "inner-section" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "container form-feedback-section " }, [
          _c("div", { staticClass: "row", attrs: { id: "page_content" } }, [
            _c("div", { staticClass: "col-2" }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-md-8 table-booked feedback form-feedback" },
              [
                _c("div", { attrs: { id: "messages" } }, [
                  _vm.successMessage
                    ? _c(
                        "div",
                        {
                          staticClass: "alert alert-success",
                          attrs: { role: "alert" },
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.successMessage) +
                              "\n                        "
                          ),
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.errorMessage
                    ? _c(
                        "div",
                        {
                          staticClass: "alert alert-danger",
                          attrs: { role: "alert" },
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.errorMessage) +
                              "\n                        "
                          ),
                        ]
                      )
                    : _vm._e(),
                ]),
                _vm._v(" "),
                _c("h1", [_vm._v("Feedback")]),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    staticClass: "mt-5 frm-body",
                    on: {
                      submit: function ($event) {
                        $event.preventDefault()
                        return _vm.validateBeforeSubmit()
                      },
                    },
                  },
                  [
                    _c("div", { staticClass: "row mb-3" }, [
                      _c(
                        "div",
                        { staticClass: "col-lg-6 col-md-6 col-sm-12 pb-3" },
                        [
                          _c("label", [_vm._v("Name")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.formData.name,
                                expression: "formData.name",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "Enter Your Name",
                            },
                            domProps: { value: _vm.formData.name },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.formData,
                                  "name",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-lg-6 col-md-6 col-sm-12 pb-3" },
                        [
                          _c("label", [_vm._v("Email")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.formData.email,
                                expression: "formData.email",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "email",
                              placeholder: "Enter Your Email",
                            },
                            domProps: { value: _vm.formData.email },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.formData,
                                  "email",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "reactions" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("label", { staticClass: "col-md-7" }, [
                          _vm._v(
                            "\n                                how has your Onboarding experience been so far?\n                            "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-5" }, [
                          _c("div", { staticClass: "bad exp react" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.formData.rating,
                                  expression: "formData.rating",
                                },
                              ],
                              staticClass: "checkbox-tools",
                              attrs: {
                                value: "Bad",
                                type: "radio",
                                name: "tools",
                                id: "tool-1",
                                checked: "",
                              },
                              domProps: {
                                checked: _vm._q(_vm.formData.rating, "Bad"),
                              },
                              on: {
                                change: function ($event) {
                                  return _vm.$set(_vm.formData, "rating", "Bad")
                                },
                              },
                            }),
                            _vm._v(" "),
                            _vm._m(1),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "good exp react" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.formData.rating,
                                  expression: "formData.rating",
                                },
                              ],
                              staticClass: "checkbox-tools",
                              attrs: {
                                value: "Good",
                                type: "radio",
                                name: "tools",
                                id: "tool-2",
                              },
                              domProps: {
                                checked: _vm._q(_vm.formData.rating, "Good"),
                              },
                              on: {
                                change: function ($event) {
                                  return _vm.$set(
                                    _vm.formData,
                                    "rating",
                                    "Good"
                                  )
                                },
                              },
                            }),
                            _vm._v(" "),
                            _vm._m(2),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "v-good exp react" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.formData.rating,
                                  expression: "formData.rating",
                                },
                              ],
                              staticClass: "checkbox-tools",
                              attrs: {
                                value: "Very Good",
                                type: "radio",
                                name: "tools",
                                id: "tool-3 ",
                              },
                              domProps: {
                                checked: _vm._q(
                                  _vm.formData.rating,
                                  "Very Good"
                                ),
                              },
                              on: {
                                change: function ($event) {
                                  return _vm.$set(
                                    _vm.formData,
                                    "rating",
                                    "Very Good"
                                  )
                                },
                              },
                            }),
                            _vm._v(" "),
                            _vm._m(3),
                          ]),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row mb-3" }, [
                      _c("div", { staticClass: "col-md-12" }, [
                        _c("label", [_vm._v("Share your experience")]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formData.experience,
                              expression: "formData.experience",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            id: "exampleFormControlTextarea1",
                            rows: "3",
                          },
                          domProps: { value: _vm.formData.experience },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.formData,
                                "experience",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                    ]),
                    _vm._v(" "),
                    _vm._m(4),
                  ]
                ),
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-2" }),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("testimonials"),
      _vm._v(" "),
      _c("footer-menu"),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "feedback-banner" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-4 col-md-4 col-sm-12 px-0" }, [
            _c("div", { staticClass: "feed-banner-first" }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-4" }),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-4 col-md-4 col-sm-12  px-0" }, [
            _c("div", { staticClass: "feed-banner-second" }),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "for-checkbox-tools", attrs: { for: "tool-1" } },
      [_c("i", { staticClass: "fas fa-sad-tear" })]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "for-checkbox-tools", attrs: { for: "tool-2" } },
      [_c("i", { staticClass: "fas fa-smile-beam" })]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "for-checkbox-tools", attrs: { for: "tool-3" } },
      [_c("i", { staticClass: "fas fa-grin-stars" })]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12 text-center" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-rounded-default btn-rounded-danger",
            attrs: { type: "submit" },
          },
          [_vm._v("Submit")]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Gallery.vue?vue&type=template&id=5761a7b7&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Gallery.vue?vue&type=template&id=5761a7b7& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("header-menu"),
      _vm._v(" "),
      _c("section", { staticClass: "menu-gallery" }, [
        _c(
          "div",
          { staticClass: "container" },
          [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row mb-4" },
              _vm._l(_vm.imgs, function (src, index) {
                return _c(
                  "div",
                  { key: index, staticClass: "col-lg-4 col-md-6" },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "menubox pic",
                        on: {
                          click: function () {
                            return _vm.showImg(index)
                          },
                        },
                      },
                      [_c("img", { attrs: { src: src } })]
                    ),
                  ]
                )
              }),
              0
            ),
            _vm._v(" "),
            _c("vue-easy-lightbox", {
              attrs: { visible: _vm.visible, imgs: _vm.imgs, index: _vm.index },
              on: { hide: _vm.handleHide },
            }),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c("footer-menu"),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row main-title" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("h3", { staticClass: "mt-5" }, [_vm._v("Our Gallery")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("header-menu"),
      _vm._v(" "),
      _c("section", { staticClass: "about-section" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row main-title" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("h3", [_vm._v(_vm._s(_vm.stories.main_title))]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-5 col-12" }, [
              _c("div", { staticClass: "imgbox" }, [
                _c("img", { attrs: { src: _vm.stories.image } }),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-7 col-12" }, [
              _c("div", { staticClass: "contentbox" }, [
                _vm._v(
                  "\n                       " +
                    _vm._s(_vm.stories.description) +
                    "\n                    "
                ),
              ]),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "menu-gallery" }, [
        _c("div", { staticClass: "container" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "row mb-4" }, [
            _c("div", { staticClass: "col-lg-4 col-md-6" }, [
              _c("div", { staticClass: "menubox" }, [
                _c("img", { attrs: { src: "/images/gallery/1.jpeg" } }),
                _vm._v(" "),
                _c("div", { staticClass: "ctabox" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-outline-secondary",
                      attrs: { type: "button" },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.openPostalCode.apply(null, arguments)
                        },
                      },
                    },
                    [_vm._v("Order Now!")]
                  ),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-4 col-md-6" }, [
              _c("div", { staticClass: "menubox" }, [
                _c("img", { attrs: { src: "/images/gallery/2.jpg" } }),
                _vm._v(" "),
                _c("div", { staticClass: "ctabox" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-outline-secondary",
                      attrs: { type: "button" },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.openPostalCode.apply(null, arguments)
                        },
                      },
                    },
                    [_vm._v("Order Now!")]
                  ),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-4 col-md-6" }, [
              _c("div", { staticClass: "menubox" }, [
                _c("img", { attrs: { src: "/images/gallery/3.jpg" } }),
                _vm._v(" "),
                _c("div", { staticClass: "ctabox" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-outline-secondary",
                      attrs: { type: "button" },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.openPostalCode.apply(null, arguments)
                        },
                      },
                    },
                    [_vm._v("Order Now!")]
                  ),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mb-4" }, [
            _c("div", { staticClass: "col-lg-4 col-md-6" }, [
              _c("div", { staticClass: "menubox" }, [
                _c("img", { attrs: { src: "/images/gallery/4.jpg" } }),
                _vm._v(" "),
                _c("div", { staticClass: "ctabox" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-outline-secondary",
                      attrs: { type: "button" },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.openPostalCode.apply(null, arguments)
                        },
                      },
                    },
                    [_vm._v("Order Now!")]
                  ),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-4 col-md-6" }, [
              _c("div", { staticClass: "menubox" }, [
                _c("img", { attrs: { src: "/images/gallery/5.jpg" } }),
                _vm._v(" "),
                _c("div", { staticClass: "ctabox" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-outline-secondary",
                      attrs: { type: "button" },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.openPostalCode.apply(null, arguments)
                        },
                      },
                    },
                    [_vm._v("Order Now!")]
                  ),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-4 col-md-6" }, [
              _c("div", { staticClass: "menubox" }, [
                _c("img", { attrs: { src: "/images/gallery/6.jpg" } }),
                _vm._v(" "),
                _c("div", { staticClass: "ctabox" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-outline-secondary",
                      attrs: { type: "button" },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.openPostalCode.apply(null, arguments)
                        },
                      },
                    },
                    [_vm._v("Order Now!")]
                  ),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "section-fullwidth menu-box menu-box-style2" },
        [
          _c("div", { staticClass: "container" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row" },
              _vm._l(_vm.categories, function (item, index) {
                return index < 3
                  ? _c("div", { staticClass: "col-lg-4 col-md-12 col-sm-12" }, [
                      _c("h3", { staticClass: "sub-title" }, [
                        _vm._v(" " + _vm._s(item.name)),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "menu-box" }, [
                        _c(
                          "ul",
                          { staticClass: "dish-list" },
                          _vm._l(
                            item.products,
                            function (product, product_index) {
                              return product_index < 5
                                ? _c(
                                    "li",
                                    { staticClass: "box" },
                                    [
                                      _c("a", { attrs: { href: "#0" } }, [
                                        _c("h3", [
                                          _vm._v(_vm._s(product.name)),
                                        ]),
                                      ]),
                                      _vm._v(" "),
                                      _c("p", { staticClass: "dis" }, [
                                        _vm._v(
                                          "\n                                " +
                                            _vm._s(product.description) +
                                            "\n                            "
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _vm._l(
                                        product.sizes,
                                        function (size, size_index) {
                                          return product.sizes.length
                                            ? _c(
                                                "span",
                                                {
                                                  staticStyle: {
                                                    "font-size": "12px",
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    " " +
                                                      _vm._s(size.size) +
                                                      " : £" +
                                                      _vm._s(size.price)
                                                  ),
                                                ]
                                              )
                                            : _vm._e()
                                        }
                                      ),
                                      _vm._v(" "),
                                      !product.sizes.length
                                        ? _c("span", [
                                            _c("span", [_vm._v("£")]),
                                            _vm._v(_vm._s(product.price)),
                                          ])
                                        : _vm._e(),
                                    ],
                                    2
                                  )
                                : _vm._e()
                            }
                          ),
                          0
                        ),
                      ]),
                    ])
                  : _vm._e()
              }),
              0
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn",
                on: {
                  click: function ($event) {
                    $event.preventDefault()
                    return _vm.openPostalCode.apply(null, arguments)
                  },
                },
              },
              [_vm._v("See More")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "menus pattern " }),
          ]),
        ]
      ),
      _vm._v(" "),
      _c("reservation"),
      _vm._v(" "),
      _c("testimonials"),
      _vm._v(" "),
      _c("footer-menu"),
      _vm._v(" "),
      _c("postal-code-popup", {
        attrs: { showModalProp: _vm.showPostalCode },
        on: { HideModalValue: _vm.hideModal },
      }),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row main-title" }, [
      _c("div", { staticClass: "col-12" }, [_c("h3", [_vm._v("Our Menu")])]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row main-title" }, [
      _c("div", { staticClass: "col-12" }, [_c("h3", [_vm._v("Our  Dishes")])]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/KitchenScreen.vue?vue&type=template&id=f9938656&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/KitchenScreen.vue?vue&type=template&id=f9938656& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("section", { staticClass: "dish-listing" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c(
          "ol",
          { staticClass: "dish-wrap" },
          _vm._l(_vm.orders.orders, function (item, index) {
            return _c(
              "li",
              {
                staticClass: "dish-box",
                attrs: {
                  ondrop: "drop(event)",
                  ondragover: "allowDrop(event)",
                },
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "box-status status-done",
                    attrs: {
                      draggable: "true",
                      ondragstart: "drag(event)",
                      id: "drag1",
                    },
                  },
                  [
                    _c("div", { staticClass: "d-title" }, [
                      _c("div", { staticClass: "top" }, [
                        _c("div", { staticClass: "status" }, [
                          _c("span", [_vm._v("1")]),
                          _vm._v(
                            "\n                                        " +
                              _vm._s(item.status) +
                              "\n                                    "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "time" }, [
                          _vm._v(
                            "\n                                        " +
                              _vm._s(item.created_at) +
                              "\n                                    "
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "bottom" }, [
                        _c("div", { staticClass: "table" }, [
                          _c("span", [_vm._v(" Order ID:" + _vm._s(item.id))]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "persons" }, [
                          _c("span", [
                            _vm._v("Reference " + _vm._s(item.reference)),
                          ]),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "dishes" }, [
                      _c(
                        "ul",
                        _vm._l(item.details, function (product, pindex) {
                          return _c("li", [
                            _c("span", [_vm._v(_vm._s(product.quantity))]),
                            _vm._v(
                              "\n                                        " +
                                _vm._s(product.product_name) +
                                "\n                                        "
                            ),
                            product.extras
                              ? _c("p", {
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.getExtrasData(product.extras)
                                    ),
                                  },
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            product.special_instructions
                              ? _c("p", [
                                  _vm._v(
                                    " " + _vm._s(product.special_instructions)
                                  ),
                                ])
                              : _vm._e(),
                          ])
                        }),
                        0
                      ),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _vm._m(1, true),
              ]
            )
          }),
          0
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "header" }, [
      _c("div", { staticClass: "menu" }, [
        _c("a", { attrs: { href: "#" } }, [
          _c("img", { attrs: { src: "imgs/menu.png" } }),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "main-menu" }, [
        _c("ul", [
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _vm._v(
                "\n                            All Active\n                            "
              ),
              _c("span", [_vm._v("\n\t\t\t\t\t\t09\n\t\t\t\t\t")]),
            ]),
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _vm._v(
                "\n                            New\n                            "
              ),
              _c("span", [_vm._v("\n\t\t\t\t\t\t01\n\t\t\t\t\t")]),
            ]),
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _vm._v(
                "\n                            Preparing\n                            "
              ),
              _c("span", [_vm._v("\n\t\t\t\t\t\t03\n\t\t\t\t\t")]),
            ]),
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _vm._v(
                "\n                            Done\n                            "
              ),
              _c("span", [_vm._v("\n\t\t\t\t\t\t05\n\t\t\t\t\t")]),
            ]),
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _vm._v(
                "\n                            Archived\n                            "
              ),
              _c("span", [_vm._v("\n\t\t\t\t\t\t14\n\t\t\t\t\t")]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "table-count" }, [
      _c("span", { staticClass: "no" }, [_vm._v("01")]),
      _vm._v(" "),
      _c("span", { staticClass: "t" }, [_vm._v("table")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OrderConfirmed.vue?vue&type=template&id=61df4348&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/OrderConfirmed.vue?vue&type=template&id=61df4348& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "section",
      { staticClass: "order-information", attrs: { id: "product-scroll" } },
      [
        _c("div", {}, [
          _c(
            "div",
            { staticClass: "order-confirm-header" },
            [
              _c("router-link", { attrs: { to: { path: "/" } } }, [
                _c("img", {
                  attrs: { src: _vm.info.general_setting.header_logo },
                }),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "order-confirm container" }, [
            _c("h3", { staticClass: "mb-3", staticStyle: { color: "green" } }, [
              _vm._v("Your Order Recieved!"),
            ]),
            _vm._v(" "),
            _c("p", [
              _c("strong", [
                _vm._v("Hi " + _vm._s(_vm.user_detail.name) + " ,"),
              ]),
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "mb-3" }, [_vm._v("Thanks for an order.")]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "order-detail container" }, [
            _c("table", { staticClass: "table" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("tbody", [
                _c("tr", [
                  _c("td", [
                    _vm._v(
                      _vm._s(_vm.returnDateFormat(_vm.order_details.created_at))
                    ),
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.order_details.reference))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.order_details.payment))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.order_details.order_type))]),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "item-detail container" },
            _vm._l(_vm.order_details.details, function (item, index) {
              return _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-8" }, [
                  _c("div", { staticClass: "product-order-detail" }, [
                    _c("p", [_vm._v(_vm._s(item.product_name))]),
                    _vm._v(" "),
                    item.extras
                      ? _c("p", {
                          staticClass: "more-info",
                          domProps: {
                            innerHTML: _vm._s(_vm.getExtrasData(item.extras)),
                          },
                        })
                      : _vm._e(),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-2" }, [
                  _c("p", [_vm._v(_vm._s(item.special_instructions))]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-2" }, [
                  _c(
                    "p",
                    { staticClass: "text-right text-left-mob item-price" },
                    [_vm._v("£ " + _vm._s(_vm.priceFormat(item.price)))]
                  ),
                ]),
              ])
            }),
            0
          ),
          _vm._v(" "),
          _c("div", { staticClass: "item-detail container" }, [
            _c("div", { staticClass: "row" }, [
              _vm._m(2),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-2" }, [
                _c(
                  "p",
                  { staticClass: "text-right text-left-mob item-price" },
                  [
                    _vm._v(
                      " £ " +
                        _vm._s(
                          _vm.priceFormat(
                            _vm.order_details.total_amount_with_fee
                          )
                        )
                    ),
                  ]
                ),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _vm._m(3),
          _vm._v(" "),
          _c("div", { staticClass: "shipping-info container" }, [
            _vm._m(4),
            _vm._v(" "),
            _c("p", { staticClass: "mb-4" }, [
              _vm._v(_vm._s(_vm.info.general_setting.site_name)),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "order-confirm-footer" }, [
            _c(
              "div",
              { staticClass: "container" },
              [
                _c("router-link", { attrs: { to: { path: "/" } } }, [
                  _c("img", {
                    attrs: {
                      src: _vm.info.general_setting.header_logo,
                      alt: "",
                      width: "50px",
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v("Question? Contact our      "),
                  _c("a", { attrs: { href: "mailto:" + _vm.info.email } }, [
                    _vm._v(" Customer Support "),
                  ]),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "copyright-text" }, [
                  _vm._v(_vm._s(_vm.info.general_setting.copyright_text)),
                ]),
              ],
              1
            ),
          ]),
        ]),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Order No.")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Payment")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Type")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "sepeartor-line" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-10" }, [
      _c("div", { staticClass: "product-order-detail" }, [
        _c("p", [_vm._v("Total:")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "sepeartor-line" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-1" }, [
      _c("strong", [_vm._v("Thank you!")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OrderDetail.vue?vue&type=template&id=30ab9ca4&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/OrderDetail.vue?vue&type=template&id=30ab9ca4& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("header-menu"),
      _vm._v(" "),
      _c("section", { staticClass: "hero-sec" }),
      _vm._v(" "),
      _c("section", { staticClass: "order-information mt-5" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("h3", { staticClass: "mb-3" }, [_vm._v("Order Details")]),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c(
                    "b-card",
                    { attrs: { "no-body": "" } },
                    [
                      _c(
                        "b-tabs",
                        { attrs: { pills: "", card: "", vertical: "" } },
                        [
                          _c(
                            "b-tab",
                            { attrs: { title: "Order Detail", active: "" } },
                            [
                              _c("b-card-text", [
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-md-12" }, [
                                    _c("h4", { staticClass: "mb-3" }, [
                                      _vm._v("Your Order"),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "row" }, [
                                      _c("div", { staticClass: "col-md-12" }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "table-responsive table-borderless",
                                          },
                                          [
                                            _c(
                                              "table",
                                              { staticClass: "table" },
                                              [
                                                _c("thead", [
                                                  _c("tr", [
                                                    _c(
                                                      "th",
                                                      {
                                                        staticClass:
                                                          "text-center",
                                                      },
                                                      [_vm._v("S. No.")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("th", [
                                                      _vm._v("Order #"),
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("th", [_vm._v("Menu")]),
                                                    _vm._v(" "),
                                                    _c("th", [
                                                      _vm._v("Status"),
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("th", [
                                                      _vm._v("Description"),
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("th", [
                                                      _vm._v("Quantity"),
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("th", [_vm._v("Price")]),
                                                    _vm._v(" "),
                                                    _c("th"),
                                                  ]),
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "tbody",
                                                  { staticClass: "table-body" },
                                                  [
                                                    _c(
                                                      "tr",
                                                      {
                                                        staticClass: "cell-1",
                                                        attrs: {
                                                          "data-toggle":
                                                            "collapse",
                                                          "data-target":
                                                            "#demo",
                                                        },
                                                      },
                                                      [
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "text-center",
                                                          },
                                                          [_vm._v("1")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c("td", [_vm._v("1")]),
                                                        _vm._v(" "),
                                                        _c("td", [
                                                          _vm._v(
                                                            "Supreme Pizza"
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("td", [
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "badge badge-danger",
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Fullfilled"
                                                              ),
                                                            ]
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("td", [
                                                          _vm._v("$26"),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("td", [_vm._v("2")]),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "table-elipse",
                                                            attrs: {
                                                              "data-toggle":
                                                                "collapse",
                                                              "data-target":
                                                                "#demo",
                                                            },
                                                          },
                                                          [
                                                            _c("i", {
                                                              staticClass:
                                                                "fa fa-ellipsis-h text-black-50",
                                                            }),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("tr", [
                                                      _c(
                                                        "td",
                                                        {
                                                          staticClass: "p-0",
                                                          attrs: {
                                                            colspan: "8",
                                                          },
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "product-detail table-data-toogle collapse cell-1 row-child",
                                                              attrs: {
                                                                id: "demo",
                                                              },
                                                            },
                                                            [
                                                              _c("h4", [
                                                                _vm._v(
                                                                  "Product Detail"
                                                                ),
                                                              ]),
                                                              _vm._v(" "),
                                                              _c(
                                                                "table",
                                                                {
                                                                  staticClass:
                                                                    "table",
                                                                },
                                                                [
                                                                  _c("tbody", [
                                                                    _c("tr", [
                                                                      _c("td", [
                                                                        _vm._v(
                                                                          "Product Name"
                                                                        ),
                                                                      ]),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c("td", [
                                                                        _vm._v(
                                                                          "Cheese Pizza"
                                                                        ),
                                                                      ]),
                                                                    ]),
                                                                    _vm._v(" "),
                                                                    _c("tr", [
                                                                      _c("td", [
                                                                        _vm._v(
                                                                          "Product Quantity"
                                                                        ),
                                                                      ]),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c("td", [
                                                                        _vm._v(
                                                                          "2"
                                                                        ),
                                                                      ]),
                                                                    ]),
                                                                    _vm._v(" "),
                                                                    _c("tr", [
                                                                      _c("td", [
                                                                        _vm._v(
                                                                          "Delivery Status"
                                                                        ),
                                                                      ]),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c("td", [
                                                                        _vm._v(
                                                                          "Delivered"
                                                                        ),
                                                                      ]),
                                                                    ]),
                                                                    _vm._v(" "),
                                                                    _c("tr", [
                                                                      _c("td", [
                                                                        _vm._v(
                                                                          "Sub Total"
                                                                        ),
                                                                      ]),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c("td", [
                                                                        _vm._v(
                                                                          "500"
                                                                        ),
                                                                      ]),
                                                                    ]),
                                                                    _vm._v(" "),
                                                                    _c("tr", [
                                                                      _c("td", [
                                                                        _vm._v(
                                                                          "Total"
                                                                        ),
                                                                      ]),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c("td", [
                                                                        _vm._v(
                                                                          "500"
                                                                        ),
                                                                      ]),
                                                                    ]),
                                                                  ]),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                        ]
                                                      ),
                                                    ]),
                                                    _vm._v(" "),
                                                    _c(
                                                      "tr",
                                                      {
                                                        staticClass: "cell-1",
                                                        attrs: {
                                                          "data-toggle":
                                                            "collapse",
                                                          "data-target":
                                                            "#demo-2",
                                                        },
                                                      },
                                                      [
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "text-center",
                                                          },
                                                          [_vm._v("2")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c("td", [_vm._v("2")]),
                                                        _vm._v(" "),
                                                        _c("td", [
                                                          _vm._v(
                                                            "Cheese Pizza"
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("td", [
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "badge badge-success",
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Fullfilled"
                                                              ),
                                                            ]
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("td", [
                                                          _vm._v("$36"),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("td", [_vm._v("3")]),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass:
                                                              "table-elipse",
                                                            attrs: {
                                                              "data-toggle":
                                                                "collapse",
                                                              "data-target":
                                                                "#demo",
                                                            },
                                                          },
                                                          [
                                                            _c("i", {
                                                              staticClass:
                                                                "fa fa-ellipsis-h text-black-50",
                                                            }),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("tr", [
                                                      _c(
                                                        "td",
                                                        {
                                                          staticClass: "p-0",
                                                          attrs: {
                                                            colspan: "8",
                                                          },
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "product-detail collapse cell-1 row-child",
                                                              attrs: {
                                                                id: "demo-2",
                                                              },
                                                            },
                                                            [
                                                              _c("h4", [
                                                                _vm._v(
                                                                  "Product Detail"
                                                                ),
                                                              ]),
                                                              _vm._v(" "),
                                                              _c(
                                                                "table",
                                                                {
                                                                  staticClass:
                                                                    "table",
                                                                },
                                                                [
                                                                  _c("tbody", [
                                                                    _c("tr", [
                                                                      _c("td", [
                                                                        _vm._v(
                                                                          "Product Name"
                                                                        ),
                                                                      ]),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c("td", [
                                                                        _vm._v(
                                                                          "Cheese Pizza"
                                                                        ),
                                                                      ]),
                                                                    ]),
                                                                    _vm._v(" "),
                                                                    _c("tr", [
                                                                      _c("td", [
                                                                        _vm._v(
                                                                          "Product Quantity"
                                                                        ),
                                                                      ]),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c("td", [
                                                                        _vm._v(
                                                                          "2"
                                                                        ),
                                                                      ]),
                                                                    ]),
                                                                    _vm._v(" "),
                                                                    _c("tr", [
                                                                      _c("td", [
                                                                        _vm._v(
                                                                          "Delivery Status"
                                                                        ),
                                                                      ]),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c("td", [
                                                                        _vm._v(
                                                                          "Delivered"
                                                                        ),
                                                                      ]),
                                                                    ]),
                                                                    _vm._v(" "),
                                                                    _c("tr", [
                                                                      _c("td", [
                                                                        _vm._v(
                                                                          "Sub Total"
                                                                        ),
                                                                      ]),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c("td", [
                                                                        _vm._v(
                                                                          "500"
                                                                        ),
                                                                      ]),
                                                                    ]),
                                                                    _vm._v(" "),
                                                                    _c("tr", [
                                                                      _c("td", [
                                                                        _vm._v(
                                                                          "Total"
                                                                        ),
                                                                      ]),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c("td", [
                                                                        _vm._v(
                                                                          "500"
                                                                        ),
                                                                      ]),
                                                                    ]),
                                                                  ]),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                        ]
                                                      ),
                                                    ]),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]),
                                    ]),
                                  ]),
                                ]),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-tab",
                            { attrs: { title: "Account Setting" } },
                            [
                              _c("b-card-text", [
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-md-12" }, [
                                    _c("h3", { staticClass: "mb-2" }, [
                                      _vm._v("Password Change"),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "row" }, [
                                      _c("div", { staticClass: "col-md-6" }, [
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "" } },
                                              [_vm._v("Current Password")]
                                            ),
                                            _vm._v(" "),
                                            _c("input", {
                                              staticClass: "form-control",
                                              attrs: {
                                                type: "text",
                                                placeholder:
                                                  "Enter current password",
                                              },
                                            }),
                                          ]
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col-md-6" }, [
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "" } },
                                              [_vm._v("New Password")]
                                            ),
                                            _vm._v(" "),
                                            _c("input", {
                                              staticClass: "form-control",
                                              attrs: {
                                                type: "text",
                                                placeholder:
                                                  "Enter new password",
                                              },
                                            }),
                                          ]
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col-md-6" }, [
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "" } },
                                              [_vm._v("Confirm New Password")]
                                            ),
                                            _vm._v(" "),
                                            _c("input", {
                                              staticClass: "form-control",
                                              attrs: {
                                                type: "text",
                                                placeholder:
                                                  "Enter confirm new password",
                                              },
                                            }),
                                          ]
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col-md-12" }, [
                                        _c(
                                          "a",
                                          {
                                            staticClass:
                                              "btn cstm-btn btn-primary",
                                            attrs: { href: "javascript:;" },
                                          },
                                          [
                                            _vm._v(
                                              "\n                                      Change Password \n                                    "
                                            ),
                                          ]
                                        ),
                                      ]),
                                    ]),
                                  ]),
                                ]),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("footer-menu"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PrivacyPolicy.vue?vue&type=template&id=34680d7f&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PrivacyPolicy.vue?vue&type=template&id=34680d7f& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("header-menu"),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("footer-menu"),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", [_c("div", { staticClass: "privacy-banner" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "inner-section term-page" }, [
      _c("div", { staticClass: "container-fluid" }),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c("h1", [_vm._v("Privacy Policy and Terms of Use")]),
            _vm._v(" "),
            _c("div", { staticClass: "privacy-policy" }, [
              _c("p", [
                _vm._v(
                  "Use of our Website/Application is also governed by our Privacy Policy and Website/Application Terms of Use, available from Terms of Use. Our Privacy Policy and Website/Application Terms of Use are incorporated into these Terms and Conditions by this reference."
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "terms-list" }, [
                _c("ul", [
                  _c("li", [
                    _c("h5", [_vm._v("Variation")]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Nanjoos peri peri shall have the right in its absolute discretion at any time and without notice to amend, remove or vary the Services and/or any page of this Website/Application."
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("h5", [_vm._v("Invalidity")]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "If any of the provisions of these Terms and Conditions are found to be unlawful, invalid or otherwise unenforceable by any court or other authority, that/those provision(s) will be deemed severed from the remainder of these Terms and Conditions and the remainder will be valid and enforceable."
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("h5", [_vm._v("Waiver")]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "If you breach these conditions and we take no action, we will still be entitled to use our rights and remedies in any other situation where you breach these conditions. Law and Jurisdiction."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "These Terms and Conditions, and the relationship between you and us (whether contractual or otherwise) shall be governed by and construed in accordance with the laws of England & Wales."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "If you are a consumer, you will benefit from any mandatory provisions of the law in your country of residence. Nothing in the above clause takes away or reduces your rights as a consumer to rely on those provisions."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Any dispute, controversy, proceedings or claim between you and us relating to these Terms and Conditions, or the relationship between you and us (whether contractual or otherwise) shall be subject to the jurisdiction of the courts of England, Wales, Scotland, or Northern Ireland, as determined by your residency."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [_c("strong", [_vm._v("Nanjoos peri peri")])]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "a",
                        {
                          attrs: { href: "https://www.nanjoosperiperi.co.uk" },
                        },
                        [_vm._v("www.nanjoosperiperi.co.uk")]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: "https://goo.gl/maps/dgvBbmP4sGjHF8gD9",
                            target: "_blank",
                          },
                        },
                        [
                          _vm._v(
                            "44 osborene street bredbury stockport SK6 2BT"
                          ),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c("a", { attrs: { href: "tel:0161 355 6489" } }, [
                        _vm._v("0161 355 6489"),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reservation.vue?vue&type=template&id=530d0e9e&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Reservation.vue?vue&type=template&id=530d0e9e& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("header-menu"),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("section", { staticClass: "section-gallery" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c("h3", [_vm._v("Gallery")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "row image-gallery" },
                [
                  _c("lingallery", {
                    attrs: {
                      iid: _vm.currentId,
                      width: _vm.width,
                      height: _vm.height,
                      items: _vm.items,
                      responsive: true,
                    },
                    on: {
                      "update:iid": function ($event) {
                        _vm.currentId = $event
                      },
                    },
                  }),
                ],
                1
              ),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("reservation"),
      _vm._v(" "),
      _c("footer-menu"),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "header-reservation section-fullwidth" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-4 col-xl-5" }),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TermsCondition.vue?vue&type=template&id=8d9ea702&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TermsCondition.vue?vue&type=template&id=8d9ea702& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("header-menu"),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("footer-menu"),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", [_c("div", { staticClass: "terms-banner" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "inner-section term-page" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c("h1", [_vm._v("Terms and Condition")]),
            _vm._v(" "),
            _c("div", { staticClass: "terms-condition-section" }, [
              _c("p", [
                _vm._v(
                  "GRILL N SPICES LTD NUMBER 11262171 registered in England and wales whose registered office is 44 osborne street bredbuty SK6 2BT trading as NANJOOS PERI PERI website address "
                ),
                _c(
                  "a",
                  {
                    attrs: {
                      href: "https://www.nanjoosperiperi.co.uk/",
                      target: "_blank",
                    },
                  },
                  [_vm._v("nanjoosperiperi.co.uk")]
                ),
                _vm._v(" also app available on play store and app store."),
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "These Terms and Conditions govern the sale of all goods by us and will form the basis of the contract between you and us. If you wish to place an order with us, our Website/Application will guide you through the ordering process. Before submitting your order to us, you will be given the opportunity to review and amend it.\n                        "
                ),
                _c("br"),
                _vm._v(
                  "\n                         Please ensure that you have checked your order and that you have read these Terms and Conditions carefully before submitting it. If you are unsure about any part of these Terms and Conditions, please ask us for clarification. OUR CONTRACT."
                ),
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "All orders are subject to availability and confirmation of the order price. Dispatch times may vary according to availability and subject to any delays resulting from postal delays or force majeure for which we will not be responsible. In order to contract with Nanjoos peri peri you must be over 18 years of age and possess a valid credit or debit card issued by a bank acceptable to us. "
                ),
                _c("br"),
                _vm._v(
                  " Nanjoos peri peri retains the right to refuse any request made by you. If your order is accepted we will inform you by email and, SMS when placing an order, you undertake that all details you provide to us are true and accurate, that you are an authorised user of the credit or debit card used to place your order and that there are sufficient funds to cover the cost of the goods."
                ),
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "When you place an order, you will receive an acknowledgement e-mail confirming receipt of your order: this email will only be an acknowledgement and will not constitute acceptance of your order."
                ),
                _c("br"),
                _vm._v(
                  " A contract between us will not be formed until we send you confirmation by the medium used for placing the order (SMS, e-mail or other appropriate digital means) that the goods which you ordered have been dispatched to you. Only those goods listed sent at the time of dispatch will be included in the contract formed. Pricing and Availability."
                ),
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Whilst we try to ensure that all details, descriptions and prices which appear on this Website/Application are accurate, errors may occur. If we discover an error in the price of any goods which you have ordered we will inform you of this as soon as possible and give you the option of reconfirming your order at the correct price or cancelling it."
                ),
                _c("br"),
                _vm._v(
                  " If we are unable to contact you we will treat the order as cancelled. If you cancel and you have already paid for the goods, you will receive a full refund from Nanjoos peri peri Delivery costs will be charged in addition; such additional charges are clearly displayed where applicable and included in the 'Total Cost'. Payment."
                ),
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "All online card payments are made to paymentsence Payments made via paymentsence to Nanjoos peri peri will appear on your statement as paymentsence or Grill N Spices Ltd Upon receiving your order, we carry out a standard authorisation check on your payment card to ensure there are sufficient funds to fulfil the transaction. Your card will be debited upon authorisation being received."
                ),
                _c("br"),
                _vm._v(
                  " The monies received upon the debiting of your card shall be treated as a full payment against the value of the goods you wish to purchase. Once the goods have been despatched and you have been sent a confirmation email, SMS notification the monies paid shall be used for the value of goods you have purchased as listed."
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "terms-list" }, [
                _c("ul", [
                  _c("li", [
                    _c("h5", [_vm._v("Delivery Estimates")]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Times given for collection and delivery are only approximate; neither nanjoos peri peri can provide an exact time for delivery but endeavour to deliver within the approximate delivery time specified when you place your order."
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("h5", [_vm._v("Refunds & Charge-backs")]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Online payments made through nanjoos peri peri are handled by paymentsence Payments made through paymentssence will appear on your statement as Grill N Spices Ltd For refunds, charge-backs or disputes for online paid orders, please contact us on the details mention below. "
                      ),
                      _c("br"),
                      _vm._v(
                        "\n                                    If an unrecognised transaction appears on your card / statement from Grill N Spices Ltd please contact us on the follow details Nanjoos peri peri 0161 355 6489 or visit 44 osborne street bredbury stockport Sk6 2bt."
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("h5", [_vm._v("Order cancellation and amendments")]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Once the order has been confirmed and payment taken from your account, you will be unable to cancel your order and will not be eligible for a refund. To change or cancel your order please contact the nanjoos peri peti Customer Support team to attempt to resolve your request. Nanjoos peri peri team try to sort out your request ASAP."
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("h5", [_vm._v("Feedback")]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "If the order received does not meet your expectation you can provide feedback to the Takeaway via the phone , google review or by wrbsite page / application and nanjoos peri peri consider your feedback in your reapect."
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("h5", [_vm._v("Compensation")]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "If you are unhappy with the quality of any goods or the service provided by nanjoos peri peti and wish to seek any form of compensation, you should contact directly to raise your complaint and, where appropriate, follow the nanjoos peri peri own complaint procedures."
                      ),
                      _c("br"),
                      _vm._v(
                        " If you are unable to contact the nanjoos peri peri please visit store and they will assist you."
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("h5", [_vm._v("Customer Support")]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "The nanjoos peri peri Customer Support team will attempt to assist you and resolve any enquiry where possible regarding your order."
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Thankyou.vue?vue&type=template&id=ee76c040&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Thankyou.vue?vue&type=template&id=ee76c040& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [_c("header-menu"), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("footer-menu")],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "inner-section" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c(
              "h3",
              {
                staticStyle: { "text-align": "center" },
                attrs: { id: "page_content" },
              },
              [_vm._v("Thank You")]
            ),
            _vm._v(" "),
            _c("h3", { staticStyle: { "text-align": "center" } }, [
              _vm._v("Order has been  Received"),
            ]),
          ]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common-components/Alert.vue?vue&type=template&id=404914ac&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common-components/Alert.vue?vue&type=template&id=404914ac& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-alert",
        {
          staticClass: "alert alert-card alert-",
          attrs: { variant: _vm.errorMessage ? "danger" : "success", show: "" },
        },
        [
          _c("i", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.successMessage,
                expression: "successMessage",
              },
            ],
            class: [_vm.successMessage ? "icon-success" : "", "icon-check2"],
          }),
          _vm._v(" "),
          _c("i", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.errorMessage,
                expression: "errorMessage",
              },
            ],
            class: [_vm.errorMessage ? "icon-danger" : "", "icon-alert"],
          }),
          _vm._v(
            "\n    " +
              _vm._s(_vm.errorMessage ? _vm.errorMessage : _vm.successMessage) +
              "\n  "
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common-components/download-menu.vue?vue&type=template&id=f772741c&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common-components/download-menu.vue?vue&type=template&id=f772741c& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-modal",
        {
          ref: "myModalRef",
          attrs: {
            id: "add-product",
            centered: "",
            "ok-variant": "primary",
            "title-tag": "h4",
            "hide-footer": true,
            "custom-modal": "",
            "no-close-on-backdrop": "",
            "modal-class": "postal-code-modal custom-modal",
          },
          on: { hidden: _vm.onHidden },
          scopedSlots: _vm._u(
            [
              _vm.isAllergy
                ? {
                    key: "modal-title",
                    fn: function () {
                      return [_vm._v("Allery Information")]
                    },
                    proxy: true,
                  }
                : null,
            ],
            null,
            true
          ),
        },
        [
          _vm._v(" "),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-2" }),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4" }, [
              _vm.isMenu
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-rounded-danger btn-block",
                      on: { click: _vm.openMenu },
                    },
                    [_vm._v("View")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.isAllergy
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-rounded-danger btn-block",
                      on: { click: _vm.openAllergy },
                    },
                    [_vm._v("View")]
                  )
                : _vm._e(),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4" }, [
              _vm.isMenu
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-rounded-danger btn-block",
                      on: { click: _vm.downloadMenu },
                    },
                    [_vm._v("Download")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.isAllergy
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-rounded-danger btn-block",
                      on: { click: _vm.downloadAllery },
                    },
                    [_vm._v("Download")]
                  )
                : _vm._e(),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2" }),
          ]),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common-components/footer.vue?vue&type=template&id=ecca14c6&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common-components/footer.vue?vue&type=template&id=ecca14c6& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("footer", [
        _c("div", { staticClass: "main-ftr" }, [
          _c("div", { staticClass: "inner-ftr" }, [
            _c("div", { staticClass: "container" }, [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "col-lg-4 col-md-4 footer-section-2 footer-space",
                  },
                  [
                    _c("h3", [_vm._v("Quick Links")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "footer-menu" }, [
                      _c("ul", [
                        _c(
                          "li",
                          [
                            _c(
                              "router-link",
                              { attrs: { to: { path: "/" } } },
                              [
                                _c(
                                  "a",
                                  { staticClass: "nav-link js-scroll-trigger" },
                                  [_vm._v("Home")]
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          [
                            _c(
                              "router-link",
                              { attrs: { to: { path: "/feedback" } } },
                              [
                                _c(
                                  "a",
                                  { staticClass: "nav-link js-scroll-trigger" },
                                  [_vm._v("Feedback")]
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          [
                            _c(
                              "router-link",
                              {
                                attrs: { to: { path: "/terms-condition" } },
                                nativeOn: {
                                  click: function ($event) {
                                    return _vm.scrollToTop.apply(
                                      null,
                                      arguments
                                    )
                                  },
                                },
                              },
                              [
                                _c(
                                  "a",
                                  { staticClass: "nav-link js-scroll-trigger" },
                                  [_vm._v("Terms and Condition")]
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          [
                            _c(
                              "router-link",
                              {
                                attrs: { to: { path: "/privacy-policy" } },
                                nativeOn: {
                                  click: function ($event) {
                                    return _vm.scrollToTop.apply(
                                      null,
                                      arguments
                                    )
                                  },
                                },
                              },
                              [
                                _c(
                                  "a",
                                  { staticClass: "nav-link js-scroll-trigger" },
                                  [_vm._v("Privacy Policy")]
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("li", [
                          _c(
                            "a",
                            {
                              staticClass: "nav-link js-scroll-trigger",
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.openPostalCode.apply(
                                    null,
                                    arguments
                                  )
                                },
                              },
                            },
                            [_vm._v("Order Online")]
                          ),
                        ]),
                      ]),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "col-lg-4 col-md-4 footer-section-3 footer-space",
                  },
                  [
                    _c("h3", [_vm._v("Working Hours")]),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "Opening-hours" },
                      _vm._l(_vm.info.timing, function (timing) {
                        return _c("li", [
                          _c("strong", [
                            _c("a", { attrs: { href: "#" } }, [
                              _vm._v(
                                _vm._s(timing.day) +
                                  " : " +
                                  _vm._s(timing.start_time) +
                                  " - " +
                                  _vm._s(timing.end_time)
                              ),
                            ]),
                          ]),
                        ])
                      }),
                      0
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "col-lg-4 col-md-4 footer-section-1 footer-space",
                  },
                  [
                    _c("h3", [_vm._v("Contact Info")]),
                    _vm._v(" "),
                    _c("ul", { staticClass: "Opening" }, [
                      _c("li", [
                        _c("a", { attrs: { href: "#" } }, [
                          _vm._m(0),
                          _vm._v(" " + _vm._s(_vm.info.phone_number)),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "#" } }, [
                          _vm._m(1),
                          _vm._v(" " + _vm._s(_vm.info.email)),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "a",
                          { staticClass: "address-link", attrs: { href: "#" } },
                          [
                            _vm._m(2),
                            _vm._v(" "),
                            _c("span", { staticClass: "address" }, [
                              _vm._v(_vm._s(_vm.info.address.full_address)),
                            ]),
                          ]
                        ),
                      ]),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12" }, [
                  _c("div", { staticClass: "icons text-center" }, [
                    _c("ul", [
                      _vm.info.general_setting.facebook
                        ? _c("li", [
                            _c(
                              "a",
                              {
                                attrs: {
                                  href: _vm.info.general_setting.facebook,
                                },
                              },
                              [_c("i", { staticClass: "icon-facebook" })]
                            ),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.info.general_setting.youtube
                        ? _c("li", [
                            _c(
                              "a",
                              {
                                attrs: {
                                  href: _vm.info.general_setting.youtube,
                                },
                              },
                              [_c("i", { staticClass: "icon-youtube" })]
                            ),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.info.general_setting.instagram
                        ? _c("li", [
                            _c(
                              "a",
                              {
                                attrs: {
                                  href: _vm.info.general_setting.instagram,
                                },
                              },
                              [
                                _c("i", {
                                  staticClass: "icon-instagram-symbol",
                                }),
                              ]
                            ),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.info.general_setting.twitter
                        ? _c("li", [
                            _c(
                              "a",
                              {
                                attrs: {
                                  href: _vm.info.general_setting.twitter,
                                },
                              },
                              [_c("i", { staticClass: "icon-twitter" })]
                            ),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.info.general_setting.pinterest
                        ? _c("li", [
                            _c(
                              "a",
                              {
                                attrs: {
                                  href: _vm.info.general_setting.pinterest,
                                },
                              },
                              [_c("i", { staticClass: "icon-pinterest-logo" })]
                            ),
                          ])
                        : _vm._e(),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "copyright text-center" }, [
            _c("div", { staticClass: "container" }, [
              _c("p", [
                _vm._v(_vm._s(_vm.info.general_setting.copyright_text)),
              ]),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("postal-code-popup", {
        attrs: { showModalProp: _vm.showPostalCode },
        on: { HideModalValue: _vm.hideModal },
      }),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon" }, [
      _c("i", { staticClass: "icon-smartphone-1" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon" }, [
      _c("i", { staticClass: "icon-mail-2" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon" }, [
      _c("i", { staticClass: "icon-placeholder" }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common-components/nav-menu.vue?vue&type=template&id=3327324b&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common-components/nav-menu.vue?vue&type=template&id=3327324b& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "header",
        { staticClass: "masthead" },
        [
          _c("div", { staticClass: "header-top" }, [
            _c("div", { staticClass: "header-top-section" }, [
              _c("div", { staticClass: "container" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-7" }, [
                    _c("div", { staticClass: "add-info" }, [
                      _c("ul", [
                        _c("li", { staticClass: "mail-space" }, [
                          _c("i", { staticClass: "icon-mail-2" }),
                          _vm._v(" "),
                          _c("span", [
                            _c(
                              "a",
                              { attrs: { href: "mailto:" + _vm.info.email } },
                              [_vm._v(_vm._s(_vm.info.email))]
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-5" }, [
                    _c("div", { staticClass: "header-icon float-right" }, [
                      _c("ul", [
                        _vm.info.general_setting.facebook
                          ? _c("li", [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    href: _vm.info.general_setting.facebook,
                                  },
                                },
                                [_c("i", { staticClass: "icon-facebook" })]
                              ),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.info.general_setting.youtube
                          ? _c("li", [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    href: _vm.info.general_setting.youtube,
                                  },
                                },
                                [_c("i", { staticClass: "icon-youtube" })]
                              ),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.info.general_setting.instagram
                          ? _c("li", [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    href: _vm.info.general_setting.instagram,
                                  },
                                },
                                [
                                  _c("i", {
                                    staticClass: "icon-instagram-symbol",
                                  }),
                                ]
                              ),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.info.general_setting.twitter
                          ? _c("li", [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    href: _vm.info.general_setting.twitter,
                                  },
                                },
                                [_c("i", { staticClass: "icon-twitter" })]
                              ),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.info.general_setting.pinterest
                          ? _c("li", [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    href: _vm.info.general_setting.pinterest,
                                  },
                                },
                                [
                                  _c("i", {
                                    staticClass: "icon-pinterest-logo",
                                  }),
                                ]
                              ),
                            ])
                          : _vm._e(),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "header-bottom-section" }, [
              _c("div", { staticClass: "container" }, [
                _c("div", { staticClass: "row align-items-center" }, [
                  _c(
                    "div",
                    { staticClass: "col-6 col-md-3" },
                    [
                      _c("router-link", { attrs: { to: { path: "/" } } }, [
                        _c(
                          "a",
                          {
                            staticClass:
                              "navbar-brand js-scroll-trigger main-logo",
                            attrs: { href: "javascript:" },
                          },
                          [
                            _c("img", {
                              attrs: {
                                src: _vm.info.general_setting.header_logo,
                              },
                            }),
                          ]
                        ),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-6 col-md-9 right" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "cart-icon-mb",
                          attrs: { to: { path: "/" } },
                        },
                        [
                          _c(
                            "a",
                            {
                              staticClass: "cart-icon-mb",
                              attrs: { href: "#" },
                            },
                            [_c("i", { staticClass: "fas fa-home" })]
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "cart-icon-mb",
                          attrs: { to: { path: "/feedback" } },
                        },
                        [
                          _c(
                            "a",
                            {
                              staticClass: "cart-icon-mb",
                              attrs: { href: "#" },
                            },
                            [_c("i", { staticClass: "fas fa-comment-alt" })]
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "cart-icon-mb",
                          attrs: { to: { path: "/gallery" } },
                        },
                        [
                          _c(
                            "a",
                            {
                              staticClass: "cart-icon-mb",
                              attrs: { href: "#" },
                            },
                            [_c("i", { staticClass: "fas fa-images" })]
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "cart-icon-mb",
                          attrs: { href: "#" },
                          on: { click: _vm.opencartlist },
                        },
                        [
                          _c("i", { staticClass: "fa fa-shopping-cart" }),
                          _vm._v(" "),
                          _c("span", { staticClass: "cart-count" }, [
                            _vm._v(_vm._s(_vm.count)),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "nav",
                        {
                          staticClass:
                            "navbar navbar-expand-lg navbar-light justify-content-end main-menu p-0 mt-2",
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "collapse navbar-collapse justify-content-end",
                              attrs: { id: "navbarResponsiv" },
                            },
                            [
                              _c("ul", { staticClass: "nav " }, [
                                _c(
                                  "li",
                                  { staticClass: "nav-item active" },
                                  [
                                    _c(
                                      "router-link",
                                      { attrs: { to: { path: "/" } } },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass:
                                              "nav-link js-scroll-trigger",
                                            attrs: { href: "#about" },
                                          },
                                          [_vm._v("Home")]
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "li",
                                  { staticClass: "nav-item " },
                                  [
                                    _c(
                                      "router-link",
                                      { attrs: { to: { path: "/feedback" } } },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass:
                                              "nav-link js-scroll-trigger",
                                          },
                                          [_vm._v("Feedback")]
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "li",
                                  { staticClass: "nav-item " },
                                  [
                                    _c(
                                      "router-link",
                                      { attrs: { to: { path: "/gallery" } } },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass:
                                              "nav-link js-scroll-trigger",
                                          },
                                          [_vm._v("Gallery")]
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c("div", { staticClass: "order-now" }, [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "btn btn-rounded-default btn-rounded-danger",
                                        attrs: { href: "#" },
                                        on: {
                                          click: function ($event) {
                                            $event.preventDefault()
                                            return _vm.openPostalCode.apply(
                                              null,
                                              arguments
                                            )
                                          },
                                        },
                                      },
                                      [_vm._v(" Order Online")]
                                    ),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _c(
                                    "div",
                                    {
                                      directives: [
                                        {
                                          name: "click-outside",
                                          rawName: "v-click-outside",
                                          value: _vm.onClickOutside,
                                          expression: "onClickOutside",
                                        },
                                      ],
                                      staticClass:
                                        "cart-icon order-page-menu mobile-cart-icon",
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          attrs: { href: "#" },
                                          on: {
                                            click: function ($event) {
                                              _vm.openCart = !_vm.openCart
                                            },
                                          },
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-shopping-cart",
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "cart-count" },
                                            [_vm._v(_vm._s(_vm.count))]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm.openCart
                                        ? _c(
                                            "div",
                                            {
                                              staticClass: "show-cart",
                                              attrs: { id: "hide" },
                                            },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "card-body" },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "row" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-md-12 item-row scroll style-3",
                                                        },
                                                        [
                                                          _vm._l(
                                                            _vm.cartItems,
                                                            function (
                                                              cart,
                                                              product_index
                                                            ) {
                                                              return _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "row selected-item-row",
                                                                },
                                                                [
                                                                  _c(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "col-md-8",
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "item-list",
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "h5",
                                                                            [
                                                                              _vm._v(
                                                                                _vm._s(
                                                                                  cart.product_name
                                                                                )
                                                                              ),
                                                                            ]
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _vm._l(
                                                                            cart.extras,
                                                                            function (
                                                                              extra,
                                                                              extra_index
                                                                            ) {
                                                                              return cart.extras
                                                                                ? _c(
                                                                                    "p",
                                                                                    [
                                                                                      _c(
                                                                                        "b",
                                                                                        [
                                                                                          _vm._v(
                                                                                            _vm._s(
                                                                                              extra.group_name
                                                                                            ) +
                                                                                              " : "
                                                                                          ),
                                                                                        ]
                                                                                      ),
                                                                                      _vm._v(
                                                                                        _vm._s(
                                                                                          extra.choice
                                                                                        ) +
                                                                                          "\n                                                                            "
                                                                                      ),
                                                                                    ]
                                                                                  )
                                                                                : _vm._e()
                                                                            }
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "span",
                                                                            {
                                                                              staticClass:
                                                                                "item-quantity",
                                                                            },
                                                                            [
                                                                              _c(
                                                                                "strong",
                                                                                [
                                                                                  _vm._v(
                                                                                    "Quantity: "
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                              _vm._v(
                                                                                _vm._s(
                                                                                  cart.quantity
                                                                                )
                                                                              ),
                                                                            ]
                                                                          ),
                                                                        ],
                                                                        2
                                                                      ),
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "col-md-4",
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "edit-options",
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "span",
                                                                            {
                                                                              directives:
                                                                                [
                                                                                  {
                                                                                    name: "b-tooltip",
                                                                                    rawName:
                                                                                      "v-b-tooltip.hover",
                                                                                    modifiers:
                                                                                      {
                                                                                        hover: true,
                                                                                      },
                                                                                  },
                                                                                ],
                                                                              staticClass:
                                                                                "remove-item mr-2",
                                                                              attrs:
                                                                                {
                                                                                  title:
                                                                                    "remove",
                                                                                },
                                                                              on: {
                                                                                click:
                                                                                  function (
                                                                                    $event
                                                                                  ) {
                                                                                    $event.preventDefault()
                                                                                    return _vm.removeFromCart(
                                                                                      cart
                                                                                    )
                                                                                  },
                                                                              },
                                                                            },
                                                                            [
                                                                              _c(
                                                                                "i",
                                                                                {
                                                                                  staticClass:
                                                                                    "fa fa-times",
                                                                                }
                                                                              ),
                                                                            ]
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "span",
                                                                            {
                                                                              directives:
                                                                                [
                                                                                  {
                                                                                    name: "b-tooltip",
                                                                                    rawName:
                                                                                      "v-b-tooltip.hover",
                                                                                    modifiers:
                                                                                      {
                                                                                        hover: true,
                                                                                      },
                                                                                  },
                                                                                ],
                                                                              staticClass:
                                                                                "edit-item",
                                                                              attrs:
                                                                                {
                                                                                  title:
                                                                                    "edit",
                                                                                },
                                                                              on: {
                                                                                click:
                                                                                  function (
                                                                                    $event
                                                                                  ) {
                                                                                    return _vm.updateProduct(
                                                                                      cart.product_id,
                                                                                      cart,
                                                                                      product_index
                                                                                    )
                                                                                  },
                                                                              },
                                                                            },
                                                                            [
                                                                              _c(
                                                                                "i",
                                                                                {
                                                                                  staticClass:
                                                                                    "fas fa-pen",
                                                                                }
                                                                              ),
                                                                            ]
                                                                          ),
                                                                        ]
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ]
                                                              )
                                                            }
                                                          ),
                                                          _vm._v(" "),
                                                          _vm.cartItems
                                                            .length == 0
                                                            ? _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "empty-cart",
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                                                                    No item in cart"
                                                                  ),
                                                                ]
                                                              )
                                                            : _vm._e(),
                                                        ],
                                                        2
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "view-total-menu",
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-md-12",
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "total",
                                                            },
                                                            [
                                                              _c("strong", [
                                                                _vm._v(
                                                                  "Total: "
                                                                ),
                                                              ]),
                                                              _vm._v(
                                                                "£" +
                                                                  _vm._s(
                                                                    _vm.priceFormat(
                                                                      _vm.totalPrice
                                                                    )
                                                                  ) +
                                                                  "\n                                                                "
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "a",
                                                            {
                                                              attrs: {
                                                                href: "",
                                                              },
                                                              on: {
                                                                click:
                                                                  _vm.gotoMenu,
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                                        View Menu\n                                                                    "
                                                              ),
                                                            ]
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          )
                                        : _vm._e(),
                                    ]
                                  ),
                                ]),
                              ]),
                            ]
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          this.$route.name != "online-order" &&
          this.$route.name != "reservation-table" &&
          this.$route.name != "check-out" &&
          this.$route.name != "terms-condition" &&
          this.$route.name != "privacy-policy"
            ? _c("slider")
            : _vm._e(),
          _vm._v(" "),
          this.$route.name != "online-order" &&
          this.$route.name != "reservation-table" &&
          this.$route.name != "check-out"
            ? _c("div", { staticClass: "hero-for-mobile" }, [
                _c("img", {
                  attrs: { src: "https://i.ibb.co/VD4yK5S/hero-img.png" },
                }),
              ])
            : _vm._e(),
          _vm._v(" "),
          this.$route.name != "check-out"
            ? _c("div", { staticClass: "container-fluid" }, [
                _vm.cartItems.length > 0
                  ? _c(
                      "div",
                      {
                        staticClass: "mobile-cart-button",
                        class: { cartheight: _vm.cart_height },
                      },
                      [
                        _c("div", { staticClass: "inner" }, [
                          _c("span", { staticClass: "products-count" }, [
                            _c(
                              "svg",
                              {
                                staticClass: "svg-stroke-container",
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                },
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    fill: "#707070",
                                    d: "M12 2.75a4.75 4.75 0 014.744 4.5h3.103a1 1 0 01.99 1.141l-1.714 12a1 1 0 01-.99.859H5.867a1 1 0 01-.99-.859l-1.714-12a1 1 0 01.99-1.141h3.103A4.75 4.75 0 0112 2.75zm5.559 14.75H6.44a.4.4 0 00-.396.457l.208 1.45a.4.4 0 00.396.343H17.35a.4.4 0 00.396-.343l.208-1.45a.4.4 0 00-.396-.457zm1.25-8.75H5.19a.4.4 0 00-.396.457l.922 6.45a.4.4 0 00.396.343h11.775a.4.4 0 00.396-.343l.922-6.45a.4.4 0 00-.396-.457zM12 4.25a3.251 3.251 0 00-3.193 2.638.305.305 0 00.3.362h5.796a.297.297 0 00.292-.35A3.251 3.251 0 0012 4.25z",
                                  },
                                }),
                              ]
                            ),
                            _vm._v(_vm._s(_vm.count) + "\n                 "),
                            _c("span", { staticClass: "products-value" }, [
                              _vm._v(
                                "£" + _vm._s(_vm.priceFormat(_vm.totalPrice))
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass:
                                "text chek-out-btn btn btn-rounded-danger",
                              on: {
                                click: function ($event) {
                                  return _vm.opencartlist()
                                },
                              },
                            },
                            [_vm._v("Checkout")]
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mb-cart-box" },
                          _vm._l(_vm.cartItems, function (cart, product_index) {
                            return _c("ul", { staticClass: "cart-list" }, [
                              _c("li", [
                                _c("span", { staticClass: "m-box" }, [
                                  _c(
                                    "span",
                                    { staticClass: "meal" },
                                    [
                                      _c("h5", [
                                        _vm._v(_vm._s(cart.product_name)),
                                      ]),
                                      _vm._v(" "),
                                      _vm._l(
                                        cart.extras,
                                        function (extra, extra_index) {
                                          return cart.extras
                                            ? _c("ul", [
                                                _c("li", [
                                                  _c("b", [
                                                    _vm._v(
                                                      _vm._s(extra.group_name) +
                                                        ":"
                                                    ),
                                                  ]),
                                                  _vm._v(
                                                    " " + _vm._s(extra.choice)
                                                  ),
                                                ]),
                                              ])
                                            : _vm._e()
                                        }
                                      ),
                                    ],
                                    2
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "mealactions" }, [
                                    _c(
                                      "a",
                                      {
                                        attrs: { href: "#" },
                                        on: {
                                          click: function ($event) {
                                            return _vm.updateProduct(
                                              cart.product_id,
                                              cart,
                                              product_index
                                            )
                                          },
                                        },
                                      },
                                      [
                                        _c("i", {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover",
                                              modifiers: { hover: true },
                                            },
                                          ],
                                          staticClass: "fas fa-pen",
                                          attrs: { title: "Edit Meal" },
                                        }),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        attrs: { href: "#" },
                                        on: {
                                          click: function ($event) {
                                            $event.preventDefault()
                                            return _vm.removeFromCart(cart)
                                          },
                                        },
                                      },
                                      [
                                        _c("i", {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover",
                                              modifiers: { hover: true },
                                            },
                                          ],
                                          staticClass: "fa fa-times",
                                          attrs: { title: "Remove Meal" },
                                        }),
                                      ]
                                    ),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "qty mob" }, [
                                  _c(
                                    "i",
                                    {
                                      staticStyle: { "font-size": "17px" },
                                      on: {
                                        click: function ($event) {
                                          return _vm.quantityMinusInCart(cart)
                                        },
                                      },
                                    },
                                    [_vm._v("-")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", [_vm._v(_vm._s(cart.quantity))]),
                                  _vm._v(" "),
                                  _c(
                                    "i",
                                    {
                                      staticStyle: { "font-size": "17px" },
                                      on: {
                                        click: function ($event) {
                                          return _vm.quantityAddInCart(
                                            product_index,
                                            cart
                                          )
                                        },
                                      },
                                    },
                                    [_vm._v("+")]
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "price" }, [
                                  _vm._v(
                                    "£" +
                                      _vm._s(
                                        _vm.priceFormat(
                                          cart.single_product_total_amount
                                        )
                                      )
                                  ),
                                ]),
                              ]),
                            ])
                          }),
                          0
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "confirm-btn" }, [
                          _c(
                            "button",
                            {
                              staticClass:
                                "anima-btn btn btn-rounded-danger btn move-eff",
                              on: {
                                click: function ($event) {
                                  return _vm.moveToCheckOutMobile()
                                },
                              },
                            },
                            [_c("span", [_vm._v("Confirm Order")])]
                          ),
                        ]),
                      ]
                    )
                  : _vm._e(),
              ])
            : _vm._e(),
        ],
        1
      ),
      _vm._v(" "),
      _c("download-menu", {
        attrs: {
          showModalProp: _vm.showPopup,
          isMenu: _vm.menu,
          isAllergy: _vm.allergy,
        },
        on: { HideModalValue: _vm.hideModal },
      }),
      _vm._v(" "),
      _c("postal-code-popup", {
        attrs: { showModalProp: _vm.showPostalCode },
        on: { HideModalValue: _vm.hideModal },
      }),
      _vm._v(" "),
      _c("edit-product", {
        attrs: {
          showModalProp: _vm.editProduct,
          list: _vm.list,
          editList: _vm.editList,
          has_sizes: _vm.has_sizes,
          editIndex: _vm.editIndex,
        },
        on: { HideModalValue: _vm.hideModal },
      }),
      _vm._v(" "),
      _c("edit-deal", {
        attrs: {
          showModalProp: _vm.editDeal,
          deals_data: _vm.deals_data,
          editDealsData: _vm.editDealsData,
          editIndex: _vm.editIndex,
        },
        on: { HideModalValue: _vm.hideModal },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common-components/postal-code-popup.vue?vue&type=template&id=042ff17c&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common-components/postal-code-popup.vue?vue&type=template&id=042ff17c& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-modal",
        {
          ref: "myModalRef",
          attrs: {
            id: "postal-code-popup",
            centered: "",
            "ok-variant": "primary",
            "title-tag": "h4",
            title: "Choose your order type",
            "hide-footer": true,
            size: "sm",
            "custom-modal": "",
            "no-close-on-backdrop": "",
            "modal-class": "postal-code-modal custom-modal custom-btm-popup",
          },
          on: { hidden: _vm.onHidden },
        },
        [
          _c("div", { staticClass: "form-cart order-selection" }, [
            _c("img", { attrs: { src: "images/order-food.png" } }),
            _vm._v(" "),
            _c("label", [_c("span", [_vm._v("Choose your order type:")])]),
            _vm._v(" "),
            _c("div", { staticClass: "switch-field" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.order_type,
                    expression: "order_type",
                  },
                ],
                attrs: {
                  type: "radio",
                  id: "radio-one",
                  name: "switch-one",
                  value: "Delivery",
                },
                domProps: { checked: _vm._q(_vm.order_type, "Delivery") },
                on: {
                  change: [
                    function ($event) {
                      _vm.order_type = "Delivery"
                    },
                    _vm.showPostalCode,
                  ],
                },
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: "radio-one" } }, [
                _c("img", { attrs: { src: "/images/delivery.png", alt: "" } }),
                _vm._v(" "),
                _vm._v("Delivery\n                    "),
                _c("span", [_vm._v("30 - 45 mins")]),
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.order_type,
                    expression: "order_type",
                  },
                ],
                attrs: {
                  type: "radio",
                  id: "radio-two",
                  name: "switch-one",
                  value: "Pickup",
                },
                domProps: { checked: _vm._q(_vm.order_type, "Pickup") },
                on: {
                  change: [
                    function ($event) {
                      _vm.order_type = "Pickup"
                    },
                    _vm.showPostalCode,
                  ],
                },
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: "radio-two" } }, [
                _c("img", {
                  attrs: { src: "/images/shopping-basket.png", alt: "" },
                }),
                _vm._v(
                  "\n                    Collection\n                    "
                ),
                _c("span", [_vm._v("20 mins")]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row postal-code-details" }, [
            _c("form", [
              _vm.showPostal
                ? _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _c("span", [_vm._v("Enter your Postcode:")]),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.postal_code,
                          expression: "postal_code",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: "Enter your Postcode",
                      },
                      domProps: { value: _vm.postal_code },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.postal_code = $event.target.value
                        },
                      },
                    }),
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-rounded-default btn-rounded-danger",
                  attrs: { type: "button" },
                  on: { click: _vm.checkPostCode },
                },
                [
                  _c("span", [
                    _vm._v("Submit! "),
                    _c("i", { staticClass: "fas fa-long-arrow-alt-right" }),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c("p", { staticStyle: { color: "red" } }, [
                _vm._v(_vm._s(_vm.error_message) + " "),
              ]),
            ]),
          ]),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common-components/reservation.vue?vue&type=template&id=31a2c08c&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common-components/reservation.vue?vue&type=template&id=31a2c08c&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("section", { staticClass: "section-fullwidth reservation-section" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "deal-content" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { attrs: { id: "messages" } }, [
                _vm.successMessage
                  ? _c(
                      "div",
                      {
                        staticClass: "alert alert-success",
                        attrs: { role: "alert" },
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t" +
                            _vm._s(_vm.successMessage) +
                            "\n\t\t\t\t\t\t\t"
                        ),
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.errorMessage
                  ? _c(
                      "div",
                      {
                        staticClass: "alert alert-danger",
                        attrs: { role: "alert" },
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t" +
                            _vm._s(_vm.errorMessage) +
                            "\n\t\t\t\t\t\t\t"
                        ),
                      ]
                    )
                  : _vm._e(),
              ]),
              _vm._v(" "),
              _c(
                "form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.validateBeforeSubmit()
                    },
                  },
                },
                [
                  _c("div", { staticClass: "form-details" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-4" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _vm._m(1),
                            _vm._v(" "),
                            _c("datepicker", {
                              staticClass: "form-control-datepicker",
                              attrs: {
                                placeholder: "Enter Booking Date",
                                highlighted: _vm.highlighted,
                                format: _vm.customFormatter,
                                "disabled-dates": _vm.disabledDates,
                              },
                              on: { selected: _vm.selectedFromDate },
                              model: {
                                value: _vm.formData.booking_date,
                                callback: function ($$v) {
                                  _vm.$set(_vm.formData, "booking_date", $$v)
                                },
                                expression: "formData.booking_date",
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4 select-person" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _vm._m(2),
                          _vm._v(" "),
                          _vm._m(3),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.formData.persons,
                                  expression: "formData.persons",
                                },
                              ],
                              staticClass: "form-control select-box",
                              attrs: { id: "" },
                              on: {
                                change: function ($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function (o) {
                                      return o.selected
                                    })
                                    .map(function (o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.formData,
                                    "persons",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                },
                              },
                            },
                            [
                              _c(
                                "option",
                                {
                                  attrs: {
                                    value: "null",
                                    selected: "",
                                    disabled: "",
                                  },
                                },
                                [_vm._v("Select No Of Persons")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.noOfperson, function (person, index) {
                                return _c(
                                  "option",
                                  { domProps: { value: person } },
                                  [_vm._v(_vm._s(person))]
                                )
                              }),
                            ],
                            2
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4" }, [
                        _c("label", { attrs: { for: "" } }, [_vm._v(" ")]),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-rounded-danger btn-block",
                            on: {
                              click: function ($event) {
                                return _vm.checkDate()
                              },
                            },
                          },
                          [
                            _vm._v(
                              "\n\t\t\t\t\t\t\t\t\t\t\tBook Your Table\n\t\t\t\t\t\t\t\t\t\t"
                            ),
                          ]
                        ),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _vm.timeSection
                    ? _c(
                        "div",
                        {
                          staticClass: "select-reservation-time boxed",
                          attrs: { id: "hide" },
                        },
                        [
                          _vm._m(4),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "time-avaiable" },
                            _vm._l(_vm.timeSlot, function (slot, index) {
                              return _c("div", { staticClass: "form-group" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.formData.booking_time,
                                      expression: "formData.booking_time",
                                    },
                                  ],
                                  staticClass: "inputTime",
                                  attrs: {
                                    type: "radio",
                                    id: "time" + index,
                                    name: "time",
                                  },
                                  domProps: {
                                    value: slot,
                                    checked: _vm._q(
                                      _vm.formData.booking_time,
                                      slot
                                    ),
                                  },
                                  on: {
                                    change: [
                                      function ($event) {
                                        return _vm.$set(
                                          _vm.formData,
                                          "booking_time",
                                          slot
                                        )
                                      },
                                      _vm.showDinerDetail,
                                    ],
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  {
                                    staticClass: "labelTime",
                                    attrs: { for: "time" + index },
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fas fa-clock mr-2",
                                    }),
                                    _vm._v(_vm._s(slot)),
                                  ]
                                ),
                              ])
                            }),
                            0
                          ),
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.dinerDetails
                    ? _c("div", { staticClass: "diner-details" }, [
                        _c("h3", [_vm._v("Diner Details")]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-md-3" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _vm._m(5),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.formData.firstname,
                                    expression: "formData.firstname",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  placeholder: "Enter your First Name",
                                },
                                domProps: { value: _vm.formData.firstname },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.formData,
                                      "firstname",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-3" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _vm._m(6),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.formData.lastname,
                                    expression: "formData.lastname",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  placeholder: "Enter your Last Name",
                                },
                                domProps: { value: _vm.formData.lastname },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.formData,
                                      "lastname",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-3" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _vm._m(7),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.formData.phone,
                                    expression: "formData.phone",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "number",
                                  placeholder: "07XXXXXXXXX",
                                },
                                domProps: { value: _vm.formData.phone },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.formData,
                                      "phone",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-3" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _vm._m(8),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.formData.email,
                                    expression: "formData.email",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "email",
                                  placeholder: "Enter your Email Address",
                                },
                                domProps: { value: _vm.formData.email },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.formData,
                                      "email",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-3" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Special occasion:"),
                              ]),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.formData.special_occasion,
                                      expression: "formData.special_occasion",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: { name: "", id: "" },
                                  on: {
                                    change: function ($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call(
                                          $event.target.options,
                                          function (o) {
                                            return o.selected
                                          }
                                        )
                                        .map(function (o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.formData,
                                        "special_occasion",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    },
                                  },
                                },
                                [
                                  _c(
                                    "option",
                                    { attrs: { value: "default" } },
                                    [_vm._v("Select an occasion (optional)")]
                                  ),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "1" } }, [
                                    _vm._v("Birthday"),
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "2" } }, [
                                    _vm._v("Anniversary"),
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "3" } }, [
                                    _vm._v("Date night"),
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "4" } }, [
                                    _vm._v("Business Meal"),
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "5" } }, [
                                    _vm._v("Celebration"),
                                  ]),
                                ]
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-9" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Add a special request:"),
                              ]),
                              _vm._v(" "),
                              _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.formData.special_request,
                                    expression: "formData.special_request",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  placeholder:
                                    "Add a special request (optional)",
                                  rows: "1",
                                },
                                domProps: {
                                  value: _vm.formData.special_request,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.formData,
                                      "special_request",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-12 custom-checkbox-input" },
                            [
                              _c("div", { staticClass: "form-group" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.formData.restaurant_newsletter,
                                      expression:
                                        "formData.restaurant_newsletter",
                                    },
                                  ],
                                  staticClass: "form-check-input",
                                  attrs: {
                                    type: "checkbox",
                                    value: "",
                                    id: "defaultCheck1",
                                  },
                                  domProps: {
                                    checked: Array.isArray(
                                      _vm.formData.restaurant_newsletter
                                    )
                                      ? _vm._i(
                                          _vm.formData.restaurant_newsletter,
                                          ""
                                        ) > -1
                                      : _vm.formData.restaurant_newsletter,
                                  },
                                  on: {
                                    change: function ($event) {
                                      var $$a =
                                          _vm.formData.restaurant_newsletter,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = "",
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            _vm.$set(
                                              _vm.formData,
                                              "restaurant_newsletter",
                                              $$a.concat([$$v])
                                            )
                                        } else {
                                          $$i > -1 &&
                                            _vm.$set(
                                              _vm.formData,
                                              "restaurant_newsletter",
                                              $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1))
                                            )
                                        }
                                      } else {
                                        _vm.$set(
                                          _vm.formData,
                                          "restaurant_newsletter",
                                          $$c
                                        )
                                      }
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  {
                                    staticClass: "form-check-label",
                                    attrs: { for: "defaultCheck1" },
                                  },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\t\t\t\tSign me up to receive dining offers and news from this restaurant by email.\n\t\t\t\t\t\t\t\t\t\t\t"
                                    ),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-12 custom-checkbox-input" },
                            [
                              _c("div", { staticClass: "form-group" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.formData.opentable_newsletter,
                                      expression:
                                        "formData.opentable_newsletter",
                                    },
                                  ],
                                  staticClass: "form-check-input",
                                  attrs: {
                                    type: "checkbox",
                                    value: "",
                                    id: "defaultCheck2",
                                  },
                                  domProps: {
                                    checked: Array.isArray(
                                      _vm.formData.opentable_newsletter
                                    )
                                      ? _vm._i(
                                          _vm.formData.opentable_newsletter,
                                          ""
                                        ) > -1
                                      : _vm.formData.opentable_newsletter,
                                  },
                                  on: {
                                    change: function ($event) {
                                      var $$a =
                                          _vm.formData.opentable_newsletter,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = "",
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            _vm.$set(
                                              _vm.formData,
                                              "opentable_newsletter",
                                              $$a.concat([$$v])
                                            )
                                        } else {
                                          $$i > -1 &&
                                            _vm.$set(
                                              _vm.formData,
                                              "opentable_newsletter",
                                              $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1))
                                            )
                                        }
                                      } else {
                                        _vm.$set(
                                          _vm.formData,
                                          "opentable_newsletter",
                                          $$c
                                        )
                                      }
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  {
                                    staticClass: "form-check-label",
                                    attrs: { for: "defaultCheck2" },
                                  },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\t\t\t\tSign me up to receive dining offers and news from OpenTable by email.\n\t\t\t\t\t\t\t\t\t\t\t"
                                    ),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-12 custom-checkbox-input" },
                            [
                              _c("div", { staticClass: "form-group" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.formData.reservations_reminder,
                                      expression:
                                        "formData.reservations_reminder",
                                    },
                                  ],
                                  staticClass: "form-check-input",
                                  attrs: {
                                    type: "checkbox",
                                    value: "",
                                    id: "defaultCheck3",
                                  },
                                  domProps: {
                                    checked: Array.isArray(
                                      _vm.formData.reservations_reminder
                                    )
                                      ? _vm._i(
                                          _vm.formData.reservations_reminder,
                                          ""
                                        ) > -1
                                      : _vm.formData.reservations_reminder,
                                  },
                                  on: {
                                    change: function ($event) {
                                      var $$a =
                                          _vm.formData.reservations_reminder,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = "",
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            _vm.$set(
                                              _vm.formData,
                                              "reservations_reminder",
                                              $$a.concat([$$v])
                                            )
                                        } else {
                                          $$i > -1 &&
                                            _vm.$set(
                                              _vm.formData,
                                              "reservations_reminder",
                                              $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1))
                                            )
                                        }
                                      } else {
                                        _vm.$set(
                                          _vm.formData,
                                          "reservations_reminder",
                                          $$c
                                        )
                                      }
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  {
                                    staticClass: "form-check-label",
                                    attrs: { for: "defaultCheck3" },
                                  },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\t\t\t\tYes, I want to get text updates and reminders about my reservations.\n\t\t\t\t\t\t\t\t\t\t\t"
                                    ),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _vm._m(9),
                          _vm._v(" "),
                          _vm._m(10),
                        ]),
                      ])
                    : _vm._e(),
                ]
              ),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "offers-head" }, [
      _c("h2", { staticClass: "text-center" }, [
        _vm._v("Book your Reservation"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "" } }, [
      _vm._v("Enter Booking Date "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "" } }, [
      _vm._v("Enter No. of Persons "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "f-icon" }, [
      _c("i", { staticClass: "fas fa-user-friends" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [
      _vm._v("Select a Time: "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "" } }, [
      _vm._v("First Name "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "" } }, [
      _vm._v("Last Name "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "" } }, [
      _vm._v("Phone Number "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "" } }, [
      _vm._v("Email Address "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-5" }, [
      _c("label", { attrs: { for: "" } }, [_vm._v(" ")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-rounded-danger btn-block",
          attrs: { type: "submit" },
        },
        [
          _vm._v(
            "\n\t\t\t\t\t\t\t\t\t\t\tComplete Reservation\n\t\t\t\t\t\t\t\t\t\t"
          ),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12 reservation-agreement" }, [
      _c("p", [
        _vm._v("By clicking “Complete reservation” you agree to the "),
        _c("a", { attrs: { href: "javascript:;" } }, [
          _vm._v("OpenTable Terms of Use"),
        ]),
        _vm._v(" and "),
        _c("a", { attrs: { href: "javascript:;" } }, [
          _vm._v("Privacy Policy"),
        ]),
        _vm._v(
          ". Standard text message rates may apply. You may opt out of receiving text messages at any time."
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common-components/slider.vue?vue&type=template&id=76dda5e3&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common-components/slider.vue?vue&type=template&id=76dda5e3& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "hooper",
        { staticStyle: { height: "570px" } },
        [
          _vm._l(_vm.sliders, function (item, index) {
            return _c("slide", [_c("img", { attrs: { src: item.image } })])
          }),
          _vm._v(" "),
          _c("hooper-navigation", {
            attrs: { slot: "hooper-addons" },
            slot: "hooper-addons",
          }),
        ],
        2
      ),
      _vm._v(" "),
      _c("div", { staticClass: "space-70" }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common-components/testimonials.vue?vue&type=template&id=3841a3b6&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common-components/testimonials.vue?vue&type=template&id=3841a3b6& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("section", { staticClass: "section-fullwidth testimonial-section" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "testimonial" }, [
            _c("h2", { staticClass: "text-center" }, [_vm._v("Testimonials")]),
            _vm._v(" "),
            _c("h4", [_vm._v("What our client says about us!")]),
            _vm._v(" "),
            _c("div", { staticClass: "testimonial-reviews" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-4" }, [
                  _c("div", { staticClass: "review-box" }, [
                    _c(
                      "svg",
                      {
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24",
                        },
                      },
                      [
                        _c("path", {
                          attrs: {
                            d: "M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z",
                          },
                        }),
                      ]
                    ),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "We were looking for a nice Halwa poori and chana breakfast place, and luckily went there. Food was amazing, service was great and even the price was reasonable. A family business run well. I highly recommend this place."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "customer-name" }, [
                      _vm._v("- Muhammad A"),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c("div", { staticClass: "review-box" }, [
                    _c(
                      "svg",
                      {
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24",
                        },
                      },
                      [
                        _c("path", {
                          attrs: {
                            d: "M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z",
                          },
                        }),
                      ]
                    ),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Lovely food and great atmosphere. Nice homely vibes. All Halal, tasty breakfast and dinner options. Good fresh homemade food. Nihari is highly recommended."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "customer-name" }, [
                      _vm._v("- Aqeel S "),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c("div", { staticClass: "review-box" }, [
                    _c(
                      "svg",
                      {
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24",
                        },
                      },
                      [
                        _c("path", {
                          attrs: {
                            d: "M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z",
                          },
                        }),
                      ]
                    ),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Went on Sunday afternoon with 20 members of the family and we all enjoyed it. The paratha and achar were lovely and the English breakfast was very filling. We ordered the food and waited 20 mins before it arrived. "
                      ),
                      _c(
                        "a",
                        {
                          attrs: { href: "javascript:;" },
                          on: {
                            click: function ($event) {
                              return _vm.openPopup()
                            },
                          },
                        },
                        [_vm._v("Read more...")]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "customer-name" }, [
                      _vm._v("- atifhaquk"),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("testimonials-popup", {
        attrs: { showModalProp: _vm.showTestimonialPopup },
        on: { HideModalValue: _vm.hideModal },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order-page/main.vue?vue&type=template&id=17e04cff&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/order-page/main.vue?vue&type=template&id=17e04cff& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("header-menu"),
      _vm._v(" "),
      _c("div", { staticClass: "filter-page-head" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-2 col-12" }, [
              _c("h3", [_vm._v(_vm._s(_vm.info.general_setting.site_name))]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-9 col-12" }, [
              _c("ul", { staticClass: "d-flex" }, [
                _c("li", [
                  _c("span", [
                    _c("i", { staticClass: "icon-shopping-cart" }),
                    _vm._v(
                      " " +
                        _vm._s(_vm.info.general_setting.min_collection_time) +
                        " mins"
                    ),
                  ]),
                  _vm._v(
                    "\n                    Collection\n                  "
                  ),
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("span", [
                    _c("i", { staticClass: "icon-scooter" }),
                    _vm._v(
                      " " +
                        _vm._s(_vm.info.general_setting.min_delivery_time) +
                        "  mins "
                    ),
                  ]),
                  _vm._v("\n                    Delivery\n                  "),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "section",
        {
          staticClass: "inner-section main-popup-section filter-page-style2",
          attrs: { id: "product-scroll" },
        },
        [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                {
                  staticClass:
                    " col-lg-3 col-md-4 col-sm-12 listing-page-sidebar lp-sidebar-left",
                },
                [
                  _c("div", { staticClass: "sidebar-area" }, [
                    _c("div", { staticClass: "filter-content" }, [
                      _vm._m(0),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "list-group list-group-flush cate-list",
                        },
                        [
                          _c(
                            "a",
                            {
                              staticClass: "list-group-item",
                              attrs: { href: "#" },
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.getProductAgainstCategories(false)
                                },
                              },
                            },
                            [
                              _vm._v("All"),
                              _c("span", {
                                staticClass:
                                  "float-right badge badge-light round",
                              }),
                            ]
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.categories, function (item, index) {
                            return _c(
                              "a",
                              {
                                staticClass: "list-group-item",
                                attrs: { href: "#" },
                                on: {
                                  click: function ($event) {
                                    $event.preventDefault()
                                    return _vm.getProductAgainstCategories(
                                      item.id
                                    )
                                  },
                                },
                              },
                              [
                                _vm._v(" " + _vm._s(item.name) + "  "),
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "float-right badge badge-light round",
                                  },
                                  [_vm._v(_vm._s(item.products.length))]
                                ),
                              ]
                            )
                          }),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "list-group-item",
                              attrs: { href: "#focus" },
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.getDeals(1)
                                },
                              },
                            },
                            [
                              _vm._v("Deals"),
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "float-right badge badge-light round",
                                },
                                [_vm._v(_vm._s(_vm.totalNumberofDeals))]
                              ),
                            ]
                          ),
                        ],
                        2
                      ),
                    ]),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-5 col-md-8 col-sm-12" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "product-list order-product product-list-scroll",
                  },
                  [
                    _vm._l(_vm.products, function (item, index) {
                      return item.products.length
                        ? _c(
                            "div",
                            { staticClass: "product", attrs: { id: "focus" } },
                            [
                              _c(
                                "div",
                                { staticClass: "row" },
                                [
                                  _c("div", { staticClass: "col-md-12" }, [
                                    _c(
                                      "h2",
                                      {
                                        staticClass: "mb-4",
                                        staticStyle: {
                                          color: "#01a9fb",
                                          "margin-bottom": "25px",
                                        },
                                      },
                                      [_vm._v(_vm._s(item.name))]
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _vm._l(
                                    item.products,
                                    function (product, product_index) {
                                      return _c(
                                        "div",
                                        {
                                          staticClass: "col-md-12 mb-4 pb-1",
                                          staticStyle: {
                                            "border-bottom": "1px dashed #ccc",
                                          },
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "p-d prouct-item" },
                                            [
                                              _c("h3", [
                                                _vm._v(_vm._s(product.name)),
                                              ]),
                                              _vm._v(" "),
                                              _c("p", [
                                                _vm._v(
                                                  _vm._s(product.description) +
                                                    "."
                                                ),
                                              ]),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass: "p-cart product-dec",
                                            },
                                            [
                                              _vm._l(
                                                product.sizes,
                                                function (size, size_index) {
                                                  return product.sizes.length
                                                    ? _c(
                                                        "p",
                                                        {
                                                          staticStyle: {
                                                            "font-size": "12px",
                                                          },
                                                        },
                                                        [
                                                          _vm._v(
                                                            " " +
                                                              _vm._s(
                                                                size.size
                                                              ) +
                                                              " : £" +
                                                              _vm._s(size.price)
                                                          ),
                                                        ]
                                                      )
                                                    : _vm._e()
                                                }
                                              ),
                                              _vm._v(" "),
                                              !product.sizes.length
                                                ? _c("p", [
                                                    _c("span", [_vm._v("£")]),
                                                    _vm._v(
                                                      _vm._s(product.price)
                                                    ),
                                                  ])
                                                : _vm._e(),
                                            ],
                                            2
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "custom-btn2  btn btn-outline-success",
                                              attrs: { href: "#" },
                                              on: {
                                                click: function ($event) {
                                                  $event.preventDefault()
                                                  return _vm.viewProduct(
                                                    product.id
                                                  )
                                                },
                                              },
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                Add to cart "
                                              ),
                                              _c("i", {
                                                staticClass:
                                                  "fas fa-long-arrow-alt-right",
                                              }),
                                            ]
                                          ),
                                        ]
                                      )
                                    }
                                  ),
                                ],
                                2
                              ),
                            ]
                          )
                        : _vm._e()
                    }),
                    _vm._v(" "),
                    _vm._l(_vm.deals, function (item, index) {
                      return _c("div", { staticClass: "product deals-pro" }, [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-md-12" }, [
                            _c(
                              "h2",
                              {
                                staticClass: "mb-4",
                                staticStyle: {
                                  color: "#01a9fb",
                                  "margin-bottom": "25px",
                                },
                              },
                              [_vm._v(_vm._s(item.name))]
                            ),
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "col-md-12 mb-4 pb-1",
                              staticStyle: {
                                "border-bottom": "1px dashed #ccc",
                              },
                            },
                            [
                              _c("div", { staticClass: "p-d" }, [
                                _c("h3", [_vm._v(_vm._s(item.description))]),
                                _vm._v(" "),
                                _c("p", [
                                  _vm._v(_vm._s(item.description) + "."),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "p-cart" }, [
                                _c("p", [
                                  _c("span", [_vm._v("£")]),
                                  _vm._v(_vm._s(item.price)),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "custom-btn2 btn btn-outline-success",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function ($event) {
                                        $event.preventDefault()
                                        return _vm.viewDeal(item.id)
                                      },
                                    },
                                  },
                                  [
                                    _vm._v(" Add to cart "),
                                    _c("i", {
                                      staticClass:
                                        "fas fa-long-arrow-alt-right",
                                    }),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                        ]),
                      ])
                    }),
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "section",
                  { staticClass: "menu-list d-none for-mobile-only" },
                  [
                    _c(
                      "div",
                      { staticClass: "accordion", attrs: { role: "tablist" } },
                      _vm._l(_vm.categories, function (cat, index) {
                        return _c(
                          "b-card",
                          { staticClass: "mb-1", attrs: { "no-body": "" } },
                          [
                            _c(
                              "b-card-header",
                              {
                                staticClass: "p-1",
                                attrs: { "header-tag": "header", role: "tab" },
                                on: {
                                  click: function ($event) {
                                    $event.preventDefault()
                                    return _vm.getProductAgainstCategories(
                                      cat.id
                                    )
                                  },
                                },
                              },
                              [
                                _c(
                                  "b-button",
                                  {
                                    directives: [
                                      {
                                        name: "b-toggle",
                                        rawName: "v-b-toggle",
                                        value: "accordion-" + index,
                                        expression: "'accordion-' +index",
                                      },
                                    ],
                                    attrs: { block: "" },
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(cat.name) +
                                        "\n                                    "
                                    ),
                                    _c("span", {
                                      staticClass: "icon-up-arrow",
                                    }),
                                    _vm._v(" "),
                                    _c("span", {
                                      staticClass: "icon-down-arrow",
                                    }),
                                  ]
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-collapse",
                              {
                                attrs: {
                                  id: "accordion-" + index,
                                  visible: "",
                                  accordion: "my-accordion",
                                  role: "tabpanel",
                                },
                              },
                              [
                                _c("b-card-body", [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "product-list order-product",
                                    },
                                    _vm._l(
                                      _vm.products,
                                      function (item, index) {
                                        return item.products.length
                                          ? _c(
                                              "div",
                                              {
                                                staticClass: "product",
                                                attrs: { id: "focus" },
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "row" },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "col-md-12",
                                                      },
                                                      [
                                                        _c(
                                                          "h2",
                                                          {
                                                            staticClass: "mb-4",
                                                            staticStyle: {
                                                              color: "#01a9fb",
                                                              "margin-bottom":
                                                                "25px",
                                                            },
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(item.name)
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _vm._l(
                                                      item.products,
                                                      function (
                                                        product,
                                                        product_index
                                                      ) {
                                                        return _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "col-md-12 mb-4 pb-1 box-a",
                                                            staticStyle: {
                                                              "border-bottom":
                                                                "1px dashed #ccc",
                                                            },
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "p-d prouct-item",
                                                              },
                                                              [
                                                                _c("h3", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      product.name
                                                                    )
                                                                  ),
                                                                ]),
                                                                _vm._v(" "),
                                                                _c("p", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      product.description
                                                                    ) + "."
                                                                  ),
                                                                ]),
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "p-cart product-dec",
                                                              },
                                                              [
                                                                _vm._l(
                                                                  product.sizes,
                                                                  function (
                                                                    size,
                                                                    size_index
                                                                  ) {
                                                                    return product
                                                                      .sizes
                                                                      .length
                                                                      ? _c(
                                                                          "p",
                                                                          {
                                                                            staticStyle:
                                                                              {
                                                                                "font-size":
                                                                                  "12px",
                                                                              },
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              " " +
                                                                                _vm._s(
                                                                                  size.size
                                                                                ) +
                                                                                " : £" +
                                                                                _vm._s(
                                                                                  size.price
                                                                                )
                                                                            ),
                                                                          ]
                                                                        )
                                                                      : _vm._e()
                                                                  }
                                                                ),
                                                                _vm._v(" "),
                                                                !product.sizes
                                                                  .length
                                                                  ? _c("p", [
                                                                      _c(
                                                                        "span",
                                                                        [
                                                                          _vm._v(
                                                                            "£"
                                                                          ),
                                                                        ]
                                                                      ),
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          product.price
                                                                        )
                                                                      ),
                                                                    ])
                                                                  : _vm._e(),
                                                              ],
                                                              2
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "a",
                                                              {
                                                                staticClass:
                                                                  "custom-btn2  btn btn-outline-success",
                                                                attrs: {
                                                                  href: "#",
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      $event
                                                                    ) {
                                                                      $event.preventDefault()
                                                                      return _vm.viewProduct(
                                                                        product.id
                                                                      )
                                                                    },
                                                                },
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "\n                                                          Add to cart "
                                                                ),
                                                                _c("i", {
                                                                  staticClass:
                                                                    "fas fa-long-arrow-alt-right",
                                                                }),
                                                              ]
                                                            ),
                                                          ]
                                                        )
                                                      }
                                                    ),
                                                  ],
                                                  2
                                                ),
                                              ]
                                            )
                                          : _vm._e()
                                      }
                                    ),
                                    0
                                  ),
                                ]),
                              ],
                              1
                            ),
                          ],
                          1
                        )
                      }),
                      1
                    ),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    " col-lg-4 col-md-12 col-sm-12 cart  check-card add-card listing-page-sidebar lp-sidebar-right",
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "cart-box order",
                      attrs: { id: "cart-stiky" },
                    },
                    [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("form", { staticClass: "form-cart" }, [
                        _c("div", { staticClass: "switch-field" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.orderType,
                                expression: "orderType",
                              },
                            ],
                            attrs: {
                              type: "radio",
                              id: "radio-one",
                              name: "switch-one",
                              value: "Delivery",
                            },
                            domProps: {
                              checked: _vm._q(_vm.orderType, "Delivery"),
                            },
                            on: {
                              change: [
                                function ($event) {
                                  _vm.orderType = "Delivery"
                                },
                                _vm.showPostalCode,
                              ],
                            },
                          }),
                          _vm._v(" "),
                          _vm._m(2),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.orderType,
                                expression: "orderType",
                              },
                            ],
                            attrs: {
                              type: "radio",
                              id: "radio-two",
                              name: "switch-one",
                              value: "Pickup",
                            },
                            domProps: {
                              checked: _vm._q(_vm.orderType, "Pickup"),
                            },
                            on: {
                              change: [
                                function ($event) {
                                  _vm.orderType = "Pickup"
                                },
                                _vm.showPostalCode,
                              ],
                            },
                          }),
                          _vm._v(" "),
                          _vm._m(3),
                        ]),
                        _vm._v(" "),
                        _vm.showPostal
                          ? _c(
                              "div",
                              {
                                staticClass: "form-group",
                                staticStyle: {
                                  position: "relative",
                                  top: "12px",
                                },
                              },
                              [
                                _vm._m(4),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.postalCode,
                                      expression: "postalCode",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    placeholder: "Enter your Postcode",
                                  },
                                  domProps: { value: _vm.postalCode },
                                  on: {
                                    input: function ($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.postalCode = $event.target.value
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  {
                                    staticStyle: {
                                      color: "red",
                                      "font-size": "11px",
                                      "margin-top": "5px",
                                    },
                                  },
                                  [_vm._v(_vm._s(_vm.errorMessage) + " ")]
                                ),
                              ]
                            )
                          : _vm._e(),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "lp-sidebar-body" }, [
                        _c("div", { staticClass: "img-box text-center" }, [
                          _vm.cartItems.length == 0
                            ? _c("h5", { staticClass: "mt-2" }, [
                                _vm._v("No item in your cart"),
                              ])
                            : _vm._e(),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "table-holder" }, [
                          _c(
                            "table",
                            { staticClass: "tbl_cart_list" },
                            _vm._l(
                              _vm.cartItems,
                              function (cart, product_index) {
                                return _c(
                                  "tr",
                                  { staticClass: "section-border" },
                                  [
                                    _c(
                                      "td",
                                      { staticClass: "order-name" },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "cart-order" },
                                          [_vm._v(_vm._s(cart.product_name))]
                                        ),
                                        _vm._v(" "),
                                        _vm._l(
                                          cart.extras,
                                          function (extra, extra_index) {
                                            return cart.extras
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass: "strong-open",
                                                  },
                                                  [
                                                    _c("strong", [
                                                      _vm._v(
                                                        _vm._s(
                                                          extra.group_name
                                                        ) + ":"
                                                      ),
                                                    ]),
                                                    _vm._v(
                                                      " " +
                                                        _vm._s(extra.choice) +
                                                        "\n                                                "
                                                    ),
                                                  ]
                                                )
                                              : _vm._e()
                                          }
                                        ),
                                      ],
                                      2
                                    ),
                                    _vm._v(" "),
                                    _c("td", [
                                      !cart.extras
                                        ? _c("span", { staticClass: "p-0" }, [
                                            _vm._v(
                                              "\n                                                    £ " +
                                                _vm._s(
                                                  _vm.priceFormat(
                                                    cart.price * cart.quantity
                                                  )
                                                ) +
                                                "\n                                                "
                                            ),
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      cart.extras
                                        ? _c(
                                            "span",
                                            { staticClass: "order-priecs" },
                                            [
                                              _vm._v(
                                                "\n                                                    £" +
                                                  _vm._s(
                                                    _vm.priceFormat(
                                                      cart.single_product_total_amount
                                                    )
                                                  ) +
                                                  "\n                                                "
                                              ),
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "mealactions" },
                                        [
                                          _c(
                                            "a",
                                            {
                                              attrs: { href: "#" },
                                              on: {
                                                click: function ($event) {
                                                  $event.preventDefault()
                                                  return _vm.updateProduct(
                                                    cart.product_id,
                                                    cart,
                                                    product_index
                                                  )
                                                },
                                              },
                                            },
                                            [
                                              _c("i", {
                                                directives: [
                                                  {
                                                    name: "b-tooltip",
                                                    rawName:
                                                      "v-b-tooltip.hover",
                                                    modifiers: { hover: true },
                                                  },
                                                ],
                                                staticClass: "icon-edit-1",
                                                attrs: { title: "Edit Meal" },
                                              }),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "a",
                                            {
                                              staticClass: "close-icon",
                                              attrs: { href: "#" },
                                              on: {
                                                click: function ($event) {
                                                  $event.preventDefault()
                                                  return _vm.removeFromCart(
                                                    cart
                                                  )
                                                },
                                              },
                                            },
                                            [
                                              _c("i", {
                                                directives: [
                                                  {
                                                    name: "b-tooltip",
                                                    rawName:
                                                      "v-b-tooltip.hover",
                                                    modifiers: { hover: true },
                                                  },
                                                ],
                                                staticClass: "icon-delete",
                                                attrs: { title: "Remove Meal" },
                                              }),
                                            ]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "order-quty" },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "priec-order" },
                                            [
                                              _c(
                                                "a",
                                                {
                                                  staticClass: "icon-down",
                                                  attrs: { href: "#" },
                                                  on: {
                                                    click: function ($event) {
                                                      $event.preventDefault()
                                                      return _vm.quantityMinusInCart(
                                                        cart
                                                      )
                                                    },
                                                  },
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass:
                                                      "icon-subtract",
                                                  }),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                { staticClass: "text-center" },
                                                [
                                                  _vm._v(
                                                    _vm._s(cart.quantity) + "  "
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "a",
                                                {
                                                  staticClass: "icon-up",
                                                  attrs: { href: "#" },
                                                  on: {
                                                    click: function ($event) {
                                                      $event.preventDefault()
                                                      return _vm.quantityAddInCart(
                                                        product_index,
                                                        cart
                                                      )
                                                    },
                                                  },
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass: "icon-plus",
                                                  }),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ]
                                )
                              }
                            ),
                            0
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "cart-btn mt-3 mb-3 text-center" },
                          [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "anima-btn custom-btn move-eff btn btn-rounded-danger",
                                on: {
                                  click: function ($event) {
                                    return _vm.placeOrder()
                                  },
                                },
                              },
                              [_c("span", [_vm._v("Checkout")])]
                            ),
                          ]
                        ),
                      ]),
                    ]
                  ),
                ]
              ),
            ]),
          ]),
        ]
      ),
      _vm._v(" "),
      _c("add-product", {
        attrs: {
          showModalProp: _vm.product,
          list: _vm.list,
          has_sizes: _vm.has_sizes,
        },
        on: { HideModalValue: _vm.hideModal },
      }),
      _vm._v(" "),
      _c("edit-product", {
        attrs: {
          showModalProp: _vm.editProduct,
          list: _vm.list,
          editList: _vm.editList,
          has_sizes: _vm.has_sizes,
          editIndex: _vm.editIndex,
        },
        on: { HideModalValue: _vm.hideModal },
      }),
      _vm._v(" "),
      _c("add-deal", {
        attrs: { showModalProp: _vm.dealsModal, deals_data: _vm.deals_data },
        on: { HideModalValue: _vm.hideModal },
      }),
      _vm._v(" "),
      _c("edit-deal", {
        attrs: {
          showModalProp: _vm.editDeal,
          deals_data: _vm.deals_data,
          editDealsData: _vm.editDealsData,
          editIndex: _vm.editIndex,
        },
        on: { HideModalValue: _vm.hideModal },
      }),
      _vm._v(" "),
      _c("footer-menu"),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lp-sidebar-title cate-heading" }, [
      _c("h3", [_vm._v("Categories")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lp-sidebar-title cate-heading" }, [
      _c("h3", { staticClass: "text-left" }, [_vm._v("Your Cart")]),
      _vm._v(" "),
      _c("img", { attrs: { src: __webpack_require__(/*! ../../../images/cart.png */ "./resources/images/cart.png") } }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "radio-one" } }, [
      _c("img", { attrs: { src: "/images/delivery.png", alt: "" } }),
      _vm._v(" "),
      _vm._v("Delivery\n                                         "),
      _c("span", [_vm._v("30 - 45 mins")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "radio-two" } }, [
      _c("img", { attrs: { src: "/images/shopping-basket.png", alt: "" } }),
      _vm._v(
        "\n                                         Collection\n                                         "
      ),
      _c("span", [_vm._v("20 mins")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "" } }, [
      _c("span", [_vm._v("Enter your Postcode:")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order-page/popup/add-deal.vue?vue&type=template&id=66420e3e&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/order-page/popup/add-deal.vue?vue&type=template&id=66420e3e& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-modal",
        {
          ref: "myModalRef",
          attrs: {
            id: "add-deal",
            centered: "",
            "ok-only": "",
            "ok-title":
              "Add to Order £ " +
              _vm.priceFormat(
                _vm.total_amount_of_single_product * _vm.product_quantity
              ),
            "ok-disabled": _vm.mandatory,
            "title-tag": "h4",
            "ok-variant": "primary",
            "custom-modal": "",
            "no-close-on-backdrop": "",
            "modal-class": "custom-modal order-product custom-btm-popup",
          },
          on: {
            hidden: _vm.onHidden,
            ok: function ($event) {
              return _vm.addToCart()
            },
          },
          scopedSlots: _vm._u([
            {
              key: "modal-title",
              fn: function () {
                return [_vm._v(_vm._s(_vm.deals_data.name))]
              },
              proxy: true,
            },
          ]),
        },
        [
          _vm.error_message
            ? _c(
                "b-alert",
                {
                  staticStyle: { "text-transform": "capitalize" },
                  attrs: { show: "", variant: "danger" },
                },
                [_vm._v(_vm._s(_vm.error_message))]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm._v(" "),
          _c("div", { staticClass: "product-gallery text-center" }, [
            _c("h4", [_vm._v(" £ " + _vm._s(_vm.deals_data.price) + "  ")]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "description add-deal-section" }, [
            _c("p", { staticClass: "pb-2 text-center" }, [
              _vm._v(_vm._s(_vm.deals_data.description)),
            ]),
          ]),
          _vm._v(" "),
          _vm._l(_vm.dealsProducts, function (item, index) {
            return _c(
              "div",
              { staticClass: "deal-head" },
              _vm._l(item.quantity, function (n, index) {
                return _c(
                  "div",
                  { staticClass: "sub-cat mt-3" },
                  [
                    _c("h4", [
                      _vm._v(_vm._s(item.name) + " " + _vm._s(n) + " "),
                    ]),
                    _vm._v(" "),
                    _vm._l(item.products, function (product, index) {
                      return _c("div", [
                        _c("ul", { staticClass: "selectionlist radio-list" }, [
                          _c("li", [
                            _c("label", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.productData[item.name + " " + n],
                                    expression: "productData[item.name +' '+n]",
                                  },
                                ],
                                attrs: { type: "radio" },
                                domProps: {
                                  value: product.name + "##@@" + 0,
                                  checked: _vm._q(
                                    _vm.productData[item.name + " " + n],
                                    product.name + "##@@" + 0
                                  ),
                                },
                                on: {
                                  change: function ($event) {
                                    return _vm.$set(
                                      _vm.productData,
                                      item.name + " " + n,
                                      product.name + "##@@" + 0
                                    )
                                  },
                                },
                              }),
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(product.name) +
                                  "\n                                    \n                                    "
                              ),
                              _c("span", { staticClass: "checkmark" }),
                            ]),
                          ]),
                        ]),
                      ])
                    }),
                    _vm._v(" "),
                    item.is_options == 1
                      ? _c(
                          "div",
                          _vm._l(
                            item.products[0].groups,
                            function (item, index) {
                              return _c(
                                "div",
                                { staticClass: "sub-cat mt-3" },
                                [
                                  _c("h4", [_vm._v(_vm._s(item.name))]),
                                  _vm._v(" "),
                                  _c(
                                    "ul",
                                    { staticClass: "selectionlist radio-list" },
                                    _vm._l(
                                      item.choices,
                                      function (choice, choice_index) {
                                        return _c("li", [
                                          _c("label", [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.productData[
                                                      item.name + " " + n
                                                    ],
                                                  expression:
                                                    "productData[item.name +' '+n]",
                                                },
                                              ],
                                              attrs: { type: "radio" },
                                              domProps: {
                                                value:
                                                  choice.name +
                                                  "##@@" +
                                                  _vm.priceFormat(
                                                    choice.price === undefined
                                                      ? 0
                                                      : choice.price
                                                  ),
                                                checked: _vm._q(
                                                  _vm.productData[
                                                    item.name + " " + n
                                                  ],
                                                  choice.name +
                                                    "##@@" +
                                                    _vm.priceFormat(
                                                      choice.price === undefined
                                                        ? 0
                                                        : choice.price
                                                    )
                                                ),
                                              },
                                              on: {
                                                click: function ($event) {
                                                  _vm.productSum(
                                                    item.name,
                                                    _vm.priceFormat(
                                                      choice.price === undefined
                                                        ? 0
                                                        : choice.price
                                                    )
                                                  )
                                                },
                                                change: function ($event) {
                                                  _vm.$set(
                                                    _vm.productData,
                                                    item.name + " " + n,
                                                    choice.name +
                                                      "##@@" +
                                                      _vm.priceFormat(
                                                        choice.price ===
                                                          undefined
                                                          ? 0
                                                          : choice.price
                                                      )
                                                  )
                                                },
                                              },
                                            }),
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(choice.name) +
                                                "\n                                        \n                                        "
                                            ),
                                            _c("span", {
                                              staticClass: "checkmark",
                                            }),
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticStyle: { float: "right" } },
                                            [
                                              _vm._v(
                                                " £  " + _vm._s(choice.price)
                                              ),
                                            ]
                                          ),
                                        ])
                                      }
                                    ),
                                    0
                                  ),
                                ]
                              )
                            }
                          ),
                          0
                        )
                      : _vm._e(),
                  ],
                  2
                )
              }),
              0
            )
          }),
          _vm._v(" "),
          _c("div", { staticClass: "input-holder" }, [
            _c("h4", [
              _vm._v("Special instructions "),
              _c("span", { staticClass: "required-text" }, [_vm._v(" *")]),
            ]),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.productData["special_instruction"],
                  expression: "productData['special_instruction']",
                },
              ],
              staticClass: "form-control",
              attrs: { rows: "3", cols: "12" },
              domProps: { value: _vm.productData["special_instruction"] },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.productData,
                    "special_instruction",
                    $event.target.value
                  )
                },
              },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "count-footer section-border" }, [
            _c("div", { staticClass: "increment-buttons " }, [
              _c("div", { staticClass: "cont-section" }, [
                _c("div", { staticClass: "select-num text-right" }, [
                  _c("div", { staticClass: "qunt-btn" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn-minus",
                        attrs: { type: "button" },
                        on: {
                          click: function ($event) {
                            $event.preventDefault()
                            return _vm.minusQuantity()
                          },
                        },
                      },
                      [_c("i", { staticClass: "icon-subtract" })]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "btn-badge-count" }, [
                      _vm._v(_vm._s(_vm.product_quantity)),
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn-plus",
                        attrs: { type: "button" },
                        on: {
                          click: function ($event) {
                            $event.preventDefault()
                            return _vm.plusQuantity()
                          },
                        },
                      },
                      [_c("i", { staticClass: "icon-plus" })]
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.mandatory,
                  expression: "mandatory",
                },
              ],
              staticClass: "see-missed",
            },
            [
              _c(
                "a",
                {
                  attrs: { href: "#missed-item" },
                  on: { click: _vm.scrollToTop },
                },
                [
                  _c("span", { staticClass: "i-box" }, [
                    _c("i", { staticClass: "icon-up-arrow" }),
                  ]),
                  _vm._v(
                    "\n                        see what you missed\n                      "
                  ),
                ]
              ),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Make sure you pick all your options for this item. You’re almost there"
                ),
              ]),
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "row mt-3" }),
        ],
        2
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order-page/popup/add-product.vue?vue&type=template&id=4c15b1ec&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/order-page/popup/add-product.vue?vue&type=template&id=4c15b1ec& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-modal",
        {
          ref: "myModalRef",
          attrs: {
            id: "add-product",
            centered: "",
            "ok-only": "",
            "ok-title":
              "Add to Order <span>£ " +
              _vm.priceFormat(
                _vm.total_amount_of_single_product * _vm.product_quantity
              ) +
              "</span>",
            "ok-disabled": _vm.mandatory,
            "title-tag": "h4",
            "ok-variant": "primary",
            "custom-modal": "",
            "no-close-on-backdrop": "",
            "modal-class":
              "postal-code-modal custom-modal order-product custom-btm-popup",
          },
          on: {
            ok: function ($event) {
              return _vm.addToCart()
            },
            hidden: _vm.onHidden,
          },
          scopedSlots: _vm._u([
            {
              key: "modal-title",
              fn: function () {
                return [_vm._v(_vm._s(_vm.list.name))]
              },
              proxy: true,
            },
          ]),
        },
        [
          _vm.error_message
            ? _c(
                "b-alert",
                {
                  staticStyle: { "text-transform": "capitalize" },
                  attrs: { show: "", variant: "danger" },
                },
                [_vm._v(_vm._s(_vm.error_message))]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm._v(" "),
          _c("div", { staticClass: "add-popup" }, [
            _c("div", { staticClass: "product-gallery text-center" }, [
              !_vm.has_sizes
                ? _c("h4", [
                    _vm._v("Price :  £ " + _vm._s(_vm.list.price) + "  "),
                  ])
                : _vm._e(),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "description" }, [
            _c("div", { staticClass: "info-item section-border " }, [
              _c("p", { staticClass: "pb-2 text-center" }, [
                _vm._v(_vm._s(_vm.list.description)),
              ]),
            ]),
            _vm._v(" "),
            _vm.list.food_allergy
              ? _c("h5", [_vm._v("Allergy Information")])
              : _vm._e(),
            _vm._v(" "),
            _vm.list.food_allergy
              ? _c("p", [_vm._v(_vm._s(_vm.list.food_allergy) + " ")])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "form",
              { attrs: { action: "", method: "" } },
              [
                _vm.has_sizes
                  ? _c("div", { staticClass: "sub-cat addcart-form mb-3" }, [
                      _c(
                        "ul",
                        { staticClass: "selectionlist radio-list" },
                        _vm._l(_vm.list.sizes, function (item, index) {
                          return _c("li", [
                            _c("label", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.productData["size"],
                                    expression: "productData['size']",
                                  },
                                ],
                                attrs: { type: "radio" },
                                domProps: {
                                  value:
                                    item.size +
                                    "##@@" +
                                    _vm.priceFormat(item.price),
                                  checked: _vm._q(
                                    _vm.productData["size"],
                                    item.size +
                                      "##@@" +
                                      _vm.priceFormat(item.price)
                                  ),
                                },
                                on: {
                                  click: function ($event) {
                                    _vm.productSum(
                                      "size",
                                      _vm.priceFormat(item.price),
                                      item
                                    )
                                  },
                                  change: function ($event) {
                                    _vm.$set(
                                      _vm.productData,
                                      "size",
                                      item.size +
                                        "##@@" +
                                        _vm.priceFormat(item.price)
                                    )
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "checkmark" }),
                              _vm._v(
                                "\n                                " +
                                  _vm._s(item.size) +
                                  "\n\n                            "
                              ),
                            ]),
                            _vm._v(" "),
                            item.price <= 0
                              ? _c(
                                  "span",
                                  { staticStyle: { float: "right" } },
                                  [_vm._v(" Free")]
                                )
                              : _c(
                                  "span",
                                  { staticStyle: { float: "right" } },
                                  [_vm._v("£  " + _vm._s(item.price))]
                                ),
                          ])
                        }),
                        0
                      ),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm._l(_vm.sizeGroups, function (item, index) {
                  return _vm.sizeGroups.length > 0
                    ? _c(
                        "div",
                        {
                          staticClass: "sub-cat mt-3",
                          attrs: {
                            id:
                              item.group.type == "Mandatory"
                                ? "missed-item"
                                : "",
                            name: item.group.name,
                          },
                        },
                        [
                          _c("h4", [_vm._v(_vm._s(item.group.name))]),
                          _vm._v(" "),
                          _c(
                            "ul",
                            { staticClass: "selectionlist radio-list" },
                            _vm._l(
                              item.group.choices,
                              function (choice, choice_index) {
                                return _c("li", [
                                  _c("label", [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value:
                                            _vm.productData[item.group.name],
                                          expression:
                                            "productData[item.group.name]",
                                        },
                                      ],
                                      attrs: { type: "radio" },
                                      domProps: {
                                        value:
                                          choice.name +
                                          "##@@" +
                                          _vm.priceFormat(choice.price),
                                        checked: _vm._q(
                                          _vm.productData[item.group.name],
                                          choice.name +
                                            "##@@" +
                                            _vm.priceFormat(choice.price)
                                        ),
                                      },
                                      on: {
                                        click: function ($event) {
                                          _vm.productSum(
                                            item.group.name,
                                            _vm.priceFormat(choice.price),
                                            item
                                          )
                                        },
                                        change: function ($event) {
                                          _vm.$set(
                                            _vm.productData,
                                            item.group.name,
                                            choice.name +
                                              "##@@" +
                                              _vm.priceFormat(choice.price)
                                          )
                                        },
                                      },
                                    }),
                                    _vm._v(
                                      "\n                          " +
                                        _vm._s(choice.name) +
                                        "\n                        "
                                    ),
                                    _c("span", { staticClass: "checkmark" }),
                                  ]),
                                  _vm._v(" "),
                                  choice.price <= 0
                                    ? _c(
                                        "span",
                                        { staticStyle: { float: "right" } },
                                        [_vm._v(" Free")]
                                      )
                                    : _c(
                                        "span",
                                        { staticStyle: { float: "right" } },
                                        [_vm._v("£  " + _vm._s(choice.price))]
                                      ),
                                ])
                              }
                            ),
                            0
                          ),
                        ]
                      )
                    : _vm._e()
                }),
                _vm._v(" "),
                _vm._l(_vm.list.groups, function (item, index) {
                  return _c(
                    "div",
                    {
                      staticClass: "sub-cat mt-3",
                      attrs: {
                        id: item.type == "Mandatory" ? "missed-item" : "",
                        name: item.name,
                      },
                    },
                    [
                      _c("h4", [_vm._v(_vm._s(item.name))]),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "selectionlist radio-list" },
                        _vm._l(item.choices, function (choice, choice_index) {
                          return _c("li", [
                            _c("label", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.productData[item.name],
                                    expression: "productData[item.name]",
                                  },
                                ],
                                attrs: { type: "radio" },
                                domProps: {
                                  value:
                                    choice.name +
                                    "##@@" +
                                    _vm.priceFormat(choice.price),
                                  checked: _vm._q(
                                    _vm.productData[item.name],
                                    choice.name +
                                      "##@@" +
                                      _vm.priceFormat(choice.price)
                                  ),
                                },
                                on: {
                                  click: function ($event) {
                                    _vm.productSum(
                                      item.name,
                                      _vm.priceFormat(choice.price),
                                      item
                                    )
                                  },
                                  change: function ($event) {
                                    _vm.$set(
                                      _vm.productData,
                                      item.name,
                                      choice.name +
                                        "##@@" +
                                        _vm.priceFormat(choice.price)
                                    )
                                  },
                                },
                              }),
                              _vm._v(
                                "\n                              " +
                                  _vm._s(choice.name) +
                                  "\n\n                              "
                              ),
                              _c("span", { staticClass: "checkmark" }),
                            ]),
                            _vm._v(" "),
                            choice.price <= 0
                              ? _c(
                                  "span",
                                  { staticStyle: { float: "right" } },
                                  [_vm._v(" Free")]
                                )
                              : _c(
                                  "span",
                                  { staticStyle: { float: "right" } },
                                  [_vm._v("£  " + _vm._s(choice.price))]
                                ),
                          ])
                        }),
                        0
                      ),
                    ]
                  )
                }),
                _vm._v(" "),
                _c("div", { staticClass: "input-holder" }, [
                  _c("h4", [
                    _vm._v("Special instructions "),
                    _c("span", { staticClass: "required-text" }, [
                      _vm._v(" *"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.productData["special_instruction"],
                        expression: "productData['special_instruction']",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { rows: "3", cols: "12" },
                    domProps: { value: _vm.productData["special_instruction"] },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.productData,
                          "special_instruction",
                          $event.target.value
                        )
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "count-footer section-border" }, [
                  _c("div", { staticClass: "increment-buttons " }, [
                    _c("div", { staticClass: "cont-section" }, [
                      _c("div", { staticClass: "select-num text-right" }, [
                        _c("div", { staticClass: "qunt-btn" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn-minus",
                              attrs: { type: "button" },
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.minusQuantity()
                                },
                              },
                            },
                            [_c("i", { staticClass: "icon-subtract" })]
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "btn-badge-count" }, [
                            _vm._v(_vm._s(_vm.product_quantity)),
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn-plus",
                              attrs: { type: "button" },
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.plusQuantity()
                                },
                              },
                            },
                            [_c("i", { staticClass: "icon-plus" })]
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.mandatory,
                        expression: "mandatory",
                      },
                    ],
                    staticClass: "see-missed",
                  },
                  [
                    _c(
                      "a",
                      {
                        attrs: { href: "#missed-item" },
                        on: { click: _vm.scrollToTop },
                      },
                      [
                        _c("span", { staticClass: "i-box" }, [
                          _c("i", { staticClass: "icon-up-arrow" }),
                        ]),
                        _vm._v(
                          "\n                    see what you missed\n                  "
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Make sure you pick all your options for this item. You’re almost there"
                      ),
                    ]),
                  ]
                ),
              ],
              2
            ),
          ]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order-page/popup/edit-deal.vue?vue&type=template&id=992ca154&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/order-page/popup/edit-deal.vue?vue&type=template&id=992ca154& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-modal",
        {
          ref: "myModalRef",
          attrs: {
            id: "add-deal",
            centered: "",
            "ok-only": "",
            "ok-title":
              "Update to Order £ " +
              _vm.priceFormat(
                _vm.total_amount_of_single_product * _vm.product_quantity
              ),
            "title-tag": "h4",
            "ok-variant": "primary",
            "custom-modal": "",
            "no-close-on-backdrop": "",
            "modal-class": "custom-modal order-product custom-btm-popup",
          },
          on: {
            hidden: _vm.onHidden,
            ok: function ($event) {
              return _vm.addToCart()
            },
          },
          scopedSlots: _vm._u([
            {
              key: "modal-title",
              fn: function () {
                return [_vm._v(_vm._s(_vm.deals_data.name))]
              },
              proxy: true,
            },
          ]),
        },
        [
          _vm.error_message
            ? _c(
                "b-alert",
                {
                  staticStyle: { "text-transform": "capitalize" },
                  attrs: { show: "", variant: "danger" },
                },
                [_vm._v(_vm._s(_vm.error_message))]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm._v(" "),
          _c("div", { staticClass: "product-gallery text-center" }, [
            _c("h4", [_vm._v(" £ " + _vm._s(_vm.deals_data.price) + "  ")]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "description" }, [
            _c("div", { staticClass: "info-item mb-4 " }, [
              _c("p", { staticClass: "text-center" }, [
                _vm._v(_vm._s(_vm.deals_data.description)),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _vm._l(_vm.dealsProducts, function (item, index) {
            return _c(
              "div",
              { staticClass: "addcart-form  section-border mb-3" },
              _vm._l(item.quantity, function (n, index) {
                return _c(
                  "div",
                  { staticClass: "sub-cat mt-3" },
                  [
                    _c("h4", [
                      _vm._v(_vm._s(item.name) + " " + _vm._s(n) + " "),
                    ]),
                    _vm._v(" "),
                    _vm._l(item.products, function (product, index) {
                      return _c("div", [
                        _c("ul", { staticClass: "selectionlist radio-list" }, [
                          _c("li", [
                            _c("label", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.productData[item.name + " " + n],
                                    expression: "productData[item.name +' '+n]",
                                  },
                                ],
                                attrs: { type: "radio" },
                                domProps: {
                                  value: product.name,
                                  checked: _vm._q(
                                    _vm.productData[item.name + " " + n],
                                    product.name
                                  ),
                                },
                                on: {
                                  change: function ($event) {
                                    return _vm.$set(
                                      _vm.productData,
                                      item.name + " " + n,
                                      product.name
                                    )
                                  },
                                },
                              }),
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(product.name) +
                                  "\n                                    \n                                    "
                              ),
                              _c("span", { staticClass: "checkmark" }),
                            ]),
                          ]),
                        ]),
                      ])
                    }),
                  ],
                  2
                )
              }),
              0
            )
          }),
          _vm._v(" "),
          _c("div", { staticClass: "input-holder" }, [
            _c("h4", [
              _vm._v("Special instructions "),
              _c("span", { staticClass: "required-text" }, [_vm._v(" *")]),
            ]),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.productData["special_instruction"],
                  expression: "productData['special_instruction']",
                },
              ],
              staticClass: "form-control",
              attrs: { rows: "3", cols: "12" },
              domProps: { value: _vm.productData["special_instruction"] },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.productData,
                    "special_instruction",
                    $event.target.value
                  )
                },
              },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "count-footer section-border" }, [
            _c("div", { staticClass: "increment-buttons " }, [
              _c("div", { staticClass: "cont-section" }, [
                _c("div", { staticClass: "select-num text-right" }, [
                  _c("div", { staticClass: "qunt-btn" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn-minus",
                        attrs: { type: "button" },
                        on: {
                          click: function ($event) {
                            $event.preventDefault()
                            return _vm.minusQuantity()
                          },
                        },
                      },
                      [_c("i", { staticClass: "icon-subtract" })]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "btn-badge-count" }, [
                      _vm._v(_vm._s(_vm.product_quantity)),
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn-plus",
                        attrs: { type: "button" },
                        on: {
                          click: function ($event) {
                            $event.preventDefault()
                            return _vm.plusQuantity()
                          },
                        },
                      },
                      [_c("i", { staticClass: "icon-plus" })]
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mt-3" }),
        ],
        2
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order-page/popup/edit-product.vue?vue&type=template&id=421be075&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/order-page/popup/edit-product.vue?vue&type=template&id=421be075& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-modal",
        {
          ref: "myModalRef",
          attrs: {
            id: "edit-product",
            "ok-only": "",
            "ok-title":
              "Update to Order £ " +
              _vm.priceFormat(
                _vm.total_amount_of_single_product * _vm.product_quantity
              ),
            centered: "",
            "title-tag": "h4",
            "ok-variant": "primary",
            "no-close-on-backdrop": "",
            "modal-class": "custom-modal order-product custom-btm-popup",
          },
          on: {
            ok: function ($event) {
              return _vm.addToCart()
            },
            hidden: _vm.onHidden,
          },
          scopedSlots: _vm._u([
            {
              key: "modal-title",
              fn: function () {
                return [_vm._v(_vm._s(_vm.list.name))]
              },
              proxy: true,
            },
          ]),
        },
        [
          _vm.error_message
            ? _c(
                "b-alert",
                {
                  staticStyle: { "text-transform": "capitalize" },
                  attrs: { show: "", variant: "danger" },
                },
                [_vm._v(_vm._s(_vm.error_message))]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm._v(" "),
          _c("div", { staticClass: "product-gallery text-center" }, [
            !_vm.has_sizes
              ? _c("h4", [_vm._v("Price: £ " + _vm._s(_vm.list.price))])
              : _vm._e(),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "description" }, [
            _c("div", { staticClass: "info-item section-border" }, [
              _c("p", { staticClass: "pb-2 text-center" }, [
                _vm._v(_vm._s(_vm.list.description)),
              ]),
            ]),
            _vm._v(" "),
            _vm.list.food_allergy
              ? _c("h4", [_vm._v("Allergy Information")])
              : _vm._e(),
            _vm._v(" "),
            _vm.list.food_allergy
              ? _c("p", [_vm._v(_vm._s(_vm.list.food_allergy) + " ")])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "form",
              { attrs: { action: "", method: "" } },
              [
                _vm.has_sizes
                  ? _c("div", { staticClass: "sub-cat addcart-form mb-3" }, [
                      _c("h4", [_vm._v("Sizes")]),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "selectionlist radio-list" },
                        _vm._l(_vm.list.sizes, function (item, index) {
                          return _c("li", [
                            _c("label", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.productData["size"],
                                    expression: "productData['size']",
                                  },
                                ],
                                attrs: { type: "radio" },
                                domProps: {
                                  value:
                                    item.size +
                                    "##@@" +
                                    _vm.priceFormat(item.price),
                                  checked: _vm._q(
                                    _vm.productData["size"],
                                    item.size +
                                      "##@@" +
                                      _vm.priceFormat(item.price)
                                  ),
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.productSum(
                                      "size",
                                      item.price,
                                      item
                                    )
                                  },
                                  change: function ($event) {
                                    _vm.$set(
                                      _vm.productData,
                                      "size",
                                      item.size +
                                        "##@@" +
                                        _vm.priceFormat(item.price)
                                    )
                                  },
                                },
                              }),
                              _vm._v(
                                "\n                                      " +
                                  _vm._s(item.size) +
                                  "\n                                    \n                                    "
                              ),
                              _c("span", { staticClass: "checkmark" }),
                            ]),
                            _vm._v(" "),
                            item.price <= 0
                              ? _c(
                                  "span",
                                  { staticStyle: { float: "right" } },
                                  [_vm._v(" Free")]
                                )
                              : _c(
                                  "span",
                                  { staticStyle: { float: "right" } },
                                  [_vm._v("£  " + _vm._s(item.price))]
                                ),
                          ])
                        }),
                        0
                      ),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm._l(_vm.sizeGroups, function (item, index) {
                  return _vm.sizeGroups.length > 0
                    ? _c("div", { staticClass: "sub-cat mt-3" }, [
                        _c("h4", [_vm._v(_vm._s(item.group.name))]),
                        _vm._v(" "),
                        _c(
                          "ul",
                          { staticClass: "selectionlist radio-list" },
                          _vm._l(
                            item.group.choices,
                            function (choice, choice_index) {
                              return _c("li", [
                                _c("label", [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.productData[item.group.name],
                                        expression:
                                          "productData[item.group.name]",
                                      },
                                    ],
                                    attrs: { type: "radio" },
                                    domProps: {
                                      value:
                                        choice.name +
                                        "##@@" +
                                        _vm.priceFormat(choice.price),
                                      checked: _vm._q(
                                        _vm.productData[item.group.name],
                                        choice.name +
                                          "##@@" +
                                          _vm.priceFormat(choice.price)
                                      ),
                                    },
                                    on: {
                                      click: function ($event) {
                                        return _vm.productSum(
                                          item.name,
                                          choice.price,
                                          item
                                        )
                                      },
                                      change: function ($event) {
                                        _vm.$set(
                                          _vm.productData,
                                          item.group.name,
                                          choice.name +
                                            "##@@" +
                                            _vm.priceFormat(choice.price)
                                        )
                                      },
                                    },
                                  }),
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(choice.name) +
                                      "\n                            "
                                  ),
                                  _c("span", { staticClass: "checkmark" }),
                                ]),
                                _vm._v(" "),
                                choice.price <= 0
                                  ? _c(
                                      "span",
                                      { staticStyle: { float: "right" } },
                                      [_vm._v(" Free")]
                                    )
                                  : _c(
                                      "span",
                                      { staticStyle: { float: "right" } },
                                      [_vm._v("£  " + _vm._s(choice.price))]
                                    ),
                              ])
                            }
                          ),
                          0
                        ),
                      ])
                    : _vm._e()
                }),
                _vm._v(" "),
                _vm._l(_vm.list.groups, function (item, index) {
                  return _c("div", { staticClass: "sub-cat mt-3" }, [
                    _c("h4", [_vm._v(_vm._s(item.name))]),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "selectionlist radio-list" },
                      _vm._l(item.choices, function (choice, choice_index) {
                        return _c("li", [
                          _c("label", [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.productData[item.name],
                                  expression: "productData[item.name]",
                                },
                              ],
                              attrs: { type: "radio" },
                              domProps: {
                                value:
                                  choice.name +
                                  "##@@" +
                                  _vm.priceFormat(choice.price),
                                checked: _vm._q(
                                  _vm.productData[item.name],
                                  choice.name +
                                    "##@@" +
                                    _vm.priceFormat(choice.price)
                                ),
                              },
                              on: {
                                click: function ($event) {
                                  return _vm.productSum(
                                    item.name,
                                    choice.price,
                                    item
                                  )
                                },
                                change: function ($event) {
                                  _vm.$set(
                                    _vm.productData,
                                    item.name,
                                    choice.name +
                                      "##@@" +
                                      _vm.priceFormat(choice.price)
                                  )
                                },
                              },
                            }),
                            _vm._v(
                              "\n                                    " +
                                _vm._s(choice.name) +
                                "\n                                    "
                            ),
                            _c("span", { staticClass: "checkmark" }),
                          ]),
                          _vm._v(" "),
                          choice.price <= 0
                            ? _c("span", { staticStyle: { float: "right" } }, [
                                _vm._v(" Free"),
                              ])
                            : _c("span", { staticStyle: { float: "right" } }, [
                                _vm._v("£  " + _vm._s(choice.price)),
                              ]),
                        ])
                      }),
                      0
                    ),
                  ])
                }),
                _vm._v(" "),
                _c("div", { staticClass: "input-holder" }, [
                  _c("h4", [
                    _vm._v("Special instructions "),
                    _c("span", { staticClass: "required-text" }, [
                      _vm._v(" *"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.productData["special_instruction"],
                        expression: "productData['special_instruction']",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { rows: "3", cols: "12" },
                    domProps: { value: _vm.productData["special_instruction"] },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.productData,
                          "special_instruction",
                          $event.target.value
                        )
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "count-footer section-border" }, [
                  _c("div", { staticClass: "increment-buttons " }, [
                    _c("div", { staticClass: "cont-section" }, [
                      _c("div", { staticClass: "select-num text-right" }, [
                        _c("div", { staticClass: "qunt-btn" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn-minus",
                              attrs: { type: "button" },
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.minusQuantity()
                                },
                              },
                            },
                            [_c("i", { staticClass: "icon-subtract" })]
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "btn-badge-count" }, [
                            _vm._v(_vm._s(_vm.product_quantity)),
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn-plus",
                              attrs: { type: "button" },
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.plusQuantity()
                                },
                              },
                            },
                            [_c("i", { staticClass: "icon-plus" })]
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ],
              2
            ),
          ]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order-page/popup/food-allergy.vue?vue&type=template&id=037986da&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/order-page/popup/food-allergy.vue?vue&type=template&id=037986da& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-modal",
        {
          ref: "myModalRef",
          staticClass: "custom-modal",
          attrs: {
            id: "food-allergy",
            centered: "",
            "hide-footer": true,
            "title-tag": "h4",
            "ok-variant": "primary",
            "custom-modal": "",
            "no-close-on-backdrop": "",
          },
          on: { hidden: _vm.onHidden },
        },
        [
          _vm.error_message
            ? _c(
                "b-alert",
                {
                  staticStyle: { "text-transform": "capitalize" },
                  attrs: { show: "", variant: "danger" },
                },
                [_vm._v(_vm._s(_vm.error_message))]
              )
            : _vm._e(),
          _vm._v(" "),
          _c("h3", [_vm._v("Food Allergy")]),
          _vm._v(" "),
          _c("p", [
            _vm._v("Please contact our kitchen staff on "),
            _c("a", { attrs: { href: "tel:01562 74 7727" } }, [
              _vm._v("01562 74 7727"),
            ]),
            _vm._v(" for more information."),
          ]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order-page/popup/testimonials.vue?vue&type=template&id=38b7d7fd&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/order-page/popup/testimonials.vue?vue&type=template&id=38b7d7fd& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-modal",
        {
          ref: "myModalRef",
          staticClass: "custom-modal",
          attrs: {
            id: "food-allergy",
            centered: "",
            "hide-footer": true,
            "title-tag": "h4",
            "ok-variant": "primary",
            "custom-modal": "",
            "no-close-on-backdrop": "",
          },
          on: { hidden: _vm.onHidden },
        },
        [
          _c("h3", [_vm._v("Testimonial")]),
          _vm._v(" "),
          _c("div", { staticClass: "testimonial-text" }, [
            _c("p", [
              _vm._v(
                "Went on Sunday afternoon with 20 members of the family and we all enjoyed it. The paratha and achar were lovely and the English breakfast was very filling. We ordered the food and waited 20 mins before it arrived. So when you guys go make sure your prepared to wait. The staff were brilliant and the lady that I assume owns it was brilliant host and looked after everyone that was there. Will definitely come back."
              ),
            ]),
          ]),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\papag-live\\node_modules\\vue-loader\\lib\\runtime\\componentNormalizer.js'");

/***/ }),

/***/ "./node_modules/vue-router/dist/vue-router.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-router/dist/vue-router.esm.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\papag-live\\node_modules\\vue-router\\dist\\vue-router.esm.js'");

/***/ }),

/***/ "./node_modules/vue/dist/vue.common.js":
/*!*********************************************!*\
  !*** ./node_modules/vue/dist/vue.common.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\papag-live\\node_modules\\vue\\dist\\vue.common.js'");

/***/ }),

/***/ "./node_modules/vue2-selectize/dist/vue2-selectize.js":
/*!************************************************************!*\
  !*** ./node_modules/vue2-selectize/dist/vue2-selectize.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\papag-live\\node_modules\\vue2-selectize\\dist\\vue2-selectize.js'");

/***/ }),

/***/ "./node_modules/vuejs-countdown/dist/vuejs-countdown.js":
/*!**************************************************************!*\
  !*** ./node_modules/vuejs-countdown/dist/vuejs-countdown.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\papag-live\\node_modules\\vuejs-countdown\\dist\\vuejs-countdown.js'");

/***/ }),

/***/ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js":
/*!********************************************************************!*\
  !*** ./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\papag-live\\node_modules\\vuejs-datepicker\\dist\\vuejs-datepicker.esm.js'");

/***/ }),

/***/ "./node_modules/vuex-persistedstate/dist/vuex-persistedstate.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/vuex-persistedstate/dist/vuex-persistedstate.es.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\papag-live\\node_modules\\vuex-persistedstate\\dist\\vuex-persistedstate.es.js'");

/***/ }),

/***/ "./node_modules/vuex/dist/vuex.esm.js":
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: default, Store, createLogger, createNamespacedHelpers, install, mapActions, mapGetters, mapMutations, mapState */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\papag-live\\node_modules\\vuex\\dist\\vuex.esm.js'");

/***/ }),

/***/ "./resources/images/cart.png":
/*!***********************************!*\
  !*** ./resources/images/cart.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/cart.png?e40647f9140f19b0e9cdf39501c60afc";

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store.js */ "./resources/js/store.js");
/* harmony import */ var vue_ctk_date_time_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-ctk-date-time-picker */ "./node_modules/vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.common.js");
/* harmony import */ var vue_ctk_date_time_picker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_ctk_date_time_picker__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_ctk_date_time_picker_dist_vue_ctk_date_time_picker_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css */ "./node_modules/vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css");
/* harmony import */ var vue_ctk_date_time_picker_dist_vue_ctk_date_time_picker_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_ctk_date_time_picker_dist_vue_ctk_date_time_picker_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var selectize_dist_css_selectize_bootstrap3_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! selectize/dist/css/selectize.bootstrap3.css */ "./node_modules/selectize/dist/css/selectize.bootstrap3.css");
/* harmony import */ var selectize_dist_css_selectize_bootstrap3_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(selectize_dist_css_selectize_bootstrap3_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue_credit_card_validation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-credit-card-validation */ "./node_modules/vue-credit-card-validation/dist/vue-credit-card-validation.esm.js");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");








__webpack_require__(/*! vue-image-lightbox/dist/vue-image-lightbox.min.css */ "./node_modules/vue-image-lightbox/dist/vue-image-lightbox.min.css");


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_credit_card_validation__WEBPACK_IMPORTED_MODULE_7__["default"]);

vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuejs_datepicker__WEBPACK_IMPORTED_MODULE_8__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
window.moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");



var config = {
  errorBagName: 'errorBag',
  events: 'input'
};
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vee_validate__WEBPACK_IMPORTED_MODULE_10__["default"], config);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["ModalPlugin"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_2__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('VueCtkDateTimePicker', vue_ctk_date_time_picker__WEBPACK_IMPORTED_MODULE_4___default.a);

__webpack_require__(/*! ./components-tags */ "./resources/js/components-tags.js");

var router = new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    component: __webpack_require__(/*! ./components/Home.vue */ "./resources/js/components/Home.vue")["default"]
  }, {
    path: '/reservation',
    name: 'reservation',
    component: __webpack_require__(/*! ./components/Reservation.vue */ "./resources/js/components/Reservation.vue")["default"]
  }, {
    path: '/feedback',
    name: 'feedback',
    component: __webpack_require__(/*! ./components/Feedback.vue */ "./resources/js/components/Feedback.vue")["default"]
  }, {
    path: '/check-out',
    name: 'check-out',
    component: __webpack_require__(/*! ./components/Checkout.vue */ "./resources/js/components/Checkout.vue")["default"]
  }, {
    path: '/stream-check-out',
    name: 'stream-check-out',
    component: __webpack_require__(/*! ./components/Checkout.vue */ "./resources/js/components/Checkout.vue")["default"]
  }, {
    path: '/thankyou',
    name: 'thankyou',
    component: __webpack_require__(/*! ./components/Thankyou.vue */ "./resources/js/components/Thankyou.vue")["default"]
  }, {
    path: '/contact-us',
    name: 'contact-us',
    component: __webpack_require__(/*! ./components/Contactus.vue */ "./resources/js/components/Contactus.vue")["default"]
  }, {
    path: '/about-us',
    name: 'about-us',
    component: __webpack_require__(/*! ./components/Aboutus.vue */ "./resources/js/components/Aboutus.vue")["default"]
  }, {
    path: '/online-order',
    name: 'online-order',
    component: __webpack_require__(/*! ./components/order-page/main.vue */ "./resources/js/components/order-page/main.vue")["default"]
  }, {
    path: '/reservation-table',
    name: 'reservation-table',
    component: __webpack_require__(/*! ./components/Reservation.vue */ "./resources/js/components/Reservation.vue")["default"]
  }, {
    path: '/order-detail',
    name: 'order-detail',
    component: __webpack_require__(/*! ./components/OrderDetail.vue */ "./resources/js/components/OrderDetail.vue")["default"]
  }, {
    path: '/order-confirmed/:id',
    component: __webpack_require__(/*! ./components/OrderConfirmed.vue */ "./resources/js/components/OrderConfirmed.vue")["default"]
  }, {
    path: '/kitchen-screen',
    component: __webpack_require__(/*! ./components/KitchenScreen.vue */ "./resources/js/components/KitchenScreen.vue")["default"]
  }, {
    path: '/gallery',
    component: __webpack_require__(/*! ./components/Gallery.vue */ "./resources/js/components/Gallery.vue")["default"]
  }, {
    path: '/terms-condition',
    name: 'terms-condition',
    component: __webpack_require__(/*! ./components/TermsCondition.vue */ "./resources/js/components/TermsCondition.vue")["default"]
  }, {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: __webpack_require__(/*! ./components/PrivacyPolicy.vue */ "./resources/js/components/PrivacyPolicy.vue")["default"]
  }]
});
new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  el: '#app',
  components: {},
  router: router,
  store: _store_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  data: function data() {
    return {
      loading: true
    };
  },
  created: function created() {
    var _this = this;

    setTimeout(function () {
      _this.loading = false;
    }, 1000);
  }
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")["default"];
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
} catch (e) {}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./resources/js/components-tags.js":
/*!*****************************************!*\
  !*** ./resources/js/components-tags.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// auth components
Vue.component('header-menu', __webpack_require__(/*! ./components/common-components/nav-menu.vue */ "./resources/js/components/common-components/nav-menu.vue")["default"]);
Vue.component('slider', __webpack_require__(/*! ./components/common-components/slider.vue */ "./resources/js/components/common-components/slider.vue")["default"]);
Vue.component('footer-menu', __webpack_require__(/*! ./components/common-components/footer.vue */ "./resources/js/components/common-components/footer.vue")["default"]);
Vue.component('alert', __webpack_require__(/*! ./components/common-components/Alert.vue */ "./resources/js/components/common-components/Alert.vue")["default"]);
Vue.component('add-product', __webpack_require__(/*! ./components/order-page/popup/add-product.vue */ "./resources/js/components/order-page/popup/add-product.vue")["default"]);
Vue.component('edit-product', __webpack_require__(/*! ./components/order-page/popup/edit-product.vue */ "./resources/js/components/order-page/popup/edit-product.vue")["default"]);
Vue.component('download-menu', __webpack_require__(/*! ./components/common-components/download-menu.vue */ "./resources/js/components/common-components/download-menu.vue")["default"]);
Vue.component('postal-code-popup', __webpack_require__(/*! ./components/common-components/postal-code-popup.vue */ "./resources/js/components/common-components/postal-code-popup.vue")["default"]);
Vue.component('add-deal', __webpack_require__(/*! ./components/order-page/popup/add-deal.vue */ "./resources/js/components/order-page/popup/add-deal.vue")["default"]);
Vue.component('edit-deal', __webpack_require__(/*! ./components/order-page/popup/edit-deal.vue */ "./resources/js/components/order-page/popup/edit-deal.vue")["default"]);
Vue.component('food-allergy', __webpack_require__(/*! ./components/order-page/popup/food-allergy.vue */ "./resources/js/components/order-page/popup/food-allergy.vue")["default"]);
Vue.component('testimonials-popup', __webpack_require__(/*! ./components/order-page/popup/testimonials.vue */ "./resources/js/components/order-page/popup/testimonials.vue")["default"]);
Vue.component('reservation', __webpack_require__(/*! ./components/common-components/reservation.vue */ "./resources/js/components/common-components/reservation.vue")["default"]);
Vue.component('testimonials', __webpack_require__(/*! ./components/common-components/testimonials.vue */ "./resources/js/components/common-components/testimonials.vue")["default"]);

/***/ }),

/***/ "./resources/js/components/Aboutus.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Aboutus.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Aboutus_vue_vue_type_template_id_504e3ed0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Aboutus.vue?vue&type=template&id=504e3ed0& */ "./resources/js/components/Aboutus.vue?vue&type=template&id=504e3ed0&");
/* harmony import */ var _Aboutus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Aboutus.vue?vue&type=script&lang=js& */ "./resources/js/components/Aboutus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Aboutus_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Aboutus.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Aboutus.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Aboutus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Aboutus_vue_vue_type_template_id_504e3ed0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Aboutus_vue_vue_type_template_id_504e3ed0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Aboutus.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Aboutus.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Aboutus.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Aboutus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Aboutus.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Aboutus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Aboutus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Aboutus.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Aboutus.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Aboutus_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Aboutus.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Aboutus.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Aboutus_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Aboutus_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Aboutus_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Aboutus_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Aboutus.vue?vue&type=template&id=504e3ed0&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Aboutus.vue?vue&type=template&id=504e3ed0& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Aboutus_vue_vue_type_template_id_504e3ed0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Aboutus.vue?vue&type=template&id=504e3ed0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Aboutus.vue?vue&type=template&id=504e3ed0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Aboutus_vue_vue_type_template_id_504e3ed0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Aboutus_vue_vue_type_template_id_504e3ed0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Checkout.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Checkout.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Checkout_vue_vue_type_template_id_715e4fb1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkout.vue?vue&type=template&id=715e4fb1& */ "./resources/js/components/Checkout.vue?vue&type=template&id=715e4fb1&");
/* harmony import */ var _Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkout.vue?vue&type=script&lang=js& */ "./resources/js/components/Checkout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Checkout_vue_vue_type_template_id_715e4fb1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Checkout_vue_vue_type_template_id_715e4fb1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Checkout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Checkout.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Checkout.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Checkout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Checkout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Checkout.vue?vue&type=template&id=715e4fb1&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Checkout.vue?vue&type=template&id=715e4fb1& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_715e4fb1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Checkout.vue?vue&type=template&id=715e4fb1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Checkout.vue?vue&type=template&id=715e4fb1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_715e4fb1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_715e4fb1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Contactus.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Contactus.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contactus_vue_vue_type_template_id_e71c743a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contactus.vue?vue&type=template&id=e71c743a& */ "./resources/js/components/Contactus.vue?vue&type=template&id=e71c743a&");
/* harmony import */ var _Contactus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contactus.vue?vue&type=script&lang=js& */ "./resources/js/components/Contactus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Contactus_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contactus.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Contactus.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Contactus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Contactus_vue_vue_type_template_id_e71c743a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Contactus_vue_vue_type_template_id_e71c743a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Contactus.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Contactus.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Contactus.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contactus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Contactus.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Contactus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contactus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Contactus.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Contactus.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Contactus_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Contactus.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Contactus.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Contactus_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Contactus_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Contactus_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Contactus_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Contactus.vue?vue&type=template&id=e71c743a&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Contactus.vue?vue&type=template&id=e71c743a& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contactus_vue_vue_type_template_id_e71c743a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Contactus.vue?vue&type=template&id=e71c743a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Contactus.vue?vue&type=template&id=e71c743a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contactus_vue_vue_type_template_id_e71c743a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contactus_vue_vue_type_template_id_e71c743a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Feedback.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Feedback.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Feedback_vue_vue_type_template_id_995c9320___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Feedback.vue?vue&type=template&id=995c9320& */ "./resources/js/components/Feedback.vue?vue&type=template&id=995c9320&");
/* harmony import */ var _Feedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Feedback.vue?vue&type=script&lang=js& */ "./resources/js/components/Feedback.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Feedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Feedback_vue_vue_type_template_id_995c9320___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Feedback_vue_vue_type_template_id_995c9320___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Feedback.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Feedback.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Feedback.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Feedback.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Feedback.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Feedback.vue?vue&type=template&id=995c9320&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Feedback.vue?vue&type=template&id=995c9320& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedback_vue_vue_type_template_id_995c9320___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Feedback.vue?vue&type=template&id=995c9320& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Feedback.vue?vue&type=template&id=995c9320&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedback_vue_vue_type_template_id_995c9320___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedback_vue_vue_type_template_id_995c9320___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Gallery.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Gallery.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Gallery_vue_vue_type_template_id_5761a7b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gallery.vue?vue&type=template&id=5761a7b7& */ "./resources/js/components/Gallery.vue?vue&type=template&id=5761a7b7&");
/* harmony import */ var _Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gallery.vue?vue&type=script&lang=js& */ "./resources/js/components/Gallery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Gallery_vue_vue_type_template_id_5761a7b7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Gallery_vue_vue_type_template_id_5761a7b7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Gallery.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Gallery.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Gallery.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Gallery.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Gallery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Gallery.vue?vue&type=template&id=5761a7b7&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Gallery.vue?vue&type=template&id=5761a7b7& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_template_id_5761a7b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Gallery.vue?vue&type=template&id=5761a7b7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Gallery.vue?vue&type=template&id=5761a7b7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_template_id_5761a7b7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_template_id_5761a7b7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Home.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Home.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=f2b6376c& */ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=template&id=f2b6376c& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=f2b6376c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/KitchenScreen.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/KitchenScreen.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _KitchenScreen_vue_vue_type_template_id_f9938656___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KitchenScreen.vue?vue&type=template&id=f9938656& */ "./resources/js/components/KitchenScreen.vue?vue&type=template&id=f9938656&");
/* harmony import */ var _KitchenScreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KitchenScreen.vue?vue&type=script&lang=js& */ "./resources/js/components/KitchenScreen.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _KitchenScreen_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KitchenScreen.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/KitchenScreen.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _KitchenScreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _KitchenScreen_vue_vue_type_template_id_f9938656___WEBPACK_IMPORTED_MODULE_0__["render"],
  _KitchenScreen_vue_vue_type_template_id_f9938656___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/KitchenScreen.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/KitchenScreen.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/KitchenScreen.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KitchenScreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./KitchenScreen.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/KitchenScreen.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KitchenScreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/KitchenScreen.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/KitchenScreen.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KitchenScreen_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./KitchenScreen.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/KitchenScreen.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KitchenScreen_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KitchenScreen_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KitchenScreen_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KitchenScreen_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/KitchenScreen.vue?vue&type=template&id=f9938656&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/KitchenScreen.vue?vue&type=template&id=f9938656& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KitchenScreen_vue_vue_type_template_id_f9938656___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./KitchenScreen.vue?vue&type=template&id=f9938656& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/KitchenScreen.vue?vue&type=template&id=f9938656&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KitchenScreen_vue_vue_type_template_id_f9938656___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KitchenScreen_vue_vue_type_template_id_f9938656___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/OrderConfirmed.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/OrderConfirmed.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OrderConfirmed_vue_vue_type_template_id_61df4348___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderConfirmed.vue?vue&type=template&id=61df4348& */ "./resources/js/components/OrderConfirmed.vue?vue&type=template&id=61df4348&");
/* harmony import */ var _OrderConfirmed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderConfirmed.vue?vue&type=script&lang=js& */ "./resources/js/components/OrderConfirmed.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OrderConfirmed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrderConfirmed_vue_vue_type_template_id_61df4348___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OrderConfirmed_vue_vue_type_template_id_61df4348___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/OrderConfirmed.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/OrderConfirmed.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/OrderConfirmed.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderConfirmed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./OrderConfirmed.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OrderConfirmed.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderConfirmed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/OrderConfirmed.vue?vue&type=template&id=61df4348&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/OrderConfirmed.vue?vue&type=template&id=61df4348& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderConfirmed_vue_vue_type_template_id_61df4348___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./OrderConfirmed.vue?vue&type=template&id=61df4348& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OrderConfirmed.vue?vue&type=template&id=61df4348&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderConfirmed_vue_vue_type_template_id_61df4348___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderConfirmed_vue_vue_type_template_id_61df4348___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/OrderDetail.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/OrderDetail.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OrderDetail_vue_vue_type_template_id_30ab9ca4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderDetail.vue?vue&type=template&id=30ab9ca4& */ "./resources/js/components/OrderDetail.vue?vue&type=template&id=30ab9ca4&");
/* harmony import */ var _OrderDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderDetail.vue?vue&type=script&lang=js& */ "./resources/js/components/OrderDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OrderDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrderDetail_vue_vue_type_template_id_30ab9ca4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OrderDetail_vue_vue_type_template_id_30ab9ca4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/OrderDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/OrderDetail.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/OrderDetail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./OrderDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OrderDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/OrderDetail.vue?vue&type=template&id=30ab9ca4&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/OrderDetail.vue?vue&type=template&id=30ab9ca4& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetail_vue_vue_type_template_id_30ab9ca4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./OrderDetail.vue?vue&type=template&id=30ab9ca4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OrderDetail.vue?vue&type=template&id=30ab9ca4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetail_vue_vue_type_template_id_30ab9ca4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetail_vue_vue_type_template_id_30ab9ca4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/PrivacyPolicy.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/PrivacyPolicy.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PrivacyPolicy_vue_vue_type_template_id_34680d7f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrivacyPolicy.vue?vue&type=template&id=34680d7f& */ "./resources/js/components/PrivacyPolicy.vue?vue&type=template&id=34680d7f&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _PrivacyPolicy_vue_vue_type_template_id_34680d7f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PrivacyPolicy_vue_vue_type_template_id_34680d7f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PrivacyPolicy.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/PrivacyPolicy.vue?vue&type=template&id=34680d7f&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/PrivacyPolicy.vue?vue&type=template&id=34680d7f& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrivacyPolicy_vue_vue_type_template_id_34680d7f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PrivacyPolicy.vue?vue&type=template&id=34680d7f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PrivacyPolicy.vue?vue&type=template&id=34680d7f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrivacyPolicy_vue_vue_type_template_id_34680d7f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrivacyPolicy_vue_vue_type_template_id_34680d7f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Reservation.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/Reservation.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reservation_vue_vue_type_template_id_530d0e9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reservation.vue?vue&type=template&id=530d0e9e& */ "./resources/js/components/Reservation.vue?vue&type=template&id=530d0e9e&");
/* harmony import */ var _Reservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reservation.vue?vue&type=script&lang=js& */ "./resources/js/components/Reservation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Reservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Reservation_vue_vue_type_template_id_530d0e9e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Reservation_vue_vue_type_template_id_530d0e9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Reservation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Reservation.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Reservation.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Reservation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reservation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Reservation.vue?vue&type=template&id=530d0e9e&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Reservation.vue?vue&type=template&id=530d0e9e& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_template_id_530d0e9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Reservation.vue?vue&type=template&id=530d0e9e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reservation.vue?vue&type=template&id=530d0e9e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_template_id_530d0e9e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_template_id_530d0e9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/TermsCondition.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/TermsCondition.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TermsCondition_vue_vue_type_template_id_8d9ea702___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TermsCondition.vue?vue&type=template&id=8d9ea702& */ "./resources/js/components/TermsCondition.vue?vue&type=template&id=8d9ea702&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _TermsCondition_vue_vue_type_template_id_8d9ea702___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TermsCondition_vue_vue_type_template_id_8d9ea702___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TermsCondition.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/TermsCondition.vue?vue&type=template&id=8d9ea702&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/TermsCondition.vue?vue&type=template&id=8d9ea702& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TermsCondition_vue_vue_type_template_id_8d9ea702___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TermsCondition.vue?vue&type=template&id=8d9ea702& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TermsCondition.vue?vue&type=template&id=8d9ea702&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TermsCondition_vue_vue_type_template_id_8d9ea702___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TermsCondition_vue_vue_type_template_id_8d9ea702___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Thankyou.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Thankyou.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Thankyou_vue_vue_type_template_id_ee76c040___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Thankyou.vue?vue&type=template&id=ee76c040& */ "./resources/js/components/Thankyou.vue?vue&type=template&id=ee76c040&");
/* harmony import */ var _Thankyou_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Thankyou.vue?vue&type=script&lang=js& */ "./resources/js/components/Thankyou.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Thankyou_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Thankyou_vue_vue_type_template_id_ee76c040___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Thankyou_vue_vue_type_template_id_ee76c040___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Thankyou.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Thankyou.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Thankyou.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Thankyou_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Thankyou.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Thankyou.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Thankyou_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Thankyou.vue?vue&type=template&id=ee76c040&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Thankyou.vue?vue&type=template&id=ee76c040& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Thankyou_vue_vue_type_template_id_ee76c040___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Thankyou.vue?vue&type=template&id=ee76c040& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Thankyou.vue?vue&type=template&id=ee76c040&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Thankyou_vue_vue_type_template_id_ee76c040___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Thankyou_vue_vue_type_template_id_ee76c040___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/common-components/Alert.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/common-components/Alert.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Alert_vue_vue_type_template_id_404914ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alert.vue?vue&type=template&id=404914ac& */ "./resources/js/components/common-components/Alert.vue?vue&type=template&id=404914ac&");
/* harmony import */ var _Alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alert.vue?vue&type=script&lang=js& */ "./resources/js/components/common-components/Alert.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Alert_vue_vue_type_template_id_404914ac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Alert_vue_vue_type_template_id_404914ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/common-components/Alert.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/common-components/Alert.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/common-components/Alert.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Alert.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common-components/Alert.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/common-components/Alert.vue?vue&type=template&id=404914ac&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/common-components/Alert.vue?vue&type=template&id=404914ac& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_template_id_404914ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Alert.vue?vue&type=template&id=404914ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common-components/Alert.vue?vue&type=template&id=404914ac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_template_id_404914ac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_template_id_404914ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/common-components/download-menu.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/common-components/download-menu.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _download_menu_vue_vue_type_template_id_f772741c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./download-menu.vue?vue&type=template&id=f772741c& */ "./resources/js/components/common-components/download-menu.vue?vue&type=template&id=f772741c&");
/* harmony import */ var _download_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./download-menu.vue?vue&type=script&lang=js& */ "./resources/js/components/common-components/download-menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _download_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _download_menu_vue_vue_type_template_id_f772741c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _download_menu_vue_vue_type_template_id_f772741c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/common-components/download-menu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/common-components/download-menu.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/common-components/download-menu.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_download_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./download-menu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common-components/download-menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_download_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/common-components/download-menu.vue?vue&type=template&id=f772741c&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/common-components/download-menu.vue?vue&type=template&id=f772741c& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_download_menu_vue_vue_type_template_id_f772741c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./download-menu.vue?vue&type=template&id=f772741c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common-components/download-menu.vue?vue&type=template&id=f772741c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_download_menu_vue_vue_type_template_id_f772741c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_download_menu_vue_vue_type_template_id_f772741c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/common-components/footer.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/common-components/footer.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_vue_vue_type_template_id_ecca14c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.vue?vue&type=template&id=ecca14c6& */ "./resources/js/components/common-components/footer.vue?vue&type=template&id=ecca14c6&");
/* harmony import */ var _footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.vue?vue&type=script&lang=js& */ "./resources/js/components/common-components/footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _footer_vue_vue_type_template_id_ecca14c6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _footer_vue_vue_type_template_id_ecca14c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/common-components/footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/common-components/footer.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/common-components/footer.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common-components/footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/common-components/footer.vue?vue&type=template&id=ecca14c6&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/common-components/footer.vue?vue&type=template&id=ecca14c6& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_ecca14c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./footer.vue?vue&type=template&id=ecca14c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common-components/footer.vue?vue&type=template&id=ecca14c6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_ecca14c6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_ecca14c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/common-components/nav-menu.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/common-components/nav-menu.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_menu_vue_vue_type_template_id_3327324b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-menu.vue?vue&type=template&id=3327324b& */ "./resources/js/components/common-components/nav-menu.vue?vue&type=template&id=3327324b&");
/* harmony import */ var _nav_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-menu.vue?vue&type=script&lang=js& */ "./resources/js/components/common-components/nav-menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _nav_menu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-menu.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/common-components/nav-menu.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _nav_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _nav_menu_vue_vue_type_template_id_3327324b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _nav_menu_vue_vue_type_template_id_3327324b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/common-components/nav-menu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/common-components/nav-menu.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/common-components/nav-menu.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./nav-menu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common-components/nav-menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/common-components/nav-menu.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/common-components/nav-menu.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_menu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./nav-menu.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common-components/nav-menu.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_menu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_menu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_menu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_menu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/common-components/nav-menu.vue?vue&type=template&id=3327324b&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/common-components/nav-menu.vue?vue&type=template&id=3327324b& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_menu_vue_vue_type_template_id_3327324b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./nav-menu.vue?vue&type=template&id=3327324b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common-components/nav-menu.vue?vue&type=template&id=3327324b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_menu_vue_vue_type_template_id_3327324b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_menu_vue_vue_type_template_id_3327324b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/common-components/postal-code-popup.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/common-components/postal-code-popup.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _postal_code_popup_vue_vue_type_template_id_042ff17c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postal-code-popup.vue?vue&type=template&id=042ff17c& */ "./resources/js/components/common-components/postal-code-popup.vue?vue&type=template&id=042ff17c&");
/* harmony import */ var _postal_code_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postal-code-popup.vue?vue&type=script&lang=js& */ "./resources/js/components/common-components/postal-code-popup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _postal_code_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _postal_code_popup_vue_vue_type_template_id_042ff17c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _postal_code_popup_vue_vue_type_template_id_042ff17c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/common-components/postal-code-popup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/common-components/postal-code-popup.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/common-components/postal-code-popup.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_postal_code_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./postal-code-popup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common-components/postal-code-popup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_postal_code_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/common-components/postal-code-popup.vue?vue&type=template&id=042ff17c&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/common-components/postal-code-popup.vue?vue&type=template&id=042ff17c& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_postal_code_popup_vue_vue_type_template_id_042ff17c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./postal-code-popup.vue?vue&type=template&id=042ff17c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common-components/postal-code-popup.vue?vue&type=template&id=042ff17c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_postal_code_popup_vue_vue_type_template_id_042ff17c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_postal_code_popup_vue_vue_type_template_id_042ff17c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/common-components/reservation.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/common-components/reservation.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reservation_vue_vue_type_template_id_31a2c08c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reservation.vue?vue&type=template&id=31a2c08c&scoped=true& */ "./resources/js/components/common-components/reservation.vue?vue&type=template&id=31a2c08c&scoped=true&");
/* harmony import */ var _reservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reservation.vue?vue&type=script&lang=js& */ "./resources/js/components/common-components/reservation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _reservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _reservation_vue_vue_type_template_id_31a2c08c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _reservation_vue_vue_type_template_id_31a2c08c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "31a2c08c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/common-components/reservation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/common-components/reservation.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/common-components/reservation.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./reservation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common-components/reservation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/common-components/reservation.vue?vue&type=template&id=31a2c08c&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/common-components/reservation.vue?vue&type=template&id=31a2c08c&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reservation_vue_vue_type_template_id_31a2c08c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./reservation.vue?vue&type=template&id=31a2c08c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common-components/reservation.vue?vue&type=template&id=31a2c08c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reservation_vue_vue_type_template_id_31a2c08c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reservation_vue_vue_type_template_id_31a2c08c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/common-components/slider.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/common-components/slider.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slider_vue_vue_type_template_id_76dda5e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider.vue?vue&type=template&id=76dda5e3& */ "./resources/js/components/common-components/slider.vue?vue&type=template&id=76dda5e3&");
/* harmony import */ var _slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider.vue?vue&type=script&lang=js& */ "./resources/js/components/common-components/slider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _slider_vue_vue_type_template_id_76dda5e3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _slider_vue_vue_type_template_id_76dda5e3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/common-components/slider.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/common-components/slider.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/common-components/slider.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./slider.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common-components/slider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/common-components/slider.vue?vue&type=template&id=76dda5e3&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/common-components/slider.vue?vue&type=template&id=76dda5e3& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_slider_vue_vue_type_template_id_76dda5e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./slider.vue?vue&type=template&id=76dda5e3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common-components/slider.vue?vue&type=template&id=76dda5e3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_slider_vue_vue_type_template_id_76dda5e3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_slider_vue_vue_type_template_id_76dda5e3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/common-components/testimonials.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/common-components/testimonials.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testimonials_vue_vue_type_template_id_3841a3b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testimonials.vue?vue&type=template&id=3841a3b6& */ "./resources/js/components/common-components/testimonials.vue?vue&type=template&id=3841a3b6&");
/* harmony import */ var _testimonials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./testimonials.vue?vue&type=script&lang=js& */ "./resources/js/components/common-components/testimonials.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _testimonials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _testimonials_vue_vue_type_template_id_3841a3b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _testimonials_vue_vue_type_template_id_3841a3b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/common-components/testimonials.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/common-components/testimonials.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/common-components/testimonials.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_testimonials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./testimonials.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common-components/testimonials.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_testimonials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/common-components/testimonials.vue?vue&type=template&id=3841a3b6&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/common-components/testimonials.vue?vue&type=template&id=3841a3b6& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_testimonials_vue_vue_type_template_id_3841a3b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./testimonials.vue?vue&type=template&id=3841a3b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common-components/testimonials.vue?vue&type=template&id=3841a3b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_testimonials_vue_vue_type_template_id_3841a3b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_testimonials_vue_vue_type_template_id_3841a3b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/order-page/main.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/order-page/main.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_vue_vue_type_template_id_17e04cff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=17e04cff& */ "./resources/js/components/order-page/main.vue?vue&type=template&id=17e04cff&");
/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ "./resources/js/components/order-page/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _main_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/order-page/main.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_vue_vue_type_template_id_17e04cff___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_vue_vue_type_template_id_17e04cff___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/order-page/main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/order-page/main.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/order-page/main.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order-page/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/order-page/main.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/order-page/main.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order-page/main.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/order-page/main.vue?vue&type=template&id=17e04cff&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/order-page/main.vue?vue&type=template&id=17e04cff& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_17e04cff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=template&id=17e04cff& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order-page/main.vue?vue&type=template&id=17e04cff&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_17e04cff___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_17e04cff___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/order-page/popup/add-deal.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/order-page/popup/add-deal.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_deal_vue_vue_type_template_id_66420e3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-deal.vue?vue&type=template&id=66420e3e& */ "./resources/js/components/order-page/popup/add-deal.vue?vue&type=template&id=66420e3e&");
/* harmony import */ var _add_deal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-deal.vue?vue&type=script&lang=js& */ "./resources/js/components/order-page/popup/add-deal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_deal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_deal_vue_vue_type_template_id_66420e3e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_deal_vue_vue_type_template_id_66420e3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/order-page/popup/add-deal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/order-page/popup/add-deal.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/order-page/popup/add-deal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_deal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add-deal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order-page/popup/add-deal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_deal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/order-page/popup/add-deal.vue?vue&type=template&id=66420e3e&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/order-page/popup/add-deal.vue?vue&type=template&id=66420e3e& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_deal_vue_vue_type_template_id_66420e3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add-deal.vue?vue&type=template&id=66420e3e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order-page/popup/add-deal.vue?vue&type=template&id=66420e3e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_deal_vue_vue_type_template_id_66420e3e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_deal_vue_vue_type_template_id_66420e3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/order-page/popup/add-product.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/order-page/popup/add-product.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_product_vue_vue_type_template_id_4c15b1ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-product.vue?vue&type=template&id=4c15b1ec& */ "./resources/js/components/order-page/popup/add-product.vue?vue&type=template&id=4c15b1ec&");
/* harmony import */ var _add_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-product.vue?vue&type=script&lang=js& */ "./resources/js/components/order-page/popup/add-product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_product_vue_vue_type_template_id_4c15b1ec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_product_vue_vue_type_template_id_4c15b1ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/order-page/popup/add-product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/order-page/popup/add-product.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/order-page/popup/add-product.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add-product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order-page/popup/add-product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/order-page/popup/add-product.vue?vue&type=template&id=4c15b1ec&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/order-page/popup/add-product.vue?vue&type=template&id=4c15b1ec& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_product_vue_vue_type_template_id_4c15b1ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add-product.vue?vue&type=template&id=4c15b1ec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order-page/popup/add-product.vue?vue&type=template&id=4c15b1ec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_product_vue_vue_type_template_id_4c15b1ec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_product_vue_vue_type_template_id_4c15b1ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/order-page/popup/edit-deal.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/order-page/popup/edit-deal.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_deal_vue_vue_type_template_id_992ca154___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-deal.vue?vue&type=template&id=992ca154& */ "./resources/js/components/order-page/popup/edit-deal.vue?vue&type=template&id=992ca154&");
/* harmony import */ var _edit_deal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-deal.vue?vue&type=script&lang=js& */ "./resources/js/components/order-page/popup/edit-deal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_deal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_deal_vue_vue_type_template_id_992ca154___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_deal_vue_vue_type_template_id_992ca154___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/order-page/popup/edit-deal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/order-page/popup/edit-deal.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/order-page/popup/edit-deal.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_deal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit-deal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order-page/popup/edit-deal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_deal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/order-page/popup/edit-deal.vue?vue&type=template&id=992ca154&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/order-page/popup/edit-deal.vue?vue&type=template&id=992ca154& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_deal_vue_vue_type_template_id_992ca154___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit-deal.vue?vue&type=template&id=992ca154& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order-page/popup/edit-deal.vue?vue&type=template&id=992ca154&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_deal_vue_vue_type_template_id_992ca154___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_deal_vue_vue_type_template_id_992ca154___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/order-page/popup/edit-product.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/order-page/popup/edit-product.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_product_vue_vue_type_template_id_421be075___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-product.vue?vue&type=template&id=421be075& */ "./resources/js/components/order-page/popup/edit-product.vue?vue&type=template&id=421be075&");
/* harmony import */ var _edit_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-product.vue?vue&type=script&lang=js& */ "./resources/js/components/order-page/popup/edit-product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_product_vue_vue_type_template_id_421be075___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_product_vue_vue_type_template_id_421be075___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/order-page/popup/edit-product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/order-page/popup/edit-product.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/order-page/popup/edit-product.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit-product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order-page/popup/edit-product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/order-page/popup/edit-product.vue?vue&type=template&id=421be075&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/order-page/popup/edit-product.vue?vue&type=template&id=421be075& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_product_vue_vue_type_template_id_421be075___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit-product.vue?vue&type=template&id=421be075& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order-page/popup/edit-product.vue?vue&type=template&id=421be075&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_product_vue_vue_type_template_id_421be075___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_product_vue_vue_type_template_id_421be075___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/order-page/popup/food-allergy.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/order-page/popup/food-allergy.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _food_allergy_vue_vue_type_template_id_037986da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food-allergy.vue?vue&type=template&id=037986da& */ "./resources/js/components/order-page/popup/food-allergy.vue?vue&type=template&id=037986da&");
/* harmony import */ var _food_allergy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food-allergy.vue?vue&type=script&lang=js& */ "./resources/js/components/order-page/popup/food-allergy.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _food_allergy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _food_allergy_vue_vue_type_template_id_037986da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _food_allergy_vue_vue_type_template_id_037986da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/order-page/popup/food-allergy.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/order-page/popup/food-allergy.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/order-page/popup/food-allergy.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_food_allergy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./food-allergy.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order-page/popup/food-allergy.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_food_allergy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/order-page/popup/food-allergy.vue?vue&type=template&id=037986da&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/order-page/popup/food-allergy.vue?vue&type=template&id=037986da& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_food_allergy_vue_vue_type_template_id_037986da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./food-allergy.vue?vue&type=template&id=037986da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order-page/popup/food-allergy.vue?vue&type=template&id=037986da&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_food_allergy_vue_vue_type_template_id_037986da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_food_allergy_vue_vue_type_template_id_037986da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/order-page/popup/testimonials.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/order-page/popup/testimonials.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testimonials_vue_vue_type_template_id_38b7d7fd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testimonials.vue?vue&type=template&id=38b7d7fd& */ "./resources/js/components/order-page/popup/testimonials.vue?vue&type=template&id=38b7d7fd&");
/* harmony import */ var _testimonials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./testimonials.vue?vue&type=script&lang=js& */ "./resources/js/components/order-page/popup/testimonials.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _testimonials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _testimonials_vue_vue_type_template_id_38b7d7fd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _testimonials_vue_vue_type_template_id_38b7d7fd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/order-page/popup/testimonials.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/order-page/popup/testimonials.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/order-page/popup/testimonials.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_testimonials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./testimonials.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order-page/popup/testimonials.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_testimonials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/order-page/popup/testimonials.vue?vue&type=template&id=38b7d7fd&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/order-page/popup/testimonials.vue?vue&type=template&id=38b7d7fd& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_testimonials_vue_vue_type_template_id_38b7d7fd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./testimonials.vue?vue&type=template&id=38b7d7fd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order-page/popup/testimonials.vue?vue&type=template&id=38b7d7fd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_testimonials_vue_vue_type_template_id_38b7d7fd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_testimonials_vue_vue_type_template_id_38b7d7fd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/store.js":
/*!*******************************!*\
  !*** ./resources/js/store.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vuex_persistedstate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex-persistedstate */ "./node_modules/vuex-persistedstate/dist/vuex-persistedstate.es.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
var store = new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  // You can use it as state property
  state: {
    /* Cart State Management */
    cartItemsCount: 0,
    cartItems: [],
    delivery_charges: localStorage.getItem('delivery_charges') ? localStorage.getItem('delivery_charges') : '',
    postal_code: localStorage.getItem('postal_code') ? localStorage.getItem('postal_code') : '',
    order_type: localStorage.getItem('order_type') ? localStorage.getItem('order_type') : '',
    user_data: localStorage.getItem('user_data') ? localStorage.getItem('user_data') : '',
    general_data: localStorage.getItem('general_data') ? JSON.parse(localStorage.getItem('general_data')) : ''
  },
  // You can use it as a state getter function (probably the best solution)
  getters: {
    /*getAllCartArray(state){
        return     state.cartArray;
    },*/
    getDeliveryCharges: function getDeliveryCharges(state) {
      if (state.delivery_charges == "" || state.delivery_charges == null) {
        return localStorage.getItem('delivery_charges');
      } else {
        return state.delivery_charges;
      }
    },
    getPostalCode: function getPostalCode(state) {
      if (state.postal_code == "" || state.postal_code == null) {
        return localStorage.getItem('postal_code');
      } else {
        return state.postal_code;
      }
    },
    getOrderType: function getOrderType(state) {
      if (state.order_type == "" || state.order_type == null) {
        return localStorage.getItem('order_type');
      } else {
        return state.order_type;
      }
    },
    getUserData: function getUserData(state) {
      if (state.user_data == "" || state.user_data == null) {
        return localStorage.getItem('user_data');
      } else {
        return state.user_data;
      }
    },
    getGeneralData: function getGeneralData(state) {
      return state.general_data;
    }
  },
  // Mutation for when you use it as state property
  mutations: {
    addToCart: function addToCart(state, payload) {
      var item = payload;
      item = _objectSpread(_objectSpread({}, item), {}, {
        quantity: item.quantity
      });

      if (state.cartItems.length > 0) {
        var bool = state.cartItems.some(function (i) {
          return i.product_id === item.product_id;
        });

        if (bool) {
          var bool1 = state.cartItems.some(function (i) {
            return i.product_type === item.product_type;
          });

          if (bool1) {
            var itemIndex = state.cartItems.findIndex(function (el) {
              return el.product_id === item.product_id;
            });
            state.cartItems[itemIndex]['quantity'] += item.quantity;
          } else {
            state.cartItems.push(item);
          }
        } else {
          state.cartItems.push(item);
        }
      } else {
        state.cartItems.push(item);
      }

      state.cartItemsCount += item.quantity;
    },
    removeFromCart: function removeFromCart(state, payload) {
      if (state.cartItems.length > 0) {
        var bool = state.cartItems.some(function (i) {
          return i.product_id === payload.product_id;
        });

        if (bool) {
          var itemIndex = state.cartItems.findIndex(function (el) {
            return el.product_id === payload.product_id;
          });

          if (state.cartItems[itemIndex]["quantity"] !== 0) {
            state.cartItems[itemIndex]['quantity'] -= payload.removalQuantity;
            state.cartItemsCount -= payload.removalQuantity;
          }

          if (state.cartItems[itemIndex]["quantity"] === 0) {
            state.cartItems.splice(itemIndex, 1);
          }
        }
      }
    },

    /*setAllCartArray(state, data){
        state.cartArray = data;
    },*/
    setDeliveryCharges: function setDeliveryCharges(state, data) {
      localStorage.setItem('delivery_charges', data);
      state.delivery_charges = data;
    },
    setPostalCode: function setPostalCode(state, data) {
      localStorage.setItem('postal_code', data);
      state.postal_code = localStorage.getItem('postal_code');
    },
    setOrderType: function setOrderType(state, data) {
      localStorage.setItem('order_type', data);
      state.order_type = localStorage.getItem('order_type');
      console.log(state.order_type);
    },
    setUserData: function setUserData(state, data) {
      localStorage.setItem('user_data', data);
      state.order_type = localStorage.getItem('user_data');
    },
    setGeneralData: function setGeneralData(state, data) {
      state.general_data = data;
    }
  },
  plugins: [Object(vuex_persistedstate__WEBPACK_IMPORTED_MODULE_2__["default"])()]
});
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n   ╷\n10 │ @import '~bootstrap/scss/bootstrap';\r\n   │         ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n   ╵\n  C:\\laragon\\www\\papag-live\\resources\\sass\\app.scss 10:9  root stylesheet\n    at C:\\laragon\\www\\papag-live\\node_modules\\webpack\\lib\\NormalModule.js:316:20\n    at C:\\laragon\\www\\papag-live\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at C:\\laragon\\www\\papag-live\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at context.callback (C:\\laragon\\www\\papag-live\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at C:\\laragon\\www\\papag-live\\node_modules\\sass-loader\\dist\\index.js:73:7\n    at Function.call$2 (C:\\laragon\\www\\papag-live\\node_modules\\sass\\sass.dart.js:96399:16)\n    at render_closure1.call$2 (C:\\laragon\\www\\papag-live\\node_modules\\sass\\sass.dart.js:82305:12)\n    at _RootZone.runBinary$3$3 (C:\\laragon\\www\\papag-live\\node_modules\\sass\\sass.dart.js:28284:18)\n    at _FutureListener.handleError$1 (C:\\laragon\\www\\papag-live\\node_modules\\sass\\sass.dart.js:26806:21)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\laragon\\www\\papag-live\\node_modules\\sass\\sass.dart.js:27113:49)\n    at Object._Future__propagateToListeners (C:\\laragon\\www\\papag-live\\node_modules\\sass\\sass.dart.js:12137:77)\n    at _Future._completeError$2 (C:\\laragon\\www\\papag-live\\node_modules\\sass\\sass.dart.js:26959:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\laragon\\www\\papag-live\\node_modules\\sass\\sass.dart.js:26618:12)\n    at Object._asyncRethrow (C:\\laragon\\www\\papag-live\\node_modules\\sass\\sass.dart.js:11940:17)\n    at C:\\laragon\\www\\papag-live\\node_modules\\sass\\sass.dart.js:15783:20\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\laragon\\www\\papag-live\\node_modules\\sass\\sass.dart.js:11965:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (C:\\laragon\\www\\papag-live\\node_modules\\sass\\sass.dart.js:26637:12)\n    at _awaitOnObject_closure0.call$2 (C:\\laragon\\www\\papag-live\\node_modules\\sass\\sass.dart.js:26631:25)\n    at _RootZone.runBinary$3$3 (C:\\laragon\\www\\papag-live\\node_modules\\sass\\sass.dart.js:28284:18)\n    at _FutureListener.handleError$1 (C:\\laragon\\www\\papag-live\\node_modules\\sass\\sass.dart.js:26806:21)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\laragon\\www\\papag-live\\node_modules\\sass\\sass.dart.js:27113:49)\n    at Object._Future__propagateToListeners (C:\\laragon\\www\\papag-live\\node_modules\\sass\\sass.dart.js:12137:77)\n    at _Future._completeError$2 (C:\\laragon\\www\\papag-live\\node_modules\\sass\\sass.dart.js:26959:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\laragon\\www\\papag-live\\node_modules\\sass\\sass.dart.js:26618:12)\n    at Object._asyncRethrow (C:\\laragon\\www\\papag-live\\node_modules\\sass\\sass.dart.js:11940:17)\n    at C:\\laragon\\www\\papag-live\\node_modules\\sass\\sass.dart.js:21292:20\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\laragon\\www\\papag-live\\node_modules\\sass\\sass.dart.js:11965:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (C:\\laragon\\www\\papag-live\\node_modules\\sass\\sass.dart.js:26637:12)\n    at _awaitOnObject_closure0.call$2 (C:\\laragon\\www\\papag-live\\node_modules\\sass\\sass.dart.js:26631:25)\n    at _RootZone.runBinary$3$3 (C:\\laragon\\www\\papag-live\\node_modules\\sass\\sass.dart.js:28284:18)\n    at _FutureListener.handleError$1 (C:\\laragon\\www\\papag-live\\node_modules\\sass\\sass.dart.js:26806:21)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\laragon\\www\\papag-live\\node_modules\\sass\\sass.dart.js:27113:49)\n    at Object._Future__propagateToListeners (C:\\laragon\\www\\papag-live\\node_modules\\sass\\sass.dart.js:12137:77)\n    at _Future._completeError$2 (C:\\laragon\\www\\papag-live\\node_modules\\sass\\sass.dart.js:26959:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\laragon\\www\\papag-live\\node_modules\\sass\\sass.dart.js:26618:12)\n    at Object._asyncRethrow (C:\\laragon\\www\\papag-live\\node_modules\\sass\\sass.dart.js:11940:17)");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\laragon\www\papag-live\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\laragon\www\papag-live\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });