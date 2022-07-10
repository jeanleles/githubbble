import React from "react"
import Header from "../header"
import * as S from './styled'

const Layout = ({ children }) => {
    return (
        <>            
            <S.WrapperLayout>
                <Header />
                <S.WrapperContent>
                    {children}           
                </S.WrapperContent>
            </S.WrapperLayout>
        </>
    )
}

export default Layout