type ActionButtonType = {
  onClick: () => void;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  className?: string;
};

export const ActionButton = ({
  onClick,
  variant = "primary",
  children,
  icon: Icon,
  className = "",
}: ActionButtonType) => {
  const baseClasses =
    "group flex items-center cursor-pointer justify-center gap-3 rounded-full px-6 py-3 transition-all duration-300 ease-in-out";
  const variantClasses = {
    primary: "bg-800 hover:bg-700 text-white shadow-lg hover:shadow-xl",
    secondary: "text-900 hover:bg-400 bg-gray-300 hover:shadow-md font-medium",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}{" "}
      {Icon && (
        <Icon
          size={18}
          className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-1"
        />
      )}
    </button>
  );
};
