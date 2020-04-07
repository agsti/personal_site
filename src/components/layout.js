import React from "react"
import '../css/layout.scss'

export const Layout = ({ children }) => {
  return (
    <div className="n-container" >
      {children}
      <footer>
        © {new Date().getFullYear()}, Agusti Bau
      </footer>
    </div>
  )
}


export const Content = ({children}) => (
  <div className="content">
    {children}
  </div>
)