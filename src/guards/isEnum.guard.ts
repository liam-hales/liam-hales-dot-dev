/**
 * The `isEnum` type guard which checks if a given `value` belongs
 * to a specific `enum` and is therefore the correct type
 *
 * @param inEnum The `enum`
 * @param value The value to check
 * @returns A `boolean` which determins if the `value` is the correct type
 */
const isEnum = <T extends Record<keyof T, string>>(
  inEnum: T,
  value: unknown,
): value is T[keyof T] => {

  // Check if the value is one
  // of the enum values
  return Object
    .values(inEnum)
    .includes(value);
};

export default isEnum;
