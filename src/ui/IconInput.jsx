import { cloneElement } from "react";

function IconInput({ placeholder, icon, iconClass, className }) {
  return (
    <div className={`icon-input flex items-center gap-2 ${className}`}>
      <input type="text" placeholder={placeholder} />
      {icon && cloneElement(icon, { className: iconClass })}
    </div>
  );
}

export default IconInput;
