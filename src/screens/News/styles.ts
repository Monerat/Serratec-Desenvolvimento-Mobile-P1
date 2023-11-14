import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        height: '100%',
        width: '100%',
        backgroundColor: "#1F2127",
    },

    header: {
        height: '17%',
        width: '100%',
        paddingTop: Platform.OS === 'ios' ? 64 : 30 ,
        backgroundColor: "#fff"
    },
    
    topHeader: {
        flexDirection: "row",
        paddingLeft: "5%",
        paddingBottom: "2%",
        height: '52%',
        width: '100%',
        backgroundColor: "#f9522d",
        justifyContent:'space-around',
        alignItems: "center"
    },

    noticias:{
        color: "#c1c5c9",
        fontWeight: 'bold',
        letterSpacing: 1.5,
        fontSize: 12
    },

    topHeaderDot: {
        height: 50,
        width: 40,
        alignItems: "center",
        justifyContent: "center"
    },
    profilePic: {
        height: 50,
        width: 50,
        marginTop: "2%"
    },

    bottomHeader: {
        height: '48%',
        width: '100%',
        backgroundColor: "#8c8c8c", 
        flexDirection: "row"
    },

    breve: {

    },

    breveTituloGame: {

    },

    breveTitulo: {

    },

    breveData: {

    },

    breveFuturos: {

    },

    hoje: {

    },

    hojeIcon: {

    },

    hojeTituloGame: {

    },

    hojeTitulo: {

    },

    hojeReacoes: {

    },

    cardVideo: {

    }
});