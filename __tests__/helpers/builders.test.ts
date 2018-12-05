import { buildMemberArray } from '../../src/helpers/builders';

const testMemberArray = [{
  "name": "Member 1",
  "otherData": "Member 1 Fake Data 1"
}, {
  "name": "Member 2",
  "otherData": "Member 2 Fake Data 1"
}];

// -----

describe('Helpers / Builders', () => {
  it('It should build an array of strings from an array of objects', () => {
    const output = buildMemberArray(testMemberArray, "name");
    
    expect(output).not.toHaveLength(0);
    expect(output).toHaveLength(testMemberArray.length);
  });
});
