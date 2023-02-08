export default function Plantitem(props) {
    const  [name,cover,id,light,water] = props;
    return <div>
        {props.name} {props.cover} {props.id}{props.light} {props.water}
    </div>
}