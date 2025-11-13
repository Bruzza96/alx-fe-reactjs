import Counter from './components/Counter';

import UserProfile from './components/UserProfile.jsx';
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';


export default function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Counter />
      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
        />

      <Footer />
    </div>
  );
}


