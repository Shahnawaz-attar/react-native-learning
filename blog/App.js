import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import SingleBlog from "./src/screens/SingleBlog";

const navigator = createStackNavigator(
  {
    indexScreen: IndexScreen,
    singleBlog: SingleBlog,
  },
  {
    initialRouteName: "indexScreen",
    defaultNavigationOptions: {
      title: "Blog App ",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
