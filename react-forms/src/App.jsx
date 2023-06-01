import { Fragment } from 'react'

import './App.css'
import UserFormComponent from './components/UserFormComponent'

function App() {
  return (
    <Fragment>
      <h1 className='-mt-20 mb-16 font-semibold'>User Data Form</h1>
      <UserFormComponent></UserFormComponent>
    </Fragment>
  )
}

export default App
