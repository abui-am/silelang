import React from "react";

const Modal = (props) => {
  const body = props.children;
  return (
    <Modal
      open={props.open}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      disableEnforceFocus
      disableAutoFocus
      onClose={() => {
        props.handleClose();
      }}
    >
      {body}
    </Modal>
  );
};
