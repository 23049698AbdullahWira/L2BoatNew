import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

const Boat = ({name, description, picture, icon_name}) => {
    return (
        <View style={styles.boat}>
                <Text style={styles.boatName}>{name}</Text>
                <Text style={styles.boatDescription}>{description}</Text>
                <Image source={picture} style={styles.boatImage} />
        </View>
    );
};

class AllBoats extends React.Component {
    render() {
        return (
            <ScrollView>
                <Text style={styles.header}>GetABoat - For Sale</Text>
                <Boat name="Sea Ray 500 Sundancer"
                      description='Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.'
                      picture={require('./img/sea_ray.jpg')} icon_name="fa-ship"></Boat>
                <Boat name="Four Winns Horizon 180"
                      description='A sporty look and refined details truly set the Horizon 180 above all others.'
                      picture={require('./img/four_winns.jpg')} icon_name="fa-ship"></Boat>
                <Boat name="Flipper 640 ST"
                      description='A modern take on the classic, traditional hardtop and perfect for a family picnic.'
                      picture={require('./img/flipper.jpg')} icon_name="fa-ship"></Boat>
                <Boat name="Princess V48"
                      description='There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.'
                      picture={require('./img/princess.jpg')} icon_name="fa-ship"></Boat>
                <Boat name="Bayliner 175 Bowrider"
                      description='Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.'
                      picture={require('./img/bayliner.jpg')} icon_name="fa-ship"></Boat>
                <Boat name="Fairline Targa 47"
                      description='Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.'
                      picture={require('./img/fairline.jpg')} icon_name="fa-ship"></Boat>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        flex: 1,
        flexDirection: 'row',
        textAlign: 'center',
        borderWidth: 1,
        backgroundColor: 'grey',
        marginTop: 30,
    },
    boat: {
        flex: 1,
        flexDirection: 'column',
        textAlign: 'center',
        borderWidth: 1,
        backgroundColor: 'grey',
        marginTop: 30,
        alignItems: 'center',
    },
    boatName: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: 'darkgrey',
        textAlign: 'center',
        alignSelf: 'stretch',
        borderWidth: 1,
        flex: 1,
    },
    boatDescription: {
        fontSize: 18,
        textAlign: 'center',
        backgroundColor: 'lightgrey',
        borderWidth: 1,
        flex: 1,
        marginTop: 10,
    },
    boatImage: {
        width: 400,
        height: 300,
        marginTop: 10,
    },
});
export default AllBoats;
