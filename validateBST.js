var isValidBST = function(root, left, right) {
  // if root.val === null
  // return true
  // if left bound is > or right bound is < root.val
  // return false
  // else return isValidBST() && isValidBST()

  left = typeof left === "undefined" ? -Infinity : left;
  right = typeof right === "undefined" ? Infinity : right;

  if (root === null) {
    return true;
  } else if (left >= root.val || right <= root.val) {
    return false;
  } else {
    return (
      isValidBST(root.left, left, root.val) &&
      isValidBST(root.right, root.val, right)
    );
  }
};
