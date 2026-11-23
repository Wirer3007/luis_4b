import {View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Estilos from '../St/Estilos';

export default function Home() {
    return (
        <View>
            <Text style={Estilos.BemVindo}>Bem-vindo!</Text>
        </View>
    );
}
