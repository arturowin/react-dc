import {useEffect} from "react";


function UseCallback({callback}) {

    useEffect(() => {
        window.console.log("UseCallback re-rendered", callback());
    }, [callback])

    return (
        <code>src/components/UseCallback.js</code>
    );
}

export default UseCallback;
