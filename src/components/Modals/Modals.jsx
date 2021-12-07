import { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Lorem,
  useDisclosure,
  ButtonGroup,
  VStack,
  Box,
  Text,
  Image,
} from "@chakra-ui/react";

const initial = ({ onClick, t }) => ({
  title: (
    <Text color="gray.600" align="center">
      <Text as="span" color="purple.600">
        {t("popup.0.title.1")}{" "}
      </Text>
      {t("popup.0.title.2")}
    </Text>
  ),
  content: (
    <VStack>
      <Box borderRadius="lg" width="265px" height="155px" overflow="hidden">
        <Image src="/cookies.png" width="270" height="160" />
      </Box>
      <Text color="gray.600" fontWeight={600}>
        {t("popup.0.subtitle")}
      </Text>
    </VStack>
  ),
  buttons: (
    <>
      <Button onClick={onClick} colorScheme="purple">
        {t("popup.0.buttons.primary")}
      </Button>
      <Button onClick={onClick} variant="outline" colorScheme="purple">
        {t("popup.0.buttons.secondary")}
      </Button>
    </>
  ),
});

const modalContent = [initial];

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
    const onClick = index + 1 === CONTENT_MAX_LENGTH ? onClose : setIndex;
    const setupNewContent = newContent({
      onClick,
      t,
    });
    setContent(setupNewContent);
  }, [index]);

  return <BaseModal isOpen={isOpen} onClose={onClose} {...content} />;
}

export default AnnoyingModals;
