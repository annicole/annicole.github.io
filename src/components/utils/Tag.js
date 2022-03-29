import React from "react"
export default function Tag({number}){
    return(
        <span className="flex-none order-1 flex-grow mx-4  text-3x box-border border-solid border rounded-[100px] ">
          <p className="font-normal text-xs flex-grow-0 order-1 mx-2 text-indigo-800">
            {number}
          </p>
        </span>
    )
}