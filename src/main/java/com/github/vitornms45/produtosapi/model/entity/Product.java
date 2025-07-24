package com.github.vitornms45.produtosapi.model.entity;

import jakarta.persistence.Entity;

//POJO -> Plain Old Java Object

public class Product {

    private String name;
    private String description;
    private String id;
    private Double price;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Product{" +
                "name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", id='" + id + '\'' +
                ", price=" + price +
                '}';
    }
}
