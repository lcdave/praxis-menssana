"use strict"

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")

exports.__esModule = true
exports.default = HTML

var _react = _interopRequireDefault(require("react"))

var _propTypes = _interopRequireDefault(require("prop-types"))

function HTML(props) {
  return _react.default.createElement(
    "html",
    props.htmlAttributes,
    _react.default.createElement(
      "head",
      null,
      _react.default.createElement("meta", {
        charSet: "utf-8",
      }),
      _react.default.createElement("meta", {
        httpEquiv: "x-ua-compatible",
        content: "ie=edge",
      }),
      _react.default.createElement("meta", {
        name: "viewport",
        content:
          "width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no",
      }),
      props.headComponents
    ),
    _react.default.createElement(
      "body",
      props.bodyAttributes,
      props.preBodyComponents,
      _react.default.createElement("div", {
        key: `body`,
        id: "___gatsby",
        dangerouslySetInnerHTML: {
          __html: props.body,
        },
      }),
      props.postBodyComponents
    )
  )
}

HTML.propTypes = {
  htmlAttributes: _propTypes.default.object,
  headComponents: _propTypes.default.array,
  bodyAttributes: _propTypes.default.object,
  preBodyComponents: _propTypes.default.array,
  body: _propTypes.default.string,
  postBodyComponents: _propTypes.default.array,
}
