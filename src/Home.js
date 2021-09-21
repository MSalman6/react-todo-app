import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment } from "./redux/slices/countSlice";
import { increment, decrement } from "./redux/ducks/countReducer";

const Home = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return ( 
        <div className="home">
            <div className="home-data">
                <div className="todo-container">
                    <p>count: {count}</p>
                    <p>Title: </p>
                    <p>Description: </p>
                    <button onClick={() => dispatch(increment())}>+1</button>
                    <button onClick={() => dispatch(decrement())}>-1</button>
                </div>
            </div>
        </div>
     );
}
 
export default Home;