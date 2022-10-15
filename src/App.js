import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
//Add an import to use the API and Auth components from aws-amplify
import { API, Auth } from 'aws-amplify'

function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

//modify the useEffect() function to include the checkUser() function call
useEffect(() => {
  fetchPosts();
  checkUser(); // new function call
});

//define the checkUser function after the existing fetchPosts() function
async function checkUser() {
  const user = await Auth.currentAuthenticatedUser();
  console.log('user:', user);
  console.log('user attributes: ', user.attributes);
}

export default withAuthenticator(App);