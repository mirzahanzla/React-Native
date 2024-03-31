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
import QuizAssignment from "./src/screens/QuizAssignment"
import Screeninformation from "./src/screens/ScreenInformation"
import Profile from "./src/screens/Profile"


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
        <Stack.Screen name="Search City Data" component={SearchScreen} />
        <Stack.Screen name="Searching Test" component={QuizAssignment} />
        <Stack.Screen name="Information" component={Screeninformation} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
