'use client';

import { useEffect, useState } from 'react';
import { RenderType } from '../enums';

/**
 * The `useRender` hook response
 */
interface UseRenderResponse {
  readonly renderType: RenderType;
  readonly hydrated: boolean;
}

/**
 * Used to observe the current renderer being used
 * whether that be the client or the server
 *
 * @returns The `useRender` hook response
 * @example
 *
 * const { renderType, hydrated } = useRender();
 */
const useRender = (): UseRenderResponse => {

  const [hydrated, setHydrated] = useState<boolean>(false);

  // Check to see if `window` and the `document`
  // exists to determine the render type
  const type = (typeof window !== 'undefined' && window.document != null)
    ? RenderType.CLIENT_SIDE
    : RenderType.SERVER_SIDE;

  /**
   * Used to set the hydrated state to `true`
   * once the client has hydrated the `DOM`
   */
  useEffect(() => setHydrated(true), []);

  return {
    renderType: type,
    hydrated: hydrated,
  };
};

export default useRender;
