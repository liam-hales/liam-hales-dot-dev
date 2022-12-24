/**
 * The colour palette used to describe
 * the colours for the app
 */
export enum ColourPalette {
  BLUE = '#66a2c6',
  WHITE = '#ffffff',
  GREY_400 = '#a1a1aa',
  GREY_600 = '#52525b',
  GREY_700 = '#3f3f46',
  GREY_800 = '#18181b',
  GREY_900 = '#0c0c0d',
}

/**
 * The size used to describe the
 * different screen sizes
 */
export enum ScreenSize {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}

/**
 * The query satus used for
 * the `useQuery` hook
 */
export enum QueryStatus {
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
  CV = 'cv',
  BLOG = 'blog',
  BRAND = 'brand',
}

/**
 * The navigation route used to describe
 * the route for each page of the app
 */
export enum NavRoute {
  HOME = '/',
  CV = '/cv',
  LIFE_TIMELINE = '/cv/life-timeline',
  SKILLS = '/cv/skills',
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
  CARET_RIGHT = 'CARET_RIGHT',
  ARROW_LEFT = 'ARROW_LEFT',
  ARROW_RIGHT = 'ARROW_RIGHT',
  MAGNIFYING_GLASS = 'MAGNIFYING_GLASS',
  CROSS = 'CROSS',
  TICK = 'TICK',
  COPY = 'COPY',
  ARROW_RIGHT_SQUARE = 'ARROW_RIGHT_SQUARE',
  COPYRIGHT = 'COPYRIGHT',
  LINKED_IN = 'LINKED_IN',
  STACK_OVERFLOW = 'STACK_OVERFLOW',
}

/**
 * The SVG icon ID used for the `Icon` component
 * to determine which SVG icon is rendered
 */
export enum SVGIconId {
  BUY_ME_COFFEE = 'BUY_ME_COFFEE',
  NOTION = 'NOTION',
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
 * The `Text` component element used to determine
 * what HTML element is used to render the text
 */
export enum TextElement {
  H1 = 'h1',
  H2 = 'h2',
  PARAGRAPH = 'body1',
}

/**
 * Describes each individual section of the logo
 * used for the `Logo` component
 */
export enum LogoSection {
  LETTER_L = 'LETTER_L',
  REVERSE_LETTER_L = 'REVERSE_LETTERL',
  BAR = 'BAR',
}

/**
 * Describes the code languages supported by the
 * `CodeSnippet` component for syntax highlighting
 */
export enum CodeLanguage {
  TS = 'ts',
  TSX = 'tsx',
}
