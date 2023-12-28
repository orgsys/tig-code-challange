import React from "react";

const envVars = ["REACT_APP_GRAPHQL_HEADER"];

const EnvironmentCheck = ({ children }: { children: React.ReactNode }) => {
  const missingEnvs = envVars.filter(
    (envVar) => !(envVar in process.env)
  );

  return (
    <>
      {missingEnvs.length > 0 ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          .env setup required for: {missingEnvs.join(", ")}
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default EnvironmentCheck;
