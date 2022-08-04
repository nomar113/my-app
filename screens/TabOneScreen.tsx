import React from 'react';
import { Box, Text } from 'native-base';

import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <Box>
      <Text color={"white"}>
        Hello World, Native Base!
      </Text>
    </Box>
  );
}

