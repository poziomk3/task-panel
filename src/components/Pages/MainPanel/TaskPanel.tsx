import { useContext } from "react";
import { TaskState, TaskStateMap } from "../../../types/taskEnum";
import { Task } from "../../../types/taskType";
import TasksColumn from "./TasksColumn";
import { DragDropContext } from "react-beautiful-dnd";
import { Link, useNavigate } from "react-router-dom";
import { isTheChangeLegal } from "./isTheChangeLegal";
import { RiFileUploadLine } from "react-icons/ri";
import CustomButton from "../../Common/CustomButton";
import { LoadingContext } from "../../../App";
import { deleteTaskCall } from "../../../api/deleteTaskCall";
import { tableDragCall } from "../../../api/tableDragCall";
import { motion } from "framer-motion";
interface TaskPanelProps {
  taskTable: Array<Task>;
  setTaskTable(value: Array<Task>): void;
  refreshData(): Promise<void>;
}

const TaskPanel: React.FC<TaskPanelProps> = ({
  taskTable,
  setTaskTable,
  refreshData,
}) => {
  const setSpinner = useContext(LoadingContext);
  const navigate = useNavigate();
  const handleDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;

    if (destination == null) return;
    if (source.droppableId === destination?.droppableId) return;

    if (isTheChangeLegal(source.droppableId, destination.droppableId)) {
      tableDragCall(destination?.droppableId, draggableId);
      setTaskTable(
        taskTable.map((task) =>
          task._id == draggableId
            ? { ...task, state: destination?.droppableId }
            : task
        )
      );
    }
  };
  const handleDelete = (taskId: string) => {
    setSpinner(true);
    deleteTaskCall(taskId).then(() => {
      refreshData();
    });
  };

  return (
    <div
     className=" min-h-full h-full flex-1 flex-grow flex justify-center flex-col items-center    bg-slate-600/60   lg:m-[1rem] rounded-lg pb-[0.5rem] ">
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid    xl:grid-cols-3   gap-[0.3rem]    px-[2rem] py-[1rem]  flex-1 xl:max-h-[50vh] rounded-lg ">
          {Array.from(TaskStateMap, ([name, value]) => ({ name, value })).map(
            ({ name, value }, index) =>
              name != TaskState.CLOSED ? (
                <TasksColumn
                  key={index}
                  tasksList={taskTable.filter((task) => task.state === name)}
                  taskState={name}
                  handleDelete={handleDelete}
                  handleEdit={(arg) => {
                    navigate(`/edit/${arg}`);
                  }}
                />
              ) : (
                <TasksColumn
                  key={index}
                  tasksList={taskTable.filter((task) => task.state === name)}
                  taskState={name}
                />
              )
          )}
        </div>
        <CustomButton
          label={"Add task!"}
          onClick={() => {
            navigate("/add-task");
          }}
          icon={<RiFileUploadLine />}
        />
      </DragDropContext>
    </div>
  );
};

export default TaskPanel;
