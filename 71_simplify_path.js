var simplifyPath = function (path) {
  let stack = []; // Stack to store directory names in canonical form
  let parts = path.split("/"); // Split by '/'

  for (let part of parts) {
    if (part === "..") {
      if (stack.length) {
        // Go up one directory if possible
        stack.pop();
      }
    } else if (part && part !== ".") {
      // Ignore empty parts (from '//' or ending '/') and '.'
      stack.push(part); // Store valid directory/file names
    }
  }

  return "/" + stack.join("/"); // Join the cleaned directory names with '/'
};
