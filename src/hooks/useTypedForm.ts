// libs
import { useFormContext, UseFormReturn } from "react-hook-form";
// types
import { TAllFormValues } from "@/react-hook-form/types";

type TPages = keyof TAllFormValues;

/**
 * useTypedForm
 * @description Wrap useFormContext with typescript for naming suggestion benefit
 * @param _pageName
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useTypedForm = <TPageName extends TPages>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _pageName: TPageName,
): UseFormReturn<TAllFormValues[TPageName], object> =>
  useFormContext<TAllFormValues[TPageName]>();
