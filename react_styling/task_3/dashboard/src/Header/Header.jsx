import React from 'react'
import logo from '../assets/holberton-logo.jpg'

export default function Header() {
  return (
    <div className="flex items-center gap-8 px-4 pt-8 pb-6">
      <img src={logo} alt="holberton logo" className="w-24 h-auto" />
      <h1 className="text-5xl font-bold text-[var(--main-color)]">
        School Dashboard
      </h1>
    </div>
  )
}