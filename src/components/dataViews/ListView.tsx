import { Stack, Group, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import type { IStickersData } from "../../interfaces/stickersData";
import { TrackerStore } from "../../store/Store";
import CustomListRender from "../UI/CustomListRender";

const ListView = () => {
  const { searchSticker, isExternalAlbum, stickersData } = TrackerStore();

  const [selectedData, setSelectedData] = useState<IStickersData[]>([]);
  const [halfLeftData, setHalfLeftData] = useState<any[]>([]);
  const [halfRightData, setHalfRightData] = useState<any[]>([]);

  useEffect(() => {
    const halfValueData = Math.round(selectedData.length / 2);
    setHalfLeftData(selectedData.slice(0, halfValueData));
    setHalfRightData(selectedData.slice(halfValueData));
  }, [selectedData]);

  function UpdateTrackerData() {
    if (!stickersData) return;

    if (searchSticker.length > 0)
      return setSelectedData(
        stickersData
          .filter((data) => data.name.includes(searchSticker))
          .sort((a, b) =>
            Number(isExternalAlbum ? a.name : a.id) >
            Number(isExternalAlbum ? b.name : b.id)
              ? 1
              : -1
          )
      );

    return setSelectedData(
      stickersData.sort((a, b) => (Number(a.id) > Number(b.id) ? 1 : -1))
    );
  }

  useEffect(() => {
    UpdateTrackerData();
  }, [searchSticker, stickersData]);

  return (
    <>
      <Stack w={"100%"} hiddenFrom="sm">
        <Group h={"auto"} justify="space-between">
          <Text w={"30%"} ta={"center"}>
            Estampa
          </Text>
          <Text w={"30%"}>Obtenido</Text>
          <Text w={"30%"}> Repetidos</Text>
        </Group>
        <CustomListRender data={selectedData} />
      </Stack>
      <Stack w={"50%"} visibleFrom="sm">
        <Group h={"auto"} justify="space-evenly">
          <Text w={"30%"} ta={"center"}>
            Estampa
          </Text>
          <Text w={"30%"}> Obtenido</Text>
          <Text w={"30%"}> Repetidos</Text>
        </Group>
        <CustomListRender data={halfLeftData} />
      </Stack>
      <Stack w={"50%"} visibleFrom="sm">
        <Group h={"auto"} justify="space-evenly">
          <Text w={"30%"} ta={"center"}>
            Estampa
          </Text>
          <Text w={"30%"}> Obtenido</Text>
          <Text w={"30%"}> Repetidos</Text>
        </Group>
        <CustomListRender data={halfRightData} />
      </Stack>
    </>
  );
};

export default ListView;
