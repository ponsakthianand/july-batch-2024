import logo from '../logo.svg';

const Header = ({ companyName, loggedIn, updateCompanyName }) => {
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
    </div>
  );
};

export default Header;
