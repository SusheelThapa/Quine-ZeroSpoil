export const getInitial = (name: string): string => {
  const names = name.split(" ");
  return names.map((n) => n.charAt(0)).join("");
};
