import './App.css';
import folks from "./data"
import List from "./List"
import Listl from "./Listl"
import { Link } from 'react-router-dom';
import React,{useState} from 'react' 
import { BrowserRouter as Router, Switch, Route,Routes, Redirect,} from "react-router-dom";
function App() {
  //const [folks,setfolks]=useState(data);
  
  ///calculating today's date
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}`;
    //calculating tomorrow's date
    const tomdate = `${current.getDate()+1}/${current.getMonth()+1}`;

    
    const mon = `${current.getMonth()+1}`;
    //array of objects conatining today's bday list
  const fil=folks.filter(item=>{
    return item.bday.substring(0,item.bday.length-5)==date;  
    });
    //array of objects conatining tomorrow's bday list
    const tom_fil=folks.filter(item=>{
      return item.bday.substring(0,item.bday.length-5)==tomdate; 
    });// 
    const mon_fil=folks.filter(item=>{
      //finding first occurence of / becuase date can be 1 or 2 digit- cannot write 2 or 3 as starting index directly
      let fo=item.bday.indexOf("/");
      return item.bday.substring(fo+1,item.bday.length-5)==mon; 
    });
  return (
    <>
    
    <Router>
      <h1>We're going to display the data elements here</h1>
    <Link to='/addbday'>
    <button type="submit" onClick={()=>{console.log("heythere")}}>Add new bday</button>
    </Link>
        <Routes>
          {/* Routing is done to basically link a path to a component, so when that path will be Linked to, the corresponding linked component will be called */}
          <Route path="/" element={<List fil={fil} day="Today"/>}/>
          <Route path="/list" element={<List fil={folks} day="All"/>}/>
          <Route path="/tomolist" element={<List fil={tom_fil} day="Tomorrow"/>}/>
          <Route path="/monlist" element={<List fil={mon_fil} day="This month"/>}/>
          <Route path="/addbday" element={<Listl/>}/>
        </Routes>
      </Router>
    {/* <h1>We're going to display the data elements here</h1>
    <section className="container" style={dispbox}>
      <h3>Today's {fil.length} Birthdays:</h3>
      <List fil={folks}/> */}
    {/* </section> */}
{/* filter based on current month, tomorrow  */}
{/* adding birthdays from UI
    dash days from today or dash month/s
    fav people bday side display
    adding people to fav
*/}
    </>
  );
}

export default App;
