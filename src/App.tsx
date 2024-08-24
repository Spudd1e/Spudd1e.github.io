import './App.scss'
import Linkbox from './components/Linkbox'
import SideNavItem from './components/sidenav/SideNavItem'
function App() {
  

  return (
    <>
      <main>
        <div className='sideNav'>
          <SideNavItem text='Test Nav' page='https://google.com' />
        </div>
        <ul>
          <li>
            <p><a href='https://github.com/Spudd1e'>Github :)</a></p>
            <Linkbox />
          </li>
        </ul>
      </main>
    </>
  )
}

export default App
