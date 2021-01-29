"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _Table = _interopRequireDefault(require("@material-ui/core/Table"));

var _TableBody = _interopRequireDefault(require("@material-ui/core/TableBody"));

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _TableContainer = _interopRequireDefault(require("@material-ui/core/TableContainer"));

var _TableHead = _interopRequireDefault(require("@material-ui/core/TableHead"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var StyledTableCell = (0, _styles.withStyles)(function (theme) {
  return {
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    body: {
      fontSize: 14
    }
  };
})(_TableCell.default);
var StyledTableRow = (0, _styles.withStyles)(function (theme) {
  return {
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover
      }
    }
  };
})(_TableRow.default);
var useStyles = (0, _styles.makeStyles)({
  table: {
    minWidth: 400,
    maxWidth: 600
  }
}); ///////////////////////////////////////////////////////////////////////////////////////////////

var DisplayTasks = function DisplayTasks(props) {
  var classes = useStyles();
  console.log("Tasks in Display Tasks component:", props.tasks);

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      updatedtasks = _useState2[0],
      SetUpdatedTasks = _useState2[1]; // var dispatch = useDispatch();


  (0, _react.useEffect)(function () {
    SetUpdatedTasks(props.tasks);
  }, [props]);

  var toggleStatus = function toggleStatus(i) {
    console.log("Index", i, "is clicked"); // dispatch({
    //     type: "TOGGLE",
    //     payload: {
    //         index: i,
    //     },
    // })

    SetUpdatedTasks(updatedtasks.map(function (item, ind) {
      if (i === ind) {
        return _objectSpread({}, item, {
          status: !item.status
        });
      } else return item;
    }));
  }; // return (
  //     <div>
  //         <h1>Tasks</h1>
  //         <table border="1px" >
  //             <thead >
  //                 <tr>
  //                     <th>Task</th>
  //                     <th>Status (Completed or Not)</th>
  //                     <th>Toggle Status</th>
  //                 </tr>
  //             </thead>
  //             {tasks.map((task,index) => {
  //                 return (
  //                     <tbody>
  //                         <tr key={task.title}>
  //                             <td>{task.title}</td>
  //                             <td> {""+task.status === "true" ? "Done" : "Not Completed"}</td>
  //                             <td> <button onClick={()=>toggleStatus(index)}> Click to toggle</button></td>
  //                         </tr>
  //                     </tbody>
  //                 )
  //             })}
  //         </table>
  //     </div>
  // )


  return /*#__PURE__*/_react.default.createElement(_TableContainer.default, {
    component: _Paper.default
  }, /*#__PURE__*/_react.default.createElement(_Table.default, {
    className: classes.table,
    "aria-label": "customized table",
    style: {
      width: 1000,
      margin: 'auto'
    }
  }, /*#__PURE__*/_react.default.createElement(_TableHead.default, null, /*#__PURE__*/_react.default.createElement(_TableRow.default, null, /*#__PURE__*/_react.default.createElement(StyledTableCell, {
    align: "justify"
  }, "Task"), /*#__PURE__*/_react.default.createElement(StyledTableCell, {
    align: "justify"
  }, "Status"), /*#__PURE__*/_react.default.createElement(StyledTableCell, {
    align: "justify"
  }, "Toggle Status"))), /*#__PURE__*/_react.default.createElement(_TableBody.default, null, updatedtasks.map(function (task, index) {
    return /*#__PURE__*/_react.default.createElement(StyledTableRow, {
      key: index
    }, /*#__PURE__*/_react.default.createElement(StyledTableCell, {
      align: "justify",
      component: "th",
      scope: "row"
    }, " ", "" + task.input, " "), /*#__PURE__*/_react.default.createElement(StyledTableCell, {
      align: "justify"
    }, "" + task.status === "true" ? "Done" : "Not Completed"), /*#__PURE__*/_react.default.createElement(StyledTableCell, {
      align: "justify"
    }, /*#__PURE__*/_react.default.createElement("button", {
      onClick: function onClick() {
        return toggleStatus(index);
      }
    }, " Click to toggle")));
  }))));
};

var _default = DisplayTasks;
exports.default = _default;

//# sourceMappingURL=DisplayTasks.js.map