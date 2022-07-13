import React from 'react'
import Layout from './components/layout'
import Home from './components/home'
import Profile from './components/profile'
import Repositories from './components/repositories'
import useGithub from "./hooks/github-hooks"

const App = () => {
  const { githubState } = useGithub()
  return (
    <Layout>
      {githubState.hasUser ? <>
        {githubState.loading ? (
          <p>Loading</p>
        ) : (
          <>
            <Profile/>
            <Repositories/>
          </>
        )}
      </> : <Home/>}
    </Layout>
  );
}

export default App;
