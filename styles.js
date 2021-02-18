import { StyleSheet, Dimensions } from 'react-native';

var { height } = Dimensions.get('window');
var box_count = 3.5;
var box_height = height / box_count;
export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 24,
        paddingRight: 12,
        backgroundColor: "white"
    },
    itemBackground: {
        backgroundColor: 'grey'
    },  
    itemContainer: {
        paddingTop: 20,
        paddingBottom: 20
    },
    title: {
        fontSize: 25,
        fontWeight: "bold"
    },
    desc: {
        color: "grey",
        fontSize: 15,
        fontStyle: "italic"
    },
    time: {
        color: "grey",
        fontSize: 15,
    },
    line: {
        borderWidth: 0.5,
        borderColor: 'black',
        margin: 10
    },
    image: {
        borderRadius: 10,
        marginTop: 20,
        marginLeft: 20,
        width: 70,
        height: 70,
        shadowColor: "#000",
    },
    containerFlex: {
        flexDirection: 'row',
        flex: 1
    },
    box: {
        width: box_height
    },
    imageWrapper: {
        
    },
    addMoreContainer: {
        width: "100%",
        height: 56,
    }, 
    addMoreButton: {
        backgroundColor: 'black',
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 18,
        paddingBottom: 18
    }
})