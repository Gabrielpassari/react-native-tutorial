import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-web'

export default function FormSignUp() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <View style={styles.form}>
        <TextInput style={styles.inputs} placeholder="Nome" />
        <TextInput style={styles.inputs} placeholder="Email" />
        <TextInput 
            style={styles.inputs} 
            placeholder="Senha" 
            secureTextEntry
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center'
  },
  form:{
    width: "90%",
    gap: 10
  },
  inputs:{
    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderStyle: "solid",
    borderRadius: 6,
    padding: 8
  },
    title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 20
  }
})