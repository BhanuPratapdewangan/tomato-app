
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';


// using props

// export function Counter(props) {
//     return (
//         <div className="bi bi-cart3">Cart [ {props.count} ]</div>
//     )
// }

// export default function useEffectHook() {

//     const[count, setCount] = useState(0);
//     function addCart()
//     {
//         alert('Added to cart');
//         var c = count +1;
//         setCount(c);
//     }
//     return (
//         <>
//             <div className='position-absolute m-4 top-0 end-0'>
//             <Counter count={count} />
//             </div>
//             <div>
//                 <button className="btn btn-primary m-4" onClick={addCart}>Add to Cart</button>
//             </div>
//         </>
//     )
// }


// Using useEffect hook

export function Counter() 
{
    const[count, setCount] = useState(0);

    useEffect(() => {
       var c = count+1;
       setCount(c) ;
    },[]);

    return(
        <>
            <div className='position-absolute top-0 end-0 m-4'>Cart [ {count} ]</div>
        </>
    )
}

export default function UseEffectHook() 
{
    const[component, setComponent] = useState('');

    function addClick(c) 
    {
        setComponent(<Counter/>);
    }

    return(
        <>
            <div>
                <button className='btn btn-primary m-4' onClick={addClick}>Add to Cart</button>
            </div>
            {component}
        </>
    )
}