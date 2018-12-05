import { SelectedInterface } from '../../types/selector';

export class Selector {
  public members: string[] = [];
  private final: SelectedInterface[] = [];
  private selected: string[] = [];

  public constructor(members:string[]) {
    this.members = members;
  }

  /**
   * Primary tool for randomly picking members from
   * the members array and assigning them to other
   * members in the same array, preventing the same
   * member from getting itself.
   */
  public pick(): SelectedInterface[] {
    // Empty the selected member array and final choices array
    this.selected = this.members.slice();
    this.final = [];

    for (const[currentIndex] of this.members.entries()) {
      const random = this.getRandom();

      this.makeSelection(currentIndex, random);
    }

    return this.final;
  }

  public getOutput() { return this.final; }
  public getSelected() { return this.selected; }
  public getMembers() { return this.members; }

  /**
   * Get a random person
   */
  private getRandom(): number {
    return Math.floor(Math.random() * Math.floor(this.selected.length));
  }

  /**
   * 
   * @param currentIndex 
   * @param selectedIndex 
   */
  private makeSelection(currentIndex: number, selectedIndex: number) {
    const currentValue = this.members[currentIndex];
    const selectValue = this.selected[selectedIndex];

    // If the only remaining value is the last element in the original
    // array, we need to start over as that will cause a stack overflow.
    if (this.selected.length === 1 && this.selected[0] === this.members[this.members.length-1]) {
      this.pick();
    }
  
    // Can't have yourself.
    else if (currentValue === selectValue) {
      return this.makeSelection(currentIndex, this.getRandom());
    }
  
    // All is good in the world.
    else {
      this.final.push({
        'name': currentValue,
        'got': selectValue,
      });
  
      this.selected.splice(selectedIndex, 1);
  
      return selectedIndex;
    }
  }
}
