
export default function SingleNews({article}) {
  const {title, description, publishedAt} = article

  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4">
      <div className="col-span-12 md:col-span-4">
        <a href="#">
          <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
            {title}
          </h3>
        </a>
        <p className="text-base text-[#292219]">
         {description}
        </p>
        <p className="mt-5 text-base text-[#94908C]">{publishedAt}</p>
      </div>
    </div>
  );
}
