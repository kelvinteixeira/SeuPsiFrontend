import { Team } from "./screens/Team/Team";
import { SingIn } from "./screens/SingIn/SingIn";
import { SingUp } from "./screens/SingOut/SingUp";
import "./Global.styles.css";
import { Plans } from "./screens/Plans/Plans";

function App() {
  return (
    <>
      <SingIn />
      <Team />
      <Plans />
      <SingUp />
    </>
  );
}

export default App;
