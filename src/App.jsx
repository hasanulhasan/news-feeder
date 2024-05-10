import Footer from "./component/Footer";
import LeftSideBar from "./component/LeftSideBar";
import Navbar from "./component/Navbar";
import RightSideBar from "./component/RightSideBar";

function App() {
  return (
    <>
      <Navbar/>
      <main className="my-10 lg:my-14">
        <div className="container mx-auto grid grid-cols-12 gap-8">
          <LeftSideBar/>
          <RightSideBar/>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default App;
