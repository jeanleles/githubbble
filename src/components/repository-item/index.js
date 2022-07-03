import React from 'react'

const RepositoryItem = ({ name, fullName, linkRepo }) => {
    return (
        <div>
            <h2>{ name }</h2>
            <h4>{ fullName }</h4>
            <a href={ linkRepo } target="_blank" rel="noopener noreferrer">
            { linkRepo }
            </a>
        </div>
    )
}

export default RepositoryItem
