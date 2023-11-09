export const Job = ({ title, bgColor, icon }) => {
  return (
    <div
      className={`${bgColor} flex aspect-square flex-col items-center justify-center rounded-lg p-6 text-[#281A51]`}
    >
      {icon}
      <p className="pt-2 font-poppin">{title}</p>
    </div>
  );
};
