const isPalindrome = (str) =>
    str.replace(/[^A-Za-z0-9]/g, "").toLowerCase() ===
    str
        .replace(/[^A-Za-z0-9]/g, "")
        .split("")
        .reverse()
        .join("")
        .toLowerCase();
