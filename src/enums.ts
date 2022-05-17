/**
 * The colour palette used to describe
 * the colours for the app
 */
export enum ColourPalette {
  WHITE = '#ffffff',
  BLACK = '#000000',
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
