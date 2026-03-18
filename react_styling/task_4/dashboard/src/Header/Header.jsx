import React from 'react'
import logo from '../assets/holberton-logo.jpg'

export default function Header() {
  return (
    <div className="flex items-center gap-6 px-4 pt-2 pb-6 max-[520px]:flex-col max-[520px]:items-start max-[520px]:gap-3">
      <img src={logo} alt="holberton logo" className="h-auto w-28 max-[520px]:w-24" />
      <h1 className="text-4xl font-bold text-[var(--main-color)] max-[520px]:text-2xl">
        School Dashboard
      </h1>
    </div>
  )
}