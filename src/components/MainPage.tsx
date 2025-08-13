import { Flex, Title } from "@mantine/core";
import PageSettings from "./PageSettings";
import PageStats from "./PageStats";
import StickersDetail from "./StickersDetail";

const MainPage = () => {
  return (
    <Flex
      w={"100vw"}
      mih={"100vh"}
      bg={"primaryBlue"}
      m={0}
      p={0}
      gap="20"
      justify="center"
      align="center"
      direction={"column"}
      style={{ borderRadius: 0 }}
    >
      <Flex
        bg={"primaryOrange"}
        w={"90%"}
        justify={"center"}
        align={"center"}
        mih={"30%"}
        h={{ base: "100%", sm: "35%" }}
        direction={"column"}
        mt={{ base: 20, sm: 0 }}
        p={15}
      >
        <Title
          w={"100%"}
          order={1}
          ta={"center"}
          style={{ alignSelf: "flex-start" }}
          fz={{ base: 25, sm: 35 }}
        >
          El episodio de hoy se llama: Album de estampas
        </Title>
        <Flex
          gap={20}
          mt={20}
          w={"100%"}
          h={'100%'}
          direction={{ base: "column", sm: "row" }}
          align={"center"}
        >
          <PageStats />
          <PageSettings />
        </Flex>
      </Flex>
      <StickersDetail />
    </Flex>
  );
};

export default MainPage;
