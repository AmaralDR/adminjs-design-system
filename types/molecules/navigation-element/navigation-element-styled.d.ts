import { NavigationElementProps } from './navigation-element-props';
export declare type StyledNavigationElementProps = Pick<NavigationElementProps, 'isSelected' | 'isOpen'>;
export declare const getBg: (props: StyledNavigationElementProps) => string;
export declare const getSelectedColor: (props: StyledNavigationElementProps) => string;
export declare const getHoverColor: (props: StyledNavigationElementProps) => string;
export declare const StyledNavigationElement: import("styled-components").StyledComponent<"section", import("styled-components").DefaultTheme, import("styled-system").SpaceProps<Required<import("styled-system").Theme<string | number>>, string | number | symbol> & Pick<import("styled-system").ColorProps<Required<import("styled-system").Theme<string | number>>, string | number | symbol>, "opacity" | "bg" | "backgroundColor"> & {
    color?: string | undefined;
} & import("styled-system").LayoutProps<Required<import("styled-system").Theme<string | number>>> & Pick<import("styled-system").FlexboxProps<Required<import("styled-system").Theme<string | number>>>, "order" | "alignItems" | "alignContent" | "justifyItems" | "justifyContent" | "flexWrap" | "flexDirection" | "flexGrow" | "flexShrink" | "flexBasis" | "justifySelf" | "alignSelf"> & import("styled-system").BorderProps<Required<import("styled-system").Theme<string | number>>, string | number> & import("styled-system").PositionProps<Required<import("styled-system").Theme<string | number>>> & import("styled-system").ShadowProps<Required<import("styled-system").Theme<string | number>>> & {
    flex?: string | number | boolean | (string | number | null)[] | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
    } | null | undefined;
    variant?: "grey" | "white" | "card" | undefined;
    animate?: boolean | undefined;
    className?: string | undefined;
} & Pick<NavigationElementProps, "isSelected" | "isOpen">, never>;