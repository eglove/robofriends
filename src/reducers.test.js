import {CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED} from './constants';

import * as reducers from './reducers';

describe('searchRobots', () => {
	const initialStateSearch = {
		searchField: '',
	}

	it('should return the initial state', function () {
		expect(reducers.searchRobots(undefined, {})).toEqual({searchField: ''})
	});

	it('should handle CHANGE_SEARCH_FIELD', function () {
		expect(reducers.searchRobots(initialStateSearch, {
			type: CHANGE_SEARCH_FIELD,
			payload: 'abc'
		})).toEqual({
			searchField: 'abc'
		})
	});
})

describe('requestRobots', () => {
	const initialStateRobots = {
		error: '',
		robots: [],
		isPending: false,
	}

	it('should return the initial state', function () {
		expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
	});

	it('should handle REQUEST_ROBOTS_PENDING action', function () {
		expect(reducers.requestRobots(initialStateRobots, {
			type: REQUEST_ROBOTS_PENDING,
			payload: {isPending: true},
		})).toEqual({
			error: '',
			robots: [],
			isPending: true,
		})
	});

	it('should handle REQUEST_ROBOTS_PENDING_SUCCESS action', function () {
		expect(reducers.requestRobots(initialStateRobots, {
			type: REQUEST_ROBOTS_SUCCESS,
			payload: [{
				id: '123',
				name: 'jon',
				email: 'bob@hi.com',
			}],
		})).toEqual({
			error: '',
			robots: [{
				id: '123',
				name: 'jon',
				email: 'bob@hi.com',
			}],
			isPending: false,
		})
	});

	it('should handle REQUEST_ROBOTS_FAILED action', function () {
		expect(reducers.requestRobots(initialStateRobots, {
			type: REQUEST_ROBOTS_FAILED,
			payload: 'Error!',
		})).toEqual({
			error: 'Error!',
			robots: [],
			isPending: false,
		})
	});
})
