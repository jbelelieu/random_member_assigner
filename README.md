# Random Member Assigner

Given an array, this tool will randomly assign one member in the array to another, ensuring that the same member never gets itself. Originally built for a secret santa operation!

# Usage

```
import { assignMembers } from 'random_member_assigner';

const members = [
	{
		id: '1',
		name: 'Member 1',
		email: 'member1@fake.fake'
	},
	{
		id: '2',
		name: 'Member 2',
		email: 'member2@fake.fake'
	},
	{
		id: '3',
		name: 'Member 3',
		email: 'member3@fake.fake'
	},
	{
		id: '4',
		name: 'Member 4',
		email: 'member4@fake.fake'
	}
];

// "members" represents the member array, "name" represents the key to use in the output array.
const output = assignMembers(members, 'name');

console.log(output);
/*
[ { name: 'Member 1', got: 'Member 2' },
  { name: 'Member 2', got: 'Member 3' },
  { name: 'Member 3', got: 'Member 4' },
  { name: 'Member 4', got: 'Member 1' } ]
*/
```