import { useEffect, useRef, useState } from "react"

export function Data(){
    const[comments,setComments]=useState([])
    const[filterComment,setFilterComments]=useState([])
    const inputRef=useRef()
    
    function handleSubmit(e){
        e.preventDefault()
        const value=inputRef.current.value
        if(value==="") return
        setComments(prev=>{
            return [...prev,value]
        })
        setFilterComments(prev=>{
            return [...prev,value]
        })
        inputRef.current.value=""
    }
    function handleChange(e){
        const value=e.target.value;
        setFilterComments(comments.filter(item=>item.toLowerCase().includes(value.toLowerCase())))
    }
    return(
        <div className="container-fluid">
            <header className="bg-primary">
                <h1 className="text-white text-center p-3">Filter Your Comments</h1>
            </header>
            <section className="row">
                <nav className="col-2">
                    <div className="d-flex">
                    <input onChange={handleChange} type="search" className="form-control mb-2" placeholder="filter your comments here"/>
                    <button className="btn btn-primary">Search</button>
                    </div>
                    <div>
                        <h3 className="mt-4">Your Comments:</h3>
                        <br/>
                        {filterComment.map(comment=>
                            <div>
                                <h3 className="text-primary">{comment}</h3>
                            </div>
                            )}
                    </div>
                </nav>
                <main className="col-10">
                    <form onSubmit={handleSubmit}>
                       <div className="d-flex flex-wrap overflow-auto">
                        <div className="card w-50">
                        <img className="card-img-top" src={"https://wallup.net/wp-content/uploads/2019/09/539490-landscape-nature-beautiful-view-area-look-landscapes.jpg"} height="400px" width="400px"/>
                        <input type="text" className="form-control mb-3" ref={inputRef} placeholder="type your comments here"/>
                        <button className="btn btn-danger p-2 card-footer">Add Your Comments</button>
                        </div>
                       </div>
                    </form>
                </main>
            </section>
        </div>
    )
}

