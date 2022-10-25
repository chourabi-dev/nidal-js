import { useDispatch, useSelector } from "react-redux";
import { increment, incrementBy } from "../reducers/counterReducer";

export default function Counter(){
                // STORE                      // reducer  //inil
    const count = useSelector((state)=> state.counter.value )
    const dispatch = useDispatch();




    return(
        <div>
            <h1>{ count }</h1>

            <input type={ 'number' } onChange={ (event)=>{
                console.log(event.target.value);


                dispatch( incrementBy( Number(event.target.value) ) )

            } } />

            <button onClick={ ()=>{
               

                dispatch( increment() );


            } } > add +1 </button>
        </div>
    );
}