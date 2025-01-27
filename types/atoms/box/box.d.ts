import { SpaceProps, LayoutProps, FlexboxProps, BorderProps, PositionProps, ShadowProps } from 'styled-system';
import { ColorProps } from '../../utils/color-props';
declare type FlexboxFlexProp = boolean | FlexboxProps['flex'];
/**
 * @load ./box-props.doc.md
 * @memberof Box
 * @alias BoxProps
 * @property {string} [...] Other props from {@link SpaceProps}, {@link ColorProps},
 *                          {@link LayoutProps}, {@link FlexboxProps},
 *                          {@link PositionProps} and {@link BorderProps}.
 */
export declare type BoxProps = SpaceProps & ColorProps & LayoutProps & Omit<FlexboxProps, 'flex'> & BorderProps & PositionProps & ShadowProps & {
    /** If box should be rendered as flex. You can pass boolean or FlexboxProps['flex'] */
    flex?: FlexboxFlexProp;
    /** Box variants */
    variant?: 'grey' | 'white' | 'card';
    /** If set to true it makes css changes as 500ms transitions */
    animate?: boolean;
    /** Optional class name passed down to the wrapper */
    className?: string;
};
/**
 * @load ./box.doc.md
 * @hideconstructor
 * @component
 * @subcategory Atoms
 * @section design-system
 * @see BoxProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-box--simple-white-gray-wrapper StoryBook}
 */
declare const Box: import("styled-components").StyledComponent<"section", import("styled-components").DefaultTheme, BoxProps, never>;
export { Box };
export default Box;
