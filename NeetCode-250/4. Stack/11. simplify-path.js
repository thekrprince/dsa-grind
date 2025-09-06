// LC 71. Simplify Path

function simplifyPath(path) {
    let stack = [];
    let splitPath = path.split("/");

    for (let p of splitPath) {
        if (p === "..") {
            stack.pop();
        } else if (p !== "" && p !== ".") {
            stack.push(p);
        }
    }

    return "/" + stack.join("/");
}

console.log(simplifyPath("/home/")); //     /home
console.log(simplifyPath("/home//foo/"));  //     /home/foo
console.log(simplifyPath("/home/user/Documents/../Pictures")); //   /home/user/Pictures
console.log(simplifyPath("/../"));  //      /
console.log(simplifyPath("/.../a/../b/c/../d/./")); //      /.../b/d