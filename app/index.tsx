import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather"


export default function Index() {
  return (
    <View
      style={{
        flex: 1
      }}
      className="bg-black"
    >
      <SafeAreaView className="flex-row justify-between mx-4 mt-2">
        <View className="flex-row items-center gap-x-1">
          <Image source={require('../assets/images/youtlogo.png')} className='h-7 w-10 rounded-xl' />
          <Text className="text-white font-semibold text-xl tracking-tightier">YouTube</Text>
        </View>

        <View className="flex-row items-center gap-x-3">
          <Icon.Cast stroke="white" strokeWidth="1.2" height="22"/>
          <Icon.Bell stroke="white" strokeWidth="1.2" height="22"/>
          <Icon.Search stroke="white" strokeWidth="1.2" height="22"/>
          <Image source={require("../assets/images/face.jpg")} className="h-7 w-7 rounded-full" />
        </View>
      </SafeAreaView>
    </View>
  );
}
