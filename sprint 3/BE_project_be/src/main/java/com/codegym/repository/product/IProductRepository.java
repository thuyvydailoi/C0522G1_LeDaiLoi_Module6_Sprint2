package com.codegym.repository.product;

import com.codegym.dto.IProductDto;
import com.codegym.model.product.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface IProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "select id, name, is_delete, price, discount, manufacturer, image, product_type_id" +
            " from product " +
            "where name like %:nameSearch% and is_delete = 0 ",
            countQuery = "select count(*) from product  " +
                    "where name like %:nameSearch% and is_delete = 0 ",
            nativeQuery = true)
    Page<IProductDto> findAllProductAndSearch(@Param("nameSearch") String nameSearch, Pageable pageable);

    @Query(value = "select id, name, is_delete, price, discount, manufacturer, image, product_type_id" +
            " from product " +
            "where name like %:nameSearch% and product_type_id = :type and is_delete = 0 ",
            countQuery = "select count(*) from alcohol  " +
                    "where name like %:nameSearch% and product_type_id = :type and is_delete = 0 ",
            nativeQuery = true)
    Page<IProductDto> findAllAndProductByTypeAndSearch(@Param("nameSearch") String nameSearch,
                                                       @Param("type") int type,
                                                       Pageable pageable);
}
