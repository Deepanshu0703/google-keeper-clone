import React from 'react';
import Heading from './heading.jsx';
import {Notes,Footer} from './heading.jsx';

function App(){
    return(
        <div>
            <Heading/>
            <div className='container'><Notes/></div>
            <Footer/>
        </div>
    );
}
export default App;