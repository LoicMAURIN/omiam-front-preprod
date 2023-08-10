import Construction from '../../Construction';
import Buttonnavbar from '../Buttonnavbar';
import './styles.scss';

function MyChiefs() {
  return (
    <>
      <Buttonnavbar />
      <div className="my-chiefs">
        <h1 className="my-chiefs-title">Mes Chefs</h1>
        {/* <h2>Page en cours de construction</h2> */}
        <Construction />
      </div>
    </>
  );
}

export default MyChiefs;
