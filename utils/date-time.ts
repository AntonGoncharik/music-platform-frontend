export const getFormatTrackTime = (time: number): string => {
  return new Date(time * 1000).toJSON().slice(14, 19);
};
