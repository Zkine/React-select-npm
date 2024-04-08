"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Select;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Select(props) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: props.htmlFor,
    className: props.className
  }, props.children[0]), /*#__PURE__*/_react.default.createElement("select", {
    name: props.name,
    id: props.id,
    className: props.className2
  }, props.children[1]));
}