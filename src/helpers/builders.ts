/**
 * Builds an array of strings compatible with the Selector class.
 * 
 * @param memberArray 
 */

export function buildMemberArray(initialMemberArray: Array<any>, matchKey: string): string[] {
  const tempMemberArray = [];

  for (const entry of initialMemberArray) {
    tempMemberArray.push(entry[matchKey]);
  }

  return tempMemberArray;
}
