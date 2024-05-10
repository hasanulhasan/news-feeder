import SingleNews from "./SingleNews";

export default function LeftSideBar({articles}) {
  return (
    <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
      {
        articles?.map((article,i) => <SingleNews key={i} article={article}/>)
      }
    </div>
  );
}
