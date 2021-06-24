import Header from './Header'
import './App.css'
import SideBar from './SideBar'
import EmailLists from './EmailLists'


function App() {
  return (
    <div className='App'>
      <Header />
      <div className='app_body'>
        <SideBar /> //this is where the inbox, starred, compose options are going to be implemented
      
        <EmailLists />
      </div>
    </div>
  )
}

export default App
