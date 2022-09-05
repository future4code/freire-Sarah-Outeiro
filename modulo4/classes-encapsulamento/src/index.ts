import express from 'express'
import 
/*
Exercício 1)
a) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?
Os construtores servem para inicializar classes criadas dentro de objetos. Eles permitem que a classe tenha seus recursos organizados.
O construtor pode ser chamado pela palavra "this" junto com o nome da classe.

b)
*/ 

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
  }