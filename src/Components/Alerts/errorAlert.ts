import Swal from "sweetalert2";

export const errorAlert = (title: string, text: string) => {
  Swal.fire({
    background: "var(--background2)",
    title,
    text,
    icon: "error",
    customClass: {
      popup: "text-primary",
    },
  });
};
