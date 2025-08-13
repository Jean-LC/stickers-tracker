import { Group } from "@mantine/core";
import CustomInputButton from "../UI/CustomInputButton";
import { TrackerStore } from "../../store/Store";
import searchIcon from "../../assets/search-icon.png";

const SearchStickers = () => {
  const { setSearchSticker, searchSticker } = TrackerStore();

  return (
    <Group>
      <CustomInputButton
        value={searchSticker}
        name={"Buscar"}
        iconSource={searchIcon}
        handleChange={setSearchSticker}
      />
    </Group>
  );
};

export default SearchStickers;
