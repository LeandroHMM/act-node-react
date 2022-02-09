/*
 * Declarando funções
 * Um triângulo é formado por três lados cada lado com uma medida.
 * Só irá existir um triângulo se, somente se, os seus lados obedeceram
 * à seguinte regra: um de seus lados deve ser maior que o valor absoluto (módulo)
 * da diferença dos outros dois lados e menor que a soma dos outros dois lados.
 *
 * Faça a declaração da função.
 * Troque "{}" pelo nome dado a função
 */

// code here

function isTriangle(a: number, b: number, c: number): boolean {
  const triangleA = Math.abs(b - c) < a && a < b + c;
  const triangleB = Math.abs(a - c) < b && b < a + c;
  const triangleC = Math.abs(a - b) < c && c < a + b;

  return triangleA;
  return triangleB;
  return triangleC;
}

export default isTriangle;
