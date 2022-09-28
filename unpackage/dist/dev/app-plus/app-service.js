(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!**********************************************************!*\
  !*** /Users/wanggang/Desktop/Nucleic_acid_tools/main.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 39));\n\n\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 22));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n_vue.default.config.productionTip = false;\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUI7OztBQUduQixzRTtBQUNBQSxhQUFJQyxNQUFKLENBQVdDLGFBQVgsR0FBMkIsS0FBM0I7QUFDQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7QUFDQSxJQUFNQyxHQUFHLEdBQUcsSUFBSUwsWUFBSjtBQUNMRyxZQURLLEVBQVo7O0FBR0FFLEdBQUcsQ0FBQ0MsTUFBSiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO2ltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXG5cblxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5WdWUuY29uZmlnLnByb2R1Y3Rpb25UaXAgPSBmYWxzZVxuQXBwLm1wVHlwZSA9ICdhcHAnXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcbiAgICAuLi5BcHBcbn0pXG5hcHAuJG1vdW50KClcblxuXG5cblxuXG5cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*************************************************************!*\
  !*** /Users/wanggang/Desktop/Nucleic_acid_tools/pages.json ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}


if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});
__definePage('pages/nucleicAcid/nucleicAcid', function () {return Vue.extend(__webpack_require__(/*! pages/nucleicAcid/nucleicAcid.vue?mpType=page */ 9).default);});
__definePage('pages/zhengjianzhao/zhengjianzhao', function () {return Vue.extend(__webpack_require__(/*! pages/zhengjianzhao/zhengjianzhao.vue?mpType=page */ 14).default);});
__definePage('pages/watermark/watermark', function () {return Vue.extend(__webpack_require__(/*! pages/watermark/watermark.vue?mpType=page */ 24).default);});
__definePage('pages/alphabg/alphabg', function () {return Vue.extend(__webpack_require__(/*! pages/alphabg/alphabg.vue?mpType=page */ 29).default);});
__definePage('pages/bgcompose/bgcompose', function () {return Vue.extend(__webpack_require__(/*! pages/bgcompose/bgcompose.vue?mpType=page */ 34).default);});

/***/ }),
/* 2 */
/*!************************************************************************************!*\
  !*** /Users/wanggang/Desktop/Nucleic_acid_tools/pages/index/index.vue?mpType=page ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQzZNO0FBQzdNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************************************************************************************************!*\
  !*** /Users/wanggang/Desktop/Nucleic_acid_tools/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wanggang/Desktop/Nucleic_acid_tools/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "container"), attrs: { _i: 1 } },
        [
          _c("view", {
            staticClass: _vm._$s(2, "sc", "checkCard"),
            attrs: { _i: 2 },
            on: { click: _vm.checkHesuan }
          }),
          _c("view", {
            staticClass: _vm._$s(3, "sc", "checkCard"),
            attrs: { _i: 3 },
            on: { click: _vm.makeAlphaBG }
          }),
          _c("view", {
            staticClass: _vm._$s(4, "sc", "checkCard"),
            attrs: { _i: 4 },
            on: { click: _vm.makeZhengjianzhao }
          }),
          _c("view", {
            staticClass: _vm._$s(5, "sc", "checkCard"),
            attrs: { _i: 5 },
            on: { click: _vm.watermark }
          }),
          _c("view", {
            staticClass: _vm._$s(6, "sc", "checkCard"),
            attrs: { _i: 6 },
            on: { click: _vm.bgcompose }
          })
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!************************************************************************************************************!*\
  !*** /Users/wanggang/Desktop/Nucleic_acid_tools/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW90QixDQUFnQixzdEJBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wanggang/Desktop/Nucleic_acid_tools/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {};\n\n\n  },\n  onLoad: function onLoad() {\n\n  },\n  methods: {\n    checkHesuan: function checkHesuan() {\n      // 只允许通过相机扫码\n      // uni.scanCode({\n      // \tonlyFromCamera: true,\n      // \tsuccess: function (res) {\n      // \t\tconsole.log('条码类型：' + res.scanType);\n      // \t\tconsole.log('条码内容：' + res.result);\n      // \t}\n      // });\n      uni.navigateTo({\n        url: '/pages/nucleicAcid/nucleicAcid' });\n\n    },\n    makeAlphaBG: function makeAlphaBG() {\n      __f__(\"log\", \"alphabg\", \" at pages/index/index.vue:38\");\n      uni.navigateTo({\n        url: '/pages/alphabg/alphabg' });\n\n    },\n    makeZhengjianzhao: function makeZhengjianzhao() {\n      __f__(\"log\", \"zhengjianzhao\", \" at pages/index/index.vue:44\");\n      uni.navigateTo({\n        url: '/pages/zhengjianzhao/zhengjianzhao' });\n\n    },\n    watermark: function watermark() {\n      __f__(\"log\", \"watermark\", \" at pages/index/index.vue:50\");\n      uni.navigateTo({\n        url: '/pages/watermark/watermark' });\n\n    },\n    bgcompose: function bgcompose() {\n      __f__(\"log\", \"bgcompose\", \" at pages/index/index.vue:56\");\n      uni.navigateTo({\n        url: '/pages/bgcompose/bgcompose' });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJvbkxvYWQiLCJtZXRob2RzIiwiY2hlY2tIZXN1YW4iLCJ1bmkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwibWFrZUFscGhhQkciLCJtYWtlWmhlbmdqaWFuemhhbyIsIndhdGVybWFyayIsImJnY29tcG9zZSJdLCJtYXBwaW5ncyI6InFJQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNkQSxNQURjLGtCQUNQO0FBQ04sV0FBTyxFQUFQOzs7QUFHQSxHQUxhO0FBTWRDLFFBTmMsb0JBTUw7O0FBRVIsR0FSYTtBQVNkQyxTQUFPLEVBQUU7QUFDUkMsZUFEUSx5QkFDSztBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsU0FBRyxDQUFDQyxVQUFKLENBQWU7QUFDZEMsV0FBRyxFQUFDLGdDQURVLEVBQWY7O0FBR0EsS0FiTztBQWNSQyxlQWRRLHlCQWNLO0FBQ1osbUJBQVksU0FBWjtBQUNBSCxTQUFHLENBQUNDLFVBQUosQ0FBZTtBQUNkQyxXQUFHLEVBQUMsd0JBRFUsRUFBZjs7QUFHQSxLQW5CTztBQW9CUkUscUJBcEJRLCtCQW9CVztBQUNsQixtQkFBWSxlQUFaO0FBQ0FKLFNBQUcsQ0FBQ0MsVUFBSixDQUFlO0FBQ2RDLFdBQUcsRUFBQyxvQ0FEVSxFQUFmOztBQUdBLEtBekJPO0FBMEJSRyxhQTFCUSx1QkEwQkc7QUFDVixtQkFBWSxXQUFaO0FBQ0FMLFNBQUcsQ0FBQ0MsVUFBSixDQUFlO0FBQ2RDLFdBQUcsRUFBQyw0QkFEVSxFQUFmOztBQUdBLEtBL0JPO0FBZ0NSSSxhQWhDUSx1QkFnQ0c7QUFDVixtQkFBWSxXQUFaO0FBQ0FOLFNBQUcsQ0FBQ0MsVUFBSixDQUFlO0FBQ2RDLFdBQUcsRUFBQyw0QkFEVSxFQUFmOztBQUdBLEtBckNPLEVBVEssRSIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblxuXHRcdH1cblx0fSxcblx0b25Mb2FkKCkge1xuXG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRjaGVja0hlc3Vhbigpe1xuXHRcdFx0Ly8g5Y+q5YWB6K646YCa6L+H55u45py65omr56CBXG5cdFx0XHQvLyB1bmkuc2NhbkNvZGUoe1xuXHRcdFx0Ly8gXHRvbmx5RnJvbUNhbWVyYTogdHJ1ZSxcblx0XHRcdC8vIFx0c3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuXHRcdFx0Ly8gXHRcdGNvbnNvbGUubG9nKCfmnaHnoIHnsbvlnovvvJonICsgcmVzLnNjYW5UeXBlKTtcblx0XHRcdC8vIFx0XHRjb25zb2xlLmxvZygn5p2h56CB5YaF5a6577yaJyArIHJlcy5yZXN1bHQpO1xuXHRcdFx0Ly8gXHR9XG5cdFx0XHQvLyB9KTtcblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0dXJsOicvcGFnZXMvbnVjbGVpY0FjaWQvbnVjbGVpY0FjaWQnXG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0bWFrZUFscGhhQkcoKXtcblx0XHRcdGNvbnNvbGUubG9nKFwiYWxwaGFiZ1wiKTtcblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0dXJsOicvcGFnZXMvYWxwaGFiZy9hbHBoYWJnJ1xuXHRcdFx0fSlcblx0XHR9LFxuXHRcdG1ha2VaaGVuZ2ppYW56aGFvKCl7XG5cdFx0XHRjb25zb2xlLmxvZyhcInpoZW5namlhbnpoYW9cIik7XG5cdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdHVybDonL3BhZ2VzL3poZW5namlhbnpoYW8vemhlbmdqaWFuemhhbydcblx0XHRcdH0pXG5cdFx0fSxcblx0XHR3YXRlcm1hcmsoKXtcblx0XHRcdGNvbnNvbGUubG9nKFwid2F0ZXJtYXJrXCIpO1xuXHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xuXHRcdFx0XHR1cmw6Jy9wYWdlcy93YXRlcm1hcmsvd2F0ZXJtYXJrJ1xuXHRcdFx0fSlcblx0XHR9LFxuXHRcdGJnY29tcG9zZSgpe1xuXHRcdFx0Y29uc29sZS5sb2coXCJiZ2NvbXBvc2VcIik7XG5cdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdHVybDonL3BhZ2VzL2JnY29tcG9zZS9iZ2NvbXBvc2UnXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 8 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 9 */
