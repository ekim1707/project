import React from "react";

const TextArea = ({
  rows,
  id,
  className,
  onChange,
  value,
  placeholder,
  hasIcon,
  iconName,
  disabled,
  type,
  style,
}) => {
  let componentStyle = style;
  if (hasIcon) {
    componentStyle = {
      ...componentStyle,
      background: `url('../../img/${iconName}.png') no-repeat`,
      backgroundSize: "17px 17px",
      backgroundPosition: "8px 16px",
      paddingLeft: "30px",
    };
  }

  return (
    <textarea
      rows={rows}
      id={id}
      className={className}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      type={type}
      style={componentStyle}
    />
  );
};

export default TextArea;
