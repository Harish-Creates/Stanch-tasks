const LightMode = ({ stroke, fill, h, w }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        width={w}
        height={h}
      >
        <circle fill={fill} cx="15" cy="15" r="7" />
        <line
          style={{
            fill: "none",
            stroke: stroke,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
          }}
          x1="15"
          y1="2"
          x2="15"
          y2="5"
        />
        <line
          style={{
            fill: "none",
            stroke: stroke,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
          }}
          x1="15"
          y1="25"
          x2="15"
          y2="28"
        />
        <line
          style={{
            fill: "none",
            stroke: stroke,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
          }}
          x1="28"
          y1="15"
          x2="25"
          y2="15"
        />
        <line
          style={{
            fill: "none",
            stroke: stroke,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
          }}
          x1="5"
          y1="15"
          x2="2"
          y2="15"
        />
        <line
          style={{
            fill: "none",
            stroke: stroke,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
          }}
          x1="24.192"
          y1="5.808"
          x2="22.071"
          y2="7.929"
        />
        <line
          style={{
            fill: "none",
            stroke: stroke,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
          }}
          x1="7.929"
          y1="22.071"
          x2="5.808"
          y2="24.192"
        />
        <line
          style={{
            fill: "none",
            stroke: stroke,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
          }}
          x1="24.192"
          y1="24.192"
          x2="22.071"
          y2="22.071"
        />
        <line
          style={{
            fill: "none",
            stroke: stroke,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
          }}
          x1="7.929"
          y1="7.929"
          x2="5.808"
          y2="5.808"
        />
      </svg>
    </>
  );
};

const DarkMode = ({ fill, h, w }) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.5287 15.9294C21.3687 15.6594 20.9187 15.2394 19.7987 15.4394C19.1787 15.5494 18.5487 15.5994 17.9187 15.5694C15.5887 15.4694 13.4787 14.3994 12.0087 12.7494C10.7087 11.2994 9.90873 9.40938 9.89873 7.36938C9.89873 6.22938 10.1187 5.12938 10.5687 4.08938C11.0087 3.07938 10.6987 2.54938 10.4787 2.32938C10.2487 2.09938 9.70873 1.77938 8.64873 2.21938C4.55873 3.93938 2.02873 8.03938 2.32873 12.4294C2.62873 16.5594 5.52873 20.0894 9.36873 21.4194C10.2887 21.7394 11.2587 21.9294 12.2587 21.9694C12.4187 21.9794 12.5787 21.9894 12.7387 21.9894C16.0887 21.9894 19.2287 20.4094 21.2087 17.7194C21.8787 16.7894 21.6987 16.1994 21.5287 15.9294Z"
        fill={fill}
      />
    </svg>
  );
};

const TopRightArrowFilled = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="25" cy="25" r="25" fill="#141413" />
      <path
        d="M14.5858 32.5858C13.8047 33.3668 13.8047 34.6332 14.5858 35.4142C15.3668 36.1953 16.6332 36.1953 17.4142 35.4142L14.5858 32.5858ZM36 16C36 14.8954 35.1046 14 34 14L16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18L32 18L32 34C32 35.1046 32.8954 36 34 36C35.1046 36 36 35.1046 36 34L36 16ZM17.4142 35.4142L35.4142 17.4142L32.5858 14.5858L14.5858 32.5858L17.4142 35.4142Z"
        fill="#F5F0F6"
      />
    </svg>
  );
};

const SearchIcon = () => {
  return (
    <svg
      className="feather feather-search"
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" x2="16.65" y1="21" y2="16.65" />
    </svg>
  );
};

export { LightMode, DarkMode, TopRightArrowFilled, SearchIcon };
