import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
const usersList = [
  {
    id: 1,
    email: 'george.bluth@reqres.in',
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
  },
  {
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg',
  },
  {
    id: 3,
    email: 'emma.wong@reqres.in',
    first_name: 'Emma',
    last_name: 'Wong',
    avatar: 'https://reqres.in/img/faces/3-image.jpg',
  },
  {
    id: 4,
    email: 'eve.holt@reqres.in',
    first_name: 'Eve',
    last_name: 'Holt',
    avatar: 'https://reqres.in/img/faces/4-image.jpg',
  },
  {
    id: 5,
    email: 'charles.morris@reqres.in',
    first_name: 'Charles',
    last_name: 'Morris',
    avatar: 'https://reqres.in/img/faces/5-image.jpg',
  },
  {
    id: 6,
    email: 'tracey.ramos@reqres.in',
    first_name: 'Tracey',
    last_name: 'Ramos',
    avatar: 'https://reqres.in/img/faces/6-image.jpg',
  },
];

const Blogs = () => {
  const welcomeMessage = 'Hello to my blogs!';
  const [users, setUsers] = useState(usersList);
  const [loader, setLoader] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');

  const viewUserInfo = useCallback((userData) => {
    setUserInfo(userData);
    setFname(userData?.first_name);
    setLname(userData?.last_name);
    setEmail(userData?.email);
  }, []);

  const updateUserDataHandler = (event, userID) => {
    event.preventDefault();
    const updatedUserData = users?.map((item) => {
      return {
        ...item,
        first_name: userID === item?.id ? fname : item.first_name,
        last_name: userID === item?.id ? lname : item.last_name,
        email: userID === item?.id ? email : item.email,
      };
    });
    setUsers(updatedUserData);
  };

  useEffect(() => {
    const getCurrentUserInfo = users?.find((item) => userInfo?.id === item.id);
    setUserInfo(getCurrentUserInfo);
  }, [users]);

  return (
    <>
      <div className='wrapper'>{welcomeMessage}</div>
      <div className='userPage'>
        <div className='usersSection'>
          {users && users?.length ? (
            users?.map((user, index) => {
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
            <div className='info'>
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
            <div className='edit'>
              <form
                onSubmit={(event) => updateUserDataHandler(event, userInfo?.id)}
              >
                <div className='editField'>
                  <label>First name</label>
                  <input
                    value={fname}
                    onChange={(event) => setFname(event.target.value)}
                    name='fname'
                  />
                </div>
                <div className='editField'>
                  <label>Last name</label>
                  <input
                    value={lname}
                    onChange={(event) => setLname(event.target.value)}
                    name='lname'
                  />
                </div>
                <div className='editField'>
                  <label>Email</label>
                  <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    name='email'
                  />
                </div>
                <button className='button'>Save</button>
              </form>
            </div>
          </div>
        ) : (
          <div className='userInfo'>No information</div>
        )}
      </div>
    </>
  );
};

export default Blogs;
