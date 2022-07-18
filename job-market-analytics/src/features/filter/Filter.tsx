import {Form} from "react-bootstrap";
import {useSelector} from "react-redux";
import {selectFilterById} from "./filterSlice";
import FilterOption from "./FilterOption";
import {RootState} from "../../app/store";

export type FilterProps = {
    filterId: string,
}

export default function Filter({filterId}: FilterProps) {
    const filter = useSelector(state => selectFilterById(state as RootState, filterId));

    return (
        <Form.Group>

            <Form.Label>{filterId}</Form.Label>

            {filter.filterOptions.map((filterOptionId) =>
                <FilterOption
                    key={filterOptionId}
                    filterOptionId={filterOptionId}
                />
            )}

        </Form.Group>
    );
}