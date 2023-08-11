import { Link } from 'react-router-dom';
import './styles.scss';

function Error() {
  return (
    <>
      <div className="animation">
        <i className=" icon-stainer" />
        <i className="icon-rolling-pin" />
        <i className="icon-ladle" />
        <i className="icon-whisk" />
        <i className="icon-glass" />
        <i className="icon-bottle" />
        <i className="icon-fork" />
        <i className="icon-tea-pot" />
        <i className="icon-chicken-leg" />
        <i className="icon-pan" />
        <i className="icon-spatula" />
        <i className="icon-difficulty-1" />
        <i className="icon-difficulty-2" />
        <i className="icon-oven" />
        <i className="icon-sandblasted" />
        <i className="icon-miam" />
        <i className="icon-timer" />
        <i className="icon-radish" />
        <i className="icon-cakes" />
        <i className="icon-entrance" />
        <i className="icon-cup-coffee" />
        <i className="icon-cup" />


      </div>
      <div className="one-recipe one-recipe-404">
        <div>
          <div className="one-recipe-header">
            <h1 className="one-recipe-title">404 bien cuite</h1>
            <h2 className="one-recipe-author-title"> de Mamie</h2>
            <div className="one-recipe-miams">
              <div>
                <i className="icon-dish" />
              </div>
              <div>
                <button type="submit" className="one-recipe-miams-form">
                  <span className="one-recipe-miams-label">23</span>
                  <i className="icon-miam" />
                </button>
              </div>
            </div>
          </div>
          <div className="one-recipe-img">
            <img
              src="https://back.omiam-preprod.fr/omiam/sources/images/recipe/recipe_143.webp"
              alt="404 plats"
              className="one-recipe-img"
            />
          </div>
          <div className="one-recipe-timer">
            <ul className="one-recipe-timer-ul">
              <li><i className="icon-timer p-1" /><span>0.10 min</span></li>
              <li><i className="icon-difficulty-3" /></li>
            </ul>
            <p className="one-recipe-caption">Recette préférer de ma grand mères</p>
          </div>
          <div className="one-recipe-ingredient">
            <h2 className="one-recipe-ingredient-title">Ingrédients pour 4 personnes</h2>
            <ul className="one-recipe-ingredient-list">
              <li className="ingredient">
                <p className="ingredient-text">1 C.s de connexion</p>
              </li>
              <li className="ingredient">
                <p className="ingredient-text">2 Qte de cable</p>
              </li>
              <li className="ingredient">
                <p className="ingredient-text">1 Qte d'ordi </p>
              </li>
            </ul>
          </div>
          <div className="one-recipe-steps">
            <ul className="one-recipe-steps-ul">
              <li>
                <h2 className="one-recipe-steps-title">Etape 1</h2>
                <p className="one-recipe-steps-etape">Branchez votre ordi et verifié votre connexion</p>
              </li>
              <li>
                <h2 className="one-recipe-steps-title">Etape 2</h2>
                <p className="one-recipe-steps-etape bold">
                  <Link to="/">
                    Cliquez ici, pour revenir à l'accueil.
                  </Link>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="one-recipe-comments">
        <h2 className="one-recipe-comments-title">Commentaires</h2>
        <div>
          <ul className="one-recipe-comments-ul">
            <li><img className="one-recipe-img-user" src="https://back.omiam-preprod.fr/omiam/sources/images/user/avatar_14.jpg" alt="-avatar" /></li>
            <li><p className="one-recipe-comments-speudo">Maxime O'Chefs</p></li>

          </ul>
          <p className="one-recipe-comments-content">Manque un peu de sel!</p>
          <ul className="one-recipe-comments-ul">
            <li><img className="one-recipe-img-user" src="https://back.omiam-preprod.fr/omiam/sources/images/user/default/user.jpg" alt="-avatar" /></li>
            <li><p className="one-recipe-comments-speudo">Henry</p></li>

          </ul>
          <p className="one-recipe-comments-content">Un peu technique à réaliser, amateur s'abtenir :)</p>
        </div>
        <div className="one-recipe-comment">
          <h2 className="one-recipe-comment-title">Laissez un commentaire</h2>
          <form
            className="one-recipe-form"
          >
            <textarea
              className="one-recipe-comment-textarea"
              type="text"
              rows="4"
              placeholder="Commentaire"
            />
            <button className="send-button" type="submit">
              <span className="send-button-submit">Envoyer</span>
              <i className="icon-oven" />
            </button>
          </form>
        </div>
      </div>
    </>

  );
}

export default Error;
