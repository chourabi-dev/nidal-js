import React from "react";
import { Navbar } from "../componenets/Navbar";

export default class AboutPage extends React.Component{
    constructor(props){
        super(props);
    }




    render(){
        return(
            <div>
                <Navbar/>
                
                <h1>About page</h1>
            </div>
        );
    }
}