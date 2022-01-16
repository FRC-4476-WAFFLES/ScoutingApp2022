import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import CheckBox from 'react-native-check-box';
import DropDownArrow from './DropDownArrow';
import PageTitle from './PageTitle';
import PullUpArrow from './PullUpArrow';

export default function MatchPage({ navigation }) {
    const [isAutoExpanded, setIsAutoExpanded] = React.useState(false);
    const [isTeleOpExpanded, setIsTeleOpExpanded] = React.useState(false);
    const [isEndgameExpanded, setIsEndgameExpanded] = React.useState(false);

    const [autoLowerBalls, setAutoLowerBalls] = React.useState(0);
    const [autoUpperBalls, setAutoUpperBalls] = React.useState(0);

    const [teleOpLowerBalls, setTeleOpLowerBalls] = React.useState(0);
    const [teleOpUpperBalls, setTeleOpUpperBalls] = React.useState(0);

    const [isTraversalChecked, setIsTraversalChecked] = React.useState(false);

    return (
        <SafeAreaView>
            <ScrollView>
                <PageTitle title="Match" />
                <View>
                    <TouchableOpacity style={styles.row} onPress={() => toggleAutoExpand()}>
                        {
                            isAutoExpanded ? <PullUpArrow /> : <DropDownArrow />
                        }
                        <Text style={[styles.title, styles.font]}>Autonomous</Text>
                    </TouchableOpacity>
                    {
                        isAutoExpanded &&
                        <View style={styles.child}>
                            <View>
                                <Text>{autoLowerBalls} Balls scored in Lower Hub</Text>
                                <TouchableOpacity style={styles.button, styles.minusButton} onPress={() => updateAutoLowerBalls(-1)} >
                                    <Text style={styles.buttonText}>-</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button, styles.plusButton} onPress={() => updateAutoLowerBalls(1)} >
                                    <Text style={styles.buttonText}>+</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text>{autoUpperBalls} Balls scored in Upper Hub</Text>
                                <TouchableOpacity style={styles.button, styles.minusButton} onPress={() => updateAutoUpperBalls(-1)} >
                                    <Text style={styles.buttonText}>-</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button, styles.plusButton} onPress={() => updateAutoUpperBalls(1)}>
                                    <Text style={styles.buttonText}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                </View>
                <View>
                    <TouchableOpacity style={styles.row} onPress={() => toggleTeleOpExpand()}>
                        {
                            isTeleOpExpanded ? <PullUpArrow /> : <DropDownArrow />
                        }
                        <Text style={[styles.title, styles.font]}>Tele-Op</Text>
                    </TouchableOpacity>
                    {
                        isTeleOpExpanded &&
                        <View style={styles.child}>
                            <View>
                                <Text>{teleOpLowerBalls} Balls scored in Lower Hub</Text>
                                <TouchableOpacity style={styles.button, styles.minusButton} onPress={() => updateTeleOpLowerBalls(-1)} >
                                    <Text style={styles.buttonText}>-</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button, styles.plusButton} onPress={() => updateTeleOpLowerBalls(1)} >
                                    <Text style={styles.buttonText}>+</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text>{teleOpUpperBalls} Balls scored in Upper Hub</Text>
                                <TouchableOpacity style={styles.button, styles.minusButton} onPress={() => updateTeleOpUpperBalls(-1)} >
                                    <Text style={styles.buttonText}>-</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button, styles.plusButton} onPress={() => updateTeleOpUpperBalls(1)}>
                                    <Text style={styles.buttonText}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                </View>
                <View>
                    <TouchableOpacity style={styles.row} onPress={() => toggleEndgameExpand()}>
                        {
                            isEndgameExpanded ? <PullUpArrow /> : <DropDownArrow />
                        }
                        <Text style={[styles.title, styles.font]}>Endgame</Text>
                    </TouchableOpacity>
                    {
                        isEndgameExpanded &&
                        <View style={styles.child}>
                            <Text style={styles.checkboxHeader}>Traversal</Text>
                            <CheckBox
                                style={styles.checkox}
                                onClick={() => setIsTraversalChecked(current => !current)}
                                isChecked={isTraversalChecked}
                            />
                        </View>
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )

    function toggleAutoExpand() {
        setIsAutoExpanded(current => !current)
    }

    function toggleTeleOpExpand() {
        setIsTeleOpExpanded(current => !current)
    }

    function toggleEndgameExpand() {
        setIsEndgameExpanded(current => !current)
    }

    function updateAutoLowerBalls(num) {
        let target = autoLowerBalls + num;
        if (target >= 0) {
            setAutoLowerBalls(target);
        }
    }

    function updateAutoUpperBalls(num) {
        let target = autoUpperBalls + num;
        if (target >= 0) {
            setAutoUpperBalls(target);
        }
    }

    function updateTeleOpLowerBalls(num) {
        let target = teleOpLowerBalls + num;
        if (target >= 0) {
            setTeleOpLowerBalls(target);
        }
    }

    function updateTeleOpUpperBalls(num) {
        let target = teleOpUpperBalls + num;
        if (target >= 0) {
            setTeleOpUpperBalls(target);
        }
    }
}

const styles = StyleSheet.create({

})