import React from 'react';
import "./NeonBtn.css";
import { Link } from "react-router-dom";

const NeonBtn = () => {
    return (
        <>
            <Link to="/neonbtn">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
               neon button
            </Link>
        </>
    )
}

export default NeonBtn