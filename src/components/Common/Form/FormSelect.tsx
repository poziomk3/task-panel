import Select from "react-select";
import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";

interface FormSelectProps {
  label: string;
  control: Control<FieldValues, any>;
  table: Array<{
    value: string;
    label: string;
  }>;
  defaultValue: string | undefined;
}

const FormSelect: React.FC<FormSelectProps> = ({
  label,
  control,
  table,
  defaultValue,
}) => {
  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={label}
      render={({ field: { onChange, value } }) => (
        <Select
          styles={{
            container: (baseStyles, state) => ({
              ...baseStyles,
              width: "20em",
              margin: 0,
            }),
          }}
          required={true}
          placeholder={""}
          value={table.find((c) => c.value === value)}
          onChange={(val) => onChange(val?.value)}
          options={table}
        />
      )}
    />
  );
};

export default FormSelect;
