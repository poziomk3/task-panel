import {  useNavigate, useParams } from "react-router-dom";
import { Task } from "../../../types/taskType";
import { User } from "../../../types/userType";
import TaskForm from "../../Common/Form/TaskForm";
import { TaskFormType } from "../../../types/taskFormType";
import { useContext} from "react";
import TitleAndSection from "../../Common/TitleAndSection";
import { LoadingContext } from "../../../App";
import { editTaskCall } from "../../../api/editTaskCall";
interface TaskEditionPanelProps {
  projectUsersTable: Array<User>;
  taskTable: Array<Task>;
  refreshData(): Promise<void>;
}

const TaskEditionPanel: React.FC<TaskEditionPanelProps> = ({
  projectUsersTable,
  taskTable,
  refreshData,
}) => {
  const setSpinner=useContext(LoadingContext)
  let { id } = useParams();
  const task = taskTable.find((task) => task._id === id);
  const navigate = useNavigate();
  const handleEditTask = (form: TaskFormType) => {
    setSpinner(true);
    editTaskCall(form,task!._id).then(() => {
      refreshData().then(() => {
        navigate("/main-panel");
      });
    });
  };

  return  (
    <TitleAndSection>
      <h1 className="text-center text-[2rem] mb-[3rem] font-[900] bg-slate-600/70 p-[1rem] rounded-lg">
        You are currently editing:
        <br />
        <span className="italic underline font-[500] ">
          {task?.credentials.name}
        </span>
      </h1>

      <TaskForm
        handleEvent={handleEditTask}
        projectUsersTable={projectUsersTable}
        task={task}
      />
    </TitleAndSection>
  );
};

export default TaskEditionPanel;
