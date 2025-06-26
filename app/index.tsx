import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";
import { categories } from "../constants/data";
import { useState } from "react";

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("All");
  return (
    <View
      style={{
        flex: 1,
      }}
      className="bg-black"
    >
      {/* logo and profile icons */}
      <SafeAreaView className="flex-row justify-between mx-4 mt-2">
        <View className="flex-row items-center gap-x-1">
          <Image
            source={require("../assets/images/youtlogo.png")}
            className="h-7 w-10 rounded-xl"
          />
          <Text className="text-white font-semibold text-xl tracking-tightier">
            YouTube
          </Text>
        </View>

        <View className="flex-row items-center gap-x-3">
          <Icon.Cast stroke="white" strokeWidth="1.2" height="22" />
          <Icon.Bell stroke="white" strokeWidth="1.2" height="22" />
          <Icon.Search stroke="white" strokeWidth="1.2" height="22" />
          <Image
            source={require("../assets/images/face.jpg")}
            className="h-7 w-7 rounded-full"
          />
        </View>
      </SafeAreaView>

      <ScrollView className="flex-1 -mt-8" showsVerticalScrollIndicator={false}>
        {/* categories */}
        <View className="py-2 pb-5">
          <ScrollView
            className="px-4"
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {categories.map((category, index) => {
              let isActive = category == activeCategory;
              let textClass = isActive ? "text-black" : "text-white";
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => setActiveCategory(category)}
                  className={
                    isActive?
                       "bg-white rounded-md p-1 px-3 mr-2"
                      : "bg-gray-800 rounded-md p-1 px-3 mr-2"
                  }
                >
                  <Text className={textClass}>{category}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
