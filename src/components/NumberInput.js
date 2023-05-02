import { TextInput } from "react-native";

/**
 * @param {{
 *      value: number,
 *      onChange: function,
 *      placeholder: string,
 *      style: object
 * }} props
 */
export default function NumberInput(props) {
    let value = props.value ?? null;
    let placeholder = props.placeholder ?? "";
    let style = props.style ?? {};
    let onChange = props.onChange ?? (() => {});

    let onChangeText = (text) => {
        onChange(parseInt(text));
    }
    
    let textValue = "";
    if (typeof value == 'number' && !isNaN(value)) textValue = value.toString();

    return <TextInput keyboardType='number-pad'
        style={props.style}
        placeholder={props.placeholder}
        onChangeText={onChangeText}
        value={textValue}
    />;
}