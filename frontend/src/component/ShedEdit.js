import React, { Component } from 'react';
import axios from 'axios';

export default class ShedEdit extends Component {


    constructor(props) {
        super(props);

        
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeTrainName = this.onChangeTrainName.bind(this);
        this.onChangeDepatureTime = this.onChangeDepatureTime.bind(this);
        this.onChangeFrom = this.onChangeFrom.bind(this);
        this.onChangeArrivalTime = this.onChangeArrivalTime.bind(this);
        this.onChangeTo = this.onChangeTo.bind(this);
        this.onChangeStation = this.onChangeStation.bind(this);


        this.state = {
            Date: '',
            Train_Name: '',
            From: '',
            Depature_Time: '',
            To: '',
            Arrive_Time: '',
            Stations: '',
           
        }
    }

    componentDidMount(){
        axios.get('http://localhost:4000/railway/'+window.location.pathname.substring(10,))
            .then(Response =>{
                this.setState({
                    Date:Response.data.Date,
                    Train_Name:Response.data.Train_Name,
                    From:Response.data.From,
                    Depature_Time:Response.data.Depature_Time,
                    To:Response.data.To,
                    Arrive_Time:Response.data.Arrive_Time,
                    Stations:Response.data.Stations,
                })
            })
            .catch(function (error){
                console.log(error);
            })
    }

    

    onChangeDate(e){
        this.setState({
            Date:e.target.value
        });
    }
    onChangeTrainName(e){
        this.setState({
            Train_Name:e.target.value
        });
    }

    onChangeDepatureTime(e){
        this.setState({
            Depature_Time:e.target.value
        });
    }
    onChangeFrom(e){
        this.setState({
            From:e.target.value
        });
    }
    onChangeArrivalTime(e){
        this.setState({
            Arrive_Time:e.target.value
        });
    }
    onChangeTo(e){
        this.setState({
            To:e.target.value
        });
    }
    onChangeStation(e){
        this.setState({
            Stations:e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        const obj = {
            Date: this.state.Date,
            Train_Name: this.state.Train_Name,
            From: this.state.From,
            Depature_Time: this.state.Depature_Time,
            To: this.state.To,
            Arrive_Time: this.state.Arrive_Time,
            Stations:this.state.Stations,
        };
        console.log(obj);
        axios.post('http://localhost:4000/railway/update/'+window.location.pathname.substring(10,),obj)
            .then(res => console.log(res.data));
    }


    render() {
        return (
            <div>
             
                <h3 align="center">Update Schedule Train Table</h3>
                <div>
            <div className="row">
            <div className='col'></div>
                <form onSubmit={this.onSubmit} className="col-sm-3">
                    <div className="form-group row"> 
                        <label className = 'lab'>Date: </label>
                        &nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="col-sm-10">
                        <input  type="Date"
                                className="form-control"
                                value={this.state.Date}
                                onChange={this.onChangeDate}
                                required
                                /></div>
                    </div>
                    <div className="form-group row">
                        <label className = 'lab'>Train Name: </label>
                        &nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="col-sm-10">
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.Train_Name}
                                onChange={this.onChangeTrainName}
                                required
                                /></div>
                    </div>
                    <div className="form-group row">
                        <label className = 'lab'>Departure Time: </label>
                        &nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="col-sm-10">
                        <input 
                                type="time" 
                                className="form-control"
                                value={this.state.Depature_Time}
                                onChange={this.onChangeDepatureTime}
                                required
                                /></div>
                    </div>
                    <div className="form-group row">
                        <label className = 'lab'>From: </label>
                        &nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="col-sm-10">
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.From}
                                onChange={this.onChangeFrom}
                                required
                                /></div>
                    </div>
                    <div className="form-group row">
                        <label className = 'lab'>Arrive Time: </label>
                        &nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="col-sm-10">
                        <input 
                                type="time" 
                                className="form-control"
                                value={this.state.Arrive_Time}
                                onChange={this.onChangeArrivalTime}
                                required
                                /></div>
                    </div>
                    <div className="form-group row">
                        <label className = 'lab'>To: </label>
                        &nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="col-sm-10">
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.To}
                                onChange={this.onChangeTo}
                                required
                                /></div>
                    </div>
                    <div className="form-group row">
                        <label className = 'lab'>Stations: </label>
                        &nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="col-sm-10">
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.Stations}
                                onChange={this.onChangeStation}
                                required
                                />
                                </div>
                    </div>
                    <br></br>
                    <div className="form-group ">
                        <input type="submit" value="update" className="btn btn-primary" />
                    </div>
                    </form>
                    <div className ='col'></div>
                    </div>
                    </div>
  
            
            </div>
        )
    }
}