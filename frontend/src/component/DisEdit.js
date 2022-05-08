import React, { Component  } from 'react';
import axios from 'axios';



export default class DisEdit extends Component {
    
    constructor(props) {
        super(props);

        this.onChangeDistance = this.onChangeDistance.bind(this);
        this.onChangeStation_Name = this.onChangeStation_Name.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
       
        this.state = {
            Station_Name: '',
            Distance: ''
            
            }
    };

    
    
    componentDidMount(){
        axios.get('http://localhost:4000/dis/'+window.location.pathname.substring(9,))
            .then(Response =>{
                this.setState({
                    Station_Name:Response.data.Station_Name,
                    Distance:Response.data.Distance,
                    
                })
            })
            .catch(function (error){
                console.log(error);
            })
    }

    onChangeStation_Name(e){
        this.setState({
            Station_Name:e.target.value
        });
    }
    onChangeDistance(e){
        this.setState({
            Distance:e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        const obj = {
            Station_Name: this.state.Station_Name,
            Distance: this.state.Distance,
            
        };
        console.log(obj);
        axios.post('http://localhost:4000/dis/update/'+window.location.pathname.substring(9,), obj)
            .then(res => console.log(res.data));
        
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
            <form onSubmit={this.onSubmit} className="col">
            <br></br>
            <div className="form-group"> 
                        <label className = 'lab'>Station Name: </label>
                        <div className="col-sm-10">
                        <input  type="text"
                                className="form-control"
                                value={this.state.Station_Name}
                                onChange={this.onChangeStation_Name}
                                />
                                </div>
                    </div>
                    <div className="form-group"> 
                        <label className = 'lab'>Distance: </label>
                        <div className="col-sm-10">
                        <input  type="text"
                                className="form-control"
                                value={this.state.Distance}
                                onChange={this.onChangeDistance}
                                />
                                </div>
                    </div>
                    <div >
                    <br></br>
                        <input type="submit" value="update" className="btn  btn1"/>
                    </div>
                    <br></br>
            </form>
            <div className='col'></div>
            </div>
            </div>
        )
    }
}