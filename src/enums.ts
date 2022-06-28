/**
 * The app environment used to describe what
 * environment the app is running in
 */
export enum Env {
  LOCAL = 'LOCAL',
  DEPLOYED = 'DEPLOYED',
}

/**
 * The colour palette used to describe
 * the colours for the app
 */
export enum ColourPalette {
  WHITE = '#ffffff',
  BLACK = '#000000',
  GREY = '#aaaaaa',
  DARK_GREY = '#0e0e0e',
  BLUE = '#66a2c6',
}

/**
 * The size used to describe the
 * different screen sizes
 */
export enum ScreenSize {
  EXTRA_SMALL = 'xs',
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
  EXTRA_LARGE = 'xl',
}

/**
 * The query satus used for
 * the `useQuery` hook
 */
export enum QueryStatus {
  PENDING = 'PENDING',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

/**
 * The navigation key used for the `TopNav`
 * and `BottomNav` components
 */
export enum NavKey {
  HOME = 'home',
  BLOG = 'blog',
  CV = 'cv',
  BRAND = 'brand',
}

/**
 * The navigation route used to describe
 * the route for each page of the app
 */
export enum NavRoute {
  HOME = '/',
  CV = '/cv',
  BLOG = '/blog',
  BRAND = '/brand',
}

/**
 * The icon ID used for the `Icon` component
 * to determine which icon is rendered
 */
export enum IconId {
  HOME = 'HOME',
  DOCUMENT = 'DOCUMENT',
  MESSAGE = 'MESSAGE',
  PAINT_BRUSH = 'PAINT_BRUSH',
  PAINT_FILL = 'PAINT_FILL',
  CODE = 'CODE',
  SERVER = 'SERVER',
  ENVELOPE = 'ENVELOPE',
  LINKED_IN = 'LINKED_IN',
  STACK_OVERFLOW = 'STACK_OVERFLOW',
}

/**
 * The `Box` component direction used to determine
 * how the content is displayed along the main axis
 */
export enum BoxDirection {
  ROW = 'row',
  COLUMN = 'column',
}

/**
 * The `Box` component alignment used to determine
 * how the content is displayed along the cross axis
 */
export enum BoxAlignment {
  START = 'flex-start',
  CENTER = 'center',
  END = 'flex-end',
}

/**
 * The `Box` component content justification used to determine
 * how the content is justified along the main axis
 */
export enum BoxJustify {
  START = 'flex-start',
  END = 'flex-end',
  CENTER = 'center',
  SPACE_BETWEEN = 'space-between',
}

/**
 * The `Text` component` appearance used to determine
 * the colour and opacity of the text
 */
export enum TextAppearance {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  SUBTLE = 'SUBTLE',
}

/**
 * The `Text` component` element used to determine
 * what HTML element is used to render the text
 */
export enum TextElement {
  H1 = 'h1',
  PARAGRAPH = 'body1',
}
