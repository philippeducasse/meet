/**
 *
 * @param {*} events:
 * The following function should be in the “api.js” file.
 * This function takes an events array, then uses map to create a new array with only locations.
 * It will also remove all duplicates by creating another new array using the spread operator and spreading a Set.
 * The Set will remove all duplicates from the array.
 */


// function takes an array of events, extracts the location values from each event,
//  removes any duplicates, and returns an array containing only the unique locations.

export const extractLocations = (events) => {

    //  iterates over each element of the events array and creates a new array called extractLocations
    //  by extracting the location property from each event object. This means that the resulting extractLocations 
    //  array will contain only the location values from each event.
    var extractLocations = events.map((event) => event.location);
    var locations = [...new Set(extractLocations)]; // set object removes duplicates; .. spread syntax is used to
    // convert set object back into an array
    // ... spread syntax says "include all values of location into this new array"
    return locations;
}

export const extractCollapsed = (events) => {
    
    var eventName = events[0].summary;
    var eventTime = events[0].start.dateTime;
    var eventTimeZone = events[0].start.timeZome;
console.log({eventName, eventTime, eventTimeZone})
    return {eventName, eventTime, eventTimeZone}

}