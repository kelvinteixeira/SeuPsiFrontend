import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./screens/Home/Home";
import { Team } from "./screens/Team/Team";
import { SingIn } from "./screens/SingIn/SingIn";
import { Singup } from "./screens/Singup/Singup";
import { Plans } from "./screens/Plans/Plans";
import { AccountSettings } from "./screens/AccountSettings/AccountSettings";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipe" element={<Team />} />
        <Route path="/entrar" element={<SingIn />} />
        <Route path="/cadastrar" element={<Singup />} />
        <Route path="/planos" element={<Plans />} />
        <Route path="/conta" element={<AccountSettings />} />
      </Routes>
    </BrowserRouter>
  );
}
