import {  useForm } from "react-hook-form";
import { Estimation } from "../../../types/estimationEnum";
import { Specialization } from "../../../types/specializationEnum";
import { User } from "../../../types/userType";
import { Task } from "../../../types/taskType";
import { TaskFormType } from "../../../types/taskFormType";
import { AiOutlineLock, AiFillCheckCircle } from "react-icons/ai";
import { ImCross } from "react-icons/im";

import FormLabel from "./FormLabel";
import FormSelect from "./FormSelect";
import FormRowContainer from "./FormRowContainer";
import CustomButton from "../CustomButton";
import { useNavigate } from "react-router-dom";

interface TaskForm {
  projectUsersTable: Array<User>;
  task?: Task;
  handleEvent(arg: TaskFormType): void;
}

const TaskForm: React.FC<TaskForm> = ({
  projectUsersTable,
  task,
  handleEvent,
}) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const estimationTable = Object.keys(Estimation).map((key) => {
    return { value: key, label: key };
  });

  const specializationTable = Object.values(Specialization).map((key) => {
    return { value: key, label: key };
  });
  const userTable = projectUsersTable.map((item) => {
    return { value: item.id, label: item.name };
  });
  const userid = "e9d5279e-a010-48b8-a97f-8e81f416954b";
  const onSubmit = (data: any) => {
    const arg = { ...data, created: userid };
    handleEvent(arg);
  };
  console.log(task);
  return (
    <div className="   text-black text-[1rem] flex justify-center ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" bg-slate-600/70 p-[1rem] rounded-lg flex flex-col md:w-[40em] gap-[0.2rem]  "
      >
        <FormRowContainer>
          <FormLabel label="Task name:" />
          <input
            className="p-[0.45rem] w-[20em]"
            defaultValue={task == undefined ? "" : task.credentials.name}
            type="text"
            placeholder=" task name"
            {...register("taskName", { required: true })}
          />
        </FormRowContainer>

        <FormRowContainer>
          <FormLabel label="Estimation:" />
          <FormSelect
            control={control}
            defaultValue={task == undefined ? "" : task.credentials.estimation}
            label="estimation"
            table={estimationTable}
          />
        </FormRowContainer>

        <FormRowContainer>
          <FormLabel label="Specialization:" />
          <FormSelect
            control={control}
            defaultValue={
              task == undefined ? "" : task.credentials.specialization
            }
            label="specialization"
            table={specializationTable}
          />
        </FormRowContainer>

        <FormRowContainer>
          <FormLabel label="Assigned to:" />
          <FormSelect
            control={control}
            defaultValue={
              task == undefined
                ? ""
                : userTable.find(
                    (user) => user.value == task.credentials.assignedTo?.userId
                  )?.value
            }
            label="assigned"
            table={userTable}
          />
        </FormRowContainer>

        {task != undefined ? (
          <>
            <FormRowContainer>
              <FormLabel label="Created by:" />
              <AiOutlineLock className="text-red-500 mr-[1rem] mb-[0.1rem] " />
              <input
                className="p-[0.45rem] w-[20em] bg-white text-gray-400"
                disabled={true}
                defaultValue={task.createdBy.userId}
              />
            </FormRowContainer>

            <FormRowContainer>
              <FormLabel label="Created at:" />
              <AiOutlineLock className="text-red-500 mr-[1rem] mb-[0.1rem] " />
              <input
                className="p-[0.45rem]  w-[20em] bg-white text-gray-400"
                disabled={true}
                defaultValue={new Date(task!.createdAt).toDateString()}
              />
            </FormRowContainer>
          </>
        ) : (
          <></>
        )}
        <div className="flex gap-[0.2rem] justify-center pt-[0.4rem] text-white">
          <CustomButton
            label={"Execute"}
            onClick={() => {}}
            type="submit"
            icon={<AiFillCheckCircle />}
          />

          <CustomButton
            label={"Go back"}
            onClick={() => {
              navigate("/main-panel");
            }}
            type="reset"
            icon={<ImCross />}
            danger={true}
          />
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
