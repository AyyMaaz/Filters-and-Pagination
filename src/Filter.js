import { useEffect, useState } from 'react';
import React from 'react'
import Pagination from './Pagination';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Cards from './Cards';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';




const Filter = ({ data }) => {


    const [database, setdatabase] = useState(data)
    const [currentpage, setcurrentpage] = useState(1)
    const [postperpage] = useState(7)
    const [option, setoption] = useState('')
    const [input, setinput] = useState('')

    useEffect(() => {
        setdatabase(data)

    }, [data])



    const filterOut = (element) => {
        const updatedone = data.filter((elem) => {
            return elem.category === element
        })
        setdatabase(updatedone)

    }

    const optionOut = (e) => {
        setoption(e.target.value)
        const update = data.filter((elem) => {
            return elem.category.includes(option)
        })
        setdatabase(update)
        console.log(option)

    }

    const buttons = [...new Set(data.map((e) => e.category))]


    function searchFilter() {
        const supdate = data.filter((elem) => elem.brand.includes(input))
        setdatabase(supdate)
    }


    const lastIndex = currentpage * postperpage
    const firsIndex = lastIndex - postperpage
    const currentPost = database.slice(firsIndex, lastIndex)
    console.log('currentPost', currentPost)

    const paginate = (id) => {
        //it will start from the current page passed by the props
        setcurrentpage(id)
    }

    return (
        <div className='filter'>

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    type='text' value={input} onChange={(e) => setinput(e.target.value)}
                    label="Search"
                    variant="standard"
                    color="warning"
                    focused
                />
            </Box>
            <br />
            <br />

            <Stack spacing={2} direction="row">
                <Button onClick={() => setdatabase(data)}
                    color="warning">All</Button>
                {buttons.map((e) => <Button variant="contained"
                    color="warning" onClick={() => filterOut(e)}>{e} </Button>)}
            </Stack>


            <select value={option} onChange={optionOut} >
                {buttons.map((e) => <option selected value={e.toString()}>{e}</option>)}
            </select>
            <br />



            <button onClick={searchFilter}>Search</button>
            <br />
            <br />

            {
                currentPost.map((e, id) => {
                    return (
                        <div style={{width:'100%',display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <Cards brand={e.brand} category={e.category} image={e.thumbnail} description={e.description} />
                        </div>
                    )
                })

            }
            <br/>
            <Pagination total={database.length} postperpage={postperpage} paginate={paginate} />

        </div>
    )
}

export default Filter