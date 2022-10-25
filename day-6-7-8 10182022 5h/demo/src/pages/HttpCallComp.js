import React from "react";

export default class HttpCallComp extends React.Component{


    constructor(props){
        super(props);
        console.log("constructor");

        this.state = {

            users:[],
            isLoading: false,
            error:false
        }
    }

    // LIFECYULE COMP

    componentDidMount(){
        // JSX is on the screeen
        console.log("mount");


        this.getDATAFromServer();
    }

    componentDidCatch(){
        // triggred when the comp has some error !!
        console.log("catched an error");
    }

    componentWillUnmount(){
        // the comp will Quit the screen !!! (ngOnDestroy)
        console.log("will unmount");
    }

    componentDidUpdate(){
        //  the state of the comp chnaged !!!!
        console.log("update");
    }




    getDATAFromServer(){

        this.setState({ isLoading: true })


        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
            .then(response => response.json())
            .then(result =>{
                console.log(result);
                this.setState({ users: result , isLoading: false})
            })
            .catch(error =>{
                this.setState({ error: true, isLoading: false })
            });
    }



    render(){
        return(
            <div>

                {
                    this.state.isLoading === true?
                    <div>
                    Please wait...
                </div>: null
                }

                {
                    this.state.error === true?
                    <div>
                    Someting went wrong please try again.
                </div>: null
                }
                


                <ul>
                {
                    this.state.users.map((u)=>{
                        return( 
                        <li key={ u.id }>
                            <h3>{ u.name }</h3>
                            <p><small>{ u.email }</small></p>
                        </li> );
                    })
                }
                </ul>
            </div>
        );
    }

}