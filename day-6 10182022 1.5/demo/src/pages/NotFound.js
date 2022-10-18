import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../componenets/Navbar";

export default class NotFound extends React.Component{
    constructor(props){
        super(props);
    }




    render(){
        return(
            <div>
                <Navbar />
                

                <h1 style={{ textAlign:'center' }}>404</h1> 

                <p style={{ textAlign:'center' }}>
                    Back to <Link to="/home">home page</Link>
                </p>
            </div>
        );
    }
}