import {useContext} from 'react';
import {ThemeContext} from './Context';


function ContextConsumer() {
    const theme = useContext(ThemeContext);
    return (
        <p>
            CONTEXT API
            <br/>
            <code>src/components/ContextConsumer.js</code>
            <br/>
             {theme ? "it's too dark, turn on the light" : "it's too bright turn off the light"}
            <br/>
        </p>
    );
}

export default ContextConsumer;
