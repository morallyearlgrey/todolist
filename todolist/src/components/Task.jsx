export const Task = (props) => {
    return (
         props.status ? ( <h1 className="word"style={{textDecoration: "line-through", backgroundColor: "#DC7E56", borderRadius: "7px"}}>‎   ‎{props.task}‎   ‎</h1>) : (<h1 className="word">{props.task}</h1>) 
    );
}