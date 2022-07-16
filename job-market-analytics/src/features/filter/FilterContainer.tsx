import FilterItem, {FilterItemProps} from "./FilterItem";
import {Col, Container, Row} from "react-bootstrap";


export type FilterContainerProps = {
    filterItems: FilterItemProps[],
}

export default function FilterContainer({filterItems}: FilterContainerProps) {
    return (
        <Container>
            <Row>
                <Col>
                    {filterItems.map((filterItem) =>
                        <FilterItem
                            key={filterItem.name}
                            name={filterItem.name}
                            options={filterItem.options}
                        />
                    )}
                </Col>
            </Row>
        </Container>
    )
};