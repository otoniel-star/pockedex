import {Image} from "expo-image";
import {styleSheet, text, View } from "react-native";

export default function Index(){
    return (
        View style ={styles.tela}>
        <Image
            source="https://i.pinimg.com/474x/b1/57/0e/b1570e1b6f3d2cc53a0c2843f91a9518.jpg"
            style = {{width: 150, height:150}}
            />
            <text style = {styles.nome}>Pikachu</text>
        </View>
    );
}

const style = StyleSheet.create({
    tela: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#f4f5f2",
    },
    nome: {fontsize:24, fontWeight "800"},
})

const POKEMONS = [
    {id: 1, nome: "bulbasaur", imagem: imagemDoPokemom (1), tipos : ["grass", },
    {id: 4, nome: "charmander", imagem: imagemDoPokemom (2), tipos : ["fire", },
    {id: 7, nome: "squirtle", imagem: imagemDoPokemom (3), tipos : ["water", ]},
    {id: 25, nome: "pikachu", imagem: imagemDoPokemom (25), tipos : ["electric", ]},
];
<FileSystemWritableFileStream, ScrollView
    data = {POKEMONS}
    keyExtractor = {(item) => string(item.id)}
    renderItem = {({item}) => <PokemonCard pokemon = {item} />}
    numColumns = {2}
    
    
