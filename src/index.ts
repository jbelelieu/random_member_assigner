import * as members from '../data/members.json';
import { Selector } from './classes/Selector';
import { buildMemberArray } from './helpers/builders';

// Build a member array compatible with Selector class.
const memberArray = buildMemberArray(members, 'name');

// Randomize which member got which member
const selected = new Selector(memberArray).pick();

console.log(selected);
