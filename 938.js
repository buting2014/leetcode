import { isNumber } from "util";

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
 * Output: 23
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
rangeSumBST(root, L,R);
var rangeSumBST = function(root, L, R) {
   if(root == null){
       return null;
   }
   var result = [];
   var compare = function(root){
       if(root == null){
           return null;
       }
       if(root.val >= L && root.val <= R){
           result.push(root.val);
       }
       compare(root.left);
       compare(root.right);
   }
   return result.reduce((sum,item)=>{sum+item});
};

// TreeNode {
//   val: 10,
//   right:
//    TreeNode {
//      val: 15,
//      right: TreeNode { val: 18, right: null, left: null },
//      left: null },
//   left:
//    TreeNode {
//      val: 5,
//      right: TreeNode { val: 7, right: null, left: null },
//      left: TreeNode { val: 3, right: null, left: null } } }

