import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import relativeTime from 'dayjs/plugin/relativeTime';

/**
 * The `useDate` hook response
 */
interface UseDateResponse {
  /**
   * Creates a new `dayjs` UTC date set
   * to the current date and time
   */
  readonly utc: typeof dayjs.utc;

  /**
   * Creates a new `dayjs` UTC date
   * from a specified date `value`
   */
  readonly from: (value: Date | string) => Dayjs;
}

/**
 * Provides functions used to create
 * `dayjs` date objects.
 *
 * Extends `dayjs` and applies the `utc`
 * and `relativeTime` plugins
 *
 * @returns The `useDate` hook response
 */
const useDate = (): UseDateResponse => {

  // Apply the Day.js UTC and relative time plugins
  dayjs.extend(utc);
  dayjs.extend(relativeTime);

  return {
    utc: dayjs.utc,
    from: (value: Date | string) => dayjs.utc(value),
  };
};

export default useDate;
