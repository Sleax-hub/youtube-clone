import { View, Text, Image } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";


const VideoCard = ({ video }) => {
  return (
    <View key={video.id} className="w-full ">
      {/* Image with overlay */}
      <View className="relative w-full h-56  overflow-hidden">
        <Image source={video.thumbanail} className="w-full h-full" />

        {/* Absolute overlay */}
        <View className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded">
          <Text className="text-white text-xs font-semibold">
            {video.duration}
          </Text>
        </View>
      </View>

      {/* Additional content below the image */}
      <View className="mt-2 px-1 flex-row justify-between items-center pb-2 mx-2 gap-x-2">
        <Image source={video.avatar} className="h-9 w-9 rounded-full"/>
        <View className="flex-1 gap-y-1">
            <Text className="text-white font-semibold">{video.title}</Text>
            <Text className="text-zinc-400 text-xs">{video.channelTitle} • {video.viewCount} •  {video.publishedText}</Text>
        </View>
        <View className="self-start">
            <Icon.MoreVertical stroke="white" strokeWidth={2} height={16}/>
        </View>
      </View>
    </View>
  );
};

export default VideoCard;
