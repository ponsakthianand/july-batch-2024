import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import Header from './common/header';
import Footer from './common/fooder';
import { FaFemale } from 'react-icons/fa';
import { FaMale } from 'react-icons/fa';

const Layout = () => {
  const welcomeMessage = 'Hello World!';

  const [companyName, setCompanyName] = useState('Google');
  const [isCompanySwich, setIsCompanySwich] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [users, setUsers] = useState(null);
  const [loader, setLoader] = useState(false);

  const getAPI = async () => {
    setLoader(true);
    setTimeout(async () => {
      const res = await fetch('https://reqres.in/api/users', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const user = await res.json();

      setLoader(false);
      if (res.ok && user) {
        return setUsers(user);
      }
      return null;
    }, 5000);
  };

  const reload = () => {
    getAPI();
  };

  useEffect(() => {
    getAPI();
  }, []);

  const newCompanyName = (name) => {
    setCompanyName(name);
  };

  // const users = [
  //   {
  //     balance: '$3,946.45',
  //     picture: 'http://placehold.it/32x32',
  //     age: 23,
  //     name: 'Bird Ramsey',
  //     gender: 'male',
  //     company: 'NIMON',
  //     email: 'birdramsey@nimon.com',
  //   },
  //   {
  //     balance: '$2,499.49',
  //     picture: 'http://placehold.it/32x32',
  //     age: 31,
  //     name: 'Lillian Burgess',
  //     gender: 'female',
  //     company: 'LUXURIA',
  //     email: 'lillianburgess@luxuria.com',
  //   },
  //   {
  //     balance: '$2,820.18',
  //     picture: 'http://placehold.it/32x32',
  //     age: 34,
  //     name: 'Kristie Cole',
  //     gender: 'female',
  //     company: 'QUADEEBO',
  //     email: 'kristiecole@quadeebo.com',
  //   },
  //   {
  //     balance: '$3,277.32',
  //     picture: 'http://placehold.it/32x32',
  //     age: 30,
  //     name: 'Leonor Cross',
  //     gender: 'female',
  //     company: 'GRONK',
  //     email: 'leonorcross@gronk.com',
  //   },
  //   {
  //     balance: '$1,972.47',
  //     picture: 'http://placehold.it/32x32',
  //     age: 28,
  //     name: 'Marsh Mccall',
  //     gender: 'male',
  //     company: 'ULTRIMAX',
  //     email: 'marshmccall@ultrimax.com',
  //   },
  // ];

  const viewUserInfo = useCallback((userData) => {
    setUserInfo(userData);
  }, []);

  const userData = useMemo(() => {
    return userInfo;
  }, [userInfo]);

  console.log(userData);

  useEffect(() => {
    return () => {};
  }, [userInfo]);

  const inputElement = useRef();

  const addValuetoInput = () => {
    inputElement.current.value = 'hi';
  };
  return (
    <div className='wrapper'>
      <Header
        companyName={companyName}
        loggedIn={isCompanySwich}
        updateCompanyName={(value) => newCompanyName(value)}
        setIsCompanySwich={(value) => setIsCompanySwich(value)}
      />
      <div className='container'>
        {/* <div className="welcome">{welcomeMessage}</div> */}

        <input type='text' ref={inputElement} />

        <button onClick={addValuetoInput}>add value</button>

        <button onClick={() => reload()}>Reload</button>

        {loader ? (
          <div className='userPage loaderPlaceholder'>
            <div className='loader'></div>
          </div>
        ) : (
          <div className='userPage'>
            <div className='usersSection'>
              {users && users.data?.length ? (
                users.data?.map((user, index) => {
                  return (
                    <div
                      className={`userBox ${
                        userInfo?.email === user.email ? 'active' : ''
                      }`}
                      key={index}
                      onClick={() => viewUserInfo(user)}
                    >
                      <div className='userhead'>
                        <div className='image'>
                          <img src={user?.avatar} alt='avatar' />
                        </div>
                        <div>
                          <div className='name'>
                            {user?.first_name} {user?.last_name}
                          </div>
                          <div className='email'>{user?.email}</div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <></>
              )}
            </div>

            {userInfo ? (
              <div className='userInfo'>
                <div>
                  <div>
                    Name: {userInfo?.first_name} {userInfo?.last_name}
                  </div>
                  <div>Email: {userInfo?.email}</div>
                  <div>Image link: {userInfo?.avatar}</div>
                </div>
                <div>
                  <img src={userInfo?.avatar} alt='userPhoto' width={100} />
                </div>
              </div>
            ) : (
              <div className='userInfo'>No information</div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
