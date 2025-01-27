"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.themeGet = exports.default = void 0;
const polished_1 = require("polished");
function themeGet(kind, value, offset) {
    return ({ theme }) => {
        const themeVal = value ? theme[kind][value] : theme[kind];
        if (themeVal && offset) {
            let offsetValue;
            if (typeof offset === 'string') {
                ([offsetValue] = polished_1.getValueAndUnit(offset));
            }
            else {
                offsetValue = offset;
            }
            const [pxValue, unit] = polished_1.getValueAndUnit(themeVal);
            return `${pxValue + offsetValue}${unit}`;
        }
        return themeVal;
    };
}
exports.default = themeGet;
exports.themeGet = themeGet;
/**
 *
 * Handy utility function which simplifies taking values from the {@link Theme}.
 *
 * ### Example
 *
 * ```javascript
 * import { Box, themeGet } from '@adminjs/design-system'
 *
 * const myComponent = styled(Box)`
 *   padding: ${themeGet('space', 'xl')};
 *   font: ${themeGet('font')};
 *   margin-top: ${themeGet('space', 'xl', -2)};
 *
 *   margin-bottom: ${(props) => themeGet('space', props.disabled ? 'xl' : 'xxl')(props)};
 * `
 *
 * ```
 *
 * @param {string} kind           One of the keys in the {@link Theme} interface. For example:
 *                                `fontWeights`
 * @param {string} [value]        Value for the key
 * @param {string | number} [offset]    optional offset. When you want to take xxl + 2pixels
 *                                you can do this by passing +2 as the offset.
 * @return {ThemeFunction}  function taking props as an argument
 *
 * @new in version 3.3
 * @function themeGet
 * @memberof Theme
 */
