import { Image } from 'expo-image';
import { Button } from "react-native";
import { useRouter } from "expo-router";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function LoginScreen() {

    const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/header.png')}
        style={styles.topImage}
        contentFit="cover"
      />

      <View style={styles.loginCard}>
        <Text style={styles.titleWelcome}>Bienvenido!</Text>
        <Text style={styles.subtitle}>Ingresar con tu cuenta</Text>

        <TextInput
          placeholder="multimedios@gmail.com"
          style={styles.inputLogin}
        />

        <TextInput
          placeholder="contraseña"
          secureTextEntry={true}
          style={styles.inputLogin}
        />

        <TouchableOpacity style={styles.forgotButton}>
          <Text style={styles.forgotText}>¿Has olvidado su contraseña?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonLogin} onPress={() => router.push("/explorar")}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerText}>
            No tiene cuenta. <Text style={{ fontWeight: 'bold' }}>Registrarse</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
  },
  topImage: {
    width: '100%',
    height: 220,
    borderBottomLeftRadius: 30, 
    borderBottomRightRadius: 30,
  },
  loginCard: {
    width: '85%',
    marginTop: 20,
    alignItems: 'center',
  },
  titleWelcome: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2b2b2b',
    alignSelf: 'flex-start', 
    marginTop: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#7e7e7e',
    alignSelf: 'flex-start',
    marginBottom: 30,
  },
  inputLogin: {
    width: '100%',
    backgroundColor: '#e6e6e6', 
    borderRadius: 25, 
    padding: 15,
    marginBottom: 20,
    paddingLeft: 20,
  },
  forgotButton: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  forgotText: {
    color: '#14b8a6', 
    fontSize: 13,
  },
  buttonLogin: {
    backgroundColor: '#005f5f', 
    width: '65%',
    padding: 14,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  registerButton: {
    marginTop: 25,
  },
  registerText: {
    color: '#14b8a6',
    fontSize: 14,
  },
});