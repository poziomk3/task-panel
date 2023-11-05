import {  useNavigate } from "react-router-dom";
import TaskForm from "../../Common/Form/TaskForm";
import { User } from "../../../types/userType";
import { TaskFormType } from "../../../types/taskFormType";
import { useContext } from "react";
import TitleAndSection from "../../Common/TitleAndSection";
import { LoadingContext } from "../../../App";
import { addTaskCall } from "../../../api/addTaskCall";

interface TaskAdditionPanelProps {
  projectUsersTable: Array<User>;
  refreshData(): Promise<void>;
}

const TaskAdditionPanel: React.FC<TaskAdditionPanelProps> = ({
  projectUsersTable,
  refreshData,
}) => {
  const setSpinner=useContext(LoadingContext)
  const navigate = useNavigate();
  const handleAddTask = (form: TaskFormType) => {
    setSpinner(true);
   addTaskCall(form).then(() => {
      refreshData().then(() => {
        navigate("/main-panel");
      });
    });
  };

  return (
   
        <TitleAndSection>
          <h1 className="text-center text-[2rem] mb-[3rem] font-[900] bg-slate-600/70 p-[1rem] rounded-lg">
            Create your task!
            <br/>
          </h1>
          
            <TaskForm
              handleEvent={handleAddTask}
              projectUsersTable={projectUsersTable}
          
            />
         
        </TitleAndSection>
     
  );
};

export default TaskAdditionPanel;
