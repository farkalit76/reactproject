import React, { Component } from 'react';

class SerachFlight extends Component {
    state = {  }

    handleDeparture = (e) => {
        console.log('handleDeparture-e:',e);
    }

    handleArrival = (e) => {
        console.log('handleArrival-e:',e);
    }

    render() { 
        return ( 
        <div>
            <form>
                <input type="text" name="fromLocation" placeholder="Departure airport" onClick={this.handleDeparture.bind(this)}/> &nbsp;
                <input type="text" name="fromLocation" placeholder="Arrival airport" onClick={this.handleArrival.bind(this)}/> &nbsp;
                <button type="submit" className="btn btn-sm" >Submit</button>
            </form>
        </div> );
    }
}
 
export default SerachFlight;