type ListItemProps = {
    text:string;
};
export function ListItem (props:ListItemProps) {
  return (<p>{props.text}</p>
  );
}
