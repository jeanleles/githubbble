import React from 'react'
import Layout from './components/layout'
import Profile from './components/profile'
import Repositories from './components/repositories'
import { ResetCSS } from './global/resetCSS'
import GithubProvider from './providers/github-provider'

const App = () => {
  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        <Layout>
          <Profile />
          <Repositories />
        </Layout>
      </GithubProvider>
    </main>
  );
}

export default App;
