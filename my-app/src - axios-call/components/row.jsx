import React, { Component } from "react";

class Row extends Component {

    constructor(props){
        super(props)
        
    }

    render(){
       
            let rows = this.props.data.map(item => {
                return  <div className="row" key={item.id}>
                    <div className="col-sm-2">{item.id}</div>
                    <div className="col-sm-2">{item.name}</div>
                    <div className="col-sm-4">{item.createdDate}</div>
                    <div className="col-sm-2">
                        <button type="button" onClick={this.props.onDelete.bind(this, item)} >
                            DEL
                        </button>
                    </div>
                </div>
            });


        return (rows);
    }
}

export default Row;