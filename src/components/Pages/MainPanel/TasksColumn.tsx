import { Droppable } from "react-beautiful-dnd";
import { TaskState, TaskStateMap } from "../../../types/taskEnum";
import { Task } from "../../../types/taskType";
import TaskCard from "./Task.Card";

interface TasksColumnProps {
  taskState: TaskState;
  tasksList: Array<Task>;
  handleDelete?(arg: string): void;
  handleEdit?(arg: string): void;
}

const TasksColumn: React.FC<TasksColumnProps> = ({
  taskState,
  tasksList,
  handleDelete,
  handleEdit,
}) => {
  return (
    <div className=" flex flex-col   ">
      <h2 className="text-center text-[1.5rem] font-[500] italic ">
        {TaskStateMap.get(taskState)?.toUpperCase()}
      </h2>
      <div className="h-full md:max-h-[40vh] max-h-[20vh] md:aspect-auto w-[25em] ">
        <Droppable droppableId={taskState} key={taskState}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="flex flex-col gap-[0.4rem] px-[0.3rem] overflow-x-hidden  h-full border py-[0.3rem] overscroll-y-scroll  "
            >
              {tasksList.map((value, index) => (
                <div key={index}>
                  <TaskCard
                    task={value}
                    index={index}
                    key={index}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    isDragDisabled={taskState == TaskState.CLOSED}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};

export default TasksColumn;
