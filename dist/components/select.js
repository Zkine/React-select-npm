"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Select;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Select(_ref) {
  let {
    htmlFor,
    className,
    children,
    name,
    id,
    className2
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: htmlFor,
    className: className
  }, children[0]), /*#__PURE__*/_react.default.createElement("select", {
    name: name,
    id: id,
    className: className2
  }, children[1]));
}