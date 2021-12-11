import { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  ButtonGroup,
} from "@chakra-ui/react";
import modalContent from "./ModalContent";

function BaseModal({ isOpen, onClose, title, content, buttons }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="sm">
        <ModalOverlay />
        <ModalContent py={9}>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{content}</ModalBody>

          <ModalFooter justifyContent="center">
            <ButtonGroup spacing={3}>{buttons}</ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

function AnnoyingModals({ isOpen, onClose, t }) {
  const [index, setIndex] = useState(0);
  const [content, setContent] = useState({});

  useEffect(() => {
    const CONTENT_MAX_LENGTH = modalContent.length;
    const newContent = modalContent[index];
    const onClick =
      index + 1 === CONTENT_MAX_LENGTH
        ? onClose
        : () => setIndex((prevState) => prevState + 1);
    const setupNewContent = newContent({
      onClick,
      t,
      onClose,
    });
    setContent(setupNewContent);
  }, [index]);

  return <BaseModal isOpen={isOpen} onClose={onClose} {...content} />;
}

export default AnnoyingModals;
