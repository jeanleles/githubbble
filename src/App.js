import React from 'react'
import Layout from './components/layout';
import Profile from './components/profile';

const App = () => {
  return (
    <main>
      <Layout>
        <Profile />
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
}

export default App;
