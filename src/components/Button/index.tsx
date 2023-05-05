import { TouchableOpacityProps } from "react-native";

import { Container, Title, PlusIcon, TrashIcon, PencilIcon } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  iconP?: string;
  isDisable?: boolean;
}

export function Button({ title, iconP, isDisable, ...rest }: Props) {
  return (
    <Container {...rest} isDisable={isDisable} >
      {iconP === "Plus" && <PlusIcon isDisable={isDisable}/>}
      {iconP === "Trash" && <TrashIcon isDisable={isDisable}/>}
      {iconP === "Pencil" && <PencilIcon isDisable={isDisable}/>}
      <Title isDisable={isDisable} >{title}</Title>
    </Container>
  )
}