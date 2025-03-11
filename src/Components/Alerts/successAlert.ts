import Swal from "sweetalert2";

export const successAlert = (title: string, text: string) => {
  Swal.fire({
    background: "var(--background2)",
    title,
    text,
    icon: "success",
    customClass: {
      popup: "text-primary",
    },
  });
};
