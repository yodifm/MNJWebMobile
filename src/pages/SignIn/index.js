// import React from 'react';
// import {Text, StyleSheet, View, TextInput, TouchableOpacity, Image, SafeAreaView, BackHandler, Alert, ActivityIndicator} from 'react-native';

// import axios from 'axios';

// import {useState,useEffect, useCallback} from 'react';


// const AppButton= ({onPress, title}) =>{
//     return(<TouchableOpacity
//     activeOpacity={0.8}
//     onPress={onPress}
//     style={styles.loginButton}>
//         <Text style={styles.loginButtonText}>{title}</Text>
//     </TouchableOpacity>);
// }


// function SignIn({navigation}){

//     const backAction = () => {
        
//         if (navigation.isFocused()) {
//             Alert.alert(
//                 "Exit App",
//                 "Do you want to exit?",
//                 [
//                   {
//                     text: "No",
//                     onPress: () => console.log("Cancel Pressed"),
//                     style: "cancel"
//                   },
//                   { text: "Yes", onPress: () => BackHandler.exitApp() }
//                 ],
//                 { cancelable: false }
//                 );
//                 return true;
//         }
//         else {
//             return false
//         }
//       };

//       useEffect(() => {
//         BackHandler.addEventListener("hardwareBackPress", backAction);
    
//         return () =>
//           BackHandler.removeEventListener("hardwareBackPress", backAction);
//       }, []);

//     const [userNIK, setUserNIK] = useState("");
//     const [userPassword, setUserPassword] = useState("");
//     const [isLoading, setIsLoading] = useState(false);


    
//     const getUserUrl = 'https://marganusantarajaya.com/api_stock_opname/login.php'

//     let bodyFormData = new FormData()
//     bodyFormData.append('NIK',userNIK)
//     bodyFormData.append('PASSWORD',userPassword)

//     const handleSubmit=()=>{
        
//         if (userNIK == "" && userPassword == "") {
//             alert("NIK dan password kosong")
//             return;

//         }
//         if (userPassword == "") {
//             alert("password kosong")
//             return;
//         }
//         if(userNIK == ""){
//             alert("NIK kosong");
//             return;
//         }
//         else{ 
//             setIsLoading(true)
//             axios.post(getUserUrl, bodyFormData)
//             .then(response=>{
//                 // let userJsonNIK = JSON.stringify(response.data[0]['NIK']);
//                 // let userJabatan = JSON.stringify(response.data[0]['JABATAN']);
//                 // let userNama = JSON.stringify(response.data[0]['NAMA']);
//                 // let userBranchCode = JSON.stringify(response.data[0]['BRANCH_CODE'])

//                 console.log(response.data)
//                 if(response.data == 'Password atau username salah'){
//                     setIsLoading(false)
//                     alert("wrong email or password. please check again")
//                 }
//                 else{
//                     setIsLoading(false)
//                     alert("login success")
//                     // navigation.push('Main',{
//                     //     keyNIK: userJsonNIK,
//                     //     keyJabatan: userJabatan,
//                     //     keyNama: userNama,
//                     //     keyBranchCode: userBranchCode
//                     // });
//                 }
//             })
//             .catch(error=>{
//                 console.log(error);
//             })
        
//         }
//     }
    
