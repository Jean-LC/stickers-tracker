import { Group, Select, Text } from "@mantine/core";
import type { IStickersData } from "../../interfaces/stickersData";
import { axiosCustom } from "../../services/config";
import { TrackerStore } from "../../store/Store";
const stickersValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

interface Props {
  data: IStickersData[];
}

const CustomListRender = ({ data }: Props) => {
  const { setAlbumExternalData, albumExternalData, isExternalAlbum } =
    TrackerStore();

  async function handleUpdateSticker(sticker: IStickersData, count: number) {
    try {
      const { data } = await axiosCustom.put(`/bluey2025/${sticker.id}`, {
        count,
      });
      console.log(data);
    } catch {
      console.log("error");
    }
  }

  function handleUpdateExternalSticker(sticker: IStickersData, count: number) {
    const updatedData = albumExternalData.map((data) =>
      data.id === sticker.id ? { ...data, count } : data
    );
    setAlbumExternalData(updatedData);
  }

  return data.map((val) => (
    <Group justify="space-evenly" key={val.id}>
      <Select
        value={val.count.toString()}
        data={stickersValue}
        onChange={(count) =>
          isExternalAlbum
            ? handleUpdateExternalSticker(val, Number(count))
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
      <Text c={"primaryBlue"}>{val.name}</Text>
    </Group>
  ));
};

export default CustomListRender;
