import { View, Text } from 'react-native'
import React from 'react'

export default function ChatRoomScreen() {
//     useLayoutEffect(() => {
//         console.log("error")
//         var arr = []
//         database()
//         .ref("rooms")
//         .on('value', snapshot => {
//           if (snapshot.val()){
//             arr = []
//           for (const item in (snapshot.val().messages)) {
//             console.log("new message", snapshot.val().messages[item])
//             arr = [...arr, snapshot.val().messages[item]]
//             // console.log(arr)
//           }
//           console.log("messagesSSSSSS",arr)
          

//         // console.log('User data: ', snapshot.val().messages);
//         }
//         setMessages(arr)
//         });
//         console.log(arr)
//       }, [])
  return (
    <View>
      <Text>ChatRoomScreen</Text>
    </View>
  )
}