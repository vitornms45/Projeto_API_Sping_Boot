package com.github.vitornms45.produtosapi.controller;

import com.github.vitornms45.produtosapi.model.entity.Product;
import com.github.vitornms45.produtosapi.repository.entity.ProdutoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.UUID;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("produtos")
public class ProdutoController {

    private ProdutoRepository produtoRepository;

    public ProdutoController(ProdutoRepository produtoRepository) {
        this.produtoRepository = produtoRepository;
    }

    @GetMapping
    public List<Product> listarTodos() {
        return produtoRepository.findAll();
    }

    @PostMapping()
    public Product salvar(@RequestBody Product produto) {
        System.out.println("Salvando produto: " + produto);
        UUID uuid = UUID.randomUUID();
        produto.setId(uuid.toString());
        produtoRepository.save(produto);
        return produto;
    }

    @GetMapping("/{id}")
    public Product buscarPorId(@PathVariable String id) {
    //    Optional<Product> product = produtoRepository.findById(id);
    //    return product.isPresent() ? product.get() : null;
        return produtoRepository.findById(id).orElse(null);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable("id") String id) {
        produtoRepository.deleteById(id);
    }
}
