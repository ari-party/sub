// https://stackoverflow.com/a/6969486
function escapeRegExp(string) {
	return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * @param {String} string
 * @param {Object} variables
 * @returns {String}
 */
export default function formatString(string, variables) {
	if (typeof string !== "string") {
		throw new Error("Argument string is not of type string");
	}
	if (typeof variables !== "object") {
		throw new Error("Argument variables is not of type object");
	}
	for (const key in variables) {
		const regex = new RegExp(`{{${escapeRegExp(key)}}}`, "g");
		string = string.replaceAll(regex, variables[key]);
	}
	return string;
}
