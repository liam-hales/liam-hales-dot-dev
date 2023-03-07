import { headers } from 'next/headers';
import { getSelectorsByUserAgent } from 'react-device-detect';
import { DeviceType } from '../../types';

/**
 * The `useDevice` hook response
 */
interface UseDeviceResponse {
  readonly deviceType: DeviceType;
}

/**
 * Used to extract the device infomation
 * from the `user-agent` header
 *
 * _**NOTE:** This hook can only be used server-side_
 *
 * Using this hook will cause the route to be dynamic, the `headers` function used
 * within this hook relies on information that can only be known at request time
 *
 * @see [Next.js - Using Dynamic Functions](https://beta.nextjs.org/docs/rendering/static-and-dynamic-rendering#using-dynamic-functions)
 *
 * @returns The `useDevice` hook response
 * @example
 *
 * const { deviceType } = useDevice();
 */
const useDevice = (): UseDeviceResponse => {

  // Get the `user-agent` header from the server headers
  // Extract it's infomation using `react-device-detect`
  const userAgent = headers().get('user-agent') ?? '';
  const { isMobile } = getSelectorsByUserAgent(userAgent);

  return {
    deviceType: (isMobile === true) ? 'mobile' : 'desktop',
  };
};

export default useDevice;
