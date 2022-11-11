import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function Home() {
	return (
		<View style={styles.container}>
			<Text>Home Screen</Text>
			<Button
				icon="camera"
				mode="contained"
				onPress={() => console.log("Pressed")}
			>
				Press me
			</Button>
			<StatusBar style="auto" />
		</View>
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
