import "./contact.css";

function Contact(){
    return(
        <div>
            
            <img className="contact" src="contact.jpeg" alt=""/>
            <div>
               <h1 className="us">WOW STAY Hotels Ltd.</h1>
               
               <tr >
                  <td className="con1"> Address:</td>
                  <td><p className="con2">Asset No.6,aerocity Hospitality District,IGI Airport<br/>Chennai,110037,India</p></td></tr>
                 <tr>
                  <td className="con1"> Corporate office:</td>
                  <td><p className="con2">011 46050101</p></td></tr>
                  <tr>
                  <td className="con1"> For Room Reservations:</td>
                  <td><p className="con2">+91 9911701701</p></td></tr>
                  <tr>
                  <td className="con1"> Fax:</td>
                  <td><p className="con2">+91 1146050110</p></td></tr>
                  <tr>
                  <td className="con1"> Email:</td>
                  <td><p className="con2">reservation@wowstayhotels.com</p></td></tr>
            </div>
        </div>
    )
}
export default Contact;