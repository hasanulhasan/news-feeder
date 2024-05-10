import { useState } from "react";
import Footer from "./component/Footer";
import LeftSideBar from "./component/LeftSideBar";
import Navbar from "./component/Navbar";
import RightSideBar from "./component/RightSideBar";
import useNewsQuery from "./hooks/useNewsQuery";

function App() {
  const [category, setCategory] = useState("general");
  const {loading, error, data} = useNewsQuery(category);

  return (
    <>
      <Navbar onCategory={setCategory}/>
      <main className="my-10 lg:my-14">
        <div className="container mx-auto grid grid-cols-12 gap-8">
          <LeftSideBar articles={data?.articles}/>
          <RightSideBar/>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default App;
