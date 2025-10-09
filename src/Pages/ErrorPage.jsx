
import React from 'react';
import { useRouteError } from 'react-router'; 


const ErrorPage = () => {
  const error = useRouteError();
  console.error("Route error:", error);

  // null-safe message
  const status = error?.status || "";
  const title = error?.statusText || error?.message || "Page not found";

  return (
    <>
 
      <main style={{ padding: 24, textAlign: "center" }}>
        <h1>Oops {status}</h1>
        <p>{title}</p>

        {/* যদি তুমি debug করতে চাও */}
        <details style={{ marginTop: 12, whiteSpace: "pre-wrap", textAlign: "left", display: "inline-block" }}>
          <summary>Debug info</summary>
          {JSON.stringify(error, null, 2)}
        </details>
      </main>

    </>
  );
};

export default ErrorPage;
