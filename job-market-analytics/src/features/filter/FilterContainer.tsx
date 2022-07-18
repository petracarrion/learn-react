import Filter from './Filter';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectAllFilterIds } from './filterSlice';

export default function FilterContainer() {
  const allFilterIds = useSelector(selectAllFilterIds);

  return (
    <Container>
      <Row>
        <Col>
          {allFilterIds.map((filterId) => (
            <Filter key={filterId} filterId={filterId} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}
