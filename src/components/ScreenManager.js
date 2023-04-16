import Screen from "./Screen";
export default function ScreenManager(props) {

    let children = props.children;
    if (!(props.children instanceof Array)) {
        children = [props.children];
    }

    children = children.filter(v => {
        return v.type == Screen && v.props.id == props.activeId;
    });

    return <>{children}</>;
}