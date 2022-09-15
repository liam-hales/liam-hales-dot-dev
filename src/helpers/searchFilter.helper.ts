/**
 * Searches all values for `keys` within the `toSearch` object
 * against the `searchText` to find a match.
 *
 * Generic type `T` for the object to search and it's keys
 *
 * @param searchText The search text
 * @param toSearch The object to search
 * @param keys The keys to search within the `toSearch`
 * @returns Value which determins if the search is a match
 * @example
 *
 * const isMatch = searchFilter(searchText, toSearch, ['key']);
 * const filtered = items.filter((item) => searchFilter(searchText, item, ['key']));
 */
const searchFilter = <T extends Partial<Record<keyof T, unknown>>>(
  searchText: string,
  toSearch: T,
  keys: (keyof T)[],
): boolean => {

  // Reduce the keys and join the values
  // for said keys into one text string
  const text = keys
    .reduce((value, key) => `${value} ${toSearch[key]}`, '')
    .toLowerCase();

  // Make sure each word from the search text
  // is included in the text to search
  return searchText
    .toLowerCase()
    .split(' ')
    .every((word) => text.includes(word));
};

export default searchFilter;
