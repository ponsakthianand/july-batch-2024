import './App.css';
import { useState } from 'react';
import Header from './common/header';
import Footer from './common/fooder';
import { FaFemale } from "react-icons/fa";
import { FaMale } from "react-icons/fa";

const App = () => {

  const welcomeMessage = "Hello World!"

  const [companyName, setCompanyName] = useState('Google')
  const [isCompanySwich, setIsCompanySwich] = useState(false)
  const [userInfo, setUserInfo] = useState(null)

  const newCompanyName = (value) => {
    setCompanyName(value)
  }

  const users = [
    {
      "balance": "$3,946.45",
      "picture": "http://placehold.it/32x32",
      "age": 23,
      "name": "Bird Ramsey",
      "gender": "male",
      "company": "NIMON",
      "email": "birdramsey@nimon.com"
    },
    {
      "balance": "$2,499.49",
      "picture": "http://placehold.it/32x32",
      "age": 31,
      "name": "Lillian Burgess",
      "gender": "female",
      "company": "LUXURIA",
      "email": "lillianburgess@luxuria.com"
    },
    {
      "balance": "$2,820.18",
      "picture": "http://placehold.it/32x32",
      "age": 34,
      "name": "Kristie Cole",
      "gender": "female",
      "company": "QUADEEBO",
      "email": "kristiecole@quadeebo.com"
    },
    {
      "balance": "$3,277.32",
      "picture": "http://placehold.it/32x32",
      "age": 30,
      "name": "Leonor Cross",
      "gender": "female",
      "company": "GRONK",
      "email": "leonorcross@gronk.com"
    },
    {
      "balance": "$1,972.47",
      "picture": "http://placehold.it/32x32",
      "age": 28,
      "name": "Marsh Mccall",
      "gender": "male",
      "company": "ULTRIMAX",
      "email": "marshmccall@ultrimax.com"
    }
  ]

  const viewUserInfo = (userData) => {
    setUserInfo(userData)
  }

  return (
    <div className='wrapper'>
      <Header companyName={companyName} loggedIn={isCompanySwich} updateCompanyName={(value) => newCompanyName(value)} />
      <div className='container'>
        {/* <button onClick={() => setIsCompanySwich(false)}>Google</button> <button onClick={() => setIsCompanySwich(true)}>HCL</button> */}
        {/* <div className="welcome">{welcomeMessage}</div> */}

        <div className='userPage'>
          <div className='usersSection'>
            {
              users?.length ? users?.map((user, index) => {
                return <div className={`userBox ${userInfo?.email === user.email ? 'active' : ''}`} key={index} onClick={() => viewUserInfo(user)}>
                  <div className='userhead'>
                    <div className='image'>{user?.gender === 'male' ? <FaMale size={30} /> : <FaFemale size={30} />}</div>
                    <div>
                      <div className='name'>{user?.name}</div>
                      <div className='email'>{user?.email}</div>
                      <div className='age'>{user?.age}</div>
                    </div>
                  </div>
                </div>
              }) : <></>
            }
          </div>

          {userInfo ? <div className='userInfo'>
            <div>
              <div>Name: {userInfo?.name}</div>
              <div>Email: {userInfo?.email}</div>
              <div>Age: {userInfo?.age}</div>
              <div>Gender: {userInfo?.gender}</div>
              <div>Company: {userInfo?.company}</div>
              <div>Balance: {userInfo?.picture}</div>
            </div>
            <div><img src={userInfo?.picture} alt='userPhoto' width={100} /></div>
          </div> :
            <div className='userInfo'>No information</div>
          }
        </div>


      </div>
      <Footer />
    </div>
  )
}


export default App;
