import React from "react";
import styled from "styled-components";
import ModalPortal from "../components/ModalPortal.jsx";
import Modal from "../components/Modal.jsx";

// export default function CrewBox() {
//   return (
//     <Modal>
//       <div>
//         <div>CrewBox</div>
//       </div>
//     </Modal>
//   );
// }

const CrewBox = (props) => {
  const [modalOn, setModalOn] = useState(false);

  const handleModal = () => {
    setModalOn(!modalOn);
  };

  return (
    <>
      <Container>
        <button onClick={handleModal} />
        // ... 코드 생략 ...
        <ModalPortal>{modalOn && <Modal onClose={handleModal} />}</ModalPortal>
      </Container>
    </>
  );
};

export default CrewBox;
