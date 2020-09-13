import {shallow} from 'enzyme'
import CardList from './CardList'
import React from 'react'

it('should render cardlist component', () => {
	const mockRobots = [
		{
			id: 1,
			name: 'John Snow',
			username: 'JohnJohn',
			email: 'john@gmail.com',
		}
	]
	expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot()
})
