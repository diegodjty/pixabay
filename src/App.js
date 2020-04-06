import React,{useState, useEffect} from 'react';
import Form from './Components/Form';
import ImgList from './Components/ImgList';


function App() {


  const [search,setSearch] = useState('');
  const [images,setImage]= useState([]);
  const [actualPage, setActualPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect( ()=> {
    const consultAPI = async () =>{
      if(search ==='') return;
      const imgxpage = 30;
      const key = '15852586-a377c795f5ed4153685b02f5c'
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imgxpage}&page=${actualPage}`

      const response = await fetch(url);
      const result = await response.json();
      
      setImage(result.hits)
      const calculateTotalPages = Math.ceil(result.totalHits / imgxpage)
      setTotalPages(calculateTotalPages);

      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({behavior: 'smooth'})
    }
    consultAPI()
  },[search,actualPage])

  const previousPage =()=>{
    const newActualPage = actualPage-1
    if(newActualPage === 0) return;
    setActualPage(newActualPage)
  }

  const nextPage = () =>{
    const newActualPage = actualPage+1
    if(newActualPage > totalPages) return;
    setActualPage(newActualPage)
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">
          Image Searcher
        </p>
        <Form 
          setSearch={setSearch}
        />
      </div>
      <div className="row justify-content-center">
        <ImgList 
          images={images} 
        />
        <button
          type="button"
          className="bbtn btn-info mr-1"
          onClick={previousPage}
        >&laquo; Previous</button>
        <button
          type="button"
          className="bbtn btn-info"
          onClick={nextPage}
        >Next &raquo;</button>
      </div>
    </div>
  );
}

export default App;
