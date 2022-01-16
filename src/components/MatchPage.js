import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import DropDownArrow from './DropDownArrow';
import PageTitle from './PageTitle';
import PullUpArrow from './PullUpArrow';

export default function MatchPage({ navigation }) {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const [lowerBalls, setLowerBalls] = React.useState(0);
    const [upperBalls, setUpperBalls] = React.useState(0);

    return (
        <SafeAreaView>
            <ScrollView>
                <PageTitle title="Match" />
                <View>
                    <TouchableOpacity style={styles.row} onPress={() => toggleExpand()}>
                        {
                            isExpanded ? <PullUpArrow /> : <DropDownArrow />
                        }
                        <Text style={[styles.title, styles.font]}>Autonomous</Text>
                    </TouchableOpacity>
                    {
                        isExpanded &&
                        <View style={styles.child}>
                            <View>
                                <Text>{lowerBalls} Balls scored in Lower Hub</Text>
                                <TouchableOpacity style={styles.button, styles.minusButton} onPress={() => updateLowerBalls(-1)} >
                                    <Text style={styles.buttonText}>-</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button, styles.plusButton} onPress={() => updateLowerBalls(1)} >
                                    <Text style={styles.buttonText}>+</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text>{upperBalls} Balls scored in Upper Hub</Text>
                                <TouchableOpacity style={styles.button, styles.minusButton} onPress={() => updateUpperBalls(-1)} >
                                    <Text style={styles.buttonText}>-</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button, styles.plusButton} onPress={() => updateUpperBalls(1)}>
                                    <Text style={styles.buttonText}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )

    function toggleExpand() {
        setIsExpanded(current => !current)
    }

    function updateLowerBalls(num) {
        let target = lowerBalls + num;
        if (target >= 0) {
            setLowerBalls(target);
        }
    }

    function updateUpperBalls(num) {
        let target = upperBalls + num;
        if (target >= 0) {
            setUpperBalls(target);
        }
    }
}

const styles = StyleSheet.create({

})