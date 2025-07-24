package com.github.vitornms45.produtosapi.repository.entity;

import com.github.vitornms45.produtosapi.model.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository <Product, String> {
}
