import { Job } from "./Job";

const jobs = [
  {
    title: "Furniture",
    bgColor: "bg-[#FFECEC]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <g clipPath="url(#clip0_2_24)">
          <path
            d="M5.33333 14.6667C6.04058 14.6667 6.71885 14.9476 7.21895 15.4477C7.71905 15.9478 8 16.6261 8 17.3333V18.6667H24V17.3333C24 16.6261 24.281 15.9478 24.781 15.4477C25.2811 14.9476 25.9594 14.6667 26.6667 14.6667C27.3739 14.6667 28.0522 14.9476 28.5523 15.4477C29.0524 15.9478 29.3333 16.6261 29.3333 17.3333V24C29.3333 24.3536 29.1929 24.6928 28.9428 24.9428C28.6928 25.1929 28.3536 25.3333 28 25.3333H4C3.64638 25.3333 3.30724 25.1929 3.05719 24.9428C2.80714 24.6928 2.66667 24.3536 2.66667 24V17.3333C2.66667 16.6261 2.94762 15.9478 3.44771 15.4477C3.94781 14.9476 4.62609 14.6667 5.33333 14.6667V14.6667Z"
            stroke="#281A51"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.33333 14.6667V10.6667C5.33333 9.60581 5.75476 8.58839 6.50491 7.83824C7.25505 7.0881 8.27247 6.66667 9.33333 6.66667H22.6667C23.7275 6.66667 24.7449 7.0881 25.4951 7.83824C26.2452 8.58839 26.6667 9.60581 26.6667 10.6667V14.6667"
            stroke="#281A51"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 6.66667V18.6667"
            stroke="#281A51"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_24">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },

  {
    title: "Property",
    bgColor: "bg-[#F7ECFF]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },

  {
    title: "Job",
    bgColor: "bg-[#ECF0FF]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
        />
      </svg>
    ),
  },

  {
    title: "Travel",
    bgColor: "bg-[#D7F9F3]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
        />
      </svg>
    ),
  },

  {
    title: "Furniture",
    bgColor: "bg-[#FFECEC]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <g clipPath="url(#clip0_2_24)">
          <path
            d="M5.33333 14.6667C6.04058 14.6667 6.71885 14.9476 7.21895 15.4477C7.71905 15.9478 8 16.6261 8 17.3333V18.6667H24V17.3333C24 16.6261 24.281 15.9478 24.781 15.4477C25.2811 14.9476 25.9594 14.6667 26.6667 14.6667C27.3739 14.6667 28.0522 14.9476 28.5523 15.4477C29.0524 15.9478 29.3333 16.6261 29.3333 17.3333V24C29.3333 24.3536 29.1929 24.6928 28.9428 24.9428C28.6928 25.1929 28.3536 25.3333 28 25.3333H4C3.64638 25.3333 3.30724 25.1929 3.05719 24.9428C2.80714 24.6928 2.66667 24.3536 2.66667 24V17.3333C2.66667 16.6261 2.94762 15.9478 3.44771 15.4477C3.94781 14.9476 4.62609 14.6667 5.33333 14.6667V14.6667Z"
            stroke="#281A51"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.33333 14.6667V10.6667C5.33333 9.60581 5.75476 8.58839 6.50491 7.83824C7.25505 7.0881 8.27247 6.66667 9.33333 6.66667H22.6667C23.7275 6.66667 24.7449 7.0881 25.4951 7.83824C26.2452 8.58839 26.6667 9.60581 26.6667 10.6667V14.6667"
            stroke="#281A51"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 6.66667V18.6667"
            stroke="#281A51"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_24">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },

  {
    title: "Property",
    bgColor: "bg-[#F7ECFF]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },

  {
    title: "Job",
    bgColor: "bg-[#ECF0FF]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
        />
      </svg>
    ),
  },

  {
    title: "Travel",
    bgColor: "bg-[#D7F9F3]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
        />
      </svg>
    ),
  },
];

export const JobList = () => {
  return (
    <div className="w-[40rem] rounded-3xl bg-white p-12 font-poppin font-medium">
      <div className="flex gap-3">
        <div className="relative grow rounded border-2 border-gray-300">
          <input
            type="text"
            placeholder="Search for a part-time job"
            className="ml-8 w-[16rem] p-4 outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            className="absolute left-4 top-4 h-6 w-6"
          >
            <g opacity="0.54" clipPath="url(#clip0_2_7)">
              <path
                d="M9.16667 15.5833C12.7105 15.5833 15.5833 12.7105 15.5833 9.16667C15.5833 5.62284 12.7105 2.75 9.16667 2.75C5.62284 2.75 2.75 5.62284 2.75 9.16667C2.75 12.7105 5.62284 15.5833 9.16667 15.5833Z"
                stroke="#281A51"
                strokeWidth="1.375"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.25 19.25L13.75 13.75"
                stroke="#281A51"
                strokeWidth="1.375"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_7">
                <rect width="22" height="22" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <button className="flex items-center rounded bg-[#281A51] p-4 text-base text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            className="mr-2 h-6 w-6"
          >
            <g clipPath="url(#clip0_2_18)">
              <path
                d="M2.75 6.41666L8.25 3.66666L13.75 6.41666L19.25 3.66666V15.5833L13.75 18.3333L8.25 15.5833L2.75 18.3333V6.41666Z"
                stroke="white"
                strokeWidth="1.375"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.25 3.66666V15.5833"
                stroke="white"
                strokeWidth="1.375"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.75 6.41666V18.3333"
                stroke="white"
                strokeWidth="1.375"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_18">
                <rect width="22" height="22" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Use map
        </button>
      </div>

      <div className="mt-8 grid grid-cols-4 gap-4">
        {jobs.map((job, index) => (
          <Job
            key={index}
            title={job.title}
            icon={job.icon}
            bgColor={job.bgColor}
          />
        ))}
      </div>
    </div>
  );
};
