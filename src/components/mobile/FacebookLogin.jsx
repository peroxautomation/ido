/**
 * Facebook login button
 * @param {*} onClick Action to perform when clicked on
 * @returns
 */
const FacebookLogin = (props) => {
  const { onClick } = props;
  return (
    <div onClick={onClick} className={`btn-social-media-login`}>
      <img
        className="btn-social-media-login-image"
        alt=""
        src="/facebookIcon1.svg"
      />
    </div>
  );
};

export default FacebookLogin;
