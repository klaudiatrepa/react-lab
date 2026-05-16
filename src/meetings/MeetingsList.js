import { useState } from "react";

export default function MeetingsList({meetings, value}) {
      const [showUser, setShowUser] = useState(false);
      let test = value;
    return (
        <table>
            <thead>
            <tr>
                <th>Nazwa spotkania</th>
                <th>Opis</th>
                <th>Uczestnicy</th>
            </tr>
            </thead>
            <tbody>
            {
                meetings.map((meeting, index) => <tr key={index}>
                    <td>{meeting.title}</td>
                    <td>{meeting.description}</td>
                    <td> {showUser && test}</td>
                    <td><button onClick={() => setShowUser(true)}>Zapisz się</button></td>
                </tr>)
            }
            </tbody>
        </table>
    );
}