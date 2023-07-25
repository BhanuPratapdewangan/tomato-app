import React, { useEffect, useState} from "react";

export function Counter() {
    const[count, setCount] = useState(0);

    function cart(){
        var c = count+1;
        setCount(c);
    }
    useEffect(() => {
        cart();
    },[]);

    return(
        <>
            <div className="position-absolute top-0 end-0 m-4">Cart [ {count} ]</div>
        </>
    )
}

export default function Demo() {
    const [component, setComponent] = useState('');
    function addClick()
    {
        setComponent(<Counter />)
    }
    return (
        <>
            <button className="btn btn-primary m-4" onClick={addClick}>Add to cart</button>
            {component}
        </>
    )

}
