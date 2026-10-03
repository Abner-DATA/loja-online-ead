# ADR 0001: Uso do Github Actions para Integração Continua

## Contexto
O projeto precisa rodar testes automaticamente a cada Pull Request.
Existem varias ferramentas de CI no mercado (Jenkins, CircleCI, Github Actions). 

## Decisão 
Vamos usar o Github Actions.

## Motivo
Já hospedamos o codigo no Github, então não é preciso integrar com outra plataforma.
é gratuito para repositorios públicos e a configuração fica no próprio repositorio, versionada junto com o código.

## Consequencias
Ficamos dependetes do ecossistema Github. Se um dia migramos de 
plataforma de hospedagem, o pipeline de CI precisará ser recirado.