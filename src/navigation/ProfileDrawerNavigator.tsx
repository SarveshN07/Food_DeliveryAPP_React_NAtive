import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import ProfileScreen from '../screens/ProfileScreen'
import OrdersScreen from '../screens/OrdersScreen'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {
	return (
		<DrawerContentScrollView {...props}>
			<View style={styles.drawerHeader}>
				<Image source={require('../../assets/icon.png')} style={styles.avatar} />
				<Text style={styles.userName}>Food Lover</Text>
				<Text style={styles.userSubtitle}>Welcome back</Text>
			</View>
			<DrawerItemList {...props} />
		</DrawerContentScrollView>
	)
}

const SettingsScreen = () => (
	<View style={styles.container}>
		<Text style={styles.title}>Settings</Text>
		<Text style={styles.subtitle}>Manage your app preferences here.</Text>
	</View>
)

const HelpScreen = () => (
	<View style={styles.container}>
		<Text style={styles.title}>Help</Text>
		<Text style={styles.subtitle}>Find support and common answers here.</Text>
	</View>
)

const LogoutScreen = () => {
	const { logout } = useContext(AuthContext)

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Logout</Text>
			<Text style={styles.subtitle}>Sign out from the app.</Text>
			<Pressable style={styles.logoutButton} onPress={logout}>
				<Text style={styles.logoutButtonText}>Logout</Text>
			</Pressable>
		</View>
	)
}

export default function ProfileDrawerNavigator() {
	return (
		<Drawer.Navigator
			initialRouteName="Profile"
			drawerContent={(props) => <CustomDrawerContent {...props} />}
			screenOptions={{
				headerStyle: {
					backgroundColor: '#ff6b00',
				},
				headerTintColor: '#fff',
				headerTitleStyle: {
					fontWeight: 'bold',
				},
				drawerActiveTintColor: '#ff6b00',
				drawerInactiveTintColor: '#333',
			}}>
			<Drawer.Screen
				name="Profile"
				component={ProfileScreen}
				options={{ title: 'Profile' }}
			/>
			<Drawer.Screen
				name="My Orders"
				component={OrdersScreen}
				options={{ title: 'My Orders' }}
			/>
			<Drawer.Screen name="Settings" component={SettingsScreen} />
			<Drawer.Screen name="Help" component={HelpScreen} />
			<Drawer.Screen name="Logout" component={LogoutScreen} />
		</Drawer.Navigator>
	)
}

const styles = StyleSheet.create({
	drawerHeader: {
		padding: 20,
		borderBottomWidth: 1,
		borderBottomColor: '#f0e3d8',
		marginBottom: 8,
		alignItems: 'center',
	},
	avatar: {
		width: 72,
		height: 72,
		borderRadius: 36,
		marginBottom: 12,
	},
	userName: {
		fontSize: 18,
		fontWeight: '700',
		color: '#1f1f1f',
	},
	userSubtitle: {
		color: '#666',
		marginTop: 4,
	},
	container: {
		flex: 1,
		backgroundColor: '#fff7f0',
		padding: 20,
		justifyContent: 'center',
	},
	title: {
		fontSize: 24,
		fontWeight: '700',
		color: '#1f1f1f',
		marginBottom: 8,
	},
	subtitle: {
		color: '#666',
		marginBottom: 18,
	},
	logoutButton: {
		backgroundColor: '#ff6b00',
		paddingVertical: 14,
		paddingHorizontal: 22,
		borderRadius: 14,
		alignItems: 'center',
	},
	logoutButtonText: {
		color: '#fff',
		fontWeight: '700',
	},
})
