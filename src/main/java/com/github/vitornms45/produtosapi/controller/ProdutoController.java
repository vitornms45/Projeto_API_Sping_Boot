package com.github.vitornms45.produtosapi.controller;

import com.github.vitornms45.produtosapi.model.entity.Product;
import com.github.vitornms45.produtosapi.repository.entity.ProdutoRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("produtos")
public class ProdutoController {

    private ProdutoRepository produtoRepository;

    public ProdutoController(ProdutoRepository produtoRepository) {
        this.produtoRepository = produtoRepository;
    }

    @PostMapping("")
    public Product salvar(@RequestBody Product produto) {
        System.out.println("Salvando produto: " + produto);
        UUID uuid = UUID.randomUUID();
        produto.setId(uuid.toString());
        produtoRepository.save(produto);
        return produto;
    }
}
