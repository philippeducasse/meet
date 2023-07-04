import React, { Component } from "react";

//when event is collapsed: date, time, timezone, event name, location, show details button
// when event is expanded: same as above + "about event": link to details on google calendar, short description, hide details button

class Event extends Component {
  state = {
    collapsed: true,
  }
  expandButtonClicked = () => {
    this.setState({
      collapsed: false
    })
  }
  hideButtonClicked = () => {
    this.setState({
      collapsed: true
    })
  }
  render() {
    const {collapsed} = this.state
    let eventName = this.props.event.summary
    let eventTime = this.props.event.start.dateTime
    let eventTimeZone = this.props.event.start.timeZone
    return (
      <div>
        <h4 className="event-name"> {eventName}</h4>
        <p className="event-time"> {eventTime}</p>
        <p className="event-time-zone"> {eventTimeZone}</p>

        {/* all this code should be inside a ternary operation 
          
        */}
        <button onClick={this.expandButtonClicked} className="show-details-button">Show details</button>
        {!collapsed &&
          <div> <p className="event-description">description</p>
            <p className="event-link"> Event Link</p>
            <button onClick={this.hideButtonClicked} className="hide-details-button"> Hide details</button>
          </div>
        }
        </div>
    )
  }
}
export default Event;