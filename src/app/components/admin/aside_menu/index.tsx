import Link from "next/link";

export default function AsideMenu({ showUsers }: { showUsers: boolean }) {
  return (
    <aside className="w-1/6 hidden sm:flex flex-col justify-start gap-2 py-10 px-5 bg-white border-r">
      <Link
        href="/dashboard/overview"
        className="text-lg text-left font-MontserratBold text-gray-500 hover:bg-background p-2 rounded-md"
      >
        Resumen
      </Link>
      <Link
        href="/dashboard/products"
        className="text-lg text-left font-MontserratBold text-gray-500 hover:bg-background p-2 rounded-md"
      >
        Productos
      </Link>
      {showUsers && (
        <Link
          href="/dashboard/users"
          className="text-lg text-left font-MontserratBold text-gray-500 hover:bg-background p-2 rounded-md"
        >
          Usuarios
        </Link>
      )}
    </aside>
  );
}
