export default function Loader({ size }: { size?: string }) {
  return (
    <div
      className={`inline-block h-${size ?? "12"} w-${size ?? "12"}
                  animate-spin rounded-full
                  border-4 border-solid border-gray-400 border-e-transparent
                  align-[-0.125em] text-surface
                  motion-reduce:animate-[spin_1s_linear_infinite] dark:text-white`}
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
}
