import logo from '../logo.svg';

const Header = ({
  companyName,
  loggedIn,
  updateCompanyName,
  setIsCompanySwich,
}) => {
  const newCompanyName = 'HCL';

  return (
    <div className='container'>
      {loggedIn ? newCompanyName : companyName}
      <img
        src={logo}
        alt='logo'
        width={'100px'}
        onClick={() => updateCompanyName(newCompanyName)}
      />
      <button onClick={() => setIsCompanySwich(false)}>Google</button>
      <button onClick={() => setIsCompanySwich(true)}>HCL</button>
    </div>
  );
};

export default Header;
