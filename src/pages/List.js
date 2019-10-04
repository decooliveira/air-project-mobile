import React,{ useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, Image, AsyncStorage, StyleSheet } from 'react-native';
import logo from '../assets/logo.png';
import SpotList from '../components/SpotList';

export default function List(){

    const [techs, setTechs] = useState([]);

    useEffect(()=>{
        AsyncStorage.getItem('techs').then(storedTechs => {
            const techsArray = storedTechs.split(',').map(tech => tech.trim()); 
            setTechs(techsArray);
        });
    },[]);

    return (
        <SafeAreaView style={StyleSheet.container}>
            <Image source= {logo} style={styles.logo}/>
            <ScrollView>
                {techs.map(tech => <SpotList key={tech} tech={tech} />)}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo:{
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 10
    }
});