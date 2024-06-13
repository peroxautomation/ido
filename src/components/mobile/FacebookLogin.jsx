const FacebookLogin = ({ className = "", onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`[text-decoration:none] rounded-3xl bg-white-8 flex flex-row items-start justify-start p-3 ${className} cursor-pointer`}
    >
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0"
        alt=""
        src="/social-icons1.svg"
      />
    </div>
  );
};

export default FacebookLogin;
