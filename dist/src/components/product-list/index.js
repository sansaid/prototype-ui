"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProductList;

var _react = _interopRequireDefault(require("react"));

var _products = require("./products");

require("./product-list.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function share() {
  window.alert('The product has been shared!');
}

function getProduct(product, index) {
  return /*#__PURE__*/_react.default.createElement("div", {
    key: index
  }, /*#__PURE__*/_react.default.createElement("h3", null, /*#__PURE__*/_react.default.createElement("a", {
    title: product.name + ' details',
    href: "/"
  }, product.name)), /*#__PURE__*/_react.default.createElement("p", null, "Description: ", product.description, " "), /*#__PURE__*/_react.default.createElement("button", {
    className: "btn",
    onClick: share
  }, "Share"));
}

function ProductList() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h2", null, "Products"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", null, _products.products.map(function (product, index) {
    return getProduct(product, index);
  })));
}

//# sourceMappingURL=index.js.map