import { Selector } from '../../src/classes/Selector';

const testArray = [
  'jon',
  'andre',
  'christopher',
];

const testSelector = new Selector(testArray);

// -----

describe('Selector class', () => {
  it('should set the members array after instantiation', () => {
    expect(testSelector.getMembers()).not.toHaveLength(0);
    expect(testSelector.getMembers()).toHaveLength(testArray.length);
  });

  it('should reset the selected members/output arrays', () => {
    expect(testSelector.getSelected()).toHaveLength(0);
    expect(testSelector.getOutput()).toHaveLength(0);
  });

  it('should return a final array equal to the length of the member array', () => {
    const output = testSelector.pick();

    expect(output).toHaveLength(testArray.length);
  });
});