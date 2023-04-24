import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./screens/Home/Home";
import { SingIn } from "./screens/SingIn/SingIn";
import { SingUp } from "./screens/SingOut/SingUp";
import "./Global.styles.css";

function App() {
  return (
    <>
      <Header />
      <Home />
      {/* <SingIn /> */}
      {/* <SingUp /> */}
      <Footer />
    </>
  );
}

export default App;
