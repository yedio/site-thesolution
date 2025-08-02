//줄바꿈 처리
export const LineBreaker = (input?: string): string => {
  if (!input) return "";
  return input.split("\n").join("<br />");
};
