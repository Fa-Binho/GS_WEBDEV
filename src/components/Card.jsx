function Card({ icon, titulo, descricao, destaque = false, variante = 'primary' }) {
  const classes = ['card'];
  if (destaque) {
    classes.push(variante === 'secondary' ? 'card--destaque-secondary' : 'card--destaque');
  }

  return (
    <article className={classes.join(' ')}>
      {icon && (
        <div className="card__icon" aria-hidden="true">
          {icon}
        </div>
      )}
      <h3 className="card__title">{titulo}</h3>
      <p className="card__text">{descricao}</p>
    </article>
  );
}

export default Card;
