import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { usePreventScreenCapture } from 'expo-screen-capture';

/////////////////// Screens Import ///////////////////
// Splash Screens
import Splash1 from "./Screens/Splash/Splash1";
import Splash2 from "./Screens/Splash/Splash2";

// Despek Screens
import Home from "./Screens/Despek/Home/Home";
import Search from "./Screens/search/Search";
import DataSearch from "./Screens/search/DataSearch";
import Kever from "./Screens/Despek/kever/Kaver";
import Bnk from "./Screens/Despek/kever/Bnk";
import Setting from "./Screens/Despek/setting/Setting";

// Arabic Screens
import Arabic from "./Screens/Arabicc/Arabic";
import Carosell from "./Screens/Arabicc/carosel/Carosell";
import Mshahd from "./Screens/Arabicc/ditels/mshahd/Mshahd";
import Zedemshahd from "./Screens/Arabicc/ditels/mshahd/Zedemshahd";
import Romanci from "./Screens/Arabicc/ditels/romanci/Romanci";
import Zederomanci from "./Screens/Arabicc/ditels/romanci/Zederomanci";
import Toparabic from "./Screens/Arabicc/top/Toparabic";
import Actionarabic1 from "./Screens/Arabicc/besh/actionarabic/Actionarabic1";
import Dataactionarabic from "./Screens/Arabicc/besh/actionarabic/Dataactionarabic";
import Dramaarabic from "./Screens/Arabicc/besh/dramaarabic/Dramaarabic";
import Datadramaarabic from "./Screens/Arabicc/besh/dramaarabic/Datadramaarabic";
import Animiarabic from "./Screens/Arabicc/besh/animiarabic/Animiarabic";
import Dataanimiarabic from "./Screens/Arabicc/besh/animiarabic/Dataanimiarabic";
import Comediarabic from "./Screens/Arabicc/besh/comediarabic/Comediarabic";
import Datacomediarabic from "./Screens/Arabicc/besh/comediarabic/Datacomediarabic";
import Trsarabic from "./Screens/Arabicc/besh/trsarabic/Trsarabic";
import Datatrsarabic from "./Screens/Arabicc/besh/trsarabic/Datatrsarabic";
import Ser from "./Screens/Arabicc/ser/Ser";

// Badini Screens
import Badini from "./Screens/badini/Badini";
import Actionbadini from "./Screens/badini/bash1/Actionbadinii/Actionbadini";
import Dataactionbadini from "./Screens/badini/bash1/Actionbadinii/Dataactionbadini";
import Dramabadini from "./Screens/badini/bash1/dramabadini/Dramabadini";
import Datadramabadini from "./Screens/badini/bash1/dramabadini/Datadramabadini";
import Anibadini from "./Screens/badini/bash1/Anibadini/Anibadini";
import Dataanibadini from "./Screens/badini/bash1/Anibadini/Dataanibadini";
import Comedibadini from "./Screens/badini/bash1/comedibadini/Comedibadini";
import Datacomedibadini from "./Screens/badini/bash1/comedibadini/Datacomedibadini";
import Trsbadini from "./Screens/badini/bash1/trsnakbadini/Trsbadini";
import Datatrsbadini from "./Screens/badini/bash1/trsnakbadini/Datatrsbadini";
import Caroselbadini from "./Screens/badini/caroselbadini/Caroselbadini";
import Mshahdbadini from "./Screens/badini/ditelss/mshahdbadini/Mshahdbadini";
import Zedemshahdi from "./Screens/badini/ditelss/mshahdbadini/Zedamshahdi";
import Romancibadini from "./Screens/badini/ditelss/romancii/Romancibadini";
import Zederomancibadini from "./Screens/badini/ditelss/romancii/Zederomancibadini";
import Topbadini from "./Screens/badini/top/Topbadini";
import Serbadini from "./Screens/badini/sar/Serbadini";

// Sorani Screens
import Sorani from "./Screens/Sorani/Sorani";
import Sersorani from "./Screens/Sorani/Ser/Sersorani";
import Caroselsorani from "./Screens/Sorani/caroselsorani/Caroselsorani";
import Zederomancisorani from "./Screens/Sorani/ditels1/romanci1/Zederomancisorani";
import Romancisorani from "./Screens/Sorani/ditels1/romanci1/Romancisorani";
import Mshahdsorani from "./Screens/Sorani/ditels1/mshahdsorani/Mshahdsorani";
import Zedemshahdsorani from "./Screens/Sorani/ditels1/mshahdsorani/Zedemshahsorani";
import Topsorani from "./Screens/Sorani/topsorani/Topsorani";
import Actionsorani from "./Screens/Sorani/bash2/actionsorani/Actionsorani";
import Dataactionsorani from "./Screens/Sorani/bash2/actionsorani/Dataactionsorani";
import Dramasorani from "./Screens/Sorani/bash2/dramasorani/Dramasorani";
import Datadramasorani from "./Screens/Sorani/bash2/dramasorani/Datadramasorani";
import Animisorani from "./Screens/Sorani/bash2/animisorani/Animisorani";
import Dataanimisorani from "./Screens/Sorani/bash2/animisorani/Dataanimisorani";
import Comedisorani from "./Screens/Sorani/bash2/comedisorani/Comedisorani";
import Datacomedisorani from "./Screens/Sorani/bash2/comedisorani/Datacomedisorani";
import Trsnaksorani from "./Screens/Sorani/bash2/trssorani/Trsnaksorani";
import Datatrsnaksorani from "./Screens/Sorani/bash2/trssorani/Datatrsnaksorani";

/////////////////// Main App Component ///////////////////
const Stack = createNativeStackNavigator();

const App = () => {
  // Prevent screen capture
  usePreventScreenCapture();

  // Load custom fonts
  const [fontsLoaded] = useFonts({
    'arabic': require('./assets/font/arabic.ttf'),
    'arabi': require('./assets/font/arab.ttf'),
    'k24': require('./assets/font/k24.ttf'),
  });

  // Ensure fonts are loaded before rendering the app
  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash1">
        <Stack.Screen 
          name="Splash1" 
          component={Splash1} 
          options={{ headerShown: false, presentation: 'fullScreenModal' }} 
        />
        <Stack.Screen 
          name="Splash2" 
          component={Splash2} 
          options={{ headerShown: false, presentation: 'fullScreenModal' }} 
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ headerShown: false, presentation: 'fullScreenModal' }} 
        />
        <Stack.Screen 
          name="Kever" 
          component={Kever} 
          options={{ headerShown: false, presentation: 'fullScreenModal' }} 
        />
        <Stack.Screen 
          name="Bnk" 
          component={Bnk} 
          options={{ headerShown: false, presentation: 'fullScreenModal' }} 
        />
        <Stack.Screen 
          name="Setting" 
          component={Setting} 
          options={{ headerShown: false, presentation: 'formSheet' }} 
        />
        {/* Continue to add other screens in the same pattern */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
