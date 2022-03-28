import React from "react";
import loadingCircle from "../../assets/loadingCircle.svg";

export default function TableLoading(){

    return(
        <div className="grid place-items-center h-screen bg-white border-b">
            <img className="animate-spin" src={loadingCircle}/>
        </div>
    )

}