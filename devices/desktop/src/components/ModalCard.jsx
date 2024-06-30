const ModalCard = (props) => {
  const { children, className } = props;

  return (
    <div className="modal-background">
      <div className="modal-position">
        <div className={`modal_container ${className}`}>{children}</div>
      </div>
    </div>
  );
};

export default ModalCard;
