import { Flex, Group, Indicator, Text } from "@mantine/core";
import { DonutChart } from "@mantine/charts";
import useSWR from "swr";
import type { IStickersData } from "../interfaces/stickersData";
import { axiosFetcher } from "../services/config";

const PageStats = () => {
  const {
    data: trackerData,
    // @ts-ignore
  } = useSWR<IStickersData[]>("/bluey2025", axiosFetcher);

  function getTrackerStats() {
    if (!trackerData) return [];

    const collectedStickers =
      trackerData.filter((value) => value.count > 0).length * 100;
    const missingStickers =
      trackerData.filter((value) => value.count === 0).length * 100;

    return [
      {
        name: "Conseguidos",
        value: collectedStickers / trackerData.length,
        color: "primaryBlue",
      },
      {
        name: "Faltantes",
        value: missingStickers / trackerData.length,
        color: "secondaryBlue",
      },
    ];
  }

  return (
    <Flex direction={"column"} w={"50%"} align={"center"}>
      <Text mb={5} fz={20}>
        Progreso
      </Text>
      <Group w={"100%"}>
        <DonutChart data={getTrackerStats()} size={100} thickness={35} />
        <Flex
          w={"100%"}
          justify={"center"}
          direction={{ base: "column", sm: "row" }}
        >
          <Group>
            <Indicator color="primaryBlue" />
            <Text>Conseguidos</Text>
          </Group>
          <Group>
            <Indicator color="secondaryBlue" />
            <Text>Faltantes</Text>
          </Group>
        </Flex>
      </Group>
    </Flex>
  );
};

export default PageStats;
