Strict equality operator:
If the operands are of different types, return false.
If both operands are objects, return true only if they refer to the same object.
If both operands are null or both operands are undefined, return true.
If either operand is NaN, return false.
Otherwise, compare the two operand's values:
Numbers must have the same numeric values. +0 and -0 are considered to be the same value.
Strings must have the same characters in the same order.
Booleans must be both true or both false.