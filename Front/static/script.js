document.addEventListener('DOMContentLoaded', () => {

    // --- CONFIGURAÇÃO ---
    // Altere para a URL base da sua API
    const API_URL = 'http://localhost:8080/produtos'; 

    // --- ELEMENTOS DO DOM ---
    const productGrid = document.getElementById('product-grid');
    const addProductForm = document.getElementById('add-product-form');

    // --- FUNÇÕES DA API ---

    /**
     * Busca todos os produtos da API e os exibe na tela.
     */
    const fetchProducts = async () => {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error(`Erro na rede: ${response.statusText}`);
            }
            const products = await response.json();
            displayProducts(products);
        } catch (error) {
            console.error('Falha ao buscar produtos:', error);
            productGrid.innerHTML = '<p>Não foi possível carregar os produtos. Verifique se a API está rodando.</p>';
        }
    };

    /**
     * Envia um novo produto para a API.
     * @param {Event} event - O evento de submit do formulário.
     */
    const addProduct = async (event) => {
        event.preventDefault(); // Impede o recarregamento da página

        const formData = new FormData(addProductForm);
        const productData = {
            name: formData.get('name'),
            description: formData.get('description'),
            price: parseFloat(formData.get('price')),
            imageUrl: formData.get('imageUrl')
        };

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData),
            });

            if (!response.ok) {
                throw new Error('Falha ao adicionar produto');
            }

            addProductForm.reset(); // Limpa o formulário
            fetchProducts(); // Atualiza a lista de produtos

        } catch (error) {
            console.error('Erro ao adicionar produto:', error);
            alert('Não foi possível adicionar o produto.');
        }
    };

    /**
     * Deleta um produto da API com base no seu ID.
     * @param {string} id - O ID do produto a ser deletado.
     */
    const deleteProduct = async (id) => {
        if (!confirm('Tem certeza de que deseja deletar este produto?')) {
            return;
        }

        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                 // A resposta 204 No Content não tem corpo, mas é sucesso
                if (response.status !== 204) {
                    throw new Error('Falha ao deletar produto');
                }
            }

            fetchProducts(); // Atualiza a lista de produtos

        } catch (error) {
            console.error('Erro ao deletar produto:', error);
            alert('Não foi possível deletar o produto.');
        }
    };


    // --- FUNÇÕES DE RENDERIZAÇÃO ---

    /**
     * Renderiza os produtos na grade da página.
     * @param {Array} products - Um array de objetos de produto.
     */
    const displayProducts = (products) => {
        productGrid.innerHTML = ''; // Limpa a grade antes de adicionar novos itens

        if (!products || products.length === 0) {
            productGrid.innerHTML = '<p>Nenhum produto cadastrado.</p>';
            return;
        }

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.imageUrl}" alt="${product.name}" onerror="this.onerror=null;this.src='https://via.placeholder.com/300x200?text=Imagem+Inválida';">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="description">${product.description}</p>
                    <p class="price">${formatCurrency(product.price)}</p>
                    <button class="btn-delete" data-id="${product.id}">DELETAR</button>
                </div>
            `;
            productGrid.appendChild(productCard);
        });
    };

    /**
     * Formata um número para o padrão de moeda brasileiro (BRL).
     * @param {number} value - O valor a ser formatado.
     * @returns {string} - O valor formatado como moeda.
     */
    const formatCurrency = (value) => {
        return value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    };


    // --- EVENT LISTENERS ---

    // Adiciona evento de submit ao formulário
    addProductForm.addEventListener('submit', addProduct);

    // Usa delegação de eventos para os botões de deletar
    productGrid.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-delete')) {
            const productId = event.target.dataset.id;
            deleteProduct(productId);
        }
    });

    // --- INICIALIZAÇÃO ---
    fetchProducts();
});