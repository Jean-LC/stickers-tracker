import { Group } from "@mantine/core";
import CustomInputButton from "../UI/CustomInputButton";
import { TrackerStore } from "../../store/Store";

const SearchStickers = () => {
  const { setSearchSticker } = TrackerStore();

  return (
    <Group>
      <CustomInputButton
        name={"Buscar"}
        iconSource={"/search-icon.png"}
        handleChange={setSearchSticker}
      />
    </Group>
  );
};

export default SearchStickers;
