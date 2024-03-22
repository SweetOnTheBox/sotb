import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <h1 className="font-weight-bold display-4">Oops!</h1>
      <p className="my-4 lead">Sorry, an unexpected error has occurred.</p>
      <p className="text-danger font-weight-bold">
        {error.statusText || error.message}
      </p>
    </div>
  );
};

export default ErrorPage;
