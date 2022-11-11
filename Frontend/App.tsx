import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { Provider as PaperProvider } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "react-native-paper";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// export default function App() {
// 	return (
// 		<PaperProvider>
// 			<NavigationContainer>
// 				<Stack.Navigator>
// 					<Stack.Screen name="Home" component={HomeScreen} />
// 				</Stack.Navigator>
// 			</NavigationContainer>
// 		</PaperProvider>
// 	);
// }

export default function App() {
	const { colors } = useTheme();
	return (
		<PaperProvider>
			<NavigationContainer>
				<Tab.Navigator>
					<Tab.Screen
						name="Home"
						component={HomeScreen}
						options={{
							tabBarIcon: ({ size }) => (
								<MaterialCommunityIcons
									name="home"
									color={colors.primary}
									size={size}
								/>
							),
							tabBarLabel: () => null,
						}}
					/>
				</Tab.Navigator>
			</NavigationContainer>
		</PaperProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
