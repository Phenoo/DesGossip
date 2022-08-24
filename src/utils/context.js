import React, { useState, useEffect, useCallback, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider =  ({ children }) => {
  const [searchItem, setsearchItem] = useState('bitcoin');
  const [loading, setLoading] = useState(true)
  const [latestNews, setLatestNews] = useState([])
  const [newsdata, setNewsData] = useState([]);
  const [postdata, setPostData] = useState([]);
  

  const url = `https://newsapi.org/v2/everything?q=${searchItem}&language=en&from=2022-08-10&sortBy=publishedAt&apiKey=fbb9e22f39d0483896153e63e8dfd187`
  const latesturl = `https://newsapi.org/v2/everything?domains=bbc.co.uk&language=en&from=2022-08-20&to2022-08-21&sortBy=publishedAt&pageSize=24&apiKey=fbb9e22f39d0483896153e63e8dfd187`


  const fetchLatestData = useCallback(async () => {
    try {
      const response = await fetch(`${latesturl}`);
      const data = await response.json();
      setLatestNews(data.articles);
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }, [latesturl])

  
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(`${url}`);
      const data = await response.json();
      setNewsData(data.articles)
      setLoading(false)
    } catch (error) {
      console(error)
      setLoading(false)
    }
  }, [url])

  useEffect(() => {
    fetchLatestData();
  })
  useEffect(() => {
    fetchData();
  }, [searchItem, fetchData])
  
  return (
    <AppContext.Provider 
    value={{searchItem, setsearchItem, newsdata, setNewsData, loading, latestNews, setLatestNews, postdata, setPostData}}
    >
      {children}
    </AppContext.Provider>
  )
}


export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }