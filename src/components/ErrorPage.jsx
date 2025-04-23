import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
    </div>
  );
}