//     return(
//         <SafeAreaView style={styles.loginBackground}>
//             <View>
//                 <SafeAreaView style={styles.logoContainer}>
//                     <Image style={styles.logo} ></Image>
//                 </SafeAreaView>
//                 <View style ={{flexDirection:'row'}}>
//                     <Image style={{marginTop:2, marginRight: 15}} ></Image><TextInput style={styles.textInput} placeholder="NIK" autoCapitalize="none" onChangeText={text => setUserNIK(text)} ></TextInput>
//                 </View>
//                 <View style={{flexDirection:'row'}}>
//                 <Image style={{marginTop:2, marginRight: 15}} ></Image><TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true} textContentType="password" onChangeText={text => setUserPassword(text)}></TextInput>
//                 </View>
//                 {isLoading&&
//                 <View style={styles.buttonContainer}>
//                     <TouchableOpacity style={styles.confirmDisableButton} disabled={true} onPress={handleSubmit}>
//                         <ActivityIndicator size="large" color="#D51A1A"/>
//                     </TouchableOpacity>
//                 </View>
//                 }
//                 {!isLoading&&
//                 <View style={styles.buttonContainer}>
//                     <AppButton title ="LOG IN" size  ="sm" onPress={handleSubmit} backgroundColor="#D51A1A"/>
//                 </View>
//                 }
//                 <View style={{marginTop:100}}>
//                     <Text style={{textAlign:'center'}}>Version 1.0.5</Text>
//                 </View>
//             </View>
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     loginBackground: {
//         flex:1,
//         backgroundColor: "#fff",
//         alignItems:"center",
//         justifyContent: "center"
//     },
//     buttonContainer:{
//         justifyContent: "center",
//         padding: 16
//     },
 
//     loginButton:{
//         width:230,
//         height:40,
//         borderRadius:25,
//         backgroundColor:"#D51A1A"

//     },
//     confirmDisableButton:{
//         width:230,
//         height:40,
//         borderRadius:25,
//         backgroundColor:"#F36969",
//         justifyContent:'center'
//     },
//     loginButtonText:{
//         color:"#FFFAFA",
//         textAlign:"center",
//         paddingTop:10,
//         fontWeight:"700",
//         fontSize:14
//     },
//     logoContainer:{
//         position:"relative",
//         justifyContent:"center",
//         alignContent: "center",
//     },
//     logo:{
//        top: -30,
//        left: 30,
//        width:"85%",
//        height:"50%",
//     },
//     textInput:{
//         borderBottomWidth:1,
//         width:250,
//         marginBottom: 55,
//         paddingLeft:10,
//     }  
// })

// export default SignIn;







































import { Text, StyleSheet, View, TouchableOpacity, Image, SafeAreaView, BackHandler, Alert, ActivityIndicator } from 'react-native'
import React, {useState,useEffect, useCallback} from 'react'
import { Button, Gap, Header, TextInput } from '../../components'
import { Login } from '../../assets'
import { useForm } from '../../utils'
import Axios from 'axios'
import { ScrollView } from 'react-native-gesture-handler'

const SignIn = ({navigation}) => {
//    const[NIK, setNIK] = useState('');
//    const [PASSWORD, setPASSWORD] = useState('');
  
const [form, setForm] = useForm({
    NIK: '',
    PASSWORD: ''  
   });

    const onSubmit = () => {
     console.log('form', form);
     Axios.post('https://marganusantarajaya.com/imd_api/login.php', form)
    // Axios.post('https://dummy.restapiexample.com/api/v1/create', form)
     .then(res => {
       console.log('success', res);
     })
     .catch(err => {
       console.log('error', err);
     })
};

  return (
    <ScrollView>

       <View style = {styles.page}>
           <Header title="Sign In" subTitle="Login to continue your journey"/>
           <View style={styles.container}>
               <Login/>   
               <TextInput label="NIK" placeholder="Enter Your NIK" value={form.NIK} onChangeText={(value) => setForm('NIK', value)}/>
               <Gap height={16}/>
               <TextInput label="PASSWORD" placeholder="Enter Your PASSWORD" value={form.PASSWORD} onChangeText={(value) => setForm('PASSWORD', value)} />
               <Gap height={24}/>
               <Button text="Login" onPress={onSubmit}/>
           </View>         
       </View>
      
     </ScrollView>
  )
}

export default SignIn

const styles = StyleSheet.create({
    page:{flex:1},
    container:{backgroundColor:'white', paddingHorizontal:24, paddingVertical:10, flex:1},
    // Login: {justifyContent:'center', alignItems:'center', flex:1},
  });