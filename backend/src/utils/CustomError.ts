class CustomError extends Error {
  statusCode: number;
  status: string;
  isOperationalError: boolean; // is this a operational error like client providing wrong arguments or this is an programming bug/error.
  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.status = statusCode >= 400 && statusCode < 500 ? "fail" : "error";
    this.isOperationalError = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default CustomError;
