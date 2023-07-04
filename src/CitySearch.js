import React, { Component } from 'react';


class CitySearch extends Component {
    //this defines the state of the component
    state = {
        query: '',
        suggestions: [],
      }
    //   takes the value from the input and updates the state of query based on that value.
    handleInputChanged = (event) => {
        const value = event.target.value;
        //creates a new array called suggestions by filtering the locations array
        const suggestions = this.props.locations.filter((location) => { //locations array is created thanks to extractLocations in API.js
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
            //this checks if the value is present within the locations string
            // as soon as you use this.props syntax means that this component will take props
        });
        this.setState({
            query: value,
            suggestions
         });
    }
    handleItemClicked = (suggestion) => {
        this.setState({ 
            query: suggestion
        });
    }
    render () {
        return (
            <div className="CitySearch">
                <input 
                type = "text"
                className="city"
                value={this.state.query}
                onChange={this.handleInputChanged}
                />
                <ul className="suggestions">
                    {this.state.suggestions.map((suggestion) => (
                       <li key = {suggestion}
                       onClick = {() => this.handleItemClicked(suggestion)}
                       >
                        {suggestion}
                        </li> 
                    ))}
                        <li key = 'all'>
                            <b>See all cities</b>
                        </li>
                    
                </ul>
            </div>
        );
    }
}

export default CitySearch;