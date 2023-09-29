declare namespace Express {
    export interface Request {
      auth?: {
        sub: string;
        // add other properties present on the user object, if needed
      };
    }
  }
  