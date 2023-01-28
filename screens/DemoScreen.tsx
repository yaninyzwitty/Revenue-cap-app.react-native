import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

const DemoScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView className="bg-[#E59620] flex-1 pt-5">
      <TouchableOpacity
        onPress={navigation.goBack}
        className="flex-row items-center p-5 "
      >
        <Ionicons name="arrow-back-circle" size={30} color="white" />

        <Text className="text-white">Go Back</Text>
      </TouchableOpacity>
      <ScrollView>
        <View className="flex-1 items-center justify-center px-10">
          <Text className="text-gray-600 text-2xl font-extrabold">
            You have access to this feature 🚀🚀
          </Text>
          <Text className="text-white text-2xl font-bold underline">
            What are the most valuable things everyone should know?
          </Text>
          <Ionicons name="build-outline" size={200} color="white" />
          <Ionicons name="checkmark-circle-sharp" size={60} color="#96F550" />
          <View className="mt-16 -ml-8"></View>

          <Text className="text-white mt-10 flex-1 font-bold text-center pb-20 text-sm">
            I read somewhere that family members are like planets; they may be
            distant but the force of love always pulls them together no matter
            what Not everyone in your life deserves your attention (like toxic
            people) so decide who those people are for you Do not do things that
            you hate When you fall you learn to rise. It’s part of growing up.
            You should speak the truth even if it makes you less popular Money
            cannot buy happiness but it can buy things that define happiness for
            you You should never stop learning since life never stops teaching
            You can't sit around and wait for things to fall in place, you have
            to assemble the puzzle yourself Smiling and laughing is good for
            your health so do it!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DemoScreen;
