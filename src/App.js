import './App.css';
import Filter from './Filter';
import { useEffect, useState } from 'react';

function App() {
  const [data, setdata] = useState([])
  // const [title, setTitle] = useState('')
  
  useEffect(() => {
    fetch("https://dummyjson.com/products")
        .then(resp => resp.json()
            .then(res => setdata(res.products),
      
            )).catch(err => console.log(err.message))


}, [])

  // const [id, setId] = useState('')

  // useEffect(() => {
  //   console.log(title)
  // }, [title])

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then(resp => resp.json()
  //       .then(res => setdata(res))).catch(err => console.log(err.message))

  // }, [])

  // const save = () => {
  //   let data = { title }
  //   fetch('https://jsonplaceholder.typicode.com/todos', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify(data)

  //   }).then(res => console.log(res)).catch(err => err.message)

  // }

  // const upd = (ex, idx) => {
  //   setTitle(ex.title)
  //   setId(ex.id)
 
  // }

  // const update = () => [

 
  //   fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-type': 'application/json'
  //     },
  
  //     body: JSON.stringify({title})

  //   }).then(res => console.log('updated')).catch(err => err.message)
  // ]
  // const del = (idx) => {

  //   fetch(`https://jsonplaceholder.typicode.com/todos/${idx}`, {
  //     method: 'DELETE',

  //   }).then(res => console.log('deleted')).catch(err => err.message)

  // }

  return (
    <div className="App">
      {/* <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={save}>save</button>
      <button onClick={update}>update</button>
     {data.map((elem)=> <button>{elem.title}</button>)}
      {data.map((e, id) => {
        return (
          <>
            <p>{e.id}</p>
            <p>{e.title}</p>
            <button onClick={() => del(id)}>del</button>
            <button onClick={() => upd(e, id)}>upd</button>
          </>
        )
      })} */}

<Filter data={data}/>

    </div>
  );
}

export default App;
