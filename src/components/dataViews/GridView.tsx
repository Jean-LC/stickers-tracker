import { Grid, Text, Image, Group, Flex, Button } from "@mantine/core";
import type { IStickersData } from "../../interfaces/stickersData";
import { TrackerStore } from "../../store/Store";
import hecuba from "../../assets/HECUBA.png";
import jeremy from "../../assets/JEREMY.png";
import { useState } from "react";
import { supabase } from "../../supabase/supabaseClient";

const GridView = () => {
  const { isExternalAlbum, stickersData, setStickersData } = TrackerStore();

  const [sortCondition, setSortCondition] = useState<"gotten" | "repeated">(
    "gotten"
  );

  function validateSticker(sticker: IStickersData) {
    if (sortCondition === "gotten") {
      return sticker.gotten;
    }
    return sticker.count === 0;
  }

  async function toggleGottenSticker(sticker: IStickersData) {
    try {
      if (sortCondition === "repeated") return;
      const gotten = !sticker.gotten;

      await supabase
        .from("album")
        .update({ gotten })
        .eq("id", sticker.id)
        .select();

      togleLocalSticker(sticker);
    } catch {
      console.log("error");
    }
  }

  function togleLocalSticker(sticker: IStickersData) {
    const stickerNewData = { ...sticker, gotten: !sticker.gotten };
    const filteredStickers = stickersData.filter(
      (val) => val.id !== sticker.id
    );

    setStickersData([...filteredStickers, stickerNewData]);
  }

  return (
    <Flex direction={"column"}>
      <Flex justify={"center"}>
        <Button
          variant={sortCondition === "gotten" ? "filled" : "light"}
          color={sortCondition === "gotten" ? "secondaryOrange" : "primaryBlue"}
          c={"primaryBlue"}
          onClick={() => setSortCondition("gotten")}
        >
          Stickers obtenidos
        </Button>
        <Button
          variant={sortCondition === "repeated" ? "filled" : "light"}
          color={
            sortCondition === "repeated" ? "secondaryOrange" : "primaryBlue"
          }
          c={"primaryBlue"}
          onClick={() => setSortCondition("repeated")}
        >
          Stickers repetidos
        </Button>
      </Flex>
      <Grid
        w={"100%"}
        maw={1000}
        m={{ base: 5, sm: 15 }}
        align="center"
        justify="center"
      >
        {stickersData &&
          stickersData
            .sort((a, b) =>
              Number(isExternalAlbum ? a.name : a.id) >
              Number(isExternalAlbum ? b.name : b.id)
                ? 1
                : -1
            )
            .map((val) => (
              <Grid.Col
                span={{ base: 3, sm: 1 }}
                key={val.id}
                style={{
                  cursor: sortCondition === "gotten" ? "pointer" : "auto",
                  justifyItems: "center",
                }}
                onClick={() =>
                  isExternalAlbum
                    ? togleLocalSticker(val)
                    : toggleGottenSticker(val)
                }
              >
                {validateSticker(val) ? (
                  <Image
                    w={40}
                    h={60}
                    fit="contain"
                    src={Number(val.id) % 2 === 0 ? hecuba : jeremy}
                  />
                ) : (
                  <Group
                    w={80}
                    h={80}
                    justify="center"
                    align="center"
                    style={{
                      border: "1px solid #85A9CD",
                      borderRadius: 50,
                    }}
                  >
                    <Text ta={"center"} c={"primaryBlue"} fz={30}>
                      {val.name}
                    </Text>
                  </Group>
                )}
              </Grid.Col>
            ))}
      </Grid>
    </Flex>
  );
};

export default GridView;
