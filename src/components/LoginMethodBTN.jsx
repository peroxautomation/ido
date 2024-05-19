const LoginMethodBTN = ({ hugeIcondeviceoutlineuser, cTA }) => {
  return (
    <a className="[text-decoration:none] self-stretch rounded-xl bg-white-8 flex flex-row items-center justify-center py-2.5 px-2 gap-[8px] text-center text-base text-neutral-100 font-body-regular">
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0"
        alt=""
        src={hugeIcondeviceoutlineuser}
      />
      <div className="relative leading-[24px] font-semibold">{cTA}</div>
    </a>
  );
};

export default LoginMethodBTN;
