import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../componenets/Navbar";

export default class UsersPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            users:[
                {  id:1 , name:'chourabi taher'  },
                {  id:2 , name:'demo user'  },
                
            ]
        }
    }




    render(){
        return(
            <div>
                <Navbar/>
                
                <h1>Users page</h1>



                <ul>
                    {
                        this.state.users.map((u)=>{
                            return <li key={ u.id } >
                                <Link to={ '/users/details/'+u.id }>more details</Link>
                            </li>
                        })
                    }
                </ul>
            </div>
        );
    }
}