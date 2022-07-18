import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectFilterOptionById } from "./filterSlice";
import { RootState } from "../../app/store";

export type FilterOptionPropsOld = {
  filterOptionId: string;
};

export default function FilterOption({ filterOptionId }: FilterOptionPropsOld) {
  const filterOption = useSelector((state) =>
    selectFilterOptionById(state as RootState, filterOptionId)
  );

  return (
    <Form.Check
      key={filterOptionId}
      type="checkbox"
      id={filterOption.name}
      label={filterOption.name}
      defaultChecked={filterOption.checked}
    />
  );
}
