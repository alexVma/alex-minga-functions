export class MisFunciones {
  concatenarStrings(str1: string, str2: string): string {
    return str1 + str2;
  }

  calcularPromedio(num1: number, num2: number, num3: number): number {
    return (num1 + num2 + num3) / 3;
  }

  verificarVocales(str: string): boolean {
    let vowels = "aeiou";
    for (let i = 0; i < str.length; i++) {
      if (vowels.indexOf(str[i]) !== -1) {
        return true;
      }
    }
    return false;
  }
}
