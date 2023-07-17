export function formatedCpf(cpf: string) {
  const regexCPF = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
  if (!regexCPF.test(cpf)) {
    return "Formato inválido";
  }

  const dataFormatada = cpf.replace(regexCPF, "$1.$2.$3-$4");

  return dataFormatada;
}
