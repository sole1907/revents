import { MODAL_OPEN, MODAL_CLOSE } from "./modalConstants";

const openModal = (modalType, modalProps) => {
  return {
    type: MODAL_OPEN,
    payload: {
      modalType,
      modalProps
    }
  };
};

const closeModal = () => {
  return {
    type: MODAL_CLOSE
  };
};
