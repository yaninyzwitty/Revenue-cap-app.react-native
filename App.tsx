import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DemoScreen from "./screens/DemoScreen";
import Paywall from "./screens/Paywall";

export type RootStackParamList = {
  Home: undefined;
  PayWall: undefined;
  Demo: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Demo"
          component={DemoScreen}
        />

        <Stack.Screen
          options={{
            headerShown: false,
            presentation: "modal",
          }}
          name="PayWall"
          component={Paywall}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
