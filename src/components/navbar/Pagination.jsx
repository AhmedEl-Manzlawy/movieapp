import React from "react";

export default function Pagination() {
  return (
    <div className="container d-flex justify-content-between mb-3">
      <button type="button" class="btn btn-light">
        previous
      </button>
      <button type="button" class="btn btn-light">
        next
      </button>
    </div>
  );
}
