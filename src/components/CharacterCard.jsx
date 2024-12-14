import classes from '../styles/CharacterCard.module.css'

const CharacterCard = ({ character }) => {
  return (
    <div className={classes.ctn}>
      <img className={classes.img} src={character.image} alt={character.name} />
      <div className={classes.content}>
        <h2>{character.name}</h2>
        <p>{character.species}</p>
        <p>{character.status}</p>
      </div>
    </div>
  )
}

export default CharacterCard
