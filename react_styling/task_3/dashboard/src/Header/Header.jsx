import React from 'react'
import logo from '../assets/holberton-logo.jpg'

export default function Header() {
  return (
    <div className="flex items-center gap-6 px-8 py-6">
      <img src={logo} alt="holberton logo" className="w-40 h-auto" />
      <h1 className="text-4xl font-bold text-[var(--main-color)]">
        School dashboard
      </h1>
    </div>
  )
}