import { Draggable } from "react-beautiful-dnd";
import { Task } from "../../../types/taskType";
import { AiFillTool } from "react-icons/ai";
import { BiSolidTrashAlt } from "react-icons/bi";
import { EstimationMap } from "../../../types/estimationEnum";
import { useCallback } from "react";
import { TaskState } from "../../../types/taskEnum";
interface TaskCardProps {
  task: Task;
  index: number;
  isDragDisabled: boolean;
  handleDelete?(arg: string): void | undefined;
  handleEdit?(arg: string): void | undefined;
}
const TaskCard: React.FC<TaskCardProps> = ({
  task,
  index,
  isDragDisabled,
  handleDelete,
  handleEdit,
}) => {
  const isLeftBehind = useCallback(() => {
    if (task.state != TaskState.NOT_ASSIGNED) return false;
    const date = new Date(task.createdAt);
    const dateDiff = Date.now() - date.getTime();
    var Difference_In_Days = Math.floor(dateDiff / (1000 * 3600 * 24));
    return Difference_In_Days > 13 ? true : false;
  }, [task.createdAt, task.state]);
  return (
    <Draggable
      shouldRespectForcePress={true}
      isDragDisabled={isDragDisabled}
      draggableId={task._id}
      index={index}
      key={task._id}
    >
      {(provided, snapshot) => (
        <div
          className={`   relative px-[0.7rem]  select-none flex flex-col md:flex-row   justify-center border-white  border rounded-lg bg-slate-600/60  ${
            isLeftBehind() ? "animate-danger" : ""
          } `}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div
            className={` text-center flex justify-center md:justify-left  p-[1rem] items-center `}
          >
            <h1 className=" overflow-hidden max-w-[12em]"> {task.credentials.name.toUpperCase()} </h1>{" "}
            <span className=" pl-[1rem] text-[1.5rem]">
              {EstimationMap.get(task.credentials.estimation)}
            </span>
          </div>
          <div className="  flex gap-[0.6rem]  md:ml-auto justify-center ">
            {" "}
            <div
              className={`group cursor-pointer text-[1.5rem] border-2 rounded-lg my-auto p-[0.3rem] ${
                handleDelete == undefined
                  ? "border-gray-200 text-gray opacity-40"
                  : " border-blue-500"
              }`}
              onClick={
                handleEdit != undefined
                  ? () => {
                      handleEdit(task._id);
                    }
                  : undefined
              }
            >
              <div
                className={`  ${
                  task.state != TaskState.CLOSED
                    ? "group-hover:rotate-[360deg]"
                    : ""
                } duration-200`}
              >
                <AiFillTool className="" />
              </div>
            </div>
            <div
              className={`group cursor-pointer text-[1.5rem] border-2 rounded-lg my-auto p-[0.3rem] ${
                handleDelete == undefined
                  ? "border-gray-200 text-gray opacity-40"
                  : " border-red-500"
              }`}
              onClick={
                handleDelete != undefined
                  ? () => {
                      handleDelete(task._id);
                    }
                  : undefined
              }
            >
              <div
                className={`  ${
                  task.state != TaskState.CLOSED
                    ? "group-hover:rotate-[360deg]"
                    : ""
                } duration-200`}
              >
                <BiSolidTrashAlt />
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
