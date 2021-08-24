import React, { useState, useEffect } from 'react';
import { Text, Image, SafeAreaView, TouchableOpacity, Linking, FlatList } from 'react-native';
import { Header, styles, Logo, Menu, Page, Search, SearchInput, OrganizationsList, Item, ItemText, Buttons } from './styled';


export default function App() {


  const [searchText, setSearchText] = useState('');

  const [repositories, setRepositories] = useState([]);

  const [ searchList, setSearchList ] = useState([]);

  const [ favorites, setFavorites ] = useState([]);



 

  useEffect(() => {

    async function getRepositories() {

      const req = await fetch("https://api.github.com/users/matheuskeidygomes/repos");

      const json = await req.json();

      if (json) {

        setRepositories(json);

        setSearchList(json);  
      }

    }

    getRepositories();

  }, []);



  useEffect(() => {

    if(searchText != '' ) {

      setSearchList(repositories.filter((item) => item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1 ));

    } else {

      setSearchList(repositories);
    }

  }, [searchText]);




  function addFavorites(item: never) {


    const myFavorites = [ ...favorites, item ];

    setFavorites(myFavorites);

    setFavoritesList(favorites);

  }

   
  useEffect(()=>{

    console.log(favorites);

  },[favorites]);

  return (

    <SafeAreaView style={styles.container}>

      <Header>

        <Logo>

          <Image
            source={require('./assets/logotipo.png')} style={{ width: 100, height: 70 }} resizeMode="stretch"
          />

        </Logo>

        <Menu>

          <Image
            source={require('./assets/cardapio.png')} style={{ width: 40, height: 40 }} resizeMode="cover"
          />

        </Menu>

      </Header>


      <Page>

        <Search>

          <SearchInput value={searchText} onChangeText={(t) => setSearchText(t)} placeholder="Pesquisar pelo nome do repositório" />

        </Search>

        <OrganizationsList>

      

          <FlatList

            data={searchList}
            renderItem={({ item }) =>

              <Item data={item} >

                <ItemText> <Text style={{ fontWeight: 'bold', color: 'rgb(18,123,249)' }}>Repository Name:</Text> {item.name} </ItemText>

                <ItemText> <Text style={{ fontWeight: 'bold', color: 'rgb(18,123,249)' }}>Repository Local:</Text> {item.full_name} </ItemText>

                <ItemText> <Text style={{ fontWeight: 'bold', color: 'rgb(18,123,249)' }}>Author:</Text> {item.owner.login} </ItemText>

                <ItemText> <Text style={{ fontWeight: 'bold', color: 'rgb(18,123,249)' }}>About:</Text> {item.description} </ItemText>

                <Buttons>

                    <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(item.html_url)} >

                       <ItemText> <Text style={{ fontWeight: 'bold' }}> Go to repository </Text> </ItemText>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2} onPress={() => addFavorites(item)} >

                       <ItemText> <Text style={{ fontWeight: 'bold' }}> Save to favorites </Text> </ItemText>

                    </TouchableOpacity>

                </Buttons>
                

              </Item>
              
            }
            keyExtractor={(item) => item.id}

          />


        </OrganizationsList>


        <OrganizationsList>
      

          <FlatList

            data={favorites}
            renderItem={({ item }) =>

              <Item data={item} >

                <ItemText> <Text style={{ fontWeight: 'bold', color: 'rgb(18,123,249)' }}>Repository Name:</Text> {item.name} </ItemText>

                <ItemText> <Text style={{ fontWeight: 'bold', color: 'rgb(18,123,249)' }}>Repository Local:</Text> {item.full_name} </ItemText>

                <ItemText> <Text style={{ fontWeight: 'bold', color: 'rgb(18,123,249)' }}>Author:</Text> {item.owner.login} </ItemText>

                <ItemText> <Text style={{ fontWeight: 'bold', color: 'rgb(18,123,249)' }}>About:</Text> {item.description} </ItemText>

                <Buttons>

                    <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(item.html_url)} >

                       <ItemText> <Text style={{ fontWeight: 'bold' }}> Go to repository </Text> </ItemText>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2} onPress={() => addFavorites(item)} >

                       <ItemText> <Text style={{ fontWeight: 'bold' }}> Save to favorites </Text> </ItemText>

                    </TouchableOpacity>

                </Buttons>
                

              </Item>
              
            }
            keyExtractor={(item) => item.id}

          />


        </OrganizationsList>

      </Page>


    </SafeAreaView>



  )

}

