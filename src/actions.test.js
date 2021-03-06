import * as actions from './actions'
import configureMockStore from 'redux-mock-store'
import thunkMiddleWare from 'redux-thunk'
import {CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING} from './constants'

const mockStore = configureMockStore([thunkMiddleWare])

it('should create an action to search robots', function () {
	const text = 'noodle'
	const expectedAction = {
		type: CHANGE_SEARCH_FIELD,
		payload: text,
	}
	expect(actions.setSearchField(text)).toEqual(expectedAction)
})

it('should request robots API', function () {
	const store = mockStore()
	store.dispatch(actions.requestRobots())
	const action = store.getActions()

	const expectedAction = {
		type: REQUEST_ROBOTS_PENDING,
	}
	expect(action[0]).toEqual(expectedAction)
})
