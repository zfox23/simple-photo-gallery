import { Link } from "gatsby"
import React from "react"

export const Header = () => {
    return (
        <header className="w-full flex gap-4 p-2 justify-center content-center font-semibold text-xl text-white bg-black/80">
            <Link className="hover:underline" to="/">Home</Link>
            <Link className="hover:underline" to="/about">About</Link>
        </header>
    )
}
