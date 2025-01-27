import { TypographyProps } from 'styled-system';
import { InputProps } from './input';
/**
 * Prop Types of a TextArea component.
 * It extends all {@link SpaceProps}, {@link TypographyProps} and {@link LayoutProps}
 * @memberof TextArea
 * @alias TextAreaProps
 * @property {string} [...] All props default to _textarea_ html component like `onChange`,
 *                          `value` etc.
 * @property {string} [...] Props from {@link SpaceProps}, {@link TypographyProps}
 *                          and {@link LayoutProps} + they extend {@link InputProps}
 */
export declare type TextAreaProps = TypographyProps & InputProps;
/**
 * @classdesc
 *
 * <img src="components/textarea.png" />
 *
 * Wrapped `textarea` html element.
 *
 * ### Usage
 *
 * ```javascript
 * import { TextArea, TextAreaProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-textarea--default Storybook}
 * @see TextAreaProps
 * @hideconstructor
 * @example
 * return (
 *   <Box p="xl">
 *      <Label htmlFor="textarea1">Some example label</Label>
 *      <TextArea id="textarea1" width={1/2} />
 *   </Box>
 * )
 * @section design-system
 */
declare const TextArea: import("styled-components").StyledComponent<"textarea", import("styled-components").DefaultTheme, TextAreaProps, never>;
export { TextArea };
export default TextArea;