/*!************************************************************************************************!*\
  !*** /Users/wanggang/Desktop/Nucleic_acid_tools/pages/nucleicAcid/nucleicAcid.vue?mpType=page ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nucleicAcid_vue_vue_type_template_id_7573c9a0_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nucleicAcid.vue?vue&type=template&id=7573c9a0&mpType=page */ 10);\n/* harmony import */ var _nucleicAcid_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nucleicAcid.vue?vue&type=script&lang=js&mpType=page */ 12);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nucleicAcid_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nucleicAcid_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _nucleicAcid_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _nucleicAcid_vue_vue_type_template_id_7573c9a0_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _nucleicAcid_vue_vue_type_template_id_7573c9a0_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _nucleicAcid_vue_vue_type_template_id_7573c9a0_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/nucleicAcid/nucleicAcid.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUk7QUFDbkk7QUFDMEU7QUFDTDs7O0FBR3JFO0FBQzZNO0FBQzdNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxpR0FBTTtBQUNSLEVBQUUsMEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbnVjbGVpY0FjaWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc1NzNjOWEwJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9udWNsZWljQWNpZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vbnVjbGVpY0FjaWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvbnVjbGVpY0FjaWQvbnVjbGVpY0FjaWQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!******************************************************************************************************************************!*\
  !*** /Users/wanggang/Desktop/Nucleic_acid_tools/pages/nucleicAcid/nucleicAcid.vue?vue&type=template&id=7573c9a0&mpType=page ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nucleicAcid_vue_vue_type_template_id_7573c9a0_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./nucleicAcid.vue?vue&type=template&id=7573c9a0&mpType=page */ 11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nucleicAcid_vue_vue_type_template_id_7573c9a0_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nucleicAcid_vue_vue_type_template_id_7573c9a0_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nucleicAcid_vue_vue_type_template_id_7573c9a0_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nucleicAcid_vue_vue_type_template_id_7573c9a0_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 11 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wanggang/Desktop/Nucleic_acid_tools/pages/nucleicAcid/nucleicAcid.vue?vue&type=template&id=7573c9a0&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c(
        "div",
        { staticClass: _vm._$s(1, "sc", "container"), attrs: { _i: 1 } },
        [
          _c(
            "div",
            { staticClass: _vm._$s(2, "sc", "address"), attrs: { _i: 2 } },
            [_c("input", {})]
          ),
          _c(
            "div",
            {
              staticClass: _vm._$s(4, "sc", "date-time father-div"),
              attrs: { _i: 4 }
            },
            [
              _c(
                "div",
                {
                  staticClass: _vm._$s(5, "sc", "date"),
                  attrs: { id: "clockDate", _i: 5 }
                },
                [_vm._v(_vm._$s(5, "t0-0", _vm._s(_vm.clockDate)))]
              ),
              _c(
                "div",
                {
                  staticClass: _vm._$s(6, "sc", "time"),
                  attrs: { id: "clockTime", _i: 6 }
                },
                [_vm._v(_vm._$s(6, "t0-0", _vm._s(_vm.clockTime)))]
              )
            ]
          ),
          _c(
            "div",
            { staticClass: _vm._$s(7, "sc", "father-div"), attrs: { _i: 7 } },
            [
              _c(
                "div",
                { staticClass: _vm._$s(8, "sc", "name"), attrs: { _i: 8 } },
                [_c("div"), _c("div", [_c("span")])]
              ),
              _c(
                "div",
                {
                  staticClass: _vm._$s(12, "sc", "hesuanjieguo"),
                  attrs: { _i: 12 }
                },
                [
                  _c("div", [
                    _c("div"),
                    _c("div", [_c("div"), _c("div", [_c("div"), _c("div")])])
                  ]),
                  _c("div", [_c("div", [_c("div"), _c("div")])])
                ]
              )
            ]
          ),
          _c(
            "div",
            { staticClass: _vm._$s(24, "sc", "father-div"), attrs: { _i: 24 } },
            [
              _c(
                "div",
                {
                  staticClass: _vm._$s(25, "sc", "hesuanguoqi"),
                  attrs: { _i: 25 }
                },
                [
                  _c("div", [
                    _c("div", [
                      _c("div"),
                      _c("div", {
                        staticClass: _vm._$s(29, "sc", "caiyangshijian"),
                        attrs: { _i: 29 }
                      }),
                      _c("div", { attrs: { id: "jianceDate", _i: 30 } }, [
                        _vm._v(_vm._$s(30, "t0-0", _vm._s(_vm.jianceDate)))
                      ])
                    ])
                  ]),
                  _c("div", [
                    _c("div", [
                      _c("div"),
                      _c("div", [
                        _c("span"),
                        _c("span"),
                        _c("span"),
                        _c("span")
                      ])
                    ])
                  ])
                ]
              )
            ]
          ),
          _c("div", {
            staticClass: _vm._$s(39, "sc", "checkCard"),
            attrs: { _i: 39 }
          })
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 12 */
/*!************************************************************************************************************************!*\
  !*** /Users/wanggang/Desktop/Nucleic_acid_tools/pages/nucleicAcid/nucleicAcid.vue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nucleicAcid_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./nucleicAcid.vue?vue&type=script&lang=js&mpType=page */ 13);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nucleicAcid_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nucleicAcid_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nucleicAcid_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nucleicAcid_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nucleicAcid_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTB0QixDQUFnQiw0dEJBQUcsRUFBQyIsImZpbGUiOiIxMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL251Y2xlaWNBY2lkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9udWNsZWljQWNpZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wanggang/Desktop/Nucleic_acid_tools/pages/nucleicAcid/nucleicAcid.vue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      clockDate: \"\",\n      clockTime: \"\",\n      jianceDate: \"\" };\n\n  },\n  onLoad: function onLoad() {\n    this.showDateTime();\n    this.showDate();\n    //设置定时器，自动更新时间显示\n    setInterval(this.showDateTime, 1000);\n  },\n  onShow: function onShow() {\n\n  },\n  methods: {\n    showDateTime: function showDateTime() {\n      //获取系统时间\n      var hour = new Date().getHours();\n      var minute = new Date().getMinutes();\n      var second = new Date().getSeconds();\n      hour = hour < 10 ? '0' + hour : hour;\n      minute = minute < 10 ? '0' + minute : minute;\n      second = second < 10 ? '0' + second : second;\n      //搞一个空字符串\n      var showTime = \"\";\n      //把时间显示的格式放进去\n      showTime = hour + \":\" + minute + \":\" + second;\n      //然后在网页上显示出来\n      this.clockTime = showTime;\n      // document.getElementById(\"clockTime\").innerHTML = showTime;\n    },\n    showDate: function showDate() {\n      var date = new Date();\n      var y = date.getFullYear();\n      var m = date.getMonth() + 1;\n      m = m < 10 ? '0' + m : m;\n      var d = date.getDate();\n      d = d < 10 ? '0' + d : d;\n      var formatDate = y + '年' + m + '月' + d + '日';\n\n      __f__(\"log\", \"当天日期是：\", formatDate, \" at pages/nucleicAcid/nucleicAcid.vue:118\");\n      this.clockDate = formatDate;\n      // document.getElementById(\"clockDate\").innerHTML = formatDate;\n      // jianceDate\n      var jcm = date.getMonth() + 1;\n      jcm = jcm < 10 ? '0' + jcm : jcm;\n      var jcd = date.getDate() > 2 ? date.getDate() - 1 : date.getDate();\n      jcd = jcd < 10 ? '0' + jcd : jcd;\n      var jcDate = m + '月' + jcd + '日';\n\n      // \n      //获取系统时间\n      var jchour = new Date().getHours();\n      var jcminute = new Date().getMinutes();\n      jcminute = jcminute < 10 ? '0' + jcminute : jcminute;\n      //搞一个空字符串\n      var jcTime = \"\";\n      //把时间显示的格式放进去\n      jcTime = jchour + \":\" + jcminute;\n      this.jianceDate = jcDate + ' ' + jcTime;\n      // document.getElementById(\"jianceDate\").innerHTML = jcDate + ' '+ jcTime;\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbnVjbGVpY0FjaWQvbnVjbGVpY0FjaWQudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJjbG9ja0RhdGUiLCJjbG9ja1RpbWUiLCJqaWFuY2VEYXRlIiwib25Mb2FkIiwic2hvd0RhdGVUaW1lIiwic2hvd0RhdGUiLCJzZXRJbnRlcnZhbCIsIm9uU2hvdyIsIm1ldGhvZHMiLCJob3VyIiwiRGF0ZSIsImdldEhvdXJzIiwibWludXRlIiwiZ2V0TWludXRlcyIsInNlY29uZCIsImdldFNlY29uZHMiLCJzaG93VGltZSIsImRhdGUiLCJ5IiwiZ2V0RnVsbFllYXIiLCJtIiwiZ2V0TW9udGgiLCJkIiwiZ2V0RGF0ZSIsImZvcm1hdERhdGUiLCJqY20iLCJqY2QiLCJqY0RhdGUiLCJqY2hvdXIiLCJqY21pbnV0ZSIsImpjVGltZSJdLCJtYXBwaW5ncyI6InFJQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2RBLE1BRGMsa0JBQ1A7QUFDTixXQUFPO0FBQ05DLGVBQVMsRUFBQyxFQURKO0FBRU5DLGVBQVMsRUFBQyxFQUZKO0FBR05DLGdCQUFVLEVBQUMsRUFITCxFQUFQOztBQUtBLEdBUGE7QUFRZEMsUUFSYyxvQkFRTDtBQUNSLFNBQUtDLFlBQUw7QUFDQSxTQUFLQyxRQUFMO0FBQ0E7QUFDQUMsZUFBVyxDQUFDLEtBQUtGLFlBQU4sRUFBb0IsSUFBcEIsQ0FBWDtBQUNBLEdBYmE7QUFjZEcsUUFkYyxvQkFjTDs7QUFFUixHQWhCYTtBQWlCZEMsU0FBTyxFQUFFO0FBQ1JKLGdCQURRLDBCQUNPO0FBQ2Q7QUFDQSxVQUFJSyxJQUFJLEdBQUcsSUFBSUMsSUFBSixHQUFXQyxRQUFYLEVBQVg7QUFDQSxVQUFJQyxNQUFNLEdBQUcsSUFBSUYsSUFBSixHQUFXRyxVQUFYLEVBQWI7QUFDQSxVQUFJQyxNQUFNLEdBQUcsSUFBSUosSUFBSixHQUFXSyxVQUFYLEVBQWI7QUFDQU4sVUFBSSxHQUFHQSxJQUFJLEdBQUcsRUFBUCxHQUFZLE1BQU1BLElBQWxCLEdBQXlCQSxJQUFoQztBQUNBRyxZQUFNLEdBQUdBLE1BQU0sR0FBRyxFQUFULEdBQWMsTUFBTUEsTUFBcEIsR0FBNkJBLE1BQXRDO0FBQ0FFLFlBQU0sR0FBR0EsTUFBTSxHQUFHLEVBQVQsR0FBYyxNQUFNQSxNQUFwQixHQUE2QkEsTUFBdEM7QUFDQTtBQUNBLFVBQUlFLFFBQVEsR0FBRyxFQUFmO0FBQ0E7QUFDQUEsY0FBUSxHQUFHUCxJQUFJLEdBQUcsR0FBUCxHQUFhRyxNQUFiLEdBQXNCLEdBQXRCLEdBQTRCRSxNQUF2QztBQUNBO0FBQ0EsV0FBS2IsU0FBTCxHQUFpQmUsUUFBakI7QUFDQTtBQUNBLEtBaEJPO0FBaUJSWCxZQWpCUSxzQkFpQkc7QUFDVixVQUFJWSxJQUFJLEdBQUcsSUFBSVAsSUFBSixFQUFYO0FBQ0EsVUFBSVEsQ0FBQyxHQUFHRCxJQUFJLENBQUNFLFdBQUwsRUFBUjtBQUNBLFVBQUlDLENBQUMsR0FBR0gsSUFBSSxDQUFDSSxRQUFMLEtBQWtCLENBQTFCO0FBQ0FELE9BQUMsR0FBR0EsQ0FBQyxHQUFHLEVBQUosR0FBUyxNQUFNQSxDQUFmLEdBQW1CQSxDQUF2QjtBQUNBLFVBQUlFLENBQUMsR0FBR0wsSUFBSSxDQUFDTSxPQUFMLEVBQVI7QUFDQUQsT0FBQyxHQUFHQSxDQUFDLEdBQUcsRUFBSixHQUFVLE1BQU1BLENBQWhCLEdBQXFCQSxDQUF6QjtBQUNBLFVBQUlFLFVBQVUsR0FBR04sQ0FBQyxHQUFHLEdBQUosR0FBVUUsQ0FBVixHQUFjLEdBQWQsR0FBb0JFLENBQXBCLEdBQXdCLEdBQXpDOztBQUVBLG1CQUFZLFFBQVosRUFBc0JFLFVBQXRCO0FBQ0EsV0FBS3hCLFNBQUwsR0FBaUJ3QixVQUFqQjtBQUNBO0FBQ0E7QUFDQSxVQUFJQyxHQUFHLEdBQUdSLElBQUksQ0FBQ0ksUUFBTCxLQUFrQixDQUE1QjtBQUNBSSxTQUFHLEdBQUdBLEdBQUcsR0FBRyxFQUFOLEdBQVcsTUFBTUEsR0FBakIsR0FBdUJBLEdBQTdCO0FBQ0EsVUFBSUMsR0FBRyxHQUFHVCxJQUFJLENBQUNNLE9BQUwsS0FBaUIsQ0FBakIsR0FBc0JOLElBQUksQ0FBQ00sT0FBTCxLQUFlLENBQXJDLEdBQXdDTixJQUFJLENBQUNNLE9BQUwsRUFBbEQ7QUFDQUcsU0FBRyxHQUFJQSxHQUFELEdBQVEsRUFBUixHQUFjLE1BQU9BLEdBQXJCLEdBQThCQSxHQUFwQztBQUNBLFVBQUlDLE1BQU0sR0FBR1AsQ0FBQyxHQUFHLEdBQUosR0FBVU0sR0FBVixHQUFnQixHQUE3Qjs7QUFFQTtBQUNBO0FBQ0EsVUFBSUUsTUFBTSxHQUFHLElBQUlsQixJQUFKLEdBQVdDLFFBQVgsRUFBYjtBQUNBLFVBQUlrQixRQUFRLEdBQUcsSUFBSW5CLElBQUosR0FBV0csVUFBWCxFQUFmO0FBQ0FnQixjQUFRLEdBQUdBLFFBQVEsR0FBRyxFQUFYLEdBQWdCLE1BQU1BLFFBQXRCLEdBQWlDQSxRQUE1QztBQUNBO0FBQ0EsVUFBSUMsTUFBTSxHQUFHLEVBQWI7QUFDQTtBQUNBQSxZQUFNLEdBQUdGLE1BQU0sR0FBRyxHQUFULEdBQWVDLFFBQXhCO0FBQ0EsV0FBSzNCLFVBQUwsR0FBa0J5QixNQUFNLEdBQUcsR0FBVCxHQUFjRyxNQUFoQztBQUNBO0FBQ0EsS0EvQ08sRUFqQkssRSIsImZpbGUiOiIxMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2xvY2tEYXRlOlwiXCIsXG5cdFx0XHRjbG9ja1RpbWU6XCJcIixcblx0XHRcdGppYW5jZURhdGU6XCJcIixcblx0XHR9XG5cdH0sXG5cdG9uTG9hZCgpIHtcblx0XHR0aGlzLnNob3dEYXRlVGltZSgpO1xuXHRcdHRoaXMuc2hvd0RhdGUoKTtcblx0XHQvL+iuvue9ruWumuaXtuWZqO+8jOiHquWKqOabtOaWsOaXtumXtOaYvuekulxuXHRcdHNldEludGVydmFsKHRoaXMuc2hvd0RhdGVUaW1lLCAxMDAwKTtcblx0fSxcblx0b25TaG93KCkge1xuXHRcdFxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0c2hvd0RhdGVUaW1lKCkge1xuXHRcdFx0Ly/ojrflj5bns7vnu5/ml7bpl7Rcblx0XHRcdGxldCBob3VyID0gbmV3IERhdGUoKS5nZXRIb3VycygpO1xuXHRcdFx0bGV0IG1pbnV0ZSA9IG5ldyBEYXRlKCkuZ2V0TWludXRlcygpO1xuXHRcdFx0bGV0IHNlY29uZCA9IG5ldyBEYXRlKCkuZ2V0U2Vjb25kcygpO1xuXHRcdFx0aG91ciA9IGhvdXIgPCAxMCA/ICcwJyArIGhvdXIgOiBob3VyO1xuXHRcdFx0bWludXRlID0gbWludXRlIDwgMTAgPyAnMCcgKyBtaW51dGUgOiBtaW51dGU7XG5cdFx0XHRzZWNvbmQgPSBzZWNvbmQgPCAxMCA/ICcwJyArIHNlY29uZCA6IHNlY29uZDtcblx0XHRcdC8v5pCe5LiA5Liq56m65a2X56ym5LiyXG5cdFx0XHRsZXQgc2hvd1RpbWUgPSBcIlwiO1xuXHRcdFx0Ly/miorml7bpl7TmmL7npLrnmoTmoLzlvI/mlL7ov5vljrtcblx0XHRcdHNob3dUaW1lID0gaG91ciArIFwiOlwiICsgbWludXRlICsgXCI6XCIgKyBzZWNvbmQ7XG5cdFx0XHQvL+eEtuWQjuWcqOe9kemhteS4iuaYvuekuuWHuuadpVxuXHRcdFx0dGhpcy5jbG9ja1RpbWUgPSBzaG93VGltZTtcblx0XHRcdC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvY2tUaW1lXCIpLmlubmVySFRNTCA9IHNob3dUaW1lO1xuXHRcdH0sXG5cdFx0c2hvd0RhdGUoKSB7XG5cdFx0XHR2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0XHR2YXIgeSA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcblx0XHRcdHZhciBtID0gZGF0ZS5nZXRNb250aCgpICsgMTtcblx0XHRcdG0gPSBtIDwgMTAgPyAnMCcgKyBtIDogbTtcblx0XHRcdHZhciBkID0gZGF0ZS5nZXREYXRlKCk7XG5cdFx0XHRkID0gZCA8IDEwID8gKCcwJyArIGQpIDogZDtcblx0XHRcdHZhciBmb3JtYXREYXRlID0geSArICflubQnICsgbSArICfmnIgnICsgZCArICfml6UnO1xuXHRcblx0XHRcdGNvbnNvbGUubG9nKFwi5b2T5aSp5pel5pyf5piv77yaXCIsIGZvcm1hdERhdGUpO1xuXHRcdFx0dGhpcy5jbG9ja0RhdGUgPSBmb3JtYXREYXRlO1xuXHRcdFx0Ly8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9ja0RhdGVcIikuaW5uZXJIVE1MID0gZm9ybWF0RGF0ZTtcblx0XHRcdC8vIGppYW5jZURhdGVcblx0XHRcdHZhciBqY20gPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuXHRcdFx0amNtID0gamNtIDwgMTAgPyAnMCcgKyBqY20gOiBqY207XG5cdFx0XHR2YXIgamNkID0gZGF0ZS5nZXREYXRlKCkgPiAyID8gKGRhdGUuZ2V0RGF0ZSgpLTEpOmRhdGUuZ2V0RGF0ZSgpO1xuXHRcdFx0amNkID0gKGpjZCkgPCAxMCA/ICgnMCcgKyAoamNkKSkgOiAoamNkKTtcblx0XHRcdHZhciBqY0RhdGUgPSBtICsgJ+aciCcgKyBqY2QgKyAn5pelJztcblx0XHRcdFxuXHRcdFx0Ly8gXG5cdFx0XHQvL+iOt+WPluezu+e7n+aXtumXtFxuXHRcdFx0bGV0IGpjaG91ciA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTtcblx0XHRcdGxldCBqY21pbnV0ZSA9IG5ldyBEYXRlKCkuZ2V0TWludXRlcygpO1xuXHRcdFx0amNtaW51dGUgPSBqY21pbnV0ZSA8IDEwID8gJzAnICsgamNtaW51dGUgOiBqY21pbnV0ZTtcblx0XHRcdC8v5pCe5LiA5Liq56m65a2X56ym5LiyXG5cdFx0XHRsZXQgamNUaW1lID0gXCJcIjtcblx0XHRcdC8v5oqK5pe26Ze05pi+56S655qE5qC85byP5pS+6L+b5Y67XG5cdFx0XHRqY1RpbWUgPSBqY2hvdXIgKyBcIjpcIiArIGpjbWludXRlXG5cdFx0XHR0aGlzLmppYW5jZURhdGUgPSBqY0RhdGUgKyAnICcrIGpjVGltZTtcblx0XHRcdC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiamlhbmNlRGF0ZVwiKS5pbm5lckhUTUwgPSBqY0RhdGUgKyAnICcrIGpjVGltZTtcblx0XHR9LFxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!****************************************************************************************************!*\
  !*** /Users/wanggang/Desktop/Nucleic_acid_tools/pages/zhengjianzhao/zhengjianzhao.vue?mpType=page ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _zhengjianzhao_vue_vue_type_template_id_77674a08_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zhengjianzhao.vue?vue&type=template&id=77674a08&mpType=page */ 15);\n/* harmony import */ var _zhengjianzhao_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zhengjianzhao.vue?vue&type=script&lang=js&mpType=page */ 17);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _zhengjianzhao_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _zhengjianzhao_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _zhengjianzhao_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _zhengjianzhao_vue_vue_type_template_id_77674a08_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _zhengjianzhao_vue_vue_type_template_id_77674a08_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _zhengjianzhao_vue_vue_type_template_id_77674a08_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/zhengjianzhao/zhengjianzhao.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUk7QUFDckk7QUFDNEU7QUFDTDs7O0FBR3ZFO0FBQzZNO0FBQzdNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLDhGQUFNO0FBQ1IsRUFBRSxtR0FBTTtBQUNSLEVBQUUsNEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3poZW5namlhbnpoYW8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc3Njc0YTA4Jm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi96aGVuZ2ppYW56aGFvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi96aGVuZ2ppYW56aGFvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL3poZW5namlhbnpoYW8vemhlbmdqaWFuemhhby52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!**********************************************************************************************************************************!*\
  !*** /Users/wanggang/Desktop/Nucleic_acid_tools/pages/zhengjianzhao/zhengjianzhao.vue?vue&type=template&id=77674a08&mpType=page ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_zhengjianzhao_vue_vue_type_template_id_77674a08_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./zhengjianzhao.vue?vue&type=template&id=77674a08&mpType=page */ 16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_zhengjianzhao_vue_vue_type_template_id_77674a08_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_zhengjianzhao_vue_vue_type_template_id_77674a08_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_zhengjianzhao_vue_vue_type_template_id_77674a08_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_zhengjianzhao_vue_vue_type_template_id_77674a08_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 16 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wanggang/Desktop/Nucleic_acid_tools/pages/zhengjianzhao/zhengjianzhao.vue?vue&type=template&id=77674a08&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "container"), attrs: { _i: 0 } },
    [
      _c("view", {
        staticClass: _vm._$s(1, "sc", "item-title"),
        attrs: { _i: 1 }
      }),
      _c("view", [
        _c(
          "view",
          { staticClass: _vm._$s(3, "sc", "item-set"), attrs: { _i: 3 } },
          [
            _c(
              "picker",
              {
                attrs: { range: _vm._$s(4, "a-range", _vm.titles), _i: 4 },
                on: { change: _vm.bindtitleChange }
              },
              [
                _c("view", {
                  staticClass: _vm._$s(5, "sc", "item-set-title"),
                  attrs: { _i: 5 }
                })
              ]
            ),
            _c(
              "picker",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm._$s(6, "v-show", _vm.specChoosed),
                    expression: "_$s(6,'v-show',specChoosed)"
                  }
                ],
                attrs: {
                  range: _vm._$s(6, "a-range", _vm.colors[_vm.specindex]),
                  _i: 6
                },
                on: { change: _vm.bindcolorChange }
              },
              [
                _c("view", {
                  staticClass: _vm._$s(7, "sc", "item-set-title"),
                  attrs: { _i: 7 }
                })
              ]
            )
          ]
        ),
        _c(
          "view",
          { staticClass: _vm._$s(8, "sc", "item-show"), attrs: { _i: 8 } },
          [
            _c(
              "view",
              {
                staticClass: _vm._$s(9, "sc", "item-show-row"),
                attrs: { _i: 9 }
              },
              [
                _c("span", {
                  staticClass: _vm._$s(10, "sc", "item-show-row-title"),
                  attrs: { _i: 10 }
                }),
                _vm._v(_vm._$s(9, "t1-0", _vm._s(_vm.spec)))
              ]
            ),
            _c(
              "view",
              {
                staticClass: _vm._$s(11, "sc", "item-show-row"),
                attrs: { _i: 11 }
              },
              [
                _c("span", {
                  staticClass: _vm._$s(12, "sc", "item-show-row-title"),
                  attrs: { _i: 12 }
                }),
                _vm._v(_vm._$s(11, "t1-0", _vm._s(_vm.title)))
              ]
            ),
            _c(
              "view",
              {
                staticClass: _vm._$s(13, "sc", "item-show-row"),
                attrs: { _i: 13 }
              },
              [
                _c("span", {
                  staticClass: _vm._$s(14, "sc", "item-show-row-title"),
                  attrs: { _i: 14 }
                }),
                _vm._v(_vm._$s(13, "t1-0", _vm._s(_vm.id)))
              ]
            ),
            _c(
              "view",
              {
                staticClass: _vm._$s(15, "sc", "item-show-row"),
                attrs: { _i: 15 }
              },
              [
                _c("span", {
                  staticClass: _vm._$s(16, "sc", "item-show-row-title"),
                  attrs: { _i: 16 }
                }),
                _vm._v(_vm._$s(15, "t1-0", _vm._s(_vm.color)))
              ]
            )
          ]
        )
      ]),
      _c("view", {
        staticClass: _vm._$s(17, "sc", "item-title"),
        attrs: { _i: 17 }
      }),
      _c("view", [
        _c("button", { attrs: { _i: 19 }, on: { click: _vm.takePhoto } })
      ]),
      _c("view", [
        _c("image", {
          attrs: { src: _vm._$s(21, "a-src", _vm.src), _i: 21 },
          on: { click: _vm.previewBefore }
        })
      ]),
      _c("view", {
        staticClass: _vm._$s(22, "sc", "item-title "),
        attrs: { _i: 22 }
      }),
      _c("view", [
        _c("button", { attrs: { _i: 24 }, on: { click: _vm.processPhoto } })
      ]),
      _c("view", [
        _c("image", {
          attrs: { src: _vm._$s(26, "a-src", _vm.srcResult), _i: 26 },
          on: { click: _vm.previewAfter }
        })
      ]),
      _c("view", {
        staticClass: _vm._$s(27, "sc", "item-title"),
        attrs: { _i: 27 }
      }),
      _c("view", [_vm._v(_vm._$s(28, "t0-0", _vm._s(_vm.resultSize)))]),
      _c("view", [_vm._v(_vm._$s(29, "t0-0", _vm._s(_vm.resultUrl)))])
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 17 */
/*!****************************************************************************************************************************!*\
  !*** /Users/wanggang/Desktop/Nucleic_acid_tools/pages/zhengjianzhao/zhengjianzhao.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_zhengjianzhao_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./zhengjianzhao.vue?vue&type=script&lang=js&mpType=page */ 18);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_zhengjianzhao_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_zhengjianzhao_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_zhengjianzhao_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_zhengjianzhao_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_zhengjianzhao_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTR0QixDQUFnQiw4dEJBQUcsRUFBQyIsImZpbGUiOiIxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3poZW5namlhbnpoYW8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3poZW5namlhbnpoYW8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wanggang/Desktop/Nucleic_acid_tools/pages/zhengjianzhao/zhengjianzhao.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _index = __webpack_require__(/*! ../../common/image-tools/index.js */ 19); //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar idphotoSpecsData = __webpack_require__(/*! @/common/data/idphoto_specs.json */ 23);var _default = { data: function data() {return { src: '', srcResult: '', AppCode: \"84d73f2a5bf84a0490e3ed2047b5cc12\", //你的appcode\n      localData: [], titles: [], title: \"\", titleindex: 0, specs: [], spec: \"\", specindex: 0, ids: [], id: \"\", idindex: 0, colors: [], color: \"\", colorindex: 0, index: 0, localbase64str: \"\", resultSize: \"\", resultUrl: \"\", specChoosed: false };}, onLoad: function onLoad() {this.localData = idphotoSpecsData;this.initData();__f__(\"log\", this.localData, Array.isArray(this.localData), \" at pages/zhengjianzhao/zhengjianzhao.vue:93\");}, methods: { initData: function initData() {for (var i = 0; i < idphotoSpecsData.length; i++) {this.titles.push(idphotoSpecsData[i].title);this.specs.push(idphotoSpecsData[i].spec);this.ids.push(idphotoSpecsData[i].id);this.colors.push(idphotoSpecsData[i].color);\n      }\n      __f__(\"log\", this.titles, this.specs, this.colors, \" at pages/zhengjianzhao/zhengjianzhao.vue:103\");\n    },\n    bindtitleChange: function bindtitleChange(e) {\n      var val = e.detail.value;\n      this.titleindex = val;\n      this.title = this.titles[val];\n      this.specindex = val;\n      this.spec = this.specs[val];\n      this.idindex = val;\n      this.id = this.ids[val];\n      this.color = this.colors[this.specindex][0];\n      __f__(\"log\", this.title, this.spec, \" at pages/zhengjianzhao/zhengjianzhao.vue:114\");\n      this.specChoosed = true;\n    },\n    bindspecChange: function bindspecChange(e) {\n      var val = e.detail.value;\n      this.specindex = val;\n      this.spec = this.specs[val];\n\n      __f__(\"log\", this.spec, \" at pages/zhengjianzhao/zhengjianzhao.vue:122\");\n    },\n    bindcolorChange: function bindcolorChange(e) {\n      var val = e.detail.value;\n      this.colorindex = val;\n      this.color = this.colors[this.specindex][val];\n      __f__(\"log\", this.color, \" at pages/zhengjianzhao/zhengjianzhao.vue:128\");\n    },\n    previewBefore: function previewBefore() {\n      uni.previewImage({\n        urls: [this.src],\n        current: 0 });\n\n    },\n    previewAfter: function previewAfter() {\n      uni.previewImage({\n        urls: [this.srcResult],\n        current: 0 });\n\n    },\n    takePhoto: function takePhoto() {\n      var that = this;\n      if (that.specChoosed == false) {\n        uni.showToast({\n          icon: \"none\",\n          title: \"请您先选择规格\",\n          duration: 3000 });\n\n        return;\n      }\n      uni.chooseImage({\n        count: 1,\n        success: function success(res) {\n          uni.getImageInfo({\n            src: res.tempFilePaths[0],\n            success: function success(ress) {\n              // console.log(ress);\n              that.src = ress.path;\n              (0, _index.pathToBase64)(that.src).then(function (base64str) {\n                that.localbase64str = base64str;\n                // that.processPhoto(base64str);\n              });\n            } });\n\n        } });\n\n    },\n    processPhoto: function processPhoto() {var _this = this;\n      __f__(\"log\", this.spec, this.color, \" at pages/zhengjianzhao/zhengjianzhao.vue:170\");\n      if (this.spec == \"\" || this.color == \"\" || this.localbase64str == \"\") {\n        uni.showToast({\n          icon: \"none\",\n          title: \"请先选择要处理的照片，并配置好参数\",\n          duration: 3000 });\n\n        return;\n      }\n      var data = {\n        \"photo\": this.localbase64str,\n        \"type\": \"png\",\n        // \"spec\": \"1\", // 见证件照规格列表\n        // \"bk\": \"red\", // 见证件照颜色列表,\n        \"spec\": this.id, // 见证件照规格列表\n        \"bk\": this.color, // 见证件照颜色列表,\n        \"with_photo_key\": \"1\",\n        \"beauty_degree\": 1.5 //可选参数，美颜级别，浮点型，取值[1.0-5.0]，超出范围后的值无效。主要调节了脸部黑白平衡。\n      };\n      __f__(\"log\", data, \" at pages/zhengjianzhao/zhengjianzhao.vue:189\");\n      uni.request({\n        url: 'https://idp2.market.alicloudapi.com/idphoto/make', //仅为示例，并非真实接口地址。\n        data: data,\n        method: \"POST\",\n        header: {\n          \"Accept\": \"application/json; charset=utf-8\",\n          \"Authorization\": \"APPCODE \" + this.AppCode,\n          \"Content-Type\": \"application/json; charset=UTF-8\"\n          // \"Content-MD5\": content_md5\n        },\n        success: function success(res) {\n          __f__(\"log\", res.data, \" at pages/zhengjianzhao/zhengjianzhao.vue:201\");\n          uni.showToast({\n            icon: \"none\",\n            title: res.data.errmsg });\n\n          _this.text = 'request success';\n          _this.srcResult = res.data.data.result;\n          _this.resultUrl = res.data.data.result;\n          _this.resultSize = res.data.data.size;\n          // console.log(this.srcResult);\n          _this.savePhoto(_this.srcResult);\n        },\n        fail: function fail(error) {\n          __f__(\"log\", error.data.errmsg, \" at pages/zhengjianzhao/zhengjianzhao.vue:214\");\n          uni.showToast({\n            icon: \"none\",\n            title: error.data.errmsg });\n\n          return;\n        } });\n\n    },\n    //保存图片到相册，方便核查\n    savePhoto: function savePhoto(path) {\n      //保存到相册\n      uni.saveImageToPhotosAlbum({\n        filePath: path,\n        success: function success() {\n          uni.showToast({\n            icon: \"none\",\n            title: '已自动保存至相册',\n            duration: 2000 });\n\n        } });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvemhlbmdqaWFuemhhby96aGVuZ2ppYW56aGFvLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtEQSw4RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBLHVGLGVBQ0EsRUFDQSxJQURBLGtCQUNBLENBQ0EsU0FDQSxPQURBLEVBRUEsYUFGQSxFQUdBLDJDQUhBLEVBR0E7QUFFQSxtQkFMQSxFQU9BLFVBUEEsRUFRQSxTQVJBLEVBU0EsYUFUQSxFQVdBLFNBWEEsRUFZQSxRQVpBLEVBYUEsWUFiQSxFQWVBLE9BZkEsRUFnQkEsTUFoQkEsRUFpQkEsVUFqQkEsRUFtQkEsVUFuQkEsRUFvQkEsU0FwQkEsRUFxQkEsYUFyQkEsRUF1QkEsUUF2QkEsRUF3QkEsa0JBeEJBLEVBMEJBLGNBMUJBLEVBMkJBLGFBM0JBLEVBNEJBLGtCQTVCQSxHQThCQSxDQWhDQSxFQWlDQSxNQWpDQSxvQkFpQ0EsQ0FDQSxrQ0FDQSxnQkFDQSw0R0FDQSxDQXJDQSxFQXNDQSxXQUNBLFFBREEsc0JBQ0EsQ0FDQSxtREFDQSw0Q0FDQSwwQ0FDQSxzQ0FDQTtBQUNBO0FBQ0E7QUFDQSxLQVRBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBckJBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0E1QkE7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBbENBO0FBbUNBLGlCQW5DQSwyQkFtQ0E7QUFDQTtBQUNBLHdCQURBO0FBRUEsa0JBRkE7O0FBSUEsS0F4Q0E7QUF5Q0EsZ0JBekNBLDBCQXlDQTtBQUNBO0FBQ0EsOEJBREE7QUFFQSxrQkFGQTs7QUFJQSxLQTlDQTtBQStDQSxhQS9DQSx1QkErQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLDBCQUZBO0FBR0Esd0JBSEE7O0FBS0E7QUFDQTtBQUNBO0FBQ0EsZ0JBREE7QUFFQSxlQUZBLG1CQUVBLEdBRkEsRUFFQTtBQUNBO0FBQ0EscUNBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUhBO0FBSUEsYUFUQTs7QUFXQSxTQWRBOztBQWdCQSxLQXpFQTtBQTBFQSxnQkExRUEsMEJBMEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBREE7QUFFQSxvQ0FGQTtBQUdBLHdCQUhBOztBQUtBO0FBQ0E7QUFDQTtBQUNBLG9DQURBO0FBRUEscUJBRkE7QUFHQTtBQUNBO0FBQ0EsdUJBTEEsRUFLQTtBQUNBLHdCQU5BLEVBTUE7QUFDQSw2QkFQQTtBQVFBLDRCQVJBLENBUUE7QUFSQTtBQVVBO0FBQ0E7QUFDQSwrREFEQSxFQUNBO0FBQ0Esa0JBRkE7QUFHQSxzQkFIQTtBQUlBO0FBQ0EscURBREE7QUFFQSxvREFGQTtBQUdBO0FBQ0E7QUFKQSxTQUpBO0FBVUE7QUFDQTtBQUNBO0FBQ0Esd0JBREE7QUFFQSxrQ0FGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQXRCQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQSx3QkFEQTtBQUVBLG9DQUZBOztBQUlBO0FBQ0EsU0E5QkE7O0FBZ0NBLEtBL0hBO0FBZ0lBO0FBQ0EsYUFqSUEscUJBaUlBLElBaklBLEVBaUlBO0FBQ0E7QUFDQTtBQUNBLHNCQURBO0FBRUE7QUFDQTtBQUNBLHdCQURBO0FBRUEsNkJBRkE7QUFHQSwwQkFIQTs7QUFLQSxTQVJBOztBQVVBLEtBN0lBLEVBdENBLEUiLCJmaWxlIjoiMTguanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJjb250YWluZXJcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwiaXRlbS10aXRsZVwiPjHjgIHlsLrlr7jpgInmi6k8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cIlwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW0tc2V0XCI+XHJcblx0XHRcdFx0PHBpY2tlciBAY2hhbmdlPVwiYmluZHRpdGxlQ2hhbmdlXCIgOnJhbmdlPVwidGl0bGVzXCIgbW9kZT1cInNlbGVjdG9yXCIgY2xhc3M9XCJcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbS1zZXQtdGl0bGVcIj7pgInmi6nop4TmoLw8L3ZpZXc+XHJcblx0XHRcdFx0PC9waWNrZXI+XHJcblx0XHRcdFx0PHBpY2tlciB2LXNob3c9XCJzcGVjQ2hvb3NlZFwiIEBjaGFuZ2U9XCJiaW5kY29sb3JDaGFuZ2VcIiA6cmFuZ2U9XCJjb2xvcnNbc3BlY2luZGV4XVwiIG1vZGU9XCJzZWxlY3RvclwiY2xhc3M9XCJcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbS1zZXQtdGl0bGVcIj7pgInmi6npopzoibI8L3ZpZXc+XHJcblx0XHRcdFx0PC9waWNrZXI+XG5cdFx0XHRcdDwhLS0gPHZpZXcgOnN0eWxlPVwiW3tiYWNrZ3JvdW5kLWNvbG9yOiAke2Bjb2xvcmB9fSx7d2lkdGg6NDBweH0se2hlaWdodDo0MHB4fV1cIj5cblx0XHRcdFx0XHRcblx0XHRcdFx0PC92aWV3PiAtLT5cblx0XHRcdFx0PCEtLSA8dmlldyA6c3R5bGU9XCJ7YmFja2dyb3VuZDogYCR7Y29sb3J9YH1cIj5cblx0XHRcdFx0XHQ8c3BhbiBzdHlsZT1cIndpZHRoOiA0MHB4O2hlaWdodDogNDBweDtkaXNwbGF5OiBibG9jaztib3JkZXI6IDFweCBkb3VibGUgIzA4OTtcIj48L3NwYW4+XG5cdFx0XHRcdDwvdmlldz4gLS0+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtLXNob3dcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW0tc2hvdy1yb3dcIj48c3BhbiBjbGFzcz1cIml0ZW0tc2hvdy1yb3ctdGl0bGVcIj7lsLrlr7g6PC9zcGFuPnt7c3BlY319PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbS1zaG93LXJvd1wiPjxzcGFuIGNsYXNzPVwiaXRlbS1zaG93LXJvdy10aXRsZVwiPuinhOagvDo8L3NwYW4+e3t0aXRsZX19PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbS1zaG93LXJvd1wiPjxzcGFuIGNsYXNzPVwiaXRlbS1zaG93LXJvdy10aXRsZVwiPuinhOagvElEOjwvc3Bhbj57e2lkfX08L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtLXNob3ctcm93XCI+PHNwYW4gY2xhc3M9XCJpdGVtLXNob3ctcm93LXRpdGxlXCI+6aKc6ImyOjwvc3Bhbj57e2NvbG9yfX08L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cblx0XHQ8dmlldyBjbGFzcz1cIml0ZW0tdGl0bGVcIj4y44CB6YCJ5oup6KaB5aSE55CG55qE54Wn54mHPC92aWV3PlxyXG5cdFx0PHZpZXcgc3R5bGU9XCJ3aWR0aDogOTAlO21hcmdpbjoxMHB4IDUlO2Rpc3BsYXk6IGZsZXg7YWxpZ24taXRlbXM6IGNlbnRlcjtcIj5cclxuXHRcdFx0PGJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEB0YXA9XCJ0YWtlUGhvdG9cIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcIj7pgInlj5bnhafniYc8L2J1dHRvbj5cclxuXHRcdDwvdmlldz5cclxuXHRcdOa6kOeFp+eJh++8mlxyXG5cdFx0PHZpZXcgc3R5bGU9XCJ3aWR0aDogOTAlO21hcmdpbjoxMHB4IDUlO2Rpc3BsYXk6IGZsZXg7YWxpZ24taXRlbXM6IGNlbnRlcjtib3JkZXI6IDFweCBkb3R0ZWQgY2FkZXRibHVlO2JvcmRlci1yYWRpdXM6IDJweDtcIj5cblx0XHRcdDwhLS0g5a695bqm5LiN5Y+Y77yM6auY5bqm6Ieq5Yqo5Y+Y5YyW77yM5L+d5oyB5Y6f5Zu+5a696auY5q+U5LiN5Y+YIC0tPlxyXG5cdFx0XHQ8aW1hZ2UgbW9kZT1cIndpZHRoRml4XCIgOnNyYz1cInNyY1wiIEBjbGljaz1cInByZXZpZXdCZWZvcmVcIj48L2ltYWdlPlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJpdGVtLXRpdGxlIFwiPjPjgIHnlJ/miJDlpITnkIblkI7nmoTnhafniYc8L3ZpZXc+XHJcblx0XHQ8dmlldyBzdHlsZT1cIndpZHRoOiA5MCU7bWFyZ2luOjEwcHggNSU7ZGlzcGxheTogZmxleDthbGlnbi1pdGVtczogY2VudGVyO1wiPlxyXG5cdFx0XHQ8YnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgQHRhcD1cInByb2Nlc3NQaG90b1wiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1wiPuWkhOeQhueFp+eJhzwvYnV0dG9uPlxyXG5cdFx0PC92aWV3PlxyXG5cdFx055Sf5oiQ55qE6K+B5Lu254WnKOeUn+aIkOWQjuWwhuiHquWKqOS/neWtmCnvvJpcclxuXHRcdDx2aWV3IHN0eWxlPVwid2lkdGg6IDkwJTttYXJnaW46MTBweCA1JTtkaXNwbGF5OiBmbGV4O2FsaWduLWl0ZW1zOiBjZW50ZXI7Ym9yZGVyOiAxcHggZG90dGVkIGNhZGV0Ymx1ZTtib3JkZXItcmFkaXVzOiAycHg7XCI+XG5cdFx0XHQ8IS0tIOWuveW6puS4jeWPmO+8jOmrmOW6puiHquWKqOWPmOWMlu+8jOS/neaMgeWOn+WbvuWuvemrmOavlOS4jeWPmCAtLT5cclxuXHRcdFx0PGltYWdlIG1vZGU9XCJ3aWR0aEZpeFwiIDpzcmM9XCJzcmNSZXN1bHRcIiBAY2xpY2s9XCJwcmV2aWV3QWZ0ZXJcIj48L2ltYWdlPlxyXG5cdFx0PC92aWV3PlxuXHRcdDx2aWV3IGNsYXNzPVwiaXRlbS10aXRsZVwiPjTjgIHlpITnkIblkI7nmoTnhafniYfkv6Hmga88L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cIlwiPuWkhOeQhuWQjuWbvueJh+eahOWwuuWvuDp7e3Jlc3VsdFNpemV9fTwvdmlldz5cclxuXHRcdDx2aWV3IHN0eWxlPVwid29yZC13cmFwOiBicmVhay13b3JkO1wiPuWkhOeQhuWQjuWbvueJh+eahOWcsOWdgDp7e3Jlc3VsdFVybH19PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHtcclxuXHRcdHBhdGhUb0Jhc2U2NCxcclxuXHRcdGJhc2U2NFRvUGF0aFxyXG5cdH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9pbWFnZS10b29scy9pbmRleC5qc1wiXHJcblxyXG5cdGNvbnN0IGlkcGhvdG9TcGVjc0RhdGEgPSByZXF1aXJlKCdAL2NvbW1vbi9kYXRhL2lkcGhvdG9fc3BlY3MuanNvbicpXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzcmM6ICcnLFxyXG5cdFx0XHRcdHNyY1Jlc3VsdDogJycsXHJcblx0XHRcdFx0QXBwQ29kZTogXCI4NGQ3M2YyYTViZjg0YTA0OTBlM2VkMjA0N2I1Y2MxMlwiLCAvL+S9oOeahGFwcGNvZGVcclxuXHJcblx0XHRcdFx0bG9jYWxEYXRhOiBbXSxcclxuXHJcblx0XHRcdFx0dGl0bGVzOiBbXSxcclxuXHRcdFx0XHR0aXRsZTogXCJcIixcclxuXHRcdFx0XHR0aXRsZWluZGV4OiAwLFxyXG5cclxuXHRcdFx0XHRzcGVjczogW10sXHJcblx0XHRcdFx0c3BlYzogXCJcIixcclxuXHRcdFx0XHRzcGVjaW5kZXg6IDAsXHJcblxyXG5cdFx0XHRcdGlkczogW10sXHJcblx0XHRcdFx0aWQ6IFwiXCIsXHJcblx0XHRcdFx0aWRpbmRleDogMCxcclxuXHJcblx0XHRcdFx0Y29sb3JzOiBbXSxcclxuXHRcdFx0XHRjb2xvcjogXCJcIixcclxuXHRcdFx0XHRjb2xvcmluZGV4OiAwLFxyXG5cclxuXHRcdFx0XHRpbmRleDogMCxcclxuXHRcdFx0XHRsb2NhbGJhc2U2NHN0cjogXCJcIixcclxuXHJcblx0XHRcdFx0cmVzdWx0U2l6ZTogXCJcIixcclxuXHRcdFx0XHRyZXN1bHRVcmw6IFwiXCIsXHJcblx0XHRcdFx0c3BlY0Nob29zZWQ6IGZhbHNlLFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkKCkge1xyXG5cdFx0XHR0aGlzLmxvY2FsRGF0YSA9IGlkcGhvdG9TcGVjc0RhdGE7XHJcblx0XHRcdHRoaXMuaW5pdERhdGEoKTtcclxuXHRcdFx0Y29uc29sZS5sb2codGhpcy5sb2NhbERhdGEsIEFycmF5LmlzQXJyYXkodGhpcy5sb2NhbERhdGEpKTtcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGluaXREYXRhKCkge1xyXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgaWRwaG90b1NwZWNzRGF0YS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0dGhpcy50aXRsZXMucHVzaChpZHBob3RvU3BlY3NEYXRhW2ldLnRpdGxlKTtcclxuXHRcdFx0XHRcdHRoaXMuc3BlY3MucHVzaChpZHBob3RvU3BlY3NEYXRhW2ldLnNwZWMpO1xyXG5cdFx0XHRcdFx0dGhpcy5pZHMucHVzaChpZHBob3RvU3BlY3NEYXRhW2ldLmlkKTtcclxuXHRcdFx0XHRcdHRoaXMuY29sb3JzLnB1c2goaWRwaG90b1NwZWNzRGF0YVtpXS5jb2xvcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMudGl0bGVzLCB0aGlzLnNwZWNzLCB0aGlzLmNvbG9ycyk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGJpbmR0aXRsZUNoYW5nZTogZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdGNvbnN0IHZhbCA9IGUuZGV0YWlsLnZhbHVlXHJcblx0XHRcdFx0dGhpcy50aXRsZWluZGV4ID0gdmFsO1xyXG5cdFx0XHRcdHRoaXMudGl0bGUgPSB0aGlzLnRpdGxlc1t2YWxdO1xyXG5cdFx0XHRcdHRoaXMuc3BlY2luZGV4ID0gdmFsO1xyXG5cdFx0XHRcdHRoaXMuc3BlYyA9IHRoaXMuc3BlY3NbdmFsXTtcclxuXHRcdFx0XHR0aGlzLmlkaW5kZXggPSB2YWw7XHJcblx0XHRcdFx0dGhpcy5pZCA9IHRoaXMuaWRzW3ZhbF07XHJcblx0XHRcdFx0dGhpcy5jb2xvciA9IHRoaXMuY29sb3JzW3RoaXMuc3BlY2luZGV4XVswXTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLnRpdGxlLCB0aGlzLnNwZWMpO1xyXG5cdFx0XHRcdHRoaXMuc3BlY0Nob29zZWQgPSB0cnVlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRiaW5kc3BlY0NoYW5nZTogZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdGNvbnN0IHZhbCA9IGUuZGV0YWlsLnZhbHVlXHJcblx0XHRcdFx0dGhpcy5zcGVjaW5kZXggPSB2YWw7XHJcblx0XHRcdFx0dGhpcy5zcGVjID0gdGhpcy5zcGVjc1t2YWxdO1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLnNwZWMpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRiaW5kY29sb3JDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRjb25zdCB2YWwgPSBlLmRldGFpbC52YWx1ZVxyXG5cdFx0XHRcdHRoaXMuY29sb3JpbmRleCA9IHZhbDtcclxuXHRcdFx0XHR0aGlzLmNvbG9yID0gdGhpcy5jb2xvcnNbdGhpcy5zcGVjaW5kZXhdW3ZhbF07XHJcblx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5jb2xvcik7XHJcblx0XHRcdH0sXHJcblx0XHRcdHByZXZpZXdCZWZvcmUoKSB7XHJcblx0XHRcdFx0dW5pLnByZXZpZXdJbWFnZSh7XHJcblx0XHRcdFx0XHR1cmxzOiBbdGhpcy5zcmNdLFxyXG5cdFx0XHRcdFx0Y3VycmVudDogMFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdHByZXZpZXdBZnRlcigpIHtcclxuXHRcdFx0XHR1bmkucHJldmlld0ltYWdlKHtcclxuXHRcdFx0XHRcdHVybHM6IFt0aGlzLnNyY1Jlc3VsdF0sXHJcblx0XHRcdFx0XHRjdXJyZW50OiAwXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0dGFrZVBob3RvKCkge1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcblx0XHRcdFx0aWYodGhhdC5zcGVjQ2hvb3NlZCA9PSBmYWxzZSl7XG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRpY29uOlwibm9uZVwiLFxuXHRcdFx0XHRcdFx0dGl0bGU6XCLor7fmgqjlhYjpgInmi6nop4TmoLxcIixcblx0XHRcdFx0XHRcdGR1cmF0aW9uOjMwMDBcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dW5pLmNob29zZUltYWdlKHtcclxuXHRcdFx0XHRcdGNvdW50OiAxLFxyXG5cdFx0XHRcdFx0c3VjY2VzcyhyZXMpIHtcclxuXHRcdFx0XHRcdFx0dW5pLmdldEltYWdlSW5mbyh7XHJcblx0XHRcdFx0XHRcdFx0c3JjOiByZXMudGVtcEZpbGVQYXRoc1swXSxcclxuXHRcdFx0XHRcdFx0XHRzdWNjZXNzOiAocmVzcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2cocmVzcyk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LnNyYyA9IHJlc3MucGF0aDtcclxuXHRcdFx0XHRcdFx0XHRcdHBhdGhUb0Jhc2U2NCh0aGF0LnNyYykudGhlbihiYXNlNjRzdHIgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmxvY2FsYmFzZTY0c3RyID0gYmFzZTY0c3RyO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyB0aGF0LnByb2Nlc3NQaG90byhiYXNlNjRzdHIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRwcm9jZXNzUGhvdG8oKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5zcGVjLCB0aGlzLmNvbG9yKTtcclxuXHRcdFx0XHRpZiAodGhpcy5zcGVjID09IFwiXCIgfHwgdGhpcy5jb2xvciA9PSBcIlwiIHx8IHRoaXMubG9jYWxiYXNlNjRzdHIgPT0gXCJcIikge1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiLFxyXG5cdFx0XHRcdFx0XHR0aXRsZTogXCLor7flhYjpgInmi6nopoHlpITnkIbnmoTnhafniYfvvIzlubbphY3nva7lpb3lj4LmlbBcIixcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDBcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHZhciBkYXRhID0ge1xyXG5cdFx0XHRcdFx0XCJwaG90b1wiOiB0aGlzLmxvY2FsYmFzZTY0c3RyLFxyXG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwicG5nXCIsXHJcblx0XHRcdFx0XHQvLyBcInNwZWNcIjogXCIxXCIsIC8vIOingeivgeS7tueFp+inhOagvOWIl+ihqFxyXG5cdFx0XHRcdFx0Ly8gXCJia1wiOiBcInJlZFwiLCAvLyDop4Hor4Hku7bnhafpopzoibLliJfooagsXHJcblx0XHRcdFx0XHRcInNwZWNcIjogdGhpcy5pZCwgLy8g6KeB6K+B5Lu254Wn6KeE5qC85YiX6KGoXHJcblx0XHRcdFx0XHRcImJrXCI6IHRoaXMuY29sb3IsIC8vIOingeivgeS7tueFp+minOiJsuWIl+ihqCxcclxuXHRcdFx0XHRcdFwid2l0aF9waG90b19rZXlcIjogXCIxXCIsXHJcblx0XHRcdFx0XHRcImJlYXV0eV9kZWdyZWVcIjogMS41IC8v5Y+v6YCJ5Y+C5pWw77yM576O6aKc57qn5Yir77yM5rWu54K55Z6L77yM5Y+W5YC8WzEuMC01LjBd77yM6LaF5Ye66IyD5Zu05ZCO55qE5YC85peg5pWI44CC5Li76KaB6LCD6IqC5LqG6IS46YOo6buR55m95bmz6KGh44CCXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdFx0XHR1bmkucmVxdWVzdCh7XHJcblx0XHRcdFx0XHR1cmw6ICdodHRwczovL2lkcDIubWFya2V0LmFsaWNsb3VkYXBpLmNvbS9pZHBob3RvL21ha2UnLCAvL+S7heS4uuekuuS+i++8jOW5tumdnuecn+WunuaOpeWPo+WcsOWdgOOAglxyXG5cdFx0XHRcdFx0ZGF0YTogZGF0YSxcclxuXHRcdFx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXHJcblx0XHRcdFx0XHRoZWFkZXI6IHtcclxuXHRcdFx0XHRcdFx0XCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcblx0XHRcdFx0XHRcdFwiQXV0aG9yaXphdGlvblwiOiBcIkFQUENPREUgXCIgKyB0aGlzLkFwcENvZGUsXHJcblx0XHRcdFx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiLFxyXG5cdFx0XHRcdFx0XHQvLyBcIkNvbnRlbnQtTUQ1XCI6IGNvbnRlbnRfbWQ1XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiLFxyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiByZXMuZGF0YS5lcnJtc2csXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdHRoaXMudGV4dCA9ICdyZXF1ZXN0IHN1Y2Nlc3MnO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNyY1Jlc3VsdCA9IHJlcy5kYXRhLmRhdGEucmVzdWx0O1xyXG5cdFx0XHRcdFx0XHR0aGlzLnJlc3VsdFVybCA9IHJlcy5kYXRhLmRhdGEucmVzdWx0O1xyXG5cdFx0XHRcdFx0XHR0aGlzLnJlc3VsdFNpemUgPSByZXMuZGF0YS5kYXRhLnNpemU7XHJcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRoaXMuc3JjUmVzdWx0KTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zYXZlUGhvdG8odGhpcy5zcmNSZXN1bHQpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGZhaWw6IChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvci5kYXRhLmVycm1zZyk7XHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiLFxyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBlcnJvci5kYXRhLmVycm1zZyxcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+S/neWtmOWbvueJh+WIsOebuOWGjO+8jOaWueS+v+aguOafpVxyXG5cdFx0XHRzYXZlUGhvdG8ocGF0aCkge1xyXG5cdFx0XHRcdC8v5L+d5a2Y5Yiw55u45YaMXHJcblx0XHRcdFx0dW5pLnNhdmVJbWFnZVRvUGhvdG9zQWxidW0oe1xyXG5cdFx0XHRcdFx0ZmlsZVBhdGg6IHBhdGgsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiLFxyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn5bey6Ieq5Yqo5L+d5a2Y6Iez55u45YaMJyxcclxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdC5jb250YWluZXIge1xyXG5cdFx0cGFkZGluZzogMTBweDtcclxuXHR9XHJcblx0Lml0ZW0tdGl0bGV7XG5cdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdG1hcmdpbi10b3A6IDE1cHg7XG5cdH1cclxuXHQuaXRlbS1zZXQge1xyXG5cdFx0LyogaGVpZ2h0OiAwcHg7ICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5waWNrZXItdmlldyB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XHJcblx0XHRtYXJnaW46IDVweDtcclxuXHRcdGhlaWdodDogMzBweDtcclxuXHR9XHJcblxyXG5cdC5pdGVtLXNldC10aXRsZSB7XHJcblx0XHRoZWlnaHQ6IDQ1cHg7XHJcblx0XHR3aWR0aDogMTAwcHg7XHJcblx0XHRsaW5lLWhlaWdodDogNDVweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcblx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bWFyZ2luOiA1cHg7XHJcblx0fVxyXG5cclxuXHQuaXRlbS1zaG93IHtcclxuXHRcdC8qIGhlaWdodDogMHB4OyAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHR9XHJcblxyXG5cdC5pdGVtLXNob3ctcm93IHtcclxuXHRcdG1hcmdpbjogMTBweCAyJTtcclxuXHRcdHdpZHRoOiA5NiU7XHJcblx0XHRib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCBsaWdodGJsdWU7XHJcblx0fVxyXG5cclxuXHQuaXRlbS1zaG93LXJvdy10aXRsZSB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!******************************************************************************!*\
  !*** /Users/wanggang/Desktop/Nucleic_acid_tools/common/image-tools/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(wx) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.pathToBase64 = pathToBase64;exports.base64ToPath = base64ToPath;function getLocalFilePath(path) {\n  if (path.indexOf('_www') === 0 || path.indexOf('_doc') === 0 || path.indexOf('_documents') === 0 || path.indexOf('_downloads') === 0) {\n    return path;\n  }\n  if (path.indexOf('file://') === 0) {\n    return path;\n  }\n  if (path.indexOf('/storage/emulated/0/') === 0) {\n    return path;\n  }\n  if (path.indexOf('/') === 0) {\n    var localFilePath = plus.io.convertAbsoluteFileSystem(path);\n    if (localFilePath !== path) {\n      return localFilePath;\n    } else {\n      path = path.substr(1);\n    }\n  }\n  return '_www/' + path;\n}\n\nfunction dataUrlToBase64(str) {\n  var array = str.split(',');\n  return array[array.length - 1];\n}\n\nvar index = 0;\nfunction getNewFileId() {\n  return Date.now() + String(index++);\n}\n\nfunction biggerThan(v1, v2) {\n  var v1Array = v1.split('.');\n  var v2Array = v2.split('.');\n  var update = false;\n  for (var index = 0; index < v2Array.length; index++) {\n    var diff = v1Array[index] - v2Array[index];\n    if (diff !== 0) {\n      update = diff > 0;\n      break;\n    }\n  }\n  return update;\n}\n\nfunction pathToBase64(path) {\n  return new Promise(function (resolve, reject) {\n    if (typeof window === 'object' && 'document' in window) {\n      if (typeof FileReader === 'function') {\n        var xhr = new XMLHttpRequest();\n        xhr.open('GET', path, true);\n        xhr.responseType = 'blob';\n        xhr.onload = function () {\n          if (this.status === 200) {\n            var fileReader = new FileReader();\n            fileReader.onload = function (e) {\n              resolve(e.target.result);\n            };\n            fileReader.onerror = reject;\n            fileReader.readAsDataURL(this.response);\n          }\n        };\n        xhr.onerror = reject;\n        xhr.send();\n        return;\n      }\n      var canvas = document.createElement('canvas');\n      var c2x = canvas.getContext('2d');\n      var img = new Image();\n      img.onload = function () {\n        canvas.width = img.width;\n        canvas.height = img.height;\n        c2x.drawImage(img, 0, 0);\n        resolve(canvas.toDataURL());\n        canvas.height = canvas.width = 0;\n      };\n      img.onerror = reject;\n      img.src = path;\n      return;\n    }\n    if (typeof plus === 'object') {\n      plus.io.resolveLocalFileSystemURL(getLocalFilePath(path), function (entry) {\n        entry.file(function (file) {\n          var fileReader = new plus.io.FileReader();\n          fileReader.onload = function (data) {\n            resolve(data.target.result);\n          };\n          fileReader.onerror = function (error) {\n            reject(error);\n          };\n          fileReader.readAsDataURL(file);\n        }, function (error) {\n          reject(error);\n        });\n      }, function (error) {\n        reject(error);\n      });\n      return;\n    }\n    if (typeof wx === 'object' && wx.canIUse('getFileSystemManager')) {\n      wx.getFileSystemManager().readFile({\n        filePath: path,\n        encoding: 'base64',\n        success: function success(res) {\n          resolve('data:image/png;base64,' + res.data);\n        },\n        fail: function fail(error) {\n          reject(error);\n        } });\n\n      return;\n    }\n    reject(new Error('not support'));\n  });\n}\n\nfunction base64ToPath(base64) {\n  return new Promise(function (resolve, reject) {\n    if (typeof window === 'object' && 'document' in window) {\n      base64 = base64.split(',');\n      var type = base64[0].match(/:(.*?);/)[1];\n      var str = atob(base64[1]);\n      var n = str.length;\n      var array = new Uint8Array(n);\n      while (n--) {\n        array[n] = str.charCodeAt(n);\n      }\n      return resolve((window.URL || window.webkitURL).createObjectURL(new Blob([array], { type: type })));\n    }\n    var extName = base64.split(',')[0].match(/data\\:\\S+\\/(\\S+);/);\n    if (extName) {\n      extName = extName[1];\n    } else {\n      reject(new Error('base64 error'));\n    }\n    var fileName = getNewFileId() + '.' + extName;\n    if (typeof plus === 'object') {\n      var basePath = '_doc';\n      var dirPath = 'uniapp_temp';\n      var filePath = basePath + '/' + dirPath + '/' + fileName;\n      if (!biggerThan(plus.os.name === 'Android' ? '1.9.9.80627' : '1.9.9.80472', plus.runtime.innerVersion)) {\n        plus.io.resolveLocalFileSystemURL(basePath, function (entry) {\n          entry.getDirectory(dirPath, {\n            create: true,\n            exclusive: false },\n          function (entry) {\n            entry.getFile(fileName, {\n              create: true,\n              exclusive: false },\n            function (entry) {\n              entry.createWriter(function (writer) {\n                writer.onwrite = function () {\n                  resolve(filePath);\n                };\n                writer.onerror = reject;\n                writer.seek(0);\n                writer.writeAsBinary(dataUrlToBase64(base64));\n              }, reject);\n            }, reject);\n          }, reject);\n        }, reject);\n        return;\n      }\n      var bitmap = new plus.nativeObj.Bitmap(fileName);\n      bitmap.loadBase64Data(base64, function () {\n        bitmap.save(filePath, {}, function () {\n          bitmap.clear();\n          resolve(filePath);\n        }, function (error) {\n          bitmap.clear();\n          reject(error);\n        });\n      }, function (error) {\n        bitmap.clear();\n        reject(error);\n      });\n      return;\n    }\n    if (typeof wx === 'object' && wx.canIUse('getFileSystemManager')) {\n      var filePath = wx.env.USER_DATA_PATH + '/' + fileName;\n      wx.getFileSystemManager().writeFile({\n        filePath: filePath,\n        data: dataUrlToBase64(base64),\n        encoding: 'base64',\n        success: function success() {\n          resolve(filePath);\n        },\n        fail: function fail(error) {\n          reject(error);\n        } });\n\n      return;\n    }\n    reject(new Error('not support'));\n  });\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @dcloudio/uni-mp-weixin/dist/mp.js */ 20)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2ltYWdlLXRvb2xzL2luZGV4LmpzIl0sIm5hbWVzIjpbImdldExvY2FsRmlsZVBhdGgiLCJwYXRoIiwiaW5kZXhPZiIsImxvY2FsRmlsZVBhdGgiLCJwbHVzIiwiaW8iLCJjb252ZXJ0QWJzb2x1dGVGaWxlU3lzdGVtIiwic3Vic3RyIiwiZGF0YVVybFRvQmFzZTY0Iiwic3RyIiwiYXJyYXkiLCJzcGxpdCIsImxlbmd0aCIsImluZGV4IiwiZ2V0TmV3RmlsZUlkIiwiRGF0ZSIsIm5vdyIsIlN0cmluZyIsImJpZ2dlclRoYW4iLCJ2MSIsInYyIiwidjFBcnJheSIsInYyQXJyYXkiLCJ1cGRhdGUiLCJkaWZmIiwicGF0aFRvQmFzZTY0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ3aW5kb3ciLCJGaWxlUmVhZGVyIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwicmVzcG9uc2VUeXBlIiwib25sb2FkIiwic3RhdHVzIiwiZmlsZVJlYWRlciIsImUiLCJ0YXJnZXQiLCJyZXN1bHQiLCJvbmVycm9yIiwicmVhZEFzRGF0YVVSTCIsInJlc3BvbnNlIiwic2VuZCIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImMyeCIsImdldENvbnRleHQiLCJpbWciLCJJbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhd0ltYWdlIiwidG9EYXRhVVJMIiwic3JjIiwicmVzb2x2ZUxvY2FsRmlsZVN5c3RlbVVSTCIsImVudHJ5IiwiZmlsZSIsImRhdGEiLCJlcnJvciIsInd4IiwiY2FuSVVzZSIsImdldEZpbGVTeXN0ZW1NYW5hZ2VyIiwicmVhZEZpbGUiLCJmaWxlUGF0aCIsImVuY29kaW5nIiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJFcnJvciIsImJhc2U2NFRvUGF0aCIsImJhc2U2NCIsInR5cGUiLCJtYXRjaCIsImF0b2IiLCJuIiwiVWludDhBcnJheSIsImNoYXJDb2RlQXQiLCJVUkwiLCJ3ZWJraXRVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJCbG9iIiwiZXh0TmFtZSIsImZpbGVOYW1lIiwiYmFzZVBhdGgiLCJkaXJQYXRoIiwib3MiLCJuYW1lIiwicnVudGltZSIsImlubmVyVmVyc2lvbiIsImdldERpcmVjdG9yeSIsImNyZWF0ZSIsImV4Y2x1c2l2ZSIsImdldEZpbGUiLCJjcmVhdGVXcml0ZXIiLCJ3cml0ZXIiLCJvbndyaXRlIiwic2VlayIsIndyaXRlQXNCaW5hcnkiLCJiaXRtYXAiLCJuYXRpdmVPYmoiLCJCaXRtYXAiLCJsb2FkQmFzZTY0RGF0YSIsInNhdmUiLCJjbGVhciIsImVudiIsIlVTRVJfREFUQV9QQVRIIiwid3JpdGVGaWxlIl0sIm1hcHBpbmdzIjoiZ0xBQUEsU0FBU0EsZ0JBQVQsQ0FBMEJDLElBQTFCLEVBQWdDO0FBQzVCLE1BQUlBLElBQUksQ0FBQ0MsT0FBTCxDQUFhLE1BQWIsTUFBeUIsQ0FBekIsSUFBOEJELElBQUksQ0FBQ0MsT0FBTCxDQUFhLE1BQWIsTUFBeUIsQ0FBdkQsSUFBNERELElBQUksQ0FBQ0MsT0FBTCxDQUFhLFlBQWIsTUFBK0IsQ0FBM0YsSUFBZ0dELElBQUksQ0FBQ0MsT0FBTCxDQUFhLFlBQWIsTUFBK0IsQ0FBbkksRUFBc0k7QUFDbEksV0FBT0QsSUFBUDtBQUNIO0FBQ0QsTUFBSUEsSUFBSSxDQUFDQyxPQUFMLENBQWEsU0FBYixNQUE0QixDQUFoQyxFQUFtQztBQUMvQixXQUFPRCxJQUFQO0FBQ0g7QUFDRCxNQUFJQSxJQUFJLENBQUNDLE9BQUwsQ0FBYSxzQkFBYixNQUF5QyxDQUE3QyxFQUFnRDtBQUM1QyxXQUFPRCxJQUFQO0FBQ0g7QUFDRCxNQUFJQSxJQUFJLENBQUNDLE9BQUwsQ0FBYSxHQUFiLE1BQXNCLENBQTFCLEVBQTZCO0FBQ3pCLFFBQUlDLGFBQWEsR0FBR0MsSUFBSSxDQUFDQyxFQUFMLENBQVFDLHlCQUFSLENBQWtDTCxJQUFsQyxDQUFwQjtBQUNBLFFBQUlFLGFBQWEsS0FBS0YsSUFBdEIsRUFBNEI7QUFDeEIsYUFBT0UsYUFBUDtBQUNILEtBRkQsTUFFTztBQUNIRixVQUFJLEdBQUdBLElBQUksQ0FBQ00sTUFBTCxDQUFZLENBQVosQ0FBUDtBQUNIO0FBQ0o7QUFDRCxTQUFPLFVBQVVOLElBQWpCO0FBQ0g7O0FBRUQsU0FBU08sZUFBVCxDQUF5QkMsR0FBekIsRUFBOEI7QUFDMUIsTUFBSUMsS0FBSyxHQUFHRCxHQUFHLENBQUNFLEtBQUosQ0FBVSxHQUFWLENBQVo7QUFDQSxTQUFPRCxLQUFLLENBQUNBLEtBQUssQ0FBQ0UsTUFBTixHQUFlLENBQWhCLENBQVo7QUFDSDs7QUFFRCxJQUFJQyxLQUFLLEdBQUcsQ0FBWjtBQUNBLFNBQVNDLFlBQVQsR0FBd0I7QUFDcEIsU0FBT0MsSUFBSSxDQUFDQyxHQUFMLEtBQWFDLE1BQU0sQ0FBQ0osS0FBSyxFQUFOLENBQTFCO0FBQ0g7O0FBRUQsU0FBU0ssVUFBVCxDQUFvQkMsRUFBcEIsRUFBd0JDLEVBQXhCLEVBQTRCO0FBQ3hCLE1BQUlDLE9BQU8sR0FBR0YsRUFBRSxDQUFDUixLQUFILENBQVMsR0FBVCxDQUFkO0FBQ0EsTUFBSVcsT0FBTyxHQUFHRixFQUFFLENBQUNULEtBQUgsQ0FBUyxHQUFULENBQWQ7QUFDQSxNQUFJWSxNQUFNLEdBQUcsS0FBYjtBQUNBLE9BQUssSUFBSVYsS0FBSyxHQUFHLENBQWpCLEVBQW9CQSxLQUFLLEdBQUdTLE9BQU8sQ0FBQ1YsTUFBcEMsRUFBNENDLEtBQUssRUFBakQsRUFBcUQ7QUFDakQsUUFBSVcsSUFBSSxHQUFHSCxPQUFPLENBQUNSLEtBQUQsQ0FBUCxHQUFpQlMsT0FBTyxDQUFDVCxLQUFELENBQW5DO0FBQ0EsUUFBSVcsSUFBSSxLQUFLLENBQWIsRUFBZ0I7QUFDWkQsWUFBTSxHQUFHQyxJQUFJLEdBQUcsQ0FBaEI7QUFDQTtBQUNIO0FBQ0o7QUFDRCxTQUFPRCxNQUFQO0FBQ0g7O0FBRU0sU0FBU0UsWUFBVCxDQUFzQnhCLElBQXRCLEVBQTRCO0FBQy9CLFNBQU8sSUFBSXlCLE9BQUosQ0FBWSxVQUFTQyxPQUFULEVBQWtCQyxNQUFsQixFQUEwQjtBQUN6QyxRQUFJLE9BQU9DLE1BQVAsS0FBa0IsUUFBbEIsSUFBOEIsY0FBY0EsTUFBaEQsRUFBd0Q7QUFDcEQsVUFBSSxPQUFPQyxVQUFQLEtBQXNCLFVBQTFCLEVBQXNDO0FBQ2xDLFlBQUlDLEdBQUcsR0FBRyxJQUFJQyxjQUFKLEVBQVY7QUFDQUQsV0FBRyxDQUFDRSxJQUFKLENBQVMsS0FBVCxFQUFnQmhDLElBQWhCLEVBQXNCLElBQXRCO0FBQ0E4QixXQUFHLENBQUNHLFlBQUosR0FBbUIsTUFBbkI7QUFDQUgsV0FBRyxDQUFDSSxNQUFKLEdBQWEsWUFBVztBQUNwQixjQUFJLEtBQUtDLE1BQUwsS0FBZ0IsR0FBcEIsRUFBeUI7QUFDckIsZ0JBQUlDLFVBQVUsR0FBRyxJQUFJUCxVQUFKLEVBQWpCO0FBQ0FPLHNCQUFVLENBQUNGLE1BQVgsR0FBb0IsVUFBU0csQ0FBVCxFQUFZO0FBQzVCWCxxQkFBTyxDQUFDVyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsTUFBVixDQUFQO0FBQ0gsYUFGRDtBQUdBSCxzQkFBVSxDQUFDSSxPQUFYLEdBQXFCYixNQUFyQjtBQUNBUyxzQkFBVSxDQUFDSyxhQUFYLENBQXlCLEtBQUtDLFFBQTlCO0FBQ0g7QUFDSixTQVREO0FBVUFaLFdBQUcsQ0FBQ1UsT0FBSixHQUFjYixNQUFkO0FBQ0FHLFdBQUcsQ0FBQ2EsSUFBSjtBQUNBO0FBQ0g7QUFDRCxVQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFiO0FBQ0EsVUFBSUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBVjtBQUNBLFVBQUlDLEdBQUcsR0FBRyxJQUFJQyxLQUFKLEVBQVY7QUFDQUQsU0FBRyxDQUFDZixNQUFKLEdBQWEsWUFBVztBQUNwQlUsY0FBTSxDQUFDTyxLQUFQLEdBQWVGLEdBQUcsQ0FBQ0UsS0FBbkI7QUFDQVAsY0FBTSxDQUFDUSxNQUFQLEdBQWdCSCxHQUFHLENBQUNHLE1BQXBCO0FBQ0FMLFdBQUcsQ0FBQ00sU0FBSixDQUFjSixHQUFkLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCO0FBQ0F2QixlQUFPLENBQUNrQixNQUFNLENBQUNVLFNBQVAsRUFBRCxDQUFQO0FBQ0FWLGNBQU0sQ0FBQ1EsTUFBUCxHQUFnQlIsTUFBTSxDQUFDTyxLQUFQLEdBQWUsQ0FBL0I7QUFDSCxPQU5EO0FBT0FGLFNBQUcsQ0FBQ1QsT0FBSixHQUFjYixNQUFkO0FBQ0FzQixTQUFHLENBQUNNLEdBQUosR0FBVXZELElBQVY7QUFDQTtBQUNIO0FBQ0QsUUFBSSxPQUFPRyxJQUFQLEtBQWdCLFFBQXBCLEVBQThCO0FBQzFCQSxVQUFJLENBQUNDLEVBQUwsQ0FBUW9ELHlCQUFSLENBQWtDekQsZ0JBQWdCLENBQUNDLElBQUQsQ0FBbEQsRUFBMEQsVUFBU3lELEtBQVQsRUFBZ0I7QUFDdEVBLGFBQUssQ0FBQ0MsSUFBTixDQUFXLFVBQVNBLElBQVQsRUFBZTtBQUN0QixjQUFJdEIsVUFBVSxHQUFHLElBQUlqQyxJQUFJLENBQUNDLEVBQUwsQ0FBUXlCLFVBQVosRUFBakI7QUFDQU8sb0JBQVUsQ0FBQ0YsTUFBWCxHQUFvQixVQUFTeUIsSUFBVCxFQUFlO0FBQy9CakMsbUJBQU8sQ0FBQ2lDLElBQUksQ0FBQ3JCLE1BQUwsQ0FBWUMsTUFBYixDQUFQO0FBQ0gsV0FGRDtBQUdBSCxvQkFBVSxDQUFDSSxPQUFYLEdBQXFCLFVBQVNvQixLQUFULEVBQWdCO0FBQ2pDakMsa0JBQU0sQ0FBQ2lDLEtBQUQsQ0FBTjtBQUNILFdBRkQ7QUFHQXhCLG9CQUFVLENBQUNLLGFBQVgsQ0FBeUJpQixJQUF6QjtBQUNILFNBVEQsRUFTRyxVQUFTRSxLQUFULEVBQWdCO0FBQ2ZqQyxnQkFBTSxDQUFDaUMsS0FBRCxDQUFOO0FBQ0gsU0FYRDtBQVlILE9BYkQsRUFhRyxVQUFTQSxLQUFULEVBQWdCO0FBQ2ZqQyxjQUFNLENBQUNpQyxLQUFELENBQU47QUFDSCxPQWZEO0FBZ0JBO0FBQ0g7QUFDRCxRQUFJLE9BQU9DLEVBQVAsS0FBYyxRQUFkLElBQTBCQSxFQUFFLENBQUNDLE9BQUgsQ0FBVyxzQkFBWCxDQUE5QixFQUFrRTtBQUM5REQsUUFBRSxDQUFDRSxvQkFBSCxHQUEwQkMsUUFBMUIsQ0FBbUM7QUFDL0JDLGdCQUFRLEVBQUVqRSxJQURxQjtBQUUvQmtFLGdCQUFRLEVBQUUsUUFGcUI7QUFHL0JDLGVBQU8sRUFBRSxpQkFBU0MsR0FBVCxFQUFjO0FBQ25CMUMsaUJBQU8sQ0FBQywyQkFBMkIwQyxHQUFHLENBQUNULElBQWhDLENBQVA7QUFDSCxTQUw4QjtBQU0vQlUsWUFBSSxFQUFFLGNBQVNULEtBQVQsRUFBZ0I7QUFDbEJqQyxnQkFBTSxDQUFDaUMsS0FBRCxDQUFOO0FBQ0gsU0FSOEIsRUFBbkM7O0FBVUE7QUFDSDtBQUNEakMsVUFBTSxDQUFDLElBQUkyQyxLQUFKLENBQVUsYUFBVixDQUFELENBQU47QUFDSCxHQW5FTSxDQUFQO0FBb0VIOztBQUVNLFNBQVNDLFlBQVQsQ0FBc0JDLE1BQXRCLEVBQThCO0FBQ2pDLFNBQU8sSUFBSS9DLE9BQUosQ0FBWSxVQUFTQyxPQUFULEVBQWtCQyxNQUFsQixFQUEwQjtBQUN6QyxRQUFJLE9BQU9DLE1BQVAsS0FBa0IsUUFBbEIsSUFBOEIsY0FBY0EsTUFBaEQsRUFBd0Q7QUFDcEQ0QyxZQUFNLEdBQUdBLE1BQU0sQ0FBQzlELEtBQVAsQ0FBYSxHQUFiLENBQVQ7QUFDQSxVQUFJK0QsSUFBSSxHQUFHRCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVFLEtBQVYsQ0FBZ0IsU0FBaEIsRUFBMkIsQ0FBM0IsQ0FBWDtBQUNBLFVBQUlsRSxHQUFHLEdBQUdtRSxJQUFJLENBQUNILE1BQU0sQ0FBQyxDQUFELENBQVAsQ0FBZDtBQUNBLFVBQUlJLENBQUMsR0FBR3BFLEdBQUcsQ0FBQ0csTUFBWjtBQUNBLFVBQUlGLEtBQUssR0FBRyxJQUFJb0UsVUFBSixDQUFlRCxDQUFmLENBQVo7QUFDQSxhQUFPQSxDQUFDLEVBQVIsRUFBWTtBQUNSbkUsYUFBSyxDQUFDbUUsQ0FBRCxDQUFMLEdBQVdwRSxHQUFHLENBQUNzRSxVQUFKLENBQWVGLENBQWYsQ0FBWDtBQUNIO0FBQ0QsYUFBT2xELE9BQU8sQ0FBQyxDQUFDRSxNQUFNLENBQUNtRCxHQUFQLElBQWNuRCxNQUFNLENBQUNvRCxTQUF0QixFQUFpQ0MsZUFBakMsQ0FBaUQsSUFBSUMsSUFBSixDQUFTLENBQUN6RSxLQUFELENBQVQsRUFBa0IsRUFBRWdFLElBQUksRUFBRUEsSUFBUixFQUFsQixDQUFqRCxDQUFELENBQWQ7QUFDSDtBQUNELFFBQUlVLE9BQU8sR0FBR1gsTUFBTSxDQUFDOUQsS0FBUCxDQUFhLEdBQWIsRUFBa0IsQ0FBbEIsRUFBcUJnRSxLQUFyQixDQUEyQixtQkFBM0IsQ0FBZDtBQUNBLFFBQUlTLE9BQUosRUFBYTtBQUNUQSxhQUFPLEdBQUdBLE9BQU8sQ0FBQyxDQUFELENBQWpCO0FBQ0gsS0FGRCxNQUVPO0FBQ0h4RCxZQUFNLENBQUMsSUFBSTJDLEtBQUosQ0FBVSxjQUFWLENBQUQsQ0FBTjtBQUNIO0FBQ0QsUUFBSWMsUUFBUSxHQUFHdkUsWUFBWSxLQUFLLEdBQWpCLEdBQXVCc0UsT0FBdEM7QUFDQSxRQUFJLE9BQU9oRixJQUFQLEtBQWdCLFFBQXBCLEVBQThCO0FBQzFCLFVBQUlrRixRQUFRLEdBQUcsTUFBZjtBQUNBLFVBQUlDLE9BQU8sR0FBRyxhQUFkO0FBQ0EsVUFBSXJCLFFBQVEsR0FBR29CLFFBQVEsR0FBRyxHQUFYLEdBQWlCQyxPQUFqQixHQUEyQixHQUEzQixHQUFpQ0YsUUFBaEQ7QUFDQSxVQUFJLENBQUNuRSxVQUFVLENBQUNkLElBQUksQ0FBQ29GLEVBQUwsQ0FBUUMsSUFBUixLQUFpQixTQUFqQixHQUE2QixhQUE3QixHQUE2QyxhQUE5QyxFQUE2RHJGLElBQUksQ0FBQ3NGLE9BQUwsQ0FBYUMsWUFBMUUsQ0FBZixFQUF3RztBQUNwR3ZGLFlBQUksQ0FBQ0MsRUFBTCxDQUFRb0QseUJBQVIsQ0FBa0M2QixRQUFsQyxFQUE0QyxVQUFTNUIsS0FBVCxFQUFnQjtBQUN4REEsZUFBSyxDQUFDa0MsWUFBTixDQUFtQkwsT0FBbkIsRUFBNEI7QUFDeEJNLGtCQUFNLEVBQUUsSUFEZ0I7QUFFeEJDLHFCQUFTLEVBQUUsS0FGYSxFQUE1QjtBQUdHLG9CQUFTcEMsS0FBVCxFQUFnQjtBQUNmQSxpQkFBSyxDQUFDcUMsT0FBTixDQUFjVixRQUFkLEVBQXdCO0FBQ3BCUSxvQkFBTSxFQUFFLElBRFk7QUFFcEJDLHVCQUFTLEVBQUUsS0FGUyxFQUF4QjtBQUdHLHNCQUFTcEMsS0FBVCxFQUFnQjtBQUNmQSxtQkFBSyxDQUFDc0MsWUFBTixDQUFtQixVQUFTQyxNQUFULEVBQWlCO0FBQ2hDQSxzQkFBTSxDQUFDQyxPQUFQLEdBQWlCLFlBQVc7QUFDeEJ2RSx5QkFBTyxDQUFDdUMsUUFBRCxDQUFQO0FBQ0gsaUJBRkQ7QUFHQStCLHNCQUFNLENBQUN4RCxPQUFQLEdBQWlCYixNQUFqQjtBQUNBcUUsc0JBQU0sQ0FBQ0UsSUFBUCxDQUFZLENBQVo7QUFDQUYsc0JBQU0sQ0FBQ0csYUFBUCxDQUFxQjVGLGVBQWUsQ0FBQ2lFLE1BQUQsQ0FBcEM7QUFDSCxlQVBELEVBT0c3QyxNQVBIO0FBUUgsYUFaRCxFQVlHQSxNQVpIO0FBYUgsV0FqQkQsRUFpQkdBLE1BakJIO0FBa0JILFNBbkJELEVBbUJHQSxNQW5CSDtBQW9CQTtBQUNIO0FBQ0QsVUFBSXlFLE1BQU0sR0FBRyxJQUFJakcsSUFBSSxDQUFDa0csU0FBTCxDQUFlQyxNQUFuQixDQUEwQmxCLFFBQTFCLENBQWI7QUFDQWdCLFlBQU0sQ0FBQ0csY0FBUCxDQUFzQi9CLE1BQXRCLEVBQThCLFlBQVc7QUFDckM0QixjQUFNLENBQUNJLElBQVAsQ0FBWXZDLFFBQVosRUFBc0IsRUFBdEIsRUFBMEIsWUFBVztBQUNqQ21DLGdCQUFNLENBQUNLLEtBQVA7QUFDQS9FLGlCQUFPLENBQUN1QyxRQUFELENBQVA7QUFDSCxTQUhELEVBR0csVUFBU0wsS0FBVCxFQUFnQjtBQUNmd0MsZ0JBQU0sQ0FBQ0ssS0FBUDtBQUNBOUUsZ0JBQU0sQ0FBQ2lDLEtBQUQsQ0FBTjtBQUNILFNBTkQ7QUFPSCxPQVJELEVBUUcsVUFBU0EsS0FBVCxFQUFnQjtBQUNmd0MsY0FBTSxDQUFDSyxLQUFQO0FBQ0E5RSxjQUFNLENBQUNpQyxLQUFELENBQU47QUFDSCxPQVhEO0FBWUE7QUFDSDtBQUNELFFBQUksT0FBT0MsRUFBUCxLQUFjLFFBQWQsSUFBMEJBLEVBQUUsQ0FBQ0MsT0FBSCxDQUFXLHNCQUFYLENBQTlCLEVBQWtFO0FBQzlELFVBQUlHLFFBQVEsR0FBR0osRUFBRSxDQUFDNkMsR0FBSCxDQUFPQyxjQUFQLEdBQXdCLEdBQXhCLEdBQThCdkIsUUFBN0M7QUFDQXZCLFFBQUUsQ0FBQ0Usb0JBQUgsR0FBMEI2QyxTQUExQixDQUFvQztBQUNoQzNDLGdCQUFRLEVBQUVBLFFBRHNCO0FBRWhDTixZQUFJLEVBQUVwRCxlQUFlLENBQUNpRSxNQUFELENBRlc7QUFHaENOLGdCQUFRLEVBQUUsUUFIc0I7QUFJaENDLGVBQU8sRUFBRSxtQkFBVztBQUNoQnpDLGlCQUFPLENBQUN1QyxRQUFELENBQVA7QUFDSCxTQU4rQjtBQU9oQ0ksWUFBSSxFQUFFLGNBQVNULEtBQVQsRUFBZ0I7QUFDbEJqQyxnQkFBTSxDQUFDaUMsS0FBRCxDQUFOO0FBQ0gsU0FUK0IsRUFBcEM7O0FBV0E7QUFDSDtBQUNEakMsVUFBTSxDQUFDLElBQUkyQyxLQUFKLENBQVUsYUFBVixDQUFELENBQU47QUFDSCxHQTdFTSxDQUFQO0FBOEVILEMiLCJmaWxlIjoiMTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRMb2NhbEZpbGVQYXRoKHBhdGgpIHtcbiAgICBpZiAocGF0aC5pbmRleE9mKCdfd3d3JykgPT09IDAgfHwgcGF0aC5pbmRleE9mKCdfZG9jJykgPT09IDAgfHwgcGF0aC5pbmRleE9mKCdfZG9jdW1lbnRzJykgPT09IDAgfHwgcGF0aC5pbmRleE9mKCdfZG93bmxvYWRzJykgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICB9XG4gICAgaWYgKHBhdGguaW5kZXhPZignZmlsZTovLycpID09PSAwKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgfVxuICAgIGlmIChwYXRoLmluZGV4T2YoJy9zdG9yYWdlL2VtdWxhdGVkLzAvJykgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICB9XG4gICAgaWYgKHBhdGguaW5kZXhPZignLycpID09PSAwKSB7XG4gICAgICAgIHZhciBsb2NhbEZpbGVQYXRoID0gcGx1cy5pby5jb252ZXJ0QWJzb2x1dGVGaWxlU3lzdGVtKHBhdGgpXG4gICAgICAgIGlmIChsb2NhbEZpbGVQYXRoICE9PSBwYXRoKSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxGaWxlUGF0aFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyKDEpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICdfd3d3LycgKyBwYXRoXG59XG5cbmZ1bmN0aW9uIGRhdGFVcmxUb0Jhc2U2NChzdHIpIHtcbiAgICB2YXIgYXJyYXkgPSBzdHIuc3BsaXQoJywnKVxuICAgIHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXVxufVxuXG52YXIgaW5kZXggPSAwXG5mdW5jdGlvbiBnZXROZXdGaWxlSWQoKSB7XG4gICAgcmV0dXJuIERhdGUubm93KCkgKyBTdHJpbmcoaW5kZXgrKylcbn1cblxuZnVuY3Rpb24gYmlnZ2VyVGhhbih2MSwgdjIpIHtcbiAgICB2YXIgdjFBcnJheSA9IHYxLnNwbGl0KCcuJylcbiAgICB2YXIgdjJBcnJheSA9IHYyLnNwbGl0KCcuJylcbiAgICB2YXIgdXBkYXRlID0gZmFsc2VcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdjJBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdmFyIGRpZmYgPSB2MUFycmF5W2luZGV4XSAtIHYyQXJyYXlbaW5kZXhdXG4gICAgICAgIGlmIChkaWZmICE9PSAwKSB7XG4gICAgICAgICAgICB1cGRhdGUgPSBkaWZmID4gMFxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdXBkYXRlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRoVG9CYXNlNjQocGF0aCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmICdkb2N1bWVudCcgaW4gd2luZG93KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIEZpbGVSZWFkZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcbiAgICAgICAgICAgICAgICB4aHIub3BlbignR0VUJywgcGF0aCwgdHJ1ZSlcbiAgICAgICAgICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InXG4gICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlUmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGUudGFyZ2V0LnJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVSZWFkZXIub25lcnJvciA9IHJlamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKHRoaXMucmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSByZWplY3RcbiAgICAgICAgICAgICAgICB4aHIuc2VuZCgpXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgICAgICAgIHZhciBjMnggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZVxuICAgICAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGltZy53aWR0aFxuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0XG4gICAgICAgICAgICAgICAgYzJ4LmRyYXdJbWFnZShpbWcsIDAsIDApXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShjYW52YXMudG9EYXRhVVJMKCkpXG4gICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGNhbnZhcy53aWR0aCA9IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZy5vbmVycm9yID0gcmVqZWN0XG4gICAgICAgICAgICBpbWcuc3JjID0gcGF0aFxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBwbHVzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcGx1cy5pby5yZXNvbHZlTG9jYWxGaWxlU3lzdGVtVVJMKGdldExvY2FsRmlsZVBhdGgocGF0aCksIGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgZW50cnkuZmlsZShmdW5jdGlvbihmaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmaWxlUmVhZGVyID0gbmV3IHBsdXMuaW8uRmlsZVJlYWRlcigpXG4gICAgICAgICAgICAgICAgICAgIGZpbGVSZWFkZXIub25sb2FkID0gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhLnRhcmdldC5yZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmlsZVJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSlcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd3ggPT09ICdvYmplY3QnICYmIHd4LmNhbklVc2UoJ2dldEZpbGVTeXN0ZW1NYW5hZ2VyJykpIHtcbiAgICAgICAgICAgIHd4LmdldEZpbGVTeXN0ZW1NYW5hZ2VyKCkucmVhZEZpbGUoe1xuICAgICAgICAgICAgICAgIGZpbGVQYXRoOiBwYXRoLFxuICAgICAgICAgICAgICAgIGVuY29kaW5nOiAnYmFzZTY0JyxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCcgKyByZXMuZGF0YSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignbm90IHN1cHBvcnQnKSlcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFzZTY0VG9QYXRoKGJhc2U2NCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmICdkb2N1bWVudCcgaW4gd2luZG93KSB7XG4gICAgICAgICAgICBiYXNlNjQgPSBiYXNlNjQuc3BsaXQoJywnKVxuICAgICAgICAgICAgdmFyIHR5cGUgPSBiYXNlNjRbMF0ubWF0Y2goLzooLio/KTsvKVsxXVxuICAgICAgICAgICAgdmFyIHN0ciA9IGF0b2IoYmFzZTY0WzFdKVxuICAgICAgICAgICAgdmFyIG4gPSBzdHIubGVuZ3RoXG4gICAgICAgICAgICB2YXIgYXJyYXkgPSBuZXcgVWludDhBcnJheShuKVxuICAgICAgICAgICAgd2hpbGUgKG4tLSkge1xuICAgICAgICAgICAgICAgIGFycmF5W25dID0gc3RyLmNoYXJDb2RlQXQobilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCh3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkwpLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbYXJyYXldLCB7IHR5cGU6IHR5cGUgfSkpKVxuICAgICAgICB9XG4gICAgICAgIHZhciBleHROYW1lID0gYmFzZTY0LnNwbGl0KCcsJylbMF0ubWF0Y2goL2RhdGFcXDpcXFMrXFwvKFxcUyspOy8pXG4gICAgICAgIGlmIChleHROYW1lKSB7XG4gICAgICAgICAgICBleHROYW1lID0gZXh0TmFtZVsxXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignYmFzZTY0IGVycm9yJykpXG4gICAgICAgIH1cbiAgICAgICAgdmFyIGZpbGVOYW1lID0gZ2V0TmV3RmlsZUlkKCkgKyAnLicgKyBleHROYW1lXG4gICAgICAgIGlmICh0eXBlb2YgcGx1cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHZhciBiYXNlUGF0aCA9ICdfZG9jJ1xuICAgICAgICAgICAgdmFyIGRpclBhdGggPSAndW5pYXBwX3RlbXAnXG4gICAgICAgICAgICB2YXIgZmlsZVBhdGggPSBiYXNlUGF0aCArICcvJyArIGRpclBhdGggKyAnLycgKyBmaWxlTmFtZVxuICAgICAgICAgICAgaWYgKCFiaWdnZXJUaGFuKHBsdXMub3MubmFtZSA9PT0gJ0FuZHJvaWQnID8gJzEuOS45LjgwNjI3JyA6ICcxLjkuOS44MDQ3MicsIHBsdXMucnVudGltZS5pbm5lclZlcnNpb24pKSB7XG4gICAgICAgICAgICAgICAgcGx1cy5pby5yZXNvbHZlTG9jYWxGaWxlU3lzdGVtVVJMKGJhc2VQYXRoLCBmdW5jdGlvbihlbnRyeSkge1xuICAgICAgICAgICAgICAgICAgICBlbnRyeS5nZXREaXJlY3RvcnkoZGlyUGF0aCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhjbHVzaXZlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LmdldEZpbGUoZmlsZU5hbWUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhjbHVzaXZlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkuY3JlYXRlV3JpdGVyKGZ1bmN0aW9uKHdyaXRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0ZXIub253cml0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmaWxlUGF0aClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0ZXIub25lcnJvciA9IHJlamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0ZXIuc2VlaygwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0ZXIud3JpdGVBc0JpbmFyeShkYXRhVXJsVG9CYXNlNjQoYmFzZTY0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCByZWplY3QpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCByZWplY3QpXG4gICAgICAgICAgICAgICAgICAgIH0sIHJlamVjdClcbiAgICAgICAgICAgICAgICB9LCByZWplY3QpXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgYml0bWFwID0gbmV3IHBsdXMubmF0aXZlT2JqLkJpdG1hcChmaWxlTmFtZSlcbiAgICAgICAgICAgIGJpdG1hcC5sb2FkQmFzZTY0RGF0YShiYXNlNjQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGJpdG1hcC5zYXZlKGZpbGVQYXRoLCB7fSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGJpdG1hcC5jbGVhcigpXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZmlsZVBhdGgpXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgYml0bWFwLmNsZWFyKClcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgIGJpdG1hcC5jbGVhcigpXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd3ggPT09ICdvYmplY3QnICYmIHd4LmNhbklVc2UoJ2dldEZpbGVTeXN0ZW1NYW5hZ2VyJykpIHtcbiAgICAgICAgICAgIHZhciBmaWxlUGF0aCA9IHd4LmVudi5VU0VSX0RBVEFfUEFUSCArICcvJyArIGZpbGVOYW1lXG4gICAgICAgICAgICB3eC5nZXRGaWxlU3lzdGVtTWFuYWdlcigpLndyaXRlRmlsZSh7XG4gICAgICAgICAgICAgICAgZmlsZVBhdGg6IGZpbGVQYXRoLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFVcmxUb0Jhc2U2NChiYXNlNjQpLFxuICAgICAgICAgICAgICAgIGVuY29kaW5nOiAnYmFzZTY0JyxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmaWxlUGF0aClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignbm90IHN1cHBvcnQnKSlcbiAgICB9KVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/mp.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.Behavior = Behavior;exports.Component = Component;exports.Page = Page;exports.nextTick = exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 22));var _PROP_DEFAULT_VALUES;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}

