import { VStack, Text, Progress, Box, Heading } from 'native-base';

interface NorteShoppingResumeProps {
  name: string;
  stars: number;
  purchasesPercent: number;
  purchases: number;
  purchasesExpected: number;
  totalSpentPercent: number;
  totalSpent: string;
  totalSpentExpected: string;
  expirationDate: string;
}

export function NorteShoppingResume({ name, stars, purchasesPercent, purchases, purchasesExpected, totalSpentPercent, totalSpent, totalSpentExpected, expirationDate }: NorteShoppingResumeProps) {
  return (
    <Box w={"full"} h={32} bg={"cyan.500"} rounded={"md"} shadow={3} p={3}>
      <Heading color={"white"}>{name}</Heading>
      <Text color={"white"}>
        {stars} estrelas
      </Text>
      <Text color={"white"}>
        <Progress w="200" shadow={2} value={purchasesPercent * 100} mx="4" />
        {purchases}/{purchasesExpected}
      </Text>
      <Text color={"white"}>
        <Progress w="200" shadow={2} value={totalSpentPercent * 100} mx="4" />
        R$ {totalSpent}/R$ {totalSpentExpected}
      </Text>
      <Text color={"white"}>
        Data de expiração: {expirationDate}
      </Text>
    </Box>
  )
}