import MeetingsPage from "./meetings/MeetingsPage";
import { useState } from "react";

export default function UserPanel({ username, onLogout }) {
  const [showMeetingsPage, setShowMeetingsPage] = useState(false);
  const [value, setValue] = useState(username);
  return (
    <div>
      <p>Witaj {username}</p>
      <MeetingsPage value={username} />
      <div>
        <button onClick={() => setShowMeetingsPage(true)}>
          Dodaj spotkanie
        </button>
      </div>
      {showMeetingsPage && <MeetingsPage value={username} />}
      <button onClick={onLogout}>Wyloguj</button>
    </div>
  );
}
