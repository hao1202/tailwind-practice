export const Job = ({ title, bgColor, icon }) => {
  return (
    <div
      className={`${bgColor} flex aspect-square flex-col items-center justify-center rounded-lg p-6`}
    >
      {icon}
      <p>{title}</p>
    </div>
  );
};
