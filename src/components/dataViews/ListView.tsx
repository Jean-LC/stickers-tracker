import { Stack, Group, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import type { IStickersData } from "../../interfaces/stickersData";
import { TrackerStore } from "../../store/Store";
import CustomListRender from "../UI/CustomListRender";
import { axiosFetcher } from "../../services/config";
import useSWR from "swr";

const ListView = () => {
  const { searchSticker, isExternalAlbum, albumExternalData } = TrackerStore();
  const {
    data: trackerData,
    // @ts-ignore
  } = useSWR<IStickersData[]>(!isExternalAlbum && "/bluey2025", axiosFetcher, {
    ...(!isExternalAlbum && { refreshInterval: 1000 }),
  });
  const [selectedData, setSelectedData] = useState<IStickersData[]>([]);
  const [halfLeftData, setHalfLeftData] = useState<any[]>([]);
  const [halfRightData, setHalfRightData] = useState<any[]>([]);

  useEffect(() => {
    const halfValueData = Math.round(selectedData.length / 2);
    setHalfLeftData(selectedData.slice(0, halfValueData));
    setHalfRightData(selectedData.slice(halfValueData));
  }, [selectedData]);

  function UpdateTrackerData() {
    if (!trackerData) return;

    if (searchSticker.length > 0)
      return setSelectedData(
        trackerData.filter((data) => data.name.includes(searchSticker))
      );

    return setSelectedData(trackerData);
  }
  function UpdateExternalData() {
    if (searchSticker.length > 0)
      return setSelectedData(
        albumExternalData.filter((data) => data.name.includes(searchSticker))
      );

    return setSelectedData(albumExternalData);
  }

  useEffect(() => {
    isExternalAlbum ? UpdateExternalData() : UpdateTrackerData();
  }, [searchSticker, trackerData, albumExternalData]);

  return (
    <>
      <Stack w={"100%"} hiddenFrom="sm">
        <Group h={"auto"} justify="space-evenly" pl={40}>
          <Text> Total</Text>
          <Text> Estampa</Text>
        </Group>
        <CustomListRender data={selectedData} />
      </Stack>
      <Stack w={"50%"} visibleFrom="sm">
        <Group h={"auto"} justify="space-evenly" pl={40}>
          <Text> Total</Text>
          <Text> Estampa</Text>
        </Group>
        <CustomListRender data={halfLeftData} />
      </Stack>
      <Stack w={"50%"} visibleFrom="sm">
        <Group h={"auto"} justify="space-evenly" pl={40}>
          <Text> Total</Text>
          <Text> Estampa</Text>
        </Group>
        <CustomListRender data={halfRightData} />
      </Stack>
    </>
  );
};

export default ListView;
