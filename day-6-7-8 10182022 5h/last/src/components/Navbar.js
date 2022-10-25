import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../reducers/counterReducer";

export default function Navbar(){
    const count = useSelector( (state)=> state.counter.value );
    const dispatch = useDispatch();


    return(
        <div>
            <h1>Navbar  count:  { count }  </h1>

            <button onClick={()=>{

                dispatch( decrement() );

            }}>-1</button>
        </div>
    )
}