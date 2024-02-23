function StatusCard({ icon, color, className, children }) {
  return (
    <div
      className={`${className} ${color} rounded-md p-4 relative min-h-[5rem] lg:min-h-[8rem]`}
    >
      {children}

      <span className="absolute bottom-1 right-1 text-[4rem] lg:text-[6rem]">
        {icon}
      </span>
    </div>
  );
}

export default StatusCard;
