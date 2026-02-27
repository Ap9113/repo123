package com.amazonclone.service;

import com.amazonclone.exception.ResourceNotFoundException;
import com.amazonclone.model.CartItem;
import com.amazonclone.model.Product;
import com.amazonclone.model.User;
import com.amazonclone.repository.CartItemRepository;
import com.amazonclone.repository.ProductRepository;
import com.amazonclone.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CartService {

    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;

    private User getCurrentUser() {
        UserDetails ud = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return userRepository.findByUsername(ud.getUsername())
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
    }

    public List<CartItem> listContents() {
        return cartItemRepository.findByUser(getCurrentUser());
    }

    public CartItem addItem(Long productId, int qty) {
        User user = getCurrentUser();
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));
        CartItem item = new CartItem(null, user, product, qty);
        return cartItemRepository.save(item);
    }

    public void removeItem(Long productId) {
        User user = getCurrentUser();
        cartItemRepository.deleteByUserAndProduct_Id(user, productId);
    }
}
