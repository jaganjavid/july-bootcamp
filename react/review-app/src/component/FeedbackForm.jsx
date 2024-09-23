import Card from "./shared/Card"

const FeedbackForm = () => {
  return (
    <Card>
        <h2>Add your Review</h2>

        <form>
           <div>
            <input type="text" placeholder='Enter your review' />
            <button type='submit'>Send</button>
           </div>
        </form>
    </Card>
  )
}

export default FeedbackForm