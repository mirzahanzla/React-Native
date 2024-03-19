import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Imagedetails from '../components/imageDetail';
export default function Imagescreen() {
  return (
    <View style={styles.viewStyle}>
      <Text>Images</Text>
    <Imagedetails imageSource = {require('../../assets/1.jpg' )} title ="Mountain"></Imagedetails>
    <Imagedetails imageSource = {require('../../assets/2.jpg' )} title="beach" ></Imagedetails>
    <Imagedetails imageSource = {require('../../assets/3.jpg' )} title="forset"></Imagedetails>
    </View>
  );
}

const styles = StyleSheet.create({


});