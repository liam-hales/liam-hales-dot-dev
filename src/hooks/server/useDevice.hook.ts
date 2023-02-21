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
