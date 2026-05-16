export default function UserPanel({ username, onLogout }) {
  return (
    <div>
      <p>Witaj {username}</p>
      <button onClick={onLogout}>Wyloguj</button>
    </div>
  );
}
