import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


  
const Shed_Menu = props => ( 

   

    <tr>
        <td>{props.ShedMenu.Date}</td>
        <td>{props.ShedMenu.Train_Name}</td>
        <td>{props.ShedMenu.From}</td>
        <td>{props.ShedMenu.Depature_Time}</td>
        <td>{props.ShedMenu.To}</td>
        <td>{props.ShedMenu.Arrive_Time}</td>
        <td>{props.ShedMenu.Stations}</td>
        
       
        <td>
       
            <Link to={"/ShedEdit/"+props.ShedMenu._id}>Edit</Link>
            &nbsp;&nbsp;
           
            <button className='btn2' onClick={() => deleteShedMenu(props.ShedMenu._id)}>Delete</button>
            
        </td>
        
    </tr>
)

const deleteShedMenu = async (id) => {
    if (window.confirm("Are you sure you want to Delete?")) {
      //Alert logic
      //proceed
      try {
        await axios.delete(`http://localhost:4000/railway/delete/${id}`); 
        alert("Deleted");
        window.location.reload();
      } catch (error) {
        alert(error);
      }
    } else {
      alert("Discarded the process"); 
    }
  }
//******************************* */



export default class ShedView extends Component {

    constructor(props) {
        super(props);
        this.state = {railway: []};
    }

    handleSearchArea=(e) =>{
        const SearchKey = e.currentTarget.value;
        axios.get("/").then(res =>{
          if(res.data.success){
            this.filterData(res.data.ShedView,SearchKey)
          }
        });
    }

    filterData(ShedMenu,SearchKey){
        const result = ShedMenu.filter((ShedMenu)=>  
        ShedMenu.Date.toLowerCase().includes(SearchKey)||   
        ShedMenu.Train_Name.toLowerCase().includes(SearchKey)||   
        ShedMenu.From.toLowerCase().includes(SearchKey)||
        ShedMenu.Depature_Time.toLowerCase().includes(SearchKey)|| 
        ShedMenu.To.toLowerCase().includes(SearchKey)|| 
        ShedMenu.Arrive_Time.toLowerCase().includes(SearchKey)|| 
        ShedMenu.Stations.toLowerCase().includes(SearchKey)   
      )
      
      this.setState({ShedMenu:result})
      
      
      
      }

    componentDidMount() {
        axios.get('http://localhost:4000/railway/')
            .then(response => {
                this.setState({ railway: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    shedMenu() {
        return this.state.railway.map(function(currentShedView, i){
            // eslint-disable-next-line react/jsx-pascal-case
            return <Shed_Menu ShedMenu={currentShedView} key={i} />;
        })
    }

    render() {
        return (
            
            <div>
            <div>
            <div className="col-lg-3 mt-2 mb-2">
                    <input className="form-control"
                    type="search"
                    placeholder="Search"
                    name="searchQue"
                    onChange={this.handleSearchArea}>
                    </input>
                    </div>
            </div>
            <table className="table table-hover table-bordered">
                <thead className="table-dark table-bg:  transparent;">
                    <tr>
                        <th>Date</th>
                        <th>Train Name</th>
                        <th>From</th>
                        <th>Departure Time</th>
                        <th>To</th>
                        <th>Arrive Time</th>
                        <th>Stations</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.shedMenu()}
                </tbody>
            </table>

            
            </div>
        )
    }
}