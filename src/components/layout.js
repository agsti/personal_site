import React from "react"
import '../css/base.scss'
const Layout = ({ children, header }) => {
  
  return (
    <div className="container" >
      {header}
      {children}
      <footer>
        © {new Date().getFullYear()}, Agusti Bau
      </footer>
    </div>
  )
}

export default Layout
