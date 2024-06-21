/**
 * Apple login button
 * @param {*} onClick Action to perform when clicked on
 * @returns
 */
const AppleLogin = (props) => {
  const { onClick } = props;
  return (
    <div onClick={onClick} className={`btn-social-media-login`}>
      <img
        className="btn-social-media-login-image"
        alt=""
        src="/appleIcon1.svg"
      />
    </div>
  );
};

export default AppleLogin;
