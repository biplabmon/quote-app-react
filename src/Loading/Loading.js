import React from "react";
import './Loading.css';

const Loading = (props) => {
    return (
        <>
            {props.isLoading && (<div className="loading_spainer">
                <div className="lds-ripple"><div></div><div></div></div>
                <p>Loading...</p>
            </div>)}
        </>
    )
};

export default Loading;