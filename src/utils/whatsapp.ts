const PHONE_NUMBER = '5521900000000'; // +55 21 90000-0000

export const getWhatsAppLink = (message?: string) => {
  const defaultMessage = 'Olá! Vi o site da Clínica Aurora Odontologia e gostaria de mais informações sobre atendimento odontológico.';
  const text = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${PHONE_NUMBER}?text=${text}`;
};
