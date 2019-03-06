import React from 'react'

export default function FormError({errors}) {
  return (
    <div className="alert alert-danger bwm-res-errors">
      {<p>{errors}</p>}
    </div>
  )
}
