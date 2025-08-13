import { Flex } from "@mantine/core";
import { TrackerStore } from "../store/Store";
import ListView from "./dataViews/ListView";
import GridView from "./dataViews/GridView";

const StickersDetail = () => {
  const { selectedView } = TrackerStore();

  return (
    <Flex bg={"primaryOrange"} w={"90%"} h={"100%"} justify={"center"} p={20}>
      {selectedView === "grid" ? <GridView /> : <ListView />}
    </Flex>
  );
};

export default StickersDetail;
