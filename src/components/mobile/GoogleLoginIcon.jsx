const GoogleLoginIcon = () => {
  return (
    <div className="[text-decoration:none] rounded-3xl bg-white-8 flex flex-row items-start justify-start p-3">
      <a
        className="[text-decoration:none] w-6 relative h-6 overflow-hidden shrink-0"
        href="https://www.google.com"
      >
        <img
          className="absolute h-full w-[97.92%] top-[0%] right-[2.08%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector.svg"
        />
      </a>
    </div>
  );
};

export default GoogleLoginIcon;
