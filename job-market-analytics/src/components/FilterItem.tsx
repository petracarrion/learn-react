import { Form } from "react-bootstrap";

function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


export type FilterItemProps = {
    name: string,
    options: {
        name: string,
        weight: string,
        checked: boolean,
    }[],
}

export default function FilterItem({name, options}: FilterItemProps) {
    return (
        <Form.Group>

            <Form.Label>{capitalizeFirstLetter(name)}</Form.Label>

            {options.map((option) =>
                <Form.Check
                    type="checkbox"
                    key={option.name}
                    id={option.name}
                    label={option.name}
                    defaultChecked={option.checked}
                />
            )}

        </Form.Group>
    );
};