import { Group } from "@mantine/core";
import CustomInputButton from "../UI/CustomInputButton";
import { TrackerStore } from "../../store/Store";
import { useState } from "react";
import addIcon from "../../assets/add-icon.png";

const AddStickers = () => {
  const { setStickersData, stickersData } = TrackerStore();
  const [addStickerName, setAddStickerName] = useState("");

  function handleAddSticker() {
    const newStickerData = {
      name: addStickerName,
      count: 0,
      gotten: false,
      id: addStickerName + stickersData.length,
    };
    setStickersData([...stickersData, newStickerData]);
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
