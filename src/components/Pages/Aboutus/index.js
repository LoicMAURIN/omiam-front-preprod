import './styles.scss';
import Max from '../../../assets/img/max.png';
import Loic from '../../../assets/img/loic.png';
import Pauline from '../../../assets/img/pauline.png';
import Adrien from '../../../assets/img/adri.png';
import Nathalie from '../../../assets/img/nath.png';

function Aboutus() {
  return (
    <>
      <h1>Qui sommes-nous ?</h1>
      <div className="aboutus">
        <div className="card-aboutUs">
          <div className="aboutus-cards">
            <img className="card-img-about" src={Loic} alt="Avatar" />
            <div className="card-caption">
              <h3 className="aboutus-caption-title">Loïc MAURIN</h3>
              <p>
                Lead Dev Front
              </p>
              <div className="list-social">
                <ul>
                  <li><i className="icon-email" /></li>
                  <li><i className="icon-github" /></li>
                  <li><i className="icon-linkedin" /></li>
                  <li><i className="icon-twitter" /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="card-aboutUs">
          <div className="aboutus-cards">
            <img className="card-img-about" src={Adrien} alt="Avatar" />
            <div className="aboutsus-cards-caption">
              <h3 className="aboutus-caption-title">Adrien PINILLA</h3>
              <p>
                Product Owner
                Dev Back
              </p>
              <div className="list-social">
                <ul>
                  <li><i className="icon-email" /></li>
                  <li><i className="icon-github" /></li>
                  <li><i className="icon-linkedin" /></li>
                  <li><i className="icon-twitter" /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="card-aboutUs ">
          <div className="aboutus-cards">
            <img className="card-img-about" src={Max} alt="Avatar" />
            <div className="aboutsus-cards-caption">
              <h3 className="aboutus-caption-title">Maxime THENEAU</h3>
              <p className="aboutus-cards-caption">
                Tech Referent Redux Dev Front
              </p>
              <div className="list-social">
                <ul>
                  <li><i className="icon-email" /></li>
                  <li><i className="icon-github" /></li>
                  <li><i className="icon-linkedin" /></li>
                  <li><i className="icon-twitter" /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="card-aboutUs ">
          <div className="aboutus-cards">
            <img className="card-img-about" src={Pauline} alt="Avatar" />
            <div className="aboutsus-cards-caption">
              <h3 className="aboutus-caption-title">Pauline THOMELIN</h3>
              <p>
                Scrum Master - Tech Referent React
                Dev Front
              </p>
              <div className="list-social">
                <ul>
                  <li><i className="icon-email" /></li>
                  <li><i className="icon-github" /></li>
                  <li><i className="icon-linkedin" /></li>
                  <li><i className="icon-twitter" /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="card-aboutUs ">
          <div className="aboutus-cards">
            <img className="card-img-about" src={Nathalie} alt="Avatar" />
            <div className="aboutsus-cards-caption">
              <h3 className="aboutus-caption-title">Nathalie TOURNON</h3>
              <p>Lead Dev Back</p>
              <div className="list-social">
                <ul>
                  <li><i className="icon-email" /></li>
                  <li><i className="icon-github" /></li>
                  <li><i className="icon-linkedin" /></li>
                  <li><i className="icon-twitter" /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
   
  );
}

export default Aboutus;

