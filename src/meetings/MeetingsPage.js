import { useState } from "react";
import NewMeetingForm from "./NewMeetingForm";
import MeetingsList from "./MeetingsList";

export default function MeetingsPage({value}) {
  const [meetings, setMeetings] = useState([]);
  const [showList, setShowList] = useState(false);


  function handleNewMeeting(meeting) {
    const nextMeetings = [...meetings, meeting];
    setMeetings(nextMeetings);
  }

  return (
    <div>
      <h2>Zajęcia ({meetings.length})</h2>
      <NewMeetingForm
        onSubmit={(meeting) => {
          handleNewMeeting(meeting);
        }}
        onAction={() => setShowList(true)}
      />
      {showList && <MeetingsList meetings={meetings} value={value} />}
    </div>
  );
}
