import { EXAMPLE_LABELS } from "@/redux/actionLabels";

export function updateMagicNumber(payload: { magicNumber: number }) {
  return {
    type: EXAMPLE_LABELS.EXAMPLE,
    payload,
  };
}
