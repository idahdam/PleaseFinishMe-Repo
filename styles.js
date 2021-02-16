import { StyleSheet, Dimensions } from 'react-native';

var { height } = Dimensions.get('window');
var box_count = 3.5;
var box_height = height / box_count;
export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#eaeaea"
    },
    itemBackground: {
        backgroundColor: 'grey'
    },  
    itemContainer: {
        paddingBottom: 20
    },
    title: {
        fontSize: 30,
        fontWeight: "bold"
    },
    desc: {
        fontSize: 15,
        fontStyle: "italic"
    },
    time: {
        fontSize: 10,
    },
    line: {
        borderWidth: 0.5,
        borderColor: 'black',
        margin: 10
    },
    image: {
        marginTop: 20,
        marginLeft: 20,
        width: 70,
        height: 70,
    },
    containerFlex: {
        flexDirection: 'row',
        flex: 1
    },
    box: {
        width: box_height
    }
})