DOCUMENTAÇÃO :

Conversor de números romanos para inteiros e vice-versa v.1.0.0
Esta biblioteca se destina à conversao de inteiros para romanos e vice-versa, para uso em aplicações web. Na versão atual é capaz de retornar 'V' para imput (5) ,por exemplo, e retornar 10 para imput ('X')

Os métodos utilizados na biblioteca são:
intToRoman (num);
romanToInt('romans')

Exemplo de uso:

$node

> intToRoman(5); // "V"
> romanToInt('V') // 5

versão 1.0.0
funcionalidades: conversão dos números romanos para inteiros e vice-versa

instalação
você deverá ter o node + npm instalados. Para guia de instalação, visite o site oficial.
proceda com a instalação com $npm install c
onversor-romanos-lib-asg
roadmap oficial do projeto
versão 2.0.0 (released)
Retornar mensagem de erro quando o numero do imput for maior que 4999 ou quando o input não corresponder a um número romano.
retornar mensagem de erro quando não for digitado nenhum número para verificação;

versão 3.0.0 (sem previsão ainda, aceita-se sugestões de melhorias através do contato gomesandreia27@outlook.com)

versão 1.0.0 (released) e versão 2.0.0 (released)
funcionalidades: conversão de números inteiros para romanos e vice-versa;

As regras para criação dos números romanos;

Um número maior à frente de um número menor significa subtração. A adição é caracterizada por um número menor à frente de um número maior. Por exemplo, IV significa 4, VI significa 6.

Não se utiliza mais de um número menor antes de um número maior para subtrair. Por exemplo, IIV não corresponde a 3.

Devem separar-se, dezenas, centenas, e milhares como numerais separados. Isso significa que a 99 corresponde XCIX (90 + 9), nunca deve ser escrito como IC. Similarmente, 999 não pode ser IM e 1999 não pode ser MIM.

I	Corresponde ao numeral 1. II são dois, III são três, IV são 4 (ocasionalmente pode ver-se IIII como 4)
V	Corresponde ao numeral 5. IV são 4, VI são 6, VII são 7, VIII são 8.
X	Corresponde ao numeral 10. IX são 9, XI é 11, etc..
L	Corresponde ao numeral 50. XL é o 40.
C	Corresponde ao numeral 100. C tem origem na palavra latina Centum.
D	Corresponde ao numeral 500.
M 	Corresponde ao numeral 1000.
Uma linha sobre um numeral significa multiplicá-lo por 1000. O numeral V com uma linha sobre o símbolo significa 5000.
