package com.codegym.repository.product;

import com.codegym.model.product.ProductType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IProductTypeRepository extends JpaRepository<ProductType, Integer> {
    @Query(value = "select id, name, is_delete" +
            " from product_type  where is_delete = 0", nativeQuery = true)
    List<ProductType> findAllProductType();
}
