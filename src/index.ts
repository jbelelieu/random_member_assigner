/**
 * Random Member Assigner
 * 
 * Given an array, this tool will randomly assign one array member to another.
 * Originally built for a secret santa operation!
 * 
 * @author jbelelieu
 */

import { Selector } from './classes/Selector';
import { buildMemberArray } from './helpers/builders';

/**
 * 
 * @param input 
 * @param keyId 
 */
export function assignMembers(members: any[], keyId: string = 'name') {
	return new Selector(buildMemberArray(members, keyId)).pick();
}
