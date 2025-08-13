import { Button, Modal, Text, TextInput } from "@mantine/core";
import { TrackerStore } from "../../store/Store";
import { useState, type Dispatch, type SetStateAction } from "react";

interface Props {
  openModal: boolean;
  closeModal: () => void;
  setAlbumName: Dispatch<SetStateAction<string>>;
}

const ModalStart = ({ openModal, closeModal, setAlbumName }: Props) => {
  const [modalInput, setModalInput] = useState("");
  const { setIsExternalAlbum } = TrackerStore();

  function handleClose() {
    if (modalInput.length < 2) return;
    setIsExternalAlbum(modalInput !== "pipomart");
    setAlbumName(modalInput);
    closeModal();
  }

  return (
    <Modal
      opened={openModal}
      onClose={() => undefined}
      withCloseButton={false}
      centered
      p={30}
    >
      <Text w={"100%"} ta={"center"} fz={40}>
        Hola!
      </Text>
      <Text w={"100%"} ta={"center"} fz={20}>
        De que album es este tracker?
      </Text>
      <TextInput
        m={20}
        onChange={(e) => setModalInput(e.target.value)}
        minLength={2}
      />
      <Button
        variant="light"
        color={"secondaryOrange"}
        fullWidth
        onClick={handleClose}
      >
        Vamos!
      </Button>
    </Modal>
  );
};

export default ModalStart;
