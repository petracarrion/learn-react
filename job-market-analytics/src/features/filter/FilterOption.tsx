import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { checkedFilterOption, selectFilterOptionById } from "./filterSlice";
import { RootState } from "../../app/store";

export type FilterOptionPropsOld = {
  filterOptionId: string;
};

export default function FilterOption({ filterOptionId }: FilterOptionPropsOld) {
  const dispatch = useDispatch();

  const filterOption = useSelector((state) =>
    selectFilterOptionById(state as RootState, filterOptionId)
  );

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const target = event.target;
    const checked = target.checked;
    const filterOptionId = target.id;

    dispatch(checkedFilterOption({ filterOptionId, checked }));
  }

  return (
    <Form.Check
      key={filterOptionId}
      type="checkbox"
      id={filterOptionId}
      label={filterOption.name}
      defaultChecked={filterOption.checked}
      onChange={handleInputChange}
    />
  );
}
