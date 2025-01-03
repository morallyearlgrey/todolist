export const Task = (props) => {
    return (
         props.status ? ( <h1 className="word"style={{textDecoration: "line-through"}}>{props.task}</h1>) : (<h1 className="word">{props.task}</h1>) 
    );
}