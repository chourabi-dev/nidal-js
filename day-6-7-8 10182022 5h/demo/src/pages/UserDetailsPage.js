import React from "react";
import { Navbar } from "../componenets/Navbar";

export default class UserDetailsPage extends React.Component{
    constructor(props){
        super(props);

        console.log(props);

        this.state = {
            id: props.match.params.id
        }
    }


    getDataFromServerByID(){
        // call http + id
    }


    render(){
        return(
            <div>
                <Navbar/>
                
                <h1>Loading user N° { this.state.id } ...</h1>
            </div>
        );
    }
}