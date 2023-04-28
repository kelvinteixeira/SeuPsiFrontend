import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Team } from "./screens/Team/Team";
import { SingIn } from "./screens/SingIn/SingIn";
import { SingUp } from "./screens/SingOut/SingUp";
import "./Global.styles.css";
import { Plans } from "./screens/Plans/Plans";

function App() {
  return (
    <>
      <Header />
      {/* <Team /> */}
      <Plans />
      {/* <SingIn /> */}
      {/* <SingUp /> */}
      <Footer />
    </>
  );
}

export default App;
