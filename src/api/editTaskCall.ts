import { TaskFormType } from "../types/taskFormType";
import { PROJECT_ID, SECRET_KEY, USER_ID } from "../API_CREDENTIALS";

export const editTaskCall=(form: TaskFormType,taskId:string)=>fetch(
    `https://task-manager-api-401408.lm.r.appspot.com/project/${PROJECT_ID}/task/${taskId}`,
    {
      method: "PUT",
      headers: {
        "user-id": USER_ID,
        "secret-key":SECRET_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.taskName,
        assignedTo: { userId: form.assigned },
        estimation: form.estimation,
        specialization: form.specialization,
      }),
    })