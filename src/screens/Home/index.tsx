import { Header } from "@components/Header";
import { Container, TileHeader, Title } from "./styles";
import { StatsCard } from "@components/StatsCard";
import { Button } from "@components/Button";
import { SectionList } from "react-native";
import { MealTile } from "@components/MealTile";
import { useNavigation } from '@react-navigation/native'
import { useState } from "react";


const DATA = [
    {
      title: '28.05.2023',
      data: [
        { index: 1, hour: '20:00', title: "X-Tudo", isGoodDiet: false},
        { index: 1, hour: '20:00', title: "X-Tudo", isGoodDiet: true},
        { index: 1, hour: '20:00', title: "X-Tudo", isGoodDiet: true},
      ],
    },
    {
      title: '28.05.2023',
      data: [
        { index: 1, hour: '20:00', title: "X-Tudo", isGoodDiet: true},
        { index: 1, hour: '20:00', title: "X-Tudo", isGoodDiet: true},
        { index: 1, hour: '20:00', title: "X-Tudo", isGoodDiet: true},
      ],
    },
    {
      title: '28.05.2023',
      data: [
        { index: 1, hour: '20:00', title: "X-Tudo", isGoodDiet: true},
        { index: 1, hour: '20:00', title: "X-Tudo", isGoodDiet: true},
        { index: 1, hour: '20:00', title: "X-Tudo", isGoodDiet: true},
      ],
    },
  ];

export function Home() {
  const [isGoodDiet, setIsGoodDiet] = useState(false);
  const navigation = useNavigation();

  function handleStats() {
    navigation.navigate('stats', { isGoodDiet });
    console.log(isGoodDiet);
  }

    return (
        <Container>
            <Header />
            <StatsCard 
              isGoodDiet={isGoodDiet} 
              onPress={handleStats}
            />
            <Title>Refeições</Title>
            <Button title="Nova Refeição" />
            <SectionList
      sections={DATA}
      keyExtractor={({ hour, title }, index) => `${hour}-${title}-${index}`}
      renderItem={({item}) => (
        <MealTile hour={item.hour} title={item.title} isGoodDiet={item.isGoodDiet}/>
      )}
      renderSectionHeader={({section: {title}}) => (
        <TileHeader>{title}</TileHeader>
      )}
    />
        </Container>
    )
}