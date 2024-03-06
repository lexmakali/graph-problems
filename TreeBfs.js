var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
        this.children = [];
    }
    return TreeNode;
}());
function bfs(treeRoot) {
    var result = [];
    var queue = [];
    if (treeRoot) {
        queue.push(treeRoot);
        while (queue.length > 0) {
            var currentNode = queue.shift();
            result.push(currentNode.value);
            for (var _i = 0, _a = currentNode.children; _i < _a.length; _i++) {
                var child = _a[_i];
                queue.push(child);
            }
        }
    }
    return result;
}
// Example usage:
// Create a simple tree
var root = new TreeNode(1);
root.children = [new TreeNode(2), new TreeNode(3)];
root.children[0].children = [new TreeNode(4), new TreeNode(5)];
root.children[1].children = [new TreeNode(6)];
// Perform BFS
var result = bfs(root);
console.log(result);
