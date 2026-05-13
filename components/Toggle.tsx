

export default function Toggle(toggleProps: {
  enabled: boolean;
  onToggle: (value: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => toggleProps.onToggle(!toggleProps.enabled)}
      className="flex h-8 w-16 items-center rounded-full bg-gray-700 p-1 shadow-black/30 transition-all duration-300"
    >
      <span
        className={`h-6 w-6 rounded-full bg-white shadow-sm transition-transform duration-300 ${
          toggleProps.enabled
            ? "translate-x-8"
            : "translate-x-0"
        }`}
      />
    </button>
  );
}