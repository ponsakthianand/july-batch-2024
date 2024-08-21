import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
const Home = () => {
  const [users, setUsers] = useState(null);
  const [loader, setLoader] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

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
    <>
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
    </>
  );
};

export default Home;
