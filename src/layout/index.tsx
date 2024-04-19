import { Outlet } from "react-router-dom"
import React from "react"

// eslint-disable-next-line react-refresh/only-export-components
const Layout = () =>{
    return(
        <div>
            <h1>Header</h1>
            <Outlet />
        </div>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(Layout)