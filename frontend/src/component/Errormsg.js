import React from 'react'

export default function Errormsg(props) {
  return (
    <div className={`alert alert-${props.variant || 'danger'}`}>
      {props.children}
    </div>
  )
}
