import React from 'react'
import PropTypes from 'prop-types'

function BodySection({ title, children = null }) {
  return (
    <div className="px-8 py-6">
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      {children}
    </div>
  )
}

BodySection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default BodySection