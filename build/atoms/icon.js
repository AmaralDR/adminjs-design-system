"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importStar(require("styled-components"));
const styled_system_1 = require("styled-system");
const CarbonIcons = __importStar(require("@carbon/icons-react"));
const css_class_1 = require("../utils/css-class");
const spinCss = styled_components_1.css `
  @keyframes iconSpin {
    from {
      transform:rotate(0deg);
    }
    to {
      transform:rotate(360deg);
    }
  }

  animation-name: iconSpin;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear; 
`;
const Wrapper = styled_components_1.default.span `
  vertical-align: middle;
  display: inline-block;
  line-height: ${({ theme }) => theme.lineHeights.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  
  & > svg {
    ${({ theme, color: colorProp }) => (colorProp ? `fill: ${theme.colors[colorProp]}` : '')};
    ${({ spin }) => (spin ? spinCss : '')};
  }
  ${({ rounded }) => (rounded ? 'border-radius: 9999px;' : '')};
  ${styled_system_1.space};
  ${styled_system_1.color};
`;
/**
 * @classdesc
 *
 * <img src="components/icon.png" />
 *
 * Component wrapping [@carbon/icons-react](https://www.npmjs.com/package/@carbon/icons-react).
 * List of all icons can be found here: https://www.carbondesignsystem.com/guidelines/icons/library/
 * but keys are not always 1 to 1 in a relation to the `icons-react` library.
 * If you have problem verifying the key of given icon - you can always open the
 * Chrome Terminal (with AdminJS open) and write there:
 *
 * ```
 * Object.keys(CarbonIcons)
 * ```
 *
 * to see list of all possible icon keys.
 *
 * ### Usage
 *
 * ```javascript
 * import { Icon, IconProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see IconProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-icon--default Storybook}
 * @hideconstructor
 * @example <caption>Icons inside other elements</caption>
 * return (
 *   <Box variant="grey">
 *     <Label mb="default"><Icon icon="Accessibility" />Icon in Label</Label>
 *     <Button><Icon icon="Accessibility" />Icon in button</Button>
 *   </Box>
 * )
 * @example <caption>Different sizes</caption>
 * const sizes = [16, 20, 24, 32]
 * return (
 *   <Box variant="grey">
 *     {sizes.map(size => (
 *       <Label m="default"><Icon icon="Accessibility" size={size}/>Icon {size}</Label>
 *     ))}
 *   </Box>
 * )
 *
 * @example <caption>Big rounded icon with background</caption>
 * return (
 *   <Box variant="grey">
 *     <Icon icon="Add" color="white" bg="primary100" rounded size={32} p="default"/>
 *   </Box>
 * )
 * @section design-system
 */
const Icon = (props) => {
    const { icon, size, color: givenColor } = props, other = __rest(props, ["icon", "size", "color"]);
    const iconSize = size || 16;
    const CarbonIcon = CarbonIcons[`${icon}${iconSize}`] || CarbonIcons.ErrorOutline16;
    if (CarbonIcon) {
        return (react_1.default.createElement(Wrapper, Object.assign({ className: css_class_1.cssClass('Icon'), color: givenColor || 'grey100' }, other),
            react_1.default.createElement(CarbonIcon, null)));
    }
    return null;
};
exports.Icon = Icon;
exports.default = Icon;
