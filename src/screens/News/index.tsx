import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { Search, ChevronLeft, MoreVertical } from "react-native-feather";
import profileImg from '../../assets/images/ProfileImg.png';

export const News = () => {
    return (
        <View style={styles.background} >
            <View style={styles.header}>
                <View style={styles.topHeader}>
                <ChevronLeft stroke="#4a5055" width={20} height={20}></ChevronLeft>
                <Text style={styles.noticias}>NOTÍCIAS</Text>
                <MoreVertical stroke="#c1c5c9" width={24} height={24}></MoreVertical>
                <Image source={profileImg} style={styles.profilePic} />
                </View>
                <View style={styles.bottomHeader}>
                </View>
            </View>
            <View style={styles.breve}>
                <View style={styles.breveTituloGame}></View>
                <View style={styles.breveTitulo}></View>
                <View style={styles.breveData}></View>
                <View style={styles.breveFuturos}></View>
            </View>
            <View style={styles.hoje}>
                <View style={styles.hojeIcon}></View>
                <View style={styles.hojeTituloGame}></View>
                <View style={styles.hojeTitulo}></View>
                <View style={styles.hojeReacoes}></View>
            </View>
            <View style={styles.cardVideo}>

            </View>
        </View>        
    )
}