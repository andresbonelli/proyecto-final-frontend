export default function AdminOverview({ show }: { show: boolean }) {
  return (
    <div
      className={`${show ? "flex" : "hidden"} flex-col justify-start bg-white`}
    >
      <h1>ADMIN DASHBOARD</h1>
      <h1>TODO: overview of shop metrics and statistics</h1>
    </div>
  );
}
