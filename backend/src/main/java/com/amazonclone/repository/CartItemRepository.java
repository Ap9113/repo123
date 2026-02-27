package com.amazonclone.repository;

import com.amazonclone.model.CartItem;
import com.amazonclone.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    List<CartItem> findByUser(User user);
    void deleteByUserAndProduct_Id(User user, Long productId);
}
