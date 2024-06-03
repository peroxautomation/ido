const CoverBtn = ({
  cta,
  ctaClick,
  className
}) => {


  return (
    <div 
      onClick={ctaClick} 
      className={`absolute bottom-[1rem] left-[calc(50%_-_50.5px)] rounded-md bg-neutral-800 w-[6.313rem] flex flex-row items-center justify-center p-[0.5rem] box-border ${className}`}>
        <div className="relative leading-[1rem]">{cta}</div>
    </div>
  );
};


export default CoverBtn;
