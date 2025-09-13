import SelectUser from '../SelectUser/SelectUser';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';

function Header() {
  return (
    <>
    <Logo image={'/logo.svg'}/>
    <SelectUser/>
  </>
);
}

export default Header;
