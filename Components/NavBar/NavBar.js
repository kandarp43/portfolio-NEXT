import { useRouter } from 'next/router'
import { useState } from 'react'

function NavBar() {
  const router = useRouter()
  const [active, setActive] = useState('')
  console.log(router.pathname)
  return (
    <div className='nav'>
      <div className='nav-title'>kandarp</div>
      <div className='nav-routes'>
        <div className='sub-routes'>Home</div>
        <div className='sub-routes'>Projects</div>
        <div className='sub-routes'>about me</div>
        <div className='sub-routes'>contact me </div>
      </div>
    </div>
  )
}

export default NavBar
