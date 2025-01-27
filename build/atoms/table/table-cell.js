"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const styled_system_1 = require("styled-system");
const table_head_1 = __importDefault(require("./table-head"));
const css_class_1 = require("../../utils/css-class");
/**
 * @component
 * @private
 */
const TableCell = styled_components_1.default.td `
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey20};
  font-size: ${({ theme }) => theme.fontSizes.default};
  line-height: ${({ theme }) => theme.lineHeights.default};
  word-break: break-word;
  vertical-align: middle;
  ${styled_system_1.color}; 
  ${styled_system_1.space};
  ${styled_system_1.layout};

  ${table_head_1.default} & {
    color: ${({ theme }) => theme.colors.grey60};
    border: none;
  }
`;
TableCell.defaultProps = {
    p: 'lg',
    color: 'grey100',
    className: css_class_1.cssClass('TableCell'),
};
exports.default = TableCell;
