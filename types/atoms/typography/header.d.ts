import { TypographyProps, SpaceProps } from 'styled-system';
/**
 * Prop Types of an Header components.
 * Apart from all props for a standard hx elements it extends
 * {@link TypographyProps} and {@link SpaceProps}
 *
 * @memberof Header
 * @alias HeaderProps
 * @property {string} [...] Other props from {@link TypographyProps}, {@link SpaceProps}
 */
export declare type HeaderProps = TypographyProps & SpaceProps;
declare const H1: import("styled-components").StyledComponent<(props: any) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
declare const H2: import("styled-components").StyledComponent<(props: any) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
declare const H3: import("styled-components").StyledComponent<"h3", import("styled-components").DefaultTheme, HeaderProps, never>;
declare const H4: import("styled-components").StyledComponent<(props: any) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
declare const H5: import("styled-components").StyledComponent<(props: any) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
declare const H6: import("styled-components").StyledComponent<(props: any) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
/**
 * @load ./header.doc.md
 * @component
 * @subcategory Atoms
 * @see HeaderProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-header--default Storybook}
 * @hideconstructor
 * @section design-system
 */
declare const Header: any;
export { Header as default, Header, H1, H2, H3, H4, H5, H6, };
