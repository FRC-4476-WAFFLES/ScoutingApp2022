import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase, RouteProp } from "@react-navigation/native";


export interface IStackScreenProps {
    name: string;
    navigation: NativeStackNavigationProp<any>;
    route: RouteProp<ParamListBase, any>;
}