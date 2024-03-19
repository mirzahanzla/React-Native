import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import homescreen from "./src/screens/homescreen";
import imagescreen from "./src/screens/imagescreen";
import CounterScreen from "./src/screens/counterscreen";
import TextScreen from "./src/screens/textScreen";
import FlatScreen from "./src/screens/flatScreen";
import ColorScreen from "./src/screens/coloScreen";
import SquareScreen from "./src/screens/ColorChanger";
import UseStateChangeColor from "./src/screens/UseStateChangeColor";
import AddListTask from "./src/screens/AddListTask";
import SearchScreen from "./src/screens/SearchScreen";


const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={homescreen} />
        <Stack.Screen name="image" component={imagescreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="TextScreen" component={TextScreen} />
        <Stack.Screen name="FlatScreen" component={FlatScreen} />
        <Stack.Screen name="Colors" component={ColorScreen} />
        <Stack.Screen name="Changer" component={SquareScreen} />
        <Stack.Screen name="UseState" component={UseStateChangeColor} />
        <Stack.Screen name="AddTask" component={AddListTask} />
        <Stack.Screen name="search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
