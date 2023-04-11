import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";
import { getTasks } from "./features/taskSlice/asyncReducers";
import { useAppDispatch, useAppSelector } from "./store";
import { TaskState } from "./interfaces/TaskState.interface";
import Spinner from "./components/Spinner";

function App() {
  const { isFormShown } = useAppSelector((state) => state.form);

  const { tasks, isLoading }: TaskState = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {isFormShown && <AddTask />}
                {tasks.length > 0 ? <Tasks /> : "No Tasks To Show"}
              </>
            }
          ></Route>
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
