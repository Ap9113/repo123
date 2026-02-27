package com.amazonclone.dto;

import lombok.Data;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

@Data
public class ProductDto {
    @NotBlank
    private String name;
    private String description;
    @NotNull
    private BigDecimal price;
    private String imageUrl;
}
