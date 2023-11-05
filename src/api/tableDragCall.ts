import { PROJECT_ID, SECRET_KEY, USER_ID } from "../API_CREDENTIALS";
import { TaskState } from "../types/taskEnum";

export const tableDragCall=(taskState:TaskState,taskId:string)=>fetch(
    `https://task-manager-api-401408.lm.r.appspot.com/project/${PROJECT_ID}/task/${taskId}/state`,
    {
        method: "PUT",
        headers: {
            "user-id": USER_ID,
            "secret-key": SECRET_KEY,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ state: taskState }),
    });
