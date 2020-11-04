import React from "react";
import DoneNotes from "./common/doneNotes";
import InProgressNotes from "./common/inProgressNotes";
import ToDoNotes from "./common/toDoNotes";
import DeletedNotes from "./common/deletedNotes";

function Dashboard() {
  return (
    <div>
      <ToDoNotes />
      <InProgressNotes />
      <DoneNotes />
      <DeletedNotes />
    </div>
  );
}
export default Dashboard;
