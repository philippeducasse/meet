import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { extractCollapsed } from "../api";
import { mockData } from "../mock-data";

describe('<Event /> component', () => {
    let EventWrapper, event
    beforeAll(() => {
        event = extractCollapsed(mockData);
        EventWrapper = shallow(<Event event= {event}/>)
    });
test('renders event name when collapsed', () => {
    expect(EventWrapper.find('.event-name')).toHaveLength(1);
});
test('renders event time when collapsed', () => {
    expect(EventWrapper.find('.event-time')).toHaveLength(1);
});
test('renders event time zone when collapsed', () => {
    expect(EventWrapper.find('.event-time-zone')).toHaveLength(1);
});
test('renders show details button', () => {
    expect(EventWrapper.find('.show-details-button')).toHaveLength(1);
});
test('clicking the show details button expands the event', () => {
    EventWrapper.find('.show-details-button').at(0).simulate('click');
    expect(EventWrapper.find('.event-description')).toBeVisible()
})
});
