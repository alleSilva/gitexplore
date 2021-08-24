import { StyleSheet, Text, View, Image, SafeAreaView, Platform, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? 36 : 0,
      backgroundColor:'black'
    },
    button: {
        marginTop:10,
        marginBottom:10,
        color: 'white',
        width:150,
        backgroundColor: 'rgb(18,123,249)',
        borderRadius: 5,
        marginLeft:5,
        padding:5,
        justifyContent:"center", 
        alignItems:"center",
    },
    button2: {
      marginTop:10,
      marginBottom:10,
      color: 'white',
      width:150,
      backgroundColor: 'green',
      borderRadius: 5,
      marginLeft:5,
      padding:5,
      justifyContent:"center", 
      alignItems:"center",
  }
  });
  
  
  
export const Header = styled.View` 
  
     flex-direction:row;
     justify-content:space-between;
     align-items:center;
     background-color:#222222;
     padding:20px;
  
  `;
  
  
export const Logo = styled.View` 
  
  justify-content:center;
  
  `;
  
  
export const Menu = styled.View`
  
  padding:10px;
  justify-content:center;
  
  `
  
  
export const Page = styled.View` 
  
     flex:1;
     background-color:#111111;
  
     
  `;
  
export const Search = styled.View`
  padding:20px;
  flex-direction:row;
  
  `;
  
export const SearchInput = styled.TextInput`
  height:50px;
  padding:10px;
  flex:1;
  border:0;
  border-radius:15px;
  background-color:#222222;
  color:white;
  
  `;
  
  
  
export const OrganizationsList = styled.View`
  padding:20px;
  
  `;
  
export const Item = styled.View`
  
  margin-top:10px;
  margin-bottom:10px;
  border:3px solid rgb(18,123,249);
  border-radius:10px;
  padding:10px;

  
  `;
  
  
export const ItemText = styled.Text`
  
  color:white;
  margin-top:5px;
  
`;

export const Buttons = styled.View`
 
 flex-direction:row;
 
`;
  
  