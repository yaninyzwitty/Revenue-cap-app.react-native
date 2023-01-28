import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import ActionRow from "../components/ActionRow";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";
import Paywall from "./Paywall";

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView className="flex-1 bg-gray-100 relative">
      <ScrollView>
        {/* icon */}
        <TouchableOpacity
          onPress={() => navigation.navigate("PayWall")}
          className="absolute z-50 top-5 right-10 items-center pt-3 pl-2"
        >
          <Ionicons
            name="person-circle"
            size={30}
            color="#E59620"
            className=""
          />
          <Text className="text-[#E59620] text-center uppercase">Upgrade</Text>
        </TouchableOpacity>
        <Image
          source={{
            uri: "https://i.imgur.com/e14NE49.png",
          }}
          className="w-full h-64"
        />
        {/* Action rows */}
        <View className="mx-5">
          <View className="flex-row justify-between space-x-2">
            <ActionRow
              title="Track Workout"
              screen="Demo"
              color="#E59620"
              icon="fitness"
              vertical
              requiresPro={false}
            />
            <ActionRow
              title="Browse Workout"
              screen="Demo"
              color="#23967F"
              icon="trophy"
              vertical
              requiresPro={false}
            />
          </View>
          <ActionRow
            title="Connect with friends"
            screen="Demo"
            color="#16a34a"
            icon="md-people"
            requiresPro
          />
          <ActionRow
            title="Heria Workout"
            screen="Demo"
            color="#2563eb"
            icon="barbell"
            requiresPro
          />
          <ActionRow
            title="Ian's TOP Workout"
            screen="Demo"
            color="#c026d3"
            icon="bicycle"
            requiresPro
          />
        </View>
        {/* Action rows */}
        {/* Action rows */}
        {/* Action rows */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
