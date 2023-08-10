import './styles.scss';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function Header() {
// console.log(localStorage.token, 'cookies');
  return (
    <header>
      <Navbar />
      <Sidebar />
    </header>
  );
}

export default Header;
