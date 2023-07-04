import { ConnectWallet, MediaRenderer, useAddress } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { Box, Button, Container, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import AccountabilityCard from "../components/AccountabilityCard";


const Home: NextPage = () => {
  const address= useAddress();
  return (
 <Container maxW={"1440px"} py={4}>
    <Flex alignItems={"center"} justifyContent={"center"} height={"100vh"}>
     <ConnectWallet/>
     <Box h={"20px"}></Box>
     {address && (<AccountabilityCard/>
     )}
    </Flex>

 </Container>

  );
};

export default Home;
