import React, { useEffect } from 'react'

const Alert = ({type, msg, removeAlert, list}) => {

  useEffect(()=> {
const time = setTimeout(()=> {
removeAlert()
return ()=> {
  clearTimeout(time);
}
},3000)
  },[list,removeAlert])
  return(
    <p className={`alert alert-${type}`}>{msg}</p>
    
    )
}

export default Alert
