/*Objective
At this checkpoint, you are demanded to write an algorithm that fulfill the following: 

Name: Dot product
Description:
Write a procedure, called dot_product which calculates in the variable ps, the dot(scalar) product of v1 and v2 (v1 and v2 are vectors of IR)
Write an algorithm which determines, for n pairs of given vectors, whether two vectors of given IR are orthogonal, by calling the procedure defined in the previous question. The dot product of two orthogonal vectors is zero.
Modify the previous algorithm if you use a dot_product function instead of a procedure.


Instructions
While creating your algorithm, you should: 

Use array for presenting the vector.
Use nested loop (a loop inside another)
Use different types of passing parameters */

let vectors = [
  [7, 1, 1],
  [6, 0, 2],
  [5, 7, 0],
  [3, 1, 2],
  [2, 3, 8],
  [0, 0, 0],
];

function dotProduct(vector1, vector2) {
  let result = 0;
  for (let i = 0; i < vector1.length; i++) {
    result += vector1[i] * vector2[i];
  }
  return result;
}

for (let i = 0; i < vectors.length; i++) {
  for (let j = i + 1; j < vectors.length; j++) {
    if (dotProduct(vectors[i], vectors[j]) === 0) {
      console.log(`${vectors[i]} and ${vectors[j]} are orthogonal `);
    }
  }
}
