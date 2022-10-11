import React from "react";
import ArticleBlog from "./componenets/Article";
import { ButtonLike } from "./componenets/ButtonLike";
import Contact from "./componenets/Contact";
import Navbar from "./componenets/Navbar";
import ToggleButton from "./componenets/ToggleButton";

/**
 * function App() {

  const  elementJSX = <h1>hello world</h1>


  const data = [
    { title:"chourabi taher 1", email:"tchourabi@gmail.com" },
    { title:"chourabi taher 2", email:"tchourabi@gmail.com" },
    { title:"chourabi taher 3", email:"tchourabi@gmail.com" },
    { title:"chourabi taher 4", email:"tchourabi@gmail.com" },
    
  ];

  return (
    <div>
      
      { elementJSX }



      <ul>

        {
          data.map( (c)=>{
            return <Contact key={ c.title } title={ c.title } email={ c.email }  />;
          } )
        }
        
         
        
      </ul>




    </div>
  );
}
 */

/**************************************************************************** */

//   <Navbar  connected={ false }  />

/**
 * 
 * 
function App(){


  const articles = [
    { id:1, title:"ReactJS", nbrLikes:18, like:false, content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { id:2, title:"Angular", nbrLikes:20, like:false, content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { id:3, title:"Vue", nbrLikes:1200, like:true, content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    
  ]



  return(
    <div>
      

      <h1>Articles:</h1>
      {
        articles.map( (a)=>{
          return <ArticleBlog data={ a } />
        } )
      }

      
      

      

    </div>
  );
}

 */






export default class App extends React.Component{
  constructor(props){
    super(props); 
    this.state  = {
      dark : false
    } 
     

    this.toggleMode = this.toggleMode.bind(this);

  }



  toggleMode(){
    this.setState({ dark : ! this.state.dark })
  }


  render(){
    return( 
    
    <div className= { this.state.dark === false ? 'light' : 'dark' } >
      

      <div className="menu">
        <div className="d-flex justify-content-between">
            <div>
               dark mode
            </div>

            <div>
              <ToggleButton   changeModeAction = { this.toggleMode }   />
            </div>
        </div>
      </div>

    </div>);



  }
}
