import React from 'react';
const clickMe = () => {

    document.location.href('/aa')

}
export default function ChildComponent ({data}){
    return (
        <>
        <div className = "childComponent"  data-tip = {data.data} data-for = "bubble" style = {{backgroundColor : data.color + "d0",}}>
        {data.data}
        </div>
        </>
    );
}  