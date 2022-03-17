import { useState } from 'react'
import Greeting from './components/Greeting'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import Mailbox from './components/Mailbox'
import './App.css'

const App = () => {
  const [isLoggedIn, toggleLogin] = useState(false)

  const [unreadMessages, setUnreadMessages] = useState([
    'Hello',
    'World',
    'This is Doordash with your order'
  ])

  const handleLoginClick = () => toggleLogin(true)

  const handleLogoutClick = () => toggleLogin(false)

  let button

  const mailbox = isLoggedIn && <Mailbox unreadMessages={unreadMessages} />

  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />
  } else {
    button = <LoginButton onClick={handleLoginClick} />
  }

  return (
    <div className="App">
      <Greeting isLoggedIn={isLoggedIn} />
      <p>The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.</p>
      {mailbox}
      {button}
    </div>
  )
}

export default App
