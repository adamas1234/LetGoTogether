//import{createStackNavigator} from 'react-native'
//import{createAppContainer} from 'react-navigation'
import {createStackNavigator,createAppContainer} from 'react-navigation';
import Login from './../../screens/login'
import Profile from './../../screens/profile'
import Editprofile from './../../screens/editprofile'
import Together from './../../screens/together'
import Location from './../../screens/location'
import Notification from './../../screens/notification'
import Register from './../../screens/register'
import Viewuser from './../../screens/viewuser'
import Post from './../../screens/post'
import Allpost from './../../screens/allpost'
import Search from './../../screens/search'


const stackConfig = {
    Login:{
        screen : Login,
        navigationOptions:{
            header:null
        }
    },
    Register:{
        screen : Register,
        navigationOptions:{
            header:null
        }
    },
    Viewuser:{
        screen : Viewuser,
        navigationOptions:{
            header:null
        }
    },
    Profile:{
        screen : Profile,
        navigationOptions:{
            header:null
        }
    },
    Editprofile:{
        screen : Editprofile,
        navigationOptions:{
            header:null
        }
    },
    Together:{
        screen : Together,
        navigationOptions:{
            header:null
        }
    },
    Notification:{
        screen : Notification,
        navigationOptions:{
            header:null
        }
    },
    Location:{
        screen : Location,
        navigationOptions:{
            header:null
        }
    },
    Post:{
        screen : Post,
        navigationOptions:{
            header:null
        }
    },
    Allpost:{
        screen : Allpost,
        navigationOptions:{
            header:null
        }
    },
    Search:{
        screen : Search,
        navigationOptions:{
            header:null
        }
    },
}
const AppNavigator = createStackNavigator(stackConfig,{
    initialRouteName: "Login"
})

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer