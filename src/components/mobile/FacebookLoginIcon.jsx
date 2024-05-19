const FacebookLoginIcon = () => {
  return (
    <div className="[text-decoration:none] rounded-3xl bg-white-8 flex flex-row items-start justify-start p-3">
      <a
        className="[text-decoration:none] w-6 relative h-6 overflow-hidden shrink-0"
        href="https://www.facebook.com"
      >
        <img
          className="absolute h-[99.58%] w-full top-[0%] right-[0%] bottom-[0.42%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/c.svg"
        />
        <img
          className="absolute h-[81.67%] w-[45.42%] top-[18.33%] right-[27.08%] bottom-[0%] left-[27.5%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/d.svg"
        />
      </a>
    </div>
  );
};

export default FacebookLoginIcon;
