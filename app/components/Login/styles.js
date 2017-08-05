import { StyleSheet, Dimensions } from "react-native";
let { width } = Dimensions.get('window');

export default iconStyles = StyleSheet.create({
	borderRadius: 10,
	iconStyles: { paddingVertical: 5 },
});

export default styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'red',

	},
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	avatar: {
		margin: 20,
	},
	avatarImage: {
		borderRadius: 50,
		height: 100,
		width: 100,

	},
	header: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	text: {
		textAlign: 'center',
		color: "#333",
		marginBottom: 5,
	},
	buttons: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		margin: 20,
		marginBottom: 30,
	}
});
