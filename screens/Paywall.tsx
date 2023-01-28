import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { RootStackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "PayWall"
>;
//   we are in paywall screen

const Paywall = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <ScrollView className="bg-[#1A2F44] flex-1">
      <View className="m-10 space-y-2">
        <Text className="text-2xl text-center uppercase text-white font-bold">
          Upgrade
        </Text>
        <Text className="text-center text-white">
          Upgrade to the pro version and get access to all the features of this
          app
        </Text>
      </View>
      <TouchableOpacity
        onPress={navigation.goBack}
        className="absolute top-10 right-5"
      >
        <Ionicons name="md-close-circle-sharp" size={32} color="#ca8a04" />
      </TouchableOpacity>
      {/* logo */}
      <View className="items-center">
        <MaterialCommunityIcons
          name="trophy-award"
          size={150}
          color="#ca8a04"
        />
      </View>

      {/* content */}
      <View className="px-10 py-5 space-y-5">
        <View className="flex-row space-x-10 items-center">
          <Ionicons name="md-key-sharp" size={32} color="#ca8a04" />
          <View className="flex-1">
            <Text className="text-white font-bold text-lg">
              Access to all Pro features
            </Text>
            <Text className="text-white text-sm font-extralight">
              Upgrade to the Premium version of the app and enjoy all the
              exclusive features available to the pro users.{" "}
            </Text>
          </View>
        </View>
        {/* cont2 */}

        <View className="flex-row space-x-10 items-center">
          <Ionicons name="md-person-add-sharp" size={32} color="#ca8a04" />
          <View className="flex-1">
            <Text className="text-white font-bold text-lg">
              Helpline 24/7 to Personal Trainers
            </Text>
            <Text className="text-white text-sm font-extralight">
              Get unlimited access to our fitness support team and get help
              anytime you need it - day and night.
            </Text>
          </View>
        </View>
        {/* cont 3 */}
        <View className="flex-row space-x-10 items-center">
          <Ionicons name="md-star-sharp" size={32} color="#ca8a04" />
          <View className="flex-1">
            <Text className="text-white font-bold text-lg">
              Useful limited editorial content{" "}
            </Text>
            <Text className="text-white text-sm font-extralight">
              Fitness has become an essential activity for the people of Nairobi
              not only for keeping diseases at bay but also for emotional
              benefits.
            </Text>
          </View>
        </View>
      </View>

      {/* monthly */}
      {/* annual */}
      {/* restore purchases */}
    </ScrollView>
  );
};

export default Paywall;
