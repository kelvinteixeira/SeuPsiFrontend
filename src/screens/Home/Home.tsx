import { useSelector } from "react-redux";
import { Footer } from "../../components/Footer/Footer";
import { HomeHeader } from "./Components/HomeHeader/HomeHeader";
import { PageSections } from "./Components/PageSections/PageSections";
import { rootReducer } from "../../redux/rootReducer";
import { Header } from "../../components/Header/Header";

export function Home() {
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);

  return (
    <>
      {currentUser  ? <Header /> : <HomeHeader />}
      <PageSections />
      <Footer />
    </>
  );
}
