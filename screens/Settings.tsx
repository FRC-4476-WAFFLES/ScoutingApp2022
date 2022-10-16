import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Button,
    ScrollView,
    TouchableWithoutFeedback,
    Dimensions,
    TouchableOpacity
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as FileSystem from "expo-file-system";

import StackParamList from "../library/StackParamList";
import DriverstationPicker from "../components/DriverstationPicker";
import ScreenTitle from "../components/ScreenTitle";

type SettingsScreenProps = NativeStackScreenProps<StackParamList, "Settings">;

const SettingsScreen: React.FunctionComponent<SettingsScreenProps> = props => {
    const { navigation, route } = props;

    const [codeText, setCodeText] = React.useState<String>();
    const [nameText, setNameText] = React.useState<String>();

    const [jsonText, setJsonText] = React.useState<String>();
    const [isLoaded, setIsLoaded] = React.useState<boolean>(false);

    const [matchScheduleExists, setMatchScheduleExists] = React.useState<boolean>(false);
    const [showMatchSchedule, setShowMatchSchedule] = React.useState<boolean>(false);
    
    const [matchScheduleString, setMatchScheduleString] = React.useState<String>();

    const scheduleFileUri = `${
        FileSystem.documentDirectory
    }${"MatchSchedule.json"}`;
    const settingsFileUri = `${
        FileSystem.documentDirectory
    }${"ScoutingAppSettings.json"}`;

    const [driverstation, setDriverstation] = React.useState<string>();
    const [showPicker, setShowPicker] = React.useState<boolean>(false);

    
    React.useEffect(() => {
        const setSettingsVars = async () => {
            try {
                let settingsJSON = await JSON.parse(
                await FileSystem.readAsStringAsync(settingsFileUri)
                );
                setNameText(await settingsJSON["Settings"]["scoutName"]);
                setDriverstation(await settingsJSON["Settings"]["driverStation"]);
            } catch (err) {
                console.log("No Settings File Saved.");
            }
        }

        const checkMatchScheduleExists = async () => {
            let tmp = await FileSystem.getInfoAsync(scheduleFileUri);
            console.log(`Match Schedule Exists: ${tmp.exists}`);
            setMatchScheduleExists(tmp.exists);
        }

        setSettingsVars();
        checkMatchScheduleExists();
    }, []);

    return (
        <SafeAreaView style={styles.safeareaview} >
            <ScrollView>
                
                <ScreenTitle title="Settings" />

                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => setShowPicker(!showPicker)}
                >
                    <Text style={styles.driversationText}>{driverstation ? driverstation : 'Driverstation...'}</Text>
                </TouchableOpacity>

                

                {
                
                showPicker &&

                <View style={styles.picker}>
                    <View style={styles.redDriverstations}>
                        <TouchableOpacity 
                            style={styles.pickRedDriverstation}
                            onPress={() => onDriverstationPressed("R1")}
                        >
                            <Text style={styles.pickerText}>
                                R1
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.pickRedDriverstation}
                            onPress={() => onDriverstationPressed("R2")}
                        >
                            <Text style={styles.pickerText}>
                                R2
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.pickRedDriverstation}
                            onPress={() => onDriverstationPressed("R3")}
                        >
                            <Text style={styles.pickerText}>
                                R3
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.blueDriverstations}>
                        <TouchableOpacity 
                            style={styles.pickBlueDriverstation}
                            onPress={() => onDriverstationPressed("B1")}
                        >
                            <Text style={styles.pickerText}>
                                B1
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.pickBlueDriverstation}
                            onPress={() => onDriverstationPressed("B2")}
                        >
                            <Text style={styles.pickerText}>
                                B2
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.pickBlueDriverstation}
                            onPress={() => onDriverstationPressed("B3")}
                        >
                            <Text style={styles.pickerText}>
                                B3
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>  

                }
                
            </ScrollView>
        </SafeAreaView>
    );

    function onDriverstationPressed(driverstation: string) {
        setDriverstation(driverstation)
    }
}

const styles = StyleSheet.create({
    safeareaview: {
        backgroundColor: "#FFCC00",
        flex: 1,
        justifyContent: 'center'
    },
    button: {
        paddingVertical: 35,
        alignItems: 'center',
        marginHorizontal: 30,
        backgroundColor: "#FFD27A",
        borderRadius: 100
    },
    driversationText: {
        fontSize: 35,
    },
    picker: {
        alignItems: 'center',
        marginTop: 15,
        marginHorizontal: 50,
        backgroundColor: "#FFD27A",
        borderRadius: 25,
        paddingVertical: 5,
    },
    redDriverstations: {
        backgroundColor: "rgba(235, 36, 36, 0.53)",
        width: '95%',
        marginVertical: 3,
        alignItems: 'center',
        borderRadius: 25,
        paddingVertical: 3,
    },
    blueDriverstations: {
        backgroundColor: "rgba(36, 187, 235, 0.53)",
        width: '95%',
        marginVertical: 3,
        alignItems: 'center',
        borderRadius: 25,
        paddingVertical: 3,
    },
    pickRedDriverstation: {
        marginVertical: 0.5,
    },
    pickBlueDriverstation: {
        marginVertical: 0.5,
    },
    pickerText: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})

export default SettingsScreen;