function parseData(data, vueComponentOptions) {
  if (!data) {
    return;
  }
  vueComponentOptions.mpOptions.data = data;
}

function parseComponents(vueComponentOptions) {
  vueComponentOptions.components = global.__wxVueOptions.components;
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var SOURCE_KEY = '__data__';

var COMPONENT_LIFECYCLE = {
  created: 'onServiceCreated',
  attached: 'onServiceAttached',
  ready: 'mounted',
  moved: 'moved',
  detached: 'destroyed' };


var COMPONENT_LIFECYCLE_KEYS = Object.keys(COMPONENT_LIFECYCLE);

var PAGE_LIFETIMES = {
  show: 'onPageShow',
  hide: 'onPageHide',
  resize: 'onPageResize' };


var PAGE_LIFETIMES_KEYS = Object.keys(PAGE_LIFETIMES);

var PAGE_LIFECYCLE = [
'onLoad',
'onShow',
'onReady',
'onHide',
'onUnload',
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function parsePageMethods(mpComponentOptions, vueComponentOptions) {
  var methods = Object.create(null);
  Object.keys(mpComponentOptions).forEach(function (key) {
    var value = mpComponentOptions[key];
    if (isFn(value) && PAGE_LIFECYCLE.indexOf(key) === -1) {
      methods[key] = value;
    }
  });
  vueComponentOptions.methods = methods;
}

function parsePageLifecycle(mpComponentOptions, vueComponentOptions) {
  Object.keys(mpComponentOptions).forEach(function (key) {
    if (PAGE_LIFECYCLE.indexOf(key) !== -1) {
      vueComponentOptions[key] = mpComponentOptions[key];
    }
  });
}

function parsePage(mpComponentOptions) {
  var vueComponentOptions = {
    mixins: [],
    mpOptions: {} };


  parseComponents(vueComponentOptions);

  parseData(mpComponentOptions.data, vueComponentOptions);

  parsePageMethods(mpComponentOptions, vueComponentOptions);
  parsePageLifecycle(mpComponentOptions, vueComponentOptions);

  return vueComponentOptions;
}

function parseProperties(properties, vueComponentOptions) {
  if (!properties) {
    return;
  }
  vueComponentOptions.mpOptions.properties = properties;
}

function parseOptions(options, vueComponentOptions) {
  if (!options) {
    return;
  }
  vueComponentOptions.mpOptions.options = options;
}

function parseMethods(methods, vueComponentOptions) {
  if (!methods) {
    return;
  }
  if (methods.$emit) {
    console.warn('Method "$emit" conflicts with an existing Vue instance method');
    delete methods.$emit;
  }
  vueComponentOptions.methods = methods;
}

function parseLifecycle(mpComponentOptions, vueComponentOptions) {
  COMPONENT_LIFECYCLE_KEYS.forEach(function (name) {
    if (hasOwn(mpComponentOptions, name)) {
      (vueComponentOptions[COMPONENT_LIFECYCLE[name]] || (vueComponentOptions[COMPONENT_LIFECYCLE[name]] = [])).
      push(mpComponentOptions[name]);
    }
  });
}

var mpBehaviors = {
  'wx://form-field': {},
  'wx://component-export': {} };


function callDefinitionFilter(mpComponentOptions) {var

  behaviors =

  mpComponentOptions.behaviors,definitionFilter = mpComponentOptions.definitionFilter;

  var behaviorDefinitionFilters = [];

  if (Array.isArray(behaviors)) {
    behaviors.forEach(function (behavior) {
      behavior = typeof behavior === 'string' ? mpBehaviors[behavior] : behavior;
      if (behavior.definitionFilter) {
        behaviorDefinitionFilters.push(behavior.definitionFilter);
        behavior.definitionFilter.call(null, mpComponentOptions, []);
      }
    });
  }

  if (isFn(definitionFilter)) {
    return function (defFields) {
      definitionFilter(defFields, behaviorDefinitionFilters);
    };
  }
}

function parseDefinitionFilter(mpComponentOptions, vueComponentOptions) {
  callDefinitionFilter(mpComponentOptions);
}

function parseBehavior(behavior) {var

  data =



  behavior.data,methods = behavior.methods,behaviors = behavior.behaviors,properties = behavior.properties;

  var vueComponentOptions = {
    watch: {},
    mpOptions: {
      mpObservers: [] } };



  parseData(data, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);

  parseLifecycle(behavior, vueComponentOptions);
  parseDefinitionFilter(behavior);

  return vueComponentOptions;
}

var BEHAVIORS = {
  'wx://form-field': {
    beforeCreate: function beforeCreate() {
      var mpOptions = this.$options.mpOptions;
      if (!mpOptions.properties) {
        mpOptions.properties = Object.create(null);
      }

      var props = mpOptions.properties;
      // TODO form submit,reset
      if (!hasOwn(props, 'name')) {
        props.name = {
          type: String };

      }
      if (!hasOwn(props, 'value')) {
        props.value = {
          type: String // 默认类型调整为 String,否则默认值为 null,导致一些自定义 input 显示不正确
        };
      }
    } } };



function parseBehaviors(behaviors, vueComponentOptions) {
  if (!behaviors) {
    return;
  }
  behaviors.forEach(function (behavior) {
    if (typeof behavior === 'string') {
      BEHAVIORS[behavior] && vueComponentOptions.mixins.push(BEHAVIORS[behavior]);
    } else {
      vueComponentOptions.mixins.push(parseBehavior(behavior));
    }
  });
}

function parseSinglePath(path) {
  return path.split('.');
}

function parseMultiPaths(paths) {
  return paths.split(',').map(function (path) {return parseSinglePath(path);});
}

function parseObservers(observers, vueComponentOptions) {
  if (!observers) {
    return;
  }var


  mpObservers =
  vueComponentOptions.mpOptions.mpObservers;

  Object.keys(observers).forEach(function (path) {
    mpObservers.push({
      paths: parseMultiPaths(path),
      observer: observers[path] });

  });
}

function relative(from, to) {
  if (to.indexOf('/') === 0) {
    from = '';
  }
  var fromArr = from.split('/');
  var toArr = to.split('/');
  fromArr.pop();
  while (toArr.length) {
    var part = toArr.shift();
    if (part !== '' && part !== '.') {
      if (part !== '..') {
        fromArr.push(part);
      } else {
        fromArr.pop();
      }
    }
  }
  return fromArr.join('/');
}

function parseRelations(relations, vueComponentOptions) {
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    var relation = relations[name];
    relation.name = name;
    relation.target = relation.target ? String(relation.target) : relative(global.__wxRoute, name);
  });
  vueComponentOptions.mpOptions.relations = relations;
}

