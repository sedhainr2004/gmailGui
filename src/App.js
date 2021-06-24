import Header from './Header'
import './App.css'
import SideBar from './SideBar'
import EmailLists from './EmailLists'


function App() {
  return (
    <div className='App'>
      <Header />
      <div className='app_body'>
        <SideBar />
      
        <EmailLists />
      </div>
    </div>
  )
}

export default App
