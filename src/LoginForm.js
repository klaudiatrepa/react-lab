import { useState } from "react";

export default function LoginForm(props) {
  const [email, setEmail] = useState("");

  return (
    <div>
      <p>Zaloguj się emailem</p>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={() => props.onLogin(email)}>Wchodzę</button>
    </div>
  );
}
