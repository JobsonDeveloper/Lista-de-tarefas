### Lista de tarefas
[Veja o site](https://lista-de-tarefas-r6l2.vercel.app)

### Ferramentas utiliizadas:
[![My Skills](https://skillicons.dev/icons?i=html,ts,react,redux,styledcomponents,figma,git,vercel)](https://skillicons.dev)

### Lista completa:
HTML | TypeScript | React | Redux | React Hooks | React Router | Theme Provider | Styled-components | Prettier | ESLint | Editor Config | Figma | Git | Vercel | POO - Programação Orientada a Objetos

Este projeto foi criado para ajudar a solucionar um problema muito comum hoje em dia, o esquecimento.
Através deste site o usuário pode cadastrar um determinado serviço que precisa ser realizado, além de poder estabelecer um nível de prioridade par a atividade.
Ele também pode marcar a atividade como concluida, editar ou excluir ela.
Todos os procedimentos realizados são salvos no localStorage do navegador do usuário, desta forma, mesmo que o usuário feiche o navegador ou desligue o celular tudo que foi realizado vai permanecer salvo.
Os serviços cadastrados pelo usuário só serão expluidos caso o usuário exclua manualmente ou apague o armazenamento em cache do navegador.

Todo que é cadastrado pelo usuário é armazenado como um Array de Objetos no store do Redux e logo após é realizado o cadastro deste Array no localStorage do navegador.
Ao abrir o site é realizada a procura do Array no localStorage, este procedimento é realizado utilizando um Hook do React chamado UseEffect, então ao encontrar o Array o estado dos componentes relevantes é atualizado.

A troca de tema do site é realizado através do ThemeProvider, um recurso fornecido pelo Styled-components, onde é fornecido um objeto contendo as cores para o site, então os componentes utilizam estas cores fornecidas. Para trocas as cores apenas fornecemos um objeto contendo cores direfentes.

![image](https://github.com/user-attachments/assets/57147373-5715-420e-af45-c8d9b336ac70)
<br/>
<br/>
<br/>
<br/>
![image](https://github.com/user-attachments/assets/d1d47b1a-7d05-40a1-88ea-cf98371bdcd6)
