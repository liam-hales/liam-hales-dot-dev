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

    // Check if the key (lowercased)
    // includes the 'date'
    const isDate = key
      .toLowerCase()
      .includes('date');

    // If the value is a date then parse
    // he it with moment and return it
    if (isDate === true) {
      return moment.utc(value);
    }
  }

  return value;
};

export default dataTransformer;
