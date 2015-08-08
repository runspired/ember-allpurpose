import iterate from './iterate';

export default function merge(A, B) {
  if (!A || Object.prototype.toString.call(B) !== '[object Object]') {
    return B;
  }
  if (Object.prototype.toString.call(A) !== '[object Object]') {
    return B;
  }

  iterate(Object.keys(B), function(key) {
    if (A.hasOwnProperty(key)) {
      A[key] = merge(A[key], B[key]);
    } else {
      A[key] = B[key];
    }
  });
  return A;
}
