import React from 'react';
import { VStack } from 'native-base';

import { RootTabScreenProps } from '../types';
import { NorteShoppingResume } from '../components/NorteShoppingResume';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <VStack space={4} alignItems={"center"}>
      <NorteShoppingResume
        name={"Ramon"}
        stars={3}
        purchasesPercent={0.31}
        purchases={5}
        purchasesExpected={16}
        totalSpentPercent={0.14}
        totalSpent={"427,17"}
        totalSpentExpected={"3.000,00"}
        expirationDate={"01/01/2020"}
      />
    </VStack>
  );
}

