import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipe, commentAction, commentCreated } from '../../../action/oneRecipe';
import imgSvg from '../../../assets/img/commentaire.svg';
import './styles.scss';

function Comments() {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.oneRecipe.comments);
  const valueComment = useSelector((state) => state.comment);
  const handleChangeComment = ((event) => {
    dispatch(commentAction(event.target.value, 'commentValue'));
  });
  const handleSubmit = ((event) => {
    event.preventDefault();
    dispatch(commentCreated());
    event.target.reset();
  });
  useEffect(
    () => {
      dispatch(fetchRecipe());
    },
    [],
  );
  console.log();
  return (
    <div className="one-recipe-comments">
      {
        comments[0] === undefined && (
        <h3 className="one-recipe-comments-empty">
          Soyez le premier à commenter cette recette :
        </h3>
        )
      }
      {
        comments[0] !== undefined && (
        <>
          <h2 className="one-recipe-comments-title">
            <img src={imgSvg} alt="Illustration" className="illustration" />
            Commentaires :
          </h2>
          {comments.map((item) => (
            <>
              <p className="one-recipe-comments-speudo">
                <img className="one-recipe-img-user" src={item.user.avatar} alt="-avatar" />
                {item.user.pseudo} :
              </p>

              <p className="one-recipe-comments-content">{item.content}</p>
            </>
          ))}
        </>
        )
      }
      <div className="one-recipe-comment">
        <form
          className="one-recipe-form"
          onSubmit={handleSubmit}
        >
          <textarea
            className="one-recipe-comment-textarea"
            type="text"
            rows={9}
            placeholder="ex: J'ai adoré cette recette, je l'ai faite pour mes invités et ils ont adoré !"
            value={valueComment}
            onChange={handleChangeComment}
          />
          <button className="send-button" type="submit">
            <span className="send-button-submit">
              Envoyer <i className="icon-oven" />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Comments;
