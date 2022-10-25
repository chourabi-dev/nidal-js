import React from "react";
import { Navbar } from "../componenets/Navbar";

export default class HomePage extends React.Component{
    constructor(props){
        super(props);
    }




    render(){
        return(
            <div>
                <Navbar/>
                
                <h1>Home page</h1>
            </div>
        );
    }
}