function parseExternalClasses(externalClasses, vueComponentOptions) {
  if (!externalClasses) {
    return;
  }
  if (!Array.isArray(externalClasses)) {
    externalClasses = [externalClasses];
  }
  vueComponentOptions.mpOptions.externalClasses = externalClasses;
  if (!vueComponentOptions.mpOptions.properties) {
    vueComponentOptions.mpOptions.properties = Object.create(null);
  }
  externalClasses.forEach(function (externalClass) {
    vueComponentOptions.mpOptions.properties[camelize(externalClass)] = {
      type: String,
      value: '' };

  });
}

function parseLifetimes(lifetimes, vueComponentOptions) {
  if (!lifetimes) {
    return;
  }
  parseLifecycle(lifetimes, vueComponentOptions);
}

function parsePageLifetimes(pageLifetimes, vueComponentOptions) {
  if (!pageLifetimes) {
    return;
  }
  PAGE_LIFETIMES_KEYS.forEach(function (key) {
    var lifetimeFn = pageLifetimes[key];
    isFn(lifetimeFn) && (vueComponentOptions[PAGE_LIFETIMES[key]] = lifetimeFn);
  });
}

function parseComponent(mpComponentOptions) {var

  data =









  mpComponentOptions.data,options = mpComponentOptions.options,methods = mpComponentOptions.methods,behaviors = mpComponentOptions.behaviors,lifetimes = mpComponentOptions.lifetimes,observers = mpComponentOptions.observers,relations = mpComponentOptions.relations,properties = mpComponentOptions.properties,pageLifetimes = mpComponentOptions.pageLifetimes,externalClasses = mpComponentOptions.externalClasses;

  var vueComponentOptions = {
    mixins: [],
    props: {},
    watch: {},
    mpOptions: {
      mpObservers: [] } };



  parseComponents(vueComponentOptions);

  parseData(data, vueComponentOptions);
  parseOptions(options, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseLifetimes(lifetimes, vueComponentOptions);
  parseObservers(observers, vueComponentOptions);
  parseRelations(relations, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);
  parsePageLifetimes(pageLifetimes, vueComponentOptions);
  parseExternalClasses(externalClasses, vueComponentOptions);

  parseLifecycle(mpComponentOptions, vueComponentOptions);
  parseDefinitionFilter(mpComponentOptions);

  return vueComponentOptions;
}

function initRelationHandlers(type, handler, target, ctx) {
  if (!handler) {
    return;
  }
  var name = "_$".concat(type, "Handlers");
  (ctx[name] || (ctx[name] = [])).push(function () {
    handler.call(ctx, target);
  });
}

function initLinkedHandlers(relation, target, ctx) {
  var type = 'linked';
  var name = relation.name;
  var relationNodes = ctx._$relationNodes || (ctx._$relationNodes = Object.create(null));
  (relationNodes[name] || (relationNodes[name] = [])).push(target);
  initRelationHandlers(type, relation[type], target, ctx);
}

function initUnlinkedHandlers(relation, target, ctx) {
  var type = 'unlinked';
  initRelationHandlers(type, relation[type], target, ctx);
}

function findParentRelation(parentVm, target, type) {
  var relations = parentVm &&
  parentVm.$options.mpOptions &&
  parentVm.$options.mpOptions.relations;

  if (!relations) {
    return [];
  }
  var name = Object.keys(relations).find(function (name) {
    var relation = relations[name];
    return relation.target === target && relation.type === type;
  });
  if (!name) {
    return [];
  }
  return [relations[name], parentVm];
}

function initParentRelation(vm, childRelation, match) {var _match =
  match(vm, vm.$options.mpOptions.path),_match2 = _slicedToArray(_match, 2),parentRelation = _match2[0],parentVm = _match2[1];
  if (!parentRelation) {
    return;
  }

  initLinkedHandlers(parentRelation, vm, parentVm);
  initLinkedHandlers(childRelation, parentVm, vm);

  initUnlinkedHandlers(parentRelation, vm, parentVm);
  initUnlinkedHandlers(childRelation, parentVm, vm);
}

function initRelation(relation, vm) {
  var type = relation.type;
  if (type === 'parent') {
    initParentRelation(vm, relation, function matchParent(vm, target) {
      return findParentRelation(vm.$parent, target, 'child');
    });
  } else if (type === 'ancestor') {
    initParentRelation(vm, relation, function matchAncestor(vm, target) {
      var $parent = vm.$parent;
      while ($parent) {
        var ret = findParentRelation($parent, target, 'descendant');
        if (ret.length) {
          return ret;
        }
        $parent = $parent.$parent;
      }
      return [];
    });
  }
}

function initRelations(vm) {var _ref =


  vm.$options.mpOptions || {},relations = _ref.relations;
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    initRelation(relations[name], vm);
  });
}

