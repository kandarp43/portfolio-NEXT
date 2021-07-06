import NavBar from './NavBar/NavBar'

function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}

export default Layout
