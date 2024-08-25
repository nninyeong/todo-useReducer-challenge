import styled from "styled-components";
import Title from "./components/Title";
import TodoList from "./components/TodoList";
import TaskContextProvider from "./components/Context/TaskContextProvider";

function App() {
  return (
    <AppContainer>
      <Title />
      <TaskContextProvider>
        <TodoList />
      </TaskContextProvider>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
