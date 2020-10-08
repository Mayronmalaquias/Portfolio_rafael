import React from 'react'
import { Heading, Text, Flex, Box } from '@chakra-ui/core'
import { FaCircle } from 'react-icons/fa'

const Subtitle: React.FC = () => {
  return (
    <Flex
      flexDir="row"
      alignItems="center"
      textTransform="uppercase"
      fontSize={['xl', 'xl', '3xl', '3xl']}
      color="gray.500"
    >
      <Heading as="h2" fontSize={['xl', 'xl', '3xl', '3xl']}>
        <Text fontWeight="light" display="inline">
          Full
        </Text>
        <Text display="inline">Stack</Text>
      </Heading>

      <Box as={FaCircle} size="8px" mx={['1', '2', '3', '3']} />

      <Text fontWeight="light" textTransform="uppercase">
        rafaelgoulartb@gmail.com
      </Text>
    </Flex>
  )
}

export default Subtitle