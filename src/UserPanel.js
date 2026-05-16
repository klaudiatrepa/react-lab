import MeetingsPage from "./meetings/MeetingsPage";

export default function UserPanel({ username, onLogout }) {
  return (
    <div>
      <p>Witaj {username}</p>
      <MeetingsPage></MeetingsPage>
      <button onClick={onLogout}>Wyloguj</button>
    </div>
  );
}
