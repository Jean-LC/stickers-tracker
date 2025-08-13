import { Grid, Text, Image } from "@mantine/core";
import useSWR from "swr";
import type { IStickersData } from "../../interfaces/stickersData";
import { axiosFetcher } from "../../services/config";
import { TrackerStore } from "../../store/Store";
import hecuba from "../../assets/HECUBA.png";
import jeremy from "../../assets/JEREMY.png";

const GridView = () => {
  const { isExternalAlbum, albumExternalData } = TrackerStore();
  const { data: trackerData } = useSWR<IStickersData[]>(
    !isExternalAlbum && "/bluey2025",
    // @ts-ignore
    axiosFetcher
  );

  return (
    <Grid w={"100%"} maw={500} m={20} align="center">
      {isExternalAlbum ? (
        <>
          {albumExternalData
            .sort((a, b) => (Number(a.name) > Number(b.name) ? 1 : -1))
            .map((val) => (
              <Grid.Col span={2} key={val.id}>
                {val.count > 0 ? (
                  <Image
                    w={40}
                    h={60}
                    fit="contain"
                    src={Number(val.name) % 2 === 0 ? hecuba : jeremy}
                  />
                ) : (
                  <Text ta={"center"} c={"primaryBlue"} fz={30}>
                    {val.name}
                  </Text>
                )}
              </Grid.Col>
            ))}
        </>
      ) : (
        <>
          {trackerData &&
            trackerData
              .sort((a, b) => (Number(a.id) > Number(b.id) ? 1 : -1))
              .map((val) => (
                <Grid.Col span={2} key={val.id}>
                  {val.count > 0 ? (
                    <Image
                      w={40}
                      h={60}
                      fit="contain"
                      src={Number(val.name) % 2 === 0 ? hecuba : jeremy}
                    />
                  ) : (
                    <Text ta={"center"} c={"primaryBlue"} fz={30}>
                      {val.name}
                    </Text>
                  )}
                </Grid.Col>
              ))}
        </>
      )}
    </Grid>
  );
};

export default GridView;
