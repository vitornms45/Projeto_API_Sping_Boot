Segue um exemplo de documentação para sua API, considerando os campos atuais (`name`, `description`, `id`, `price`, `imageUrl`). Salve como `README.md` na raiz do projeto.

```markdown
# Produtos API

API REST para gerenciamento de produtos.

## Tecnologias

- Java
- Spring Boot
- Maven
- SQL

## Endpoints

### Criar Produto

- **POST** `/produtos`
- **Body**:
  ```json
  {
    "name": "Produto Exemplo",
    "description": "Descrição do produto",
    "price": 99.99,
    "imageUrl": "https://exemplo.com/imagem.jpg"
  }
  ```
- **Resposta**:
  ```json
  {
    "id": "uuid-gerado",
    "name": "Produto Exemplo",
    "description": "Descrição do produto",
    "price": 99.99,
    "imageUrl": "https://exemplo.com/imagem.jpg"
  }
  ```

### Buscar Produto por ID

- **GET** `/produtos/{id}`
- **Resposta**:
  ```json
  {
    "id": "uuid-gerado",
    "name": "Produto Exemplo",
    "description": "Descrição do produto",
    "price": 99.99,
    "imageUrl": "https://exemplo.com/imagem.jpg"
  }
  ```

### Deletar Produto

- **DELETE** `/produtos/{id}`
- **Resposta**: `204 No Content`

## Como rodar

1. Clone o projeto
2. Execute `mvn spring-boot:run`
3. Acesse `http://localhost:8080/produtos`

## Estrutura

- `controller/ProdutoController.java`: Endpoints REST
- `model/entity/Product.java`: Entidade Produto
- `repository/entity/ProdutoRepository.java`: Interface de acesso ao banco

## Observações

- O ID do produto é gerado automaticamente como UUID.
- Campos do produto: name, description, price, imageUrl.
