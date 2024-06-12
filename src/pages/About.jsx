import Title from "../components/mobile/Title";

/**
 * About us page
 * @returns A JSX element
 */
const About = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-center text-[1.25rem] text-neutral-100 font-button-1-regular grid grid-flow-row justify-center">
      <Title pageName="About us" />
      <div className="relative top-[15vh] max-h-[83vh] flex flex-col items-center overflow-y-auto gap-8">
        <div className="relative w-[90%] h-max">
          <div className="flex-1 relative leading-[1.75rem] font-semibold">{`It is a long established fact that a reader will be distracted by the readable content `}</div>
        </div>
        <div className="relative text-[1rem] w-[90%]">
          <div className="flex-1 relative leading-[1.5rem] text-left">
            <p className="m-0">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy. Various
              versions have evolved over the years, sometimes by accident,
              sometimes on purpose (injected humour and the like).
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy. Various
              versions have evolved over the years, sometimes by accident,
              sometimes on purpose (injected humour and the like).Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
