import React from "react";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
export default ({ className, to, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`button button--text button--icon ${className}`}
    aria-label={to}
  >
    <ArrowCircleDownIcon className="icon" icon={to} />
  </button>
);
