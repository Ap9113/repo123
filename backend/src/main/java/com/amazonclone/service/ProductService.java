package com.amazonclone.service;

import com.amazonclone.dto.ProductDto;
import com.amazonclone.exception.ResourceNotFoundException;
import com.amazonclone.model.Product;
import com.amazonclone.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> listAll() {
        return productRepository.findAll();
    }

    public Product getById(Long id) {
        return productRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Product not found"));
    }

    public Product create(ProductDto dto) {
        Product p = new Product();
        p.setName(dto.getName());
        p.setDescription(dto.getDescription());
        p.setPrice(dto.getPrice());
        p.setImageUrl(dto.getImageUrl());
        return productRepository.save(p);
    }

    public void delete(Long id) {
        productRepository.deleteById(id);
    }
}
