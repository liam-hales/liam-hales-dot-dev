import moment from 'moment';

/**
 * Used with `JSON.parse` to transform the data
 * parsing any dates into `Moment` objects
 *
 * @param key The key
 * @param value The value for the `key`
 * @returns The formatted value
 * @example
 *
 * const data = JSON.parse(response, dataTransformer);
 */
const dataTransformer = (
  key: string,
  value: unknown,
): unknown => {

  // Check if the value is a string
  if (typeof value === 'string') {

    // Check if the key includes 'Date'
    // If so then parse the value with moment and return it
    if (key.includes('Date') === true) {
      return moment.utc(value);
    }
  }

  return value;
};

export default dataTransformer;
