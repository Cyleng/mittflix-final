import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, useHistory, useLocation} from 'react-router-dom';
import SearchPage from './components/SearchPage';
import DetailPage from './components/DetailPage';
import MainPage from './components/MainPage';
import WatchListPage from './components/WatchListPage';
import Header from './components/Header';
import * as getPopular from './services/getPopular';
import * as searchTV from './services/searchTV';
import * as searchByID from './services/searchByID';


function App() {
  const [popularTVs, setPopularTVs]= useState([]);
  const [searchResults, setSearchResults] = useState([])
  const [watchList, setWatchList]= useState([]);
  const [detail, setDetail]=useState([]);

  const history= useHistory();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async()=>{
      const data = await getPopular.getAll();

      setPopularTVs(data);
    }
    fetchData();
  }, [])

  useEffect(() => {
    setWatchList(JSON.parse(localStorage.getItem('watchList')));
  }, [])
  const addToList = (tv)=>{
    setWatchList([...watchList,tv])
  }

  const removeFromList = (tv)=>{
    setWatchList(watchList.filter(item=> item.id!==tv.id))
  }

  const toggle = (e,tv)=>{
    e.preventDefault()
    if (checkList(tv.id)){
      removeFromList(tv);
    }else{
      addToList(tv);
    }
    
  }
  useEffect(() => {
    localStorage.setItem('watchList', JSON.stringify(watchList));
  }, [watchList])

  const updateSearch=async (keyword)=>{
      const data = await searchTV.searchTV(keyword);
      setSearchResults(data);
  }
  
  const search=(e)=>{
    e.preventDefault();
    let keyword = e.target.search.value.trim();
    if(keyword){  
        updateSearch(keyword);
    }
    history.push({pathname:"/search", search:keyword});

  }

  const handleClick=async (e,id)=>{
    e.preventDefault();
    const data=await searchByID.searchByID(id);
    setDetail(data);
    history.push({pathname:"/details"});
  }

  const checkList=(id)=>{
    const checkResult = watchList.find(element=>element.id===id)
    return checkResult;
  }

  
  return <>
    <Header Search={search}/>
    <Switch>
      <Route exact path="/">
          <MainPage TVs={popularTVs}  Click={handleClick} Toggle={toggle}/>
      </Route>

      <Route path="/search">
          <SearchPage Results={searchResults} Click={handleClick} Toggle={toggle}/>
      </Route>

      <Route path="/details">
          <DetailPage Detail={detail}/>
      </Route>

      <Route path="/my-watch-list">
          <WatchListPage WatchList={watchList}  Click={handleClick} Toggle={toggle}/>
      </Route>
    </Switch>
</>
}

export default App;
