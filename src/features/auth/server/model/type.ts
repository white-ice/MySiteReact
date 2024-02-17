export interface ServerLoginSchema {
  username: string;
  password: string;
  isLoading: boolean;
  error?: string;
}
