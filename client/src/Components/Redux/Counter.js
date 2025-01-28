import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrimentCounter } from './Actions';

// const initialState=5;

// const reducer=(state, action)=>{

// switch (action) {
//   case 'INCRIMENT':
//     return state+1;
    
//   case 'DICRIMENT':
//     return state-1;

//   default:
//     return state;
// }


// }

const Reducer = () => {

    const count = useSelector(state => state.count)
    const dispatch = useDispatch();

    const handleIncriment =()=>{
        dispatch(incrimentCounter());
    }
    const handleDecriment =()=>{
        dispatch(decrementCounter());
    }

  return (
    <div>
        <h1 className='mt-20 text-center'>{count}</h1>
      <button onClick={handleIncriment} className='font-semibold px-5 py-2 border rounded-lg block mx-auto'>Incriment</button>
      <button onClick={handleDecriment} className='font-semibold px-5 py-2 border rounded-lg block mx-auto'>Decrement</button>
      <button className='mt-20'>Reset</button>
    </div>
  )
}

export default Reducer
