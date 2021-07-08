import { useRouter } from 'next/router'
import Link from 'next/link'

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
        <div className={isActive('/')}>
          <Link href='/'>Home</Link>
        </div>
        <div className={isActive('/projects')}>
          <Link href='/projects'> Projects</Link>
        </div>
        <div className={isActive('/about')}>
          <Link href='/about'>about me</Link>
        </div>
        <div className={isActive('/contact')}>
          <Link href='/contact'>contact me</Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar
