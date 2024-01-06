import { View, Text, StatusBar, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, { FadeIn, FadeInDown, FadeOut } from "react-native-reanimated";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  return (
    <View className="flex-1 flex justify-end">
      <StatusBar barStyle={"light-content"} />
      <Image
        className="h-full w-full absolute"
        source={require("../assets/images/welcome.png")}
      />

      <LinearGradient
        colors={["transparent", "#18181b"]}
        style={{ width: wp(100), height: hp(70) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex justify-end pb-12 space-y-8"
      >
        <Animated.View
          entering={FadeInDown.delay(100).springify()}
          className="flex items-center"
        >
          <Text
            className="text-white font-bold tracking-wide"
            style={{ fontSize: hp(5) }}
          >
            Best <Text className="text-rose-500">Workouts</Text>
          </Text>
          <Text
            className="text-white font-bold tracking-wide"
            style={{ fontSize: hp(5) }}
          >
            For you
          </Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200).springify()}>
          <TouchableOpacity
          onPress={()=> router.push('home')}
            style={{ height: hp(7), width: wp(80) }}
            className="bg-rose-500 flex justify-center items-center mx-auto rounded-full border-[2px] border-neutral-200"
          >
            <Text
              className="font-bold text-white tracking-widest"
              style={{ fontSize: hp(3) }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
};

export default index;
