import { Group, Flex, Text, Image, Button } from "@mantine/core";
import { TrackerStore } from "../store/Store";
import SearchStickers from "./dataSettings.tsx/SearchStickers";

const PageSettings = () => {
  const { selectedView, setSelectedView } = TrackerStore();

  const buttonThemeView = (view: "grid" | "list") => {
    const isViewActive = view === selectedView;
    return (
      <Button
        variant={isViewActive ? "filled" : "light"}
        color={isViewActive ? "secondaryOrange" : "primaryBlue"}
        onClick={() => setSelectedView(view)}
      >
        <Image src={`/${view}-view.png`} />
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
        {buttonThemeView("list")}
        {buttonThemeView("grid")}
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

      {/* <Group>{inputButton("Agregar", "/add-icon.png")}</Group> */}
    </Flex>
  );
};

export default PageSettings;
