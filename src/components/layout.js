import React from "react"
import Header from './header'
import '../css/main.css'
const Layout = ({ children, header }) => {
  
  return (
    <div className="container" >
      {header}
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Agusti Bau
      </footer>
    </div>
  )
}

export default Layout
