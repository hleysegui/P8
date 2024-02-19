import { createContext, useContext, useState, useEffect, useCallback, Component } from "react"
import React from "react"

const APIContext = createContext()

/**
 * Create context for use API
 * @param {Component} return a child component 
 * @returns { Array }
 * @throws { NotFoundError } When we call the api and Something wrong
 */
export function APIContextProvider({children}) {
    const [logements, setLogements] = useState([])
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const fetchData = useCallback(async() => {
        try {
            const response = await fetch('http://localhost:8080/api/properties')
            const data  = await response.json()
            setLogements(data)
        }
        catch(err) {
            setIsError(true)
        } finally {
            setIsLoading(false)
        }
    })

    useEffect(() => {
        fetchData()
    }, [logements])

    const getLogementById = useCallback((id) => {
        const logementById = logements.find((logement) => logement.id === id)

        useEffect(() => {
            setIsError(false)
            if(logementById === undefined) {
                setIsError(true)
            }
        })        
        return logementById
    }) 
     
    return (
        <APIContext.Provider value={{
            logements,
            getLogementById,
            isError,
            isLoading,
        }}>
            {children}
        </APIContext.Provider>
    )
}

/**
 * 
 * @returns { Array } return an Array 
 * @throws { NotFoundError } when the context undefined or empty
 */
export function useAPI() {
    const context = useContext(APIContext)

    if(context === undefined) {
        throw new Error("Context must be used within provider")
    }
    return context
}