function handleRelations(vm, type) {
  // TODO 需要移除 relationNodes
  var handlers = vm["_$".concat(type, "Handlers")];
  if (!handlers) {
    return;
  }
  handlers.forEach(function (handler) {return handler();});
}

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop };


function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function setDataByExprPath(exprPath, value, data) {
  var keys = exprPath.replace(/\[(\d+?)\]/g, '.$1').split('.');
  keys.reduce(function (obj, key, idx) {
    if (idx === keys.length - 1) {
      obj[key] = value;
    } else {
      if (typeof obj[key] === 'undefined') {
        obj[key] = {};
      }
      return obj[key];
    }
  }, data);
  return keys.length === 1;
}

function setData(data, callback) {var _this = this;
  if (!isPlainObject(data)) {
    return;
  }
  Object.keys(data).forEach(function (key) {
    if (setDataByExprPath(key, data[key], _this.data)) {
      !hasOwn(_this, key) && proxy(_this, SOURCE_KEY, key);
    }
  });
  this.$forceUpdate();
  isFn(callback) && this.$nextTick(callback);
}

/**
   * https://github.com/swan-team/swan-js/blob/61e2a63f7aa576b5daafbe77fdfa7c65b977060c/src/utils/index.js
   */

var _toString$1 = Object.prototype.toString;
/**
                                              * 深度assign的函数
                                              * @param {Object} targetObject 要被拷贝的目标对象
                                              * @param {Object} originObject 拷贝的源对象
                                              * @return {Object} merge后的对象
                                              */
var deepAssign = function deepAssign() {var targetObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var originObject = arguments.length > 1 ? arguments[1] : undefined;
  var originType = _toString$1.call(originObject);
  if (originType === '[object Array]') {
    targetObject = originObject.slice(0);
    return targetObject;
  } else if (originType === '[object Object]') {
    for (var key in originObject) {
      targetObject[key] = deepAssign(targetObject[key], originObject[key]);
    }
    return targetObject;
  } else if (originType === '[object Date]') {
    return new Date(originObject.getTime());
  } else if (originType === '[object RegExp]') {
    var target = String(originObject);
    var lastIndex = target.lastIndexOf('/');
    return new RegExp(target.slice(1, lastIndex), target.slice(lastIndex + 1));
  }
  return originObject;
};

/**
    * 深度拷贝逻辑，不同于lodash等库，但是与微信一致
    * @param {*} [originObj] 原对象
    * @return {Object|Array} 拷贝结果
    */
var deepClone = function deepClone(originObj) {
  return deepAssign(_toString$1.call(originObj) === '[object Array]' ? [] : {}, originObj);
};

var PROP_DEFAULT_VALUES = (_PROP_DEFAULT_VALUES = {}, _defineProperty(_PROP_DEFAULT_VALUES,
String, ''), _defineProperty(_PROP_DEFAULT_VALUES,
Number, 0), _defineProperty(_PROP_DEFAULT_VALUES,
Boolean, false), _defineProperty(_PROP_DEFAULT_VALUES,
Object, null), _defineProperty(_PROP_DEFAULT_VALUES,
Array, []), _defineProperty(_PROP_DEFAULT_VALUES,
null, null), _PROP_DEFAULT_VALUES);


function getDefaultVal(propType) {
  return PROP_DEFAULT_VALUES[propType];
}

function getPropertyVal(options) {
  if (isPlainObject(options)) {
    if (hasOwn(options, 'value')) {
      return options.value;
    }
    return getDefaultVal(options.type);
  }
  return getDefaultVal(options);
}

function getType(propOptions) {
  return isPlainObject(propOptions) ? propOptions.type : propOptions;
}

function validateProp(key, propsOptions, propsData, vm) {
  var value = propsData[key];
  if (value !== undefined) {
    var propOptions = propsOptions[key];
    var type = getType(propOptions);
    value = formatVal(value, type);
    var observer = propOptions && propOptions.observer;
    if (observer) {
      // 初始化时,异步触发 observer,否则 observer 中无法访问 methods 或其他
      setTimeout(function () {
        observe(observer, vm, value);
      }, 4);
    }
    return value;
  }
  return getPropertyVal(propsOptions[key]);
}

function formatVal(val, type) {
  if (type === Boolean) {
    return !!val;
  } else if (type === String) {
    return String(val);
  }
  return val;
}

function observe(observer, vm, newVal, oldVal) {
  try {
    if (typeof observer === 'function') {
      observer.call(vm, newVal, oldVal);
    } else if (typeof observer === 'string' &&
    typeof vm[observer] === 'function')
    {
      vm[observer](newVal, oldVal);
    }
  } catch (err) {
    console.error("execute observer ".concat(observer, " callback fail! err: ").concat(err));
  }
}

function initProperties(vm, instanceData) {
  var properties = vm.$options.mpOptions.properties;
  if (!properties) {
    return;
  }

  var propsData = deepClone(vm.$options.propsData) || {};var _loop = function _loop(

  key) {
    var observer = isPlainObject(properties[key]) ? properties[key].observer : false;
    var value = validateProp(key, properties, propsData, vm);
    Object.defineProperty(instanceData, key, {
      enumerable: true,
      configurable: true,
      get: function get() {
        return value;
      },
      set: function set(newVal) {
        var oldVal = value;
        /* eslint-disable no-self-compare */
        if (newVal === value || newVal !== newVal && value !== value) {
          return;
        }
        // TODO 临时方案,clone array
        value = Array.isArray(newVal) ? newVal.slice(0) : newVal;
        if (observer) {
          observe(observer, vm, newVal, oldVal);
        }
        // 触发渲染
        vm.$forceUpdate();
      } });};for (var key in properties) {_loop(key);

  }
}

function updateProperties(vm) {
  var properties = vm.$options.mpOptions && vm.$options.mpOptions.properties;
  var propsData = vm.$options.propsData;
  if (propsData && properties) {
    Object.keys(properties).forEach(function (key) {
      if (hasOwn(propsData, key)) {
        vm[key] = formatVal(propsData[key], getType(properties[key]));
      }
    });
  }
}

function initState(vm) {
  var instanceData = JSON.parse(JSON.stringify(vm.$options.mpOptions.data || {}));

  vm[SOURCE_KEY] = instanceData;

  var propertyDefinition = {
    get: function get() {
      return vm[SOURCE_KEY];
    },
    set: function set(value) {
      vm[SOURCE_KEY] = value;
    } };


  Object.defineProperties(vm, {
    data: propertyDefinition,
    properties: propertyDefinition });


  vm.setData = setData;

  initProperties(vm, instanceData);

  Object.keys(instanceData).forEach(function (key) {
    proxy(vm, SOURCE_KEY, key);
  });
}

function initMethods(vm) {
  var oldEmit = vm.$emit;
  vm.triggerEvent = function (eventName, detail, options) {
    var target = {
      dataset: vm.$el.dataset };


    var event = {
      target: target,
      currentTarget: target,
      detail: detail,
      preventDefault: noop,
      stopPropagation: noop };


    oldEmit.call(vm, eventName, event);
  };
  // 主要是Vant 自己封装了 $emit,放到 methods 中会触发 Vue 的警告,索性,框架直接重写该方法
  vm.$emit = function () {
    vm.triggerEvent.apply(vm, arguments);
  };
  vm.getRelationNodes = function (relationKey) {
    // 需要过滤已被销毁的vm
    /* eslint-disable  no-mixed-operators */
    return (vm._$relationNodes && vm._$relationNodes[relationKey] || []).filter(function (vm) {return !vm._isDestroyed;});
  };

  vm._$updateProperties = updateProperties;
}

function handleObservers(vm) {
  var watch = vm.$options.watch;
  if (!watch) {
    return;
  }
  Object.keys(watch).forEach(function (name) {
    var observer = watch[name];
    if (observer.mounted) {
      var val = vm[name];
      var handler = observer.handler;
      if (typeof handler === 'string') {
        handler = vm[handler];
      }
      handler && handler.call(vm, val, val);
    }
  });
}

var polyfill = {
  beforeCreate: function beforeCreate() {
    // 取消 development 时的 Proxy,避免小程序组件模板中使用尚未定义的属性告警
    this._renderProxy = this;

    this._$self = this;
    this._$noop = noop;
  },
  created: function created() {// properties 中可能会访问 methods,故需要在 created 中初始化
    initState(this);
    initMethods(this);
    initRelations(this);
  },
  mounted: function mounted() {
    handleObservers(this);
  },
  destroyed: function destroyed() {
    handleRelations(this, 'unlinked');
  } };


global.__wxRoute = '';
global.__wxComponents = Object.create(null);
global.__wxVueOptions = Object.create(null);

function Page(options) {
  var pageOptions = parsePage(options);
  pageOptions.mixins.unshift(polyfill);
  pageOptions.mpOptions.path = global.__wxRoute;
  global.__wxComponents[global.__wxRoute] = pageOptions;
}

function initRelationsHandler(vueComponentOptions) {
  // linked 需要在当前组件 attached 之后再执行
  if (!vueComponentOptions.onServiceAttached) {
    vueComponentOptions.onServiceAttached = [];
  }
  vueComponentOptions.onServiceAttached.push(function onServiceAttached() {
    handleRelations(this, 'linked');
  });
}

function Component(options) {
  var componentOptions = parseComponent(options);
  componentOptions.mixins.unshift(polyfill);
  componentOptions.mpOptions.path = global.__wxRoute;
  initRelationsHandler(componentOptions);
  global.__wxComponents[global.__wxRoute] = componentOptions;
}

function Behavior(options) {
  return options;
}

var nextTick = _vue.default.nextTick;exports.nextTick = nextTick;

var index = uni.__$wx__;var _default =

index;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 21)))

