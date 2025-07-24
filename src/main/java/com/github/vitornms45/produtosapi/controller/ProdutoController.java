package com.github.vitornms45.produtosapi.controller;

import com.github.vitornms45.produtosapi.model.entity.Product;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("produtos")
public class ProdutoController {

    @PostMapping("")
    public Product salvar(@RequestBody Product produto) {
        System.out.println("Salvando produto: " + produto);
        return produto;
    }
}
