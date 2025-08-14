import { Button, Group, Loader, Modal, Text, TextInput } from "@mantine/core";
import { TrackerStore } from "../../store/Store";
import { useState, type Dispatch, type SetStateAction } from "react";
import { supabase } from "../../supabase/supabaseClient";

interface Props {
  openModal: boolean;
  closeModal: () => void;
  setAlbumName: Dispatch<SetStateAction<string>>;
}

const ModalStart = ({ openModal, closeModal, setAlbumName }: Props) => {
  const [modalInput, setModalInput] = useState("");
  const { setIsExternalAlbum, setStickersData } = TrackerStore();
  const [isLoading, setIsLoading] = useState(false);

  async function getStickersData() {
    try {
      const { data, error } = await supabase.from("album").select("*");
      if (error || !data) return;
      setStickersData(data);
    } catch {
      console.log("error");
    }
  }

  async function handleClose() {
    if (modalInput.length < 2) return;
    setIsLoading(true);
    modalInput === "pipomart" && (await getStickersData());
    setIsExternalAlbum(modalInput !== "pipomart");
    setAlbumName(modalInput);
    closeModal();
    setIsLoading(false);
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
        disabled={isLoading}
      >
        Vamos!
      </Button>
      <Group>{isLoading && <Loader />}</Group>
    </Modal>
  );
};

export default ModalStart;
