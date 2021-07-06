import { useRouter } from 'next/router'

function NavBar() {
  const router = useRouter()
  function isActive(route) {
    if (route === router.pathname) {
      return 'sub-routes-active'
    } else {
      return 'sub-routes'
    }
  }
  return (
    <div className='nav'>
      <div className='nav-title'>Kandarp</div>
      <div className='nav-routes'>
        <div className={isActive('/')}>Home</div>
        <div className={isActive('/projects')}>Projects</div>
        <div className={isActive('/about')}>about me</div>
        <div className={isActive('/contact')}>contact me </div>
      </div>
    </div>
  )
}

export default NavBar
