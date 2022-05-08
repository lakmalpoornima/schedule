import React, { Component } from 'react';
import axios from 'axios';

export default class DisAdd extends Component {

    constructor(props) {
        super(props);

        this.onChangeDistance = this.onChangeDistance.bind(this);
        this.onChangeStation_Name = this.onChangeStation_Name.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            Station_Name: '',
            Distance: ''
            
            }
    }

    onChangeDistance(e) {
        this.setState({
            Distance: e.target.value
        });
    }

    onChangeStation_Name(e) {
        this.setState({
            Station_Name: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        console.log(`Form submitted`);
        console.log(`Distance: ${this.state.Distance}`);
        console.log(`Station_Name: ${this.state.Station_Name}`);
    
    const newDistance ={
        Distance:this.state.Distance,
        Station_Name:this.state.Station_Name,
    };

    axios.post('http://localhost:4000/dis/add', newDistance)
            .then(res => console.log(res.data));

            this.setState({
                Station_Name: '',
                Distance: ''
                
            })


    }


    render() {
        return (
            <div>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
            <div className='row'>
            <div className='col'></div>
            <form  onSubmit={this.onSubmit}  className="col">
            <div className=" row">
                        <label className = 'lab'>Station_Name: </label>
                        &nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="col-sm-10"> 
                        <input  type="text"
                                className="form-control"
                                placeholder='Station Name'
                                value={this.state.Station_Name}
                                onChange={this.onChangeStation_Name}
                                required
                                />
            </div> </div>

            <div className=" row">
                        <label className = 'lab'>Distance: </label>
                        &nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="col-sm-10"> 
                        <input  type="text"
                                className="form-control"
                                placeholder='Distance from to Colombo'
                                value={this.state.Distance}
                                onChange={this.onChangeDistance}
                                required
                                />
            </div> </div> 
             
            <br></br>
            <input type="submit" value="Add" className="btn  btn1" />
            </form>
            <div className='col'></div>
            </div>
            </div>
        )
    }
}