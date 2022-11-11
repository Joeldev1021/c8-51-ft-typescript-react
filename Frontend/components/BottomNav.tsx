import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={Home} />
			{/* <Tab.Screen name="Settings" component={} /> */}
		</Tab.Navigator>
	);
}


export default MyTabs;