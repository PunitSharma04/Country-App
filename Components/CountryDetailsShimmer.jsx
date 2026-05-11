import React from 'react'

import './CountryDetailsShimmer.css'

export default function CountryDetailShimmer() {
  return (
    <div className="country-details shimmer">
      <div className="flag"></div>
      <div className="detail-text-container">
        <h1 className="title"></h1>
        <div >
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  )
}