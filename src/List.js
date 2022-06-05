import React from 'react'
import { Link } from 'react-router-dom';
export default function List(props){
  let dispbox={
  backgroundColor:"#fff",
  padding:"2rem",
}
let smol=new Date();
    return (
      <div>
        
      <section className="container" style={dispbox}>
        {props.fil.length==0?<h3>No Birthdays {props.day}</h3>:<h3>{props.day}'s {props.fil.length} Birthdays:</h3>}
        
        {props.fil.map((folk)=>{
          
            const {id,name,bday,image}=folk;
            
            return(
                <article key={id} className="folk"><div><img src={image} height="100px"/><span className='bdayclass'>{bday}</span></div><div><h2>{name}</h2><h4>{props.day=="Today"?<span>Turned</span>:<span>Turning</span>} {new Date().getYear()+1900-(Number(bday.substring(bday.length-4)))} {props.day=="All"?<span>this year</span>:<span>{props.day}</span>}!🎉</h4></div></article>
            )
        })
        }
        
        <Link to='/'>
        <button onClick={()=>{console.log("hihi")}}>todays</button>
            </Link>
        <Link to='/monlist'>
        <button onClick={()=>{console.log("hihi")}}>m all</button>
            </Link>
            <Link to='/tomolist'>
        <button onClick={()=>{console.log("hihi")}}>t all</button>
            </Link>
            <Link to='/list'>
        <button onClick={()=>{console.log("hihi")}}>d all</button>
            </Link>
</section>
        {/* <h1>{ props.folks[3].bday.substring(0,props.folks[3].bday.length-5)==date?"notnot":"not"}</h1>
        <h2>{date}</h2>
        <h3>{props.folks[3].bday.substring(0,props.folks[3].bday.length-5)}</h3> */}
      </div>
    );
}
