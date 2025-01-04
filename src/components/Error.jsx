const Error = ({ isError }) => {
  if (isError) {
    const { status } = isError.response;
    const { msg } = isError.response.data;
    return (
      <div>
        <p>
          Oops, it seems like what you're looking for doesn't exist. Please try
          again!
        </p>
        <p>
          Error message: "{msg}" (code {status})
        </p>
      </div>
    );
  }

  return (
    <>
      <p>I'm afraid you've entered an invalid path, please try again!</p>
    </>
  );
};

export default Error;
