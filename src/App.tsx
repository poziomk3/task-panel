import { createContext, useCallback, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import TaskPanel from "./components/Pages/MainPanel/TaskPanel";
import TaskAdditionPanel from "./components/Pages/AddTask/TaskAdditionPanel";
import TaskEditionPanel from "./components/Pages/EditTask/TaskEditionPanel";
import Loading from "./components/Common/Loading";
import LoginPage from "./components/Pages/Auth/Login/LoginPage";
import AuthProvider from "./components/Pages/Auth/AuthProvider";
import ProtectedRoute from "./components/Pages/Auth/ProtectedRoute";

import { Task } from "./types/taskType";
import { User } from "./types/userType";

import { refreshDataTable } from "./api/refreshTaskTable";
import { refreshUserTable } from "./api/refreshUserTable";
import EntryPopup from "./components/Pages/EntryPopup/EntryPopup";

// import { PROJECT_ID, SECRET_KEY, USER_ID } from "./API_CREDENTIALS";

export const LoadingContext = createContext<(arg: boolean) => void>(
  (arg) => true
);

function App() {
  const location = useLocation();
  const [taskTable, setTaskTable] = useState<Array<Task>>([]);
  const [projectUsersTable, setProjectUsersTable] = useState<Array<User>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const refreshData = useCallback(async () => {
    setIsLoading(true);
    refreshDataTable().then((data) => {
      setTaskTable(data);
      setIsLoading(false);
      return true;
    });
  }, []);

  const onLogin = useCallback(() => {
    refreshData();
    refreshUserTable().then((data) => {
      setProjectUsersTable(data.projectCredentials.users);
    });
  }, [refreshData]);

  //wyswietlanie wszytkich projektow
  // fetch(
  //   `https://task-manager-api-401408.lm.r.appspot.com/project/user`,
  //   {
  //     method: "GET",
  //     headers: {
  //       "user-id": USER_ID,
  //       "secret-key":SECRET_KEY,
  //     },
  //   }
  // )
  //   .then((data) => data.json()).then((data) => {console.log(data)});

  return (
    <LoadingContext.Provider value={setIsLoading}>
      <EntryPopup/>
      <AuthProvider onLogin={onLogin}>
        <div className="bg-image-custom min-h-screen min-w-screen text-white  justify-center flex flex-col ">
          <h1 className="text-center lg:text-[4rem] font-[500] italic my-[1rem]">
            {" "}
            MANAGE YOUR WORK WISELY!{" "}
          </h1>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="w-full  flex-1 h-full flex flex-col justify-center ">
              <Routes location={location} key={location.pathname}>
                <Route path="/login" element={<LoginPage />} />
                <Route
                  path="/add-task"
                  element={
                    <ProtectedRoute>
                      <TaskAdditionPanel
                        refreshData={refreshData}
                        projectUsersTable={projectUsersTable}
                      />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/main-panel"
                  element={
                    <ProtectedRoute>
                      <TaskPanel
                        taskTable={taskTable}
                        setTaskTable={setTaskTable}
                        refreshData={refreshData}
                      />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/*"
                  element={
                    <ProtectedRoute>
                      <Navigate to="/main-panel" />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/edit/:id"
                  element={
                    <ProtectedRoute>
                      <TaskEditionPanel
                        projectUsersTable={projectUsersTable}
                        taskTable={taskTable}
                        refreshData={refreshData}
                      />{" "}
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </div>
          )}
        </div>
      </AuthProvider>
    </LoadingContext.Provider>
  );
}

export default App;
