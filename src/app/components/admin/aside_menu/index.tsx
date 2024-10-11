"use client";
export default function AsideMenu({
  showUsers,
  onPageChange,
}: {
  showUsers: boolean;
  onPageChange: (page: string) => void;
}) {
  return (
    <aside className="w-1/6 hidden sm:flex flex-col justify-start gap-2 py-10 px-5 bg-white border-r">
      <button
        onClick={() => onPageChange("dashboard")}
        className="text-lg text-left font-MontserratBold text-gray-500 hover:bg-background p-2 rounded-md"
      >
        Dashboard
      </button>
      <button
        onClick={() => onPageChange("products")}
        className="text-lg text-left font-MontserratBold text-gray-500 hover:bg-background p-2 rounded-md"
      >
        Products
      </button>
      {showUsers && (
        <button
          onClick={() => onPageChange("users")}
          className="text-lg text-left font-MontserratBold text-gray-500 hover:bg-background p-2 rounded-md"
        >
          Users
        </button>
      )}
      <button
        onClick={() => onPageChange("settings")}
        className="text-lg text-left font-MontserratBold text-gray-500 hover:bg-background p-2 rounded-md"
      >
        Settings
      </button>
    </aside>
  );
}
