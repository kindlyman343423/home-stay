import React from 'react';

const renderField = ({
 input,
 label,
 type,
 className,
 meta: { touched, error }
}) => (
 <div className="form-group">
   <label>{label}</label>
   <div className="input-group">
     <input {...input} placeholder={label} type={type} className={className} />
   </div>
   {touched && (error && <div className="alert alert-danger">{error}</div>)}
 </div>
);

export default renderField;