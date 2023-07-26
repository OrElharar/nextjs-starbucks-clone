export interface IPgError extends Error{
    code: string;
    constraint: string;
}

export function isPgError(err: unknown): err is IPgError {
  try{
      return (err as IPgError).code != null && (err as IPgError).constraint != null;;
  }catch (_err){
      return false;
  }

}
