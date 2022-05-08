import React, { Component } from 'react';
import axios from 'axios';

export default class ShedAdd extends Component {
    
    constructor(props) {
        super(props);

        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeTrain_Name = this.onChangeTrain_Name.bind(this);
        this.onChangeFrom = this.onChangeFrom.bind(this);
        this.onChangeDepature_Time = this.onChangeDepature_Time.bind(this);
        this.onChangeTo = this.onChangeTo.bind(this);
        this.onChangeArrive_Time = this.onChangeArrive_Time.bind(this);
        this.onChangeStations = this.onChangeStations.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Date: '',
            Train_Name: '',
            From:'',
            Depature_Time:'',
            To:'',
            Arrive_Time: '',
            Stations:'',
            

            }
    }
    
    onChangeDate(e) {
        this.setState({
            Date: e.target.value
        });
    }

    onChangeTrain_Name(e) {
        this.setState({
            Train_Name: e.target.value
        });
    }

    onChangeFrom(e) {
        this.setState({
            From: e.target.value
        });
    }

    onChangeDepature_Time(e) {
        this.setState({
            Depature_Time: e.target.value
        });
    }

    onChangeTo(e) {
        this.setState({
            To: e.target.value
        });
    }

    onChangeArrive_Time(e) {
        this.setState({
            Arrive_Time: e.target.value
        });
    }

    onChangeStations(e) {
        this.setState({
            Stations: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Date: ${this.state.Date}`);
        console.log(`Train_Name: ${this.state.Train_Name}`);
        console.log(`From: ${this.state.From}`);
        console.log(`Depature_Time: ${this.state.Depature_Time}`);
        console.log(`To: ${this.state.To}`);
        console.log(`Arrive_Time: ${this.state.Arrive_Time}`);
        console.log(`Stations: ${this.state.Stations}`);
        
        const newShedule = {
            Date:this.state.Date ,
            Train_Name: this.state.Train_Name,
            From:this.state.From,
            Depature_Time:this.state.Depature_Time,
            To:this.state.To,
            Arrive_Time:this.state.Arrive_Time,
            Stations:this.state.Stations,
        };

        
        
        axios.post('http://localhost:4000/railway/add', newShedule)
            .then(res => console.log(res.data));
        
        this.setState({
            Date: '',
            Train_Name: '',
            From:'',
            Depature_Time:'',
            To:'',
            Arrive_Time: '',
            Stations:'',
        })
    }
    
    
    
    
    
    render() {
        return (
            <div>
            <div class="row">
            <div class='col'></div>
            <form   onSubmit={this.onSubmit} className="col-sm-3">
            <div className="form-group row">
                        <label className = 'lab'>Date: </label>
                        &nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="col-sm-10"> 
                        <input  type="date"
                                className="form-control"
                                value={this.state.Date}
                                onChange={this.onChangeDate}
                                required
                                />
            </div> </div> 
            
            <div className="form-group row"> 
                        <label className = 'lab'>Train Name: </label>
                        &nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="col-sm-10">
                        <input  type="text"
                                className="form-control"
                                placeholder='Train Name'
                                value={this.state.Train_Name}
                                onChange={this.onChangeTrain_Name}
                                required
                                />
            </div></div>
            <div className="form-group row"> 
                        <label className = 'lab'>From: </label>
                        &nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="col-sm-10">
                        <input  type="text"
                                className="form-control"
                                placeholder='Station Name'
                                value={this.state.From}
                                onChange={this.onChangeFrom}
                                required
                                />
            </div></div>
            <div className="form-group row"> 
                        <label className = 'lab'>Depature Time: </label>
                        &nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="col-sm-10">
                        <input  type="time"
                                className="form-control"
                                value={this.state.Depature_Time}
                                onChange={this.onChangeDepature_Time}
                                required
                                />
            </div></div>
            <div className="form-group row"> 
                        <label className = 'lab'>To: </label>
                        &nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="col-sm-10">
                        <input  type="text"
                                className="form-control"
                                placeholder='Station Name'
                                value={this.state.To}
                                onChange={this.onChangeTo}
                                required
                                />
            </div></div>
            <div className="form-group row"> 
                        <label className = 'lab'>Arrive Time: </label>
                        &nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="col-sm-10">
                        <input  type="time"
                                className="form-control"
                                value={this.state.Arrive_Time}
                                onChange={this.onChangeArrive_Time}
                                required
                                />
            </div></div>
            <div className="form-group row"> 
                        <label className = 'lab'>Stations: </label>
                        &nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="col-sm-10">
                        <input  type="text"
                                className="form-control"
                                placeholder='Stations'
                                value={this.state.Stations}
                                onChange={this.onChangeStations}
                                required
                                />
            </div></div>
<br></br>
            <input type="submit" value="Add" className="btn btn1" />
            </form>
            <div class ='col'></div>
            </div>
            </div>
        
        )
    }
}