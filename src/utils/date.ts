export function formatDate(date: Date) {
  const day = String(date.getDate()).padStart(2, "0");
  const mouth = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());

  return `${day}/${mouth}/${year}`;
}

export function formatedDate(date: string) {
  const regexData = /^(\d{2})(\d{2})(\d{4})$/;

  if (!regexData.test(date)) {
    return "Formato inválido";
  }

  const dataFormatada = date.replace(regexData, "$1/$2/$3");

  return dataFormatada;
}
