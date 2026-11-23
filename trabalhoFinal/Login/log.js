
import { useState } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { listarPessoas } from './database';
import Estilos from './Estilos';

export default function Login({ setTelaLogin, setLoginOk }) {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  async function handleLogin() {
    try {
      const pessoas = await listarPessoas();

      const usuario = pessoas.find(
        (p) => p.nome === nome && p.senha === senha
      );

      if (usuario) {
        Alert.alert('Sucesso', 'Login realizado');
        setLoginOk(true);
      } else {
        Alert.alert('Erro', 'Usuário ou senha incorretos');
      }

    } catch (error) {
      console.log('Erro no login:', error);
      Alert.alert('Erro', 'Não foi possível realizar o login');
    }
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={Estilos.safeAreaViewContainer}>
        <Text style={Estilos.cabecarioT}>
          Bem Vindo! Login
        </Text>

        <View style={Estilos.camposCadastroContainer}>
          <TextInput
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
            style={Estilos.campoTexto}
          />

          <TextInput
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
            style={Estilos.campoTexto}
          />
        </View>

        <Button title="Entrar" onPress={handleLogin} />

        <Text style={Estilos.descriCao}>
          Não tem uma conta?
        </Text>

        <TouchableOpacity onPress={() => setTelaLogin(false)}>
          <Text style={Estilos.descriCao2}>
            Cadastrar
          </Text>
        </TouchableOpacity>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}
