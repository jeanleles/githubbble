import React from 'react'
import Layout from './components/layout'
import Home from './components/home'
import Profile from './components/profile'
import Repositories from './components/repositories'
import Loading from './components/loading'
import Error from './components/error'
import useGithub from "./hooks/github-hooks"

const App = () => {
  const { githubState } = useGithub()
  
  // Se há erro, mostrar componente de erro
  if (githubState.error) {
    return (
      <Layout>
        <Error message={githubState.errorMessage} />
      </Layout>
    )
  }
  
  return (
    <Layout>
      {githubState.hasUser ? <>
        {githubState.loading ? (
          <Loading />
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
