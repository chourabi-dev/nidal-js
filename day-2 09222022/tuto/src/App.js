import Contact from "./componenets/Contact";

function App() {

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

export default App;
