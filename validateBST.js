var isValidBST = function(root, left = -Infinity, right = Infinity) {
  // if root.val === null
  // return true
  // if left bound is > or right bound is < root.val
  // return false
  // else return isValidBST() && isValidBST()

  // left = left || -Infinity;
  // right = right || Infinity;

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

var input = [0, null, -1];
var output = isValidBST(input);
console.log(output);
