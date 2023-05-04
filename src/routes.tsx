import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./screens/Home/Home";
import { Team } from "./screens/Team/Team";
import { SingIn } from "./screens/SingIn/SingIn";
import { SingUp } from "./screens/SingOut/SingUp";
import { Plans } from "./screens/Plans/Plans";
import { Profile } from "./screens/Profile/Profile";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipe" element={<Team />} />
        <Route path="/entrar" element={<SingIn />} />
        <Route path="/cadastrar" element={<SingUp />} />
        <Route path="/planos" element={<Plans />} />
        <Route path="/perfil" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
