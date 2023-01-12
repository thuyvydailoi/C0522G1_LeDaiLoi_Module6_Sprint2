package com.codegym.repository.alcohol;

import com.codegym.model.product.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface IAlcoholRepository extends JpaRepository<Product, Integer> {
}
