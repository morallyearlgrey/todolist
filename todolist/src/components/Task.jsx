export const Task = (props) => {
    return (
        props.status ? ( <h1 style={{textDecoration: "line-through"}}>{props.task}</h1>) : (<h1>{props.task}</h1>)

    );
}