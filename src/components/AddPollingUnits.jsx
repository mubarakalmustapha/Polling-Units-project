import { useState } from "react"

function Add(){
  const [pollingUnit, setPollingUnit] = useState([])
    const [lgaNmae, setLgaName] = useState("")
    const [lgaCode, SetLgaCode] = useState("")
    const [wordName, setWordName] = useState("")
    const [wordCode, SetWordCode] = useState("")
    const [nunmberOfPollingUnit, SetNumberOfPllingUnit] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        setPollingUnit(...pollingUnit, {lgaNmae, lgaCode, wordCode, wordName, nunmberOfPollingUnit})
        window.location = "/"

    }

    return(
        <>
        <form onSubmit={handleSubmit}>
        <div className="mb-3 row">
    <label for="inputPassword" className="col-sm-2 col-form-label">LGA Name</label>
    <div style={{margin: 10}} className="col-sm-10">
      <input 
      onChange={e => setLgaName(e.target.value)}
      type="text" 
      required 
      className="form-control" id="inputPassword"/>
    </div>
    <label for="inputPassword" className="col-sm-2 col-form-label">LGA Code</label>
    <div style={{margin: 10}} className="col-sm-10">
      <input 
      required
      type="number" 
      onChange={e => SetLgaCode(e.target.value)}
      className="form-control" id="inputPassword"/>
    </div>
    <label for="inputPassword" className="col-sm-2 col-form-label">Word Code</label>
    <div style={{margin: 10}} className="col-sm-10">
      <input 
      required
      type="number" 
      onChange={e => SetWordCode(e.target.value)}
      className="form-control" id="inputPassword"/>
    </div>
    <label for="inputPassword" className="col-sm-2 col-form-label">Word Name</label>
    <div style={{margin: 10}} className="col-sm-10">
      <input 
      onChange={e => setWordName(e.taget.value)}
      type="text" required className="form-control" id="inputPassword"/>
    </div>
    <label for="inputPassword" className="col-sm-2 col-form-label">Number Of Polling Unit</label>
    <div style={{margin: 10}} className="col-sm-10">
      <input 
      onChange={e => SetNumberOfPllingUnit(e.target.value)}
      type="number"
      required
       className="form-control" id="inputPassword"/>
    </div>
    <button style={{width: 300}} className="btn btn-danger">Submit</button>
  </div>
        </form>
        </>
    )
}

export default Add