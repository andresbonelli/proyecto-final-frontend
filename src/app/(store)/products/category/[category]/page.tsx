export default function ProductCategory({
  params,
}: {
  params: { category: string };
}) {
  return (
    <div
      id="main-sections"
      className="fex flex-col 2xl:px-80 xl:px-60 lg:px-40 md:px-20 px-3 pt-10 mb-5"
    >
      <h2 className="text-3xl text-center font-MontserratBold">
        Products by category
      </h2>
      <h2 className="text-3xl text-center font-MontserratBold">
        {params.category}
      </h2>
    </div>
  );
}
