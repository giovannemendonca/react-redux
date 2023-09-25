# Gerenciamento de Estado com Redux e Zustand

Este projeto exemplifica duas abordagens de gerenciamento de estado em aplicativos React: Redux (branch "main") e Zustand (branch "develop"). Cada uma destas bibliotecas oferece uma maneira diferente de abordar o gerenciamento de estado, com vantagens específicas.

## Branch "main" - Redux

Nesta branch, você encontrará uma implementação do gerenciamento de estado usando o Redux. O Redux é amplamente conhecido por sua escalabilidade e é uma escolha sólida para aplicativos complexos. Destaques incluem:

- Arquitetura Redux convencional com a definição de ações, um reducer e a criação da store Redux.
- Utilização do `useSelector` e `useDispatch` para conectar componentes ao estado global do Redux.
- Demonstração de ações de incremento e decremento em um contador.

## Branch "develop" - Zustand

Nesta branch, apresentamos uma alternativa usando o Zustand. O Zustand é conhecido por sua simplicidade e é especialmente útil para projetos menores a médios. Principais aspectos:

- Criação de uma store Zustand com uma API minimalista para gerenciar o estado.
- Simplicidade do Zustand, com menos boilerplate e configuração necessária.
- Uso do hook `useStore` para acessar e modificar o estado.

### Como Usar

- Clone o repositório e acesse a branch desejada usando `git checkout [branch]`.
- Siga as instruções específicas de cada branch no seu README para executar os exemplos.

Esperamos que este projeto ajude a entender melhor como essas bibliotecas funcionam e como aplicá-las no desenvolvimento React.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou relatar problemas. Aceitamos contribuições via pull requests.

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.

