import { useEffect, useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert } from "react-native";

import { mealCreate } from '@storage/meals/mealCreate';
import { Button } from "@components/Button";
import { MealItem } from 'src/@types/meals';

import { ArrowIcon, 
  Body, 
  ButtonIcon, 
  Container, 
  HeaderA, 
  TitleHeader, 
  Input, 
  Label, 
  Row,
  DataShow,
  TextDataShow,
  DataBox,
  DataTitle,
  OpCardText,
  OpCardG,
  OpCardR,
  CircleG,
  CircleR,
  ButtonView, 
} from "./styles";
import { mealsGetAll } from '@storage/meals/mealsGetAll';

type RouteParams = {
  mealId?: number;
}

export function NewMeal() {
  const navigation = useNavigation();
  const route = useRoute();
  const { mealId } = route.params as RouteParams;
  const [mealItem, setMealItem] = useState<MealItem>();
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [dateFormated, setDateFormated] = useState<string>("");
  const [timeFormated, setTimeFormated] = useState<string>("");
  const [yesIsSelect, setYesIsSelect] = useState(false);
  const [noIsSelect, setNoIsSelect] = useState(false);
  const [isGoodDiet, setIsGoodDiet] = useState(true);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };
  
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };
  
  const handleDateConfirm = (date: Date) => {
    const dateObj = new Date(date);
    const day = String(dateObj.getUTCDate()).padStart(2, "0");
    const month = String(dateObj.getUTCMonth() + 1).padStart(2, "0");
    const year = String(dateObj.getUTCFullYear());
    const formattedDate = `${day}/${month}/${year}`;
    setDateFormated(formattedDate);
    hideDatePicker();
  };

  const handleTimeConfirm = (time: Date) => {
    const timeObj = new Date(time);
    const hours = String(timeObj.getUTCHours()).padStart(2, "0");
    const minutes = String(timeObj.getUTCMinutes()).padStart(2, "0");
    const formattedTime = `${hours}:${minutes}`;
    setTimeFormated(formattedTime);
    hideTimePicker();
  };

  const hancdleYes = () => {
    if (!yesIsSelect && !noIsSelect){
      setYesIsSelect(true);
      setIsGoodDiet(true);
    } else if (yesIsSelect && !noIsSelect) {
      setYesIsSelect(false);
      setNoIsSelect(false);
    } else if (!yesIsSelect && noIsSelect) {
      setYesIsSelect(true);
      setNoIsSelect(false);
      setIsGoodDiet(true);
    }
  }

  const hancdleNo = () => {
    if (!yesIsSelect && !noIsSelect){
      setNoIsSelect(true);
      setIsGoodDiet(false);
    } else if (!yesIsSelect && noIsSelect) {
      setNoIsSelect(false);
      setYesIsSelect(false);
    } else if (yesIsSelect && !noIsSelect) {
      setNoIsSelect(true);
      setYesIsSelect(false);
      setIsGoodDiet(false);
    }
  }

  async function goToCreate() {
    try{
      const newMeal: MealItem = {
        hour: timeFormated,
        title: name,
        day: dateFormated,
        isGoodDiet: isGoodDiet,
        description: description,
      };
      await mealCreate(dateFormated, newMeal);
      navigation.navigate('confirmationView', { isGoodDiet });
    } catch (e) {

    }
  }

  function handleHome() {
    navigation.navigate('home');
  }

  async function handleConfirmation () {
    if (!yesIsSelect && !noIsSelect){
      Alert.alert(
        'Opa',
        'Faltou Selecionar o Tipo de Refeição',
        [
          {
            text: 'Voltar',
            onPress: () => {return;}
          },
          {
            text: 'Fora da Dieta',
            onPress: () =>{ 
              setIsGoodDiet(false);
              goToCreate();
            }
          },
          {
            text: 'Dentro da Diera',
            onPress: () => {
              setIsGoodDiet(true);
              goToCreate();
            }
          }
        ]
      )
    } else {
      goToCreate();
    }
  }

  async function loadMealItem() {
    try {
        const mealDays = await mealsGetAll();
        const mealItem = mealDays
            .flatMap((mealDay) => mealDay.meals)
            .find((meal) => meal.index === mealId);
        if(mealItem === undefined){
          setIsEditing(false);
        } else {
          setIsEditing(true);
          setMealItem(mealItem);
          setName(mealItem.title);
          setDescription(mealItem.description);
          setDateFormated(mealItem.day);
          setTimeFormated(mealItem.hour);
          setIsGoodDiet(mealItem.isGoodDiet);
          if(mealItem.isGoodDiet === true){
            setYesIsSelect(true);
            setNoIsSelect(false);
          } else {
            setYesIsSelect(false);
            setNoIsSelect(true);    
          }
        }
    } catch (error) {
        Alert.alert('Error', 'Failed to load meal item');
    }
  }
  
  useEffect(() => {
    loadMealItem();
  }, [mealId]);

  return (
    <Container>
      <HeaderA>
        <ButtonIcon onPress={handleHome}>
          <ArrowIcon/>
        </ButtonIcon>
        <TitleHeader>{isEditing ? "Editar refeição" : "Nova Refeição"}</TitleHeader>
      </HeaderA>
      <Body>
        <Label>Nome</Label>
        <Input
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Label>Descrição</Label>
        <Input
          value={description}
          onChangeText={(text) => setDescription(text)}
          multiline={true}
          numberOfLines={6}
        />
        <Row>
          <DataBox>
            <DataTitle>Dia</DataTitle>
            <DataShow onPress={showDatePicker}>
              <TextDataShow>
                {dateFormated}
              </TextDataShow>
            </DataShow>
          </DataBox>

          <DataBox>
            <DataTitle>Hora</DataTitle>
            <DataShow onPress={showTimePicker}>
              <TextDataShow>
                {timeFormated}
              </TextDataShow>
            </DataShow>
          </DataBox>

        </Row>
        <DataTitle>Está dentro da dieta?</DataTitle> 
        <Row>
          <OpCardG isSelect = {yesIsSelect} onPress={hancdleYes}>
            <CircleG/>
            <OpCardText>Sim</OpCardText>
          </OpCardG>
          <OpCardR isSelect = {noIsSelect} onPress={hancdleNo}>
            <CircleR/>
            <OpCardText>Não</OpCardText>
          </OpCardR>
        </Row>
        <ButtonView>
          <Button title={isEditing ? "Salvar Alterações" : "Cadastrar Refeição"} onPress={handleConfirmation}/>     
        </ButtonView>
      </Body>
      <DateTimePickerModal
      isVisible={isDatePickerVisible}
      mode="date"
      onConfirm={handleDateConfirm}
      onCancel={hideDatePicker}
      />
      <DateTimePickerModal
      isVisible={isTimePickerVisible}
      mode="time"
      onConfirm={handleTimeConfirm}
      onCancel={hideTimePicker}
      />      
    </Container>
  )  
}