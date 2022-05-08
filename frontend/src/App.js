import React,{ Component} from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './component/Home';
import ViewBooking from './component/ViewBooking';
import ViewPayment from './component/ViewPayment';
import ShedAdd from './component/ShedAdd';
import ShedView from './component/ShedView';
import DisAdd from './component/DisAdd';
import DisView from './component/DisView'
import ShedEdit from './component/ShedEdit';
import DisEdit from './component/DisEdit';
import background from "../src/image/home.jpg";
import SearchTrain from './component/SearchTrain';


class App extends Component {
  render() {
    const myStyle={
      backgroundImage: `url(${background})`,
      height:'100vh',
      backgroundSize:'cover',
      backgroundRepeat: 'repeat',
      
  };


    return (
      <div style={myStyle}>
      <Router  >
        
        <div>
          <nav className="navbar navbar-light">
          
            <ul>
              <li>
                <Link to="/" className=" text-light">Home</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link className="text-light" to="searchTrain">Train search</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link className="text-light" to="ViewBooking">View Booking</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link className="text-white" to="ShedAdd">Add Schedule</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link className=" text-light" to="ShedView">View Schedule</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link className="text-light" to="DisAdd">Add Distance</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link className="text-light" to="DisView">View Distance</Link>
              </li>
            </ul>
            
          </nav>
        </div>
        
        <Routes>
    <Route path="/" element = {<Home/>} />
    <Route path="/ViewBooking" element ={<ViewBooking/>} exact />
    <Route path="/ViewPayment" element ={<ViewPayment/>} exact/>
   <Route path ="/ShedAdd" element ={<ShedAdd/>} exact/>
   <Route path ="/ShedView" element ={<ShedView/>} exact/>
   <Route path ="/DisAdd" element ={<DisAdd/>} exact/>
   <Route path ="/DisView" element ={<DisView/>} exact/>
   <Route path ="/ShedEdit/:id" element ={<ShedEdit/>} exact/>
   <Route path ="/DisEdit/:id" element ={<DisEdit/>} exact/>
   <Route path ="/SearchTrain" element = {<SearchTrain/>} exact/>
    </Routes>
        </Router>
        </div>
    );
  }}
export default App;
