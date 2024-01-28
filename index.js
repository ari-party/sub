// https://stackoverflow.com/a/6969486
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export default function formatString(string, variables, delimiters) {
  if (typeof string !== "string") {
    throw new Error("Argument string is not of type string");
  }
  if (typeof variables !== "object") {
    throw new Error("Argument variables is not of type object");
  }
  for (const key in variables) {
    const regex = new RegExp(
      (delimiters.prefix || "{{") +
        escapeRegExp(key) +
        (delimiters.suffix || "}}"),
      "g"
    );
    string = string.replaceAll(regex, variables[key]);
  }
  return string;
}
