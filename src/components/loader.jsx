import React from "react";
import {CircularProgress} from '@mui/material'
import {styled} from '@mui/system'

const LoaderWapper=styled('div')(({theme})=>({
    display:'flex',
    justifyContent:'center',
    marginTop:theme.spacing(3)
}))
const Loader=()=>{
    return(<LoaderWapper>
        <CircularProgress/>
    </LoaderWapper>)
}
export default Loader;