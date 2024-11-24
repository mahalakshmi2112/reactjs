import React from "react";
import Axios from "axios";
export default class UserList extends React.Component{
    state = {
        persons : []
    }




componentDidMount(){
    console.log("User Data fetch from server")
    //Axios.get("https://jsonplaceholder.typicode.com/users")
    Axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res =>{
        const persons =res.data;
        this.setState({persons});
        console.log(persons);
    })
}


render()
{
    console.log("Data Renderd in UserList Component")
return(
<ul>
    {this.state.persons.map(person =><li>{person.name}</li>)}
    </ul>
)
}
}