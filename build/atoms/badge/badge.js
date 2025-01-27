"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const styled_system_1 = require("styled-system");
const css_class_1 = require("../../utils/css-class");
const variantStyle = (variantColor, props) => ({
    bg: variantColor,
    borderColor: variantColor,
    color: props.outline ? variantColor : 'white',
});
const colorVariant = (props) => styled_system_1.variant({
    variants: {
        primary: variantStyle('primary100', props),
        danger: variantStyle('error', props),
        success: variantStyle('success', props),
        info: variantStyle('info', props),
        secondary: variantStyle('accent', props),
        light: variantStyle('light', props),
        default: {},
    },
});
const sizeVariants = styled_system_1.variant({
    prop: 'size',
    variants: {
        sm: {
            py: 'xs',
        },
        lg: {
            py: '11px',
            px: '14px',
        },
        default: {},
    },
});
/**
 * @load ./badge.doc.md
 * @see BadgeProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-badge--default StoryBook}
 * @component
 * @hideconstructor
 * @section design-system
 * @subcategory Atoms
 */
const Badge = styled_components_1.default.span `
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.grey40};
  color: ${({ outline, theme }) => (outline ? theme.colors.grey60 : theme.colors.white)};
  vertical-align: middle;
  font-family: ${({ theme }) => theme.font};
  display: inline;

  ${styled_system_1.space};
  ${styled_system_1.color};
  ${styled_system_1.typography};
  ${(props) => colorVariant(props)};
  ${sizeVariants};
  ${({ outline }) => (outline ? 'background: transparent;' : '')}
`;
exports.Badge = Badge;
Badge.defaultProps = {
    px: 'default',
    py: 'sm',
    fontSize: 'sm',
    bg: 'grey40',
    className: css_class_1.cssClass('Badge'),
};
exports.default = Badge;
