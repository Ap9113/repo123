package com.amazonclone.controller;

import com.amazonclone.model.CartItem;
import com.amazonclone.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping
    public List<CartItem> getCart() {
        return cartService.listContents();
    }

    @PostMapping("/add/{productId}")
    public CartItem addItem(@PathVariable Long productId, @RequestParam(defaultValue = "1") int qty) {
        return cartService.addItem(productId, qty);
    }

    @DeleteMapping("/remove/{productId}")
    public ResponseEntity<?> removeItem(@PathVariable Long productId) {
        cartService.removeItem(productId);
        return ResponseEntity.ok("Removed");
    }
}
