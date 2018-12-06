import { assignMembers } from '../src/index';

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

describe('Primary Usage', () => {
	it('It should return a randomized array of members assigned to each other', () => {
		const output = assignMembers(members, 'name');

		expect(output).toHaveLength(4);
		expect(output[0]).toHaveProperty('name');
		expect(output[0]).toHaveProperty('got');
	});
});
