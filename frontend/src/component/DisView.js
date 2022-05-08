import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


const genPDF = () => {
    const doc = new jsPDF({
        orientation: "landscape",
       
      });
    doc.setFontSize(20);
    doc.text("distance Details", 10,10);

    doc.autotable({
      html: 'content'
    })
    doc.save('distance Details.pdf');
  } 

const Dis_Menu = props => ( 
    
    <tr>
         <td>{props.DisMenu.Station_Name}</td>
        <td>{props.DisMenu.Distance}</td>
        <td>
            <Link to={"/DisEdit/"+props.DisMenu._id}>Edit</Link>
            &nbsp;&nbsp;&nbsp;
            <button className='btn2' onClick={() => deleteDisMenu(props.DisMenu._id)}>Delete</button>
            
        </td>
    </tr>
)



const deleteDisMenu = async (id) => {
    if (window.confirm("Are you sure you want to Delete?")) {
      //Alert logic
      //proceed
      try {
        await axios.delete(`http://localhost:4000/dis/delete/${id}`); //delete relavant item
        alert("Deleted");
        window.location.reload();
      } catch (error) {
        alert(error);
      }
    } else {
      alert("Discarded the process"); //if user pressed cancel, discard changes
    }
  }


export default class DisView extends Component {

    constructor(props) {
        super(props);
        this.state = {dis: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/dis/')
            .then(response => {
                this.setState({ dis: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    disMenu() {
        return this.state.dis.map(function(currentDisView, i){
            // eslint-disable-next-line react/jsx-pascal-case
            return <Dis_Menu DisMenu={currentDisView} key={i} />;
        })
    }



    render() {
        return (
          <div>
            <div className='row'>
            <div className='col sm-8'>
            <table className="table table-hover table-bordered">
                <thead  className="table-dark table-bg:  transparent;">
                    <tr>
                        <th>Station Name</th>
                        <th>Distance</th>
                        
                        <th></th>
                    </tr>
                </thead>
                <tbody>{this.disMenu()}</tbody>
            </table>
            </div>
            <div className='col sm-4'></div>
            </div>
            <button className=' btn btn-info btn3' onClick={() => genPDF()}>get Print</button>
           
</div>
        )
    }
}