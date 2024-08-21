/* eslint-disable react/prop-types */
// import React from 'react'

import { HashLoader } from "react-spinners";

const override={
    display:'block',
    margin:'100px auto'
}

export default function SpinLoad({loading}) {
    return (
        <HashLoader
        color="#4338ca"
        loading={loading}
        cssOverride={override}
        size={150}
        />
    )
}
