import { Flex, Group, Indicator, Text } from "@mantine/core";
import { DonutChart } from "@mantine/charts";

import { TrackerStore } from "../store/Store";

const PageStats = () => {
  const { stickersData } = TrackerStore();

  function getTrackerStats() {
    if (!stickersData) return [];

    const collectedStickers =
      stickersData.filter((value) => value.count > 0).length * 100;
    const missingStickers =
      stickersData.filter((value) => value.count === 0).length * 100;

    return [
      {
        name: "Conseguidos",
        value: collectedStickers / stickersData.length,
        color: "primaryBlue",
      },
      {
        name: "Faltantes",
        value: missingStickers / stickersData.length,
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
