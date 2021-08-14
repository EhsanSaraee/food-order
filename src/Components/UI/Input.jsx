import React, { forwardRef } from "react";

const Input = forwardRef(({ label, input }, ref) => {
   return (
      <div className="input">
         <label htmlFor={input.id}>{label}</label>
         <input ref={ref} {...input} />
      </div>
   );
});

export default Input;
