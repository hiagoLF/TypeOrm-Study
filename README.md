# Repositório criado para estudos sobre TypeOrm

```shell
# Contruir banco de dados postgres dentro do docker
docker run --name postgres -e POSTGRES_PASSWORD=docker123 -p 5432:5432 -d postgres

# Gerar uma nova migration
npm run typeorm migration:create -- -n createClass

# Gerar uma nova entidade (model)
npx typeorm entity:create -n Class

# Gerar migrations automaticamente conforme as entities disponíveis
npm run typeorm migration:generate -- -n CreateTables

# Limpar o cache do banco caso esteja disponível
npm run typeorm cache:clear
```

* ormconfig.json pode ser substituído por ormconfig.js e dessa forma será possível inserir variáveis de ambiente dentro de ormconfig.js

* Comandos pre e post: Executados antes de algum comando. Não é necessário Executar eles manualmente. predev e postdev, por exemplo, serão executados sempre que o comando dev for executado. Aqui nesse projeto é aproveitado para rodar as migrations, coisa bastante útil quando o projeto for para a produção.
