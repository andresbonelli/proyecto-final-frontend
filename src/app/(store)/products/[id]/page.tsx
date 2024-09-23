export default function ProductDetails({ params }: { params: { id: string } }) {
  return (
    <div
      id="main-sections"
      className="fex flex-col 2xl:px-80 xl:px-60 lg:px-40 md:px-20 px-3 pt-10 mb-5"
    >
      <h2 className="text-3xl text-center font-MontserratBold">
        Products details
      </h2>
      <h2 className="text-3xl text-center font-MontserratBold">{params.id}</h2>
    </div>
  );
}
