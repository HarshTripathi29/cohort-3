import React from "react";
import { useParams } from "react-router-dom";

export default function User(){
    // use params get the query params from the url
    const {userid} = useParams();

    return(
        <div className="bg-gray-700 text-white text-3xl p-4">User : {userid}</div>
    )
}