/**
 *
 * Gives you the default styles for all "content" elements like:
 * ul, li, h1-h5 etc.
 *
 * ### Example
 *
 * ```typescript
 * import styled from 'styled-components'
 * import { contentCSS } from '@adminjs/design-system'
 *
 * const myComponent = styled`
 *   ${contentCSS};
 * `
 * ```
 *
 * @memberof module:@adminjs/design-system
 */
declare const contentCSS: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
export default contentCSS;
