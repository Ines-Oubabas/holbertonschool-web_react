import React from 'react'
import WithLogging from '../HOC/WithLogging'

function Login() {
  return (
    <div className="border-t-2 border-[var(--main-color)] px-8 py-6">
      <p className="mb-6">Login to access the full dashboard</p>

      <div className="flex items-center gap-2 flex-wrap">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          className="border border-gray-400 px-2 py-1"
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          className="border border-gray-400 px-2 py-1"
        />

        <button type="button" className="border border-gray-400 px-2 py-1">
          OK
        </button>
      </div>
    </div>
  )
}

export default WithLogging(Login)