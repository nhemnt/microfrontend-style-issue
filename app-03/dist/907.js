(self["webpackChunk_comprehensive_demo_app_03"] = self["webpackChunk_comprehensive_demo_app_03"] || []).push([[907],{

/***/ 907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(163);
;// CONCATENATED MODULE: ./src/Button.jsx

const Button = styled_components_browser_esm/* default.button */.ZP.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: palevioletred;
  color: white;
  font-size: 1rem;
  font-family: sans-serif;
`;
/* harmony default export */ const src_Button = (Button);
// EXTERNAL MODULE: consume shared module (default) react@^16.13.0 (singleton) (fallback: ./node_modules/react/index.js)
var index_js_ = __webpack_require__(558);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
;// CONCATENATED MODULE: ./src/App.jsx


const Page = /*#__PURE__*/index_js_default().lazy(() => __webpack_require__.e(/* import() */ 947).then(__webpack_require__.t.bind(__webpack_require__, 947, 23)));

function App() {
  return /*#__PURE__*/index_js_default().createElement((index_js_default()).Suspense, {
    fallback: null
  }, /*#__PURE__*/index_js_default().createElement(Page, {
    title: "Styled Components App"
  }, /*#__PURE__*/index_js_default().createElement(src_Button, null, "\uD83D\uDC85 Test Button")));
}

/* harmony default export */ const src_App = (App);
// EXTERNAL MODULE: consume shared module (default) react-dom@^16.13.0 (singleton) (fallback: ./node_modules/react-dom/index.js)
var react_dom_index_js_ = __webpack_require__(169);
var react_dom_index_js_default = /*#__PURE__*/__webpack_require__.n(react_dom_index_js_);
;// CONCATENATED MODULE: ./src/bootstrap.js



react_dom_index_js_default().render( /*#__PURE__*/index_js_default().createElement(src_App, null), document.getElementById("root"));

/***/ })

}]);
//# sourceMappingURL=907.js.map