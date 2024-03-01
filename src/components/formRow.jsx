function FormRow({ type, name, value, handleChange, labelText }) {
  return (
    <div className="form-row">
      <label htmlFor={name}>{labelText}</label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        className="form-input"
        onChange={handleChange}
      />
    </div>
  );
}

export default FormRow;
