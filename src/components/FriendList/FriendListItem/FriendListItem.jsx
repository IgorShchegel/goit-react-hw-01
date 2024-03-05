import css from './FriendListItem.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img className={css.image} src={avatar} alt="Avatar" width="80" />
      <p className={css.name}>{name}</p>
      <p className={css.status} style={{ color: isOnline ? 'green' : 'red' }}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  )
}

export default FriendListItem