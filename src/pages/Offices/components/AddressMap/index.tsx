import { useStore } from "@/hooks/useStore";

export default function AdressMap() {
  const dataOffice = useStore("Office", "pageDataReducer");

  return (
    <iframe
      title="map"
      src=`"https://maps.google.com/maps?q=20.98502,105.79599&hl=es;z=14&amp;output=embed"`,
    style = {{ }
}
    >
    </iframe >
  );
}
