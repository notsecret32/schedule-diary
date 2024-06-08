export const useTelegram = () => {
  const telegram = (<any>window).Telegram;

  return { telegram };
};
