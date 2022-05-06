import '@aws-amplify/ui-react/styles.css'
import { AmplifyProvider } from '@aws-amplify/ui-react'

import { 
  SocialPostCollection 
} from './ui-components';

function App() {
  return (
    <AmplifyProvider>
      <SocialPostCollection />
    </AmplifyProvider>
  );
}

export default App;