/***/ }),
/* 21 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 22 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 23 */
/*!*********************************************************************************!*\
  !*** /Users/wanggang/Desktop/Nucleic_acid_tools/common/data/idphoto_specs.json ***!
  \*********************************************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"title\\\":\\\"自定义尺寸\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\",\\\"blue_gradual\\\",\\\"gray_gradual\\\"],\\\"spec\\\":\\\"0mmx0mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"12\\\",\\\"size\\\":[0,0]},{\\\"title\\\":\\\"导游证\\\",\\\"color\\\":[\\\"white\\\",\\\"blue_gradual\\\"],\\\"spec\\\":\\\"285x385\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"14\\\",\\\"size\\\":[285,385]},{\\\"title\\\":\\\"小一寸\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\",\\\"blue_grey\\\",\\\"blue_gradual\\\",\\\"gray_gradual\\\"],\\\"spec\\\":\\\"22mmx32mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"2\\\",\\\"size\\\":[260,378]},{\\\"title\\\":\\\"大一寸\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\",\\\"blue_grey\\\",\\\"blue_gradual\\\",\\\"gray_gradual\\\"],\\\"spec\\\":\\\"33mmx48mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"3\\\",\\\"size\\\":[390,567]},{\\\"title\\\":\\\"职业兽医资格证\\\",\\\"color\\\":[\\\"blue\\\",\\\"red\\\",\\\"white\\\"],\\\"spec\\\":\\\"230x334\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"32\\\",\\\"size\\\":[230,334]},{\\\"title\\\":\\\"成人自考\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"384x512\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"33\\\",\\\"size\\\":[384,512]},{\\\"title\\\":\\\"英语四六级考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"240x320，20~30kb\\\",\\\"file_size\\\":[20,30],\\\"id\\\":\\\"46\\\",\\\"size\\\":[240,320]},{\\\"title\\\":\\\"普通话水平测试\\\",\\\"color\\\":[\\\"blue\\\"],\\\"spec\\\":\\\"390x567\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"50\\\",\\\"size\\\":[390,567]},{\\\"title\\\":\\\"大二寸\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\",\\\"blue_grey\\\",\\\"blue_gradual\\\",\\\"gray_gradual\\\"],\\\"spec\\\":\\\"35mmx53mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"6\\\",\\\"size\\\":[413,626]},{\\\"title\\\":\\\"执法证\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"265x351\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"26\\\",\\\"size\\\":[265,351]},{\\\"title\\\":\\\"校园卡\\\",\\\"color\\\":[\\\"blue\\\"],\\\"spec\\\":\\\"240x320\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"27\\\",\\\"size\\\":[240,320]},{\\\"title\\\":\\\"一级建造师证（电子版）\\\",\\\"color\\\":[\\\"blue\\\",\\\"red\\\",\\\"white\\\"],\\\"spec\\\":\\\"472x630\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"30\\\",\\\"size\\\":[472,630]},{\\\"title\\\":\\\"英语四六级考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"blue_gradual\\\"],\\\"spec\\\":\\\"144x192，10~20kb\\\",\\\"file_size\\\":[10,20],\\\"id\\\":\\\"42\\\",\\\"size\\\":[144,192]},{\\\"title\\\":\\\"学籍照片\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"358x441\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"67\\\",\\\"size\\\":[358,441]},{\\\"title\\\":\\\"社保卡（350dpi， 无回执，50~100KB）\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"358x441\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"13\\\",\\\"size\\\":[358,441]},{\\\"title\\\":\\\"医保证\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"358x441\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"24\\\",\\\"size\\\":[358,441]},{\\\"title\\\":\\\"泰国签证\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"35mmx45mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"77\\\",\\\"size\\\":[551,708]},{\\\"title\\\":\\\"国考（二寸）\\\",\\\"color\\\":[\\\"blue\\\",\\\"blue_gradual\\\",\\\"red\\\",\\\"white\\\"],\\\"spec\\\":\\\"35mmx45mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"22\\\",\\\"size\\\":[413,531]},{\\\"title\\\":\\\"美国签证\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"51mmx51mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"7\\\",\\\"size\\\":[602,602]},{\\\"title\\\":\\\"五寸\\\",\\\"color\\\":[\\\"blue\\\",\\\"blue_gradual\\\",\\\"red\\\",\\\"white\\\"],\\\"spec\\\":\\\"89mmx127mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"21\\\",\\\"size\\\":[1051,1500]},{\\\"title\\\":\\\"二级建造师证\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"295x413\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"29\\\",\\\"size\\\":[295,413]},{\\\"title\\\":\\\"巴西、冰岛签证\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"40mmx50mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"86\\\",\\\"size\\\":[472,590]},{\\\"title\\\":\\\"二级建造师证\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"455x661\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"31\\\",\\\"size\\\":[455,661]},{\\\"title\\\":\\\"电子护照人像照片\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"33mmx48mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"37\\\",\\\"size\\\":[389,566]},{\\\"title\\\":\\\"入台证\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"35mmx45mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"81\\\",\\\"size\\\":[551,709]},{\\\"title\\\":\\\"入学照\\\",\\\"color\\\":[\\\"blue\\\",\\\"blue_gradual\\\",\\\"red\\\",\\\"white\\\"],\\\"spec\\\":\\\"25mmx35mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"17\\\",\\\"size\\\":[295,413]},{\\\"title\\\":\\\"教师资格证\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"25mmx35mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"15\\\",\\\"size\\\":[295,413]},{\\\"title\\\":\\\"健康证（一寸）\\\",\\\"color\\\":[\\\"blue\\\",\\\"red\\\",\\\"white\\\"],\\\"spec\\\":\\\"25mmx35mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"25\\\",\\\"size\\\":[295,413]},{\\\"title\\\":\\\"成人自考\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"25x35mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"35\\\",\\\"size\\\":[295,413]},{\\\"title\\\":\\\"学位英语\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"390x567\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"48\\\",\\\"size\\\":[390,567]},{\\\"title\\\":\\\"高考报名\\\",\\\"color\\\":[\\\"blue\\\"],\\\"spec\\\":\\\"420x560\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"70\\\",\\\"size\\\":[420,560]},{\\\"title\\\":\\\"社保卡（350dpi)\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"252x312\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"71\\\",\\\"size\\\":[252,312]},{\\\"title\\\":\\\"四寸\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\",\\\"blue_gradual\\\"],\\\"spec\\\":\\\"76mmx102mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"20\\\",\\\"size\\\":[897,1204]},{\\\"title\\\":\\\"英语AB级考试\\\",\\\"color\\\":[\\\"blue\\\"],\\\"spec\\\":\\\"390x567\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"49\\\",\\\"size\\\":[390,567]},{\\\"title\\\":\\\"入学报名（一寸）\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"25mmx35mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"68\\\",\\\"size\\\":[295,413]},{\\\"title\\\":\\\"大学入学（小二寸）\\\",\\\"color\\\":[\\\"blue\\\"],\\\"spec\\\":\\\"35mmx45mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"69\\\",\\\"size\\\":[413,531]},{\\\"title\\\":\\\"一寸\\\",\\\"color\\\":[\\\"blue\\\",\\\"blue_gradual\\\",\\\"red\\\",\\\"white\\\"],\\\"spec\\\":\\\"25mmx35mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"1\\\",\\\"size\\\":[295,413]},{\\\"title\\\":\\\"驾驶证、驾照（无回执，小一寸）\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"22mmx32mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"16\\\",\\\"size\\\":[260,378]},{\\\"title\\\":\\\"二寸\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\",\\\"blue_gradual\\\"],\\\"spec\\\":\\\"35mmx49mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"4\\\",\\\"size\\\":[413,579]},{\\\"title\\\":\\\"阿根廷签证\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"40mmx40mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"85\\\",\\\"size\\\":[472,472]},{\\\"title\\\":\\\"肯尼亚签证\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"50mmx50mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"87\\\",\\\"size\\\":[590,590]},{\\\"title\\\":\\\"英语四六级考试\\\",\\\"color\\\":[\\\"blue\\\"],\\\"spec\\\":\\\"144x172，0~40kb\\\",\\\"file_size\\\":[0,40],\\\"id\\\":\\\"40\\\",\\\"size\\\":[144,172]},{\\\"title\\\":\\\"社保卡（350dpi， 无回执，10-20KB）\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"358x441\\\",\\\"file_size\\\":[10,20],\\\"id\\\":\\\"72\\\",\\\"size\\\":[358,441]},{\\\"title\\\":\\\"社保卡（350dpi， 无回执，25~40KB）\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"358x441\\\",\\\"file_size\\\":[25,40],\\\"id\\\":\\\"73\\\",\\\"size\\\":[358,441]},{\\\"title\\\":\\\"马来西亚签证\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"35mmx45mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"82\\\",\\\"size\\\":[551,709]},{\\\"title\\\":\\\"越南签证\\\",\\\"color\\\":[\\\"blue\\\",\\\"red\\\",\\\"white\\\"],\\\"spec\\\":\\\"40x60mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"9\\\",\\\"size\\\":[472,708]},{\\\"title\\\":\\\"入台证（小二寸）\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"35mmx45mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"28\\\",\\\"size\\\":[413,531]},{\\\"title\\\":\\\"执业医师资格报名\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"354x472\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"62\\\",\\\"size\\\":[354,472]},{\\\"title\\\":\\\"日本签证\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"45mmx45mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"8\\\",\\\"size\\\":[531,531]},{\\\"title\\\":\\\"居住证\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"26mmx32mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"11\\\",\\\"size\\\":[307,377]},{\\\"title\\\":\\\"三寸\\\",\\\"color\\\":[\\\"blue\\\",\\\"blue_gradual\\\",\\\"red\\\",\\\"white\\\"],\\\"spec\\\":\\\"54mmx84mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"19\\\",\\\"size\\\":[637,992]},{\\\"title\\\":\\\"简历照片（一寸）\\\",\\\"color\\\":[\\\"blue\\\",\\\"red\\\",\\\"white\\\"],\\\"spec\\\":\\\"25mmx35mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"18\\\",\\\"size\\\":[295,413]},{\\\"title\\\":\\\"国家司法考试\\\",\\\"color\\\":[\\\"blue\\\"],\\\"spec\\\":\\\"413x626\\\",\\\"file_size\\\":[40,100],\\\"id\\\":\\\"23\\\",\\\"size\\\":[413,626]},{\\\"title\\\":\\\"会计从业资格证\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"25mmx35mm\\\",\\\"file_size\\\":[10,200],\\\"id\\\":\\\"39\\\",\\\"size\\\":[295,413]},{\\\"title\\\":\\\"港澳通行证\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"33mmx48mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"75\\\",\\\"size\\\":[389,566]},{\\\"title\\\":\\\"印度签证\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"51mmx51mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"78\\\",\\\"size\\\":[602,602]},{\\\"title\\\":\\\"新西兰签证\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"76mmx102mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"83\\\",\\\"size\\\":[897,1204]},{\\\"title\\\":\\\"身份证（无回执）\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"26mmx32mm\\\",\\\"file_size\\\":[14,28],\\\"id\\\":\\\"10\\\",\\\"size\\\":[358,441]},{\\\"title\\\":\\\"世界通用签证\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"35mmx45mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"74\\\",\\\"size\\\":[551,709]},{\\\"title\\\":\\\"签证采集\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"30mmx40mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"80\\\",\\\"size\\\":[354,472]},{\\\"title\\\":\\\"韩国签证\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"35mmx45mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"76\\\",\\\"size\\\":[551,709]},{\\\"title\\\":\\\"公务员考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"red\\\",\\\"white\\\"],\\\"spec\\\":\\\"35mmx45mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"36\\\",\\\"size\\\":[413,531]},{\\\"title\\\":\\\"小二寸\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\",\\\"blue_gradual\\\"],\\\"spec\\\":\\\"35mmx45mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"5\\\",\\\"size\\\":[413,531]},{\\\"title\\\":\\\"执业药师资格考试（一寸）\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"295x413\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"60\\\",\\\"size\\\":[295,413]},{\\\"title\\\":\\\"执业药师资格考试（二寸）\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"413x579\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"61\\\",\\\"size\\\":[413,579]},{\\\"title\\\":\\\"以色列签证\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"51mmx51mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"79\\\",\\\"size\\\":[602,602]},{\\\"title\\\":\\\"意大利签证\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"35mmx40mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"84\\\",\\\"size\\\":[413,472]},{\\\"title\\\":\\\"一级建造师证（电子版）\\\",\\\"color\\\":[\\\"blue\\\",\\\"red\\\",\\\"white\\\"],\\\"spec\\\":\\\"472x630\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"93\\\",\\\"size\\\":[472,630]},{\\\"title\\\":\\\"海外申请护照在线预约照片\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"33mmx48mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"38\\\",\\\"size\\\":[389,566]},{\\\"title\\\":\\\"护士执业资格考试(20~45kb)\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"160x210，20~45kb\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"94\\\",\\\"size\\\":[210,276]},{\\\"title\\\":\\\"公务员考试报名\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"340x450(20k以内)\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"95\\\",\\\"size\\\":[340,450]},{\\\"title\\\":\\\"入金证\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"35mmx45mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"96\\\",\\\"size\\\":[413,531]},{\\\"title\\\":\\\"社保卡（350dpi， 无回执，大于100KB）\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"358x441\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"97\\\",\\\"size\\\":[520,640]},{\\\"title\\\":\\\"成人自考（本科）\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"480x720\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"98\\\",\\\"size\\\":[480,720]},{\\\"title\\\":\\\"自考学位外语考试（390x567）\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"390x567\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"99\\\",\\\"size\\\":[390,567]},{\\\"title\\\":\\\"英语四级考试\\\",\\\"color\\\":[\\\"blue\\\"],\\\"spec\\\":\\\"480x640，100KB\\\",\\\"file_size\\\":[30,100],\\\"id\\\":\\\"100\\\",\\\"size\\\":[480,640]},{\\\"title\\\":\\\"二级建造师（天津）\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"160x200，20~40kb\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"101\\\",\\\"size\\\":[160,200]},{\\\"title\\\":\\\" 二级建造师（湖南）\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"130x170\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"102\\\",\\\"size\\\":[295,413]},{\\\"title\\\":\\\"社保证（350dpi， 无回执，30~60kb）\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"358x441\\\",\\\"file_size\\\":[30,60],\\\"id\\\":\\\"103\\\",\\\"size\\\":[358,441]},{\\\"title\\\":\\\"英语AB级考试(144X192)\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"144x192\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"104\\\",\\\"size\\\":[144,192]},{\\\"title\\\":\\\"英语三级考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"144x192\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"105\\\",\\\"size\\\":[144,192]},{\\\"title\\\":\\\"公务员考试(130X170)\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"130x170\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"106\\\",\\\"size\\\":[130,170]},{\\\"title\\\":\\\"二级建造师（西藏）\\\",\\\"color\\\":[\\\"blue\\\"],\\\"spec\\\":\\\"455x661\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"107\\\",\\\"size\\\":[455,661]},{\\\"title\\\":\\\"国家公务员考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"25x35mm\\\",\\\"file_size\\\":[10,20],\\\"id\\\":\\\"108\\\",\\\"size\\\":[295,413]},{\\\"title\\\":\\\"保险职业认证\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"210x270（10-25K）\\\",\\\"file_size\\\":[10,25],\\\"id\\\":\\\"109\\\",\\\"size\\\":[210,270]},{\\\"title\\\":\\\"注册会计师考试（178x220）\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"15x19mm\\\",\\\"file_size\\\":[3,19],\\\"id\\\":\\\"110\\\",\\\"size\\\":[178,220]},{\\\"title\\\":\\\"保险职业证\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"210x370（10-25K）\\\",\\\"file_size\\\":[10,25],\\\"id\\\":\\\"111\\\",\\\"size\\\":[210,370]},{\\\"title\\\":\\\"全国计算机等级考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"33x48mm\\\",\\\"file_size\\\":[10,200],\\\"id\\\":\\\"53\\\",\\\"size\\\":[390,567]},{\\\"title\\\":\\\"事业单位招聘\\\",\\\"color\\\":[\\\"blue\\\"],\\\"spec\\\":\\\"90x120\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"112\\\",\\\"size\\\":[90,120]},{\\\"title\\\":\\\"英语三级\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"33mmx48mm\\\",\\\"file_size\\\":[5,30],\\\"id\\\":\\\"113\\\",\\\"size\\\":[390,567]},{\\\"title\\\":\\\"半身职业照\\\",\\\"color\\\":[\\\"blue\\\",\\\"blue_gradual\\\",\\\"red\\\",\\\"red_gradual\\\",\\\"white\\\",\\\"gray_gradual\\\"],\\\"spec\\\":\\\"850x1200\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"114\\\",\\\"size\\\":[850,1200]},{\\\"title\\\":\\\"成人自考\\\",\\\"color\\\":[\\\"blue\\\"],\\\"spec\\\":\\\"480x640\\\",\\\"file_size\\\":[20,40],\\\"id\\\":\\\"115\\\",\\\"size\\\":[480,640]},{\\\"title\\\":\\\"高清证件照\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\",\\\"blue_gradual\\\"],\\\"spec\\\":\\\"1000x1400\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"116\\\",\\\"size\\\":[1000,1400]},{\\\"title\\\":\\\"成人高考报名\\\",\\\"color\\\":[\\\"blue\\\"],\\\"spec\\\":\\\"295x413\\\",\\\"file_size\\\":[10,20],\\\"id\\\":\\\"117\\\",\\\"size\\\":[295,413]},{\\\"title\\\":\\\"全国计算机等级考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"12x16mm\\\",\\\"file_size\\\":[50,100],\\\"id\\\":\\\"119\\\",\\\"size\\\":[144,192]},{\\\"title\\\":\\\"车载终端照片\\\",\\\"color\\\":[\\\"red\\\"],\\\"spec\\\":\\\"96x128\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"120\\\",\\\"size\\\":[96,128]},{\\\"title\\\":\\\"河北社保卡（300dpi， 无回执，小于100KB）\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"358x441, 300dpi\\\",\\\"file_size\\\":[0,100],\\\"id\\\":\\\"121\\\",\\\"size\\\":[358,441]},{\\\"title\\\":\\\"教师资格证\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"150x200像素，不大于200K\\\",\\\"file_size\\\":[0,200],\\\"id\\\":\\\"122\\\",\\\"size\\\":[150,200]},{\\\"title\\\":\\\"卫生专业技术资格考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"35mmx45mm\\\",\\\"file_size\\\":[45,200],\\\"id\\\":\\\"123\\\",\\\"size\\\":[413,531]},{\\\"title\\\":\\\"小二寸\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\",\\\"blue_gradual\\\"],\\\"spec\\\":\\\"35mmx45mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"125\\\",\\\"size\\\":[413,531]},{\\\"title\\\":\\\"贵州公务员考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"35x49mm\\\",\\\"file_size\\\":[50,100],\\\"id\\\":\\\"127\\\",\\\"size\\\":[413,579]},{\\\"title\\\":\\\"海南公务员\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"14x18mm\\\",\\\"file_size\\\":[0,30],\\\"id\\\":\\\"128\\\",\\\"size\\\":[168,218]},{\\\"title\\\":\\\"湖北公务员考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"25x35mm\\\",\\\"file_size\\\":[20,30],\\\"id\\\":\\\"129\\\",\\\"size\\\":[295,413]},{\\\"title\\\":\\\"江西公务员考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"35x45mm\\\",\\\"file_size\\\":[15,20],\\\"id\\\":\\\"130\\\",\\\"size\\\":[413,531]},{\\\"title\\\":\\\"山东公务员考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"35x45mm\\\",\\\"file_size\\\":[10,50],\\\"id\\\":\\\"132\\\",\\\"size\\\":[413,531]},{\\\"title\\\":\\\"成都公务员\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"9x11mm\\\",\\\"file_size\\\":[20,160],\\\"id\\\":\\\"133\\\",\\\"size\\\":[102,126]},{\\\"title\\\":\\\"深圳公务员\\\",\\\"color\\\":[\\\"blue\\\",\\\"red\\\"],\\\"spec\\\":\\\"13x18mm\\\",\\\"file_size\\\":[0,1024],\\\"id\\\":\\\"134\\\",\\\"size\\\":[100,138]},{\\\"title\\\":\\\"国考（100x140）\\\",\\\"color\\\":[\\\"blue\\\"],\\\"spec\\\":\\\"8x12mm\\\",\\\"file_size\\\":[0,20],\\\"id\\\":\\\"135\\\",\\\"size\\\":[100,140]},{\\\"title\\\":\\\"国考（99x128）\\\",\\\"color\\\":[\\\"blue\\\"],\\\"spec\\\":\\\"8x11mm\\\",\\\"file_size\\\":[0,20],\\\"id\\\":\\\"136\\\",\\\"size\\\":[99,128]},{\\\"title\\\":\\\"甘肃省（国考）\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"18x25mm\\\",\\\"file_size\\\":[30,1024],\\\"id\\\":\\\"137\\\",\\\"size\\\":[215,300]},{\\\"title\\\":\\\"江西省（国考）\\\",\\\"color\\\":[\\\"blue\\\"],\\\"spec\\\":\\\"8x11mm\\\",\\\"file_size\\\":[0,20],\\\"id\\\":\\\"138\\\",\\\"size\\\":[99,128]},{\\\"title\\\":\\\"宁夏回族自治区（国考）\\\",\\\"color\\\":[\\\"blue\\\"],\\\"spec\\\":\\\"18x25mm\\\",\\\"file_size\\\":[30,1024],\\\"id\\\":\\\"139\\\",\\\"size\\\":[215,300]},{\\\"title\\\":\\\"青海省（国考）\\\",\\\"color\\\":[\\\"blue\\\"],\\\"spec\\\":\\\"10x15mm\\\",\\\"file_size\\\":[0,20],\\\"id\\\":\\\"140\\\",\\\"size\\\":[120,180]},{\\\"title\\\":\\\"山东省（国考）\\\",\\\"color\\\":[\\\"blue\\\"],\\\"spec\\\":\\\"10x13mm\\\",\\\"file_size\\\":[0,20],\\\"id\\\":\\\"141\\\",\\\"size\\\":[120,160]},{\\\"title\\\":\\\"上海市（国考）\\\",\\\"color\\\":[\\\"blue\\\"],\\\"spec\\\":\\\"18x25mm\\\",\\\"file_size\\\":[30,1024],\\\"id\\\":\\\"142\\\",\\\"size\\\":[215,300]},{\\\"title\\\":\\\"浙江省（国考）\\\",\\\"color\\\":[\\\"blue\\\"],\\\"spec\\\":\\\"8x12mm\\\",\\\"file_size\\\":[0,30],\\\"id\\\":\\\"143\\\",\\\"size\\\":[100,140]},{\\\"title\\\":\\\"教师资格证（180x240）\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"15x20mm\\\",\\\"file_size\\\":[0,20],\\\"id\\\":\\\"144\\\",\\\"size\\\":[180,240]},{\\\"title\\\":\\\"中国教师资格证\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"10x13mm\\\",\\\"file_size\\\":[0,15],\\\"id\\\":\\\"145\\\",\\\"size\\\":[114,156]},{\\\"title\\\":\\\"福建教师资格证\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"25x34mm\\\",\\\"file_size\\\":[0,200],\\\"id\\\":\\\"146\\\",\\\"size\\\":[300,400]},{\\\"title\\\":\\\"教师资格证（150x200）\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"13x17mm\\\",\\\"file_size\\\":[0,200],\\\"id\\\":\\\"147\\\",\\\"size\\\":[150,200]},{\\\"title\\\":\\\"教师资格证（384x512）\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"32x43mm\\\",\\\"file_size\\\":[0,100],\\\"id\\\":\\\"148\\\",\\\"size\\\":[384,512]},{\\\"title\\\":\\\"教师资格证（360x480）\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"30x41mm\\\",\\\"file_size\\\":[0,200],\\\"id\\\":\\\"149\\\",\\\"size\\\":[360,480]},{\\\"title\\\":\\\"护士执业资格考试（120x160）\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"10x13mm\\\",\\\"file_size\\\":[20,45],\\\"id\\\":\\\"150\\\",\\\"size\\\":[120,160]},{\\\"title\\\":\\\"工商银行网申（100x140）\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"8x12mm\\\",\\\"file_size\\\":[0,30],\\\"id\\\":\\\"151\\\",\\\"size\\\":[100,140]},{\\\"title\\\":\\\"建设银行网申\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"10x13mm\\\",\\\"file_size\\\":[0,20],\\\"id\\\":\\\"152\\\",\\\"size\\\":[120,160]},{\\\"title\\\":\\\"中国人民银行网申\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"17x22mm\\\",\\\"file_size\\\":[20,100],\\\"id\\\":\\\"153\\\",\\\"size\\\":[200,260]},{\\\"title\\\":\\\"工商银行网申（240x370）\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"20x31mm\\\",\\\"file_size\\\":[0,80],\\\"id\\\":\\\"154\\\",\\\"size\\\":[240,370]},{\\\"title\\\":\\\"工商银行网申生活照\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"20x27mm\\\",\\\"file_size\\\":[0,80],\\\"id\\\":\\\"155\\\",\\\"size\\\":[240,320]},{\\\"title\\\":\\\"中国银行\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"26x35mm\\\",\\\"file_size\\\":[0,200],\\\"id\\\":\\\"156\\\",\\\"size\\\":[324,417]},{\\\"title\\\":\\\"中国交通银行\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"26x35mm\\\",\\\"file_size\\\":[0,100],\\\"id\\\":\\\"157\\\",\\\"size\\\":[324,417]},{\\\"title\\\":\\\"中国储蓄银行\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"6x8mm\\\",\\\"file_size\\\":[0,500],\\\"id\\\":\\\"158\\\",\\\"size\\\":[70,100]},{\\\"title\\\":\\\"金融服务师\\\",\\\"color\\\":[\\\"blue\\\"],\\\"spec\\\":\\\"8x12mm\\\",\\\"file_size\\\":[2,8],\\\"id\\\":\\\"159\\\",\\\"size\\\":[100,140]},{\\\"title\\\":\\\"事业单位\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"10x13mm\\\",\\\"file_size\\\":[0,18],\\\"id\\\":\\\"160\\\",\\\"size\\\":[120,160]},{\\\"title\\\":\\\"宁德事业单位\\\",\\\"color\\\":[\\\"blue\\\",\\\"blue_gradual\\\"],\\\"spec\\\":\\\"22x29mm\\\",\\\"file_size\\\":[0,150],\\\"id\\\":\\\"161\\\",\\\"size\\\":[300,400]},{\\\"title\\\":\\\"石家庄铁路职专毕业照\\\",\\\"color\\\":[\\\"blue\\\"],\\\"spec\\\":\\\"480x640，10-40KB\\\",\\\"file_size\\\":[20,500],\\\"id\\\":\\\"162\\\",\\\"size\\\":[480,640]},{\\\"title\\\":\\\"上海事业单位\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"120x168px\\\",\\\"file_size\\\":[0,50],\\\"id\\\":\\\"163\\\",\\\"size\\\":[120,168]},{\\\"title\\\":\\\"BIM技能等级考试\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"250x350，20-40KB\\\",\\\"file_size\\\":[20,40],\\\"id\\\":\\\"164\\\",\\\"size\\\":[250,350]},{\\\"title\\\":\\\"证券考试报名\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"215x300px\\\",\\\"file_size\\\":[31,500],\\\"id\\\":\\\"165\\\",\\\"size\\\":[215,300]},{\\\"title\\\":\\\"英语四六级考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"33x48mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"166\\\",\\\"size\\\":[390,567]},{\\\"title\\\":\\\"商务英语考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"25x34mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"167\\\",\\\"size\\\":[300,400]},{\\\"title\\\":\\\"全国计算机等级考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"20x27mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"168\\\",\\\"size\\\":[240,320]},{\\\"title\\\":\\\"山西省全国计算机等级考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"25x35mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"169\\\",\\\"size\\\":[295,413]},{\\\"title\\\":\\\"河南计算机二级考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"33x48mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"170\\\",\\\"size\\\":[390,567]},{\\\"title\\\":\\\"成人自考\\\",\\\"color\\\":[\\\"blue\\\"],\\\"spec\\\":\\\"30x41mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"171\\\",\\\"size\\\":[360,480]},{\\\"title\\\":\\\"上海中考网报名\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\",\\\"blue_gradual\\\"],\\\"spec\\\":\\\"14x20mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"172\\\",\\\"size\\\":[168,240]},{\\\"title\\\":\\\"香港学生国内报名\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\",\\\"blue_gradual\\\"],\\\"spec\\\":\\\"14x20mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"173\\\",\\\"size\\\":[168,240]},{\\\"title\\\":\\\"武汉大学研究生考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"13x17mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"174\\\",\\\"size\\\":[150,200]},{\\\"title\\\":\\\"中南财经政法大学入学考试报名\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"15x20mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"175\\\",\\\"size\\\":[180,240]},{\\\"title\\\":\\\"厦门大学毕业证\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"39x54mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"176\\\",\\\"size\\\":[460,640]},{\\\"title\\\":\\\"在职研究生考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"red\\\"],\\\"spec\\\":\\\"33x48mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"177\\\",\\\"size\\\":[390,567]},{\\\"title\\\":\\\"江苏自考\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"blue_gradual\\\"],\\\"spec\\\":\\\"30x41mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"178\\\",\\\"size\\\":[360,480]},{\\\"title\\\":\\\"驾驶证、驾照（无回执，一寸）\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"25x35mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"179\\\",\\\"size\\\":[295,413]},{\\\"title\\\":\\\"电子导游证\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"35x53mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"180\\\",\\\"size\\\":[413,626]},{\\\"title\\\":\\\"会计从业资格证\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"10x13mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"181\\\",\\\"size\\\":[114,156]},{\\\"title\\\":\\\"教师招聘报名\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"9x12mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"182\\\",\\\"size\\\":[110,140]},{\\\"title\\\":\\\"特殊招聘要求\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"20x27mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"183\\\",\\\"size\\\":[240,320]},{\\\"title\\\":\\\"育婴师考试报名（小二寸）\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"35x49mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"184\\\",\\\"size\\\":[413,579]},{\\\"title\\\":\\\"一级注册消防工程师考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"25x35mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"185\\\",\\\"size\\\":[295,413]},{\\\"title\\\":\\\"一级建造师\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"25x35mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"186\\\",\\\"size\\\":[295,413]},{\\\"title\\\":\\\"职业医师注册\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"35x49mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"187\\\",\\\"size\\\":[413,578]},{\\\"title\\\":\\\"初级护师\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"35x45mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"188\\\",\\\"size\\\":[413,531]},{\\\"title\\\":\\\"国家医学考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"25x35mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"189\\\",\\\"size\\\":[295,413]},{\\\"title\\\":\\\"职业医师资格证\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"25x35mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"190\\\",\\\"size\\\":[295,413]},{\\\"title\\\":\\\"护士职业资格考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"14x18mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"191\\\",\\\"size\\\":[160,210]},{\\\"title\\\":\\\"国家公务员考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"35x45mm\\\",\\\"file_size\\\":[15,20],\\\"id\\\":\\\"192\\\",\\\"size\\\":[413,531]},{\\\"title\\\":\\\"国家公务员考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"35x49mm\\\",\\\"file_size\\\":[15,20],\\\"id\\\":\\\"193\\\",\\\"size\\\":[413,579]},{\\\"title\\\":\\\"广州公务员考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"35x49mm\\\",\\\"file_size\\\":[20,30],\\\"id\\\":\\\"194\\\",\\\"size\\\":[413,579]},{\\\"title\\\":\\\"重庆公务员考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"25x35mm\\\",\\\"file_size\\\":[15,20],\\\"id\\\":\\\"195\\\",\\\"size\\\":[295,413]},{\\\"title\\\":\\\"黑龙江公务员考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"35x45mm\\\",\\\"file_size\\\":[5,50],\\\"id\\\":\\\"196\\\",\\\"size\\\":[413,531]},{\\\"title\\\":\\\"云南公务员考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"35x45mm\\\",\\\"file_size\\\":[30,50],\\\"id\\\":\\\"197\\\",\\\"size\\\":[413,531]},{\\\"title\\\":\\\"四川公务员考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"35x45mm\\\",\\\"file_size\\\":[10,20],\\\"id\\\":\\\"198\\\",\\\"size\\\":[413,531]},{\\\"title\\\":\\\"广西公务员考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"25x35mm\\\",\\\"file_size\\\":[10,20],\\\"id\\\":\\\"199\\\",\\\"size\\\":[295,413]},{\\\"title\\\":\\\"山西公务员考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"25x35mm\\\",\\\"file_size\\\":[30,50],\\\"id\\\":\\\"200\\\",\\\"size\\\":[295,413]},{\\\"title\\\":\\\"河北公务员考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"35x45mm\\\",\\\"file_size\\\":[30,50],\\\"id\\\":\\\"201\\\",\\\"size\\\":[413,531]},{\\\"title\\\":\\\"上海公务员考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"13x17mm\\\",\\\"file_size\\\":[20,200],\\\"id\\\":\\\"202\\\",\\\"size\\\":[150,200]},{\\\"title\\\":\\\"宁夏公务员考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"35x45mm\\\",\\\"file_size\\\":[30,50],\\\"id\\\":\\\"203\\\",\\\"size\\\":[413,531]},{\\\"title\\\":\\\"陕西公务员考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"35x45mm\\\",\\\"file_size\\\":[30,50],\\\"id\\\":\\\"204\\\",\\\"size\\\":[413,531]},{\\\"title\\\":\\\"河南公务员考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"25x35mm\\\",\\\"file_size\\\":[30,50],\\\"id\\\":\\\"205\\\",\\\"size\\\":[295,413]},{\\\"title\\\":\\\"江苏公务员考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"34x45mm\\\",\\\"file_size\\\":[15,18],\\\"id\\\":\\\"206\\\",\\\"size\\\":[402,513]},{\\\"title\\\":\\\"安徽公务员考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"35x45mm\\\",\\\"file_size\\\":[15,20],\\\"id\\\":\\\"207\\\",\\\"size\\\":[413,531]},{\\\"title\\\":\\\"湖南公务员考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"35x45mm\\\",\\\"file_size\\\":[15,20],\\\"id\\\":\\\"208\\\",\\\"size\\\":[413,531]},{\\\"title\\\":\\\"北京公务员考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"35x53mm\\\",\\\"file_size\\\":[35,100],\\\"id\\\":\\\"209\\\",\\\"size\\\":[413,626]},{\\\"title\\\":\\\"成都公务员考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"25x35mm\\\",\\\"file_size\\\":[20,45],\\\"id\\\":\\\"210\\\",\\\"size\\\":[295,413]},{\\\"title\\\":\\\"甘肃公务员考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"35x49mm\\\",\\\"file_size\\\":[30,50],\\\"id\\\":\\\"211\\\",\\\"size\\\":[413,579]},{\\\"title\\\":\\\"青海公务员考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"35x45mm\\\",\\\"file_size\\\":[20,30],\\\"id\\\":\\\"212\\\",\\\"size\\\":[413,531]},{\\\"title\\\":\\\"新疆公务员考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"25x35mm\\\",\\\"file_size\\\":[10,20],\\\"id\\\":\\\"213\\\",\\\"size\\\":[295,413]},{\\\"title\\\":\\\"西藏公务员考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"35x45mm\\\",\\\"file_size\\\":[10,200],\\\"id\\\":\\\"214\\\",\\\"size\\\":[413,531]},{\\\"title\\\":\\\"三支一扶山东\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\"],\\\"spec\\\":\\\"25x35mm\\\",\\\"file_size\\\":[30,200],\\\"id\\\":\\\"215\\\",\\\"size\\\":[295,413]},{\\\"title\\\":\\\"山西省省直事业单位考试报名\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"25x35mm\\\",\\\"file_size\\\":[50,100],\\\"id\\\":\\\"216\\\",\\\"size\\\":[295,413]},{\\\"title\\\":\\\"全国计算机等级考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"white\\\",\\\"red\\\"],\\\"spec\\\":\\\"35x49mm\\\",\\\"file_size\\\":[50,200],\\\"id\\\":\\\"217\\\",\\\"size\\\":[413,579]},{\\\"title\\\":\\\"全国计算机等级考试\\\",\\\"color\\\":[\\\"blue\\\"],\\\"spec\\\":\\\"13x18mm\\\",\\\"file_size\\\":[20,100],\\\"id\\\":\\\"218\\\",\\\"size\\\":[150,210]},{\\\"title\\\":\\\"青少年软件编程等级考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"red\\\"],\\\"spec\\\":\\\"41x62mm\\\",\\\"file_size\\\":[50,1024],\\\"id\\\":\\\"219\\\",\\\"size\\\":[482,730]},{\\\"title\\\":\\\"青少年机器人技术等级考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"red\\\"],\\\"spec\\\":\\\"41x62mm\\\",\\\"file_size\\\":[50,1024],\\\"id\\\":\\\"220\\\",\\\"size\\\":[480,730]},{\\\"title\\\":\\\"青少年电子信息等级考试\\\",\\\"color\\\":[\\\"blue\\\",\\\"red\\\"],\\\"spec\\\":\\\"41x62mm\\\",\\\"file_size\\\":[50,1024],\\\"id\\\":\\\"221\\\",\\\"size\\\":[482,730]},{\\\"title\\\":\\\"计算机应用能力考试报名\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"25x35mm\\\",\\\"file_size\\\":[50,200],\\\"id\\\":\\\"222\\\",\\\"size\\\":[295,413]},{\\\"title\\\":\\\"退役军人优待证\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"30x37mm\\\",\\\"file_size\\\":[20,50],\\\"id\\\":\\\"223\\\",\\\"size\\\":[352,440]},{\\\"title\\\":\\\"注册会计师考试（102x126）\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"9x11mm\\\",\\\"file_size\\\":[2,20],\\\"id\\\":\\\"224\\\",\\\"size\\\":[102,126]},{\\\"title\\\":\\\"注册会计师考试（一寸）\\\",\\\"color\\\":[\\\"white\\\"],\\\"spec\\\":\\\"25x35mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"225\\\",\\\"size\\\":[295,413]},{\\\"title\\\":\\\"大学生图像信息采集\\\",\\\"color\\\":[\\\"blue\\\"],\\\"spec\\\":\\\"41x54mm\\\",\\\"file_size\\\":[0,0],\\\"id\\\":\\\"226\\\",\\\"size\\\":[480,640]}]\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyMy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!********************************************************************************************!*\
  !*** /Users/wanggang/Desktop/Nucleic_acid_tools/pages/watermark/watermark.vue?mpType=page ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _watermark_vue_vue_type_template_id_9d106b40_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./watermark.vue?vue&type=template&id=9d106b40&mpType=page */ 25);\n/* harmony import */ var _watermark_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./watermark.vue?vue&type=script&lang=js&mpType=page */ 27);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _watermark_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _watermark_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _watermark_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _watermark_vue_vue_type_template_id_9d106b40_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _watermark_vue_vue_type_template_id_9d106b40_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _watermark_vue_vue_type_template_id_9d106b40_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/watermark/watermark.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUk7QUFDakk7QUFDd0U7QUFDTDs7O0FBR25FO0FBQzZNO0FBQzdNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLDBGQUFNO0FBQ1IsRUFBRSwrRkFBTTtBQUNSLEVBQUUsd0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3dhdGVybWFyay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWQxMDZiNDAmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3dhdGVybWFyay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vd2F0ZXJtYXJrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL3dhdGVybWFyay93YXRlcm1hcmsudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!**************************************************************************************************************************!*\
  !*** /Users/wanggang/Desktop/Nucleic_acid_tools/pages/watermark/watermark.vue?vue&type=template&id=9d106b40&mpType=page ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermark_vue_vue_type_template_id_9d106b40_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./watermark.vue?vue&type=template&id=9d106b40&mpType=page */ 26);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermark_vue_vue_type_template_id_9d106b40_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermark_vue_vue_type_template_id_9d106b40_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermark_vue_vue_type_template_id_9d106b40_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermark_vue_vue_type_template_id_9d106b40_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 26 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wanggang/Desktop/Nucleic_acid_tools/pages/watermark/watermark.vue?vue&type=template&id=9d106b40&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c("view", [
      _c("button", { attrs: { _i: 2 }, on: { click: _vm.takePhoto } })
    ]),
    _c("view", [
      _c("view", [
        _c("canvas", {
          style: _vm._$s(5, "s", { width: _vm.w, height: _vm.h }),
          attrs: { _i: 5 }
        })
      ])
    ]),
    _c("view", [
      _c("image", {
        attrs: { src: _vm._$s(7, "a-src", _vm.src), _i: 7 },
        on: { click: _vm.preview }
      })
    ])
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 27 */
/*!********************************************************************************************************************!*\
  !*** /Users/wanggang/Desktop/Nucleic_acid_tools/pages/watermark/watermark.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermark_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./watermark.vue?vue&type=script&lang=js&mpType=page */ 28);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermark_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermark_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermark_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermark_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermark_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXd0QixDQUFnQiwwdEJBQUcsRUFBQyIsImZpbGUiOiIyNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3dhdGVybWFyay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vd2F0ZXJtYXJrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///27\n");

