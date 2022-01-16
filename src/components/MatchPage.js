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
                            <Text>Lmao</Text>
                        </View>
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )

    function toggleExpand() {
        setIsExpanded(current => !current)
    }
}

const styles = StyleSheet.create({

})