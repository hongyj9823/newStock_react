import React from 'react';
import { Link } from 'react-router-dom' 



export default function ChildComponent ({data,setClick}){
    return (
        <div className = "childComponent" onClick = {()=> setClick(data)}>
        {data}
        </div>
    );
}  