import React from 'react';

function Heading(){
    
    return <div className='heading'>Keeper</div>;
}

function Notes(){

    return <div className='notes'><p className='abs'>This is the note title</p><p className='def '>This is the <span style={{fontSize :'30px'}}>&#x1F600;</span> note content</p></div>;
}
function Footer(){
    const year=new Date().getFullYear();
    return <div className='footer'>Copyright &#169; {year}</div>;
}
export default Heading;
export {Notes,Footer};