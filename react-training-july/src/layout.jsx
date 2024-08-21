import { useState } from 'react';
import Header from './common/header';
import Footer from './common/fooder';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const welcomeMessage = 'Hello World!';

  const newCompanyName = (name) => {
    setCompanyName(name);
  };

  const [companyName, setCompanyName] = useState('Google');
  const [isCompanySwich, setIsCompanySwich] = useState(false);

  return (
    <div className='wrapper'>
      <Header
        companyName={companyName}
        loggedIn={isCompanySwich}
        updateCompanyName={(value) => newCompanyName(value)}
        setIsCompanySwich={(value) => setIsCompanySwich(value)}
      />
      <div className='container'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