/***/ }),
/* 28 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wanggang/Desktop/Nucleic_acid_tools/pages/watermark/watermark.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      src: '',\n      w: '',\n      h: '' };\n\n  },\n  methods: {\n    preview: function preview() {\n      uni.previewImage({\n        urls: [this.src],\n        current: 0 });\n\n    },\n    takePhoto: function takePhoto() {\n      var that = this;\n      uni.chooseImage({\n        count: 1,\n        success: function success(res) {\n          uni.getImageInfo({\n            src: res.tempFilePaths[0],\n            success: function success(ress) {\n              that.w = ress.width / 3 + 'px';\n              that.h = ress.height / 3 + 'px';\n\n              //担心尺寸重置后还没生效，故做延迟\n              setTimeout(function () {\n\n                var ctx = uni.createCanvasContext('firstCanvas'); /** 创建画布 */\n                ctx.setFillStyle('#00b59d');\n                // \"blue\",\n                // \"white\", \n                // \"red\", \n                // \"blue_gradual\", \n                // \"gray_gradual\"\n                // blue:#438EDB,red:#FF0000,white:#FFFFFF\n                // ctx.setFillStyle('#438EDB')\n                // ctx.fillRect(0, 0, ress.width, ress.height)\n                // ctx.drawImage(res.tempFilePaths[0], 0, 0, ress.width, ress.height)\n                //将图片src放到cancas内，宽高为图片大小\n                ctx.drawImage(res.tempFilePaths[0], 0, 0, ress.width / 3, ress.height / 3);\n                ctx.setFontSize(18);\n                // ctx.setFillStyle('#00b59d')\n                // ctx.rotate(30 * Math.PI / 180);\n                // let textToWidth = ress.width / 3 * 0.5; \n                // let textToHeight = ress.height / 3 * 0.3;\n                // ctx.fillText('我是水印', textToWidth, textToHeight) \n\n                // 设置文字水印\n                ctx.setFillStyle('white');\n                ctx.setFontSize(20);\n                ctx.fillText('打码日期:', 10, 140);\n\n                //再来加个时间水印\n                var date = new Date();\n                //这里用了uview的js如果不适配需要自行修改\n                ctx.setFontSize(20);\n                ctx.fillText(date, 10, 180);\n\n                /** 除了上面的文字水印，这里也可以加入图片水印 */\n                // ctx.drawImage('/static/guanxiaotong_head的副本.png', 0, 0, textToWidth*0.5, textToHeight*0.5)\n                ctx.draw(true, function () {\n                  setTimeout(function () {\n                    uni.canvasToTempFilePath({\n                      canvasId: 'firstCanvas',\n                      success: function success(res1) {\n                        that.src = res1.tempFilePath;\n                        that.savePhoto(res1.tempFilePath);\n                      } });\n\n                  }, 1000);\n                });\n              }, 500);\n\n            } });\n\n        } });\n\n    },\n    //保存图片到相册，方便核查\n    savePhoto: function savePhoto(path) {\n      //保存到相册\n      uni.saveImageToPhotosAlbum({\n        filePath: path,\n        success: function success() {\n          uni.showToast({\n            title: '已保存至相册',\n            duration: 2000 });\n\n        } });\n\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvd2F0ZXJtYXJrL3dhdGVybWFyay52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0EsYUFEQTtBQUVBLFdBRkE7QUFHQSxXQUhBOztBQUtBLEdBUEE7QUFRQTtBQUNBLFdBREEscUJBQ0E7QUFDQTtBQUNBLHdCQURBO0FBRUEsa0JBRkE7O0FBSUEsS0FOQTtBQU9BLGFBUEEsdUJBT0E7QUFDQTtBQUNBO0FBQ0EsZ0JBREE7QUFFQSxlQUZBLG1CQUVBLEdBRkEsRUFFQTtBQUNBO0FBQ0EscUNBREE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBTEE7O0FBT0EsbUJBUkEsRUFRQSxJQVJBO0FBU0EsaUJBVkE7QUFXQSxlQTlDQSxFQThDQSxHQTlDQTs7QUFnREEsYUF2REE7O0FBeURBLFNBNURBOztBQThEQSxLQXZFQTtBQXdFQTtBQUNBLGFBekVBLHFCQXlFQSxJQXpFQSxFQXlFQTtBQUNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLDBCQUZBOztBQUlBLFNBUEE7O0FBU0EsS0FwRkEsRUFSQSxFIiwiZmlsZSI6IjI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDx2aWV3PlxuXHRcdDx2aWV3IHN0eWxlPVwid2lkdGg6IDkwJTttYXJnaW46MTBweCA1JTtkaXNwbGF5OiBmbGV4O2FsaWduLWl0ZW1zOiBjZW50ZXI7XCI+XG5cdFx0XHQ8YnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgQHRhcD1cInRha2VQaG90b1wiPumAieWPluWbvueJhzwvYnV0dG9uPlxuXHRcdDwvdmlldz5cbiAgICAgICAgXG5cdFx0PHZpZXcgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiAtOTk5OTk5cHg7XCI+XG5cdFx0ICAgIDx2aWV3PlxuXHRcdCAgICAgICAgPGNhbnZhcyA6c3R5bGU9XCJ7J3dpZHRoJzp3LCdoZWlnaHQnOiBofVwiIGNhbnZhcy1pZD1cImZpcnN0Q2FudmFzXCI+PC9jYW52YXM+XG5cdFx0ICAgIDwvdmlldz5cblx0XHQ8L3ZpZXc+XG5cdFx0PHZpZXcgc3R5bGU9XCJ3aWR0aDogOTAlO21hcmdpbjoxMHB4IDUlO2Rpc3BsYXk6IGZsZXg7YWxpZ24taXRlbXM6IGNlbnRlcjtcIj5cblx0XHRcdDxpbWFnZSBtb2RlPVwid2lkdGhGaXhcIiA6c3JjPVwic3JjXCIgQGNsaWNrPVwicHJldmlld1wiPjwvaW1hZ2U+XG5cdFx0PC92aWV3PlxuICAgIDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzcmM6JycsXG4gICAgICAgICAgICAgICAgdzonJyxcbiAgICAgICAgICAgICAgICBoOicnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHByZXZpZXcoKXtcbiAgICAgICAgICAgICAgICB1bmkucHJldmlld0ltYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsczpbdGhpcy5zcmNdLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50OjBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRha2VQaG90bygpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgIHVuaS5jaG9vc2VJbWFnZSh7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50OjEsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bmkuZ2V0SW1hZ2VJbmZvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXMudGVtcEZpbGVQYXRoc1swXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKHJlc3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LncgPSByZXNzLndpZHRoLzMrJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmggPSByZXNzLmhlaWdodC8zKydweCc7XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHQvL+aLheW/g+WwuuWvuOmHjee9ruWQjui/mOayoeeUn+aViO+8jOaVheWBmuW7tui/n1xuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN0eCA9IHVuaS5jcmVhdGVDYW52YXNDb250ZXh0KCdmaXJzdENhbnZhcycpOyAgICAvKiog5Yib5bu655S75biDICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnNldEZpbGxTdHlsZSgnIzAwYjU5ZCcpXG5cdFx0XHRcdFx0XHRcdC8vIFwiYmx1ZVwiLFxuXHRcdFx0XHRcdFx0XHQvLyBcIndoaXRlXCIsIFxuXHRcdFx0XHRcdFx0XHQvLyBcInJlZFwiLCBcblx0XHRcdFx0XHRcdFx0Ly8gXCJibHVlX2dyYWR1YWxcIiwgXG5cdFx0XHRcdFx0XHRcdC8vIFwiZ3JheV9ncmFkdWFsXCJcblx0XHRcdFx0XHRcdFx0Ly8gYmx1ZTojNDM4RURCLHJlZDojRkYwMDAwLHdoaXRlOiNGRkZGRkZcblx0XHRcdFx0XHRcdFx0Ly8gY3R4LnNldEZpbGxTdHlsZSgnIzQzOEVEQicpXG5cdFx0XHRcdFx0XHRcdC8vIGN0eC5maWxsUmVjdCgwLCAwLCByZXNzLndpZHRoLCByZXNzLmhlaWdodClcblx0XHRcdFx0XHRcdFx0Ly8gY3R4LmRyYXdJbWFnZShyZXMudGVtcEZpbGVQYXRoc1swXSwgMCwgMCwgcmVzcy53aWR0aCwgcmVzcy5oZWlnaHQpXG5cdFx0XHRcdFx0XHRcdC8v5bCG5Zu+54mHc3Jj5pS+5YiwY2FuY2Fz5YaF77yM5a696auY5Li65Zu+54mH5aSn5bCPXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShyZXMudGVtcEZpbGVQYXRoc1swXSwgMCwgMCwgcmVzcy53aWR0aCAvIDMsIHJlc3MuaGVpZ2h0IC8gMylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguc2V0Rm9udFNpemUoMTgpIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGN0eC5zZXRGaWxsU3R5bGUoJyMwMGI1OWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGN0eC5yb3RhdGUoMzAgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsZXQgdGV4dFRvV2lkdGggPSByZXNzLndpZHRoIC8gMyAqIDAuNTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHRleHRUb0hlaWdodCA9IHJlc3MuaGVpZ2h0IC8gMyAqIDAuMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjdHguZmlsbFRleHQoJ+aIkeaYr+awtOWNsCcsIHRleHRUb1dpZHRoLCB0ZXh0VG9IZWlnaHQpIFxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0Ly8g6K6+572u5paH5a2X5rC05Y2wXG5cdFx0XHRcdFx0XHRcdGN0eC5zZXRGaWxsU3R5bGUoJ3doaXRlJyk7XG5cdFx0XHRcdFx0XHRcdGN0eC5zZXRGb250U2l6ZSgyMCk7XG5cdFx0XHRcdFx0XHRcdGN0eC5maWxsVGV4dCgn5omT56CB5pel5pyfOicsIDEwLCAxNDApO1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0Ly/lho3mnaXliqDkuKrml7bpl7TmsLTljbBcblx0XHRcdFx0XHRcdFx0dmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0XHRcdFx0XHQvL+i/memHjOeUqOS6hnV2aWV355qEanPlpoLmnpzkuI3pgILphY3pnIDopoHoh6rooYzkv67mlLlcblx0XHRcdFx0XHRcdFx0Y3R4LnNldEZvbnRTaXplKDIwKTtcblx0XHRcdFx0XHRcdFx0Y3R4LmZpbGxUZXh0KGRhdGUsIDEwLCAxODApO1xuXHRcdFx0XHRcdFx0XHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiog6Zmk5LqG5LiK6Z2i55qE5paH5a2X5rC05Y2w77yM6L+Z6YeM5Lmf5Y+v5Lul5Yqg5YWl5Zu+54mH5rC05Y2wICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY3R4LmRyYXdJbWFnZSgnL3N0YXRpYy9ndWFueGlhb3RvbmdfaGVhZOeahOWJr+acrC5wbmcnLCAwLCAwLCB0ZXh0VG9XaWR0aCowLjUsIHRleHRUb0hlaWdodCowLjUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXcodHJ1ZSwoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaS5jYW52YXNUb1RlbXBGaWxlUGF0aCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnZhc0lkOiAnZmlyc3RDYW52YXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzMSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnNyYz1yZXMxLnRlbXBGaWxlUGF0aDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0LnNhdmVQaG90byhyZXMxLnRlbXBGaWxlUGF0aClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sNTAwKVxuXHRcdFx0XHRcdFx0ICBcblx0XHRcdFx0XHRcdCAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblx0XHRcdC8v5L+d5a2Y5Zu+54mH5Yiw55u45YaM77yM5pa55L6/5qC45p+lXG5cdFx0XHRzYXZlUGhvdG8ocGF0aCkge1xuXHRcdFx0XHQvL+S/neWtmOWIsOebuOWGjFxuXHRcdFx0XHR1bmkuc2F2ZUltYWdlVG9QaG90b3NBbGJ1bSh7XG5cdFx0XHRcdFx0ZmlsZVBhdGg6IHBhdGgsXG5cdFx0XHRcdFx0c3VjY2VzczogKCkgPT4ge1xuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn5bey5L+d5a2Y6Iez55u45YaMJyxcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDIwMDBcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */
/*!****************************************************************************************!*\
  !*** /Users/wanggang/Desktop/Nucleic_acid_tools/pages/alphabg/alphabg.vue?mpType=page ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _alphabg_vue_vue_type_template_id_3e83b8c4_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alphabg.vue?vue&type=template&id=3e83b8c4&mpType=page */ 30);\n/* harmony import */ var _alphabg_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alphabg.vue?vue&type=script&lang=js&mpType=page */ 32);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _alphabg_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _alphabg_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _alphabg_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _alphabg_vue_vue_type_template_id_3e83b8c4_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _alphabg_vue_vue_type_template_id_3e83b8c4_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _alphabg_vue_vue_type_template_id_3e83b8c4_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/alphabg/alphabg.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0g7QUFDL0g7QUFDc0U7QUFDTDs7O0FBR2pFO0FBQzZNO0FBQzdNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHdGQUFNO0FBQ1IsRUFBRSw2RkFBTTtBQUNSLEVBQUUsc0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2FscGhhYmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNlODNiOGM0Jm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9hbHBoYWJnLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9hbHBoYWJnLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2FscGhhYmcvYWxwaGFiZy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!**********************************************************************************************************************!*\
  !*** /Users/wanggang/Desktop/Nucleic_acid_tools/pages/alphabg/alphabg.vue?vue&type=template&id=3e83b8c4&mpType=page ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_alphabg_vue_vue_type_template_id_3e83b8c4_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./alphabg.vue?vue&type=template&id=3e83b8c4&mpType=page */ 31);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_alphabg_vue_vue_type_template_id_3e83b8c4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_alphabg_vue_vue_type_template_id_3e83b8c4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_alphabg_vue_vue_type_template_id_3e83b8c4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_alphabg_vue_vue_type_template_id_3e83b8c4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 31 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wanggang/Desktop/Nucleic_acid_tools/pages/alphabg/alphabg.vue?vue&type=template&id=3e83b8c4&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c("web-view", {
      attrs: {
        "webview-styles": _vm._$s(1, "a-webview-styles", _vm.webviewStyles),
        _i: 1
      }
    })
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 32 */
/*!****************************************************************************************************************!*\
  !*** /Users/wanggang/Desktop/Nucleic_acid_tools/pages/alphabg/alphabg.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_alphabg_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./alphabg.vue?vue&type=script&lang=js&mpType=page */ 33);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_alphabg_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_alphabg_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_alphabg_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_alphabg_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_alphabg_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXN0QixDQUFnQix3dEJBQUcsRUFBQyIsImZpbGUiOiIzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FscGhhYmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FscGhhYmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wanggang/Desktop/Nucleic_acid_tools/pages/alphabg/alphabg.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      webviewStyles: {\n        progress: {\n          color: '#FF3333' } } };\n\n\n\n  },\n  methods: {} };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvYWxwaGFiZy9hbHBoYWJnLnZ1ZSJdLCJuYW1lcyI6WyJkYXRhIiwid2Vidmlld1N0eWxlcyIsInByb2dyZXNzIiwiY29sb3IiLCJtZXRob2RzIl0sIm1hcHBpbmdzIjoid0ZBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2RBLE1BRGMsa0JBQ1A7QUFDTixXQUFPO0FBQ05DLG1CQUFhLEVBQUU7QUFDZEMsZ0JBQVEsRUFBRTtBQUNUQyxlQUFLLEVBQUUsU0FERSxFQURJLEVBRFQsRUFBUDs7OztBQU9BLEdBVGE7QUFVZEMsU0FBTyxFQUFFLEVBVkssRSIsImZpbGUiOiIzMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR3ZWJ2aWV3U3R5bGVzOiB7XG5cdFx0XHRcdHByb2dyZXNzOiB7XG5cdFx0XHRcdFx0Y29sb3I6ICcjRkYzMzMzJ1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///33\n");

