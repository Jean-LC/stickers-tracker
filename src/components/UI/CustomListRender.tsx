import { Group, Select, Switch, Text } from "@mantine/core";
import type { IStickersData } from "../../interfaces/stickersData";
import { TrackerStore } from "../../store/Store";
import { supabase } from "../../supabase/supabaseClient";
const stickersValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

interface Props {
  data: IStickersData[];
}

const CustomListRender = ({ data }: Props) => {
  const { stickersData, setStickersData, isExternalAlbum } = TrackerStore();

  async function handleUpdateSticker(sticker: IStickersData, count: number) {
    try {
      await supabase
        .from("album")
        .update({ count })
        .eq("id", sticker.id)
        .select();

      handleUpdateLocalStickerCount(sticker, count);
    } catch {
      console.log("error");
    }
  }

  function handleUpdateLocalStickerCount(
    sticker: IStickersData,
    count: number
  ) {
    const updatedData = stickersData.map((data) =>
      data.id === sticker.id ? { ...data, count } : data
    );
    setStickersData(updatedData);
  }

  function handleUpdateLocalStickerGotten(sticker: IStickersData) {
    const updatedData = stickersData.map((data) =>
      data.id === sticker.id ? { ...data, gotten: !data.gotten } : data
    );
    setStickersData(updatedData);
  }

  async function toggleGottenCondition(sticker: IStickersData) {
    try {
      const gotten = !sticker.gotten;
      await supabase
        .from("album")
        .update({ gotten })
        .eq("id", sticker.id)
        .select();
      handleUpdateLocalStickerGotten(sticker);
    } catch {
      console.log("error");
    }
  }

  return data.map((val) => (
    <Group justify="space-evenly" key={val.id}>
      <Text c={"primaryBlue"}>{val.name}</Text>
      <Switch
        checked={val.gotten}
        onChange={() =>
          isExternalAlbum
            ? handleUpdateLocalStickerGotten
            : toggleGottenCondition(val)
        }
        color="primaryBlue"
        size="xl"
        onLabel="Obtenido!"
        offLabel="Aún no"
        styles={{
          track: { padding: 7 },
        }}
      />
      <Select
        value={val.count.toString()}
        data={stickersValue}
        onChange={(count) =>
          isExternalAlbum
            ? handleUpdateLocalStickerCount(val, Number(count))
            : handleUpdateSticker(val, Number(count))
        }
        w={70}
        styles={{
          input: {
            background: val.count === 0 ? "#FD8F67" : "#98C5DA",
            color: "white",
          },
        }}
      />
    </Group>
  ));
};

export default CustomListRender;
