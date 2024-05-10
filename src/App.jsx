import { useState } from "react";
import Footer from "./component/Footer";
import LeftSideBar from "./component/LeftSideBar";
import Navbar from "./component/Navbar";
import RightSideBar from "./component/RightSideBar";
import useNewsQuery from "./hooks/useNewsQuery";
import useDebounce from "./hooks/useDebounce";

function App() {
  const [category, setCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState("");
  const { loading, error, data } = useNewsQuery(category, searchTerm);

  const handleSearch = (e) => {
    e.preventDefault();
    doSearch(e.target.value);
  };

  const doSearch = useDebounce((term) => {
    setSearchTerm(term);
  }, 1000);

  return (
    <>
      <Navbar onCategory={setCategory} onSearch={handleSearch} />
      <main className="my-10 lg:my-14">
        <div className="container mx-auto grid grid-cols-12 gap-8">
          {searchTerm ? (
            <LeftSideBar articles={data?.result} />
          ) : (
            <LeftSideBar articles={data?.articles} />
          )}
          <RightSideBar />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
