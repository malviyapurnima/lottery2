import React from 'react'

function CardsLayout({ children, className }) {
  return (
    <div className={`shadow-shadow rounded-xl p-5 ${className}`}>
      {children}
    </div>
  )
}

export default CardsLayout