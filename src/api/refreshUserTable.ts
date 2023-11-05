import { PROJECT_ID, SECRET_KEY, USER_ID } from "../API_CREDENTIALS";

export const refreshUserTable=()=>fetch(
    `https://task-manager-api-401408.lm.r.appspot.com/project/${PROJECT_ID}`,
    {
      method: "GET",
      headers: {
        "user-id": USER_ID,
        "secret-key":SECRET_KEY,
        accept: "application/json",
      },
    }
  )
    .then((data) => data.json())
