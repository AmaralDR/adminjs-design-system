"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.Navigation = void 0;
const react_1 = __importDefault(require("react"));
const navigation_styled_1 = require("./navigation-styled");
const navigation_element_wrapper_1 = require("./navigation-element-wrapper");
const label_1 = require("../../atoms/label");
/**
 * @load ./navigation.doc.md
 * @component
 * @subcategory Organisms
 * @hideconstructor
 * @see NavigationProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-organisms-navigation--default Storybook}
 * @new In version 3.3
 * @section design-system
 */
const Navigation = (props) => {
    const { label, elements } = props;
    return (react_1.default.createElement(navigation_styled_1.StyledNavigation, { px: "xl", py: "lg" },
        react_1.default.createElement(label_1.Label, { pl: "lg", mb: "md", uppercase: true }, label),
        react_1.default.createElement("ul", null, elements.map((element, id) => (react_1.default.createElement(navigation_element_wrapper_1.NavigationElementWrapper, Object.assign({ key: [id, element.href].join('-') }, element)))))));
};
exports.Navigation = Navigation;
exports.default = Navigation;
