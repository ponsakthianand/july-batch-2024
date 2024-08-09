import './App.css';
import { useState } from 'react';
import Header from './common/header';
import Footer from './common/fooder';

const App = () => {

  const welcomeMessage = "Hello World!"

  const [companyName, setCompanyName] = useState('Google')
  const [isCompanySwich, setIsCompanySwich] = useState(false)

  const newCompanyName = (value) => {
    setCompanyName(value)
  }


  return (
    <div className='wrapper'>
      <Header companyName={companyName} loggedIn={isCompanySwich} updateCompanyName={(value) => newCompanyName(value)} />
      <div className='container'>
        <button onClick={() => setIsCompanySwich(false)}>Google</button> <button onClick={() => setIsCompanySwich(true)}>HCL</button>
        <div className="welcome">{welcomeMessage}</div>
      </div>
      <Footer />
    </div>
  )
}


export default App;
