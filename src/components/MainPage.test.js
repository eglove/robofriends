import {shallow} from 'enzyme'
import MainPage from './MainPage'
import React from 'react'

let wrapper
beforeEach(() => {
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: '',
		isPending: false,
	}
	wrapper = shallow(<MainPage {...mockProps} />)
})

it('should render mainPage', function () {
	expect(wrapper).toMatchSnapshot()
})

it('should filter robots correctly', function () {
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [{
			id: 3,
			name: 'Jon',
			email: 'john@gmail.com'
		}],
		searchField: '',
		isPending: false,
	}

	const wrapper = shallow(<MainPage {...mockProps} />)
	expect(wrapper.instance().filterRobots([])).toEqual([{
		id: 3,
		name: 'Jon',
		email: 'john@gmail.com'
	}])
})

it('should filter robots correctly', function () {
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [{
			id: 3,
			name: 'Jon',
			email: 'john@gmail.com'
		}],
		searchField: 'a',
		isPending: false,
	}

	const filteredRobots = []
	const wrapper = shallow(<MainPage {...mockProps} />)
	expect(wrapper.instance().filterRobots([])).toEqual(filteredRobots)
})
