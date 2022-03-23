import {useState} from "react"

const Feedbackitem = () => {
    const [rating, setRating] = useState(2)
    const [text, setText] = useState('This is exaple of a feedback item...')

     const handleClick = () =>{
         setRating((prev) =>{
             return prev + 1
         })
     }

  return (
    <div className="card">
        <div className="num-display">{rating}</div>
        <div className="text-display">{text}</div>
        {/* <button onClick={handleClick}>Click..</button> */}
    </div>
  )
}

export default Feedbackitem