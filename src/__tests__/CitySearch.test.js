import React from 'react';
import { shallow } from 'enzyme';
import CitySearch from '../CitySearch';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';

//this test checks whether there is ONE element with the classname City in the citysearch component
// and one test to check whether there is ONE element with classname "suggestions"

describe('<CitySeach /> component', () => {
    let locations, CitySeachWrapper;
    beforeAll(() => {
        locations = extractLocations(mockData)
        CitySeachWrapper = shallow(<CitySearch locations= {locations} />)
    });
    test('render text input', () => {
        expect(CitySeachWrapper.find('.city')).toHaveLength(1);
    });
    test('renders a list of suggestions', () => {
        expect(CitySeachWrapper.find('.suggestions')).toHaveLength(1);
    });
    test('renders text input correctly', () => {
        // this const defines that the state of the city should be that of "query"
        // so the city searched for has the state of query which the user is searching for
        const query = CitySeachWrapper.state('query')
        expect(CitySeachWrapper.find('.city').prop('value')).toBe(query);
    });
    test('change state when text innput changes', () => {
        CitySeachWrapper.setState({
            query: 'Munich'
        });
           // change value of eventObject to Berlin once the "change" event is called
        const eventObject = { target: { value: 'Berlin'}};
            // simulate() is then called on the .city element and takes two params, change and eventObject
        CitySeachWrapper.find('.city').simulate('change', eventObject);
        expect(CitySeachWrapper.state('query')).toBe('Berlin');
    });
    test('render list of suggestions correctly', () => {
        CitySeachWrapper.setState({suggestions: locations}); // sets state of suggestions to full list of locations
        const suggestions = CitySeachWrapper.state('suggestions');
        //compage the number of rendered suggestions to the number of suggestions in the state
        // +1 because we add the option "see all cities"
        expect(CitySeachWrapper.find('.suggestions li')).toHaveLength(suggestions.length + 1);
            for (let i = 0; i < suggestions.length; i+=1) { // rendered text is checked to see if it has been taken from state aswell
                expect(CitySeachWrapper.find('.suggestions li').at(i).text()).toBe(suggestions[i]);
            }
    });
    test('suggestion list match the query when changed', () => {
        CitySeachWrapper.setState({ query: '', suggestions: []});
        CitySeachWrapper.find('.city').simulate('change',
        {
            target: {value: 'berlin'},
        });
        const query = CitySeachWrapper.state('query');
        const filteredLocations = locations.filter((location) => {
            return location.toUpperCase().indexOf(query.toUpperCase()) > -1;
        });
        expect(CitySeachWrapper.state('suggestions')).toEqual(filteredLocations);
    });
    test('selecting a suggestion should change the query state', () => {
        CitySeachWrapper.setState({query: 'Berlin'});
        const suggestions = CitySeachWrapper.state('suggestions');
        CitySeachWrapper.find('.suggestions li').at(0).simulate('click');
        expect(CitySeachWrapper.state('query')).toBe(suggestions[0]);
    })
});