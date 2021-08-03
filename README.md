# Repositório criado para estudos sobre TypeOrm

```shell
# Gerar uma nova migration
npm run typeorm migration:create -- -n createClass

# Gerar uma nova entidade (model)
npx typeorm entity:create -n Class

# Gerar migrations automaticamente conforme as entities disponíveis
npm run typeorm migration:generate -- -n CreateTables
```

* ormconfig.json pode ser substituído por ormconfig.js e dessa forma será possível inserir variáveis de ambiente dentro de ormconfig.js
