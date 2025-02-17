import '../Header/Header.css'

const Header = () => {
  return (
    <>
    <div className='container'>
        <div className='header-main'>
            <div className='logo'>

            </div>
            <div className='nav-panel'>
                <a href='#'>About</a>
                <a href='#'>Experience</a>
                <a href="#">Project</a>
                <a href="#">Contact</a>
            </div>
            <div className='btn'>
                <a href='#'>Resume</a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header