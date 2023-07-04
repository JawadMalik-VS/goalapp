import {  useContract, useContractRead } from '@thirdweb-dev/react'
import React from 'react'
import { ACCOUNTABILITY_CONTRACT } from '../conts/addresses';
import { Box, Card, Heading, Spinner, Stack, Text } from '@chakra-ui/react';
import { ethers } from 'ethers';
import DepositFunds from './DepositFunds';
import Tasks from './Tasks';

function AccountabilityCard() {

   const {contract}= useContract(ACCOUNTABILITY_CONTRACT );

   const {data: depositAmount, isLoading:isDepositAmountLoading}= useContractRead(contract, "getDeposit");

   const {data: taskCount,isLoading:isTaskCountLoading}=useContractRead(contract,"getTaskCount");

  return (
    <Card w={"60%"} p={10} textAlign={"center"}>
        <Heading>Accountability App</Heading>
        {!isDepositAmountLoading && !isTaskCountLoading ?(
            <Box>
                {depositAmount==0 && taskCount==0 ?(
                                 <DepositFunds/>
                ):(
                    <Stack spacing={8}>
                    <Box>
                    <Text fontSize={"2xl"} fontWeight={"bold"}>Goal Amount:{ethers.utils.formatEther(depositAmount)} MATIC.</Text>
                    <Text fontSize={"2xs"}>Deposited amount will be transfered back when all tasks completed</Text>
                    </Box>
                    <Tasks/>
                </Stack>
                )}
            </Box>
         ):(
            <Spinner/>
        )}
    </Card>
    )
}

export default AccountabilityCard