/***/ }),
/* 34 */
/*!********************************************************************************************!*\
  !*** /Users/wanggang/Desktop/Nucleic_acid_tools/pages/bgcompose/bgcompose.vue?mpType=page ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bgcompose_vue_vue_type_template_id_1792c9b2_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bgcompose.vue?vue&type=template&id=1792c9b2&mpType=page */ 35);\n/* harmony import */ var _bgcompose_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bgcompose.vue?vue&type=script&lang=js&mpType=page */ 37);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _bgcompose_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _bgcompose_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _bgcompose_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _bgcompose_vue_vue_type_template_id_1792c9b2_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _bgcompose_vue_vue_type_template_id_1792c9b2_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _bgcompose_vue_vue_type_template_id_1792c9b2_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/bgcompose/bgcompose.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUk7QUFDakk7QUFDd0U7QUFDTDs7O0FBR25FO0FBQzZNO0FBQzdNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLDBGQUFNO0FBQ1IsRUFBRSwrRkFBTTtBQUNSLEVBQUUsd0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMzQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2JnY29tcG9zZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTc5MmM5YjImbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2JnY29tcG9zZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vYmdjb21wb3NlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2JnY29tcG9zZS9iZ2NvbXBvc2UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///34\n");

/***/ }),
/* 35 */
/*!**************************************************************************************************************************!*\
  !*** /Users/wanggang/Desktop/Nucleic_acid_tools/pages/bgcompose/bgcompose.vue?vue&type=template&id=1792c9b2&mpType=page ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_bgcompose_vue_vue_type_template_id_1792c9b2_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./bgcompose.vue?vue&type=template&id=1792c9b2&mpType=page */ 36);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_bgcompose_vue_vue_type_template_id_1792c9b2_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_bgcompose_vue_vue_type_template_id_1792c9b2_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_bgcompose_vue_vue_type_template_id_1792c9b2_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_bgcompose_vue_vue_type_template_id_1792c9b2_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 36 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wanggang/Desktop/Nucleic_acid_tools/pages/bgcompose/bgcompose.vue?vue&type=template&id=1792c9b2&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c("view", [
      _c("button", { attrs: { _i: 2 }, on: { click: _vm.takeBG } }),
      _c("button", { attrs: { _i: 3 }, on: { click: _vm.takePhoto } })
    ]),
    _c("view", [
      _c("view", [
        _c("canvas", {
          style: _vm._$s(6, "s", { width: _vm.w, height: _vm.h }),
          attrs: { _i: 6 }
        })
      ])
    ]),
    _c("view", [
      _c("image", {
        attrs: { src: _vm._$s(8, "a-src", _vm.src), _i: 8 },
        on: { click: _vm.preview }
      })
    ])
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 37 */
/*!********************************************************************************************************************!*\
  !*** /Users/wanggang/Desktop/Nucleic_acid_tools/pages/bgcompose/bgcompose.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_bgcompose_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./bgcompose.vue?vue&type=script&lang=js&mpType=page */ 38);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_bgcompose_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_bgcompose_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_bgcompose_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_bgcompose_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_bgcompose_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXd0QixDQUFnQiwwdEJBQUcsRUFBQyIsImZpbGUiOiIzNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2JnY29tcG9zZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYmdjb21wb3NlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///37\n");

/***/ }),
/* 38 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wanggang/Desktop/Nucleic_acid_tools/pages/bgcompose/bgcompose.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      src: '',\n      w: '',\n      h: '' };\n\n  },\n  methods: {\n    preview: function preview() {\n      uni.previewImage({\n        urls: [this.src],\n        current: 0 });\n\n    },\n    takeBG: function takeBG() {\n      var that = this;\n      var ctx = uni.createCanvasContext('firstCanvas'); /** 创建画布 */\n      uni.chooseImage({\n        success: function success(res) {\n          uni.getImageInfo({\n            src: res.tempFilePaths[0],\n            success: function success(ress) {\n              __f__(\"log\", ress, \" at pages/bgcompose/bgcompose.vue:43\");\n            } });\n\n          ctx.drawImage(res.tempFilePaths[0], 0, 0, 1080, 1440);\n          ctx.draw(false, function () {\n            setTimeout(function () {\n              uni.canvasToTempFilePath({\n                canvasId: 'firstCanvas',\n                success: function success(res1) {\n                  that.src = res1.tempFilePath;\n                } });\n\n            }, 1000);\n          });\n        } });\n\n    },\n    takePhoto: function takePhoto() {\n      var that = this;\n      uni.chooseImage({\n        count: 1,\n        success: function success(res) {\n          uni.getImageInfo({\n            src: res.tempFilePaths[0],\n            success: function success(ress) {\n              that.w = ress.width / 3 + 'px';\n              that.h = ress.height / 3 + 'px';\n              //担心尺寸重置后还没生效，故做延迟\n              setTimeout(function () {\n\n                var ctx = uni.createCanvasContext('firstCanvas'); /** 创建画布 */\n                // ctx.setFillStyle('#00b59d')\n                // \"blue\",\n                // \"white\", \n                // \"red\", \n                // \"blue_gradual\", \n                // \"gray_gradual\"\n                // blue:#438EDB,red:#FF0000,white:#FFFFFF\n                // ctx.setFillStyle('#438EDB')\n                // ctx.fillRect(0, 0, ress.width, ress.height)\n                // ctx.drawImage(res.tempFilePaths[0], 0, 0, ress.width, ress.height)\n                //将图片src放到cancas内，宽高为图片大小\n                ctx.drawImage(res.tempFilePaths[0], 0, 0, ress.width / 3, ress.height / 3);\n                // ctx.setFontSize(18) \n                // ctx.setFillStyle('#00b59d')\n                // ctx.rotate(30 * Math.PI / 180);\n                // let textToWidth = ress.width / 3 * 0.5; \n                // let textToHeight = ress.height / 3 * 0.3;\n                // ctx.fillText('我是水印', textToWidth, textToHeight) \n\n                // 设置文字水印\n                // ctx.setFillStyle('white');\n                // ctx.setFontSize(20);\n                // ctx.fillText('打码日期:', 10, 140);\n\n                //再来加个时间水印\n                // var date = new Date();\n                // //这里用了uview的js如果不适配需要自行修改\n                // ctx.setFontSize(20);\n                // ctx.fillText(date, 10, 180);\n\n                /** 除了上面的文字水印，这里也可以加入图片水印 */\n                // ctx.drawImage('/static/guanxiaotong_head的副本.png', 0, 0, textToWidth*0.5, textToHeight*0.5)\n                ctx.draw(true, function () {\n                  setTimeout(function () {\n                    uni.canvasToTempFilePath({\n                      canvasId: 'firstCanvas',\n                      success: function success(res1) {\n                        that.src = res1.tempFilePath;\n                        // that.savePhoto(res1.tempFilePath)\n                      } });\n\n                  }, 1000);\n                });\n              }, 500);\n            } });\n\n        } });\n\n    },\n    //保存图片到相册，方便核查\n    savePhoto: function savePhoto(path) {\n      //保存到相册\n      uni.saveImageToPhotosAlbum({\n        filePath: path,\n        success: function success() {\n          uni.showToast({\n            title: '已保存至相册',\n            duration: 2000 });\n\n        } });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvYmdjb21wb3NlL2JnY29tcG9zZS52dWUiXSwibmFtZXMiOlsiZGF0YSIsInNyYyIsInciLCJoIiwibWV0aG9kcyIsInByZXZpZXciLCJ1bmkiLCJwcmV2aWV3SW1hZ2UiLCJ1cmxzIiwiY3VycmVudCIsInRha2VCRyIsInRoYXQiLCJjdHgiLCJjcmVhdGVDYW52YXNDb250ZXh0IiwiY2hvb3NlSW1hZ2UiLCJzdWNjZXNzIiwicmVzIiwiZ2V0SW1hZ2VJbmZvIiwidGVtcEZpbGVQYXRocyIsInJlc3MiLCJkcmF3SW1hZ2UiLCJkcmF3Iiwic2V0VGltZW91dCIsImNhbnZhc1RvVGVtcEZpbGVQYXRoIiwiY2FudmFzSWQiLCJyZXMxIiwidGVtcEZpbGVQYXRoIiwidGFrZVBob3RvIiwiY291bnQiLCJ3aWR0aCIsImhlaWdodCIsInNhdmVQaG90byIsInBhdGgiLCJzYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtIiwiZmlsZVBhdGgiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImR1cmF0aW9uIl0sIm1hcHBpbmdzIjoicUlBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVtQjtBQUNYQSxNQURXLGtCQUNKO0FBQ0gsV0FBTztBQUNIQyxTQUFHLEVBQUMsRUFERDtBQUVIQyxPQUFDLEVBQUMsRUFGQztBQUdIQyxPQUFDLEVBQUMsRUFIQyxFQUFQOztBQUtILEdBUFU7QUFRWEMsU0FBTyxFQUFFO0FBQ0xDLFdBREsscUJBQ0k7QUFDTEMsU0FBRyxDQUFDQyxZQUFKLENBQWlCO0FBQ2JDLFlBQUksRUFBQyxDQUFDLEtBQUtQLEdBQU4sQ0FEUTtBQUViUSxlQUFPLEVBQUMsQ0FGSyxFQUFqQjs7QUFJSCxLQU5JO0FBT2RDLFVBUGMsb0JBT0w7QUFDTCxVQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUNILFVBQUlDLEdBQUcsR0FBR04sR0FBRyxDQUFDTyxtQkFBSixDQUF3QixhQUF4QixDQUFWLENBRlEsQ0FFeUM7QUFDakRQLFNBQUcsQ0FBQ1EsV0FBSixDQUFnQjtBQUNkQyxlQUFPLEVBQUUsaUJBQVNDLEdBQVQsRUFBYTtBQUN2QlYsYUFBRyxDQUFDVyxZQUFKLENBQWlCO0FBQ2ZoQixlQUFHLEVBQUVlLEdBQUcsQ0FBQ0UsYUFBSixDQUFrQixDQUFsQixDQURVO0FBRWZILG1CQUFPLEVBQUUsaUJBQUNJLElBQUQsRUFBVTtBQUNwQiwyQkFBWUEsSUFBWjtBQUNDLGFBSmUsRUFBakI7O0FBTUdQLGFBQUcsQ0FBQ1EsU0FBSixDQUFjSixHQUFHLENBQUNFLGFBQUosQ0FBa0IsQ0FBbEIsQ0FBZCxFQUFvQyxDQUFwQyxFQUF1QyxDQUF2QyxFQUF5QyxJQUF6QyxFQUE4QyxJQUE5QztBQUNBTixhQUFHLENBQUNTLElBQUosQ0FBUyxLQUFULEVBQWUsWUFBSTtBQUNyQkMsc0JBQVUsQ0FBQyxZQUFNO0FBQ2hCaEIsaUJBQUcsQ0FBQ2lCLG9CQUFKLENBQXlCO0FBQ3ZCQyx3QkFBUSxFQUFFLGFBRGE7QUFFdkJULHVCQUFPLEVBQUUsaUJBQUNVLElBQUQsRUFBVTtBQUNwQmQsc0JBQUksQ0FBQ1YsR0FBTCxHQUFTd0IsSUFBSSxDQUFDQyxZQUFkO0FBQ0UsaUJBSnNCLEVBQXpCOztBQU1BLGFBUFMsRUFPUCxJQVBPLENBQVY7QUFRQSxXQVRFO0FBVUQsU0FuQmEsRUFBaEI7O0FBcUJBLEtBL0JhO0FBZ0NMQyxhQWhDSyx1QkFnQ087QUFDUixVQUFJaEIsSUFBSSxHQUFHLElBQVg7QUFDQ0wsU0FBRyxDQUFDUSxXQUFKLENBQWdCO0FBQ2JjLGFBQUssRUFBQyxDQURPO0FBRWJiLGVBRmEsbUJBRUxDLEdBRkssRUFFQTtBQUNUVixhQUFHLENBQUNXLFlBQUosQ0FBaUI7QUFDZmhCLGVBQUcsRUFBRWUsR0FBRyxDQUFDRSxhQUFKLENBQWtCLENBQWxCLENBRFU7QUFFZkgsbUJBQU8sRUFBRSxpQkFBQ0ksSUFBRCxFQUFVO0FBQ2pCUixrQkFBSSxDQUFDVCxDQUFMLEdBQVNpQixJQUFJLENBQUNVLEtBQUwsR0FBVyxDQUFYLEdBQWEsSUFBdEI7QUFDQWxCLGtCQUFJLENBQUNSLENBQUwsR0FBU2dCLElBQUksQ0FBQ1csTUFBTCxHQUFZLENBQVosR0FBYyxJQUF2QjtBQUNyQjtBQUNBUix3QkFBVSxDQUFDLFlBQU07O0FBRUksb0JBQUlWLEdBQUcsR0FBR04sR0FBRyxDQUFDTyxtQkFBSixDQUF3QixhQUF4QixDQUFWLENBRkosQ0FFeUQ7QUFDckQ7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDcUJELG1CQUFHLENBQUNRLFNBQUosQ0FBY0osR0FBRyxDQUFDRSxhQUFKLENBQWtCLENBQWxCLENBQWQsRUFBb0MsQ0FBcEMsRUFBdUMsQ0FBdkMsRUFBMENDLElBQUksQ0FBQ1UsS0FBTCxHQUFhLENBQXZELEVBQTBEVixJQUFJLENBQUNXLE1BQUwsR0FBYyxDQUF4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUI7QUFDQTtBQUNBbEIsbUJBQUcsQ0FBQ1MsSUFBSixDQUFTLElBQVQsRUFBYyxZQUFJO0FBQ2RDLDRCQUFVLENBQUMsWUFBTTtBQUNiaEIsdUJBQUcsQ0FBQ2lCLG9CQUFKLENBQXlCO0FBQ3ZCQyw4QkFBUSxFQUFFLGFBRGE7QUFFdkJULDZCQUFPLEVBQUUsaUJBQUNVLElBQUQsRUFBVTtBQUNiZCw0QkFBSSxDQUFDVixHQUFMLEdBQVN3QixJQUFJLENBQUNDLFlBQWQ7QUFDakM7QUFDNEIsdUJBTHNCLEVBQXpCOztBQU9ELG1CQVJPLEVBUUwsSUFSSyxDQUFWO0FBU0gsaUJBVkQ7QUFXRCxlQTlDVixFQThDVyxHQTlDWCxDQUFWO0FBK0NFLGFBckRnQyxFQUFqQjs7QUF1REgsU0ExRFksRUFBaEI7O0FBNERKLEtBOUZJO0FBK0ZkO0FBQ0FLLGFBaEdjLHFCQWdHSkMsSUFoR0ksRUFnR0U7QUFDZjtBQUNBMUIsU0FBRyxDQUFDMkIsc0JBQUosQ0FBMkI7QUFDMUJDLGdCQUFRLEVBQUVGLElBRGdCO0FBRTFCakIsZUFBTyxFQUFFLG1CQUFNO0FBQ2RULGFBQUcsQ0FBQzZCLFNBQUosQ0FBYztBQUNiQyxpQkFBSyxFQUFFLFFBRE07QUFFYkMsb0JBQVEsRUFBRSxJQUZHLEVBQWQ7O0FBSUEsU0FQeUIsRUFBM0I7O0FBU0EsS0EzR2EsRUFSRSxFIiwiZmlsZSI6IjM4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzcmM6JycsXG4gICAgICAgICAgICAgICAgdzonJyxcbiAgICAgICAgICAgICAgICBoOicnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHByZXZpZXcoKXtcbiAgICAgICAgICAgICAgICB1bmkucHJldmlld0ltYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsczpbdGhpcy5zcmNdLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50OjBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcblx0XHRcdHRha2VCRygpIHtcblx0XHRcdCAgICB2YXIgdGhhdCA9IHRoaXM7XG5cdFx0XHRcdGxldCBjdHggPSB1bmkuY3JlYXRlQ2FudmFzQ29udGV4dCgnZmlyc3RDYW52YXMnKTsvKiog5Yib5bu655S75biDICovXG5cdFx0XHRcdHVuaS5jaG9vc2VJbWFnZSh7XG5cdFx0XHRcdCAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcblx0XHRcdFx0XHR1bmkuZ2V0SW1hZ2VJbmZvKHtcblx0XHRcdFx0XHQgIHNyYzogcmVzLnRlbXBGaWxlUGF0aHNbMF0sXG5cdFx0XHRcdFx0ICBzdWNjZXNzOiAocmVzcykgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzcyk7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCAgICBjdHguZHJhd0ltYWdlKHJlcy50ZW1wRmlsZVBhdGhzWzBdLCAwLCAwLDEwODAsMTQ0MClcblx0XHRcdFx0ICAgIGN0eC5kcmF3KGZhbHNlLCgpPT57XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0dW5pLmNhbnZhc1RvVGVtcEZpbGVQYXRoKHtcblx0XHRcdFx0XHRcdFx0ICBjYW52YXNJZDogJ2ZpcnN0Q2FudmFzJyxcblx0XHRcdFx0XHRcdFx0ICBzdWNjZXNzOiAocmVzMSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHRoYXQuc3JjPXJlczEudGVtcEZpbGVQYXRoO1xuXHRcdFx0XHRcdFx0XHQgIH1cblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9LCAxMDAwKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQgIH1cblx0XHRcdFx0fSlcblx0XHRcdH0sXG4gICAgICAgICAgICB0YWtlUGhvdG8oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgICB1bmkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBjb3VudDoxLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5pLmdldEltYWdlSW5mbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogcmVzLnRlbXBGaWxlUGF0aHNbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXNzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC53ID0gcmVzcy53aWR0aC8zKydweCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5oID0gcmVzcy5oZWlnaHQvMysncHgnO1xuXHRcdFx0XHRcdFx0XHQvL+aLheW/g+WwuuWvuOmHjee9ruWQjui/mOayoeeUn+aViO+8jOaVheWBmuW7tui/n1xuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN0eCA9IHVuaS5jcmVhdGVDYW52YXNDb250ZXh0KCdmaXJzdENhbnZhcycpOyAgICAvKiog5Yib5bu655S75biDICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY3R4LnNldEZpbGxTdHlsZSgnIzAwYjU5ZCcpXG5cdFx0XHRcdFx0XHRcdC8vIFwiYmx1ZVwiLFxuXHRcdFx0XHRcdFx0XHQvLyBcIndoaXRlXCIsIFxuXHRcdFx0XHRcdFx0XHQvLyBcInJlZFwiLCBcblx0XHRcdFx0XHRcdFx0Ly8gXCJibHVlX2dyYWR1YWxcIiwgXG5cdFx0XHRcdFx0XHRcdC8vIFwiZ3JheV9ncmFkdWFsXCJcblx0XHRcdFx0XHRcdFx0Ly8gYmx1ZTojNDM4RURCLHJlZDojRkYwMDAwLHdoaXRlOiNGRkZGRkZcblx0XHRcdFx0XHRcdFx0Ly8gY3R4LnNldEZpbGxTdHlsZSgnIzQzOEVEQicpXG5cdFx0XHRcdFx0XHRcdC8vIGN0eC5maWxsUmVjdCgwLCAwLCByZXNzLndpZHRoLCByZXNzLmhlaWdodClcblx0XHRcdFx0XHRcdFx0Ly8gY3R4LmRyYXdJbWFnZShyZXMudGVtcEZpbGVQYXRoc1swXSwgMCwgMCwgcmVzcy53aWR0aCwgcmVzcy5oZWlnaHQpXG5cdFx0XHRcdFx0XHRcdC8v5bCG5Zu+54mHc3Jj5pS+5YiwY2FuY2Fz5YaF77yM5a696auY5Li65Zu+54mH5aSn5bCPXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShyZXMudGVtcEZpbGVQYXRoc1swXSwgMCwgMCwgcmVzcy53aWR0aCAvIDMsIHJlc3MuaGVpZ2h0IC8gMylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjdHguc2V0Rm9udFNpemUoMTgpIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGN0eC5zZXRGaWxsU3R5bGUoJyMwMGI1OWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGN0eC5yb3RhdGUoMzAgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsZXQgdGV4dFRvV2lkdGggPSByZXNzLndpZHRoIC8gMyAqIDAuNTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHRleHRUb0hlaWdodCA9IHJlc3MuaGVpZ2h0IC8gMyAqIDAuMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjdHguZmlsbFRleHQoJ+aIkeaYr+awtOWNsCcsIHRleHRUb1dpZHRoLCB0ZXh0VG9IZWlnaHQpIFxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0Ly8g6K6+572u5paH5a2X5rC05Y2wXG5cdFx0XHRcdFx0XHRcdC8vIGN0eC5zZXRGaWxsU3R5bGUoJ3doaXRlJyk7XG5cdFx0XHRcdFx0XHRcdC8vIGN0eC5zZXRGb250U2l6ZSgyMCk7XG5cdFx0XHRcdFx0XHRcdC8vIGN0eC5maWxsVGV4dCgn5omT56CB5pel5pyfOicsIDEwLCAxNDApO1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0Ly/lho3mnaXliqDkuKrml7bpl7TmsLTljbBcblx0XHRcdFx0XHRcdFx0Ly8gdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0XHRcdFx0XHQvLyAvL+i/memHjOeUqOS6hnV2aWV355qEanPlpoLmnpzkuI3pgILphY3pnIDopoHoh6rooYzkv67mlLlcblx0XHRcdFx0XHRcdFx0Ly8gY3R4LnNldEZvbnRTaXplKDIwKTtcblx0XHRcdFx0XHRcdFx0Ly8gY3R4LmZpbGxUZXh0KGRhdGUsIDEwLCAxODApO1xuXHRcdFx0XHRcdFx0XHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiog6Zmk5LqG5LiK6Z2i55qE5paH5a2X5rC05Y2w77yM6L+Z6YeM5Lmf5Y+v5Lul5Yqg5YWl5Zu+54mH5rC05Y2wICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY3R4LmRyYXdJbWFnZSgnL3N0YXRpYy9ndWFueGlhb3RvbmdfaGVhZOeahOWJr+acrC5wbmcnLCAwLCAwLCB0ZXh0VG9XaWR0aCowLjUsIHRleHRUb0hlaWdodCowLjUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXcodHJ1ZSwoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaS5jYW52YXNUb1RlbXBGaWxlUGF0aCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnZhc0lkOiAnZmlyc3RDYW52YXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzMSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnNyYz1yZXMxLnRlbXBGaWxlUGF0aDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyB0aGF0LnNhdmVQaG90byhyZXMxLnRlbXBGaWxlUGF0aClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sNTAwKVxuXHRcdFx0XHRcdFx0ICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXHRcdFx0Ly/kv53lrZjlm77niYfliLDnm7jlhozvvIzmlrnkvr/moLjmn6Vcblx0XHRcdHNhdmVQaG90byhwYXRoKSB7XG5cdFx0XHRcdC8v5L+d5a2Y5Yiw55u45YaMXG5cdFx0XHRcdHVuaS5zYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtKHtcblx0XHRcdFx0XHRmaWxlUGF0aDogcGF0aCxcblx0XHRcdFx0XHRzdWNjZXNzOiAoKSA9PiB7XG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICflt7Lkv53lrZjoh7Pnm7jlhownLFxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG4gICAgICAgIH1cbiAgICB9XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///38\n");

/***/ }),
/* 39 */
/*!**********************************************************!*\
  !*** /Users/wanggang/Desktop/Nucleic_acid_tools/App.vue ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 40);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDdU07QUFDdk0sZ0JBQWdCLGlOQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjM5LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///39\n");

/***/ }),
/* 40 */
/*!***********************************************************************************!*\
  !*** /Users/wanggang/Desktop/Nucleic_acid_tools/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 41);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStxQixDQUFnQix5c0JBQUcsRUFBQyIsImZpbGUiOiI0MC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///40\n");

/***/ }),
/* 41 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wanggang/Desktop/Nucleic_acid_tools/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixpQkFBWSxZQUFaO0FBQ0EsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBTmE7QUFPZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQVRhLEUiLCJmaWxlIjoiNDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJylcblx0fSxcblx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKVxuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///41\n");

/***/ })
],[[0,"app-config"]]]);