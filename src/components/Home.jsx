import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'
import btnImg from "../assets/btc.png"

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"} >
      <motion.div
        style={{
          height:"80vh",
        }}
        animate={{
          translateY:"20px",
        }}
        transition={{
          duration:1,
          repeat:Infinity,
          repeatType: "reverse",
        }}
      >
        <Image w={"full"} h={"full"} src={btnImg} objectFit={"contain"} filter={"grayscale(1)"} />
      </motion.div>

      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={-20}
      >CryptoX</Text>


    </Box>
  )
}

export default Home