import React from 'react'; //react is imported because it is needed to test react components
import { render } from '@testing-library/react';
import App from '../App'; // have to import a component befolre testing it.
import EventList from '../EventList'; //still need to import this even though it's also included in App BUT WHY???
import CitySearch from '../CitySearch';


// this is a new group / scope
describe('<App /> component', () => {  // the name of the description is not important, here it is just saying that we are lookin at the <App> component
      // variable for rendering the component using the shallow rendering Enzyme API. Only this compoenent and nothign else 
        // will be rendered
    // included in beforeAll because is needed for each test, and therefore can just be run once at the begining
    test('renders list of events', () => {
        const AppDOM = render(<App />).container.firstChild;
        expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
      });
})
        // "How many EventList components exist inside the AppWrapper? we expect there to be 1"
    //     expect(AppWrapper.find(EventList)).toHaveLength(1); //the shallow render component is then called directly within the test itself
    // });
    // test('render CitySearch', () => { //this test simply checks that CitySearch component exists
    //     expect(AppWrapper.find(CitySearch)).toHaveLength(1);
    // });