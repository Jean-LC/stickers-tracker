import { Group } from "@mantine/core";
import CustomInputButton from "../UI/CustomInputButton";
import { TrackerStore } from "../../store/Store";
import { useState } from "react";
import addIcon from "../../assets/add-icon.png";

const AddStickers = () => {
  const { setAlbumExternalData, albumExternalData } = TrackerStore();
  const [addStickerName, setAddStickerName] = useState("");

  function handleAddSticker() {
    const stickerData = {
      name: addStickerName,
      count: 0,
      id: addStickerName + albumExternalData.length,
    };
    setAlbumExternalData([...albumExternalData, stickerData]);
    setAddStickerName("");
  }

  return (
    <Group>
      <CustomInputButton
        value={addStickerName}
        name={"Agregar"}
        iconSource={addIcon}
        handleChange={setAddStickerName}
        handleClick={handleAddSticker}
      />
    </Group>
  );
};

export default AddStickers;
