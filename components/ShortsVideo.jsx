import { Text } from "react-native";
import { Image, Pressable, View } from "react-native";
import * as Icon from "react-native-feather";

const ShortsVideo = ({ item }) => (
  <Pressable key={item.id}>
    <View className="h-64 w-40 relative mr-3 flex justify-between">
        
      <Image
        source={item.image}
        className="w-full h-full absolute rounded-xl"
      />
      <View className="flex-row justify-end pt-3 pr-1">
        <Icon.MoreVertical stroke={"white"} strokeWidth={1.4} height="20"/>
      </View>
      <View className="p-2">
        <Text className="text-white shadow-lg font-bold text-sm">{item.title}</Text>
        <Text className="text-white shadow-md font-extrabold text-xs">{item.viewCount} Views</Text>
      </View>
    </View>
  </Pressable>
);

export default ShortsVideo;
