import { Group, Select, Text } from "@mantine/core";
import type { IStickersData } from "../../interfaces/stickersData";
import { axiosCustom } from "../../services/config";
const stickersValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

interface Props {
  data: IStickersData[];
}

const CustomListRender = ({ data }: Props) => {
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

  return data.map((val) => (
    <Group justify="space-evenly" key={val.id}>
      <Select
        value={val.count.toString()}
        data={stickersValue}
        onChange={(count) => handleUpdateSticker(val, Number(count))}
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
