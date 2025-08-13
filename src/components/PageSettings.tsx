import { Group, Flex, Text, Image, Button } from "@mantine/core";
import { TrackerStore } from "../store/Store";
import SearchStickers from "./dataSettings.tsx/SearchStickers";
import AddStickers from "./dataSettings.tsx/AddStickers";
import listIcon from "../assets/list-view.png";
import gridIcon from "../assets/grid-view.png";

const PageSettings = () => {
  const { selectedView, setSelectedView, isExternalAlbum } = TrackerStore();

  const buttonThemeView = (view: "grid" | "list", icon: string) => {
    const isViewActive = view === selectedView;
    return (
      <Button
        variant={isViewActive ? "filled" : "light"}
        color={isViewActive ? "secondaryOrange" : "primaryBlue"}
        onClick={() => setSelectedView(view)}
      >
        <Image src={icon} />
      </Button>
    );
  };

  return (
    <Flex
      direction={"column"}
      w={{ base: "100%", sm: "50%" }}
      align={"center"}
      gap={30}
      mt={20}
    >
      <Group>
        <Text>Vista</Text>
        {buttonThemeView("list", listIcon)}
        {buttonThemeView("grid", gridIcon)}
      </Group>
      <SearchStickers />
      {/* <Group>
        <Text>Ordenar</Text>
        <Select
          value={listOrder}
          placeholder="Ordenar"
          data={["nombre", "fecha"]}
          w={"45%"}
          onChange={(e) => setListOrder(e)}
        />
      </Group> */}
      {isExternalAlbum && <AddStickers />}

      {/* <Group>{inputButton("Agregar", "/add-icon.png")}</Group> */}
    </Flex>
  );
};

export default PageSettings;
