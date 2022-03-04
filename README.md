# React Native template

-   Este é um template inicial para desenvolvimento de aplicativo com react native.
-   Contém libs externas auxiliadoras como:
    -- ![ React navigation ](https://reactnavigation.org/)
    -- ![ React Native Paper ](https://callstack.github.io/react-native-paper)
-   Conta com design intuitivo e extruturado:

``` bash
    .
    ├── src 					# pasta de recusrsos
    │   ├── assets				# Arquivos, fonts, imagens
	|	|	└── fonts			# fonts globais 
    │   ├── components			
	|	|	├── packages		# Componentes globais
	|	|   └── index.js		# Compartilha componentes globais da aplciação
    │   ├── http				# Módulo de requisições
    │   ├── navigator			# Navegadores / rotas
    │   ├── providers			# Provedores / Contexts
    │   ├── screens				# telas do app
	|	|	├── Home			# contexo página principal
	|	|   └── Authentication 	# contexto autenticação
    │   ├── store				# context API react
    │   ├── styles				# Atilização de todos os componentes do app
	|	|	├── modules			# Módulos de estilização
	|	|   └── index.js		# exporta modulos de estilização
	|   └── utils				# scripts utils globais
    ├── README.md
    ├── package.json
    ├── react-native-config.js
    ├── metro.config.js
    ├── babel.config.js
    ├── App.js
    ├── index.js
    └── .env					# variáveis de ambiente
```

# Requerimentos de ambiente

![Guia de instalação para desenvolmento react native ](https://reactnative.dev/docs/getting-started)
