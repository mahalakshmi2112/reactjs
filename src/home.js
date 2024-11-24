 import React from "react";
import "./home.css"


function Home(){

    
    
       


    return(
        <div >
            
            
            <div className="img">
            <div className="fullcon">
            <div className="table1">
                <div className="details">
                    <h1 className="book">Book a Hotel room</h1>
                    <form>
                    <table>
                        <tr>
                  <td> Name:</td>
                  <td> <input className="text" type="text" name="name"  placeholder="Enter Name" required="enter"/></td></tr>
                <tr>  <td> Check-in:</td>
                <td> <input className="text" type="date" name="check" placeholder="Check-in"/></td></tr>
                 <tr> <td> Check-out:</td>
                 <td><input className="text"  type="date" name="checkout" placeholder="Check-out"/></td></tr>
                <tr> <td> Adults:</td>
                <td><input className="text" type="number" name="adult" placeholder="Adults"/></td></tr> 
                  <tr> <td>Childrens:</td>
                  <td><input className="text" type="number" name="children" placeholder="Childrens"/></td></tr>
                  <tr> <td>Rooms:</td>
                  <td><input className="text" type="number" name="room" placeholder="Rooms"/></td></tr>
                 <tr><td>city Name:</td><select className="text" >
                     <option>----select option---</option>
                     <option>Chennai</option>
                     <option>Madurai</option>
                     <option>Bangalore</option>
                     <option>coimbatore</option>
                     <option>Delhi</option>
                     <option>coorg</option>
                     <option>Kerala</option>
                     <option>Hyderbad</option>
                    </select></tr>

                    <tr> <td> Phonenumber:</td>
                <td><input className="text" type="number" name="Phonenumber" placeholder=" Enter Phonenumber"/></td></tr> 
                  
                  
                   </table>
                   </form>
                   <button   className="submit" type="submit" value="submit">Submit</button>
                    </div>
           </div>
                <div>
                <h1 className="discover">Discover the perfect balance of <br/>harmony and comfort</h1>
                <p className="client">we are focused on providing our client with the highest level of quality and <br/>excellent customer support.</p>
                </div>
                
                </div>

            </div>

            
            </div>
    
    
    )
}
export default Home;